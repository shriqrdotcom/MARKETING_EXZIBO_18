import { CMSData } from '../../../context/CMSContext';

interface Props {
  data: CMSData;
  onChange: (data: CMSData) => void;
}

export default function ContactEditor({ data, onChange }: Props) {
  const contact = data.contact;
  const footer = data.footer;

  const updateContact = (field: keyof typeof contact, value: string) => {
    onChange({ ...data, contact: { ...contact, [field]: value } });
  };

  const updateFooter = (field: keyof typeof footer, value: string) => {
    onChange({ ...data, footer: { ...footer, [field]: value } });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-black mb-1">Contact Info</h2>
        <p className="text-sm text-slate-400">Update contact details shown on the contact page and footer.</p>
      </div>

      <div>
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">Contact Page</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Email" value={contact.email} onChange={v => updateContact('email', v)} placeholder="hello@exzibo.com" type="email" />
          <Field label="Phone" value={contact.phone} onChange={v => updateContact('phone', v)} placeholder="+1 (555) 000-0000" />
          <Field label="Location" value={contact.location} onChange={v => updateContact('location', v)} placeholder="San Francisco, CA" />
          <Field label="Business Hours" value={contact.hours} onChange={v => updateContact('hours', v)} placeholder="Mon–Sat, 9am–7pm" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">Footer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Field label="Tagline" value={footer.tagline} onChange={v => updateFooter('tagline', v)} placeholder="The all-in-one platform..." />
          </div>
          <Field label="Email" value={footer.email} onChange={v => updateFooter('email', v)} placeholder="hello@exzibo.com" />
          <Field label="Phone" value={footer.phone} onChange={v => updateFooter('phone', v)} placeholder="+1 (555) 000-0000" />
          <Field label="Location" value={footer.location} onChange={v => updateFooter('location', v)} placeholder="San Francisco, CA" />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-black mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 px-4 border-2 border-slate-200 rounded-xl text-sm text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors"
      />
    </div>
  );
}
