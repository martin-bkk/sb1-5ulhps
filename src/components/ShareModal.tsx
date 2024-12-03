import React from 'react';
import { X, Facebook, Twitter, Instagram, Link2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function ShareModal({ isOpen, onClose, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShare = (platform: string) => {
    const text = 'Check out this post!';
    
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
    onClose();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Error copying:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-purple-900/95 backdrop-blur-sm rounded-xl max-w-md w-full mx-4">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Share Post</h2>
            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <button
            onClick={() => handleShare('twitter')}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
          >
            <Twitter className="w-5 h-5 text-[#1DA1F2]" />
            Share on Twitter
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
          >
            <Facebook className="w-5 h-5 text-[#4267B2]" />
            Share on Facebook
          </button>
          <button
            onClick={() => handleShare('instagram')}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
          >
            <Instagram className="w-5 h-5 text-[#E1306C]" />
            Share on Instagram
          </button>

          <div className="border-t border-white/10 pt-4">
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Link2 className="w-5 h-5 text-pink-500" />
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}