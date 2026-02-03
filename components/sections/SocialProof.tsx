'use client';

import { motion } from 'framer-motion';

const statements = [
  "Built by engineers.",
  "Designed for scale.",
  "Focused on partnership."
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          {statements.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-gray-500 group-hover:text-white transition-colors duration-300">
                {text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
