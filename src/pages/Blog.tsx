import { PortfolioLayout } from '@/components/PortfolioLayout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design',
    date: '2025-03-15',
    preview: 'Exploring emerging trends and technologies shaping the digital landscape...',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Building Performant React Applications',
    date: '2025-03-01',
    preview: 'Best practices for optimization and maintaining clean architecture...',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Design Systems in Modern Development',
    date: '2025-02-20',
    preview: 'Creating scalable and maintainable design systems for teams...',
    readTime: '6 min read'
  }
];

const Blog = () => {
  return (
    <PortfolioLayout showProjects={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-12 portfolio-fade-in">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-portfolio-text-primary">Blog</h2>
            
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="group cursor-pointer border-b border-portfolio-accent/20 pb-8 last:border-b-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-portfolio-text-muted font-mono">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="text-xs text-portfolio-text-muted font-mono">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-portfolio-text-secondary text-sm leading-relaxed">
                      {post.preview}
                    </p>
                    
                    <div className="text-xs text-portfolio-text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more →
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-portfolio-text-muted text-sm">
                More articles coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Blog;