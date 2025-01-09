import React from 'react';
import { Brain, Database, Mail, Github, Linkedin, ExternalLink, Code, Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects, skills } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-gradient" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative ring-1 ring-gray-800/50 bg-gray-900/50 backdrop-blur-xl rounded-lg px-4 sm:px-8 py-4">
                <span className="text-sm font-medium text-blue-400">Hello, I'm</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
                  Aditya Varma
                </h1>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-blue-500/0 to-blue-500"></div>
                  <p className="text-lg sm:text-xl text-gray-300 typewriter">
                    Data Science & Robotics Enthusiast
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-purple-500/0 to-purple-500"></div>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in text-sm sm:text-base">
                  Passionate about creating intelligent systems and solving complex problems through AI and robotics.
                </p>
                <div className="flex justify-center gap-4 sm:gap-6">
                  <a href="https://github.com" className="group p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 ring-1 ring-gray-700/50 hover:ring-blue-500/50">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="https://linkedin.com" className="group p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 ring-1 ring-gray-700/50 hover:ring-blue-500/50">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="#contact" className="group p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 ring-1 ring-gray-700/50 hover:ring-blue-500/50">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-16 animate-fade-in-up px-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg ring-1 ring-gray-800/50">
                  <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Full Stack Development</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Building scalable and modern web applications</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg ring-1 ring-gray-800/50">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Machine Learning</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Developing intelligent systems and algorithms</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg ring-1 ring-gray-800/50">
                  <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Robotics & IoT</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Creating autonomous systems and smart devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${project.id * 0.2}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {['AI/ML', 'Robotics', 'Programming', 'Tools'].map((category) => (
              <div key={category} className="space-y-4">
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <h3 className="relative px-4 py-2 bg-gray-900 rounded-lg text-lg sm:text-xl font-semibold text-blue-400">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="group p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:bg-gray-800/50 ring-1 ring-gray-800 hover:ring-blue-500/50"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                            <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-blue-300" />
                          </div>
                          <span className="text-sm sm:text-base font-medium group-hover:text-blue-300 transition-colors">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get in Touch
          </h2>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
            <form className="relative space-y-4 sm:space-y-6 animate-fade-in-up bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg ring-1 ring-gray-800/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Project Discussion"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;