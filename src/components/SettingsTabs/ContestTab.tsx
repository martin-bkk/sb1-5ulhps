import React from 'react';
import { Trophy, Star, Users, TrendingUp } from 'lucide-react';

export default function ContestTab() {
  const contestStats = [
    { title: "Current Rank", value: "#42", icon: <Trophy className="w-6 h-6 text-pink-500" /> },
    { title: "Total Points", value: "12,450", icon: <Star className="w-6 h-6 text-pink-500" /> },
    { title: "Followers Gained", value: "+1,234", icon: <Users className="w-6 h-6 text-pink-500" /> },
    { title: "Growth Rate", value: "+25%", icon: <TrendingUp className="w-6 h-6 text-pink-500" /> }
  ];

  const recentContests = [
    { name: "Summer Vibes 2024", rank: 3, points: 2500, date: "2024-03-15" },
    { name: "Creator's Challenge", rank: 1, points: 5000, date: "2024-03-01" },
    { name: "Spring Fashion", rank: 5, points: 1800, date: "2024-02-15" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {contestStats.map((stat, index) => (
          <div key={index} className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              {stat.icon}
              <h3 className="text-white font-medium">{stat.title}</h3>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Contests</h2>
        <div className="space-y-4">
          {recentContests.map((contest, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
              <div>
                <h3 className="text-white font-medium">{contest.name}</h3>
                <p className="text-purple-200 text-sm">Date: {contest.date}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Rank #{contest.rank}</p>
                <p className="text-purple-200 text-sm">{contest.points} points</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Upcoming Contests</h2>
        <div className="space-y-4">
          <div className="p-4 bg-purple-800/30 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium">Spring Break Special</h3>
              <span className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full">Coming Soon</span>
            </div>
            <p className="text-purple-200 text-sm">Starts in 5 days</p>
          </div>
          <div className="p-4 bg-purple-800/30 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium">Easter Celebration</h3>
              <span className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full">Registration Open</span>
            </div>
            <p className="text-purple-200 text-sm">Starts in 2 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
}