import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                Featured Projects & Case Studies
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
                A selection of projects where I've blended engineering, data, and management to deliver impactful solutions.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS_DATA.map((project, index) => (
                <div key={project.title} style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}>
                  <ProjectCard project={project} onOpenCaseStudy={handleOpenModal} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Projects;