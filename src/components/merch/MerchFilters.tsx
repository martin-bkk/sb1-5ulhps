import React from 'react';
import { X } from 'lucide-react';

interface MerchFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    priceRange: number[];
    sizes: string[];
    colors: string[];
    materials: string[];
    gender: string[];
    discount: boolean;
    rating: number;
    availability: string;
    shipping: string;
    newArrivals: boolean;
  };
  setFilters: (filters: any) => void;
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];
const colors = ['Black', 'White'];
const materials = ['Cotton', 'Polyester'];
const genders = ['Men', 'Women', 'Unisex'];

export default function MerchFilters({ isOpen, onClose, filters, setFilters }: MerchFiltersProps) {
  const filterContent = (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="space-y-1">
        <h3 className="text-white text-sm font-medium">Price Range</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
              className="w-full"
            />
            <span className="text-white">${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-1">
        <h3 className="text-white text-sm font-medium">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                const newSizes = filters.sizes.includes(size)
                  ? filters.sizes.filter(s => s !== size)
                  : [...filters.sizes, size];
                setFilters({ ...filters, sizes: newSizes });
              }}
              className={`px-2 py-0.5 text-xs rounded-lg ${
                filters.sizes.includes(size)
                  ? 'bg-pink-500 text-white'
                  : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-1">
        <h3 className="text-white text-sm font-medium">Colors</h3>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                const newColors = filters.colors.includes(color)
                  ? filters.colors.filter(c => c !== color)
                  : [...filters.colors, color];
                setFilters({ ...filters, colors: newColors });
              }}
              className={`px-2 py-0.5 text-xs rounded-lg ${
                filters.colors.includes(color)
                  ? 'bg-pink-500 text-white'
                  : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="space-y-1">
        <h3 className="text-white text-sm font-medium">Materials</h3>
        <div className="flex gap-2">
          {materials.map((material) => (
            <button
              key={material}
              onClick={() => {
                const newMaterials = filters.materials.includes(material)
                  ? filters.materials.filter(m => m !== material)
                  : [...filters.materials, material];
                setFilters({ ...filters, materials: newMaterials });
              }}
              className={`px-2 py-0.5 text-xs rounded-lg ${
                filters.materials.includes(material)
                  ? 'bg-pink-500 text-white'
                  : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
              }`}
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div className="space-y-1">
        <h3 className="text-white text-sm font-medium">Gender</h3>
        <div className="flex gap-2">
          {genders.map((gender) => (
            <button
              key={gender}
              onClick={() => {
                const newGenders = filters.gender.includes(gender)
                  ? filters.gender.filter(g => g !== gender)
                  : [...filters.gender, gender];
                setFilters({ ...filters, gender: newGenders });
              }}
              className={`px-2 py-0.5 text-xs rounded-lg ${
                filters.gender.includes(gender)
                  ? 'bg-pink-500 text-white'
                  : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Filters */}
      <div className="space-y-1">
        <label className="flex items-center gap-2 text-white text-sm">
          <input
            type="checkbox"
            checked={filters.discount}
            onChange={(e) => setFilters({ ...filters, discount: e.target.checked })}
            className="w-4 h-4 rounded border-white/20 text-pink-500 focus:ring-pink-500"
          />
          On Sale
        </label>
        <label className="flex items-center gap-2 text-white text-sm">
          <input
            type="checkbox"
            checked={filters.newArrivals}
            onChange={(e) => setFilters({ ...filters, newArrivals: e.target.checked })}
            className="w-4 h-4 rounded border-white/20 text-pink-500 focus:ring-pink-500"
          />
          New Arrivals
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block bg-purple-800/30 backdrop-blur-sm rounded-xl p-4">
        <h2 className="text-lg font-bold text-white mb-3">Filters</h2>
        {filterContent}
      </div>

      {/* Mobile Filters */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-purple-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Filters</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          {filterContent}
        </div>
      </div>
    </>
  );
}