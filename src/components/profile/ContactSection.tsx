import React from 'react';
import { Mail, Globe, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  website: string;
  socialLinks: {
    platform: string;
    url: string;
    followers: number;
  }[];
}

export default function ContactSection({ email, website, socialLinks }: ContactSectionProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 bg-purple-800/30 p-4 rounded-xl hover:bg-purple-700/30 transition-colors"
        >
          <Mail className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-white font-medium">Email</p>
            <p className="text-purple-200 text-sm">{email}</p>
          </div>
        </a>

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-purple-800/30 p-4 rounded-xl hover:bg-purple-700/30 transition-colors"
          >
            <Globe className="w-5 h-5 text-pink-500" />
            <div>
              <p className="text-white font-medium">Website</p>
              <p className="text-purple-200 text-sm">Visit Site</p>
            </div>
          </a>
        )}

        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-purple-800/30 p-4 rounded-xl hover:bg-purple-700/30 transition-colors"
          >
            {link.platform === 'instagram' && <Instagram className="w-5 h-5 text-pink-500" />}
            {link.platform === 'twitter' && <Twitter className="w-5 h-5 text-blue-400" />}
            {link.platform === 'youtube' && <Youtube className="w-5 h-5 text-red-500" />}
            {link.platform === 'facebook' && <Facebook className="w-5 h-5 text-blue-600" />}
            <div>
              <p className="text-white font-medium capitalize">{link.platform}</p>
              <p className="text-purple-200 text-sm">{link.followers.toLocaleString()} followers</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}</content>