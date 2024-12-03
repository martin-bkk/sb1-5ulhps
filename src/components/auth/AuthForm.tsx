import React from 'react';
import { Mail, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import NewsletterCheckbox from './NewsletterCheckbox';
import TermsCheckboxes from './TermsCheckboxes';

interface AuthFormProps {
  isLogin: boolean;
  isForgotPassword: boolean;
  formData: any;
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleGoogleSignIn: () => void;
  setIsLogin: (isLogin: boolean) => void;
  setIsForgotPassword: (isForgot: boolean) => void;
  error: string;
  success: string;
}

export default function AuthForm({
  isLogin,
  isForgotPassword,
  formData,
  setFormData,
  handleSubmit,
  handleGoogleSignIn,
  setIsLogin,
  setIsForgotPassword,
  error,
  success
}: AuthFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && !isForgotPassword && (
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-purple-200 mb-1">
            Username *
          </label>
          <input
            type="text"
            id="username"
            required={!isLogin && !isForgotPassword}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
          {isLogin || isForgotPassword ? 'Username or Email Address *' : 'Email Address *'}
        </label>
        <div className="relative">
          <input
            type={isLogin ? 'text' : 'email'}
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <Mail className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
        </div>
      </div>

      {!isForgotPassword && (
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-1">
            Password *
          </label>
          <input
            type="password"
            id="password"
            required={!isForgotPassword}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
            minLength={6}
          />
        </div>
      )}

      {!isLogin && !isForgotPassword && (
        <>
          <div>
            <label htmlFor="cryptoAddress" className="block text-sm font-medium text-purple-200 mb-1">
              Crypto Address
            </label>
            <div className="relative">
              <input
                type="text"
                id="cryptoAddress"
                value={formData.cryptoAddress}
                onChange={(e) => setFormData({ ...formData, cryptoAddress: e.target.value })}
                placeholder="Optional"
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Wallet className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
            </div>
          </div>

          <TermsCheckboxes formData={formData} setFormData={setFormData} />
          <NewsletterCheckbox formData={formData} setFormData={setFormData} />
        </>
      )}

      <button
        type="submit"
        className="w-full bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors font-semibold mt-6"
      >
        {isForgotPassword ? 'Reset Password' : (isLogin ? 'Log In' : 'Create FREE Account')}
      </button>

      {!isForgotPassword && <SocialButtons onGoogleSignIn={handleGoogleSignIn} />}

      <div className="text-center mt-4 space-y-2">
        {isLogin && !isForgotPassword && (
          <button
            type="button"
            onClick={() => setIsForgotPassword(true)}
            className="text-purple-200 hover:text-white text-sm block w-full"
          >
            Forgot Password?
          </button>
        )}
        
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setIsForgotPassword(false);
          }}
          className="text-purple-200 hover:text-white text-sm block w-full"
        >
          {isForgotPassword ? "Back to Login" : (isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In")}
        </button>
      </div>
    </form>
  );
}