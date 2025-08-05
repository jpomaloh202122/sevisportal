import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'citizen' | 'admin' | 'staff';
          created_at: string;
          last_login?: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role?: 'citizen' | 'admin' | 'staff';
          created_at?: string;
          last_login?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'citizen' | 'admin' | 'staff';
          created_at?: string;
          last_login?: string;
        };
      };
      auth_users: {
        Row: {
          id: string;
          email: string;
          encrypted_password: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          email: string;
          encrypted_password: string;
          user_id: string;
        };
        Update: {
          id?: string;
          email?: string;
          encrypted_password?: string;
          user_id?: string;
        };
      };
    };
  };
} 