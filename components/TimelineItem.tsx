import React from 'react';
import { ExperienceItem } from '../types';
import AnimatedCounter from './AnimatedCounter';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative flex items-center w-full group`}
    >
      {/* Animated Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full border-4 border-white dark:border-slate-950 group-hover:bg-sky-500 dark:group-hover:bg-sky-400 transition-all duration-300 shadow-lg group-hover:shadow-sky-400/20"
        >
          <div className="absolute inset-0 rounded-full bg-sky-500/10 dark:bg-sky-400/10 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </div>
      
      {/* Enhanced Card */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] p-6 bg-gradient-to-br from-white/70 to-white/90 dark:from-slate-900/60 dark:to-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-xl shadow-sm hover:shadow-md hover:shadow-slate-300/20 dark:hover:shadow-sky-900/30 hover:border-sky-500/30 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isOdd ? 'md:ml-auto' : 'md:mr-auto'}`}>
        
        {/* Date with subtle highlight */}
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100/50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 mb-3">
          {item.date}
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{item.role}</h3>
        <p className="text-md font-medium text-sky-600 dark:text-sky-400 mb-4">{item.company}</p>
        
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-5 pl-5">
          {item.achievements.map((ach, i) => (
            <li key={i} className="relative before:absolute before:-left-5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-sky-500/80">
              {ach}
            </li>
          ))}
        </ul>

        {/* Impact metrics with better spacing */}
        <div className="border-t border-slate-200/70 dark:border-slate-700/50 pt-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.impactMetrics.map((metric, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className="flex-shrink-0 mt-0.5 p-1 rounded-lg bg-sky-100/50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
                {metric.icon}
              </div>
              <div>
                <span className="block font-medium text-slate-700 dark:text-slate-300">{metric.text}</span>
                {metric.value && (
                  <span className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                    <AnimatedCounter target={metric.value} />
                    {metric.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;