import { PortfolioLayout } from '@/components/PortfolioLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <PortfolioLayout showProjects={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-12 portfolio-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-portfolio-text-primary">Get In Touch</h2>
              
              <div className="space-y-6 text-portfolio-text-secondary">
                <p>
                  Interested in collaborating or have a project in mind? 
                  I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-portfolio-text-muted" />
                    <span className="text-portfolio-text-primary">vgowtham986@gmail.com</span>
                  </div>
                  
                  <div className="flex space-x-6">
                    <a 
                      href="https://github.com/gowtham996" 
                      className="text-portfolio-text-muted hover:text-portfolio-text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {/* <a 
                      href="#" 
                      className="text-portfolio-text-muted hover:text-portfolio-text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a> */}
                    <a 
                      href="https://www.linkedin.com/in/gowtham-vallate/" 
                      className="text-portfolio-text-muted hover:text-portfolio-text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-portfolio-accent/20 border-portfolio-accent/30 text-portfolio-text-primary placeholder:text-portfolio-text-muted"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-portfolio-accent/20 border-portfolio-accent/30 text-portfolio-text-primary placeholder:text-portfolio-text-muted"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-portfolio-accent/20 border-portfolio-accent/30 text-portfolio-text-primary placeholder:text-portfolio-text-muted resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-portfolio-accent hover:bg-portfolio-hover text-portfolio-text-primary border border-portfolio-accent/30 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Contact;