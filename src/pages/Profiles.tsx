import React, { useState } from 'react';
import ProfileGrid from '../components/ProfileGrid';
import FilterSidebar from '../components/FilterSidebar';
import TagsSidebar from '../components/TagsSidebar';
import { Link, useNavigate } from 'react-router-dom';
import { useProfiles } from '../hooks/useProfiles';
import { Menu, Tags, Filter, X, ShoppingBag } from 'lucide-react';

type Category = 'all' | 'girls' | 'boys' | 'couples' | 'trans';

export default function Profiles() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({
    age: '',
    ethnicity: '',
    bodyType: '',
    hair: ''
  });

  const { profiles, loading, error } = useProfiles(currentPage);

  const loadMore = () => {
    if (!loading) {
      setCurrentPage(prev => prev + 1);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-purple-700 pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Error Loading Profiles</h1>
          <p className="text-purple-200">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-700 overflow-x-hidden">
      <div className="pt-20">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center px-4 mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-white p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="font-medium">
              {activeCategory === 'all' ? 'Popular Creators' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsTagsOpen(!isTagsOpen);
                if (isFilterOpen) setIsFilterOpen(false);
                setIsMobileMenuOpen(false);
              }}
              className={`p-2 text-white rounded-lg ${isTagsOpen ? 'bg-pink-500' : ''}`}
            >
              <Tags className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                if (isTagsOpen) setIsTagsOpen(false);
                setIsMobileMenuOpen(false);
              }}
              className={`p-2 text-white rounded-lg ${isFilterOpen ? 'bg-pink-500' : ''}`}
            >
              <Filter className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Category Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[80px] bg-purple-900/95 backdrop-blur-sm z-50 border-t border-b border-white/10">
            <div className="py-2 px-4">
              {['all', 'girls', 'boys', 'couples', 'trans', 'merch'].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category as Category);
                    setIsMobileMenuOpen(false);
                    if (category === 'merch') {
                      navigate('/merch');
                      return;
                    }
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg ${
                    activeCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'text-white hover:bg-pink-500/20'
                  }`}
                >
                  {category === 'all' ? 'Popular Creators' : 
                   category === 'merch' ? 'Merch' : 
                   category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:block px-4 mb-1">
          <div className="flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm rounded-xl p-1">
            {/* Categories */}
            <div className="flex gap-1">
              {['all', 'girls', 'boys', 'couples', 'trans'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as Category)}
                  className={`py-2 px-4 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                    activeCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'text-white hover:bg-pink-500/20'
                  }`}
                >
                  {category === 'all' ? 'Popular Creators' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10"></div>

            {/* Tags and Filters with Divider */}
            <div className="flex gap-1">
              <button
                onClick={() => {
                  setIsTagsOpen(!isTagsOpen);
                  if (isFilterOpen) setIsFilterOpen(false);
                }}
                className={`flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                  isTagsOpen ? 'bg-pink-500 text-white' : 'text-white hover:bg-pink-500/20'
                }`}
              >
                <Tags className="w-4 h-4" />
                Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
              </button>
              <button
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  if (isTagsOpen) setIsTagsOpen(false);
                }}
                className={`flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                  isFilterOpen ? 'bg-pink-500 text-white' : 'text-white hover:bg-pink-500/20'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>

              {/* Divider */}
              <div className="h-8 w-px bg-white/10 mx-1"></div>

              {/* Merch Tab - Right Aligned */}
              <Link
                to="/merch"
                className="flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors whitespace-nowrap rounded-lg text-white hover:bg-pink-500/20 ml-auto"
              >
                <ShoppingBag className="w-4 h-4" />
                Merch
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="px-4">
          <ProfileGrid
            profiles={profiles}
            loading={loading}
            onLoadMore={loadMore}
          />
        </div>
      </div>

      {/* Sidebars */}
      <TagsSidebar
        isOpen={isTagsOpen}
        onClose={() => setIsTagsOpen(false)}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </div>
  );
}