import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'scale-up';
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    switch(animation) {
      case 'fade-in': return isVisible ? 'opacity-100' : 'opacity-0';
      case 'slide-in-right': return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10';
      case 'slide-in-left': return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10';
      case 'scale-up': return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      case 'fade-up':
      default: return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;