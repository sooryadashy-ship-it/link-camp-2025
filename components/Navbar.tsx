
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, EVENT_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section for highlighting
      const sections = ['home', 'about', 'speakers', 'schedule', 'register'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for detection
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              {EVENT_NAME}
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-500 font-semibold'
                    : isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => scrollToSection(e, '#register')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                isScrolled 
                  ? 'bg-ieee-blue text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-900 hover:bg-slate-100'
              }`}
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 py-4 border-t border-slate-100' : 'max-h-0'
      }`}>
        <div className="px-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`block px-3 py-2 font-medium rounded-md hover:bg-slate-50 transition-colors ${
                activeSection === link.href.substring(1) ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => scrollToSection(e, '#register')}
            className="block px-3 py-3 mt-4 text-center bg-ieee-blue text-white font-bold rounded-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
