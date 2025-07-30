import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';

export default function Header() {
  return (
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
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
