import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Event Management System',
      description: 'Comprehensive web application designed to streamline event planning and management with intuitive workflows.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
      github: 'https://github.com/ajityamgar/event-management-system',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'Automated and secure attendance tracking system using advanced face recognition technology and QR scanning.',
      tech: ['Python', 'OpenCV', 'Tkinter', 'SQLite'],
      github: 'https://github.com/ajityamgar/student-attendance-system',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather updates with voice input capabilities and beautifully animated user interface.',
      tech: ['Python'],
      github: 'https://github.com/ajityamgar/weather_app',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Railway Ticket Booking System',
      description: 'Online platform for booking, verifying, and managing railway tickets with seamless user experience.',
      tech: ['Django', 'C', 'SQLite', 'HTML', 'JavaScript'],
      github: 'https://github.com/ajityamgar/railway-ticket-booking-system',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Medicine Distributor Management',
      description: 'System connecting medical stores with distributors for smooth inventory flow and efficient supply chain management.',
      tech: ['Flask', 'HTML', 'JavaScript', 'JSON'],
      github: 'https://github.com/ajityamgar/medicine-distribution-management-system',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Inventory Management System',
      description: 'Comprehensive solution for tracking stock levels, sales data, and generating detailed reports with an intuitive interface.',
      tech: ['Python', 'HTML', 'TypeScript'],
      github: 'https://github.com/ajityamgar/inventory-management-system',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions built with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glassmorphism p-6 rounded-3xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />

              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={`View code for ${project.title}`}
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">Code</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={`View repository for ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">View</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
