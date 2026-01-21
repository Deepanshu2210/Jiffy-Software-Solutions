
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-30 transition-all duration-300
    ${isScrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <Link to="/">
                <div className="flex flex-col">
                    <span className="text-3xl font-extrabold leading-none text-white">
                        <span>JIFF</span>
                        <span className="text-accent">Y</span>
                    </span>
                    <span className="text-[10px] font-light text-gray-200 tracking-[0.2em] -mt-1">SOFTWARE SOLUTIONS</span>
                </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors pb-1 ${
                    isActive ? 'text-white border-b-2 border-white' : 'text-white border-b-2 border-transparent hover:text-gray-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:from-accent hover:to-primary"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none"
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-primary shadow-lg animate-slide-in-left">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-accent text-white' : 'text-white hover:bg-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-md hover:from-accent hover:to-primary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
