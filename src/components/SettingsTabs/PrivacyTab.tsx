import React from 'react';
import { Shield, Eye, Bell, Lock } from 'lucide-react';

export default function PrivacyTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Privacy Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-white font-medium">Profile Visibility</p>
                <p className="text-purple-200 text-sm">Control who can see your profile</p>
              </div>
            </div>
            <select className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1">
              <option value="public">Public</option>
              <option value="followers">Followers Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-white font-medium">Activity Status</p>
                <p className="text-purple-200 text-sm">Show when you're online</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-white font-medium">Direct Messages</p>
                <p className="text-purple-200 text-sm">Control who can message you</p>
              </div>
            </div>
            <select className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1">
              <option value="everyone">Everyone</option>
              <option value="followers">Followers Only</option>
              <option value="none">No One</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-white font-medium">Two-Factor Authentication</p>
                <p className="text-purple-200 text-sm">Add an extra layer of security</p>
              </div>
            </div>
            <button className="bg-pink-500 text-white px-4 py-1 rounded-lg hover:bg-pink-600 transition-colors">
              Enable
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Content Privacy</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <span className="text-white">Allow comments on posts</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" />
          </label>
          <label className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <span className="text-white">Show likes count</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" />
          </label>
          <label className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <span className="text-white">Allow sharing of your posts</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" />
          </label>
        </div>
      </div>
    </div>
  );
}