# Supabase Setup Guide for SEVIS Portal

## Overview

This guide will help you set up Supabase as the backend database for your SEVIS Portal application. Supabase provides a PostgreSQL database with real-time features, authentication, and a great developer experience.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `sevis-portal` (or your preferred name)
   - **Database Password**: Choose a strong password
   - **Region**: Select the region closest to your users
5. Click "Create new project"
6. Wait for the project to be created (this may take a few minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (starts with `eyJ`)

## Step 3: Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
JWT_SECRET=your_jwt_secret_key_here
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
JWT_SECRET=my-super-secret-jwt-key-change-this-in-production
```

## Step 4: Set Up the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" to execute the schema

This will create:
- `users` table for user information
- `auth_users` table for password storage
- Indexes for better performance
- Row Level Security (RLS) policies
- Demo users for testing

## Step 5: Configure Row Level Security

The schema includes RLS policies, but you may need to adjust them based on your needs:

### Current Policies:
- Users can view their own data
- Admins can view all users
- Users can update their own data
- Auth data is restricted to the user's own records

### To modify policies:
1. Go to **Authentication** → **Policies**
2. Click on the table you want to modify
3. Add, edit, or remove policies as needed

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the authentication:
   - Try signing up with a new account
   - Try signing in with the demo accounts:
     - **Admin**: `admin@sevis.gov` / `password123`
     - **Citizen**: `citizen@example.com` / `password123`

## Step 7: Verify Database Operations

1. In your Supabase dashboard, go to **Table Editor**
2. Check the `users` and `auth_users` tables
3. Verify that new users are being created when you sign up

## Database Schema Details

### Users Table
```sql
users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    role VARCHAR(50),
    created_at TIMESTAMP,
    last_login TIMESTAMP,
    updated_at TIMESTAMP
)
```

### Auth Users Table
```sql
auth_users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    encrypted_password VARCHAR(255),
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMP
)
```

## Security Features

### Row Level Security (RLS)
- Users can only access their own data
- Admins have broader access
- Password data is highly restricted

### Password Security
- Passwords are hashed using bcrypt with 12 salt rounds
- Passwords are stored separately from user data
- JWT tokens expire after 7 days

### API Security
- Input validation on all endpoints
- Error messages don't reveal sensitive information
- CORS protection through Supabase

## Production Considerations

### Environment Variables
1. Use different environment variables for production
2. Set `JWT_SECRET` to a strong, unique value
3. Consider using Supabase's built-in auth instead of custom JWT

### Database Optimization
1. Monitor query performance in Supabase dashboard
2. Add indexes for frequently queried columns
3. Consider using Supabase's real-time features

### Security Hardening
1. Review and adjust RLS policies
2. Enable Supabase's built-in security features
3. Set up proper CORS policies
4. Consider using Supabase Auth instead of custom auth

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check that `.env.local` exists and has correct values
   - Restart your development server

2. **"Invalid credentials"**
   - Verify the demo users were created in the database
   - Check that the password hash is correct

3. **"Permission denied"**
   - Check RLS policies in Supabase dashboard
   - Verify API key permissions

4. **"Connection failed"**
   - Check your internet connection
   - Verify the Supabase URL is correct
   - Check if Supabase is experiencing downtime

### Debugging

1. **Check Supabase Logs**:
   - Go to **Logs** in your Supabase dashboard
   - Look for errors in the API logs

2. **Check Network Tab**:
   - Open browser developer tools
   - Look for failed API requests

3. **Check Console Logs**:
   - Look for JavaScript errors in the browser console

## Next Steps

1. **Add Real-time Features**: Use Supabase's real-time subscriptions
2. **File Storage**: Use Supabase Storage for file uploads
3. **Email Verification**: Implement email verification using Supabase Auth
4. **Social Login**: Add OAuth providers through Supabase
5. **Backup Strategy**: Set up automated database backups
6. **Monitoring**: Set up alerts and monitoring for your database

## Support

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Community](https://github.com/supabase/supabase/discussions)
- [Supabase Discord](https://discord.supabase.com) 