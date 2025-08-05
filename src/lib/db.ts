import { supabase } from './supabase';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'citizen' | 'admin' | 'staff';
  createdAt: Date;
  lastLogin?: Date;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  role: 'citizen' | 'admin' | 'staff';
  createdAt: Date;
  lastLogin?: Date;
}

export const db = {
  // User operations
  users: {
    findByEmail: async (email: string): Promise<User | null> => {
      try {
        // First get the user from the users table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('email', email)
          .single();

        if (userError || !userData) {
          return null;
        }

        // Then get the password from auth_users table
        const { data: authData, error: authError } = await supabase
          .from('auth_users')
          .select('encrypted_password')
          .eq('user_id', userData.id)
          .single();

        if (authError || !authData) {
          return null;
        }

        return {
          id: userData.id,
          email: userData.email,
          password: authData.encrypted_password,
          name: userData.name,
          role: userData.role,
          createdAt: new Date(userData.created_at),
          lastLogin: userData.last_login ? new Date(userData.last_login) : undefined,
        };
      } catch (error) {
        console.error('Error finding user by email:', error);
        return null;
      }
    },
    
    findById: async (id: string): Promise<User | null> => {
      try {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', id)
          .single();

        if (userError || !userData) {
          return null;
        }

        const { data: authData, error: authError } = await supabase
          .from('auth_users')
          .select('encrypted_password')
          .eq('user_id', userData.id)
          .single();

        if (authError || !authData) {
          return null;
        }

        return {
          id: userData.id,
          email: userData.email,
          password: authData.encrypted_password,
          name: userData.name,
          role: userData.role,
          createdAt: new Date(userData.created_at),
          lastLogin: userData.last_login ? new Date(userData.last_login) : undefined,
        };
      } catch (error) {
        console.error('Error finding user by id:', error);
        return null;
      }
    },
    
    create: async (userData: Omit<User, 'id' | 'createdAt' | 'emailVerified' | 'emailVerifiedAt'>): Promise<User> => {
      try {
        const userId = crypto.randomUUID();
        const now = new Date().toISOString();

        // Insert into users table
        const { error: userError } = await supabase
          .from('users')
          .insert({
            id: userId,
            email: userData.email,
            name: userData.name,
            role: userData.role,
            email_verified: false,
            created_at: now,
          })
          .select()
          .single();

        if (userError) {
          throw new Error(`Failed to create user: ${userError.message}`);
        }

        // Insert into auth_users table
        const { error: authError } = await supabase
          .from('auth_users')
          .insert({
            email: userData.email,
            encrypted_password: userData.password,
            user_id: userId,
          });

        if (authError) {
          // Clean up the user if auth insert fails
          await supabase.from('users').delete().eq('id', userId);
          throw new Error(`Failed to create auth record: ${authError.message}`);
        }

        return {
          id: userId,
          email: userData.email,
          password: userData.password,
          name: userData.name,
          role: userData.role,

          createdAt: new Date(now),
        };
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    },
    
    updateLastLogin: async (id: string): Promise<void> => {
      try {
        const { error } = await supabase
          .from('users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', id);

        if (error) {
          console.error('Error updating last login:', error);
        }
      } catch (error) {
        console.error('Error updating last login:', error);
      }
    },


    
    getAll: async (): Promise<UserResponse[]> => {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error getting all users:', error);
          return [];
        }

        return data.map(user => ({
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,

          createdAt: new Date(user.created_at),
          lastLogin: user.last_login ? new Date(user.last_login) : undefined,
        }));
      } catch (error) {
        console.error('Error getting all users:', error);
        return [];
      }
    }
  },

}; 