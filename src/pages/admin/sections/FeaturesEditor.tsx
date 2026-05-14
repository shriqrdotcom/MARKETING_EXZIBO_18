import { Plus, Trash2 } from 'lucide-react';
import { CMSData, Feature } from '../../../context/CMSContext';

interface Props {
  data: CMSData;
  onChange: (data: CMSData) => void;
}

export default function FeaturesEditor({ data, onChange }: Props) {
  const features = data.features;

  const update = (index: number, field: keyof Feature, value: string) => {
    const updated = features.map((f, i) => i === index ? { ...f, [field]: value } : f);
    onChange({ ...data, features: updated });
  };

  const add = () => {
    onChange({ ...data, features: [...features, { name: '', description: '' }] });
  };

  const remove = (index: number) => {
    onChange({ ...data, features: features.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black mb-1">Features</h2>
          <p className="text-sm text-slate-400">Manage the features grid shown on the homepage.</p>
        </div>
        <button
          onClick={add}
          className="flex items-center space-x-2 h-10 px-4 bg-black text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all active:scale-95"
        >
          <Plus size={15} />
          <span>Add Feature</span>
        </button>
      </div>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Feature {i + 1}</span>
              <button
                onClick={() => remove(i)}
                className="text-slate-300 hover:text-red-500 transition-colors p-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-black mb-1.5">Name</label>
                <input
                  type="text"
                  value={feature.name}
                  onChange={e => update(i, 'name', e.target.value)}
                  placeholder="Feature name"
                  className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-black mb-1.5">Description</label>
                <input
                  type="text"
                  value={feature.description}
                  onChange={e => update(i, 'description', e.target.value)}
                  placeholder="Short description"
                  className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors bg-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
