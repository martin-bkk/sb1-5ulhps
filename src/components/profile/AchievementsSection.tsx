import React from 'react';
import { Award } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: {
    title: string;
    description: string;
    date: string;
  }[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <Award className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-white font-semibold">{achievement.title}</h3>
              <p className="text-purple-200 text-sm mb-1">{achievement.description}</p>
              <p className="text-purple-300 text-xs">{achievement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}</content>