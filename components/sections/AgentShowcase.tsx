'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Globe, TrendingUp, Workflow, Brain, Database, Layers } from 'lucide-react';

const agents = [
  {
    title: "Website AI Agents",
    description: "Intelligent chatbots that don't just chat—they take action, book meetings, and solve problems.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Marketing Agents",
    description: "Autonomous growth engines that analyze data, optimize campaigns, and scale outreach.",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Workflow Automation",
    description: "Connect your entire stack. Agents that move data between apps without lifting a finger.",
    icon: Workflow,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Research Agents",
    description: "Deep-dive systems that browse the web, synthesize reports, and verify facts in seconds.",
    icon: Brain,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Multi-Agent Systems",
    description: "Complex orchestrations where specialized agents collaborate to solve impossible tasks.",
    icon: Layers,
    color: "from-indigo-500 to-violet-500"
  }
];

export default function AgentShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-6 z-10 md:left-20 max-w-xl">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
           >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              What We Build
            </h2>
            <p className="mt-4 text-xl text-gray-400">Not bots. Intelligent agents.</p>
           </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20 pt-20">
          {agents.map((agent, index) => {
             const Icon = agent.icon;
             return (
              <div 
                key={index}
                className="group relative h-[450px] w-[350px] md:w-[450px] shrink-0 overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative h-full flex flex-col p-8 z-10">
                   <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-8 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">{agent.title}</h3>
                   <p className="text-lg text-gray-400 leading-relaxed">{agent.description}</p>
                   
                   <div className="mt-auto pt-8 flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                      <span className="mr-2">Explore Capability</span>
                      <div className="w-8 h-[1px] bg-current" />
                   </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
