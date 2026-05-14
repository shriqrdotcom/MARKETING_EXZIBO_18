import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Rocket, 
  TrendingUp, 
  Briefcase, 
  BarChart3, 
  UserCircle,
  Wallet,
  Calendar,
  PauseCircle,
  Headphones,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number; // monthly
  description: string;
  features?: string[];
  cta: string;
  highlight?: boolean;
  type: 'filled' | 'outlined';
  icon: any;
  iconColor: string;
  iconBg: string;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getDisplayPrice = (monthlyPrice: number) => {
    if (billingCycle === 'yearly') {
      return monthlyPrice * 10; // 2 months free as per "Save 20%" or simple multiply by 10
    }
    return monthlyPrice;
  };

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: 999,
      description: 'Perfect for getting your restaurant online and managing basics.',
      cta: 'Choose Starter',
      type: 'outlined',
      icon: Rocket,
      iconColor: 'text-[#6C47FF]',
      iconBg: 'bg-[#6C47FF]/10',
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 1999,
      description: 'Everything you need to attract customers and grow orders.',
      cta: 'Choose Growth',
      type: 'filled',
      icon: TrendingUp,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
    },
    {
      id: 'business',
      name: 'Business',
      price: 2999,
      description: 'Advanced tools to streamline operations and maximize revenue.',
      features: [
        'Everything in Growth',
        'Advanced Analytics',
        'Customer Loyalty Program',
        'Marketing Automation',
        'Priority Support'
      ],
      cta: 'Choose Business',
      highlight: true,
      type: 'filled',
      icon: Briefcase,
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-500/10',
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 4999,
      description: 'For multi-outlet restaurants and serious scale.',
      features: [
        'Everything in Business',
        'Multi-outlet Management',
        'Advanced Reports',
        'API Access',
        'Dedicated Account Manager'
      ],
      cta: 'Choose Scale',
      type: 'outlined',
      icon: BarChart3,
      iconColor: 'text-[#6C47FF]',
      iconBg: 'bg-[#6C47FF]/10',
    },
    {
      id: 'custom',
      name: 'Custom',
      price: 0, // Placeholder
      description: 'Tailored solutions for large businesses and enterprises.',
      features: [
        'Everything in Scale',
        'Custom Integrations',
        'Dedicated Support',
        'SLA & Onboarding',
        'Tailored Solutions'
      ],
      cta: 'Contact Us',
      type: 'outlined',
      icon: UserCircle,
      iconColor: 'text-[#6C47FF]',
      iconBg: 'bg-[#6C47FF]/10',
    }
  ];

  return (
    <div className="bg-[#f5f5f7] min-h-screen pt-32 pb-20 font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#6C47FF]/10 text-[#6C47FF] text-sm font-bold mb-8">
          <Sparkles size={14} className="fill-[#6C47FF]" />
          <span>Flexible plans for every restaurant</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
          Choose the perfect plan <br />
          to <span className="bg-gradient-to-r from-[#6C47FF] to-[#a855f7] bg-clip-text text-transparent">grow your restaurant</span>
        </h1>
        
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
          Simple, transparent pricing that scales with your business.
        </p>

        {/* Toggle */}
        <div className="bg-white p-1 rounded-2xl inline-flex items-center shadow-sm border border-slate-200">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white shadow-lg shadow-black/5 text-slate-900' : 'text-slate-400'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-all ${billingCycle === 'yearly' ? 'bg-white shadow-lg shadow-black/5 text-slate-900' : 'text-slate-400'}`}
          >
            <span>Yearly</span>
            <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-md">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* Left Column (Starter & Growth) */}
          <div className="flex flex-col gap-6 lg:w-1/4 shrink-0">
            {plans.slice(0, 2).map((plan) => (
              <PricingCard key={plan.id} plan={plan} displayPrice={getDisplayPrice(plan.price)} billingCycle={billingCycle} />
            ))}
          </div>

          {/* Business (Center Highlight) */}
          <div className="flex-grow lg:w-1/4">
            <PricingCard plan={plans[2]} displayPrice={getDisplayPrice(plans[2].price)} billingCycle={billingCycle} />
          </div>

          {/* Scale */}
          <div className="flex-grow lg:w-1/4">
            <PricingCard plan={plans[3]} displayPrice={getDisplayPrice(plans[3].price)} billingCycle={billingCycle} />
          </div>

          {/* Custom */}
          <div className="flex-grow lg:w-1/4">
            <PricingCard plan={plans[4]} displayPrice={getDisplayPrice(plans[4].price)} billingCycle={billingCycle} />
          </div>

        </div>
      </div>

      {/* Trust Items */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white shadow-xl shadow-black/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustItem 
              icon={Wallet} 
              title="No Hidden Charges" 
              desc="Transparent pricing. What you see is what you pay."
            />
            <TrustItem 
              icon={Calendar} 
              title="Easy Upgrades" 
              desc="Upgrade or downgrade your plan anytime."
            />
            <TrustItem 
              icon={PauseCircle} 
              title="Cancel Anytime" 
              desc="No lock-ins. Cancel your subscription anytime."
            />
            <TrustItem 
              icon={Headphones} 
              title="24/7 Support" 
              desc="We're here to help you grow, always."
            />
          </div>
        </div>
        
        {/* Footer line */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 font-medium">
            All plans include GST. Need a custom solution? {' '}
            <a href="#" className="text-[#6C47FF] font-bold hover:underline inline-flex items-center">
              Let's talk <ArrowRight size={16} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ plan, displayPrice, billingCycle }: { plan: PricingPlan, displayPrice: number, billingCycle: 'monthly' | 'yearly' }) {
  return (
    <div className={`relative h-full bg-white rounded-[2rem] p-8 border-2 transition-all flex flex-col ${plan.highlight ? 'border-[#6C47FF] shadow-2xl scale-105 z-10' : 'border-transparent shadow-sm'}`}>
      
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center space-x-1 border border-amber-200">
          <Sparkles size={12} />
          <span>Most Popular</span>
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">{plan.description}</p>
        </div>
        <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center ${plan.iconBg} ${plan.iconColor}`}>
          <plan.icon size={24} />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-3xl sm:text-4xl font-bold text-slate-900">
            {plan.id === 'custom' ? 'Custom' : `₹${displayPrice.toLocaleString()}`}
          </span>
          <span className="text-slate-400 font-medium ml-2">/ {billingCycle}</span>
        </div>
      </div>

      {plan.features && (
        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-3 text-sm font-semibold text-slate-600">
              <div className="w-5 h-5 rounded-full bg-[#6C47FF]/10 flex items-center justify-center text-[#6C47FF] shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <button className={`w-full h-14 rounded-2xl font-bold text-lg transition-all active:scale-95 ${plan.type === 'filled' ? 'bg-[#6C47FF] text-white shadow-lg shadow-[#6C47FF]/25 hover:brightness-110' : 'bg-transparent border-2 border-[#6C47FF] text-[#6C47FF] hover:bg-[#6C47FF]/5'}`}>
        {plan.cta}
      </button>
    </div>
  );
}

function TrustItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 rounded-2xl bg-[#6C47FF]/10 flex items-center justify-center text-[#6C47FF] shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
