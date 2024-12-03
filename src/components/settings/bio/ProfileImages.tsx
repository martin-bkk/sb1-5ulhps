import React from 'react';
import { Upload, User } from 'lucide-react';
import type { User as AuthUser } from '@supabase/supabase-js';

interface ProfileImagesProps {
  currentUser: AuthUser | null;
  handleImageUpload: (file: File, type: 'avatar' | 'banner') => Promise<void>;
}

export default function ProfileImages({ currentUser, handleImageUpload }: ProfileImagesProps) {
  return (
    <div className="bg-white/5 rounded-xl p-4 md:p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Profile Images</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Photo */}
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-2">
            Profile Photo
          </label>
          <div className="relative group">
            <div className="aspect-square rounded-xl overflow-hidden bg-purple-800/50">
              {currentUser?.user_metadata?.avatar_url ? (
                <img 
                  src={currentUser.user_metadata.avatar_url} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white/50" />
                </div>
              )}
            </div>
            <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <Upload className="w-8 h-8 text-white" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleImageUpload(e.target.files[0], 'avatar');
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Banner Image */}
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-2">
            Banner Image
          </label>
          <div className="relative group">
            <div className="aspect-video rounded-xl overflow-hidden bg-purple-800/50">
              {currentUser?.user_metadata?.banner_url ? (
                <img 
                  src={currentUser.user_metadata.banner_url} 
                  alt="Banner" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Upload className="w-12 h-12 text-white/50" />
                </div>
              )}
            </div>
            <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <Upload className="w-8 h-8 text-white" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleImageUpload(e.target.files[0], 'banner');
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}