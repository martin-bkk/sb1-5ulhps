import React from 'react';
import { Bell, Mail, Heart, MessageCircle, Users, Star } from 'lucide-react';

export default function NotificationsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-purple-200 text-sm">Receive updates via email</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-purple-200 text-sm">Receive instant updates</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Notification Types</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-white">Likes and Reactions</span>
            </div>
            <select className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1">
              <option value="all">All</option>
              <option value="following">Following Only</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-pink-500" />
              <span className="text-white">Comments</span>
            </div>
            <select className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1">
              <option value="all">All</option>
              <option value="following">Following Only</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-pink-500" />
              <span className="text-white">New Followers</span>
            </div>
            <select className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1">
              <option value="all">All</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-pink-500" />
              <span className="text-white">Special Offers</span>
            </div>
            <select className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-1">
              <option value="all">All</option>
              <option value="important">Important Only</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}