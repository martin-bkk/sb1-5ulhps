import React, { useState } from 'react';
import { Users, MessageCircle, Sparkles, ChevronRight, AlertTriangle, Link, Shield, Palette } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [redirectPath, setRedirectPath] = useState('');

  const handleVerification = (path: string) => {
    setRedirectPath(path);
    setShowAgeVerification(true);
  };

  const handleConfirmAge = () => {
    setShowAgeVerification(false);
    window.location.href = redirectPath;
  };

  const brandMeaning = [
    {
      letter: 'O',
      word: 'On-demand',
      description: 'Emphasizing instant access to exclusive content whenever users want it.'
    },
    {
      letter: 'N',
      word: 'Niche',
      description: 'Catering to specific preferences and personalized experiences.'
    },
    {
      letter: 'L',
      word: 'Live',
      description: 'Highlighting live streaming and real-time interactions, a key aspect of adult platforms.'
    },
    {
      letter: 'Y',
      word: 'Your',
      description: 'Creating a sense of personalization and ownership for the user.'
    },
    {
      letter: '4',
      word: 'For You',
      description: 'Reinforcing exclusivity and tailored content by decentralized blockchain solutions..'
    },
    {
      letter: 'U',
      word: 'Unique',
      description: 'Focusing on exclusive, high-quality, or customized content offerings.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Connect. Share. Engage.
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Join millions of creators and fans on the fastest growing social platform designed for meaningful connections.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => handleVerification('/profiles')}
                className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors text-lg font-semibold text-center"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black/20 backdrop-blur-sm py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Empowering Your Digital Journey
            </h2>
            <p className="text-lg text-purple-200">
              Discover the features that make our platform unique and powerful
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/20">
              <Users className="w-12 h-12 text-pink-500 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Growing Community</h3>
              <p className="text-purple-200 group-hover:text-white transition-colors">Connect with millions of users worldwide who share your interests and passions.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/20">
              <MessageCircle className="w-12 h-12 text-pink-500 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Direct Engagement</h3>
              <p className="text-purple-200 group-hover:text-white transition-colors">Interact directly with your audience through live streams and private messages.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/20">
              <Sparkles className="w-12 h-12 text-pink-500 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Exclusive Content</h3>
              <p className="text-purple-200 group-hover:text-white transition-colors">Share and monetize your content with our flexible subscription model.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/20">
              <Link className="w-12 h-12 text-pink-500 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Seamless Integration</h3>
              <p className="text-purple-200 group-hover:text-white transition-colors">Easily connect your social media accounts and expand your reach across multiple platforms.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/20">
              <Shield className="w-12 h-12 text-pink-500 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Secure Transactions</h3>
              <p className="text-purple-200 group-hover:text-white transition-colors">Enjoy peace of mind with secure, encrypted payments and reliable transaction processing.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/20">
              <Palette className="w-12 h-12 text-pink-500 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Customizable Profiles</h3>
              <p className="text-purple-200 group-hover:text-white transition-colors">Personalize your profile with unique themes, bio sections, and media to showcase your identity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Meaning Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-purple-200">
              Discover the story behind Only4U and what sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandMeaning.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-pink-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-pink-500">{item.letter}</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-pink-500 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.word}</h3>
                <p className="text-purple-200 group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-2xl w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join Only4U today and start connecting with your audience
            </p>
            <button 
              onClick={() => handleVerification('/profiles')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors text-lg font-semibold inline-flex items-center"
            >
              Get Started <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Age Verification Modal */}
      {showAgeVerification && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-purple-900 to-indigo-900 p-8 rounded-2xl max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-pink-500" />
              <h2 className="text-2xl font-bold text-white">Age Verification Required</h2>
            </div>
            <p className="text-purple-200 mb-6">
              This content is intended for mature audiences aged 18 and over. By continuing, you confirm that you are at least 18 years old.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleConfirmAge}
                className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors font-semibold"
              >
                I am 18 or older
              </button>
              <button
                onClick={() => setShowAgeVerification(false)}
                className="flex-1 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}