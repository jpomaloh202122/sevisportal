import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export const auth = {
  // Hash password
  hashPassword: async (password: string): Promise<string> => {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
  },

  // Compare password
  comparePassword: async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
  },

  // Generate JWT token
  generateToken: (user: User): string => {
    const payload: JWTPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  },

  // Verify JWT token
  verifyToken: (token: string): JWTPayload | null => {
    try {
      return jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch (error) {
      return null;
    }
  },

  // Extract token from Authorization header
  extractToken: (authHeader: string | undefined): string | null => {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.substring(7);
  }
}; 