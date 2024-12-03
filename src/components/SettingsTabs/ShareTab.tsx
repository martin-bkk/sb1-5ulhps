import React from 'react';
import { Copy, Facebook, Twitter, Instagram, Link2 } from 'lucide-react';

export default function ShareTab() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Share Your Profile</h2>
        <div className="space-y-4">
          <div className="bg-purple-800/30 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Link2 className="w-5 h-5 text-pink-500" />
                <span className="text-white font-medium">Profile Link</span>
              </div>
              <button
                onClick={() => handleCopy('https://only4u.com/profile/username')}
                className="text-pink-400 hover:text-pink-300 flex items-center gap-1"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
            <input
              type="text"
              value="https://only4u.com/profile/username"
              readOnly
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white p-3 rounded-xl hover:bg-[#1a8cd8] transition-colors">
              <Twitter className="w-5 h-5" />
              Share on Twitter
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#4267B2] text-white p-3 rounded-xl hover:bg-[#365899] transition-colors">
              <Facebook className="w-5 h-5" />
              Share on Facebook
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#E1306C] text-white p-3 rounded-xl hover:bg-[#c13584] transition-colors">
              <Instagram className="w-5 h-5" />
              Share on Instagram
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Embed Profile</h2>
        <div className="space-y-4">
          <p className="text-purple-200">Add your profile to your website or blog</p>
          <div className="bg-purple-800/30 p-4 rounded-xl">
            <pre className="text-purple-200 text-sm overflow-x-auto">
              {`<iframe src="https://only4u.com/embed/profile/username" width="100%" height="600" frameborder="0"></iframe>`}
            </pre>
            <button
              onClick={() => handleCopy('<iframe src="https://only4u.com/embed/profile/username" width="100%" height="600" frameborder="0"></iframe>')}
              className="mt-2 text-pink-400 hover:text-pink-300 flex items-center gap-1"
            >
              <Copy className="w-4 h-4" />
              Copy Embed Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}