import React, { useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import type { Database } from '../lib/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface ProfileGridProps {
  profiles: Profile[];
  loading: boolean;
  onLoadMore: () => void;
}

export default function ProfileGrid({ profiles, loading, onLoadMore }: ProfileGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        onLoadMore();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [onLoadMore]);

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-y-auto overflow-x-hidden hide-scrollbar"
      style={{ 
        height: 'calc(100vh - 200px)',
        scrollSnapType: 'y mandatory',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {profiles.length === 0 && !loading ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-lg">No profiles found</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>
      )}
      
      {loading && (
        <div className="flex items-center justify-center p-4">
          <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}