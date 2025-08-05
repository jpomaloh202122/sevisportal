import { supabase } from './supabase';
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'citizen' | 'admin' | 'staff';
  emailVerified: boolean;
  emailVerifiedAt?: Date;
  createdAt: Date;
  lastLogin?: Date;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  role: 'citizen' | 'admin' | 'staff';
  emailVerified: boolean;
  emailVerifiedAt?: Date;
  createdAt: Date;
  lastLogin?: Date;
}

export interface EmailVerificationToken {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  usedAt?: Date;
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
          emailVerified: userData.email_verified || false,
          emailVerifiedAt: userData.email_verified_at ? new Date(userData.email_verified_at) : undefined,
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
          emailVerified: userData.email_verified || false,
          emailVerifiedAt: userData.email_verified_at ? new Date(userData.email_verified_at) : undefined,
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
        const { data: userInsertData, error: userError } = await supabase
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
          emailVerified: false,
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

    verifyEmail: async (id: string): Promise<void> => {
      try {
        const { error } = await supabase
          .from('users')
          .update({ 
            email_verified: true,
            email_verified_at: new Date().toISOString()
          })
          .eq('id', id);

        if (error) {
          console.error('Error verifying email:', error);
          throw error;
        }
      } catch (error) {
        console.error('Error verifying email:', error);
        throw error;
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
          emailVerified: user.email_verified || false,
          emailVerifiedAt: user.email_verified_at ? new Date(user.email_verified_at) : undefined,
          createdAt: new Date(user.created_at),
          lastLogin: user.last_login ? new Date(user.last_login) : undefined,
        }));
      } catch (error) {
        console.error('Error getting all users:', error);
        return [];
      }
    }
  },

  // Email verification operations
  emailVerification: {
    createToken: async (userId: string, token: string, expiresAt: Date): Promise<void> => {
      try {
        const { error } = await supabase
          .from('email_verification_tokens')
          .insert({
            user_id: userId,
            token: token,
            expires_at: expiresAt.toISOString(),
          });

        if (error) {
          console.error('Error creating verification token:', error);
          throw error;
        }
      } catch (error) {
        console.error('Error creating verification token:', error);
        throw error;
      }
    },

    findByToken: async (token: string): Promise<EmailVerificationToken | null> => {
      try {
        const { data, error } = await supabase
          .from('email_verification_tokens')
          .select('*')
          .eq('token', token)
          .single();

        if (error || !data) {
          return null;
        }

        return {
          id: data.id,
          userId: data.user_id,
          token: data.token,
          expiresAt: new Date(data.expires_at),
          createdAt: new Date(data.created_at),
          usedAt: data.used_at ? new Date(data.used_at) : undefined,
        };
      } catch (error) {
        console.error('Error finding verification token:', error);
        return null;
      }
    },

    markAsUsed: async (tokenId: string): Promise<void> => {
      try {
        const { error } = await supabase
          .from('email_verification_tokens')
          .update({ used_at: new Date().toISOString() })
          .eq('id', tokenId);

        if (error) {
          console.error('Error marking token as used:', error);
          throw error;
        }
      } catch (error) {
        console.error('Error marking token as used:', error);
        throw error;
      }
    },

    cleanupExpired: async (): Promise<void> => {
      try {
        const { error } = await supabase
          .rpc('cleanup_expired_verification_tokens');

        if (error) {
          console.error('Error cleaning up expired tokens:', error);
        }
      } catch (error) {
        console.error('Error cleaning up expired tokens:', error);
      }
    }
  }
}; 