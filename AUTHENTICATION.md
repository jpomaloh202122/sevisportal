# SEVIS Portal Authentication System

## Overview

The SEVIS Portal now includes a complete authentication system with sign-in, sign-up, and sign-out functionality. The system uses JWT tokens for secure authentication and includes role-based access control.

## Features

### 🔐 Authentication Features
- **User Registration**: New users can create accounts with email, password, and role selection
- **User Login**: Secure login with email and password
- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: Passwords are securely hashed using bcrypt
- **Role-Based Access**: Support for citizen, staff, and admin roles
- **Session Management**: Automatic token validation and session persistence
- **User Dashboard**: Personalized dashboard for authenticated users

### 🛡️ Security Features
- Password strength validation (minimum 8 characters)
- Email format validation
- Secure password hashing with bcrypt
- JWT token expiration (7 days)
- Protected API routes
- Input validation and sanitization

## Demo Accounts

For testing purposes, the following demo accounts are pre-configured:

### Admin Account
- **Email**: `admin@sevis.gov`
- **Password**: `password123`
- **Role**: Administrator

### Citizen Account
- **Email**: `citizen@example.com`
- **Password**: `password123`
- **Role**: Citizen

## API Endpoints

### Authentication APIs

#### POST `/api/auth/signin`
Sign in with email and password
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST `/api/auth/signup`
Create a new user account
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "John Doe",
  "role": "citizen"
}
```

#### GET `/api/auth/me`
Get current user information (requires authentication token)

## Database Structure

### User Model
```typescript
interface User {
  id: string;
  email: string;
  password: string; // Hashed
  name: string;
  role: 'citizen' | 'admin' | 'staff';
  createdAt: Date;
  lastLogin?: Date;
}
```

## Components

### Authentication Components
- `SignInModal`: Modal for user login
- `SignUpModal`: Modal for user registration
- `UserDashboard`: Dashboard showing user information and activity
- `AuthProvider`: React context provider for authentication state

### Updated Components
- `Header`: Now includes authentication status and user menu
- `Layout`: Wrapped with AuthProvider for global auth state

## Usage

### Sign In
1. Click the "Sign In" button in the header
2. Enter your email and password
3. Click "Sign In" to authenticate

### Sign Up
1. Click "Sign Up" from the sign-in modal
2. Fill in your details (name, email, password, role)
3. Click "Sign Up" to create your account

### Sign Out
1. Click on your name in the header
2. Click "Sign Out" from the dropdown menu

## Technical Implementation

### Backend
- **Database**: Supabase PostgreSQL with Row Level Security (RLS)
- **Authentication**: JWT tokens with bcrypt password hashing
- **API Routes**: Next.js API routes for authentication endpoints
- **Validation**: Input validation and error handling
- **Security**: Row Level Security policies for data protection

### Frontend
- **State Management**: React Context for authentication state
- **Token Storage**: LocalStorage for JWT token persistence
- **UI Components**: Modal-based authentication forms
- **Protected Routes**: Conditional rendering based on auth status

## Security Considerations

### Production Deployment
1. **Database**: Supabase PostgreSQL with Row Level Security (RLS) enabled
2. **Environment Variables**: Set `JWT_SECRET` and Supabase environment variables
3. **HTTPS**: Supabase provides HTTPS by default
4. **Rate Limiting**: Implement rate limiting for authentication endpoints
5. **Password Policy**: Enforce stronger password requirements
6. **Session Management**: Implement proper session management
7. **Audit Logging**: Add authentication event logging
8. **Row Level Security**: Configure RLS policies for data protection

### Security Best Practices
- Passwords are hashed using bcrypt with salt rounds of 12
- JWT tokens expire after 7 days
- Input validation on all authentication endpoints
- Error messages don't reveal sensitive information
- Tokens are stored securely in localStorage

## Future Enhancements

- [ ] Email verification for new accounts
- [ ] Password reset functionality
- [ ] Two-factor authentication (2FA)
- [ ] Social login integration
- [ ] Account lockout after failed attempts
- [ ] Session timeout and auto-logout
- [ ] User profile management
- [ ] Admin user management interface
- [ ] Real-time notifications using Supabase subscriptions
- [ ] File storage using Supabase Storage
- [ ] Database backups and monitoring
- [ ] Advanced analytics and reporting 