import React from 'react';
import { Crown, Eye, MessageCircle, Gift, EyeOff, Smile, Tag, Star } from 'lucide-react';

export default function MembershipTab() {
  return (
    <div className="space-y-6">
      {/* Membership Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Crown className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Only4U Membership</h2>
        </div>
        <p className="text-lg mb-4">
          Unlock an exclusive experience tailored just for you! Join our Only4U Membership and enjoy a host of premium benefits designed to enhance your interaction with models and elevate your browsing experience.
        </p>
        <div className="flex items-center gap-2 text-2xl font-bold">
          $20
          <span className="text-base font-normal opacity-80">per month</span>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Ad-Free Browsing</h3>
          </div>
          <p className="text-purple-200">
            Enjoy uninterrupted access to all our content without any distracting ads.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Private Messaging</h3>
          </div>
          <p className="text-purple-200">
            Connect with your favorite models through unlimited private messaging, allowing for deeper interactions.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <EyeOff className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Anonymous Chatting</h3>
          </div>
          <p className="text-purple-200">
            Go incognito! Browse and chat without revealing your identity, ensuring your privacy at all times.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Limited-Time Bonus</h3>
          </div>
          <p className="text-purple-200">
            Start your journey with a generous bonus of 200 free tokens upon joining, giving you immediate access to exclusive content.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Invisible Mode</h3>
          </div>
          <p className="text-purple-200">
            Activate invisible mode to browse the platform discreetly, ensuring that you can enjoy your experience without being seen by others.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Smile className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Enhanced Emoji Use</h3>
          </div>
          <p className="text-purple-200">
            Express yourself with a wide range of emojis in chats, adding fun and flair to your conversations.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Personalized Discounts</h3>
          </div>
          <p className="text-purple-200">
            Receive tailored discounts and special promotions to maximize your membership value and savings.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-pink-500" />
            <h3 className="text-lg font-semibold text-white">Priority Attention</h3>
          </div>
          <p className="text-purple-200">
            As a premium member, enjoy priority status, ensuring that models recognize and prioritize your interactions during live shows.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Join Today!</h3>
        <p className="text-purple-200 mb-6">
          Become a part of the Only4U community and elevate your experience. Sign up now to start enjoying these exclusive benefits!
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-xl hover:bg-pink-600 transition-colors font-semibold">
          Get Only4U Membership
        </button>
      </div>
    </div>
  );
}