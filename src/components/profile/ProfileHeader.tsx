import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2, Flag, Gift, Heart, Star, MessageCircle, Users } from 'lucide-react';
import { Howl } from 'howler';
import Confetti from 'react-confetti';

interface ProfileHeaderProps {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  isFullscreen: boolean;
  setIsFullscreen: (fullscreen: boolean) => void;
  videoUrl: string;
}

const VIRTUAL_GIFTS = [
  { id: 1, name: 'Rose', emoji: '🌹', cost: 50 },
  { id: 2, name: 'Heart', emoji: '💝', cost: 100 },
  { id: 3, name: 'Crown', emoji: '👑', cost: 500 },
  { id: 4, name: 'Diamond', emoji: '💎', cost: 1000 },
];

const POLLS = [
  { id: 1, question: 'What should we do next?', options: ['Dance 💃', 'Sing 🎤', 'Chat 💭'] },
  { id: 2, question: 'Choose the next theme!', options: ['Beach 🏖️', 'Party 🎉', 'Cozy 🛋️'] },
];

// Updated demo stream URL
const DEMO_STREAM_URL = 'https://www.youtube.com/embed/LJXlTwiOM0c?si=72Jnw0hxhYa3zPSX&autoplay=1&mute=1';

export default function ProfileHeader({
  isMuted,
  setIsMuted,
  isFullscreen,
  setIsFullscreen,
  videoUrl
}: ProfileHeaderProps) {
  const [showGifts, setShowGifts] = useState(false);
  const [showPoll, setShowPoll] = useState(false);
  const [activePoll, setActivePoll] = useState(POLLS[0]);
  const [pollVotes, setPollVotes] = useState<Record<string, number>>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [viewerCount, setViewerCount] = useState(1234);
  const [likeCount, setLikeCount] = useState(856);
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ id: string; emoji: string; style: any }>>([]);

  const soundEffect = new Howl({
    src: ['https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3'],
    volume: 0.5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleGift = (gift: typeof VIRTUAL_GIFTS[0]) => {
    if (!isMuted) soundEffect.play();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);

    const id = Date.now().toString();
    const randomX = Math.random() * 80 + 10;
    const randomDuration = Math.random() * 2 + 2;

    setFloatingEmojis(prev => [...prev, {
      id,
      emoji: gift.emoji,
      style: {
        left: `${randomX}%`,
        animation: `float ${randomDuration}s ease-out forwards`
      }
    }]);

    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(emoji => emoji.id !== id));
    }, randomDuration * 1000);

    setLikeCount(prev => prev + Math.floor(gift.cost / 10));
  };

  const handleVote = (option: string) => {
    setPollVotes(prev => ({
      ...prev,
      [option]: (prev[option] || 0) + 1
    }));
    setTimeout(() => {
      setShowPoll(false);
      setActivePoll(POLLS[Math.floor(Math.random() * POLLS.length)]);
    }, 3000);
  };

  return (
    <div className="bg-black relative overflow-hidden w-full h-full">
      {/* Livestream Iframe */}
      <div className="relative w-full h-full">
        <iframe
          src={DEMO_STREAM_URL}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        
        {/* Overlay to handle interactions */}
        <div className="absolute inset-0 bg-transparent pointer-events-none">
          {/* Floating Emojis */}
          {floatingEmojis.map(({ id, emoji, style }) => (
            <div
              key={id}
              className="absolute text-4xl pointer-events-none"
              style={style}
            >
              {emoji}
            </div>
          ))}

          {/* Confetti Effect */}
          {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        </div>
      </div>

      {/* Stream Info Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
          <Users className="w-4 h-4 text-pink-500" />
          <span className="text-white">{viewerCount.toLocaleString()}</span>
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
          <Heart className="w-4 h-4 text-pink-500" />
          <span className="text-white">{likeCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 pointer-events-auto">
        <button
          onClick={() => setShowPoll(true)}
          className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
        <button
          onClick={() => setShowGifts(!showGifts)}
          className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
        >
          <Gift className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors">
          <Flag className="w-5 h-5" />
        </button>
      </div>

      {/* Gifts Menu */}
      {showGifts && (
        <div className="absolute bottom-16 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 animate-fade-in pointer-events-auto">
          <h3 className="text-white font-medium mb-2">Send a Gift</h3>
          <div className="grid grid-cols-2 gap-2">
            {VIRTUAL_GIFTS.map(gift => (
              <button
                key={gift.id}
                onClick={() => handleGift(gift)}
                className="flex flex-col items-center bg-purple-900/50 rounded-lg p-2 hover:bg-purple-800/50 transition-colors"
              >
                <span className="text-2xl">{gift.emoji}</span>
                <span className="text-white text-sm">{gift.cost} 💎</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Live Poll */}
      {showPoll && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-xl p-6 animate-fade-in pointer-events-auto">
          <h3 className="text-white font-medium mb-4">{activePoll.question}</h3>
          <div className="space-y-2">
            {activePoll.options.map(option => {
              const votes = pollVotes[option] || 0;
              const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);
              const percentage = totalVotes ? Math.round((votes / totalVotes) * 100) : 0;

              return (
                <button
                  key={option}
                  onClick={() => handleVote(option)}
                  className="w-full bg-purple-900/50 rounded-lg p-3 hover:bg-purple-800/50 transition-colors relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-pink-500/20"
                    style={{ width: `${percentage}%` }}
                  />
                  <span className="relative text-white">{option}</span>
                  <span className="relative text-purple-200 text-sm ml-2">
                    {votes > 0 && `${percentage}%`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}