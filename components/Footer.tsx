import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS, ICONS } from '../constants';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links with Tooltips */}
        <div className="flex justify-center space-x-6 mb-8">
          {SOCIAL_LINKS.map((social) => (
            <motion.div
              key={social.name}
              className="relative"
              onHoverStart={() => setHoveredSocial(social.name)}
              onHoverEnd={() => setHoveredSocial(null)}
              whileHover={{ y: -3 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
              <AnimatePresence>
                {hoveredSocial === social.name && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap"
                  >
                    {social.name}
                    <span className="absolute bottom-0 left-1/2 w-2 h-2 bg-slate-800 transform -translate-x-1/2 translate-y-1/2 rotate-45" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-6">
          <motion.a 
            href="#about" 
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <motion.a 
            href="#projects" 
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.a>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <motion.a 
            href="#experience" 
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Experience
          </motion.a>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <motion.button
            className="text-sm text-slate-400 dark:text-slate-600 cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            title="Coming Soon"
          >
            Blog
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.p 
          className="text-xs text-center text-slate-400 dark:text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Emmanuel Agyare. All rights reserved.
        </motion.p>

        {/* Back to Top Button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to top"
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                {ICONS.ArrowUp}
              </motion.span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;