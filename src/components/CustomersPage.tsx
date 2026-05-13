import { motion } from 'motion/react';
import { 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Quote, 
  Play, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Award,
  Globe,
  Smartphone
} from 'lucide-react';

const metrics = [
  { icon: Globe, value: '50+', label: 'Active Restaurants', color: 'text-blue-600' },
  { icon: ShoppingCart, value: '10k+', label: 'Orders Processed', color: 'text-indigo-600' },
  { icon: TrendingUp, value: '35%', label: 'Avg. Revenue Increase', color: 'text-green-600' },
  { icon: Users, value: '100k+', label: 'Happy Diners', color: 'text-violet-600' },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    restaurant: 'Bistro 42',
    quote: 'EXZIBO helped us increase online orders by 40%. The dashboard is so easy to use that even my non-tech staff mastered it in a day.',
    image: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'Marcus Chen',
    restaurant: 'Golden Dragon',
    quote: 'The real-time order tracking eliminated kitchen confusion. We no longer miss orders during peak hours.',
    image: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    name: 'Elena Rodriguez',
    restaurant: 'Taco Haven',
    quote: 'The table booking system is a game changer. We’ve seen a 25% increase in peak hour bookings since launch.',
    image: 'https://picsum.photos/seed/elena/100/100',
  },
  {
    name: 'David Wilson',
    restaurant: 'Urban Dine',
    quote: 'Switching from multiple tools to EXZIBO saved us ₹15,000 monthly in subscription fees alone.',
    image: 'https://picsum.photos/seed/david/100/100',
  },
  {
    name: 'Priya Sharma',
    restaurant: 'Curry Leaf',
    quote: 'Our customers love the mobile menu. It’s fast, clear, and looks great on every device.',
    image: 'https://picsum.photos/seed/priya/100/100',
  },
  {
    name: 'Tom Baker',
    restaurant: 'The Crusty Loft',
    quote: 'The analytics helped us identify that our combos were our best sellers. We optimized and saw instant results.',
    image: 'https://picsum.photos/seed/tom/100/100',
  },
];

const caseStudies = [
  {
    restaurant: 'Spice Garden (Multi-Outlet)',
    problem: 'Managing 5 locations with different systems lead to massive inventory and order errors.',
    solution: 'Unified all branches under EXZIBO’s Multi-location dashboard with role-based permissions.',
    result: '35% revenue growth across all outlets and 60% reduction in order processing time.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    restaurant: 'The Cloud Box',
    problem: 'Dependence on high-commission aggregators was eating 30% of every order’s profit.',
    solution: 'Launched a branded menu website with direct QR and WhatsApp ordering via EXZIBO.',
    result: 'Converted 50% of aggregator customers to direct orders. Saved ₹45,000 in monthly fees.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function CustomersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Award size={14} className="fill-current" />
              <span>Industry Leader in Guest Experience</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-heading leading-tight mb-6">
              Trusted by restaurants that are <span className="text-primary italic">growing faster</span>
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
              See how EXZIBO helps restaurants increase orders, improve operations, and scale their business with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary w-full sm:w-auto h-16 px-12 text-lg shadow-xl shadow-primary/20">
                See Case Studies
              </button>
              <button className="btn-secondary w-full sm:w-auto h-16 px-12 text-lg">
                View Results
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 bg-white border-b border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center group">
                 <div className={`mx-auto w-12 h-12 ${m.color} bg-slate-50 border border-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <m.icon size={24} />
                 </div>
                 <p className="text-4xl font-display font-bold text-text-heading mb-1">{m.value}</p>
                 <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-3xl lg:text-5xl font-display font-bold text-text-heading mb-6 tracking-tight italic">What our partners say</h2>
             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-accent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative group"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg z-10">
                   <Quote size={20} fill="currentColor" />
                </div>
                <div className="flex space-x-1 mb-6">
                   {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-text-heading font-medium italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-4 pt-6 border-t border-accent">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-text-heading text-sm">{t.name}</h4>
                    <p className="text-xs text-text-secondary">{t.restaurant}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-text-heading mb-6">Proven Success Stories</h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">Deep dives into how we solved real operational challenges for our partners.</p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-[2.5rem] border border-accent overflow-hidden shadow-xl lg:flex items-stretch ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative min-h-[300px]">
                   <img 
                     src={cs.image} 
                     alt={cs.restaurant} 
                     className="absolute inset-0 w-full h-full object-cover"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                   <div className="inline-flex items-center space-x-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>Case Study: {cs.restaurant}</span>
                   </div>
                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-text-heading text-lg mb-2">The Challenge</h4>
                         <p className="text-text-secondary leading-relaxed">{cs.problem}</p>
                      </div>
                      <div>
                         <h4 className="font-bold text-text-heading text-lg mb-2">The Solution</h4>
                         <p className="text-text-secondary leading-relaxed">{cs.solution}</p>
                      </div>
                      <div className="pt-6 border-t border-accent flex items-center justify-between">
                         <div>
                            <p className="text-xs font-bold uppercase text-text-secondary tracking-widest mb-1">Key Result</p>
                            <p className="text-3xl font-display font-bold text-primary">{cs.result}</p>
                         </div>
                         <button className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group hover:bg-primary hover:text-white transition-all">
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-text-heading">Designed for your unique dining story</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
               { icon: Zap, type: 'Small Restaurants', benefit: 'Digitize your operations in minutes with zero upfront costs.' },
               { icon: Smartphone, type: 'Cloud Kitchens', benefit: 'Optimized for lean delivery operations and high-volume cycles.' },
               { icon: Globe, type: 'Restaurant Chains', benefit: 'Powerful tools to sync dozens of outlets with branch control.' }
             ].map((u, i) => (
               <div key={i} className="p-10 border border-accent rounded-3xl hover:border-primary/30 hover:shadow-xl transition-all group cursor-default">
                  <div className="mx-auto w-16 h-16 bg-bg-soft rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                     <u.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-text-heading mb-4">{u.type}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{u.benefit}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Visual Bar / Logos */}
      <section className="py-12 bg-white border-y border-accent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0 pointer-events-none">
             {['Bistro 42', 'Taco Haven', 'Urban Dine', 'Curry Leaf', 'Crusty Loft'].map(logo => (
               <span key={logo} className="text-2xl font-display font-black tracking-tighter uppercase">{logo}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border border-accent">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Video Preview" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex flex-col items-center justify-center text-white text-center p-8">
                 <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer shadow-2xl mb-6 group-hover:bg-blue-600 transition-colors"
                 >
                    <Play size={32} className="fill-current ml-1" />
                 </motion.div>
                 <h3 className="text-2xl font-display font-bold mb-2">Hear from our community</h3>
                 <p className="text-white/80">See how real restaurateurs transformed their guest experience with EXZIBO.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Why Customers Choose EXZIBO */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-text-heading">Why resturants choose EXZIBO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: 'Radical Simplicity', desc: 'No onboarding fees. No training required. Start in under 30 minutes.' },
               { title: 'All-in-One Power', desc: 'One subscription replaces 5 tools. Save money and eliminate sync errors.' },
               { title: 'Real Results', desc: 'Join a community that sees an average of 35% revenue growth in 90 days.' },
               { title: 'Built to Scale', desc: 'Scales from one small stand to a nationwide chain without breaking a sweat.' },
               { icon: ShieldCheck, title: 'Reliable Support', desc: 'Dedicated success managers available 24/7 to help you grow.' },
               { icon: Zap, title: 'Instant Activation', desc: 'Everything is cloud-based. Update your menu and see it live instantly.' }
             ].map((p, i) => (
               <div key={i} className="p-8 bg-white rounded-2xl border border-accent flex flex-col space-y-4 hover:border-primary/30 transition-colors">
                  <h4 className="text-xl font-bold text-text-heading flex items-center space-x-3">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                     <span>{p.title}</span>
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Trust-focused */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-16 underline decoration-accent underline-offset-8">Community Questions</h2>
           <div className="space-y-6">
              {[
                { q: 'Is EXZIBO suitable for small restaurants?', a: 'Absolutely. We started with small businesses in mind. Our platform allows you to digitize your menu for a low cost, giving you tools that were previously only available to large chains.' },
                { q: 'Can I manage multiple locations?', a: 'Yes. Our Premium plan specifically caters to multi-outlet brands with branch permissions and consolidated analytics across all sites.' },
                { q: 'How quickly can I start?', a: 'Most of our partners go live on the same day. All you need is your logo and menu items – our builder takes care of the rest.' },
                { q: 'Do you provide on-site support?', a: 'We provide 24/7 digital support. For enterprise clients, we offer on-site training and personalized onboarding plans.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-accent rounded-3xl hover:bg-slate-50 transition-all">
                   <h4 className="font-bold text-text-heading mb-4 text-lg">{faq.q}</h4>
                   <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-4 border-white/20 rounded-full dashed opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8">Join the restaurants growing with <span className="text-primary italic">EXZIBO</span></h2>
           <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
             Start your 14-day free trial today. No credit card required. No strings attached.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="h-16 px-12 bg-primary text-white font-bold text-lg rounded-xl hover:brightness-110 shadow-2xl active:scale-95 w-full sm:w-auto">
                Start Free Trial
              </button>
              <button className="h-16 px-12 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all active:scale-95 w-full sm:w-auto">
                Book Live Demo
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
