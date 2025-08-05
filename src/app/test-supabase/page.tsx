'use client';

import { useState } from 'react';

export default function TestSupabasePage() {
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message?: string;
    error?: string;
    details?: string;
    data?: {
      connection?: string;
      usersTable?: string;
      authUsersTable?: string;
      userStatsView?: string;
      sampleUsers?: unknown[];
      stats?: unknown[];
    };
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const runTest = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-supabase');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({
        success: false,
        error: 'Test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Supabase Connection Test
          </h1>
          
          <div className="mb-6">
            <button
              onClick={runTest}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Testing...' : 'Test Supabase Connection'}
            </button>
          </div>

          {testResult && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                testResult.success 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <h2 className={`text-lg font-semibold ${
                  testResult.success ? 'text-green-800' : 'text-red-800'
                }`}>
                  {testResult.success ? '✅ Test Passed' : '❌ Test Failed'}
                </h2>
                <p className={`mt-2 ${
                  testResult.success ? 'text-green-700' : 'text-red-700'
                }`}>
                  {testResult.message || testResult.error}
                </p>
              </div>

              {testResult.data && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Test Results:
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Connection:</span>
                      <span>{testResult.data.connection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Users Table:</span>
                      <span>{testResult.data.usersTable}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Auth Users Table:</span>
                      <span>{testResult.data.authUsersTable}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">User Stats View:</span>
                      <span>{testResult.data.userStatsView}</span>
                    </div>
                  </div>

                  {testResult.data.sampleUsers && testResult.data.sampleUsers.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Sample Users:</h4>
                      <div className="bg-white p-3 rounded border">
                        <pre className="text-xs overflow-auto">
                          {JSON.stringify(testResult.data.sampleUsers, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}

                  {testResult.data.stats && testResult.data.stats.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">User Statistics:</h4>
                      <div className="bg-white p-3 rounded border">
                        <pre className="text-xs overflow-auto">
                          {JSON.stringify(testResult.data.stats, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {testResult.details && (
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Error Details:
                  </h3>
                  <pre className="text-sm text-yellow-700 overflow-auto">
                    {testResult.details}
                  </pre>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              What this test checks:
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Basic connection to Supabase</li>
              <li>• Access to users table</li>
              <li>• Access to auth_users table</li>
              <li>• Access to user_stats view</li>
              <li>• Sample data retrieval</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 