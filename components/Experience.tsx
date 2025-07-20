import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import TimelineItem from './TimelineItem';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-white dark:bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Career Journey <span className="text-sky-500 dark:text-sky-400">&</span> Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              A track record of <span className="font-medium text-slate-600 dark:text-slate-300">growth</span>, 
              <span className="font-medium text-slate-600 dark:text-slate-300"> delivery</span>, and 
              <span className="font-medium text-slate-600 dark:text-slate-300"> leadership</span>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-5xl mx-auto">
            {/* Glowing vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-slate-200 via-sky-300/50 to-slate-200 dark:from-slate-700/30 dark:via-sky-500/20 dark:to-slate-700/30 -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {EXPERIENCE_DATA.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;