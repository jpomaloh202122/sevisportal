'use client';

import { useState } from 'react';
import { Mail, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

export default function TestEmailVerificationPage() {
  const [testResults, setTestResults] = useState<Array<{name: string; status: string; message: string}>>([]);
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    setTestResults([]);

    const tests = [
      {
        name: 'Test Email Service Connection',
        test: async () => {
          const response = await fetch('/api/test-email-service');
          return response.ok;
        }
      },
      {
        name: 'Test Database Schema',
        test: async () => {
          const response = await fetch('/api/test-supabase');
          return response.ok;
        }
      },
      {
        name: 'Test Environment Variables',
        test: async () => {
          const response = await fetch('/api/test-env');
          const data = await response.json();
          return data.success;
        }
      }
    ];

    for (const test of tests) {
      try {
        const result = await test.test();
        setTestResults(prev => [...prev, {
          name: test.name,
          status: result ? 'success' : 'error',
          message: result ? 'Passed' : 'Failed'
        }]);
      } catch (error) {
        setTestResults(prev => [...prev, {
          name: test.name,
          status: 'error',
          message: 'Error: ' + (error as Error).message
        }]);
      }
    }

    setLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Mail className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-center mb-8">
            <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Email Verification System Test
            </h1>
            <p className="text-gray-600">
              Test the email verification system components
            </p>
          </div>

          <div className="mb-6">
            <button
              onClick={runTests}
              disabled={loading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Running Tests...
                </>
              ) : (
                'Run Tests'
              )}
            </button>
          </div>

          {testResults.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Test Results</h2>
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    result.status === 'success'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-center">
                    {getStatusIcon(result.status)}
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        {result.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {result.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">How to Test Email Verification</h3>
            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
              <li>Sign up with a new email address</li>
              <li>Check the console for the mock verification email</li>
              <li>Click the verification link or copy the token</li>
              <li>Verify that you&apos;re automatically signed in</li>
              <li>Test the resend verification functionality</li>
            </ol>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-900 mb-2">Development Mode</h3>
            <p className="text-sm text-yellow-800">
              In development mode, emails are logged to the console instead of being sent. 
              Check your browser&apos;s developer console to see the verification emails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 