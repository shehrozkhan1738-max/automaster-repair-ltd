import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Settings, Gauge, Search, Car } from 'lucide-react';

export const CTA: React.FC = () => {
  const [regNumber, setRegNumber] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState<{ make: string; model: string; year: string } | null>(null);
  const [isLookingUp, setIsLookingUp] = useState(false);

  const handleLookup = async () => {
    if (!regNumber) return;
    setIsLookingUp(true);
    
    // Simulate API lookup delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Mock data based on common formats or just generic
    // In a real app, this would call a DVLA/Vehicle lookup API
    const mockVehicles: Record<string, any> = {
      'AB12CDE': { make: 'BMW', model: 'M3 Competition', year: '2022' },
      'RE66XYZ': { make: 'Audi', model: 'RS6 Avant', year: '2017' },
      'TEST': { make: 'Porsche', model: '911 GT3', year: '2023' },
    };

    const found = mockVehicles[regNumber.toUpperCase()] || { 
      make: 'Detected Vehicle', 
      model: 'Standard Model', 
      year: '2021' 
    };
    
    setVehicleInfo(found);
    setIsLookingUp(false);
  };

  return (
    <section id="book" className="py-24 px-6 relative bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Book Your <span className="text-accent">Precision</span> Service</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Experience the Automaster difference. Our workshop is equipped with master technicians and precision tools for all your repair and tuning needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-white">Unit 4, Industrial Park, London, UK</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Phone</p>
                  <p className="text-white">+44 (0) 20 7946 0123</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="+44..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Car Registration Number</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
                    className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-accent outline-none transition-colors font-mono tracking-widest uppercase" 
                    placeholder="E.G. AB12 CDE" 
                  />
                  <button 
                    type="button"
                    onClick={handleLookup}
                    disabled={isLookingUp || !regNumber}
                    className="px-4 bg-white/10 hover:bg-accent hover:text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLookingUp ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Search className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {vehicleInfo && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 rounded-lg bg-accent/5 border border-accent/20 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Vehicle Detected</p>
                    <p className="text-white font-semibold">{vehicleInfo.make} {vehicleInfo.model} ({vehicleInfo.year})</p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-accent outline-none transition-colors appearance-none">
                  <option className="bg-charcoal">Performance Tuning</option>
                  <option className="bg-charcoal">Windscreen Replacement</option>
                  <option className="bg-charcoal">Windscreen Repair</option>
                  <option className="bg-charcoal">General Mechanical Repair</option>
                  <option className="bg-charcoal">Brake Service</option>
                </select>
              </div>
              <button className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all flex items-center justify-center gap-2">
                CONFIRM BOOKING <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
