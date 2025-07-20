import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            setCount(currentCount);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target); // Ensure it ends on the exact target
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);
  
  // Format for one decimal place if target is a float
  const isFloat = target % 1 !== 0;
  const displayCount = isFloat ? count.toFixed(1) : count;

  return <span ref={ref}>{displayCount}</span>;
};

export default AnimatedCounter;