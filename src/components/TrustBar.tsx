import { motion } from 'motion/react';

export default function TrustBar() {
  const logos = [
    'Margherita Haven', 'Urban Dine', 'Spice Route', 'The Green Kitchen', 'Ocean Grill'
  ];

  return (
    <section className="py-12 border-y border-accent bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-text-secondary uppercase tracking-widest mb-10">
          Trusted by 50+ leading restaurants worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {logos.map((logo) => (
             <div key={logo} className="flex items-center space-x-2">
               <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-400">
                 {logo[0]}
               </div>
               <span className="text-xl font-display font-bold text-slate-600">{logo}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
