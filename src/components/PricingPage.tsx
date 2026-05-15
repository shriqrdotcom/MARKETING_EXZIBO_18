import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Wallet,
  Calendar,
  PauseCircle,
  Headphones,
  Sparkles,
  ArrowRight,
  Rocket,
  BarChart3,
  Briefcase,
  TrendingUp,
  User,
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const PLAN_ICONS: Record<string, { icon: React.ElementType; bg: string; color: string }> = {
  starter:  { icon: Rocket,     bg: 'bg-violet-100',  color: 'text-violet-500' },
  growth:   { icon: BarChart3,  bg: 'bg-emerald-100', color: 'text-emerald-500' },
  business: { icon: Briefcase,  bg: 'bg-violet-600',  color: 'text-white' },
  scale:    { icon: TrendingUp, bg: 'bg-sky-100',     color: 'text-sky-500' },
};

const CUSTOM_PLAN = {
  id: 'custom',
  name: 'Custom',
  description: 'Tailored solutions for large businesses and enterprises.',
  features: ['Everything in Scale', 'Custom Integrations', 'Dedicated Support', 'SLA & Onboarding', 'Tailored Solutions'],
  cta: 'Contact Us',
};

function PricingSkeleton() {
  return (
    <div className="bg-[#f8f8fc] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 animate-pulse">
        <div className="h-6 w-48 bg-slate-200 rounded-full mx-auto mb-8" />
        <div className="h-16 w-3/4 bg-slate-200 rounded-xl mx-auto mb-4" />
        <div className="h-5 w-80 bg-slate-100 rounded mx-auto mb-12" />
        <div className="h-14 w-64 bg-white rounded-2xl mx-auto" />
      </div>
    </div>
  );
}

export default function PricingPage() {
  const { data, loading } = useCMS();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  if (loading) return <PricingSkeleton />;

  const getDisplayPrice = (monthlyPrice: number) =>
    billingCycle === 'yearly' ? Math.round(monthlyPrice * 0.8) : monthlyPrice;

  const starter  = data.pricing.find(p => p.id === 'starter');
  const growth   = data.pricing.find(p => p.id === 'growth');
  const business = data.pricing.find(p => p.id === 'business');
  const scale    = data.pricing.find(p => p.id === 'scale');

  return (
    <div className="bg-[#f8f8fc] min-h-screen pt-32 pb-20 font-sans">

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-semibold mb-8">
          <Sparkles size={14} />
          <span>Flexible plans for every restaurant</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
          Choose the perfect plan<br />
          to <span className="text-violet-500">grow your restaurant</span>
        </h1>

        <p className="text-base text-slate-500 mb-10 max-w-xl mx-auto">
          Simple, transparent pricing that scales with your business.
        </p>

        <div className="inline-flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              billingCycle === 'yearly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Yearly
            <span className="text-[11px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-md">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr_1fr] gap-5 items-start">

          {/* Column 1: Starter + Growth stacked */}
          <div className="flex flex-col gap-5">
            {starter && <SmallPlanCard plan={starter} billingCycle={billingCycle} getDisplayPrice={getDisplayPrice} />}
            {growth  && <SmallPlanCard plan={growth}  billingCycle={billingCycle} getDisplayPrice={getDisplayPrice} highlight />}
          </div>

          {/* Column 2: Business (highlighted) */}
          {business && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative bg-white rounded-2xl border-2 border-violet-500 shadow-xl shadow-violet-100 p-7 flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-amber-200 whitespace-nowrap">
                <span className="text-amber-500">★</span> Most Popular
              </div>

              <div className="flex items-start justify-between mb-4 mt-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{business.name}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{business.description}</p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center shrink-0 ml-3">
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>

              <div className="mb-7">
                <span className="text-4xl font-bold text-slate-900">
                  ₹{getDisplayPrice(business.price).toLocaleString('en-IN')}
                </span>
                <span className="text-slate-400 text-sm ml-2">/ month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {business.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} className="text-violet-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-colors mt-auto">
                {business.cta}
              </button>
            </motion.div>
          )}

          {/* Column 3: Scale */}
          {scale && <LargePlanCard plan={scale} billingCycle={billingCycle} getDisplayPrice={getDisplayPrice} />}

          {/* Column 4: Custom (hardcoded) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Custom</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{CUSTOM_PLAN.description}</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 ml-3">
                <User size={20} className="text-pink-400" />
              </div>
            </div>

            <div className="mb-7">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
              <span className="text-slate-400 text-sm ml-2">/ month</span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {CUSTOM_PLAN.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} className="text-violet-600" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-xl border-2 border-violet-500 text-violet-600 hover:bg-violet-50 font-bold text-sm transition-colors mt-auto">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <TrustItem icon={Wallet}      title="No Hidden Charges" desc="Transparent pricing. What you see is what you pay." />
          <TrustItem icon={Calendar}    title="Easy Upgrades"     desc="Upgrade or downgrade your plan anytime." />
          <TrustItem icon={PauseCircle} title="Cancel Anytime"    desc="No lock-ins. Cancel your subscription anytime." />
          <TrustItem icon={Headphones}  title="24/7 Support"      desc="We're here to help you grow, always." />
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            All plans include GST. Need a custom solution?{' '}
            <a href="#" className="text-violet-600 font-semibold hover:underline inline-flex items-center gap-1">
              Let's talk <ArrowRight size={14} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function SmallPlanCard({
  plan,
  billingCycle,
  getDisplayPrice,
  highlight = false,
}: {
  plan: { id: string; name: string; description: string; price: number; cta: string };
  billingCycle: string;
  getDisplayPrice: (p: number) => number;
  highlight?: boolean;
}) {
  const meta = PLAN_ICONS[plan.id] ?? { icon: Rocket, bg: 'bg-violet-100', color: 'text-violet-500' };
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{plan.description}</p>
        </div>
        <div className={`w-10 h-10 rounded-xl ${meta.bg} flex items-center justify-center shrink-0 ml-2`}>
          <Icon size={18} className={meta.color} />
        </div>
      </div>

      <div className="mb-5">
        <span className="text-3xl font-bold text-slate-900">
          ₹{getDisplayPrice(plan.price).toLocaleString('en-IN')}
        </span>
        <span className="text-slate-400 text-xs ml-1">/ month</span>
      </div>

      <button
        className={`w-full py-3 rounded-xl font-bold text-sm transition-colors mt-auto ${
          highlight
            ? 'bg-violet-600 hover:bg-violet-700 text-white'
            : 'border-2 border-violet-500 text-violet-600 hover:bg-violet-50'
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}

function LargePlanCard({
  plan,
  billingCycle,
  getDisplayPrice,
}: {
  plan: { id: string; name: string; description: string; price: number; features: string[]; cta: string };
  billingCycle: string;
  getDisplayPrice: (p: number) => number;
}) {
  const meta = PLAN_ICONS[plan.id] ?? { icon: TrendingUp, bg: 'bg-sky-100', color: 'text-sky-500' };
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
          <p className="text-sm text-slate-500 mt-1 leading-relaxed">{plan.description}</p>
        </div>
        <div className={`w-11 h-11 rounded-xl ${meta.bg} flex items-center justify-center shrink-0 ml-3`}>
          <Icon size={20} className={meta.color} />
        </div>
      </div>

      <div className="mb-7">
        <span className="text-4xl font-bold text-slate-900">
          ₹{getDisplayPrice(plan.price).toLocaleString('en-IN')}
        </span>
        <span className="text-slate-400 text-sm ml-2">/ month</span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
            <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
              <Check size={12} strokeWidth={3} className="text-violet-600" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button className="w-full py-3.5 rounded-xl border-2 border-violet-500 text-violet-600 hover:bg-violet-50 font-bold text-sm transition-colors mt-auto">
        {plan.cta}
      </button>
    </motion.div>
  );
}

function TrustItem({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-violet-500 shrink-0">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm mb-0.5">{title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
