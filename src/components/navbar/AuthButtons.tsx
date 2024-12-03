import React, { useRef } from 'react';
import SignUpModal from '../SignUpModal';

interface AuthButtonsProps {
  isAuthDropdownOpen: boolean;
  setIsAuthDropdownOpen: (open: boolean) => void;
  isSignUpOpen: boolean;
  setIsSignUpOpen: (open: boolean) => void;
  isSignUpMode: boolean;
  setIsSignUpMode: (mode: boolean) => void;
  handleAuthClick: (isSignUp: boolean) => void;
}

export default function AuthButtons({
  isAuthDropdownOpen,
  setIsAuthDropdownOpen,
  isSignUpOpen,
  setIsSignUpOpen,
  isSignUpMode,
  handleAuthClick
}: AuthButtonsProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          Sign In / Sign Up
        </button>
        {isAuthDropdownOpen && (
          <div className="absolute right-0 mt-2 w-fit min-w-[120px] bg-purple-900/95 backdrop-blur-sm rounded-xl shadow-lg z-50">
            <div className="py-2 flex flex-col">
              <button
                onClick={() => handleAuthClick(false)}
                className="w-full px-6 py-2 text-white hover:bg-pink-500 transition-colors text-center"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthClick(true)}
                className="w-full px-6 py-2 text-white hover:bg-pink-500 transition-colors text-center"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        initialMode={isSignUpMode} 
      />
    </>
  );
}