import React from 'react';
import { Metric } from '../types';

const MetricCard: React.FC<Metric> = ({ value, label, icon }) => {
  return (
    <div className="group bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800/70 p-4 sm:p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-slate-300/20 dark:hover:shadow-sky-900/20">
      <div className="flex flex-col items-center justify-center">
        {icon}
        <p className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors duration-300">
          {value}
        </p>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 tracking-wider uppercase">
          {label}
        </p>
      </div>
    </div>
  );
};

export default MetricCard;