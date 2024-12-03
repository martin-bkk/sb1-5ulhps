import React from 'react';

interface AboutMeProps {
  bio: string;
  onChange: (value: string) => void;
}

export default function AboutMe({ bio, onChange }: AboutMeProps) {
  return (
    <div className="bg-white/5 rounded-xl p-4 md:p-6">
      <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
      <div>
        <label className="block text-sm font-medium text-purple-200 mb-1">
          Bio (minimum 100 characters)
        </label>
        <textarea
          value={bio}
          onChange={(e) => onChange(e.target.value)}
          minLength={100}
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white resize-none"
          placeholder="Tell others about yourself..."
        />
        <p className="text-sm text-purple-200 mt-1">
          {bio.length}/100 characters
        </p>
      </div>
    </div>
  );
}