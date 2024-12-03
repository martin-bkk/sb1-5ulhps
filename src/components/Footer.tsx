import React from 'react';
import { Heart, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900/80 via-blue-800/80 to-blue-700/80 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <Heart className="w-6 h-6 text-pink-500 mr-2" />
              Only4U
            </Link>
            <p className="text-purple-200 text-sm">
              The premier platform for content creators and their dedicated fans.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-purple-200">
              <li><Link to="/about" className="hover:text-pink-400">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-pink-400">Careers</Link></li>
              <li><Link to="/press" className="hover:text-pink-400">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-purple-200">
              <li><Link to="/help" className="hover:text-pink-400">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-pink-400">Safety Center</Link></li>
              <li><Link to="/guidelines" className="hover:text-pink-400">Community Guidelines</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-purple-200">
              <li><Link to="/privacy" className="hover:text-pink-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-pink-400">Terms of Service</Link></li>
              <li><Link to="/cookie" className="hover:text-pink-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-purple-200">
          <p>&copy; {new Date().getFullYear()} Only4U. All rights reserved.</p>
          <Link to="/sitemap" className="flex items-center gap-2 hover:text-pink-400 transition-colors mt-4 md:mt-0">
            <Map className="w-4 h-4" />
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}