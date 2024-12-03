import React from 'react';

interface SocialButtonsProps {
  onGoogleSignIn: () => void;
}

export default function SocialButtons({ onGoogleSignIn }: SocialButtonsProps) {
  return (
    <button
      type="button"
      onClick={onGoogleSignIn}
      className="w-full bg-white text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center gap-2"
    >
      <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
      Continue with Google
    </button>
  );
}