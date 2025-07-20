import React from 'react';
import { Metric, SkillCategory, ExperienceItem, Project, SocialLink, EducationItem, CertificationItem, Testimonial, Achievement, ImpactMetric, ProjectLink, ProjectMetric, CaseStudy, Skill, Hobby } from './types';
import { PORTFOLIO_DATA } from './data';
import { camelCase, startCase } from 'lodash';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiSupabase,
    SiNodedotjs,
    SiTailwindcss,
    SiOpenai,
    SiVercel,
    SiPython,
    SiDjango,
    SiPostgresql,
} from 'react-icons/si';
import { MdSportsSoccer } from "react-icons/md";
import { FaTableTennis, FaUserGraduate } from "react-icons/fa";
import { RiMovieAiLine } from 'react-icons/ri';






// --- ICONS ---
// This section remains largely the same, providing the icon components.

const iconClass = "h-8 w-8 text-sky-500";
const metricIconClass = "h-10 w-10 mb-3 text-green-500 dark:text-green-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300";
const skillCategoryIconClass = "h-12 w-12 mb-4 text-sky-500 dark:text-sky-400 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-300";
const projectMetricIconClass = "h-6 w-6 text-sky-400 dark:text-sky-300";
const caseStudyIconClass = "h-5 w-5 mr-2 text-sky-500 dark:text-sky-400";
const experienceImpactIconClass = "h-4 w-4 text-sky-500 dark:text-sky-400";
const projectLinkIconClass = "h-4 w-4";
const formInputIconClass = "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400";
const socialIconClass = "h-6 w-6";
const credentialIconClass = "h-10 w-10 text-sky-500 dark:text-sky-400 flex-shrink-0";
const achievementIconClass = "h-8 w-8 text-amber-500 dark:text-amber-400 flex-shrink-0";
const hobbyIconClass = "h-12 w-12 text-sky-500 dark:text-sky-400 transition-colors duration-300 group-hover:text-amber-500";


export const ICONS = {
    Code: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    Users: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={metricIconClass}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    TrendingUp: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={metricIconClass}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    Briefcase: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={metricIconClass}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    Zap: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={metricIconClass}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    Award: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={metricIconClass}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
    Trophy: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={achievementIconClass}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V22h4v-7.34" /><path d="M12 14.66L17.5 9H6.5L12 14.66z" /></svg>,
    LinkedIn: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={socialIconClass}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.557V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>,
    GitHub: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={socialIconClass}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
    Kaggle: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={socialIconClass}><path d="M18.179 14.354l-5.656 5.657-5.657-5.657L1.21 19.999h21.58l-5.656-5.645zM14.354 1.21L5.7 9.866l5.657 5.657 8.656-8.656L14.354 1.21z" /></svg>,
    Frontend: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={skillCategoryIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
    Backend:
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={skillCategoryIconClass}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>,

    DataAI:
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={skillCategoryIconClass}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
    ,
    PMTools: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={skillCategoryIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>,
    ExperienceTrophy: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={experienceImpactIconClass}><path d="M15.5 2A1.5 1.5 0 0014 3.5v1.446l-2.094.698A4.503 4.503 0 008 5.5H6.5a1.5 1.5 0 000 3H8a4.5 4.5 0 003.906-2.554L14 5.254V7.5a1.5 1.5 0 003 0V3.5A1.5 1.5 0 0015.5 2zM8.5 6.5a.5.5 0 01.5-.5h.382c.178 0 .349.03.518.088l2.094.698A1.5 1.5 0 0113 8.5v2.854l-2.094.698A4.503 4.503 0 008 11.5H6.5a1.5 1.5 0 010-3H8a.5.5 0 01.5.5zM4 5.5A1.5 1.5 0 015.5 4h1a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-1A1.5 1.5 0 014 14.5v-9z" /></svg>,
    Architecture: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-15.75a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25V21m-15.75 0h15.75M3.75 6.75h15.75M11.25 6.75v14.25m-3.75-14.25v14.25m7.5-14.25v14.25M3.75 6.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25V6.75m-6.75 0v.018m6.75-.018v.018m-3.75-.018v.018" /></svg>,
    Framework: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.375l-1.5-1.5m-3 3l-1.5-1.5m-3 3l-1.5-1.5m1.5 1.5l1.5 1.5m3-3l1.5 1.5m3-3l1.5 1.5m-15 4.5l3-3m12 3l-3-3m-3-3l3-3m-3 3l-3 3" /></svg>,
    Team: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.952a4.5 4.5 0 011.88-3.762A4.5 4.5 0 0110.5 6H12a4.5 4.5 0 013.762 1.88 4.5 4.5 0 011.88 3.762m-7.5-2.952a4.5 4.5 0 00-1.88 3.762A4.5 4.5 0 006 13.5v1.5m6.375-3.375l-4.125 4.125m4.125-4.125L12 12m3.375 1.125l-4.125-4.125" /></svg>,
    Risk: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>,
    Analysis: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
    BusinessImpact: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625l.625 3.75" /></svg>,
    ROI: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={caseStudyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.826-1.106-2.156 0-2.982l.879-.659m7.5 14.878a9 9 0 01-15 0" /></svg>,
    Live: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projectLinkIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A2.25 2.25 0 0115.75 4.5h1.5m-4.5 0h.008v.008h-.008V6.75" /></svg>,
    CodeLink:
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={projectLinkIconClass}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m-3 3h3m-3 3h3" />
        </svg>
    ,
    LiveDemo:
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={projectLinkIconClass}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
    ,
    Close: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
    FormUser: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={formInputIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
    FormAtSymbol: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={formInputIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>,
    FormPencil: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={formInputIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>,
    CheckCircle: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    XCircle: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Download: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>,
    Sun: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.904-2.636l1.591-1.591M5.25 12H3m4.227-4.904L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
    Moon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>,
    BadgeCheck: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={credentialIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    ArrowUp: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>,
    Camera: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={hobbyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.825L2.887 12.21a2.31 2.31 0 010 2.52l2.3 4.385a2.31 2.31 0 011.64 1.451l2.013 6.04a2.31 2.31 0 01-1.39 2.825 2.31 2.31 0 01-2.825-1.39l-2.013-6.04a2.31 2.31 0 010-2.52l2.3-4.385a2.31 2.31 0 011.64-1.451l6.04-2.013a2.31 2.31 0 012.825 1.39 2.31 2.31 0 01-1.39 2.825l-6.04 2.013z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Mountain: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={hobbyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75l3-3m0 0l3 3m-3-3v6m0-6h6m-6 0l3.75-3.75M12 21l3.75-3.75m0 0l3-3m-3 3v-6m0 6h-6m6 0l-3.75 3.75M12 3l-3.75 3.75m0 0l-3 3m3-3v-6m0 6h6m-6 0l3.75 3.75" /></svg>,
    Chess: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={hobbyIconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-5.144 0-9.25-4.106-9.25-9.25S6.856 3.25 12 3.25c5.144 0 9.25 4.106 9.25 9.25S17.144 21.75 12 21.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3.25v18.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.25 12.5h18.5" /></svg>,
    Soccer: <MdSportsSoccer  className={hobbyIconClass}/>,
    TableTennis: <FaTableTennis   className={hobbyIconClass}/>,
    Movies: <RiMovieAiLine className={hobbyIconClass} />,
    GraduationCap: <FaUserGraduate size={50} className={hobbyIconClass}/>,



};


// --- DATA TRANSFORMERS ---

export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    // { name: 'Achievements', href: '#achievements' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
];

export const ROLES = PORTFOLIO_DATA.personalInfo.roles;

const metricIconMap: { [key: string]: React.ReactElement } = {
    Briefcase: ICONS.Briefcase,
    Users: ICONS.Users,
    TrendingUp: ICONS.TrendingUp,
    Zap: ICONS.Zap,
    Award: ICONS.Award,
};
export const METRICS: Metric[] = PORTFOLIO_DATA.keyMetrics.map(metric => ({
    ...metric,
    icon: metricIconMap[metric.icon] || ICONS.Award,
}));


// Update your SOCIAL_LINKS definition to:
export const SOCIAL_LINKS: SocialLink[] = Object.entries(PORTFOLIO_DATA.socialLinks).map(([name, url]) => {
  // Map raw names to your ICONS keys
  const iconKeyMap: Record<string, keyof typeof ICONS> = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    kaggle: 'Kaggle'
    // Add other mappings as needed
  };

  const iconKey = iconKeyMap[name.toLowerCase()];
  const icon = iconKey ? ICONS[iconKey] : null;

  return {
    name: startCase(name) as SocialLink['name'],
    url: url,
    icon: icon || ICONS.Kaggle // Fallback to Kaggle if not found (remove this if you want no icon)
  };
}).filter(link => link.icon); // Optional: filter out links without icons


const skillIconMap: { [key: string]: React.ReactElement } = {
    Frontend: ICONS.Frontend,
    Backend: ICONS.Backend,
    'Data, AI & PM': ICONS.DataAI,
    'Testing & DevOps': ICONS.PMTools,
};
export const SKILLS_DATA: SkillCategory[] = Object.entries(PORTFOLIO_DATA.skills).map(([category, details]) => ({
    category,
    icon: skillIconMap[category] || ICONS.Code,
    skills: details.technologies.map(tech => ({
        name: tech,
    }))
}));


const experienceMetricMap: { [key: string]: { icon: React.ReactElement, suffix?: string } } = {
    usersServed: { icon: ICONS.Users },
    engagementIncrease: { icon: ICONS.TrendingUp, suffix: '%' },
    developmentTimeReduction: { icon: ICONS.Zap, suffix: '%' },
    latencyReduction: { icon: ICONS.TrendingUp, suffix: '%' },
    loadTimeImprovement: { icon: ICONS.TrendingUp, suffix: '%' },
    teamMentored: { icon: ICONS.Team },
    pageLoadImprovement: { icon: ICONS.TrendingUp, suffix: '%' },
    defectFreeRate: { icon: ICONS.CheckCircle, suffix: '%' },
    performanceImprovement: { icon: ICONS.TrendingUp, suffix: '%' },
};

export const EXPERIENCE_DATA: ExperienceItem[] = PORTFOLIO_DATA.experience.map(exp => ({
    role: exp.title,
    company: exp.company,
    date: exp.date,
    achievements: exp.achievements,
    impactMetrics: Object.entries(exp.metrics).map(([key, value]) => ({
        icon: experienceMetricMap[key]?.icon || ICONS.ExperienceTrophy,
        text: `${startCase(key)}:`,
        value: value,
        suffix: experienceMetricMap[key]?.suffix || '',
    })),
}));


export const EDUCATION_DATA: EducationItem[] = [{
    degree: PORTFOLIO_DATA.education.degree,
    school: PORTFOLIO_DATA.education.school,
    date: PORTFOLIO_DATA.education.date,
    coursework: PORTFOLIO_DATA.education.coursework,
}];

export const CERTIFICATIONS_DATA: CertificationItem[] = PORTFOLIO_DATA.certifications.map(cert => ({
    ...cert,
    icon: ICONS.BadgeCheck,
}));


const projectMetricIconMap: { [key: string]: React.ReactElement } = {
    activeUsers: ICONS.Users,
    rating: ICONS.Award,
    registeredUsers: ICONS.Users,
    eventsCreated: ICONS.Zap,
    dataPointsProcessed: ICONS.Analysis,
    reportingAccuracy: ICONS.CheckCircle,
    clientSatisfaction: ICONS.Award,
};

export const PROJECTS_DATA: Project[] = PORTFOLIO_DATA.projects.map((proj): Project => {
    const projectLinks: ProjectLink[] = Object.entries(proj.links)
        .filter(([, url]) => url)
        .map(([type, url]) => ({
            type: type as 'live' | 'code',
            url: url,
        }));

    const projectMetrics: ProjectMetric[] = Object.entries(proj.metrics)
        .map(([label, value]) => ({
            icon: projectMetricIconMap[label] || ICONS.Zap,
            label: startCase(label),
            value: value.toLocaleString(),
        }));

    const caseStudy: CaseStudy = {
        problem: proj.description,
        solution: `Key features include: ${proj.features.join(', ')}.`,
        architecture: proj.technologies,
        pmFramework: proj.projectManagement?.methodology || 'Agile',
        teamLeadership: proj.projectManagement?.teamSize ? `Managed a team of ${proj.projectManagement.teamSize}.` : 'Served as lead developer and technical decision-maker.',
        riskMitigation: "Proactively identified and mitigated risks by implementing robust testing, monitoring, and adhering to security best practices.",
        businessImpact: Object.entries(proj.metrics).map(([key, value]) => `${startCase(key)}: ${value}`).join(', '),
        dataAnalysis: proj.category === "Data Analysis" ? "Leveraged Python and SQL for data extraction and transformation, with results visualized in a custom dashboard." : undefined,
        roi: "N/A",
    };

    return {
        title: proj.title,
        category: proj.category,
        description: proj.description,
        techStack: proj.technologies,
        imageUrl: proj.image,
        links: projectLinks,
        metrics: projectMetrics,
        caseStudy: caseStudy,
    };
});

export const TESTIMONIALS_DATA: Testimonial[] = PORTFOLIO_DATA.testimonials;

export const ACHIEVEMENTS_DATA: Achievement[] = PORTFOLIO_DATA.achievements.map(ach => ({
    ...ach,
    icon: ICONS.Trophy,
}));

const hobbyIconMap: { [key: string]: React.ReactElement } = {
    Soccer: ICONS.Soccer,
    TableTennis: ICONS.TableTennis,
    Movies: ICONS.Movies,
};

export const HOBBIES_DATA: Hobby[] = PORTFOLIO_DATA.hobbies.map(hobby => ({
    ...hobby,
    icon: hobbyIconMap[hobby.icon] || ICONS.Zap
}));



export const TECH_ICONS = {
    'JavaScript': <SiJavascript className={projectMetricIconClass} color="#F7DF1E" />,
    'TypeScript': <SiTypescript className={projectMetricIconClass} color="#3178C6" />,
    'React': <SiReact className={projectMetricIconClass} color="#61DAFB" />,
    'Next.js': <SiNextdotjs className={projectMetricIconClass} color="#000000" />,
    'Supabase': <SiSupabase className={projectMetricIconClass} color="#3ECF8E" />,
    'Node.js': <SiNodedotjs className={projectMetricIconClass} color="#339933" />,
    'Tailwind CSS': <SiTailwindcss className={projectMetricIconClass} color="#06B6D4" />,
    'OpenAI': <SiOpenai className={projectMetricIconClass} color="#412991" />,
    'Vercel': <SiVercel className={projectMetricIconClass} color="#000000" />,
    'Python': <SiPython className={projectMetricIconClass} color="#3776AB" />,
    'Django': <SiDjango className={projectMetricIconClass} color="#092E20" />,
    'PostgreSQL': <SiPostgresql className={projectMetricIconClass} color="#4169E1" />
};