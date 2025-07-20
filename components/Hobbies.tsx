import React from 'react';
import { HOBBIES_DATA } from '../constants';
import ScrollReveal from './ScrollReveal';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Beyond the Code
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              When I'm not building software, I'm exploring other passions that challenge and inspire me.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOBBIES_DATA.map((hobby, index) => (
              <div 
                key={hobby.name} 
                className="group bg-white dark:bg-slate-900/60 p-8 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-400/10 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
                style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
              >
                <div className="flex-shrink-0 mb-4">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{hobby.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hobbies;