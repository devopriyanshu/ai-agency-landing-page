'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "We Listen",
    description: "Every great system starts with understanding. We deep-dive into your workflows, pain points, and ambitious goals."
  },
  {
    number: "02",
    title: "We Design Intelligence",
    description: "We don't just write code. We architect logic. Mapping out how agents reason, retrieve data, and take action."
  },
  {
    number: "03",
    title: "We Build Systems",
    description: "Production-grade engineering. Secure, scalable, and connected to your existing tools and databases."
  },
  {
    number: "04",
    title: "We Ship & Scale",
    description: "Deployment is just the beginning. We monitor, optimize, and expand your agent capabilities over time."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group relative pl-16 md:pl-24 pb-20 last:pb-0"
            >
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[43px] top-16 bottom-0 w-px bg-white/10 group-hover:bg-indigo-500/50 transition-colors duration-500" />
              )}
              
              {/* Number Circle */}
              <div className="absolute left-0 top-0 w-14 h-14 md:w-22 md:h-22 rounded-full border border-white/10 bg-background flex items-center justify-center text-lg font-mono text-gray-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-colors duration-500 z-10">
                {step.number}
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                {step.title}
              </h3>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
