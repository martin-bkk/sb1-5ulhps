import React from 'react';
import { Users, Heart, Shield, AlertTriangle, MessageCircle, ThumbsDown } from 'lucide-react';

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Community Guidelines</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our community thrives on respect, safety, and positive interactions. These guidelines help maintain a welcoming environment for all.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Heart className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Respect</h2>
            <p className="text-purple-200">
              Treat all community members with kindness and respect, regardless of their background or beliefs.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Shield className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Safety</h2>
            <p className="text-purple-200">
              Prioritize the safety and well-being of yourself and others in all interactions.
            </p>
          </div>

          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
            <Users className="w-8 h-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Community</h2>
            <p className="text-purple-200">
              Foster a positive and inclusive environment where everyone feels welcome.
            </p>
          </div>
        </div>

        {/* Guidelines Sections */}
        <div className="space-y-8">
          {/* Content Guidelines */}
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Content Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Acceptable Content</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-purple-200">
                    <Heart className="w-5 h-5 text-pink-500 mt-1" />
                    Original, creative content
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <Heart className="w-5 h-5 text-pink-500 mt-1" />
                    Age-appropriate material
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <Heart className="w-5 h-5 text-pink-500 mt-1" />
                    Properly tagged content
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Prohibited Content</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-purple-200">
                    <ThumbsDown className="w-5 h-5 text-pink-500 mt-1" />
                    Hate speech or discrimination
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <ThumbsDown className="w-5 h-5 text-pink-500 mt-1" />
                    Harassment or bullying
                  </li>
                  <li className="flex items-start gap-2 text-purple-200">
                    <ThumbsDown className="w-5 h-5 text-pink-500 mt-1" />
                    Explicit or illegal content
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interaction Guidelines */}
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Interaction Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Communication Standards</h3>
                <div className="space-y-3">
                  <p className="text-purple-200 flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-pink-500 mt-1" />
                    Use respectful language and tone
                  </p>
                  <p className="text-purple-200 flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-pink-500 mt-1" />
                    Avoid spam and excessive self-promotion
                  </p>
                  <p className="text-purple-200 flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-pink-500 mt-1" />
                    Report inappropriate behavior
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Privacy & Safety</h3>
                <div className="space-y-3">
                  <p className="text-purple-200 flex items-start gap-2">
                    <Shield className="w-5 h-5 text-pink-500 mt-1" />
                    Protect personal information
                  </p>
                  <p className="text-purple-200 flex items-start gap-2">
                    <Shield className="w-5 h-5 text-pink-500 mt-1" />
                    Respect others' privacy
                  </p>
                  <p className="text-purple-200 flex items-start gap-2">
                    <Shield className="w-5 h-5 text-pink-500 mt-1" />
                    Use secure payment methods
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enforcement */}
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Enforcement</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Violations & Consequences</h3>
                  <p className="text-purple-200">
                    Violations of these guidelines may result in content removal, account suspension, or permanent ban, depending on the severity and frequency of the violation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Appeals Process</h3>
                  <p className="text-purple-200">
                    Users can appeal enforcement actions through our support system. Appeals are reviewed by our moderation team within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}