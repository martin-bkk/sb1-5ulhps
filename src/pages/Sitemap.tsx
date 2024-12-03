import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Settings, Heart, Shield, HelpCircle, FileText, Star, User, UserPlus, UsersRound, UserCog } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <Home className="w-5 h-5 text-pink-500" />,
      links: [
        { name: 'Popular Creators', path: '/profiles', icon: <Star className="w-4 h-4" /> },
        { name: 'Girls', path: '/profiles?category=girls', icon: <User className="w-4 h-4" /> },
        { name: 'Boys', path: '/profiles?category=boys', icon: <UserPlus className="w-4 h-4" /> },
        { name: 'Couples', path: '/profiles?category=couples', icon: <UsersRound className="w-4 h-4" /> },
        { name: 'Trans', path: '/profiles?category=trans', icon: <UserCog className="w-4 h-4" /> },
        { name: 'Home', path: '/' },
        { name: 'Profiles', path: '/profiles' },
        { name: 'Trending Posts', path: '/trending' },
        { name: 'Watch History', path: '/history' },
        { name: 'Private Chats', path: '/chats' }
      ]
    },
    {
      title: 'Account',
      icon: <Users className="w-5 h-5 text-pink-500" />,
      links: [
        { name: 'Settings', path: '/settings' },
        { name: 'Profile', path: '/profile' }
      ]
    },
    {
      title: 'Company',
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' }
      ]
    },
    {
      title: 'Support',
      icon: <HelpCircle className="w-5 h-5 text-pink-500" />,
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Safety Center', path: '/safety' },
        { name: 'Community Guidelines', path: '/guidelines' }
      ]
    },
    {
      title: 'Legal',
      icon: <Shield className="w-5 h-5 text-pink-500" />,
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookie' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Sitemap</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Find all our pages in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-purple-200 hover:text-pink-400 transition-colors flex items-center gap-2"
                    >
                      {link.icon || <FileText className="w-4 h-4" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Optimization Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Popular Creators', 'Girls', 'Boys', 'Couples', 'Trans'].map((category) => (
              <Link
                key={category}
                to={`/profiles?category=${category.toLowerCase()}`}
                className="bg-purple-800/30 backdrop-blur-sm px-6 py-3 rounded-xl text-white hover:bg-pink-500/20 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}