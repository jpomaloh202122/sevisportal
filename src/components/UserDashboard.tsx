'use client';

import { useAuth } from '@/contexts/AuthContext';
import { User, Calendar, Shield, Activity, FileText, Clock } from 'lucide-react';

export default function UserDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const userStats = [
    {
      label: 'Account Status',
      value: 'Active',
      icon: <Shield className="w-5 h-5 text-green-600" />,
      color: 'text-green-600'
    },
    {
      label: 'Member Since',
      value: new Date(user.createdAt).toLocaleDateString(),
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      color: 'text-blue-600'
    },
    {
      label: 'Last Login',
      value: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'First time',
      icon: <Activity className="w-5 h-5 text-purple-600" />,
      color: 'text-purple-600'
    }
  ];

  const recentActivity = [
    {
      action: 'Signed in to portal',
      time: 'Just now',
      icon: <User className="w-4 h-4" />
    },
    {
      action: 'Viewed citizen services',
      time: '2 hours ago',
      icon: <FileText className="w-4 h-4" />
    },
    {
      action: 'Updated profile information',
      time: '1 day ago',
      icon: <User className="w-4 h-4" />
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-red-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full capitalize mt-1">
            {user.role}
          </span>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {userStats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            {stat.icon}
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className={`font-semibold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="text-gray-400">
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm">
            Update Profile
          </button>
          <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
            View Documents
          </button>
        </div>
      </div>
    </div>
  );
} 