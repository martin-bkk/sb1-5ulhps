import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className }: OptimizedImageProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect="blur"
      loading="lazy"
      threshold={100}
    />
  );
}