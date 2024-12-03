import React from 'react';
import { Scale, FileText, AlertTriangle, Shield, Users, Globe } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Please read these terms carefully before using our platform.
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

        {/* Key Sections Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Scale className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Legal Agreement</h2>
            <p className="text-purple-200">
              By using our platform, you agree to be bound by these terms and conditions.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Users className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">User Obligations</h2>
            <p className="text-purple-200">
              Users must comply with our community guidelines and applicable laws.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Globe className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Global Access</h2>
            <p className="text-purple-200">
              Our services are available worldwide, subject to local regulations.
            </p>
          </div>
        </div>

        {/* Detailed Terms Sections */}
        <div className="space-y-8">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Account Terms</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-pink-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Account Creation</h3>
                  <p className="text-purple-200">You must be at least 18 years old to create an account. Provide accurate and complete information during registration.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Account Security</h3>
                  <p className="text-purple-200">You are responsible for maintaining the security of your account and password. Contact us immediately if you suspect unauthorized access.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Content Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Your Content</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-purple-200">
                    <FileText className="w-5 h-5 text-pink-500 mt-1" />
                    You retain ownership of your content
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <FileText className="w-5 h-5 text-pink-500 mt-1" />
                    Grant us license to display and distribute
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <FileText className="w-5 h-5 text-pink-500 mt-1" />
                    Must comply with community guidelines
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Prohibited Content</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-purple-200">
                    <AlertTriangle className="w-5 h-5 text-pink-500 mt-1" />
                    Illegal or harmful content
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <AlertTriangle className="w-5 h-5 text-pink-500 mt-1" />
                    Copyright infringement
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <AlertTriangle className="w-5 h-5 text-pink-500 mt-1" />
                    Misleading information
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-pink-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Subscription Payments</h3>
                  <p className="text-purple-200">Payments are processed securely through our payment providers. Subscriptions auto-renew unless cancelled.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-pink-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Refunds</h3>
                  <p className="text-purple-200">Refund requests are handled according to our refund policy. Some purchases may be non-refundable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}