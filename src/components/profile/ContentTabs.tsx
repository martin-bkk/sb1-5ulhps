import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';
import { getImageUrl } from '../../utils/dummyData';
import SubscriptionPlans from '../SubscriptionPlans';
import MembershipTab from '../SettingsTabs/MembershipTab';

interface ContentTabsProps {
  activeTab: 'media' | 'similar' | 'subscription' | 'membership';
}

export default function ContentTabs({ activeTab }: ContentTabsProps) {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'media':
        return (
          <>
            {/* Content Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={`content-${i}`} className="aspect-square rounded-xl overflow-hidden relative group">
                  <img
                    src={getImageUrl('content', i)}
                    alt={`Content ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    {i % 2 === 0 ? (
                      <div className="bg-purple-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Video
                      </div>
                    ) : (
                      <div className="bg-pink-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <ImageIcon className="w-3 h-3" />
                        Photo
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Content & Promotions */}
            <div className="space-y-8">
              {/* Custom Background Theme */}
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Creator Showcase</h3>
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <img
                    src={getImageUrl('livestream', 0)}
                    alt="Featured showcase"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Latest Collection</h4>
                      <p className="text-white/90">Explore my newest creative works and exclusive content</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promotional Banners */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Special Offer!</h4>
                  <p className="mb-4">Get 30% off on all subscriptions this week</p>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Upcoming Event</h4>
                  <p className="mb-4">Join my live art session this Saturday</p>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>

              {/* Custom Links */}
              <div className="bg-purple-800/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="#" className="bg-pink-500/20 text-pink-300 p-4 rounded-xl text-center hover:bg-pink-500/30 transition-colors">
                    Portfolio
                  </a>
                  <a href="#" className="bg-purple-500/20 text-purple-300 p-4 rounded-xl text-center hover:bg-purple-500/30 transition-colors">
                    Commission Info
                  </a>
                  <a href="#" className="bg-indigo-500/20 text-indigo-300 p-4 rounded-xl text-center hover:bg-indigo-500/30 transition-colors">
                    Merch Store
                  </a>
                  <a href="#" className="bg-blue-500/20 text-blue-300 p-4 rounded-xl text-center hover:bg-blue-500/30 transition-colors">
                    Support
                  </a>
                </div>
              </div>
            </div>
          </>
        );

      case 'similar':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={`similar-${i}`} className="aspect-video rounded-xl overflow-hidden relative group">
                <img
                  src={getImageUrl('livestream', i)}
                  alt={`Stream ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white font-semibold">Similar Creator {i + 1}</h3>
                  <p className="text-white/80 text-sm">Live Now</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'subscription':
        return (
          <SubscriptionPlans
            plans={[
              {
                id: 1,
                name: "Basic",
                price: "10 USDC",
                duration: "month",
                features: [
                  "Access to basic content",
                  "Chat participation",
                  "Monthly exclusive updates",
                  "Basic NFT badge"
                ]
              },
              {
                id: 2,
                name: "Premium",
                price: "25 USDC",
                duration: "month",
                features: [
                  "All Basic features",
                  "Private messaging",
                  "Weekly exclusive content",
                  "Premium NFT collection",
                  "Priority support"
                ],
                recommended: true
              },
              {
                id: 3,
                name: "VIP",
                price: "50 USDC",
                duration: "month",
                features: [
                  "All Premium features",
                  "Daily exclusive content",
                  "Custom NFT artwork",
                  "One-on-one video calls",
                  "Early access to new content",
                  "Exclusive merchandise"
                ]
              }
            ]}
          />
        );

      case 'membership':
        return <MembershipTab />;

      default:
        return null;
    }
  };

  return (
    <div className="mt-8">
      {renderTabContent()}
    </div>
  );
}