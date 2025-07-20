import React from 'react';
import { ICONS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { PORTFOLIO_DATA } from '../data';
import { motion } from 'framer-motion';
import resumePDF from './assets/resume.pdf'; 


const Summary: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight"
              >
                About <span className="text-sky-500 dark:text-sky-400">Me</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 relative"
              >
                <div className="absolute -inset-1 bg-sky-500/10 dark:bg-sky-400/10 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <p className="relative text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200/70 dark:border-slate-800/50">
                  {PORTFOLIO_DATA.summary}
                </p>
              </motion.div>
            </div>

            {/* Enhanced Stats Section
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {PORTFOLIO_DATA.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-4 text-center bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200/60 dark:border-slate-800/60 hover:border-sky-300/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-sm hover:shadow-sky-100/30 dark:hover:shadow-sky-900/20"
                >
                  <div className="mx-auto w-10 h-10 flex items-center justify-center bg-sky-100/50 dark:bg-sky-900/20 rounded-full text-sky-600 dark:text-sky-400 mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    {stat.value}+
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div> */}

            {/* Resume Button with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 text-center"
            >
              <a
                href={resumePDF}  // Updated path to assets folder
                download="Emmanuel_Agyare_Resume.pdf"  // Adds proper filename for download
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-medium rounded-full group"
              >
                {/* Gradient background with animated shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 dark:from-sky-600 dark:to-sky-700 group-hover:from-sky-600 group-hover:to-sky-700 dark:group-hover:from-sky-700 dark:group-hover:to-sky-800 transition-all duration-500"></span>

                {/* Animated shine effect on hover */}
                <span className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute top-0 left-0 w-1/3 h-full bg-white/20 transform -skew-x-12 animate-shine" />
                </span>

                {/* Button content */}
                <span className="relative z-10 flex items-center text-white">
                  <motion.span
                    className="mr-2"
                    whileHover={{
                      translateX: 2,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {ICONS.Download}
                  </motion.span>
                  Download Resume
                  <motion.span
                    className="ml-2"
                    initial={{ opacity: 0, x: -8 }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 }
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Summary;