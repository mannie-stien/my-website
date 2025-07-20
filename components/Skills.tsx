import React from 'react';
import { SKILLS_DATA } from '../constants';
import SkillCategoryCard from './SkillCategoryCard';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              My Tech Stack & Capabilities
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              A versatile toolkit for building modern, scalable, and data-driven applications.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SKILLS_DATA.map((category, index) => (
              <div key={category.category} style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}>
                <SkillCategoryCard {...category} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;