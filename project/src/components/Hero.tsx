import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/documents/ajit-resume (1).pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ajit_Yamgar_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 p-1">
                <img
                  src="https://drive.google.com/uc?export=view&id=1iVK5KlVhqz_RVT4t35Ryr2X4xJSgn7rH
"
                  alt="Yamgar Ajit Rajendra"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Ajit Yamgar
              </span>
            </h1>
            
            <div className="text-xl text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <p>BBA-CA Student • Web Developer</p>
              <p>Digital Marketer • Farm Study Enthusiast</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 mb-8 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-blue-600" />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-purple-600" />
                <span>ajityamgar855@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-emerald-600" />
                <span>7499474733</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ajityamgar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajit-yamgar-988b9a263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Passionate about creating meaningful tech solutions and exploring the intersection of technology and agriculture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;