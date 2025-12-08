import { Code, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'PHP',
    'MySQL',
    'Excel',
    'Power BI',
    'Digital Marketing',
    'React',
    'Django',
    'Flask',
    'OpenCV',
    'SQLite',
  ];

  const softSkills = [
    'Communication',
    'Critical Thinking',
    'Fast Learning',
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Creative Thinking',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <div className="glassmorphism p-8 rounded-3xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Technical Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative px-5 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glassmorphism p-8 rounded-3xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative px-5 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
