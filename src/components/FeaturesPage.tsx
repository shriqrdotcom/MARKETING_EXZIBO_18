import { motion } from 'motion/react';
import { 
  Globe, 
  Zap, 
  ShoppingCart,
  BarChart3,
  Calendar, 
  PieChart, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Play,
  Monitor,
  Check
} from 'lucide-react';

const coreFeatures = [
  {
    title: 'Menu Website Builder',
    benefit: 'Launch in minutes',
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Online Ordering',
    benefit: 'Zero commission',
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    title: 'Table Booking',
    benefit: 'Optimize turnover',
    icon: Calendar,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Analytics',
    benefit: 'Data-driven growth',
    icon: PieChart,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Team Management',
    benefit: 'Coordinate staff',
    icon: Users,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Customer Engagement',
    benefit: 'Build loyalty',
    icon: MessageSquare,
    color: 'bg-pink-50 text-pink-600',
  },
];

const detailedFeatures = [
  {
    id: 'builder',
    title: 'Menu Website Builder',
    description: 'Transform your menu into a high-converting digital experience. No technical skills required — just your passion for food.',
    bullets: [
      'Create branded menu websites with custom themes',
      'Instant updates for categories and items',
      'High-quality image support for every dish',
      'Mobile-optimized for QR code scanning'
    ],
    visual: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    stat: '98% Mobile Readiness',
    cta: 'Build My Menu'
  },
  {
    id: 'ordering',
    title: 'Online Ordering System',
    description: 'Capture every sale with a seamless checkout process. From table service to home delivery, manage it all centrally.',
    bullets: [
      'Real-time order notifications via WhatsApp/Telegram',
      'Automated status updates for customers',
      'Interactive kitchen display queue',
      'Direct payment integration'
    ],
    visual: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=1200',
    stat: '0% Commission Fee',
    cta: 'Start Taking Orders'
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description: 'Stop guessing and start growing. Our platform turns every order into actionable data to maximize your ROI.',
    bullets: [
      'Track sales performance by hour, day, and item',
      'Identify top-selling combos and offers',
      'Monitor revenue trends and gross margins',
      'Understand customer peak traffic patterns'
    ],
    visual: 'https://images.unsplash.com/photo-1551288049-bbbda5012375?auto=format&fit=crop&q=80&w=1200',
    stat: '25% Revenue Growth',
    cta: 'Explore Insights'
  },
  {
    id: 'booking',
    title: 'Table Booking System',
    description: 'Eliminate overbooking and optimize your floor plan. Give your customers the convenience they expect.',
    bullets: [
      'Self-service web booking for customers',
      'Manage availability with custom time slots',
      'Automated confirmation and reminders',
      'Integrated floor plan management'
    ],
    visual: 'https://images.unsplash.com/photo-1550966841-3ee5ad602011?auto=format&fit=crop&q=80&w=1200',
    stat: 'Zero Over-booking',
    cta: 'Manage Bookings'
  },
  {
    id: 'team',
    title: 'Team Management',
    description: 'Empower your staff with the right tools while maintaining complete control over your business operations.',
    bullets: [
      'Add unlimited staff members with custom roles',
      'Granular permissions (Admin, Manager, Staff)',
      'Track shift activity and performance logs',
      'Secure centralized coordination'
    ],
    visual: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
    stat: 'Full Activity Transparency',
    cta: 'Manage Team'
  },
  {
    id: 'engagement',
    title: 'Customer Engagement',
    description: 'Turn one-time diners into lifelong fans. Build your brand presence and own your customer relationships.',
    bullets: [
      'Integrated social media links and reviews',
      'Automated feedback collection system',
      'Branded digital storytelling',
      'Loyalty building tools'
    ],
    visual: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    stat: '40% Return Rate',
    cta: 'Engage Customers'
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-white relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-soft -skew-x-12 translate-x-1/3 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-heading leading-[1.1] mb-6">
                Powerful features to <span className="text-primary italic">run and grow</span> your restaurant
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
                Everything you need to manage your restaurant digitally — from menu creation to real-time analytics.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="btn-primary w-full sm:w-auto h-14 px-10 text-lg shadow-lg shadow-primary/20">
                  See How It Works
                </button>
                <button className="btn-secondary w-full sm:w-auto h-14 px-10 text-lg">
                  View Pricing
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0"
            >
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-accent overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bbbda5012375?auto=format&fit=crop&q=80&w=1200" 
                      alt="Dashboard Preview" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                          <Play size={24} className="text-primary fill-current ml-1" />
                       </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white border-t border-accent grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-2 w-full bg-slate-100 rounded" />
                    ))}
                  </div>
                </div>
                {/* Floating UI Elements */}
                <div className="absolute -top-6 -left-6 bg-white shadow-xl border border-accent rounded-xl p-4 flex items-center space-x-3">
                   <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                      <Zap size={20} />
                   </div>
                   <span className="font-bold text-sm">New Order #420</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white shadow-xl border border-accent rounded-xl p-4 flex items-center space-x-3">
                   <div className="p-2 bg-blue-100 text-primary rounded-lg">
                      <PieChart size={20} />
                   </div>
                   <span className="font-bold text-sm">+24% Revenue</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white border-y border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-accent hover:border-primary/20 hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2">{f.title}</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">{f.benefit}</p>
                <div className="h-1 w-12 bg-accent group-hover:w-24 group-hover:bg-primary transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      {detailedFeatures.map((f, i) => (
        <section key={f.id} className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-bg-soft'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-heading mb-6">{f.title}</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {f.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {f.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-text-heading font-medium">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center space-x-2 text-primary font-bold hover:translate-x-2 transition-transform cursor-pointer">
                  <span>{f.cta}</span>
                  <ArrowRight size={18} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-accent aspect-[4/3] relative group bg-white p-2">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-slate-50 border-b border-accent flex items-center px-4 space-x-1.5 z-20">
                     <div className="w-2 h-2 rounded-full bg-red-400" />
                     <div className="w-2 h-2 rounded-full bg-yellow-400" />
                     <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <img 
                    src={f.visual} 
                    alt={f.title} 
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000 mt-4" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 text-white z-20">
                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-70">Impact Insight</p>
                     <p className="text-3xl font-display font-bold">{f.stat}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mid-page conversion hook */}
            {(i + 1) % 2 === 0 && i !== detailedFeatures.length - 1 && (
              <div className="mt-24 p-12 bg-primary rounded-3xl text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <h3 className="text-3xl font-display font-bold mb-4">Start your transformation today</h3>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">Join the 500+ restaurants scaling with EXZIBO’s unified feature set.</p>
                <button className="h-12 px-8 bg-white text-primary font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                   Book Free Demo
                </button>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Visual Workflow */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-base font-bold text-primary tracking-widest uppercase mb-4">The Workflow</h2>
            <p className="text-4xl font-display font-bold mb-6">How EXZIBO transforms your operations</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: Smartphone, label: '1. Build Menu', detail: 'Online Presence' },
                { icon: ShoppingCart, label: '2. Take Orders', detail: 'Fast Operations' },
                { icon: PieChart, label: '3. Track Data', detail: 'Real-time Intelligence' },
                { icon: TrendingUp, label: '4. Grow Revenue', detail: 'Market Dominance' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-2xl relative group hover:bg-primary hover:text-white transition-all duration-300">
                    <step.icon size={32} />
                    {i < 3 && <ChevronRight className="absolute -right-8 top-1/2 -translate-y-1/2 text-slate-700 hidden lg:block" />}
                  </div>
                  <h4 className="font-bold text-lg mb-1">{step.label}</h4>
                  <p className="text-sm text-slate-500">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             {[
               { icon: TrendingUp, title: 'Increase Orders', desc: 'Boost sales by 40% with mobile checkout.' },
               { icon: LayoutDashboard, title: 'Save Time', desc: 'Automate manual entries & tracking.' },
               { icon: Zap, title: 'Efficiency', desc: 'Manage 3x more orders per staff member.' },
               { icon: BarChart3, title: 'Grow Revenue', desc: 'Focus on your most profitable dishes.' }
             ].map((item, i) => (
               <div key={i} className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-bg-soft rounded-full flex items-center justify-center text-primary">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Why EXZIBO (Advanced Highlights) */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-text-heading">Why EXZIBO is different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { title: 'All-in-one ecosystem', desc: 'No more switching between 5 different apps. Menu, orders, bookings, and team all in one clean tab.' },
               { title: 'Built for restaurants', desc: 'Every feature is fine-tuned for high-pressure kitchen environments and peak hour rushes.' },
               { title: 'Radically easy to use', desc: 'Launch in under 30 minutes. If you can use a smartphone, you can master EXZIBO in a single day.' },
               { title: 'Enterprise scalability', desc: 'Built on infrastructure that scales from a local taco stand to a multi-national restaurant chain.' }
             ].map((p, i) => (
               <div key={i} className="p-8 bg-white rounded-2xl border border-accent flex flex-col space-y-4">
                  <h4 className="text-xl font-bold text-primary flex items-center space-x-2">
                     <ShieldCheck size={20} />
                     <span>{p.title}</span>
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{p.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-display font-bold text-text-heading text-center mb-16 underline decoration-accent underline-offset-[12px]">Feature Deep Dive</h2>
           <div className="space-y-6">
              {[
                { q: 'What features are included in the base plan?', a: 'The base plan includes our high-converting Menu Website Builder and the central Order Management System. This is everything you need to start taking orders today.' },
                { q: 'Is it easy to use for non-tech staff?', a: 'Yes! We spent months testing our UI with actual kitchen staff and managers to ensure every element is where it should be. Onboarding takes less than an hour.' },
                { q: 'Can I manage multiple restaurants?', a: 'Absolutely. Use our branch-switching feature to manage an unlimited number of locations from one main dashboard with consolidated reporting.' },
                { q: 'Do I need technical knowledge to set up?', a: 'None at all. Our drag-and-drop builder handles all the complex code for you. You just focus on uploading your menu and branding.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-accent rounded-2xl hover:bg-slate-50 transition-colors">
                   <h4 className="font-bold text-text-heading mb-4 text-lg">{faq.q}</h4>
                   <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-1/2 h-full border-l-2 border-white/20 skew-x-12 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8">Ready to modernize your restaurant?</h2>
           <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
             Start your journey with EXZIBO today and see how easy managing growth can be.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="h-16 px-12 bg-white text-primary font-bold text-lg rounded-xl hover:bg-slate-50 transition-colors shadow-2xl active:scale-95 w-full sm:w-auto">
                Start My Free Trial
              </button>
              <button className="h-16 px-12 bg-primary border-2 border-white/40 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors active:scale-95 w-full sm:w-auto">
                Book Live Demo
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
