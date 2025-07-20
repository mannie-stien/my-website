import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Project } from '../types';
import { ICONS, TECH_ICONS } from '../constants';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

const CaseStudyInfo: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div>
    <h4 className="flex items-center text-lg font-semibold text-sky-600 dark:text-sky-300 mb-2">
      {icon}
      <span>{title}</span>
    </h4>
    <div className="text-slate-500 dark:text-slate-400 space-y-2 text-sm">{children}</div>
  </div>
);

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const caseStudy = project.caseStudy;

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 modal-backdrop"
      onClick={onClose}
    >
      <div 
        className="relative modal-content bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-slate-500/20 dark:shadow-sky-900/20"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 border-b border-slate-200 dark:border-slate-700/50 z-10">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h2>
          <p className="text-md text-sky-600 dark:text-sky-400">{project.category}</p>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
            aria-label="Close case study"
          >
            {ICONS.Close}
          </button>
        </div>

        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">The Problem</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{caseStudy.problem}</p>
            </div>
             <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">The Solution</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{caseStudy.solution}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <CaseStudyInfo icon={ICONS.Architecture} title="Architecture">
                    <ul className="list-disc list-inside">
                        {caseStudy.architecture.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </CaseStudyInfo>
                <CaseStudyInfo icon={ICONS.Framework} title="PM Framework">
                    <p>{caseStudy.pmFramework}</p>
                </CaseStudyInfo>
                <CaseStudyInfo icon={ICONS.Team} title="Team & Leadership">
                    <p>{caseStudy.teamLeadership}</p>
                </CaseStudyInfo>
                {/* <CaseStudyInfo icon={ICONS.Risk} title="Risk Mitigation">
                    <p>{caseStudy.riskMitigation}</p>
                </CaseStudyInfo> */}
                {caseStudy.dataAnalysis && (
                    <CaseStudyInfo icon={ICONS.Analysis} title="Data Analysis">
                        <p>{caseStudy.dataAnalysis}</p>
                    </CaseStudyInfo>
                )}
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <div key={tech} className="flex items-center gap-1.5 bg-slate-200 dark:bg-slate-700/60 px-2 py-1 rounded-md text-xs text-slate-600 dark:text-slate-300">
                    {TECH_ICONS[tech] || null}
                    <span className="text-slate-800 dark:text-inherit">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <CaseStudyInfo icon={ICONS.BusinessImpact} title="Business Impact">
                    <p>{caseStudy.businessImpact}</p>
                </CaseStudyInfo>
            </div>
            {caseStudy.roi && (
                 <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700/50">
                    <CaseStudyInfo icon={ICONS.ROI} title="Return on Investment">
                        <p className="text-green-700 dark:text-green-300 font-semibold">{caseStudy.roi}</p>
                    </CaseStudyInfo>
                </div>
            )} */}
          </div>

        </div>
      </div>
    </div>
  );
  
  const modalRoot = document.body;
  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default CaseStudyModal;