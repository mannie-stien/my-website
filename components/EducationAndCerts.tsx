import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, ICONS } from '../constants';
import ScrollReveal from './ScrollReveal';

const EducationAndCerts: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Education & Certifications
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Foundational knowledge and continuous learning are key to my growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <ScrollReveal>
            <div className="flex items-start space-x-6">
              {ICONS.GraduationCap}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Education</h3>
                {EDUCATION_DATA.map(edu => (
                  <div key={edu.school}>
                    <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{edu.degree}</h4>
                    <p className="text-md text-sky-600 dark:text-sky-400 font-medium">{edu.school}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{edu.date}</p>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">Relevant Coursework:</p>
                    <ul className="flex flex-wrap gap-2">
                      {edu.coursework.map(course => (
                        <li key={course} className="bg-slate-200 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications Section */}
          <ScrollReveal>
             <div className="flex items-start space-x-6">
              {ICONS.BadgeCheck}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Certifications</h3>
                <div className="space-y-4">
                  {CERTIFICATIONS_DATA.map(cert => (
                    <a href={cert.url} key={cert.name} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white dark:bg-slate-900/70 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-400 transition-all hover:shadow-md">
                      <p className="font-semibold text-slate-700 dark:text-slate-200">{cert.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer} - {cert.date}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EducationAndCerts;