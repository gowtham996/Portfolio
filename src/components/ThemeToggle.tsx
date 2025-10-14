import { useState, useEffect } from 'react';
import { Sun, Moon, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  // Initialize from null; we'll read the real value on mount to avoid SSR mismatch
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);
  const [fontMode, setFontMode] = useState<'sans' | 'mono' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // mark mounted so we can render client-only UI
    setMounted(true);

    try {
      // Prefer localStorage value, fallback to document classes (set by inline script)
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      const savedFont = localStorage.getItem('font') as 'sans' | 'mono' | null;

      const initialTheme = savedTheme ?? (document.documentElement.classList.contains('light') ? 'light' : 'dark');
      const initialFont = savedFont ?? (document.body.classList.contains('font-mono') ? 'mono' : 'sans');

      setTheme(initialTheme);
      setFontMode(initialFont);

      // Ensure document classes match initial values
      if (initialTheme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }

      if (initialFont === 'mono') {
        document.body.classList.add('font-mono');
      } else {
        document.body.classList.remove('font-mono');
      }
    } catch (e) {
      // ignore storage errors
      setTheme('dark');
      setFontMode('sans');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // ignore
    }

    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  const toggleFont = () => {
    const newFontMode = fontMode === 'sans' ? 'mono' : 'sans';
    setFontMode(newFontMode);
    try {
      localStorage.setItem('font', newFontMode);
    } catch (e) {
      // ignore
    }

    if (newFontMode === 'mono') {
      document.body.classList.add('font-mono');
    } else {
      document.body.classList.remove('font-mono');
    }
  };

  if (!mounted || theme === null || fontMode === null) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div className="flex flex-row space-x-4 p-2 bg-portfolio-accent/20 backdrop-blur-sm rounded-lg border border-portfolio-accent/30">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className={`w-8 h-8 p-0 transition-all duration-300 hover:bg-portfolio-hover ${
            theme === 'light' ? 'text-portfolio-text-primary' : 'text-portfolio-text-secondary'
          }`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleFont}
          className={`w-8 h-8 p-0 transition-all duration-300 hover:bg-portfolio-hover ${
            fontMode === 'mono' ? 'text-portfolio-text-primary' : 'text-portfolio-text-secondary'
          }`}
          aria-label="Toggle font family"
        >
          <Type className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};