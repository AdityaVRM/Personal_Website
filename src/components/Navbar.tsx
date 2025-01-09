import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              Aditya Varma
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 h-64' : 'opacity-0 h-0 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;