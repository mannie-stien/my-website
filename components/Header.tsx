import React, { useState, useEffect } from 'react';
import { NAV_LINKS, ICONS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) 
      ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a 
            href="#home" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 group"
          >
            <span className="text-sky-500 dark:text-sky-400 group-hover:rotate-12 transition-transform">
              {ICONS.Code}
            </span>
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              Emmanuel Agyare
            </span>
          </motion.a>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="relative px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-sky-500 dark:bg-sky-400 -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* Theme Toggle */}
            {/* <motion.button
              onClick={handleThemeToggle}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: theme === 'dark' ? 180 : 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? ICONS.Moon : ICONS.Sun}
              </motion.div>
            </motion.button> */}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg overflow-hidden"
          >
            <nav className="px-4 py-2 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-sky-400 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;