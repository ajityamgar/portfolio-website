import React from 'react';
import { Code, Brain, Users, Lightbulb } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'MySQL', level: 70 },
  ];

  const softSkills = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      name: 'Good Listening',
      description: 'Active listening skills for effective communication and understanding requirements.'
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      name: 'Fast Learning',
      description: 'Quick adaptation to new technologies and concepts with self-directed learning approach.'
    },
    {
      icon: <Brain className="text-emerald-600" size={24} />,
      name: 'Problem Solving',
      description: 'Analytical thinking and systematic approach to identifying and resolving challenges.'
    },
    {
      icon: <Code className="text-orange-600" size={24} />,
      name: 'Critical Thinking',
      description: 'Logical analysis and evaluation of situations to make informed decisions.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical & Soft Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A combination of technical expertise and essential soft skills for professional success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Code className="mr-3 text-blue-600" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'MongoDB'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Brain className="mr-3 text-purple-600" size={28} />
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Mindset</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I believe in lifelong learning and staying updated with the latest technologies and industry trends. 
              My goal is to continuously expand my skill set and contribute to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;