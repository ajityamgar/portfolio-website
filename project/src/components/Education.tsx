import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Education } from '../types';

const EducationComponent: React.FC = () => {
  const education: Education[] = [
    {
      institution: 'Prof. Ramkrishna More College, Akurdi Pune',
      degree: 'BBA-CA (Bachelor of Business Administration - Computer Applications)',
      location: 'Pune, Maharashtra',
      year: '2023 - Present',
      grade: '1st Year: 8.5 CGPA, 2nd Year: 9.36 CGPA'
    },
    {
      institution: 'Jawahar Higher Secondary School',
      degree: '12th Grade (Commerce)',
      location: 'Anadur',
      year: '2023',
      grade: '83%'
    },
    {
      institution: 'Chetan Dattaji Gaikwad High School',
      degree: '10th Grade',
      location: 'Bavdhan, Pune',
      year: '2021',
      grade: '69%'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Achieved 9.36 CGPA in 2nd year, showing consistent improvement and dedication to studies.',
      icon: <Award className="text-yellow-500" size={24} />
    },
    {
      title: 'Consistent Performance',
      description: 'Maintained strong academic performance while pursuing practical skills in web development.',
      icon: <GraduationCap className="text-blue-500" size={24} />
    },
    {
      title: 'Well-Rounded Growth',
      description: 'Balanced academic success with practical skill development and self-directed learning.',
      icon: <Award className="text-purple-500" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A strong academic foundation combined with continuous learning and skill development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full"></div>
                  
                  <div className="ml-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {edu.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <GraduationCap size={18} className="mr-2 text-blue-600" />
                      {edu.institution}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </div>
                      
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                        <Award size={16} className="mr-1" />
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Academic Focus */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Current Academic Focus
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-6">
            Currently pursuing BBA-CA with a strong focus on computer applications, business management, 
            and practical skills development. The program combines theoretical knowledge with hands-on 
            experience in technology and business processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Business Administration', 'Computer Applications', 'Database Management', 'Web Technologies', 'Digital Marketing'].map((subject, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;