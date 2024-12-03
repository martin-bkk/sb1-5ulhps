import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthForm from './auth/AuthForm';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: boolean;
}

export default function SignUpModal({ isOpen, onClose, initialMode = true }: SignUpModalProps) {
  const [isLogin, setIsLogin] = useState(!initialMode);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signup, login, loginWithGoogle, resetPassword } = useAuth();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cryptoAddress: '',
    newsletter: false,
    termsAccepted: false,
    privacyAccepted: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isLogin && !formData.termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }

    if (!isLogin && !formData.privacyAccepted) {
      setError('You must accept the privacy policy');
      return;
    }

    try {
      if (isForgotPassword) {
        if (!formData.email) {
          setError('Email is required for password reset');
          return;
        }
        await resetPassword(formData.email);
        setSuccess('Password reset email sent! Please check your inbox.');
        return;
      }

      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.email, formData.password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to ' + (isLogin ? 'log in' : 'create account'));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      onClose();
    } catch (err: any) {
      if (err.code === 'auth/popup-blocked') {
        setError('Please allow popups for this site to sign in with Google');
      } else {
        setError(err.message || 'Failed to sign in with Google');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-purple-900 to-indigo-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-white/60 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white">
              {isForgotPassword ? 'Reset Password' : (isLogin ? 'Welcome Back' : 'Sign Up for FREE and Start Chatting!')}
            </h2>
            {!isLogin && !isForgotPassword && (
              <p className="text-purple-200 mt-2">This Account is Completely FREE – 18+ Only</p>
            )}
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-2 rounded-lg mb-4">
              {success}
            </div>
          )}

          <AuthForm
            isLogin={isLogin}
            isForgotPassword={isForgotPassword}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            handleGoogleSignIn={handleGoogleSignIn}
            setIsLogin={setIsLogin}
            setIsForgotPassword={setIsForgotPassword}
            error={error}
            success={success}
          />
        </div>
      </div>
    </div>
  );
}