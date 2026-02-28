import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Tesla Model S Owner",
    content: "The AI diagnostics found a micro-crack in my suspension that two other garages missed. Automaster is on another level.",
    avatar: "https://picsum.photos/seed/james/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Porsche 911 Enthusiast",
    content: "I've never seen a garage this clean or this professional. The 'mechanical button' feel of their service is real.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Fleet Manager",
    content: "Scaling our fleet maintenance with Automaster's predictive systems reduced our downtime by 40% in six months.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];

export const Proof: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">The Proof</h2>
          <p className="text-4xl md:text-5xl font-display font-bold">Trusted by Performance Drivers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
