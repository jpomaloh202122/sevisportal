import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Find the verification token
    const verificationToken = await db.emailVerification.findByToken(token);

    if (!verificationToken) {
      return NextResponse.json(
        { error: 'Invalid verification token' },
        { status: 400 }
      );
    }

    // Check if token is expired
    if (verificationToken.expiresAt < new Date()) {
      return NextResponse.json(
        { error: 'Verification token has expired' },
        { status: 400 }
      );
    }

    // Check if token has already been used
    if (verificationToken.usedAt) {
      return NextResponse.json(
        { error: 'Verification token has already been used' },
        { status: 400 }
      );
    }

    // Get the user
    const user = await db.users.findById(verificationToken.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user is already verified
    if (user.emailVerified) {
      return NextResponse.json(
        { error: 'Email is already verified' },
        { status: 400 }
      );
    }

    // Mark token as used
    await db.emailVerification.markAsUsed(verificationToken.id);

    // Verify the user's email
    await db.users.verifyEmail(user.id);

    // Generate JWT token for automatic login
    const jwtToken = auth.generateToken(user);

    // Create response with user data
    const userResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      emailVerified: true,
      createdAt: user.createdAt,
    };

    return NextResponse.json({
      message: 'Email verified successfully',
      user: userResponse,
      token: jwtToken,
    });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Find the verification token
    const verificationToken = await db.emailVerification.findByToken(token);

    if (!verificationToken) {
      return NextResponse.json(
        { error: 'Invalid verification token' },
        { status: 400 }
      );
    }

    // Check if token is expired
    if (verificationToken.expiresAt < new Date()) {
      return NextResponse.json(
        { error: 'Verification token has expired' },
        { status: 400 }
      );
    }

    // Check if token has already been used
    if (verificationToken.usedAt) {
      return NextResponse.json(
        { error: 'Verification token has already been used' },
        { status: 400 }
      );
    }

    // Get the user
    const user = await db.users.findById(verificationToken.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user is already verified
    if (user.emailVerified) {
      return NextResponse.json(
        { error: 'Email is already verified' },
        { status: 400 }
      );
    }

    // Mark token as used
    await db.emailVerification.markAsUsed(verificationToken.id);

    // Verify the user's email
    await db.users.verifyEmail(user.id);

    // Generate JWT token for automatic login
    const authToken = auth.generateToken(user);

    // Create response with user data
    const userResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      emailVerified: true,
      createdAt: user.createdAt,
    };

    return NextResponse.json({
      message: 'Email verified successfully',
      user: userResponse,
      token: authToken,
    });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 