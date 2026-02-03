'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 md:py-48 bg-background relative z-10 overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter">
            Let's build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">intelligent</span> together.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
            Whether you need a simple AI assistant or a complex agent ecosystem — we’re ready.
          </p>
          
          <motion.button 
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-5 bg-white text-black text-xl font-medium rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group cursor-pointer"
          >
            Start the Conversation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
