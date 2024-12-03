import React from 'react';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilters: FilterType;
  setSelectedFilters: (filters: FilterType) => void;
}

type FilterType = {
  age: string;
  ethnicity: string;
  bodyType: string;
  hair: string;
  adultDiversity: string;
};

const filterOptions = {
  age: [
    { label: '18+', count: 2453 },
    { label: '22+', count: 1876 },
    { label: '30+', count: 945 },
    { label: 'Milf', count: 678 },
    { label: 'Mature', count: 432 }
  ],
  ethnicity: [
    { label: 'Arab', count: 234 },
    { label: 'Asian', count: 1543 },
    { label: 'Ebony', count: 876 },
    { label: 'Indian', count: 432 },
    { label: 'Latina', count: 987 },
    { label: 'Mixed', count: 543 },
    { label: 'White', count: 2345 }
  ],
  bodyType: [
    { label: 'Skinny', count: 876 },
    { label: 'Athletic', count: 1234 },
    { label: 'Medium', count: 2134 },
    { label: 'Curvy', count: 1654 },
    { label: 'BBW', count: 432 }
  ],
  hair: [
    { label: 'Blond', count: 1234 },
    { label: 'Black', count: 987 },
    { label: 'Brunette', count: 1876 },
    { label: 'Redhead', count: 432 },
    { label: 'Colorful', count: 234 }
  ],
  adultDiversity: [
    { label: 'Amateur', count: 1543 },
    { label: 'BDSM', count: 876 },
    { label: 'Gay', count: 654 },
    { label: 'Group Sex', count: 432 },
    { label: 'Kinky', count: 987 },
    { label: 'Lesbian', count: 765 },
    { label: 'LGBTQ+', count: 543 },
    { label: 'MILF', count: 876 },
    { label: 'Teen 18+', count: 1234 }
  ]
};

export default function FilterSidebar({ 
  isOpen, 
  onClose, 
  selectedFilters, 
  setSelectedFilters 
}: FilterSidebarProps) {
  return (
    <div 
      className={`fixed top-0 right-0 w-[200px] h-full bg-purple-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header - Fixed */}
      <div className="p-4 pt-20 border-b border-white/10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Filters</h2>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
        <div className="p-4 space-y-4">
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-1 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div>
                {options.map(({ label, count }) => (
                  <button
                    key={label}
                    onClick={() => setSelectedFilters({ ...selectedFilters, [category]: label })}
                    className={`flex justify-between w-full px-3 py-0.5 rounded-lg text-sm ${
                      selectedFilters[category as keyof FilterType] === label
                        ? 'bg-pink-500 text-white'
                        : 'text-white hover:bg-purple-700/50'
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-xs opacity-60">{count}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}