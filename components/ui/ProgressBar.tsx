'use client';

import { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? scrolled / windowHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        transform: `scaleX(${scrollProgress})`,
        transformOrigin: 'left',
      }}
    />
  );
};

export default ProgressBar;

