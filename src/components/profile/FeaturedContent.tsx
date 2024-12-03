import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FeaturedContentProps {
  works: {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    link: string;
  }[];
}

export default function FeaturedContent({ works }: FeaturedContentProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Featured Work</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {works.map((work) => (
          <a
            key={work.id}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden"
          >
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{work.title}</h3>
                    <p className="text-purple-200 text-sm">{work.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}</content>