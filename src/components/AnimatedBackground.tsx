import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

export default function AnimatedBackground() {
  const mouseCircleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseCircleRef.current) {
        const { clientX, clientY } = e;
        mouseCircleRef.current.style.transform = `translate(${clientX - 150}px, ${clientY - 150}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="animated-background">
      <div className="gradient-circle circle-1"></div>
      <div className="gradient-circle circle-2"></div>
      <div className="gradient-circle circle-3"></div>
      <div className="gradient-circle circle-4"></div>
      <div ref={mouseCircleRef} className="mouse-circle"></div>
      <div className="noise-overlay"></div>
    </div>
  );
}