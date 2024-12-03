import React from 'react';
import { Gift, Heart } from 'lucide-react';
import { getImageUrl } from '../../../utils/dummyData';

export default function ChatHeader() {
  return (
    <div className="border-b border-white/10 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={getImageUrl('profiles', 0)}
              alt="Creator"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-purple-900"></div>
          </div>
          <div>
            <h2 className="text-white font-medium">Sophie Anderson</h2>
            <p className="text-green-400 text-sm">Online</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-lg transition-colors">
            <Gift className="w-5 h-5" />
          </button>
          <button className="p-2 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-lg transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}