import { NavLink, Service, UseCase, TechStackItem, ProcessStep, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'AI Agent Studio',
  description: 'Custom AI Agent Engineering - From Simple Automations to Complex Multi-Agent Systems',
  url: 'https://aiagent.studio',
  ogImage: '/og/default.png',
  links: {
    twitter: 'https://twitter.com/aiagent',
    linkedin: 'https://linkedin.com/company/aiagent',
  },
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '/blog' },
];

export const services: Service[] = [
  {
    id: 'website-agents',
    title: 'Website Agents',
    description: 'Intelligent agents that interact with websites, extract data, and automate web-based workflows.',
    icon: 'Globe',
    features: [
      'Web scraping & data extraction',
      'Form automation',
      'Dynamic content interaction',
      'Multi-page navigation',
    ],
  },
  {
    id: 'business-agents',
    title: 'Business Agents',
    description: 'Custom AI systems that streamline operations, automate processes, and enhance decision-making.',
    icon: 'Briefcase',
    features: [
      'Process automation',
      'Data analysis & reporting',
      'Workflow optimization',
      'Integration with existing tools',
    ],
  },
  {
    id: 'marketing-agents',
    title: 'Marketing Agents',
    description: 'AI-powered marketing automation for content creation, campaign management, and customer engagement.',
    icon: 'TrendingUp',
    features: [
      'Content generation',
      'Social media automation',
      'Email campaign optimization',
      'Analytics & insights',
    ],
  },
  {
    id: 'creator-agents',
    title: 'Creator Agents',
    description: 'AI assistants for content creators, helping with ideation, production, and distribution.',
    icon: 'Sparkles',
    features: [
      'Content ideation',
      'Script writing assistance',
      'Publishing automation',
      'Audience engagement',
    ],
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent Workflows',
    description: 'Complex orchestrated systems where multiple AI agents collaborate to solve sophisticated problems.',
    icon: 'Network',
    features: [
      'Agent orchestration',
      'Task delegation',
      'Collaborative problem-solving',
      'Scalable architecture',
    ],
  },
  {
    id: 'rag-systems',
    title: 'RAG-Based Systems',
    description: 'Retrieval-Augmented Generation systems that combine your data with AI for accurate, context-aware responses.',
    icon: 'Database',
    features: [
      'Custom knowledge bases',
      'Document Q&A',
      'Semantic search',
      'Context-aware responses',
    ],
  },
];

export const techStack: TechStackItem[] = [
  {
    name: 'LangChain',
    description: 'Framework for building applications with large language models',
    category: 'framework',
  },
  {
    name: 'LangGraph',
    description: 'Library for building stateful, multi-actor applications with LLMs',
    category: 'framework',
  },
  {
    name: 'OpenAI GPT-4',
    description: 'Advanced language models for natural language understanding and generation',
    category: 'tool',
  },
  {
    name: 'Anthropic Claude',
    description: 'Powerful AI assistant for complex reasoning and analysis',
    category: 'tool',
  },
  {
    name: 'Vector Databases',
    description: 'Pinecone, Weaviate, ChromaDB for semantic search and retrieval',
    category: 'tool',
  },
  {
    name: 'RAG (Retrieval-Augmented Generation)',
    description: 'Technique for grounding AI responses in your specific data',
    category: 'technique',
  },
  {
    name: 'Function Calling',
    description: 'Enabling AI agents to interact with external tools and APIs',
    category: 'technique',
  },
  {
    name: 'Prompt Engineering',
    description: 'Crafting effective prompts for optimal AI performance',
    category: 'technique',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    description: 'We start by understanding your business needs, challenges, and goals to design the perfect AI solution.',
  },
  {
    step: 2,
    title: 'Architecture Design',
    description: 'Our engineers design a scalable, robust architecture tailored to your specific use case.',
  },
  {
    step: 3,
    title: 'Development & Integration',
    description: 'We build your custom AI agents and integrate them seamlessly with your existing systems.',
  },
  {
    step: 4,
    title: 'Testing & Refinement',
    description: 'Rigorous testing ensures your AI agents perform reliably and accurately in production.',
  },
  {
    step: 5,
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support, monitoring, and optimization.',
  },
];

export const useCases: UseCase[] = [
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Automation',
    industry: 'Retail',
    description: 'Automated product research, inventory management, and customer support for online stores.',
    benefits: [
      'Reduced manual data entry',
      '24/7 customer support',
      'Intelligent product recommendations',
      'Automated order processing',
    ],
  },
  {
    id: 'content-production',
    title: 'Content Production Pipeline',
    industry: 'Media & Publishing',
    description: 'End-to-end content creation, editing, and distribution workflow powered by AI agents.',
    benefits: [
      'Faster content creation',
      'Consistent brand voice',
      'Multi-platform distribution',
      'SEO optimization',
    ],
  },
  {
    id: 'customer-research',
    title: 'Customer Research & Insights',
    industry: 'Market Research',
    description: 'AI agents that gather, analyze, and synthesize customer feedback from multiple sources.',
    benefits: [
      'Real-time insights',
      'Sentiment analysis',
      'Trend identification',
      'Actionable recommendations',
    ],
  },
  {
    id: 'legal-document-analysis',
    title: 'Legal Document Analysis',
    industry: 'Legal Services',
    description: 'Intelligent review and analysis of contracts, agreements, and legal documents.',
    benefits: [
      'Faster document review',
      'Risk identification',
      'Clause extraction',
      'Compliance checking',
    ],
  },
  {
    id: 'recruitment-automation',
    title: 'Recruitment Automation',
    industry: 'Human Resources',
    description: 'AI-powered candidate screening, interview scheduling, and talent matching.',
    benefits: [
      'Reduced time-to-hire',
      'Better candidate matching',
      'Automated screening',
      'Bias reduction',
    ],
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis & Reporting',
    industry: 'Finance',
    description: 'Automated financial data analysis, report generation, and anomaly detection.',
    benefits: [
      'Real-time reporting',
      'Fraud detection',
      'Predictive analytics',
      'Regulatory compliance',
    ],
  },
];

export const industries = [
  'E-commerce',
  'Healthcare',
  'Finance',
  'Legal',
  'Marketing & Advertising',
  'Media & Publishing',
  'Real Estate',
  'Education',
  'Manufacturing',
  'Technology',
  'Other',
];
