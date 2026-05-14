import { Plus, Trash2 } from 'lucide-react';
import { CMSData, Testimonial } from '../../../context/CMSContext';

interface Props {
  data: CMSData;
  onChange: (data: CMSData) => void;
}

export default function TestimonialsEditor({ data, onChange }: Props) {
  const testimonials = data.testimonials;

  const update = (index: number, field: keyof Testimonial, value: string) => {
    const updated = testimonials.map((t, i) => i === index ? { ...t, [field]: value } : t);
    onChange({ ...data, testimonials: updated });
  };

  const add = () => {
    onChange({
      ...data,
      testimonials: [...testimonials, { name: '', restaurant: '', result: '', quote: '', image: '' }],
    });
  };

  const remove = (index: number) => {
    onChange({ ...data, testimonials: testimonials.filter((_, i) => i !== index) });
  };

  const handleImageUpload = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = e => update(index, 'image', e.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black mb-1">Testimonials</h2>
          <p className="text-sm text-slate-400">Manage customer testimonials shown on the homepage.</p>
        </div>
        <button
          onClick={add}
          className="flex items-center space-x-2 h-10 px-4 bg-black text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all active:scale-95"
        >
          <Plus size={15} />
          <span>Add</span>
        </button>
      </div>

      <div className="space-y-5">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Testimonial {i + 1}</span>
              <button onClick={() => remove(i)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="flex items-start space-x-4 mb-4">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-slate-200 overflow-hidden bg-white">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs">Photo</div>
                  )}
                </div>
                <label className="mt-2 block text-center text-xs text-black font-semibold cursor-pointer hover:underline">
                  Upload
                  <input type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && handleImageUpload(i, e.target.files[0])} />
                </label>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">Name</label>
                  <input type="text" value={t.name} onChange={e => update(i, 'name', e.target.value)} placeholder="Sarah Jenkins" className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">Restaurant</label>
                  <input type="text" value={t.restaurant} onChange={e => update(i, 'restaurant', e.target.value)} placeholder="Bistro 42" className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors bg-white" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-black mb-1">Result Badge</label>
                  <input type="text" value={t.result} onChange={e => update(i, 'result', e.target.value)} placeholder="Increased orders by 40%" className="w-full h-10 px-3 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors bg-white" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-black mb-1.5">Quote</label>
              <textarea
                value={t.quote}
                onChange={e => update(i, 'quote', e.target.value)}
                rows={2}
                placeholder="What the customer said..."
                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors resize-none bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
