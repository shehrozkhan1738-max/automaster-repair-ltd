import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Gauge, Cog, ArrowRight, ChevronDown } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { ValueDetails } from './components/ValueDetails';
import { Proof } from './components/Proof';
import { CTA } from './components/CTA';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  
  // Slow parallax for background
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    // Simulate a tachometer loading animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-charcoal flex flex-col items-center justify-center z-50">
        <div className="relative w-48 h-48">
          {/* Tachometer Loading Animation */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2c2c2e"
              strokeWidth="4"
              strokeDasharray="210 360"
              strokeLinecap="round"
              transform="rotate(150 50 50)"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e11d48"
              strokeWidth="4"
              strokeDasharray="0 360"
              strokeLinecap="round"
              transform="rotate(150 50 50)"
              animate={{ strokeDasharray: "210 360" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Needle */}
            <motion.line
              x1="50"
              y1="50"
              x2="50"
              y2="10"
              stroke="#e11d48"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: -120 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originX: "50px", originY: "50px" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">Calibrating...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-garage-gradient overflow-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cog className="w-8 h-8 text-accent" />
            </motion.div>
            <span className="text-xl font-display font-bold tracking-tight">
              AUTOMASTER<span className="text-accent">.</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#book" className="hover:text-white transition-colors">Book Now</a>
            <a href="#" className="hover:text-white transition-colors">Testimonials</a>
            <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:border-accent/50 hover:text-white transition-all duration-300">
              Client Portal
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION: Hook + Promise of Value */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
          {/* Background Workshop Image with Parallax */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-0 z-0 opacity-40"
          >
            <img 
              src="https://picsum.photos/seed/garage-main/1920/1080?blur=2" 
              alt="Workshop Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
          </motion.div>

          <div className="relative z-20 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Gauge className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold tracking-widest text-accent uppercase">Master Technicians</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tight">
                Precision Care for <br />
                <span className="text-accent metal-sweep inline-block">Every Vehicle</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Automaster Repair ltd: Where master mechanical craftsmanship meets performance tuning. Fast fixes, lasting results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-30">
                <motion.a
                  href="#book"
                  whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(225, 29, 72, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-accent text-white font-bold rounded-lg overflow-hidden transition-all border-glow inline-flex items-center justify-center min-w-[200px]"
                >
                  <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative flex items-center gap-2">
                    BOOK YOUR SLOT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
                
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all inline-flex items-center justify-center min-w-[200px]"
                >
                  VIEW SERVICES
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* VALUE PROPOSITION IN DETAIL */}
        <ValueDetails />

        {/* PROOF SECTION */}
        <Proof />

        {/* CTA SECTION */}
        <CTA />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Cog className="w-6 h-6 text-accent" />
            <span className="text-lg font-display font-bold tracking-tight">
              AUTOMASTER<span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Automaster Repair ltd. All rights reserved. Precision is our standard.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
