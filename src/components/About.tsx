import { Code2, Sparkles, Rocket, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Proficient in building end-to-end solutions from database design to responsive frontends',
    },
    {
      icon: Sparkles,
      title: 'AI Integration',
      description: 'Passionate about leveraging AI and machine learning to create intelligent applications',
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'Committed to writing clean, efficient code that scales and performs exceptionally',
    },
    {
      icon: Heart,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges and turning ideas into impactful digital solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glassmorphism p-8 sm:p-12 rounded-3xl animate-fade-in-up">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">passionate full-stack developer</span> who thrives on creating meaningful digital experiences. My journey in software development is driven by a simple belief: technology should solve real-world problems and make life easier.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              From building <span className="font-semibold text-purple-600 dark:text-purple-400">intelligent face recognition systems</span> to crafting seamless web applications, I love the intersection of <span className="font-semibold text-blue-600 dark:text-blue-400">AI and web development</span>. Every project is an opportunity to learn, innovate, and push the boundaries of what's possible.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or brainstorming the next big idea. Let's build something amazing together!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
