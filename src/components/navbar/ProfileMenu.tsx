import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';
import type { User as AuthUser } from '@supabase/supabase-js';

interface ProfileMenuProps {
  currentUser: AuthUser;
  isProfileMenuOpen: boolean;
  setIsProfileMenuOpen: (open: boolean) => void;
  handleLogout: () => void;
}

export default function ProfileMenu({ 
  currentUser, 
  isProfileMenuOpen, 
  setIsProfileMenuOpen,
  handleLogout 
}: ProfileMenuProps) {
  const displayName = currentUser?.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'User';

  return (
    <div className="relative">
      <button 
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        className="flex items-center space-x-2 text-white hover:text-pink-400 px-3 py-2"
      >
        {currentUser.user_metadata?.avatar_url ? (
          <img 
            src={currentUser.user_metadata.avatar_url} 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        )}
        <span>{displayName}</span>
      </button>

      {isProfileMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-purple-900 rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5">
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-white hover:bg-purple-800"
            onClick={() => setIsProfileMenuOpen(false)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Account Settings
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-purple-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}