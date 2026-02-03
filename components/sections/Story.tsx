'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const lines = [
  "Businesses don't need more tools.",
  "They need intelligence.",
  "Systems that understand.",
  "Agents that act.",
  "And workflows that scale."
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {lines.map((line, index) => (
            <Line key={index} text={line} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Line({ text, index }: { text: string; index: number }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-10%" }}
      className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-12 ${
        index === 1 ? 'text-white' : 
        index === 4 ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400' :
        'text-gray-500'
      }`}
    >
      {text}
    </motion.h2>
  );
}
