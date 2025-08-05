'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle, XCircle, Mail, RefreshCw } from 'lucide-react';

function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { signIn } = useAuth();

  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'expired' | 'used'>('loading');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<{
    id: string;
    email: string;
    name: string;
    role: string;
    emailVerified: boolean;
    createdAt: string;
  } | null>(null);
  const [isResending, setIsResending] = useState(false);

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('No verification token provided');
      return;
    }
    verifyEmail(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const verifyEmail = async (verificationToken: string) => {
    try {
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: verificationToken }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setUser(data.user);
        if (data.token) {
          await signIn(data.token, data.user);
        }
      } else {
        if (data.error.includes('expired')) setStatus('expired');
        else if (data.error.includes('already been used')) setStatus('used');
        else setStatus('error');
        setMessage(data.error);
      }
    } catch {
      setStatus('error');
      setMessage('An error occurred during verification');
    }
  };

  const resendVerification = async () => {
    if (!user?.email) return;
    setIsResending(true);
    try {
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email }),
      });
      const data = await response.json();
      if (response.ok) setMessage('Verification email sent successfully. Please check your inbox.');
      else setMessage(data.error);
    } catch {
      setMessage('Failed to resend verification email');
    } finally {
      setIsResending(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success': return <CheckCircle className="w-16 h-16 text-green-500" />;
      case 'error':
      case 'expired':
      case 'used': return <XCircle className="w-16 h-16 text-red-500" />;
      default: return <Mail className="w-16 h-16 text-blue-500 animate-pulse" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'error':
      case 'expired':
      case 'used': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {getStatusIcon()}
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Email Verification</h2>
            <div className="mt-4">
              <p className={`text-lg font-medium ${getStatusColor()}`}>
                {status === 'loading' && 'Verifying your email...'}
                {status === 'success' && 'Email Verified Successfully!'}
                {status === 'error' && 'Verification Failed'}
                {status === 'expired' && 'Token Expired'}
                {status === 'used' && 'Token Already Used'}
              </p>
              <p className="mt-2 text-sm text-gray-600">{message}</p>
            </div>
            {status === 'success' && (
              <div className="mt-6">
                <button
                  onClick={() => router.push('/')}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Continue to Dashboard
                </button>
              </div>
            )}
            {(status === 'error' || status === 'expired' || status === 'used') && (
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => router.push('/signin')}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Go to Sign In
                </button>
                {user?.email && (
                  <button
                    onClick={resendVerification}
                    disabled={isResending}
                    className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isResending ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Resend Verification Email'
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailPage />
    </Suspense>
  );
} 