import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';

interface MerchGridProps {
  category: string;
  filters: any;
}

const products = [
  // T-Shirts
  {
    id: 1,
    name: "Only4U Classic Logo Tee - White",
    price: 29.99,
    rating: "4.8",
    reviews: 124,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: false,
    salePrice: null,
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex"
  },
  {
    id: 2,
    name: "Only4U Crop Top - White",
    price: 24.99,
    rating: "4.9",
    reviews: 89,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: true,
    salePrice: 19.99,
    colors: ["White"],
    sizes: ["S", "M", "L"],
    gender: "Women"
  },
  {
    id: 3,
    name: "Only4U Classic Logo Tee - Black",
    price: 29.99,
    rating: "4.7",
    reviews: 76,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: false,
    onSale: false,
    salePrice: null,
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: "Unisex"
  },
  // Additional products to fill the grid
  {
    id: 4,
    name: "Only4U Summer Collection Tee",
    price: 34.99,
    rating: "4.6",
    reviews: 45,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: false,
    salePrice: null,
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Women"
  },
  {
    id: 5,
    name: "Only4U Limited Edition Tee",
    price: 39.99,
    rating: "4.9",
    reviews: 92,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: false,
    salePrice: null,
    colors: ["White"],
    sizes: ["S", "M", "L"],
    gender: "Women"
  },
  {
    id: 6,
    name: "Only4U Premium Logo Tee",
    price: 32.99,
    rating: "4.8",
    reviews: 67,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: false,
    onSale: true,
    salePrice: 27.99,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex"
  },
  {
    id: 7,
    name: "Only4U Essential Tee",
    price: 29.99,
    rating: "4.7",
    reviews: 54,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: false,
    onSale: false,
    salePrice: null,
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Women"
  },
  {
    id: 8,
    name: "Only4U Signature Crop Top",
    price: 27.99,
    rating: "4.8",
    reviews: 78,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: false,
    salePrice: null,
    colors: ["White"],
    sizes: ["S", "M", "L"],
    gender: "Women"
  },
  {
    id: 9,
    name: "Only4U Classic V-Neck",
    price: 31.99,
    rating: "4.6",
    reviews: 43,
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: false,
    onSale: true,
    salePrice: 25.99,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex"
  },
  {
    id: 10,
    name: "Only4U Comfort Fit Tee",
    price: 29.99,
    rating: "4.7",
    reviews: 61,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: false,
    onSale: false,
    salePrice: null,
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Women"
  },
  {
    id: 11,
    name: "Only4U Fashion Crop Top",
    price: 26.99,
    rating: "4.8",
    reviews: 82,
    image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: true,
    salePrice: 21.99,
    colors: ["White"],
    sizes: ["S", "M", "L"],
    gender: "Women"
  },
  {
    id: 12,
    name: "Only4U Urban Style Tee",
    price: 34.99,
    rating: "4.9",
    reviews: 95,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop",
    category: "t-shirts",
    isNew: true,
    onSale: false,
    salePrice: null,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex"
  }
];

export default function MerchGrid({ category, filters }: MerchGridProps) {
  const filteredProducts = products.filter(product => 
    (category === 'new-arrivals' ? product.isNew : product.category === category) &&
    (!filters.sizes.length || filters.sizes.some(size => product.sizes.includes(size))) &&
    (!filters.colors.length || filters.colors.some(color => product.colors.includes(color))) &&
    (!filters.discount || product.onSale) &&
    (!filters.gender.length || filters.gender.includes(product.gender)) &&
    (product.onSale ? product.salePrice <= filters.priceRange[1] : product.price <= filters.priceRange[1])
  );
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    setSelectedSize('');
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-purple-800/30 backdrop-blur-sm rounded-xl overflow-hidden group">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {product.isNew && (
              <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
                New
              </div>
            )}
            {product.onSale && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                Sale
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-white font-medium mb-2">{product.name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 text-xs rounded-lg ${
                    selectedSize === size
                      ? 'bg-pink-500 text-white'
                      : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-yellow-400">
                ★
                <span className="text-white ml-1">{product.rating}</span>
              </div>
              <span className="text-purple-200 text-sm">({product.reviews})</span>
            </div>
            <div className="flex items-center gap-2">
              {product.onSale && product.salePrice && (
                <>
                  <span className="text-white font-bold">${product.salePrice}</span>
                  <span className="text-purple-200 line-through text-sm">${product.price}</span>
                </>
              )}
              {!product.onSale && (
                <span className="text-white font-bold">${product.price}</span>
              )}
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full mt-3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}