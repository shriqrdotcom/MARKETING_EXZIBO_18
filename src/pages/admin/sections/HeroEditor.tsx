import { CMSData } from '../../../context/CMSContext';

interface Props {
  data: CMSData;
  onChange: (data: CMSData) => void;
}

export default function HeroEditor({ data, onChange }: Props) {
  const hero = data.hero;

  const update = (field: keyof typeof hero, value: string) => {
    onChange({ ...data, hero: { ...hero, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-black mb-1">Hero Section</h2>
        <p className="text-sm text-slate-400">Edit the main hero content shown on the homepage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Badge Text" value={hero.badge} onChange={v => update('badge', v)} placeholder="Version 2.0 is now live" />
        <Field label="Title (before highlight)" value={hero.title} onChange={v => update('title', v)} placeholder="All-in-one platform to grow your" />
        <Field label="Title Highlight Word" value={hero.titleHighlight} onChange={v => update('titleHighlight', v)} placeholder="restaurant" />
        <Field label="Primary Button Text" value={hero.primaryButtonText} onChange={v => update('primaryButtonText', v)} placeholder="Explore Platform" />
        <Field label="Secondary Button Text" value={hero.secondaryButtonText} onChange={v => update('secondaryButtonText', v)} placeholder="View Features" />
        <Field label="Trust Item 1" value={hero.trustItem1} onChange={v => update('trustItem1', v)} placeholder="No credit card required" />
        <Field label="Trust Item 2" value={hero.trustItem2} onChange={v => update('trustItem2', v)} placeholder="14-day free trial" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-black mb-2">Subtitle</label>
        <textarea
          value={hero.subtitle}
          onChange={e => update('subtitle', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm text-black focus:outline-none focus:border-black transition-colors resize-none"
          placeholder="Create your menu website..."
        />
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-black mb-1.5">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 px-4 border-2 border-slate-200 rounded-xl text-sm text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors"
      />
    </div>
  );
}
