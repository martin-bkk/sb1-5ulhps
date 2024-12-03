import React from 'react';
import { Cookie as CookieIcon, Shield, Bell, Eye, Settings, Clock } from 'lucide-react';

export default function Cookie() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Learn how we use cookies and similar technologies to improve your experience.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-200">Last Updated</p>
              <p className="text-white font-semibold">March 15, 2024</p>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Cookie Settings
            </button>
          </div>
        </div>

        {/* Cookie Types Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <CookieIcon className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Essential Cookies</h2>
            <p className="text-purple-200">
              Required for basic website functionality and security features.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Settings className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Preference Cookies</h2>
            <p className="text-purple-200">
              Remember your settings and personalization choices.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Eye className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Analytics Cookies</h2>
            <p className="text-purple-200">
              Help us understand how visitors interact with our website.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                    <p className="text-purple-200">Protect against unauthorized access and fraud.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Personalization</h3>
                    <p className="text-purple-200">Customize content and remember preferences.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Session Management</h3>
                    <p className="text-purple-200">Maintain your login status and settings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
                    <p className="text-purple-200">Improve our website and user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Cookie Management</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-purple-200">
                  You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.
                  Note that blocking certain cookies may affect website functionality.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Our Cookie Settings</h3>
                <p className="text-purple-200 mb-4">
                  Use our cookie settings panel to customize your preferences for non-essential cookies.
                </p>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <div className="space-y-4">
              <p className="text-purple-200">
                Some features and integrations on our website use cookies from third-party services:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-purple-200">
                  <CookieIcon className="w-5 h-5 text-pink-500 mt-1" />
                  Analytics providers to understand user behavior
                </li>
                <li className="flex items-start gap-2 text-purple-200">
                  <CookieIcon className="w-5 h-5 text-pink-500 mt-1" />
                  Payment processors for secure transactions
                </li>
                <li className="flex items-start gap-2 text-purple-200">
                  <CookieIcon className="w-5 h-5 text-pink-500 mt-1" />
                  Social media platforms for content sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}