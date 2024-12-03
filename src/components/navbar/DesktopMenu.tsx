import React from 'react';
import { Link } from 'react-router-dom';
import type { User } from '@supabase/supabase-js';
import FeatureMenu from './FeatureMenu';
import ProfileMenu from './ProfileMenu';
import AuthButtons from './AuthButtons';

interface DesktopMenuProps {
  currentUser: User | null;
  isFeaturesOpen: boolean;
  setIsFeaturesOpen: (open: boolean) => void;
  isProfileMenuOpen: boolean;
  setIsProfileMenuOpen: (open: boolean) => void;
  isAuthDropdownOpen: boolean;
  setIsAuthDropdownOpen: (open: boolean) => void;
  isSignUpOpen: boolean;
  setIsSignUpOpen: (open: boolean) => void;
  isSignUpMode: boolean;
  setIsSignUpMode: (mode: boolean) => void;
  handleFeatureClick: (path: string, requiresAuth?: boolean) => void;
  handleAuthClick: (isSignUp: boolean) => void;
  handleLogout: () => void;
}

export default function DesktopMenu({
  currentUser,
  isFeaturesOpen,
  setIsFeaturesOpen,
  isProfileMenuOpen,
  setIsProfileMenuOpen,
  isAuthDropdownOpen,
  setIsAuthDropdownOpen,
  isSignUpOpen,
  setIsSignUpOpen,
  isSignUpMode,
  setIsSignUpMode,
  handleFeatureClick,
  handleAuthClick,
  handleLogout
}: DesktopMenuProps) {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-pink-400 px-3 py-2">Home</Link>

        <FeatureMenu
          isFeaturesOpen={isFeaturesOpen}
          setIsFeaturesOpen={setIsFeaturesOpen}
          handleFeatureClick={handleFeatureClick}
        />

        <Link to="/profiles" className="text-white hover:text-pink-400 px-3 py-2">Profiles</Link>

        {currentUser ? (
          <ProfileMenu
            currentUser={currentUser}
            isProfileMenuOpen={isProfileMenuOpen}
            setIsProfileMenuOpen={setIsProfileMenuOpen}
            handleLogout={handleLogout}
          />
        ) : (
          <AuthButtons
            isAuthDropdownOpen={isAuthDropdownOpen}
            setIsAuthDropdownOpen={setIsAuthDropdownOpen}
            isSignUpOpen={isSignUpOpen}
            setIsSignUpOpen={setIsSignUpOpen}
            isSignUpMode={isSignUpMode}
            setIsSignUpMode={setIsSignUpMode}
            handleAuthClick={handleAuthClick}
          />
        )}
      </div>
    </div>
  );
}