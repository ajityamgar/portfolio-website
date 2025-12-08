import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => { const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => { const handleMouseMove = (e: MouseEvent) => { setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingCards = [
  { tech: 'PHP',      color: 'from-violet-500 to-fuchsia-500', x: '10%',y: '15%', delay: '2.2s' },
  { tech: 'React',    color: 'from-blue-500 to-cyan-500',      x: '20%',y: '25%', delay: '0s' },
  { tech: 'Python',   color: 'from-yellow-500 to-blue-500',    x: '32%',y: '17%', delay: '0.3s' },
  { tech: 'HTML',     color: 'from-orange-500 to-red-500',     x: '32%',y: '29%', delay: '0.8s' },
  { tech: 'SQLite',   color: 'from-teal-500 to-cyan-500',      x: '5%', y: '40%', delay: '1.4s' },
  { tech: 'AI/ML',    color: 'from-purple-500 to-pink-500',    x: '75%',y: '15%', delay: '0.6s' },
  { tech: 'Django',   color: 'from-green-500 to-emerald-500',  x: '5%', y: '65%', delay: '0.9s' },
  { tech: 'CSS',      color: 'from-sky-500 to-blue-500',       x: '82%',y: '45%', delay: '1s' },
  { tech: 'JavaScript',color: 'from-yellow-400 to-amber-500',  x: '60%',y: '18%', delay: '1.2s' },
  { tech: 'Flask',    color: 'from-slate-500 to-gray-700',     x: '30%',y: '70%', delay: '1.6s' },
  { tech: 'Tkinter',  color: 'from-indigo-500 to-purple-500',  x: '85%',y: '60%', delay: '1.8s' },
  { tech: 'OpenCV',   color: 'from-lime-500 to-green-500',     x: '55%',y: '33%',  delay: '2s' },
  { tech: 'MySQL',    color: 'from-cyan-500 to-blue-600',   x: '90%', y: '20%', delay: '2.4s' },
  { tech: 'Excel',    color: 'from-green-500 to-emerald-500', x: '20%', y: '75%', delay: '2.6s' },
  { tech: 'Power BI', color: 'from-yellow-500 to-lime-500', x: '70%', y: '75%', delay: '2.8s' },
];


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20" />

      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`, }} />

{floatingCards.map((card, index) => (
  <div
    key={index}
    className="absolute hidden lg:block animate-float"
    style={{
      left: card.x,
      top: card.y,
      animationDelay: card.delay,
      animationDuration: '6s',
    }}
  >
    <div className={`glassmorphism px-6 py-3 rounded-2xl bg-gradient-to-r ${card.color}`}>
      <span className="font-semibold text-gray-800 dark:text-white">{card.tech}</span>
    </div>
  </div>
))}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />
            <img src="/images/me.jpg" alt="Ajit Yamgar" className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl mx-auto" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Ajit Yamgar
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-light">
            Full-Stack Developer <span className="text-blue-600 dark:text-blue-400">•</span> AI + Web Solutions
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative digital experiences that merge cutting-edge AI with elegant web design
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/uc?export=download&id=10pzjl9CmuLnd2IcLvyCdXTWpBAFTqM2_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              aria-label="Download resume"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ajityamgar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ajityamgar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ajityamgar855@gmail.com"
              className="social-icon"
              aria-label="Send email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
