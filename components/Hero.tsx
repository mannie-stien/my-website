import React from 'react';
import TypingEffect from './TypingEffect';
import MetricCard from './MetricCard';
import { ROLES, METRICS, SOCIAL_LINKS, ICONS } from '../constants';
import { PORTFOLIO_DATA } from '../data';


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 opacity-0 fade-in">
              <span className="block">{PORTFOLIO_DATA.personalInfo.name}</span>
            </h1>
            <div className="mt-4 text-2xl sm:text-3xl font-semibold text-sky-500 dark:text-sky-400 h-10 opacity-0 fade-in fade-in-delay-1">
              <TypingEffect roles={ROLES} />
            </div>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-500 dark:text-slate-400 opacity-0 fade-in fade-in-delay-2">
              A versatile and results-driven professional blending software engineering prowess with data-driven insights and strategic project management to build and scale innovative solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 fade-in fade-in-delay-3">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 transform hover:scale-105">
                View My Work
              </a>
              {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300">
                {ICONS.Download}
                Download Resume
              </a> */}
            </div>
             <div className="mt-8 flex justify-center lg:justify-start space-x-6 opacity-0 fade-in fade-in-delay-4">
              {SOCIAL_LINKS.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center opacity-0 fade-in fade-in-delay-4">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-green-500 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-full flex items-center justify-center p-1">
                <img 
                  src={PORTFOLIO_DATA.personalInfo.profileImage} 
                  alt={PORTFOLIO_DATA.personalInfo.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-24 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 text-center opacity-0 fade-in fade-in-delay-5">
          {METRICS.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;