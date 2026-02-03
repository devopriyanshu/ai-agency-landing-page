export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface UseCase {
  id: string;
  title: string;
  industry: string;
  description: string;
  benefits: string[];
}

export interface TechStackItem {
  name: string;
  description: string;
  category: 'framework' | 'tool' | 'technique';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  industry: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}
