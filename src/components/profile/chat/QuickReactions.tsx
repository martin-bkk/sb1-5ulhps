import React from 'react';

interface QuickReactionsProps {
  onReaction: (emoji: string) => void;
}

const QUICK_REACTIONS = ['❤️', '🔥', '😍', '👋', '💋', '💖'];

export default function QuickReactions({ onReaction }: QuickReactionsProps) {
  return (
    <div className="absolute top-20 right-4 flex flex-col gap-2">
      {QUICK_REACTIONS.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onReaction(emoji)}
          className="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center hover:bg-purple-700/50 transition-colors text-lg"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}