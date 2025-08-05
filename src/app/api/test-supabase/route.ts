import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Test 1: Basic connection test
    const { data: connectionTest, error: connectionError } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    if (connectionError) {
      return NextResponse.json({
        success: false,
        error: 'Connection failed',
        details: connectionError.message
      }, { status: 500 });
    }

    // Test 2: Check if tables exist
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, email, name, role')
      .limit(5);

    if (usersError) {
      return NextResponse.json({
        success: false,
        error: 'Users table access failed',
        details: usersError.message
      }, { status: 500 });
    }

    // Test 3: Check auth_users table
    const { data: authUsers, error: authError } = await supabase
      .from('auth_users')
      .select('id, email, user_id')
      .limit(5);

    if (authError) {
      return NextResponse.json({
        success: false,
        error: 'Auth users table access failed',
        details: authError.message
      }, { status: 500 });
    }

    // Test 4: Check user_stats view
    const { data: stats, error: statsError } = await supabase
      .from('user_stats')
      .select('*');

    return NextResponse.json({
      success: true,
      message: 'Supabase connection successful!',
      data: {
        connection: '✅ Connected',
        usersTable: users ? `✅ Found ${users.length} users` : '❌ No users found',
        authUsersTable: authUsers ? `✅ Found ${authUsers.length} auth records` : '❌ No auth records found',
        userStatsView: stats ? `✅ Stats view accessible` : '❌ Stats view not accessible',
        sampleUsers: users?.slice(0, 3) || [],
        sampleAuthUsers: authUsers?.slice(0, 3) || [],
        stats: stats || []
      }
    });

  } catch (error) {
    console.error('Supabase test error:', error);
    return NextResponse.json({
      success: false,
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 