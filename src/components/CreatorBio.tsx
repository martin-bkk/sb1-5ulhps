import React, { useState } from 'react';
import { Share2, MessageSquare, MessageCircle, Copy, Check, Twitter, Facebook, Instagram, Link2, X } from 'lucide-react';
import { Profile } from '../types/profile';

interface CreatorBioProps {
  creatorInfo: Profile;
  avatarUrl: string;
}

export default function CreatorBio({ creatorInfo, avatarUrl }: CreatorBioProps) {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${creatorInfo.name}'s profile!`;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL
        alert('Copy the link and share it on Instagram!');
        break;
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying:', err);
    }
  };

  return (
    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8">
      <div className="flex items-start gap-6 mb-8">
        <img
          src={avatarUrl}
          alt={creatorInfo.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">{creatorInfo.name}</h1>
              <div className="flex gap-3">
                <button className="bg-pink-500 text-white px-8 py-2 rounded-full hover:bg-pink-600 transition-colors">
                  Follow
                </button>
                <button className="bg-purple-600 text-white px-8 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex gap-2 relative">
              <button 
                onClick={() => setShowSharePopup(!showSharePopup)}
                className="text-white/60 hover:text-white p-2"
              >
                <Share2 className="w-6 h-6" />
              </button>

              {/* Share Popup */}
              {showSharePopup && (
                <div className="absolute right-0 top-12 w-72 bg-purple-900/95 backdrop-blur-sm rounded-xl shadow-xl p-4 z-50">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-pink-500" />
                      <h3 className="text-white font-semibold">Share Profile</h3>
                    </div>
                    <button 
                      onClick={() => setShowSharePopup(false)}
                      className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {/* Social Media Buttons */}
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-[#4267B2]" />
                      Share on Facebook
                    </button>
                    <button
                      onClick={() => handleShare('instagram')}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#E1306C]" />
                      Share on Instagram
                    </button>

                    {/* Copy Link Button */}
                    <div className="pt-2 border-t border-white/10">
                      <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-5 h-5 text-green-500" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Link2 className="w-5 h-5 text-pink-500" />
                            Copy Profile Link
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-white/60 text-sm mb-1">Real Name:</h2>
            <p className="text-white text-lg">{creatorInfo.realName}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Followers:</h2>
            <p className="text-white text-lg">{creatorInfo.followers?.toLocaleString()}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Birth Date:</h2>
            <p className="text-white text-lg">{creatorInfo.birthDate}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Age:</h2>
            <p className="text-white text-lg">{creatorInfo.age}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">We are:</h2>
            <p className="text-white text-lg">{creatorInfo.type}</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-white/60 text-sm mb-1">Interested In:</h2>
            <p className="text-white text-lg">{creatorInfo.interestedIn?.join(', ')}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Location:</h2>
            <p className="text-white text-lg">{creatorInfo.location}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Last Broadcast:</h2>
            <p className="text-white text-lg">{creatorInfo.lastBroadcast}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Body Type:</h2>
            <p className="text-white text-lg">{creatorInfo.bodyType}</p>
          </div>
          <div>
            <h2 className="text-white/60 text-sm mb-1">Smoke / Drink:</h2>
            <p className="text-white text-lg">{creatorInfo.smokeDrink}</p>
          </div>
        </div>

        {/* Right Column - Social Media */}
        <div>
          <h2 className="text-white/60 text-sm mb-4">Social Media:</h2>
          <div className="space-y-3">
            {creatorInfo.socialLinks?.map((link, index) => (
              <a
                key={`social-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-purple-800/30 p-4 rounded-xl hover:bg-purple-700/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {link.platform === 'WhatsApp' ? (
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  ) : (
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  )}
                  <div>
                    <p className="text-white font-medium">{link.platform}</p>
                    {link.duration && (
                      <p className="text-white/60 text-sm">{link.duration}</p>
                    )}
                  </div>
                </div>
                <div className="bg-pink-500 px-3 py-1 rounded-full">
                  <span className="text-white text-sm">{link.tokens} TOKENS</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}