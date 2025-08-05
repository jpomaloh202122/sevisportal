import { supabase } from './supabase';

export const supabaseAuth = {
  // Sign up with Supabase Auth
  signUp: async (email: string, password: string, userData: {
    name: string;
    role: 'citizen' | 'admin' | 'staff';
  }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: userData.name,
            role: userData.role,
          }
        }
      });

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error };
    }
  },

  // Sign in with Supabase Auth
  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error };
    }
  },

  // Sign out
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return { success: false, error };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) {
        throw error;
      }

      return { success: true, user };
    } catch (error) {
      console.error('Get user error:', error);
      return { success: false, error };
    }
  },

  // Get session
  getSession: async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        throw error;
      }

      return { success: true, session };
    } catch (error) {
      console.error('Get session error:', error);
      return { success: false, error };
    }
  },

  // Listen to auth changes
  onAuthStateChange: (callback: (event: string, session: unknown) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  }
}; 