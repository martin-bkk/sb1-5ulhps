import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const isHomePage = location.pathname === '/';

  const handleAuthClick = (isSignUp: boolean) => {
    setIsSignUpMode(isSignUp);
    setIsSignUpOpen(true);
    setIsAuthDropdownOpen(false);
  };

  const handleFeatureClick = (path: string, requiresAuth?: boolean) => {
    if (requiresAuth && !currentUser) {
      setIsSignUpMode(false);
      setIsSignUpOpen(true);
      setIsFeaturesOpen(false);
    } else {
      navigate(path);
      setIsFeaturesOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileMenuOpen(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const getNavbarStyle = () => {
    const baseStyle = 'w-full z-50 backdrop-blur-sm';
    return `${isHomePage ? 'fixed' : 'relative'} ${baseStyle} ${
      isHomePage ? 'bg-black/20' : 'bg-purple-900/95'
    }`;
  };

  return (
    <nav className={getNavbarStyle()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <Heart className="w-8 h-8 text-pink-500 mr-2" />
              Only4U
            </Link>
          </div>

          <DesktopMenu
            currentUser={currentUser}
            isFeaturesOpen={isFeaturesOpen}
            setIsFeaturesOpen={setIsFeaturesOpen}
            isProfileMenuOpen={isProfileMenuOpen}
            setIsProfileMenuOpen={setIsProfileMenuOpen}
            isAuthDropdownOpen={isAuthDropdownOpen}
            setIsAuthDropdownOpen={setIsAuthDropdownOpen}
            isSignUpOpen={isSignUpOpen}
            setIsSignUpOpen={setIsSignUpOpen}
            isSignUpMode={isSignUpMode}
            setIsSignUpMode={setIsSignUpMode}
            handleFeatureClick={handleFeatureClick}
            handleAuthClick={handleAuthClick}
            handleLogout={handleLogout}
          />

          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            currentUser={currentUser}
            handleFeatureClick={handleFeatureClick}
            handleLogout={handleLogout}
            openSignUp={() => {
              setIsSignUpMode(true);
              setIsSignUpOpen(true);
            }}
          />
        </div>
      </div>
    </nav>
  );
}