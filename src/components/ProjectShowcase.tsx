import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'PROJECT ONE',
    date: 'Mar.2025',
    role: 'Dev / Design',
    author: 'Your Name',
    description: 'Innovative web application with modern design principles'
  },
  {
    id: 2,
    title: 'PROJECT TWO', 
    date: 'Feb.2025',
    role: 'Frontend Dev',
    author: 'Your Name',
    description: 'E-commerce platform with seamless user experience'
  },
  {
    id: 3,
    title: 'PROJECT THREE',
    date: 'Jan.2025', 
    role: 'Full Stack',
    author: 'Your Name',
    description: 'Real-time collaborative workspace application'
  },
  {
    id: 4,
    title: 'PROJECT FOUR',
    date: 'Dec.2024',
    role: 'Design / Dev',
    author: 'Your Name', 
    description: 'Mobile-first progressive web application'
  }
];

export const ProjectShowcase = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-30">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="portfolio-fade-in group cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-right space-y-2 transition-all duration-500 group-hover:transform group-hover:translate-x-[-8px]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-portfolio-text-primary tracking-tight leading-none transition-all duration-300 group-hover:text-white">
                {project.title}
              </h3>
              <div className="text-sm text-portfolio-text-muted font-mono tracking-wider">
                {project.date} / {project.role}: {project.author}
              </div>
              <p className="text-portfolio-text-secondary text-sm max-w-xs ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};