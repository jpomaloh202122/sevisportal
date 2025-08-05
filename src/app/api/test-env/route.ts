import { NextResponse } from 'next/server';

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const jwtSecret = process.env.JWT_SECRET;

  const missingVars = [];
  
  if (!supabaseUrl) missingVars.push('NEXT_PUBLIC_SUPABASE_URL');
  if (!supabaseAnonKey) missingVars.push('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  if (!jwtSecret) missingVars.push('JWT_SECRET');

  return NextResponse.json({
    success: missingVars.length === 0,
    environment: {
      supabaseUrl: supabaseUrl ? '✅ Set' : '❌ Missing',
      supabaseAnonKey: supabaseAnonKey ? '✅ Set' : '❌ Missing',
      jwtSecret: jwtSecret ? '✅ Set' : '❌ Missing',
    },
    missingVariables: missingVars,
    supabaseUrlPreview: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'Not set',
    supabaseKeyPreview: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'Not set',
    jwtSecretPreview: jwtSecret ? `${jwtSecret.substring(0, 20)}...` : 'Not set'
  });
} 