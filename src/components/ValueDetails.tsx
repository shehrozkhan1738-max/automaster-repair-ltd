import React from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Zap, Gauge, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "General Mechanical Repairs",
    description: "From suspension work to exhaust systems, our master technicians handle all mechanical repairs with absolute precision.",
    icon: Settings,
    price: "From £45"
  },
  {
    title: "Precision Brake Service",
    description: "Expert brake pad replacement, rotor resurfacing, and fluid flushes for maximum stopping power and safety.",
    icon: ShieldCheck,
    price: "From £89"
  },
  {
    title: "Performance Tuning",
    description: "Software-optimized ECU remapping and mechanical fine-tuning to unlock your vehicle's true potential.",
    icon: Zap,
    price: "From £199"
  },
  {
    title: "Windscreen Services",
    description: "Professional windscreen repair and replacement using high-quality glass and precision bonding techniques.",
    icon: Gauge,
    price: "Quote Required"
  }
];

export const ValueDetails: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">Our Services</h2>
          <h3 className="text-4xl font-display font-bold">Mechanical Excellence <br /> <span className="text-gray-500">Master Craftsmanship</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-500 metal-sweep flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-accent font-mono text-xs">{service.price}</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px dotted-line opacity-20" />
    </section>
  );
};
