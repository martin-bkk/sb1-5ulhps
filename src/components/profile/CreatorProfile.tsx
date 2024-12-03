import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Briefcase, 
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Facebook
} from 'lucide-react';
import FeaturedContent from './FeaturedContent';
import SkillsSection from './SkillsSection';
import AchievementsSection from './AchievementsSection';
import ContactSection from './ContactSection';

interface CreatorProfileProps {
  profile: {
    name: string;
    tagline: string;
    avatarUrl: string;
    bannerUrl: string;
    bio: string;
    location: string;
    website: string;
    email: string;
    socialLinks: {
      platform: string;
      url: string;
      followers: number;
    }[];
    skills: string[];
    achievements: {
      title: string;
      description: string;
      date: string;
    }[];
    featuredWork: {
      id: string;
      title: string;
      imageUrl: string;
      category: string;
      link: string;
    }[];
  };
}

export default function CreatorProfile({ profile }: CreatorProfileProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto flex items-end gap-8">
            <div className="relative">
              <img 
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Pro
              </div>
            </div>
            
            <div className="flex-grow pb-2">
              <h1 className="text-4xl font-bold text-white mb-2">{profile.name}</h1>
              <p className="text-xl text-purple-200 mb-4">{profile.tagline}</p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-purple-200">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                {profile.website && (
                  <a 
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                )}
                <a 
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-white/20 transition-colors group"
                >
                  {link.platform === 'instagram' && <Instagram className="w-5 h-5 text-pink-500" />}
                  {link.platform === 'twitter' && <Twitter className="w-5 h-5 text-blue-400" />}
                  {link.platform === 'youtube' && <Youtube className="w-5 h-5 text-red-500" />}
                  {link.platform === 'facebook' && <Facebook className="w-5 h-5 text-blue-600" />}
                  <span className="sr-only">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - About & Skills */}
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <p className="text-purple-200 whitespace-pre-line">{profile.bio}</p>
            </div>

            {/* Skills Section */}
            <SkillsSection skills={profile.skills} />

            {/* Achievements Section */}
            <AchievementsSection achievements={profile.achievements} />
          </div>

          {/* Right Column - Featured Work & Contact */}
          <div className="col-span-2 space-y-8">
            {/* Featured Content */}
            <FeaturedContent works={profile.featuredWork} />

            {/* Promotional Banner */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
              <p className="mb-6">Let's create something amazing together!</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Contact Section */}
            <ContactSection 
              email={profile.email}
              website={profile.website}
              socialLinks={profile.socialLinks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}</content>