'use client';

import { motion } from 'framer-motion';
import { Database, Brain, Server, Code2, Globe } from 'lucide-react';

export default function TechMagic() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Tech Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Magic</span>
            </h2>
            
            <div className="space-y-8 text-xl text-gray-400">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Code2 className="w-6 h-6 text-indigo-400" />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-2">Designed like software.</h3>
                    <p>Modular architectures that are easy to maintain and extend.</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Database className="w-6 h-6 text-cyan-400" />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-2">Built like systems.</h3>
                    <p>Robust knowledge retrieval (RAG) and memory management.</p>
                 </div>
              </div>
              
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-emerald-400" />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-2">Deployed like products.</h3>
                    <p>Scalable cloud infrastructure ready for millions of users.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Visual abstract representation */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
             {/* Central Brain Node */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.05, 1],
                 filter: ["drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))", "drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))", "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))"]
               }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center z-20"
             >
                <Brain className="w-12 h-12 text-white" />
             </motion.div>
             
             {/* Rotating Container for Orbits */}
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Orbit Path 1 */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute w-[240px] h-[240px] rounded-full border border-white/5"
                >
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500/50 flex items-center justify-center">
                      <Database className="w-5 h-5 text-cyan-400" />
                   </div>
                </motion.div>

                {/* Orbit Path 2 */}
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   className="absolute w-[340px] h-[340px] rounded-full border border-white/5"
                >
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-pink-900/50 border border-pink-500/50 flex items-center justify-center">
                      <Server className="w-5 h-5 text-pink-400" />
                   </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-500/50 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-emerald-400" />
                   </div>
                </motion.div>
             </div>
             
             {/* Connecting Lines Glow */}
             <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
