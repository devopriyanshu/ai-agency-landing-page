'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-500/20 blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[100px]" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
        />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-gray-300 backdrop-blur-sm mb-6">
            AI Agent Engineering Studio
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Hey. Want to grow your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">intelligent AI agents?</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          We design and build custom AI agents — for websites, workflows, marketing, and products — from simple assistants to complex multi-agent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 group cursor-pointer"
          >
            Let&apos;s Build Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 text-white text-lg font-medium rounded-full hover:bg-white/10 border border-white/10 transition-colors backdrop-blur-sm cursor-pointer"
          >
            See What We Create
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Elements / Abstract Visuals */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 md:right-20 lg:right-32 w-24 h-24 md:w-32 md:h-32 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hidden md:flex items-center justify-center z-0 rotate-12"
      >
        <div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      </motion.div>
       <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 left-10 md:left-20 lg:left-32 w-16 h-16 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md hidden md:flex items-center justify-center z-0 -rotate-6"
      >
      </motion.div>
    </section>
  );
}
