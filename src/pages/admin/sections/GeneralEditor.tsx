import { CMSData } from '../../../context/CMSContext';

interface Props {
  data: CMSData;
  onChange: (data: CMSData) => void;
}

export default function GeneralEditor({ data, onChange }: Props) {
  const general = data.general;

  const update = (field: keyof typeof general, value: string) => {
    onChange({ ...data, general: { ...general, [field]: value } });
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = e => update('heroImage', e.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-black mb-1">General Settings</h2>
        <p className="text-sm text-slate-400">Manage global site settings and branding.</p>
      </div>

      <div>
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">Site Identity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-black mb-1.5">Site Name</label>
            <input
              type="text"
              value={general.siteName}
              onChange={e => update('siteName', e.target.value)}
              placeholder="EXZIBO"
              className="w-full h-11 px-4 border-2 border-slate-200 rounded-xl text-sm text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1.5">Site Tagline</label>
            <input
              type="text"
              value={general.siteTagline}
              onChange={e => update('siteTagline', e.target.value)}
              placeholder="Grow Your Restaurant Online"
              className="w-full h-11 px-4 border-2 border-slate-200 rounded-xl text-sm text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">Hero Image</h3>
        <div className="space-y-4">
          {general.heroImage && (
            <div className="relative w-full max-w-md rounded-xl overflow-hidden border-2 border-slate-200">
              <img src={general.heroImage} alt="Hero" className="w-full object-cover max-h-48" />
              <button
                onClick={() => update('heroImage', '')}
                className="absolute top-2 right-2 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
              >
                Remove
              </button>
            </div>
          )}
          <label className="flex items-center justify-center w-full max-w-md h-28 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-black transition-colors group">
            <div className="text-center">
              <div className="text-2xl mb-1">📷</div>
              <p className="text-sm font-semibold text-slate-400 group-hover:text-black transition-colors">
                {general.heroImage ? 'Replace image' : 'Upload hero image'}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">PNG, JPG, WebP</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && handleImageUpload(e.target.files[0])} />
          </label>
        </div>
      </div>
    </div>
  );
}
