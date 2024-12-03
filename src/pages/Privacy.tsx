import React from 'react';
import { Lock, Shield, Eye, Database, Bell, Fingerprint } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
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
              Download PDF
            </button>
          </div>
        </div>

        {/* Key Privacy Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Lock className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Data Encryption</h2>
            <p className="text-purple-200">
              All your data is encrypted using industry-standard protocols to ensure maximum security.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Shield className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Privacy Controls</h2>
            <p className="text-purple-200">
              Customize your privacy settings to control who can see your content and information.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Database className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Data Protection</h2>
            <p className="text-purple-200">
              Your data is stored securely and protected against unauthorized access.
            </p>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-purple-200">
                    <Fingerprint className="w-5 h-5 text-pink-500" />
                    Name and contact information
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Fingerprint className="w-5 h-5 text-pink-500" />
                    Profile details and preferences
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Fingerprint className="w-5 h-5 text-pink-500" />
                    Payment information
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Usage Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-purple-200">
                    <Eye className="w-5 h-5 text-pink-500" />
                    Device and browser information
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Eye className="w-5 h-5 text-pink-500" />
                    Usage patterns and preferences
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Eye className="w-5 h-5 text-pink-500" />
                    Content interaction data
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">To provide and improve our services</p>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">To personalize your experience</p>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">To process payments and transactions</p>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">To communicate with you about our services</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Access Rights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-purple-200">
                    <Shield className="w-5 h-5 text-pink-500" />
                    Request access to your data
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Shield className="w-5 h-5 text-pink-500" />
                    Update or correct your information
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Shield className="w-5 h-5 text-pink-500" />
                    Delete your account and data
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Control Rights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-purple-200">
                    <Lock className="w-5 h-5 text-pink-500" />
                    Opt-out of marketing communications
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Lock className="w-5 h-5 text-pink-500" />
                    Control privacy settings
                  </li>
                  <li className="flex items-center gap-2 text-purple-200">
                    <Lock className="w-5 h-5 text-pink-500" />
                    Manage cookie preferences
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}