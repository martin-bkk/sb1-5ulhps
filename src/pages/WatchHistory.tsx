import React from 'react';
import { Clock, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/dummyData';

// Dummy watch history data
const watchHistory = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Creator ${i + 1}`,
  timestamp: new Date(Date.now() - Math.random() * 10000000000),
  imageUrl: getImageUrl('profiles', i),
  duration: Math.floor(Math.random() * 120) + ' minutes'
}));

export default function WatchHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Watch History</h1>
            <p className="text-purple-200">Keep track of the profiles you've viewed</p>
          </div>
          <button className="text-purple-200 hover:text-white flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Clear History
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchHistory.map((item) => (
            <div key={item.id} className="bg-purple-800/30 backdrop-blur-sm rounded-xl overflow-hidden group relative">
              <Link to={`/profile/${item.id}`}>
                <div className="aspect-square relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-white font-medium truncate">{item.name}</h3>
                  <p className="text-purple-200 text-sm">
                    {item.timestamp.toLocaleDateString()}
                  </p>
                  <p className="text-purple-200 text-sm">
                    Watched: {item.duration}
                  </p>
                </div>
              </Link>
              <button className="absolute top-2 right-2 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}