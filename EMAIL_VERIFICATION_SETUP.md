# Email Verification Setup Guide

This guide explains how to set up email verification for the SEVIS Portal application.

## Overview

The email verification system ensures that users verify their email addresses before they can access the application. This adds an extra layer of security and helps maintain data integrity.

## Features

- ✅ **Email verification on signup** - Users must verify their email before signing in
- ✅ **Verification tokens** - Secure, time-limited tokens for email verification
- ✅ **Resend functionality** - Users can request new verification emails
- ✅ **Automatic login** - Users are automatically signed in after verification
- ✅ **Mock email service** - For development/testing without real email setup
- ✅ **Production email service** - Configurable SMTP for production use

## Database Schema

The system uses the following database tables:

### Users Table
```sql
-- Added email verification fields
email_verified BOOLEAN DEFAULT FALSE
email_verified_at TIMESTAMP WITH TIME ZONE
```

### Email Verification Tokens Table
```sql
CREATE TABLE email_verification_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    used_at TIMESTAMP WITH TIME ZONE
);
```

## API Endpoints

### 1. Sign Up (Modified)
**POST** `/api/auth/signup`

- Creates user with `email_verified: false`
- Generates verification token
- Sends verification email
- Returns success without JWT token

### 2. Email Verification
**POST** `/api/auth/verify-email`
**GET** `/api/auth/verify-email?token=<token>`

- Validates verification token
- Marks user as verified
- Returns JWT token for automatic login

### 3. Resend Verification
**POST** `/api/auth/resend-verification`

- Generates new verification token
- Sends new verification email

### 4. Sign In (Modified)
**POST** `/api/auth/signin`

- Checks if email is verified
- Returns error if email not verified
- Includes `requiresVerification` flag in response

## Frontend Components

### 1. SignUpModal
- Shows verification message after successful signup
- Displays email address for confirmation
- Provides link to sign in page

### 2. SignInModal
- Handles email verification errors
- Shows resend verification option
- Provides clear error messages

### 3. VerifyEmailPage
- Handles verification token from URL
- Shows verification status
- Provides resend functionality
- Automatic redirect after verification

## Email Configuration

### Development (Mock Email Service)
In development, emails are logged to the console instead of being sent:

```
📧 Mock Email Verification Sent:
To: user@example.com
Name: John Doe
Verification URL: http://localhost:3000/verify-email?token=abc123
Token: abc123
---
```

### Production (SMTP Email Service)
For production, configure SMTP settings in your `.env.local`:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@sevis.gov
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password as `SMTP_PASS`

### Other Email Providers
- **SendGrid**: Use SMTP with SendGrid credentials
- **Mailgun**: Use SMTP with Mailgun credentials
- **AWS SES**: Use SMTP with AWS SES credentials

## Email Templates

The system includes a professional HTML email template with:

- SEVIS Portal branding
- Clear verification instructions
- Verification button and token
- Expiration notice
- Professional styling

## Security Features

### Token Security
- **Cryptographically secure**: Uses `crypto.randomBytes(32)`
- **Time-limited**: Tokens expire after 24 hours
- **Single-use**: Tokens are marked as used after verification
- **Database cleanup**: Expired tokens are automatically cleaned up

### Rate Limiting
Consider implementing rate limiting for:
- Email verification attempts
- Resend verification requests
- Sign-in attempts

### Email Validation
- Email format validation
- Domain validation (optional)
- Disposable email blocking (optional)

## Testing

### Test the Complete Flow
1. **Sign up** with a new email
2. **Check console** for mock email (development)
3. **Click verification link** or use token
4. **Verify automatic login**
5. **Test resend functionality**

### Test Error Cases
1. **Expired token** - Wait 24 hours or modify database
2. **Used token** - Try using same token twice
3. **Invalid token** - Use random string
4. **Unverified sign-in** - Try signing in before verification

## Database Setup

Run the updated schema in your Supabase dashboard:

```sql
-- The schema includes:
-- 1. Email verification fields in users table
-- 2. Email verification tokens table
-- 3. Indexes for performance
-- 4. Cleanup function for expired tokens
-- 5. Updated user statistics view
```

## Environment Variables

Add these to your `.env.local`:

```env
# Required for email verification
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional for production email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@sevis.gov
```

## Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check SMTP configuration
   - Verify email credentials
   - Check firewall/network settings

2. **Verification links not working**
   - Ensure `NEXT_PUBLIC_APP_URL` is correct
   - Check token expiration
   - Verify database connection

3. **Users can sign in without verification**
   - Check database schema
   - Verify signin endpoint logic
   - Check user data in database

### Debug Mode

Enable debug logging by checking the console for:
- Email service connection status
- Token creation/validation logs
- Database operation logs

## Production Considerations

### Email Deliverability
- Use reputable email service (SendGrid, Mailgun, AWS SES)
- Set up SPF, DKIM, and DMARC records
- Monitor email delivery rates
- Implement email bounce handling

### Security
- Use HTTPS in production
- Implement rate limiting
- Monitor for abuse
- Regular security audits

### Performance
- Database indexing for tokens
- Email queue for high volume
- Token cleanup scheduling
- Monitoring and alerting

## Next Steps

1. **Set up production email service**
2. **Configure email templates**
3. **Implement rate limiting**
4. **Add email analytics**
5. **Set up monitoring**
6. **Test with real users**

## Support

For issues or questions:
1. Check the console logs
2. Verify database schema
3. Test with mock email service
4. Review environment variables
5. Check network connectivity 