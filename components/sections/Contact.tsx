'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
  };

  return (
    <section id="contact" className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                <p className="text-gray-400">We'll be in touch shortly to discuss your vision.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">What do you want to build?</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell us about your idea..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
