import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users } from 'lucide-react';
import { featureMenuItems } from './FeatureMenuItems';
import type { User } from '@supabase/supabase-js';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  currentUser: User | null;
  handleFeatureClick: (path: string, requiresAuth?: boolean) => void;
  handleLogout: () => void;
  handleAuthClick: (isSignUp: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  currentUser,
  handleFeatureClick,
  handleLogout,
  handleAuthClick
}: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="text-white p-2 flex items-center gap-2"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="font-medium">Menu</span>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 bg-purple-900/95 backdrop-blur-sm z-50 border-t border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-white px-3 py-2 hover:bg-pink-500/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>

            <Link
              to="/profiles"
              className="flex items-center gap-2 text-white px-3 py-2 hover:bg-pink-500/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="w-4 h-4" />
              Profiles
            </Link>

            {featureMenuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleFeatureClick(item.path, item.requiresAuth)}
                className="flex items-center gap-2 w-full text-white px-3 py-2 hover:bg-pink-500/20 rounded-md text-left"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            
            {currentUser ? (
              <>
                <Link 
                  to="/settings" 
                  className="text-white block px-3 py-2 hover:bg-pink-500/20 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Account Settings
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-white block w-full text-left px-3 py-2 hover:bg-pink-500/20 rounded-md"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="space-y-2 px-3 py-2">
                <button 
                  onClick={() => handleAuthClick(false)}
                  className="w-full text-white px-4 py-2 rounded-lg hover:bg-pink-500/20 text-left"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => handleAuthClick(true)}
                  className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}