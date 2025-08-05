import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/auth';
import { emailService } from '@/lib/email';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, role = 'citizen' } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db.users.findByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await auth.hashPassword(password);

    // Create new user (unverified)
    const newUser = await db.users.create({
      email,
      password: hashedPassword,
      name,
      role: role as 'citizen' | 'admin' | 'staff',
    });

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store verification token
    await db.emailVerification.createToken(newUser.id, verificationToken, expiresAt);

    // Send verification email
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const verificationUrl = `${baseUrl}/verify-email?token=${verificationToken}`;

    const emailSent = await emailService.sendVerificationEmail({
      email: newUser.email,
      name: newUser.name,
      verificationUrl,
      token: verificationToken,
    });

    if (!emailSent) {
      console.error('Failed to send verification email');
      // Don't fail the signup, but log the error
    }

    // Create response with user data (excluding password)
    const userResponse = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      emailVerified: newUser.emailVerified,
      createdAt: newUser.createdAt,
    };

    return NextResponse.json({
      message: 'Account created successfully. Please check your email to verify your account.',
      user: userResponse,
      requiresVerification: true,
    }, { status: 201 });

  } catch (error) {
    console.error('Sign up error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 