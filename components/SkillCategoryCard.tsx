import React from 'react';
import { SkillCategory } from '../types';
import { TECH_ICONS } from '../constants';

const SkillCategoryCard: React.FC<SkillCategory> = ({ category, icon, skills }) => {
  return (
    <div className="group h-full bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800/70 p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-slate-400/10 dark:hover:shadow-sky-900/20 flex flex-col">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{category}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800/50 mt-auto">
        {skills.map(skill => (
          <div 
            key={skill.name} 
            className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/70 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-200 hover:scale-105 cursor-default"
          >
            {TECH_ICONS[skill.name] && React.cloneElement(TECH_ICONS[skill.name], { className: "h-4 w-4" })}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;