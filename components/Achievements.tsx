import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import ScrollReveal from './ScrollReveal';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Awards & Recognition
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Acknowledged for performance, innovation, and leadership.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-8">
            {ACHIEVEMENTS_DATA.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 p-6 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800/70 hover:border-amber-500/50 dark:hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mt-1">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    {achievement.title} 
                    <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">({achievement.year})</span>
                  </h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Achievements;