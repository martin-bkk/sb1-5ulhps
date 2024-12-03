import React from 'react';
import { Menu, X, Tags, Filter } from 'lucide-react';
import { CategoryType } from '../../types/settings';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setActiveCategory: (category: CategoryType) => void;
  setIsTagsOpen: (open: boolean) => void;
  setIsFiltersOpen: (open: boolean) => void;
}

const categories = [
  { id: 'creator', label: 'Content Creator Profile' },
  { id: 'girls', label: 'Girls' },
  { id: 'boys', label: 'Boys' },
  { id: 'couples', label: 'Couples' },
  { id: 'trans', label: 'Trans' }
] as const;

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  setActiveCategory,
  setIsTagsOpen,
  setIsFiltersOpen
}: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white p-2"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-purple-800/95 backdrop-blur-sm p-4 z-50">
          <button
            onClick={() => {
              setActiveCategory('creator');
              setIsMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-white bg-pink-500 rounded-lg mb-2"
          >
            Content Creator Profile
          </button>
          
          <div className="space-y-1">
            {categories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-white hover:bg-purple-700/50 rounded-lg"
              >
                {category.label}
              </button>
            ))}
            <div className="border-t border-white/10 my-2" />
            <button
              onClick={() => {
                setIsTagsOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-white hover:bg-purple-700/50 rounded-lg flex items-center"
            >
              <Tags className="w-4 h-4 mr-2" /> Tags
            </button>
            <button
              onClick={() => {
                setIsFiltersOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-white hover:bg-purple-700/50 rounded-lg flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" /> Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}