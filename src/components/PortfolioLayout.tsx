import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';
import { PortfolioHeader } from './PortfolioHeader';
import { ProjectShowcase } from './ProjectShowcase';

interface PortfolioLayoutProps {
  children?: ReactNode;
  showProjects?: boolean;
}

export const PortfolioLayout = ({ children, showProjects = true }: PortfolioLayoutProps) => {
  return (
    <div className="border border-portfolio-accent/40 m-4 min-h-[calc(100vh-2rem)] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-portfolio-bg/50 to-portfolio-accent/10 pointer-events-none" />
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Header */}
      <PortfolioHeader />
      
      {/* Project showcase on home page */}
      {showProjects && <ProjectShowcase />}
      
      {/* Main content - add top padding so fixed header doesn't overlap content */}
      <main className="relative z-20 pt-20 md:pt-24 lg:pt-28">
        {children}
      </main>
      
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};