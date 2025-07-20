import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '',
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
            if(!triggerOnce) {
                setIsVisible(false);
            }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
