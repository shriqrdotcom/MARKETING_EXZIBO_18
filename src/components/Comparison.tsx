import { Check, X } from 'lucide-react';

export default function Comparison() {
  const comparisonItems = [
    'Integrated Menu Website',
    'Real-time Kitchen Dashboard',
    'AI Performance Insights',
    'Multi-restaurant Sync',
    'Zero Monthly Commissions',
    '24/7 Dedicated Support',
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-text-heading mb-8">
              Everything you need in one platform
            </h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              Why pay for 5 different subscriptions when you can have everything integrated and working together? Save time, save money, and eliminate errors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {comparisonItems.map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <span className="font-semibold text-text-heading text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
             <div className="grid grid-cols-2 gap-6">
                {/* Traditional Tooling */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-accent relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3">
                    <X size={24} className="text-red-400 opacity-50" />
                  </div>
                   <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-8">Traditional Tools</h3>
                   <div className="space-y-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex flex-col space-y-1">
                          <div className="h-2 w-full bg-slate-200 rounded" />
                          <div className="h-2 w-2/3 bg-slate-100 rounded" />
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 pt-8 border-t border-accent">
                      <p className="text-3xl font-display font-bold text-slate-300">₹₹₹</p>
                      <p className="text-xs text-slate-400 mt-1">Fragmented Workflow</p>
                   </div>
                </div>

                {/* EXZIBO */}
                <div className="p-8 rounded-2xl bg-primary text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3">
                    <Check size={24} className="text-white opacity-50" />
                  </div>
                   <h3 className="font-bold text-white/60 uppercase tracking-widest text-xs mb-8">With EXZIBO</h3>
                   <div className="space-y-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex flex-col space-y-1">
                          <div className="h-2 w-full bg-white/30 rounded" />
                          <div className="h-2 w-2/3 bg-white/20 rounded" />
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-3xl font-display font-bold text-white">One Plan</p>
                      <p className="text-xs text-white/60 mt-1">Seamless Efficiency</p>
                   </div>
                   
                   {/* Glow effect */}
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
