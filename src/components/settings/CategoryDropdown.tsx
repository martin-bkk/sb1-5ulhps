import React from 'react';
import { Tags, Filter, ChevronDown } from 'lucide-react';
import { CategoryType } from '../../types/settings';

interface CategoryDropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
  activeCategory: CategoryType;
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

export default function CategoryDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
  activeCategory,
  setActiveCategory,
  setIsTagsOpen,
  setIsFiltersOpen
}: CategoryDropdownProps) {
  return (
    <div className="hidden md:block relative" id="category-dropdown">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`w-full py-2 px-6 text-sm font-medium transition-colors whitespace-nowrap rounded-xl ${
          activeCategory === 'creator'
            ? 'bg-pink-500 text-white'
            : 'text-white hover:bg-pink-500/20'
        }`}
      >
        Content Creator Profile
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform inline-block ${
          isDropdownOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-purple-800/95 backdrop-blur-sm rounded-xl shadow-lg py-2 z-50">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setIsDropdownOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-white hover:bg-purple-700/50"
            >
              {category.label}
            </button>
          ))}
          <div className="border-t border-white/10 my-2" />
          <button
            onClick={() => {
              setIsTagsOpen(true);
              setIsDropdownOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-white hover:bg-purple-700/50 flex items-center"
          >
            <Tags className="w-4 h-4 mr-2" /> Tags
          </button>
          <button
            onClick={() => {
              setIsFiltersOpen(true);
              setIsDropdownOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-white hover:bg-purple-700/50 flex items-center"
          >
            <Filter className="w-4 h-4 mr-2" /> Filters
          </button>
        </div>
      )}
    </div>
  );
}