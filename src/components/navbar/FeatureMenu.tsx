import React from 'react';
import { ChevronDown } from 'lucide-react';
import { featureMenuItems } from './FeatureMenuItems';

interface FeatureMenuProps {
  isFeaturesOpen: boolean;
  setIsFeaturesOpen: (open: boolean) => void;
  handleFeatureClick: (path: string, requiresAuth?: boolean) => void;
}

export default function FeatureMenu({
  isFeaturesOpen,
  setIsFeaturesOpen,
  handleFeatureClick
}: FeatureMenuProps) {
  return (
    <div className="relative">
      <button
        onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
        onBlur={() => setTimeout(() => setIsFeaturesOpen(false), 200)}
        className="flex items-center text-white hover:text-pink-400 px-3 py-2"
      >
        Features
        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isFeaturesOpen && (
        <div className="absolute left-0 mt-2 w-fit min-w-[180px] bg-purple-900/95 backdrop-blur-sm rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5">
          {featureMenuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleFeatureClick(item.path, item.requiresAuth)}
              className="flex items-center gap-2 w-full px-6 py-2 text-sm text-white hover:bg-pink-500 transition-colors text-left"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}