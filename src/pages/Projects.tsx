// import { PortfolioLayout } from '@/components/PortfolioLayout';

// const Projects = () => {
//   return (
//     <PortfolioLayout showProjects={false}>
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="max-w-4xl mx-auto px-12 portfolio-fade-in">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-portfolio-text-primary">Featured Projects</h2>
              
//               <div className="space-y-6">
//                 <div className="group cursor-pointer">
//                   <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
//                     Modern E-commerce Platform
//                   </h3>
//                   <p className="text-portfolio-text-secondary text-sm mt-2">
//                     A full-stack e-commerce solution with React, Node.js, and PostgreSQL
//                   </p>
//                   <span className="text-xs text-portfolio-text-muted font-mono">2025 / React / TypeScript</span>
//                 </div>
                
//                 <div className="group cursor-pointer">
//                   <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
//                     Real-time Chat Application
//                   </h3>
//                   <p className="text-portfolio-text-secondary text-sm mt-2">
//                     WebSocket-based chat with real-time messaging and file sharing
//                   </p>
//                   <span className="text-xs text-portfolio-text-muted font-mono">2024 / WebSocket / Express</span>
//                 </div>
                
//                 <div className="group cursor-pointer">
//                   <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
//                     Data Visualization Dashboard
//                   </h3>
//                   <p className="text-portfolio-text-secondary text-sm mt-2">
//                     Interactive dashboard for analytics with D3.js and custom charts
//                   </p>
//                   <span className="text-xs text-portfolio-text-muted font-mono">2024 / D3.js / API</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="space-y-6 text-portfolio-text-secondary">
//               <p>
//                 Each project represents a unique challenge and learning opportunity. 
//                 I focus on creating intuitive user experiences while maintaining 
//                 clean, scalable code architecture.
//               </p>
//               <p>
//                 Technologies I work with include React, TypeScript, Node.js, 
//                 PostgreSQL, and modern deployment platforms.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PortfolioLayout>
//   );
// };

// export default Projects;
import { PortfolioLayout } from '@/components/PortfolioLayout';

const Projects = () => {
  return (
    <PortfolioLayout showProjects={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-12 portfolio-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-portfolio-text-primary">Featured Projects</h2>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
                    DeepFake Face Detection via LSTM-CNN
                  </h3>
                  <p className="text-portfolio-text-secondary text-sm mt-2">
                    Developed an LSTM-CNN hybrid model achieving 98% accuracy in detecting deepfake images, with optimized preprocessing using OpenCV and NumPy.
                  </p>
                  <span className="text-xs text-portfolio-text-muted font-mono">2025 / Python / TensorFlow / OpenCV</span>
                </div>
                
                <div className="group cursor-pointer">
                  <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
                    AI Poetry Generation System
                  </h3>
                  <p className="text-portfolio-text-secondary text-sm mt-2">
                    Built a multi-agent generative AI workflow with Groq Llama 3 and Mixtral, featuring rhyme scheme validation and 70% latency reduction.
                  </p>
                  <span className="text-xs text-portfolio-text-muted font-mono">2025 / Python / Gradio / Llama 3</span>
                </div>
                
                <div className="group cursor-pointer">
                  <h3 className="text-xl font-medium text-portfolio-text-primary group-hover:text-white transition-colors">
                    Real-Time AI-Powered Dynamic Pricing Engine
                  </h3>
                  <p className="text-portfolio-text-secondary text-sm mt-2">
                    Designed a pricing engine using customer behavior, loyalty metrics, and live market trends with explainable AI for transparency and compliance.
                  </p>
                  <span className="text-xs text-portfolio-text-muted font-mono">2024 / Python / Machine Learning / AI Ethics</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 text-portfolio-text-secondary">
              <p>
                Each project reflects my focus on solving complex problems through AI and data science, 
                blending technical precision with creativity.
              </p>
              <p>
                My work spans deep learning, computer vision, generative AI, and ethical AI, 
                using tools like Python, TensorFlow, OpenCV, Gradio, and LangChain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Projects;
