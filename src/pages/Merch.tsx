import React, { useState } from 'react';
import MerchFilters from '../components/merch/MerchFilters';
import MerchCategories from '../components/merch/MerchCategories';
import MerchGrid from '../components/merch/MerchGrid';
import CartDrawer from '../components/merch/CartDrawer';
import { ShoppingBag } from 'lucide-react';

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState('new-arrivals');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    sizes: [] as string[],
    colors: [] as string[],
    materials: [] as string[],
    gender: [] as string[],
    discount: false,
    rating: 0,
    availability: 'all',
    shipping: 'all',
    newArrivals: false
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-white">Official Merch Only4U</h1>
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <div className="md:hidden flex gap-2">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Categories
              </button>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="md:w-48 space-y-4">
            <MerchCategories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              isOpen={isCategoryOpen}
              onClose={() => setIsCategoryOpen(false)}
            />
            <MerchFilters
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <MerchGrid
              category={selectedCategory}
              filters={filters}
            />
          </div>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}