import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Circle } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  // Removed: { name: 'Blog', href: '/blog' },
];

export const Navigation = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // Navigation: fixed vertical on md+ screens, horizontal/hidden on small screens
    <nav className="md:fixed md:left-6 md:top-1/2 md:-translate-y-1/2 z-40 w-full md:w-auto">
      <ul className="space-y-8">
        {navigationItems.map((item, index) => {
          const isActive = location.pathname === item.href || 
                          (item.href === '/' && location.pathname === '/');
          
          return (
            <li 
              key={item.name}
              className="portfolio-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NavLink
                to={item.href}
                className={({ isActive: navIsActive }) => 
                  `group flex items-center space-x-3 transition-all duration-300 md:flex-row flex-row md:space-x-3 space-x-2 md:py-0 py-2 md:px-0 px-4 ${
                    navIsActive || isActive
                      ? 'text-portfolio-text-primary' 
                      : 'text-portfolio-text-muted hover:text-portfolio-text-secondary'
                  }`
                }
              >
                <Circle 
                  className={`w-2 h-2 transition-all duration-300 ${
                    isActive 
                      ? 'fill-portfolio-text-primary text-portfolio-text-primary' 
                      : 'fill-transparent text-portfolio-text-muted group-hover:text-portfolio-text-secondary'
                  }`}
                />
                <span className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                }`}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};