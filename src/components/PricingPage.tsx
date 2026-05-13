import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, HelpCircle, ArrowRight, Zap, ShieldCheck, TrendingUp, Users, Clock } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  color: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: { monthly: 2499, yearly: 1999 },
    description: 'Perfect for small restaurants and food stalls starting their digital journey.',
    features: [
      'Digital Menu Website',
      'Basic Order Dashboard',
      'QR Code Support',
      'Email Support',
      '1 Admin User',
      'Up to 50 items'
    ],
    cta: 'Get Started',
    color: 'bg-slate-50',
  },
  {
    name: 'Pro',
    price: { monthly: 6499, yearly: 4999 },
    description: 'The complete toolkit for growing restaurants with high order volumes.',
    features: [
      'Everything in Basic',
      'Full Online Ordering System',
      'Table Booking Engine',
      'Advanced Sales Analytics',
      'Up to 5 Admin Users',
      'WhatsApp Notifications'
    ],
    cta: 'Start Free Demo',
    highlight: true,
    color: 'bg-primary/5',
  },
  {
    name: 'Premium',
    price: { monthly: 12499, yearly: 9999 },
    description: 'Scalable solutions for multi-outlet brands and enterprise-level kitchens.',
    features: [
      'Everything in Pro',
      'Multi-restaurant Support',
      'Advanced Team Roles',
      'Priority 24/7 Support',
      'Custom Branding',
      'API Access'
    ],
    cta: 'Contact Sales',
    color: 'bg-slate-50',
  }
];

const comparisons = [
  { feature: 'Menu Website Builder', basic: true, pro: true, premium: true },
  { feature: 'Online Ordering', basic: 'Limited', pro: true, premium: true },
  { feature: 'Table Booking', basic: false, pro: true, premium: true },
  { feature: 'Advanced Analytics', basic: false, pro: true, premium: true },
  { feature: 'Team Members', basic: '1 User', pro: '5 Users', premium: 'Unlimited' },
  { feature: 'Multi-location', basic: false, pro: false, premium: true },
  { feature: 'Custom Branding', basic: false, pro: false, premium: true },
  { feature: 'Priority Support', basic: false, pro: false, premium: true },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-text-heading mb-6 tracking-tight"
          >
            Simple, transparent <span className="text-primary italic">pricing</span> for every restaurant
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
          >
            Choose the plan that fits your business and start growing with EXZIBO. No hidden fees. No complicated contracts.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="btn-primary h-14 px-10 text-lg shadow-lg shadow-primary/20">Start Free Trial</button>
            <button className="btn-secondary h-14 px-10 text-lg">Compare Plans</button>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-text-heading' : 'text-text-secondary'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-16 h-8 bg-slate-200 rounded-full p-1 relative flex items-center transition-colors hover:bg-slate-300"
            >
               <div className={`w-6 h-6 bg-primary rounded-full shadow-md transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-text-heading' : 'text-text-secondary'}`}>Yearly</span>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {plans.map((plan, i) => (
               <motion.div
                 key={plan.name}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`relative h-full flex flex-col p-8 rounded-[2rem] border-2 transition-all duration-300 ${plan.highlight ? 'border-primary shadow-2xl shadow-primary/10 bg-white' : 'border-accent bg-white hover:border-primary/20'}`}
               >
                 {plan.highlight && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                     Most Popular
                   </div>
                 )}
                 <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold text-text-heading mb-2">{plan.name}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed h-12">{plan.description}</p>
                 </div>
                 <div className="mb-10 flex items-baseline">
                    <span className="text-5xl font-display font-bold text-text-heading">₹</span>
                    <span className="text-6xl font-display font-bold text-text-heading">
                      {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-text-secondary font-medium ml-2">/ month</span>
                 </div>
                 <div className="flex-grow">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-6 flex items-center">
                       <span>Features included</span>
                       <div className="flex-grow h-px bg-accent ml-4" />
                    </h4>
                    <ul className="space-y-4 mb-10">
                       {plan.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start space-x-3 text-sm text-text-heading font-medium">
                            <Check size={18} className="text-primary shrink-0" />
                            <span>{feature}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <button className={`w-full h-14 rounded-xl font-bold transition-all active:scale-95 ${plan.highlight ? 'bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20' : 'bg-slate-50 text-text-heading border border-accent hover:bg-slate-100'}`}>
                    {plan.cta}
                 </button>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-16">Compare features</h2>
           <div className="overflow-x-auto bg-white rounded-2xl border border-accent">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-accent bg-slate-50/50">
                       <th className="px-6 py-6 font-bold text-sm text-text-secondary uppercase tracking-widest">Features</th>
                       <th className="px-6 py-6 font-bold text-sm text-text-heading">Basic</th>
                       <th className="px-6 py-6 font-bold text-sm text-primary">Pro</th>
                       <th className="px-6 py-6 font-bold text-sm text-text-heading">Premium</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-accent">
                    {comparisons.map((item, i) => (
                       <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-5 font-medium text-text-heading text-sm">{item.feature}</td>
                          <td className="px-6 py-5 text-sm">
                             {typeof item.basic === 'boolean' ? (item.basic ? <Check className="text-green-500" /> : <X className="text-slate-300" />) : item.basic}
                          </td>
                          <td className="px-6 py-5 text-sm bg-primary/5">
                             {typeof item.pro === 'boolean' ? (item.pro ? <Check className="text-primary" /> : <X className="text-slate-300" />) : item.pro}
                          </td>
                          <td className="px-6 py-5 text-sm">
                             {typeof item.premium === 'boolean' ? (item.premium ? <Check className="text-green-500" /> : <X className="text-slate-300" />) : item.premium}
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* Value Explanation Section */}
      <section className="py-24 bg-white border-y border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-text-heading mb-8">Why EXZIBO is worth it</h2>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                Replace multiple subscriptions with one unified ecosystem. EXZIBO doesn't just save you money on tools — it saves you hours of manual work every week.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { icon: TrendingUp, title: 'Increase Revenue', desc: '40% uplift in average order value through combos.' },
                   { icon: Clock, title: 'Save Time', desc: 'Reduce manual accounting by up to 10 hours a week.' },
                   { icon: ShieldCheck, title: 'Zero Commission', desc: 'Stop paying hefty fees to delivery aggregators.' },
                   { icon: Users, title: 'Team Sync', desc: 'Keep your kitchen and front-house perfectly aligned.' }
                 ].map((item, i) => (
                   <div key={i} className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-bg-soft flex items-center justify-center text-primary">
                         <item.icon size={20} />
                      </div>
                      <h4 className="font-bold text-text-heading">{item.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
               <h3 className="text-2xl font-display font-bold mb-8 italic">"EXZIBO paid for itself in the first 14 days by eliminating my aggregator fees."</h3>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30" />
                  <div>
                     <p className="font-bold">Jason Miller</p>
                     <p className="text-sm opacity-60">Owner, The Burger Lab</p>
                  </div>
               </div>
               <div className="mt-8 flex space-x-1">
                  {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-1 h-1 rounded-full bg-white opacity-40" />)}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Selection */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-16 underline decoration-accent underline-offset-8">Pricing FAQ</h2>
           <div className="space-y-6">
              {[
                { q: 'Is there a free trial?', a: 'Yes! All plans come with a 14-day free trial. No credit card required to start.' },
                { q: 'Can I cancel anytime?', a: 'Absolutely. We offer monthly flexibility. If you opt for yearly billing, you can cancel at any time, but your access will remain until the end of the period.' },
                { q: 'Are there hidden charges?', a: 'None. We don’t charge setup fees, implementation fees, or maintenance fees. You pay the subscription and nothing else.' },
                { q: 'Can I upgrade later?', a: 'Yes, you can upgrade or downgrade your plan at any time. The difference will be automatically pro-rated.' },
                { q: 'Do you support multiple restaurants?', a: 'Our Premium plan is specifically designed for multi-branch support with a centralized dashboard for all locations.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-accent shadow-sm group hover:border-primary/20 transition-colors">
                   <h4 className="font-bold text-text-heading mb-4 flex items-center space-x-3">
                      <HelpCircle size={20} className="text-primary opacity-50" />
                      <span>{faq.q}</span>
                   </h4>
                   <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Zap size={48} className="text-primary mx-auto mb-8 animate-pulse" />
           <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-text-heading mb-8">Start growing your restaurant today</h2>
           <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
             Join hundreds of restaurateurs who fixed their operations with EXZIBO. Your digital growth starts here.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="btn-primary h-16 px-12 text-lg w-full sm:w-auto">Get Started Now</button>
              <button className="btn-secondary h-16 px-12 text-lg w-full sm:w-auto">Book Demo</button>
           </div>
           <p className="mt-8 text-sm text-text-secondary">No credit card required • Cancel anytime • 14-day free trial</p>
        </div>
      </section>
    </div>
  );
}
