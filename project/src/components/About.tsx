import React from 'react';
import { Code, Users, Lightbulb, Target, Bot, Monitor, BookOpen, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Web Development',
      description: 'Skilled in modern web technologies with focus on creating user-friendly applications.'
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: 'Digital Marketing',
      description: 'Understanding of digital marketing strategies and their implementation.'
    },
    {
      icon: <Lightbulb className="text-emerald-600" size={24} />,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and concepts.'
    },
    {
      icon: <Target className="text-orange-600" size={24} />,
      title: 'Problem Solver',
      description: 'Strong analytical skills with focus on finding effective solutions.'
    }
  ];

  const aiTools = [
    { name: 'ChatGPT', icon: '🤖', description: 'AI-powered conversations and problem solving' },
    { name: 'Cursor AI', icon: '⚡', description: 'AI-enhanced code editor' },
    { name: 'Voice Maker', icon: '🎙️', description: 'Text-to-speech and voice generation' },
    { name: 'GitHub Copilot', icon: '🚀', description: 'AI pair programming assistant' }
  ];

  const platforms = [
    { name: 'Bolt.new', icon: '⚡', description: 'Full-stack web development platform' },
    { name: 'Supabase', icon: '🗄️', description: 'Backend-as-a-Service platform' },
    { name: 'StackBlitz', icon: '📦', description: 'Online IDE for web development' },
    { name: 'LangChain', icon: '🔗', description: 'Framework for LLM applications' },
    { name: 'Gradio', icon: '🎨', description: 'Machine learning interface builder' },
    { name: 'Google Colab', icon: '📊', description: 'Cloud-based Jupyter notebooks' },
    { name: 'Hugging Face', icon: '🤗', description: 'AI model hub and community' },
    { name: 'Canva', icon: '🎨', description: 'Design and visual content creation' }
  ];

  const learningPlatforms = [
    {
      name: 'aln.anudip.org',
      icon: '🎓',
      description: 'Tech courses and professional upskilling',
      url: 'https://aln.anudip.org'
    },
    {
      name: 'Mimo',
      icon: '💻',
      description: 'Hands-on coding practice and tutorials',
      url: null
    },
    {
      name: 'Duolingo',
      icon: '🌍',
      description: 'Language learning and communication skills',
      url: null
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A highly motivated student with passion for technology and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a highly motivated and fast-learning student with a strong grip on web development 
                and digital marketing, currently pursuing BBA-CA from Prof. Ramkrishna More College. 
                My journey in technology started with curiosity and has evolved into a passion for 
                building meaningful tech solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                What sets me apart is my unique approach to learning - I believe in combining traditional 
                academic knowledge with practical, hands-on experience. I'm also passionate about 
                agriculture and independently study modern farming techniques, seeing great potential 
                in the intersection of technology and agriculture.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My goal is to leverage technology to create solutions that make a positive impact, 
                whether in business applications or agricultural innovations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools, Platforms & Learning Resources Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <span className="mr-3">🔧</span>
              Tools, Platforms & Learning Resources I Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging modern AI tools, development platforms, and learning resources to stay at the forefront of technology
            </p>
          </div>

          {/* AI Tools Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Bot className="mr-3 text-blue-600" size={28} />
              AI Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Monitor className="mr-3 text-purple-600" size={28} />
              Platforms I Work With
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {platform.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Platforms Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="mr-3 text-emerald-600" size={28} />
              Learning Platforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{platform.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {platform.name}
                        </h4>
                        {platform.url && (
                          <a
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Embracing the Future of Development</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            By combining traditional learning with cutting-edge AI tools and modern platforms, 
            I'm building a comprehensive skill set that bridges academic knowledge with practical, 
            industry-relevant experience. This approach enables me to stay ahead of technological 
            trends and deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;