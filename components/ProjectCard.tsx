import React, { useRef, MouseEvent } from 'react';
import { Project } from '../types';
import { TECH_ICONS, ICONS } from '../constants';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    
    const rotateY = x * 7;
    const rotateX = y * -7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div 
      ref={cardRef} 
      onClick={() => onOpenCaseStudy(project)}
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="card-3d bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/70 rounded-2xl shadow-lg dark:shadow-transparent hover:dark:shadow-sky-900/20 h-full flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-3 right-3 flex items-center gap-2">
           {project.links.map(link => link.url && (
            <a 
              key={link.type} 
              href={link.url}
              onClick={handleLinkClick}
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 hover:text-sky-300 transition-all duration-300"
              aria-label={`View ${link.type} for ${project.title}`}
            >
              {React.cloneElement(link.type === 'live' ? ICONS.LiveDemo : ICONS.CodeLink, { className: 'h-4 w-4' })}
            </a>
          ))}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">{project.category}</p>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto pt-3 border-t border-slate-200/80 dark:border-slate-800/50">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map(tech => (
              <div key={tech} className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded-full text-xs text-slate-600 dark:text-slate-300">
                {TECH_ICONS[tech] && React.cloneElement(TECH_ICONS[tech], { className: "h-3 w-3" })}
                <span className="text-slate-800 dark:text-inherit">{tech}</span>
              </div>
            ))}
            {project.techStack.length > 4 && (
                <div className="flex items-center bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded-full text-xs text-slate-500 dark:text-slate-400">
                   + {project.techStack.length - 4} more
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;