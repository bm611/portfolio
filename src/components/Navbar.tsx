import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-light-200/50 dark:bg-dark-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-2 ${
          scrolled || isOpen
            ? 'bg-light-200 dark:bg-dark-900 border-black dark:border-white' 
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-black dark:text-white font-bold text-xl font-mono uppercase tracking-widest border-2 border-transparent hover:border-neon px-2 transition-all">
            <Terminal size={24} className="text-black dark:text-neon" />
            <span>BM_DEV</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a href="https://github.com/bm611" className="btn-simple py-2 px-4 text-sm">
              GITHUB
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="text-black dark:text-white p-2 border-2 border-black dark:border-white focus:outline-none hover:bg-neon hover:text-black transition-colors flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-light-200 dark:bg-dark-900 border-b-2 border-black dark:border-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-black dark:text-white py-3 border-l-4 border-transparent hover:border-neon hover:pl-2 font-mono uppercase tracking-wide transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://github.com/bm611" 
                className="btn-primary text-center w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                GITHUB
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
    </>
  );
};

export default Navbar;