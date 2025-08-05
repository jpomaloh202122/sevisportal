'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bell, ArrowLeft, User, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

export default function Header() {
  const { user, signOut, isAuthenticated } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignOut = () => {
    signOut();
    setShowUserMenu(false);
  };

  return (
    <>
      <header className="bg-black shadow-sm border-b border-yellow-500">
        <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="bg-transparent p-2 rounded-lg">
                <Image 
                  src="/images/newlogo.png" 
                  alt="Government Portal Logo"
                  width={300} 
                  height={90} 
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-yellow-400">SEVIS PORTAL</h1>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-yellow-300 hover:text-yellow-100">
                <Bell className="w-5 h-5" />
              </button>
              
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:block">{user?.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                        <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setShowSignIn(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToSignUp={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
      />
      
      <SignUpModal
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={() => {
          setShowSignUp(false);
          setShowSignIn(true);
        }}
      />
    </>
  );
}
