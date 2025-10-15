import { PortfolioLayout } from '@/components/PortfolioLayout';

const About = () => {
  return (
    <PortfolioLayout showProjects={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-12 portfolio-fade-in">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-portfolio-text-primary mb-8">About</h2>
              
              <div className="space-y-6 text-portfolio-text-secondary leading-relaxed">
  <p>
    Hello I'm Vallate Gowtham.
    Born in 2004 in Hyderabad, India. I believe technology can be both 
    intelligent and human-centered. With a passion for AI and data science, 
    I strive to create solutions that solve real problems while sparking curiosity.
  </p>
  
  <p>
    I specialize in building intelligent systems that merge analytical power 
    with creative design. My work spans AI-powered applications, computer vision, 
    data analysis, and experimental projects that explore the boundaries of innovation.
  </p>
  
  <p>
    Currently focused on artificial intelligence, machine learning, 
    and exploring how ethical, explainable AI can shape the future of 
    human–technology interaction.
  </p>
</div>

            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
  <h3 className="text-xl font-medium text-portfolio-text-primary mb-4">Skills</h3>
  <div className="space-y-2 text-portfolio-text-muted text-sm font-mono">
    <div>Python / Java / SQL</div>
    <div>HTML / CSS / JavaScript</div>
    <div>Machine Learning / Deep Learning (LSTMs, CNNs)</div>
    <div>Data Analysis & Visualization (Pandas, NumPy, Seaborn, Plotly)</div>
    <div>LangChain / NLP</div>
    <div>Power BI / Excel / Figma</div>
    <div>Git / GitHub / Jupyter Notebook</div>
  </div>
</div>

              
                          </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default About;