import Hero from '@/components/sections/Hero';
import Story from '@/components/sections/Story';
import AgentShowcase from '@/components/sections/AgentShowcase';
import TechMagic from '@/components/sections/TechMagic';
import Process from '@/components/sections/Process';
import SocialProof from '@/components/sections/SocialProof';
import FinalCTA from '@/components/sections/FinalCTA';
import Contact from '@/components/sections/Contact';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'AI Agent Engineering Studio',
  description: 'We build intelligent, autonomous AI agents that grow your business. From simple assistants to complex multi-agent systems.',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <AgentShowcase />
      <TechMagic />
      <Process />
      <SocialProof />
      <FinalCTA />
      <Contact />
    </>
  );
}
