import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function BottomCTA() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[2.5rem] p-12 lg:p-24 text-center text-white shadow-2xl shadow-primary/20 overflow-hidden"
        >
          {/* Abstract patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] border-[40px] border-white rounded-full" />
             <div className="absolute -bottom-1/2 -right-1/4 w-[120%] h-[120%] border-[20px] border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 tracking-tight">
              Ready to see EXZIBO in action?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 mb-12">
              Join 50+ restaurants already scaling their operations with our all-in-one platform. No commitment required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
               <button className="w-full sm:w-auto h-16 px-12 bg-white text-primary font-bold text-lg rounded-xl hover:bg-slate-50 transition-colors shadow-lg active:scale-95">
                 Book My Free Demo
               </button>
               <button className="w-full sm:w-auto h-16 px-12 bg-primary border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center space-x-3 active:scale-95">
                 <Play size={20} fill="currentColor" />
                 <span>Watch Teaser</span>
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
