import React from 'react';
import { Shield, Lock, AlertTriangle, UserX, Bell, Eye } from 'lucide-react';

export default function SafetyCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Safety Center</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Your safety is our top priority. Learn about our safety features and guidelines.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <div>
              <h2 className="text-xl font-bold text-white">Emergency Contact</h2>
              <p className="text-red-200">If you're in immediate danger, contact your local emergency services.</p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
            Emergency Resources
          </button>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Lock className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Account Security</h3>
            <p className="text-purple-200 mb-4">
              Enable two-factor authentication and strong passwords to protect your account.
            </p>
            <button className="text-pink-400 hover:text-pink-300">
              Security Settings →
            </button>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <UserX className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Blocking & Reporting</h3>
            <p className="text-purple-200 mb-4">
              Learn how to block unwanted users and report inappropriate content.
            </p>
            <button className="text-pink-400 hover:text-pink-300">
              Blocking Guide →
            </button>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Eye className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Privacy Controls</h3>
            <p className="text-purple-200 mb-4">
              Manage your privacy settings and control who can see your content.
            </p>
            <button className="text-pink-400 hover:text-pink-300">
              Privacy Settings →
            </button>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Safety Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">Never share personal information like your address or financial details.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">Be cautious when meeting people in person. Always meet in public places.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">Report suspicious behavior or content immediately.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">Use strong, unique passwords and enable two-factor authentication.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">Be aware of common scams and fraudulent behavior.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-pink-500 mt-1" />
                <p className="text-purple-200">Keep your software and apps up to date for better security.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Safety Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-purple-200 hover:text-pink-400 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-pink-400 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Community Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-pink-400 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Anti-Harassment Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Support Contacts</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-purple-200 hover:text-pink-400 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  24/7 Support Team
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-pink-400 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Safety Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-pink-400 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Crisis Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}