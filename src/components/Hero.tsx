import { motion } from 'motion/react';
import { Play, ChevronRight, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-soft -skew-x-12 translate-x-1/4 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span>Version 2.0 is now live</span>
              <ChevronRight size={14} />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-heading leading-[1.1] mb-6">
              All-in-one platform to grow your <span className="text-primary italic">restaurant</span> online
            </h1>
            
            <p className="text-lg lg:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
              Create your menu website, manage orders, track performance, and grow your restaurant — all from one dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="btn-primary w-full sm:w-auto h-14 px-10 text-lg shadow-lg shadow-primary/20">
                Explore Platform
              </button>
              <button className="btn-secondary w-full sm:w-auto h-14 px-10 text-lg flex items-center justify-center space-x-2">
                <Play size={18} fill="currentColor" />
                <span>View Features</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>14-day free trial</span>
              </div>
            </div>
          </motion.div>

          {/* Right content - Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-accent overflow-hidden">
              <div className="h-10 bg-slate-50 border-b border-accent flex items-center px-4 space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-4 h-5 w-48 bg-slate-200/50 rounded-md" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="h-4 w-32 bg-slate-100 rounded mb-2" />
                    <div className="h-6 w-48 bg-slate-200 rounded" />
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded bg-slate-50 border border-accent" />
                    <div className="w-8 h-8 rounded bg-slate-50 border border-accent" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded-xl border border-accent bg-slate-50/30">
                      <div className="h-3 w-16 bg-slate-100 rounded mb-3" />
                      <div className="h-5 w-24 bg-slate-200 rounded" />
                    </div>
                  ))}
                </div>

                <div className="h-48 w-full bg-slate-50 rounded-xl border border-accent flex items-end justify-between p-6 overflow-hidden">
                   {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
                     <div 
                      key={i} 
                      className="w-4 sm:w-6 bg-primary/20 rounded-t-sm relative group cursor-pointer"
                      style={{ height: `${h}%` }}
                     >
                        <div className="absolute inset-x-0 bottom-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" style={{ height: '30%' }} />
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Floating Mobile Mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 w-48 bg-white rounded-[2rem] shadow-2xl border-4 border-slate-900 overflow-hidden hidden sm:block"
            >
              <div className="aspect-[9/19.5] relative bg-white">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-xl flex justify-center py-1">
                  <div className="w-12 h-1 bg-slate-800 rounded-full" />
                </div>
                <div className="p-4 pt-8">
                  <div className="h-40 w-full rounded-2xl bg-slate-100 mb-4 overflow-hidden relative">
                    <img 
                      src="https://picsum.photos/seed/restaurant/400/300" 
                      alt="Food" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-slate-200 rounded" />
                    <div className="h-3 w-1/2 bg-slate-100 rounded" />
                    <div className="grid grid-cols-2 gap-2 pt-2">
                       <div className="h-8 rounded bg-primary/10 border border-primary/20" />
                       <div className="h-8 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accent decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
