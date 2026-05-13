import { motion } from 'motion/react';
import { ShoppingCart, Smartphone, LineChart, Edit3 } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-bg-soft" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-text-heading mb-6 tracking-tight">
            See the platform in action
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to run a modern restaurant, seamlessly integrated into one powerful dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-accent overflow-hidden">
               <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                       <LineChart className="text-primary" />
                       <span className="font-bold">Performance Analytics</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">Live Updates</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="h-24 bg-slate-50 border border-accent rounded-xl p-4">
                       <p className="text-xs text-text-secondary mb-1">Total Revenue</p>
                       <p className="text-2xl font-bold text-primary">$12,450.00</p>
                    </div>
                    <div className="h-24 bg-slate-50 border border-accent rounded-xl p-4">
                       <p className="text-xs text-text-secondary mb-1">Active Orders</p>
                       <p className="text-2xl font-bold text-primary">24</p>
                    </div>
                  </div>
                  <div className="aspect-[16/9] w-full bg-slate-900 rounded-xl flex items-center justify-center relative group">
                     <img 
                       src="https://picsum.photos/seed/chart/800/450" 
                       className="w-full h-full object-cover opacity-40 rounded-xl"
                       alt="Analytics"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                           <LineChart size={48} className="mx-auto mb-2 opacity-20" />
                           <p className="font-medium text-slate-400">Heatmap Visualization</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Absolute Labels */}
            <div className="absolute -top-6 -left-6 bg-white shadow-lg border border-accent rounded-lg px-4 py-2 flex items-center space-x-2 animate-bounce">
               <div className="w-2 h-2 rounded-full bg-red-500" />
               <span className="text-xs font-bold uppercase tracking-tight">Live Orders</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white shadow-lg border border-accent rounded-lg px-4 py-2 flex items-center space-x-2">
               <Edit3 size={16} className="text-primary" />
               <span className="text-xs font-bold uppercase tracking-tight">Menu Editor</span>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-text-heading mb-4 flex items-center space-x-3">
                <Smartphone className="text-primary" />
                <span>Mobile-First Menu</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Provide your customers with a beautiful, responsive digital menu they can access via QR code. Fast, intuitive, and designed to increase average check size.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-heading mb-4 flex items-center space-x-3">
                <ShoppingCart className="text-primary" />
                <span>Smart Order Management</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Consolidate orders from your website, table service, and delivery partners into one centralized queue. Eliminate kitchen chaos forever.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-heading mb-4 flex items-center space-x-3">
                <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase italic">AI</span>
                <span>Automated Insights</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Our platform automatically identifies your most profitable items and peak traffic patterns, giving you actionable advice to grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
