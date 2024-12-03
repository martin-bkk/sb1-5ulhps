import React from 'react';
import { Newspaper, Download, Mail } from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    date: "March 15, 2024",
    title: "Only4U Reaches 10 Million Active Users Milestone",
    excerpt: "Platform celebrates exponential growth and announces new creator-first features."
  },
  {
    id: 2,
    date: "February 28, 2024",
    title: "Only4U Launches Revolutionary Content Monetization Tools",
    excerpt: "New suite of tools empowers creators with more ways to earn from their content."
  },
  {
    id: 3,
    date: "January 10, 2024",
    title: "Only4U Secures $50M Series B Funding",
    excerpt: "Investment to fuel global expansion and platform development."
  }
];

const mediaAssets = [
  {
    id: 1,
    title: "Brand Guidelines",
    size: "2.5 MB",
    format: "PDF"
  },
  {
    id: 2,
    title: "Logo Package",
    size: "15 MB",
    format: "ZIP"
  },
  {
    id: 3,
    title: "Press Photos",
    size: "25 MB",
    format: "ZIP"
  }
];

export default function Press() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Press Center</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Get the latest news, updates, and media resources about Only4U.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <Mail className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Media Inquiries</h3>
            <p className="text-purple-200 mb-4">
              For press inquiries, please contact our media relations team.
            </p>
            <a href="mailto:press@only4u.com" className="text-pink-400 hover:text-pink-300">
              press@only4u.com
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <Newspaper className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Latest News</h3>
            <p className="text-purple-200 mb-4">
              Stay updated with our latest announcements and company news.
            </p>
            <button className="text-pink-400 hover:text-pink-300">
              Subscribe to Updates
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <Download className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Media Kit</h3>
            <p className="text-purple-200 mb-4">
              Download our brand assets, logos, and media resources.
            </p>
            <button className="text-pink-400 hover:text-pink-300">
              Download Media Kit
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <div key={release.id} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <span className="text-sm text-purple-300">{release.date}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2">
                    {release.title}
                  </h3>
                  <p className="text-purple-200 mb-4">{release.excerpt}</p>
                  <button className="text-pink-400 hover:text-pink-300">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Media Assets</h2>
            <div className="space-y-4">
              {mediaAssets.map((asset) => (
                <div key={asset.id} className="flex items-center justify-between bg-purple-800/30 p-4 rounded-lg">
                  <div>
                    <h3 className="text-white font-medium mb-1">{asset.title}</h3>
                    <p className="text-sm text-purple-200">
                      {asset.size} • {asset.format}
                    </p>
                  </div>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}