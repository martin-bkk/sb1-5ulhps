import { useState, useEffect, useCallback } from 'react';

interface UseResizableProps {
  minWidth: number;
  maxWidth: number;
  defaultWidth: number;
}

export function useResizable({ minWidth, maxWidth, defaultWidth }: UseResizableProps) {
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      }
    }
  }, [isResizing, minWidth, maxWidth]);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return {
    width,
    isResizing,
    startResizing,
    stopResizing
  };
}