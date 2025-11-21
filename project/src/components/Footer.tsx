import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ajityamgar',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ajit-yamgar-988b9a263/',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:ajityamgar855@gmail.com',
      icon: <Mail size={20} />
    },
    {
      name: 'Phone',
      url: 'tel:+917499474733',
      icon: <Phone size={20} />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Personal Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ajit Yamgar</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              BBA-CA Student, Web Developer, and Digital Marketing enthusiast based in Pune, Maharashtra. 
              Passionate about creating meaningful tech solutions and exploring agricultural innovations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                  aria-label={link.name}
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-200">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>Pune, Maharashtra</p>
              <a
                href="mailto:ajityamgar855@gmail.com"
                className="block hover:text-white transition-colors duration-200"
              >
                ajityamgar855@gmail.com
              </a>
              <a
                href="tel:+917499474733"
                className="block hover:text-white transition-colors duration-200"
              >
                +91 7499474733
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yamgar Ajit Rajendra. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="mx-1 text-red-500" size={16} /> in Pune, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;