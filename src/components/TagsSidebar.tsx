import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

interface TagsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const tags = [
  'tiny', 'valorant', 'schoolgirl', 'gamer', 'beard', 'dominant', 'colombia',
  'smoking', 'dp', 'tattoos', 'naked', 'bigdildo', 'thickcock', 'bwc',
  'belly', 'saggyboobs', 'redhair', 'brazilian', 'halloween', 'footfetish',
  'sloppy', 'foreskin', 'hung', 'bigbelly', 'spanish', 'deustch', 'shower',
  'boobs', 'yoga', 'germany', 'sexy', 'handjob', 'smalldick', 'edge',
  'hugecock', 'bondage', 'fuck', 'creamy', 'bimbo', 'black',
  // New tags
  'orgasm', 'cumslut', 'lovensecontrol', 'naughty', 'tongue', 'muscleworship',
  'smoker', 'facial', 'outside', 'lingerie', 'hotwife', 'little', 'spank',
  'gag', 'chat', 'dilf', 'fatpussy', 'gloves', 'nude', 'cumface', 'dominatrix',
  'sissyfication', 'uk', 'pinkpussy', 'chinese', 'cumshot', 'flex',
  'piercingnipples', 'smooth', 'tits', 'ride', 'amateur', 'fitbody',
  'hugeboobs', 'nora', 'beautiful', 'doublepenetration', 'gamergirl',
  'piercednipples', 'masturbate', 'tightpussy', 'toes', 'colombian',
  'pierced', 'transgirl'
].sort();

export default function TagsSidebar({ 
  isOpen, 
  onClose,
  selectedTags,
  setSelectedTags 
}: TagsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTags = tags.filter(tag => 
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-[200px] h-full bg-purple-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Header - Fixed */}
      <div className="p-4 pt-20 border-b border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Tags</h2>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tags..."
            className="w-full pl-8 pr-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm"
          />
          <Search className="absolute left-2 top-2 w-4 h-4 text-white/50" />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
        <div className="p-2 grid grid-cols-2 gap-1">
          {filteredTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2 py-0.5 rounded-lg text-sm truncate ${
                selectedTags.includes(tag)
                  ? 'bg-pink-500 text-white'
                  : 'text-white hover:bg-purple-700/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}