import React from 'react';
import { Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Database } from '../lib/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

export default function ProfileCard({ id, username, full_name, bio, avatar_url, created_at }: Profile) {
  // Format the time difference
  const getTimeAgo = (date: string) => {
    const now = new Date();
    const createdAt = new Date(date);
    const diffInHours = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60));
    return `${diffInHours}h ago`;
  };

  return (
    <Link 
      to={`/profile/${id}`}
      className="block w-full max-w-full md:max-w-[180px] bg-purple-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
    >
      <div className="aspect-[1/1] relative">
        <img 
          src={avatar_url || 'https://via.placeholder.com/400x400'} 
          alt={full_name || username}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <h3 className="text-base font-semibold text-white mb-1 truncate">
          {full_name || username}
        </h3>
        <p className="text-purple-200 text-xs line-clamp-2 mb-2 min-h-[2.5rem]">
          {bio || 'No bio available'}
        </p>
        <div className="flex justify-between items-center text-xs text-purple-200">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{getTimeAgo(created_at)}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            <span>0</span>
          </div>
        </div>
      </div>
    </Link>
  );
}