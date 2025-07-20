import type { ReactNode } from 'react';

export interface Metric {
  value: string;
  label: string;
  icon: ReactNode;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: ReactNode;
  skills: Skill[];
}

export interface ImpactMetric {
  icon: ReactNode;
  text: string;
  value?: number;
  suffix?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  achievements: string[];
  impactMetrics: ImpactMetric[];
}

export interface CaseStudy {
  problem: string;
  solution: string;
  architecture: string[];
  pmFramework: string;
  teamLeadership: string;

  riskMitigation: string;
  dataAnalysis?: string;
  businessImpact: string;
  roi?: string;
}

export interface ProjectLink {
  type: 'live' | 'code' | 'store' | 'caseStudy';
  url?: string;
}

export interface ProjectMetric {
    icon: ReactNode;
    label: string;
    value: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  links: ProjectLink[];
  metrics: ProjectMetric[];
  caseStudy: CaseStudy;
}

export interface SocialLink {
  name: 'LinkedIn' | 'GitHub' | 'Kaggle';
  url: string;
  icon: ReactNode;
}

export interface EducationItem {
  degree: string;
  school: string;
  date: string;
  coursework: string[];
}

export interface CertificationItem {
  name:string;
  issuer: string;
  date: string;
  icon: ReactNode;
  url?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
}

export interface Achievement {
    title: string;
    year: string;
    description: string;
    icon: ReactNode;
}

export interface Hobby {
    name: string;
    description: string;
    icon: ReactNode;
}