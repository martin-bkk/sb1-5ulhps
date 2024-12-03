import React from 'react';
import { X } from 'lucide-react';

interface MerchCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'new-arrivals', label: 'New Arrivals' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 'caps', label: 'Caps' },
  { id: 'shorts', label: 'Shorts' },
  { id: 'swimwear', label: 'Swimwear' }
];

export default function MerchCategories({ selectedCategory, setSelectedCategory, isOpen, onClose }: MerchCategoriesProps) {
  const categoriesList = (
    <div className="space-y-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            setSelectedCategory(category.id);
            onClose();
          }}
          className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
            selectedCategory === category.id
              ? 'bg-pink-500 text-white'
              : 'text-white hover:bg-pink-500/20'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Categories */}
      <div className="hidden md:block bg-purple-800/30 backdrop-blur-sm rounded-xl p-4">
        <h2 className="text-lg font-bold text-white mb-3">Categories</h2>
        {categoriesList}
      </div>

      {/* Mobile Categories */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-64 bg-purple-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Categories</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          {categoriesList}
        </div>
      </div>
    </>
  );
}