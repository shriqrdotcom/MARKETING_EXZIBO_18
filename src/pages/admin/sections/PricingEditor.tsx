import { Plus, Trash2, Star } from 'lucide-react';
import { CMSData, PricingPlan } from '../../../context/CMSContext';

interface Props {
  data: CMSData;
  onChange: (data: CMSData) => void;
}

export default function PricingEditor({ data, onChange }: Props) {
  const plans = data.pricing;

  const updatePlan = (index: number, field: keyof PricingPlan, value: any) => {
    const updated = plans.map((p, i) => i === index ? { ...p, [field]: value } : p);
    onChange({ ...data, pricing: updated });
  };

  const updateFeature = (planIndex: number, featureIndex: number, value: string) => {
    const updated = plans.map((p, i) => {
      if (i !== planIndex) return p;
      const features = p.features.map((f, fi) => fi === featureIndex ? value : f);
      return { ...p, features };
    });
    onChange({ ...data, pricing: updated });
  };

  const addFeature = (planIndex: number) => {
    const updated = plans.map((p, i) => {
      if (i !== planIndex) return p;
      return { ...p, features: [...p.features, ''] };
    });
    onChange({ ...data, pricing: updated });
  };

  const removeFeature = (planIndex: number, featureIndex: number) => {
    const updated = plans.map((p, i) => {
      if (i !== planIndex) return p;
      return { ...p, features: p.features.filter((_, fi) => fi !== featureIndex) };
    });
    onChange({ ...data, pricing: updated });
  };

  const addPlan = () => {
    const newPlan: PricingPlan = {
      id: `plan_${Date.now()}`,
      name: 'New Plan',
      price: 0,
      description: '',
      features: [],
      cta: 'Choose Plan',
      highlight: false,
    };
    onChange({ ...data, pricing: [...plans, newPlan] });
  };

  const removePlan = (index: number) => {
    onChange({ ...data, pricing: plans.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black mb-1">Pricing Plans</h2>
          <p className="text-sm text-slate-400">Edit pricing plans, features, and CTAs.</p>
        </div>
        <button
          onClick={addPlan}
          className="flex items-center space-x-2 h-10 px-4 bg-black text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all active:scale-95"
        >
          <Plus size={15} />
          <span>Add Plan</span>
        </button>
      </div>

      <div className="space-y-6">
        {plans.map((plan, pi) => (
          <div key={plan.id} className={`border-2 rounded-xl p-5 ${plan.highlight ? 'border-black bg-slate-50' : 'border-slate-200 bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-black">{plan.name || 'Unnamed Plan'}</span>
                {plan.highlight && (
                  <span className="flex items-center space-x-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    <Star size={10} fill="currentColor" />
                    <span>Most Popular</span>
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <label className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={plan.highlight}
                    onChange={e => updatePlan(pi, 'highlight', e.target.checked)}
                    className="rounded"
                  />
                  <span>Most Popular</span>
                </label>
                <button onClick={() => removePlan(pi)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-black mb-1.5">Plan Name</label>
                <input
                  type="text"
                  value={plan.name}
                  onChange={e => updatePlan(pi, 'name', e.target.value)}
                  className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-black mb-1.5">Price (₹/month)</label>
                <input
                  type="number"
                  value={plan.price}
                  onChange={e => updatePlan(pi, 'price', Number(e.target.value))}
                  className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-black mb-1.5">CTA Button Text</label>
                <input
                  type="text"
                  value={plan.cta}
                  onChange={e => updatePlan(pi, 'cta', e.target.value)}
                  className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-black mb-1.5">Description</label>
              <input
                type="text"
                value={plan.description}
                onChange={e => updatePlan(pi, 'description', e.target.value)}
                className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-black">Features List</label>
                <button
                  onClick={() => addFeature(pi)}
                  className="text-xs font-semibold text-black border border-slate-200 rounded-lg px-2 py-1 hover:bg-slate-50 transition-colors flex items-center space-x-1"
                >
                  <Plus size={11} />
                  <span>Add</span>
                </button>
              </div>
              <div className="space-y-2">
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={e => updateFeature(pi, fi, e.target.value)}
                      placeholder="Feature description"
                      className="flex-1 h-9 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                    <button onClick={() => removeFeature(pi, fi)} className="text-slate-300 hover:text-red-500 transition-colors p-1 shrink-0">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
