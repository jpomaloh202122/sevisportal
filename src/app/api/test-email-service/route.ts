import { NextResponse } from 'next/server';
import { emailService } from '@/lib/email';

export async function GET() {
  try {
    // Test email service connection
    const isConnected = await emailService.testConnection();

    if (isConnected) {
      return NextResponse.json({
        success: true,
        message: 'Email service is ready',
        mode: process.env.NODE_ENV === 'production' ? 'SMTP' : 'Mock'
      });
    } else {
      return NextResponse.json({
        success: false,
        error: 'Email service connection failed'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Email service test error:', error);
    return NextResponse.json({
      success: false,
      error: 'Email service test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 