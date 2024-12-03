import React from 'react';

interface ResizableDividerProps {
  onMouseDown: () => void;
  isResizing: boolean;
}

export default function ResizableDivider({ onMouseDown, isResizing }: ResizableDividerProps) {
  return (
    <div
      className={`w-1 bg-white/10 hover:bg-pink-500/50 cursor-col-resize transition-colors ${
        isResizing ? 'bg-pink-500/50' : ''
      }`}
      onMouseDown={onMouseDown}
      style={{ height: '925px' }}
    />
  );
}