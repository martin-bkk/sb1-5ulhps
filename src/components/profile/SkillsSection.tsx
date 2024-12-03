import React from 'react';
import { Star } from 'lucide-react';

interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm"
          >
            <Star className="w-4 h-4" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}</content>