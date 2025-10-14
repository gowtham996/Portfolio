import { useState, useEffect } from 'react';

export const PortfolioHeader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed left-12 top-12 z-30">
      <div className="portfolio-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-portfolio-text-primary tracking-tight leading-none">
          Gowtham 
        </h1>
        <p className="text-lg md:text-xl text-portfolio-text-secondary mt-2 font-light tracking-wide">
        AI, Machine Learning & Web Developer
        </p>
      </div>
    </header>
  );
};