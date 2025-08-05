import nodemailer from 'nodemailer';

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

export interface EmailVerificationData {
  email: string;
  name: string;
  verificationUrl: string;
  token: string;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  /**
   * Send email verification
   */
  static async sendVerificationEmail(data: EmailVerificationData): Promise<boolean> {
    const { email, name, verificationUrl, token } = data;
    
    const subject = 'Verify Your Email - SEVIS Portal';
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px; background: #f9fafb; }
          .button { display: inline-block; padding: 12px 24px; background: #1e40af; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          .token { background: #f3f4f6; padding: 10px; border-radius: 4px; font-family: monospace; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SEVIS Portal</h1>
            <p>Email Verification</p>
          </div>
          <div class="content">
            <h2>Hello ${name},</h2>
            <p>Thank you for registering with SEVIS Portal. Please verify your email address to complete your account setup.</p>
            
            <p>Click the button below to verify your email:</p>
            <a href="${verificationUrl}" class="button">Verify Email Address</a>
            
            <p>Or copy and paste this verification code:</p>
            <div class="token">${token}</div>
            
            <p>This verification link will expire in 24 hours.</p>
            
            <p>If you didn't create an account with SEVIS Portal, you can safely ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 SEVIS Portal. All rights reserved.</p>
            <p>This is an automated email, please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const text = `
      Hello ${name},
      
      Thank you for registering with SEVIS Portal. Please verify your email address to complete your account setup.
      
      Verification URL: ${verificationUrl}
      Verification Code: ${token}
      
      This verification link will expire in 24 hours.
      
      If you didn't create an account with SEVIS Portal, you can safely ignore this email.
      
      Best regards,
      SEVIS Portal Team
    `;

    return this.sendEmail({
      to: email,
      subject,
      html,
      text,
    });
  }

  /**
   * Send a generic email
   */
  static async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }

  /**
   * Test email configuration
   */
  static async testConnection(): Promise<boolean> {
    try {
      await transporter.verify();
      console.log('Email service is ready');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}

// For development/testing - mock email service
export class MockEmailService {
  static async sendVerificationEmail(data: EmailVerificationData): Promise<boolean> {
    console.log('📧 Mock Email Verification Sent:');
    console.log('To:', data.email);
    console.log('Name:', data.name);
    console.log('Verification URL:', data.verificationUrl);
    console.log('Token:', data.token);
    console.log('---');
    return true;
  }

  static async sendEmail(options: EmailOptions): Promise<boolean> {
    console.log('📧 Mock Email Sent:');
    console.log('To:', options.to);
    console.log('Subject:', options.subject);
    console.log('---');
    return true;
  }

  static async testConnection(): Promise<boolean> {
    console.log('📧 Mock email service is ready');
    return true;
  }
}

// Export the appropriate email service based on environment
export const emailService = process.env.NODE_ENV === 'production' 
  ? EmailService 
  : MockEmailService; 