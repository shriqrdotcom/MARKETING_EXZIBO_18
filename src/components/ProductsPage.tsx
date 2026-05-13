import { motion } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Calendar, 
  BarChart3, 
  Users, 
  MessageSquare, 
  ArrowRight,
  TrendingUp,
  LayoutDashboard,
  CheckCircle2,
  ChevronRight,
  Zap
} from 'lucide-react';

const products = [
  {
    id: 'builder',
    title: 'Menu Website Builder',
    description: 'Create a stunning, branded menu website that converts visitors into customers.',
    icon: Globe,
    features: ['Custom branding', 'Categories & items', 'Offers & combos', 'Mobile optimized'],
    visual: 'https://picsum.photos/seed/builder/600/400'
  },
  {
    id: 'ordering',
    title: 'Online Ordering System',
    description: 'Accept and track orders in real-time with zero friction.',
    icon: ShoppingCart,
    features: ['Real-time tracking', 'WhatsApp integration', 'Status updates', 'Payment gateway'],
    visual: 'https://picsum.photos/seed/ordering/600/400'
  },
  {
    id: 'booking',
    title: 'Table Booking',
    description: 'Manage reservations and floor plans effortlessly.',
    icon: Calendar,
    features: ['Table reservations', 'Time slot management', 'Customer flow', 'Instant confirmation'],
    visual: 'https://picsum.photos/seed/booking/600/400'
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    description: 'Data-driven insights to optimize your menu and performance.',
    icon: BarChart3,
    features: ['Sales tracking', 'Item performance', 'Revenue insights', 'Peak hour data'],
    visual: 'https://picsum.photos/seed/analytics/600/400'
  },
  {
    id: 'team',
    title: 'Team Management',
    description: 'Coordinate your staff and track performance from one place.',
    icon: Users,
    features: ['Role-based access', 'Shift tracking', 'Activity logs', 'Task distribution'],
    visual: 'https://picsum.photos/seed/team/600/400'
  },
  {
    id: 'engagement',
    title: 'Customer Engagement',
    description: 'Build loyalty and keep your customers coming back.',
    icon: MessageSquare,
    features: ['Review integration', 'Social media links', 'Email marketing', 'Loyalty programs'],
    visual: 'https://picsum.photos/seed/engagement/600/400'
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-heading leading-tight mb-6">
                All the tools your restaurant needs — <span className="text-primary italic">in one platform</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
                From menu creation to order management and analytics, EXZIBO helps you run and grow your restaurant effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="btn-primary w-full sm:w-auto h-14 px-10 text-lg shadow-lg shadow-primary/20">
                  Explore Features
                </button>
                <button className="btn-secondary w-full sm:w-auto h-14 px-10 text-lg flex items-center justify-center space-x-2">
                  <span>See Product Details</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-accent relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <LayoutDashboard size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-heading">EXZIBO Dashboard</h3>
                    <p className="text-xs text-text-secondary uppercase tracking-tight">System Operational</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-20 bg-slate-50 rounded-xl border border-accent p-4">
                    <div className="h-2 w-1/2 bg-slate-200 rounded mb-2" />
                    <div className="h-4 w-3/4 bg-slate-300 rounded" />
                  </div>
                  <div className="h-20 bg-slate-50 rounded-xl border border-accent p-4">
                    <div className="h-2 w-1/2 bg-slate-200 rounded mb-2" />
                    <div className="h-4 w-3/4 bg-slate-300 rounded" />
                  </div>
                </div>
                <div className="h-32 bg-slate-900 rounded-xl p-4 flex items-end justify-between overflow-hidden">
                   {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                     <div key={i} className="w-6 bg-primary rounded-t-sm" style={{ height: `${h}%` }} />
                   ))}
                </div>
              </div>
              {/* Mobile preview floating */}
              <div className="absolute -bottom-10 -right-4 w-40 h-80 bg-white rounded-[2rem] border-4 border-slate-900 shadow-2xl z-20 hidden sm:block overflow-hidden">
                <div className="p-4 pt-10">
                   <div className="w-full h-24 bg-slate-100 rounded-xl mb-4" />
                   <div className="space-y-2">
                     <div className="h-2 w-full bg-slate-200 rounded" />
                     <div className="h-2 w-2/3 bg-slate-100 rounded" />
                     <div className="h-8 w-full bg-primary rounded-lg mt-4" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Grid */}
      <section className="py-24 bg-white" id="modular-view">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-primary tracking-widest uppercase mb-4">Modular Ecosystem</h2>
            <p className="text-4xl font-display font-bold text-text-heading">Independent tools. One platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <a 
                key={product.id} 
                href={`#${product.id}`}
                className="group p-8 rounded-2xl border border-accent hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white flex flex-col"
              >
                <div className="w-12 h-12 bg-bg-soft rounded-lg flex items-center justify-center text-primary mb-6 border border-accent group-hover:scale-110 transition-transform">
                  <product.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3">{product.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow">{product.description}</p>
                <div className="flex items-center text-primary font-bold text-sm">
                  <span>Explore Feature</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Product Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id} 
          id={product.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-bg-soft'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <product.icon size={24} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-heading mb-6">{product.title}</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {product.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-text-heading font-medium">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary">See How It Works</button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-accent overflow-hidden group">
                  <img 
                    src={product.visual} 
                    alt={product.title} 
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                       Real Product UI
                     </span>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* How Products Work Together */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-white rounded-full dashed opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">One platform. Complete control.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              EXZIBO is built with deep integration at its core. Every module communicates effortlessly, so you have a single source of truth for your entire business.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
             {[
               { icon: Globe, label: 'High-Converting Menu', detail: 'Step 1: Presence' },
               { icon: ShoppingCart, label: 'Unified Order Stream', detail: 'Step 2: Operations' },
               { icon: BarChart3, label: 'Real-time Insights', detail: 'Step 3: Intelligence' },
               { icon: TrendingUp, label: 'Scalable Growth', detail: 'Step 4: Expansion' }
             ].map((step, i) => (
               <div key={i} className="flex flex-col lg:flex-row items-center group">
                 <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-3xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mb-4 shadow-2xl shadow-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                       <step.icon size={40} />
                    </div>
                    <span className="font-bold text-lg">{step.label}</span>
                    <span className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{step.detail}</span>
                 </div>
                 {i < 3 && (
                   <div className="hidden lg:block mx-8 text-slate-700 animate-pulse">
                     <ChevronRight size={32} />
                   </div>
                 )}
                 {i < 3 && (
                   <div className="lg:hidden my-8 text-slate-700">
                     <ArrowRight size={32} className="rotate-90 border-2 border-slate-800 rounded-full p-1" />
                   </div>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Product FAQ */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-16">Product Questions</h2>
           <div className="space-y-6">
              {[
                { q: 'What products are included?', a: 'Every EXZIBO plan includes our core Menu Builder and Order Management system. Higher tiers unlock advanced analytics, team roles, and multi-location support.' },
                { q: 'Can I use modules separately?', a: 'While our modules are designed to work together, you can choose to hide or disable specific features like Table Booking or Customer Reviews if they don’t fit your business model.' },
                { q: 'Is it scalable for large chains?', a: 'Absolutely. EXZIBO is built on enterprise-grade infrastructure that supports everything from single cloud kitchens to multi-national restaurant chains with hundreds of outlets.' },
                { q: 'Does it support multiple restaurants?', a: 'Yes. Our platform features a multi-tenant architecture that allows you to manage all your brands and locations from a single unified login with branch-level permissions.' }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-accent shadow-sm">
                   <h4 className="font-bold text-text-heading mb-3">{faq.q}</h4>
                   <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-8 rounded-3xl border border-accent bg-slate-50/50">
                 <h3 className="text-2xl font-bold text-text-heading mb-8 flex items-center space-x-3">
                   <span className="text-red-500">❌</span>
                   <span>Without EXZIBO</span>
                 </h3>
                 <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                       <span className="font-bold text-slate-300 text-lg">01</span>
                       <p className="text-text-secondary">Subscription fatigue from 5+ different disconnected tools.</p>
                    </li>
                    <li className="flex items-start space-x-4">
                       <span className="font-bold text-slate-300 text-lg">02</span>
                       <p className="text-text-secondary">Manual data transfer between systems leading to human errors.</p>
                    </li>
                    <li className="flex items-start space-x-4">
                       <span className="font-bold text-slate-300 text-lg">03</span>
                       <p className="text-text-secondary">No centralized insights. You never see the full picture of your revenue.</p>
                    </li>
                 </ul>
              </div>
              <div className="p-8 rounded-3xl border-2 border-primary bg-primary/5 relative overflow-hidden">
                 {/* Accent */}
                 <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary rotate-45" />

                 <h3 className="text-2xl font-bold text-text-heading mb-8 flex items-center space-x-3">
                   <span className="text-green-500">✅</span>
                   <span>With EXZIBO</span>
                 </h3>
                 <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                       <span className="font-bold text-primary text-lg">01</span>
                       <p className="text-text-heading font-medium">One clean dashboard for your entire restaurant ecosystem.</p>
                    </li>
                    <li className="flex items-start space-x-4">
                       <span className="font-bold text-primary text-lg">02</span>
                       <p className="text-text-heading font-medium">Automation takes care of the grunt work. Systems talk contextually.</p>
                    </li>
                    <li className="flex items-start space-x-4">
                       <span className="font-bold text-primary text-lg">03</span>
                       <p className="text-text-heading font-medium">Data-driven decisions powered by real-time sync across modules.</p>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-text-heading mb-16 underline decoration-primary/20 underline-offset-8">Designed for every dining experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { type: 'Small Restaurants', benefit: 'Get online fast without high agency costs or technical overhead.' },
               { type: 'Multi-outlet Brands', benefit: 'Consolidate multiple branches into one management dashboard.' },
               { type: 'Cloud Kitchens', benefit: 'Optimized for high-volume ordering and delivery tracking.' }
             ].map((useCase, i) => (
               <div key={i} className="p-10 bg-white rounded-2xl border border-accent hover:border-primary/30 transition-all group">
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform">{useCase.type}</h4>
                  <p className="text-text-secondary leading-relaxed">{useCase.benefit}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
             <Zap size={14} className="fill-current" />
             <span>Instant Activation</span>
           </div>
           <h2 className="text-5xl lg:text-6xl font-display font-bold text-text-heading mb-8">Start managing your restaurant smarter</h2>
           <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
             Join the growing community of smart restaurateurs using EXZIBO. It's time to digitize your growth.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="btn-primary h-16 px-12 text-lg w-full sm:w-auto">Explore Platform</button>
              <button className="btn-secondary h-16 px-12 text-lg w-full sm:w-auto">View Pricing</button>
           </div>
        </div>
      </section>

    </div>
  );
}
