import React from 'react';
import { Github, ExternalLink, Code, Database, Globe, Eye } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: '🌦️ Weather App',
      description: 'An advanced and interactive Weather App built using Python, offering real-time weather updates with a beautiful graphical interface and smart features like voice input, language translation, and animated UI based on weather conditions. Features include 5-day forecast with charts, multilingual support, dynamic backgrounds, and comprehensive weather data.',
      technologies: ['Python', 'tkinter/customtkinter', 'OpenWeatherMap API', 'Speech Recognition', 'Matplotlib', 'Pillow'],
      githubUrl: 'https://github.com/ajityamgar/weather_app.git',
       liveUrl: 'https://ajit-weather.netlify.app/'
    },
    {
      name: 'Revionix Homeo',
      description: 'A comprehensive platform connecting doctors and patients, offering appointment booking, homeopathy information, and Q&A functionality. This project demonstrates full-stack development skills with focus on healthcare technology.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/ajityamgar/revionix_homeo',
       liveUrl: '#'
    },
    {
      name: '👤 Face Recognition Attendance System',
      description: 'A robust Python desktop application for educational institutions, combining face recognition and barcode/QR scanning for secure, automated attendance. Built with Tkinter, OpenCV, and SQLite for reliable performance and data management.',
      technologies: ['Python', 'OpenCV', 'Tkinter', 'SQLite', 'Face Recognition'],
      githubUrl: 'https://github.com/ajityamgar/student-attendance-system',
      liveUrl: '#'
    },
    {
      name: '🛒 Supermarket Billing System',
      description: 'A modern web application designed to simulate a supermarket billing counter end-to-end. Features fast product entry with live barcode scanning, accurate cart computation with GST/VAT, payment handling (Cash/UPI), WhatsApp bill delivery, and PDF invoice generation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
      githubUrl: 'https://github.com/ajityamgar/billing-system',
      liveUrl: '#'
    },
    {
      name: '🚂 Online Railway Ticket Booking System',
      description: 'A comprehensive web-based application built using Django framework that allows users to book railway tickets online. Features include user authentication, ticket booking, booking history, ticket verification, and feedback submission with a modern interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'SQLite'],
      githubUrl: 'https://github.com/ajityamgar/railway-ticket-booking-system',
      liveUrl: '#'
    },
    {
      name: '💊 Medicine Distributor Management System',
      description: 'A complete web-based medicine distribution management system built with Python Flask. This system connects medical stores with distributors, enabling efficient order management, inventory tracking, and streamlined pharmaceutical supply chain operations.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'Python', 'Flask', 'SQLite'],
      githubUrl: 'https://github.com/ajityamgar/medicine-distribution-management-system ',
      liveUrl: '#'
    },
    {
      name: '🎉 Event Management System',
      description: 'A Flask-based web application to create and manage events, venues, packages, vendors, guest lists, payments, and feedback. Server-rendered app with a simple modern UI and lightweight SQLite database for comprehensive event planning.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'Python', 'Flask', 'SQLite'],
      githubUrl: 'https://github.com/ajityamgar/event-management-system',
      liveUrl: '#'
    }, 
    {
      name: '🎉 inventory-management-system',
      description: 'A modern, web-based Inventory Management System built with Flask, SQLAlchemy, and Tailwind CSS. This system helps businesses manage their inventory, track stock movements, handle sales, and generate reports.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'Python', 'Flask', 'SQLite'],
      githubUrl: 'https://github.com/ajityamgar/inventory-management-system ',
      liveUrl: '#'
    }
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'python':
        return <Code size={16} className="text-blue-600" />;
      case 'tkinter/customtkinter':
      case 'tkinter':
        return <Globe size={16} className="text-green-500" />;
      case 'opencv':
        return <Code size={16} className="text-red-500" />;
      case 'face recognition':
        return <Code size={16} className="text-purple-500" />;
      case 'flask':
      case 'django':
        return <Code size={16} className="text-green-600" />;
      case 'react':
      case 'vite':
        return <Globe size={16} className="text-cyan-500" />;
      case 'openweathermap api':
        return <Database size={16} className="text-cyan-500" />;
      case 'speech recognition':
        return <Code size={16} className="text-red-500" />;
      case 'matplotlib':
        return <Code size={16} className="text-orange-600" />;
      case 'pillow':
        return <Globe size={16} className="text-purple-500" />;
      case 'html':
      case 'css':
      case 'javascript':
        return <Globe size={16} className="text-orange-500" />;
      case 'php':
        return <Code size={16} className="text-purple-500" />;
      case 'mysql':
      case 'sqlite':
        return <Database size={16} className="text-blue-500" />;
      default:
        return <Code size={16} className="text-gray-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Code size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    Source Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Eye size={18} className="mr-2" />
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Future Projects Placeholder */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Code size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Currently working on exciting new projects that will be showcased here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;