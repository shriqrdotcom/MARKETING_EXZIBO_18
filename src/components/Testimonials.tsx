import { Star, Quote } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export default function Testimonials() {
  const { data } = useCMS();
  const testimonials = data.testimonials;

  return (
    <section className="py-24 bg-bg-soft" id="customers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-heading mb-6 tracking-tight italic">
            What our partners are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-accent relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Quote size={20} fill="currentColor" />
              </div>
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-text-heading font-medium mb-8 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4 pt-8 border-t border-accent">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-text-heading">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.restaurant}</p>
                  <p className="text-xs font-bold text-primary mt-1 uppercase tracking-tighter">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
