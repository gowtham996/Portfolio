import { useState, useEffect } from 'react';

const introSections = [
  {
    id: 1,
    title: 'SKILLS & EXPERTISE',
    subtitle: 'Core / Competencies',
    author: 'Technical Skills',
    description: 'Modern web development with React, TypeScript, and cutting-edge design systems'
  },
  {
    id: 2,
    title: 'SERVICES OFFERED', 
    subtitle: 'What / I Provide',
    author: 'Professional Services',
    description: 'Custom web applications, UI/UX design, and full-stack development solutions'
  },
  {
    id: 3,
    title: 'CLIENT EXPERIENCE',
    subtitle: 'What / To Expect', 
    author: 'My Approach',
    description: 'Collaborative process with clear communication, modern solutions, and timely delivery'
  },
  {
    id: 4,
    title: 'CREATIVE PROCESS',
    subtitle: 'How / I Work',
    author: 'Methodology', 
    description: 'User-centered design thinking combined with agile development practices'
  }
];

export const PersonalIntro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-30">
      <div className="space-y-12">
        {introSections.map((section, index) => (
          <div 
            key={section.id}
            className="portfolio-fade-in group cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-right space-y-2 transition-all duration-500 group-hover:transform group-hover:translate-x-[-8px]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-portfolio-text-primary tracking-tight leading-none transition-all duration-300 group-hover:text-white">
                {section.title}
              </h3>
              <div className="text-sm text-portfolio-text-muted font-mono tracking-wider">
                {section.subtitle} / {section.author}
              </div>
              <p className="text-portfolio-text-secondary text-sm max-w-xs ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};