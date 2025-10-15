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
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40">
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
                  `group flex items-center space-x-3 transition-all duration-300 hover:text-portfolio-text-primary ${
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