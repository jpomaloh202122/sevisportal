import { supabase } from './supabase';

export const supabaseUtils = {
  // Get user statistics
  getUserStats: async () => {
    try {
      const { data, error } = await supabase
        .from('user_stats')
        .select('*');

      if (error) {
        console.error('Error fetching user stats:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user stats:', error);
      return null;
    }
  },

  // Search users (admin only)
  searchUsers: async (searchTerm: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, email, name, role, created_at, last_login')
        .or(`email.ilike.%${searchTerm}%, name.ilike.%${searchTerm}%`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error searching users:', error);
        return [];
      }

      return data;
    } catch (error) {
      console.error('Error searching users:', error);
      return [];
    }
  },

  // Get user by ID (with proper error handling)
  getUserById: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  },

  // Update user profile
  updateUserProfile: async (userId: string, updates: {
    name?: string;
    email?: string;
    role?: 'citizen' | 'admin' | 'staff';
  }) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        console.error('Error updating user profile:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      return null;
    }
  },

  // Delete user (admin only)
  deleteUser: async (userId: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (error) {
        console.error('Error deleting user:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  },

  // Get recent activity (for dashboard)
  getRecentActivity: async (limit = 10) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, name, email, last_login, created_at')
        .not('last_login', 'is', null)
        .order('last_login', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching recent activity:', error);
        return [];
      }

      return data;
    } catch (error) {
      console.error('Error fetching recent activity:', error);
      return [];
    }
  },

  // Check if email exists
  checkEmailExists: async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking email:', error);
        return false;
      }

      return !!data;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  },

  // Get users by role
  getUsersByRole: async (role: 'citizen' | 'admin' | 'staff') => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, email, name, created_at, last_login')
        .eq('role', role)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching users by role:', error);
        return [];
      }

      return data;
    } catch (error) {
      console.error('Error fetching users by role:', error);
      return [];
    }
  },

  // Bulk operations (for admin)
  bulkUpdateUsers: async (userIds: string[], updates: Record<string, unknown>) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .in('id', userIds)
        .select();

      if (error) {
        console.error('Error bulk updating users:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error bulk updating users:', error);
      return null;
    }
  }
}; 