import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface ProfileFiltersProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  ageRange: { min: number; max: number | null };
  setAgeRange: (range: { min: number; max: number | null }) => void;
}

const regions = [
  { id: 'all', label: 'All Regions' },
  { id: 'north-america', label: 'North America' },
  { id: 'europe', label: 'Europe' },
  { id: 'asia', label: 'Asia' },
  { id: 'latin-america', label: 'Latin America' },
  { id: 'africa', label: 'Africa' },
  { id: 'oceania', label: 'Oceania' }
] as const;

const tags = [
  'tiny', 'valorant', 'schoolgirl', 'gamer', 'beard', 'dominant', 'colombia',
  'smoking', 'dp', 'tattoos', 'naked', 'bigdildo', 'thickcock', 'bwc',
  'belly', 'saggyboobs', 'redhair', 'brazilian', 'halloween', 'footfetish',
  'sloppy', 'foreskin', 'hung', 'bigbelly', 'spanish', 'deustch', 'shower',
  'boobs', 'yoga', 'germany', 'sexy', 'handjob', 'smalldick', 'edge',
  'hugecock', 'bondage', 'fuck', 'creamy', 'bimbo', 'black'
].sort();

const ProfileFilters: React.FC<ProfileFiltersProps> = ({
  selectedRegion,
  setSelectedRegion,
  selectedTags,
  setSelectedTags,
  ageRange,
  setAgeRange
}) => {
  const [tagSearch, setTagSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  const filteredTags = tags.filter(tag => 
    tag.toLowerCase().includes(tagSearch.toLowerCase())
  );

  const TAGS_PER_PAGE = 30;
  const totalPages = Math.ceil(filteredTags.length / TAGS_PER_PAGE);
  const currentTags = filteredTags.slice(
    (currentPage - 1) * TAGS_PER_PAGE,
    currentPage * TAGS_PER_PAGE
  );

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="bg-purple-800/50 backdrop-blur-sm rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Filters</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-purple-200 hover:text-white"
        >
          {isExpanded ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Age Range and Region Filters */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-sm font-semibold mb-2">Age Range</h3>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={ageRange.min}
                    onChange={(e) => setAgeRange({ ...ageRange, min: Number(e.target.value) })}
                    min="18"
                    placeholder="18"
                    className="w-16 px-2 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm"
                  />
                  <span className="text-white self-center text-sm">to</span>
                  <input
                    type="number"
                    value={ageRange.max || ''}
                    onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value ? Number(e.target.value) : null })}
                    min={ageRange.min}
                    placeholder="Any"
                    className="w-16 px-2 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-white text-sm font-semibold mb-2">Region</h3>
                <div className="relative w-full md:w-1/2">
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-2 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
                  >
                    {regions.map((region) => (
                      <option key={`region-${region.id}`} value={region.id} className="bg-purple-900">
                        {region.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="md:col-span-8 md:pl-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-white text-sm font-semibold">Tags</h3>
                <div className="relative w-1/3">
                  <input
                    type="text"
                    value={tagSearch}
                    onChange={(e) => {
                      setTagSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search tags..."
                    className="w-full pl-8 pr-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm"
                  />
                  <Search className="absolute left-2 top-2 w-4 h-4 text-white/50" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentTags.map((tag) => (
                  <button
                    key={`tag-${tag}`}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={`page-${page}`}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2.5 py-1 rounded-md text-xs ${
                        currentPage === page
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {(selectedTags.length > 0 || selectedRegion !== 'all' || ageRange.max !== null) && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => {
              setSelectedTags([]);
              setSelectedRegion('all');
              setAgeRange({ min: 18, max: null });
              setTagSearch('');
            }}
            className="flex items-center text-pink-400 hover:text-pink-300 text-sm"
          >
            <X className="w-4 h-4 mr-1" />
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileFilters;