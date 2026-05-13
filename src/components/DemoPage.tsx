import { motion } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  Globe,
  Phone,
  Layout,
  Smartphone,
  TrendingUp,
  Award
} from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="bg-white">
      {/* Hero + Demo Form Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0147AD_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content: Hero Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-heading leading-tight mb-8">
                See how EXZIBO can <span className="text-primary italic">grow</span> your restaurant
              </h1>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Book a free demo and discover how to manage orders, menus, and analytics in one unified, high-conversion platform.
              </p>

              {/* What you'll see in demo */}
              <div className="space-y-6 mb-12">
                 <h4 className="text-sm font-black uppercase tracking-widest text-text-secondary mb-4 opacity-50">What you'll see in the demo</h4>
                 {[
                   { icon: Layout, text: 'How to create your menu website in minutes' },
                   { icon: Smartphone, text: 'Customizing your mobile ordering experience' },
                   { icon: TrendingUp, text: 'How analytics helps you optimize your inventory' },
                   { icon: Award, text: 'Proven strategies to grow your direct revenue' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <item.icon size={18} />
                      </div>
                      <span className="font-medium text-text-heading">{item.text}</span>
                   </div>
                 ))}
              </div>

              {/* Process Explanation */}
              <div className="pt-12 border-t border-accent grid grid-cols-3 gap-4">
                 {[
                   { step: '1', title: 'Fill form' },
                   { step: '2', title: 'Schedule' },
                   { step: '3', title: 'Live Tour' }
                 ].map((p, i) => (
                   <div key={i} className="text-center">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-text-secondary mx-auto mb-2 tracking-tighter">
                        0{p.step}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-heading whitespace-nowrap">{p.title}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Right Form: Core Lead Capture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-primary/10 border border-slate-100 relative">
                {/* Urgent/Trust Signals */}
                <div className="absolute -top-4 right-8 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Limited demo slots available
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Full Name</label>
                    <input type="text" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Sarah Jenkins" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Restaurant Name</label>
                    <input type="text" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Bistro 42" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Phone Number</label>
                      <input type="tel" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Email Address</label>
                      <input type="email" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="sarah@bistro42.in" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Number of Locations</label>
                      <select required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all cursor-pointer">
                        <option value="">Select...</option>
                        <option value="1">1</option>
                        <option value="2-5">2 – 5</option>
                        <option value="5+">5+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Type of Business</label>
                      <select required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all cursor-pointer">
                        <option value="">Select...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="cloud-kitchen">Cloud Kitchen</option>
                        <option value="cafe">Cafe / QSR</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Monthly Orders</label>
                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all cursor-pointer">
                      <option value="0-100">0 – 100</option>
                      <option value="100-500">100 – 500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Message (Optional)</label>
                    <textarea rows={2} className="w-full p-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-slate-400 text-sm" placeholder="Any specific requirements?" />
                  </div>

                  <button className="w-full h-16 bg-primary text-white font-bold text-lg rounded-2xl hover:brightness-110 shadow-2xl shadow-primary/20 active:scale-95 transition-all flex items-center justify-center space-x-3 group uppercase tracking-widest">
                    <span>Book My Demo</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Trust Signals near form */}
                  <div className="flex justify-between items-center px-2 opacity-50 grayscale">
                    <div className="flex items-center space-x-1">
                      <ShieldCheck size={14} />
                      <span className="text-[9px] font-bold uppercase tracking-tight">No commitment</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span className="text-[9px] font-bold uppercase tracking-tight">Free Session</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap size={14} />
                      <span className="text-[9px] font-bold uppercase tracking-tight">Quick Setup</span>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact / Trust Bar */}
      <section className="py-12 bg-white border-y border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 text-center lg:text-left">
              <div>
                 <h4 className="text-xl font-display font-bold text-text-heading mb-2">Want to talk to us directly?</h4>
                 <p className="text-text-secondary text-sm">Our experts are available for a quick chat right now.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                 <button className="flex items-center space-x-3 px-8 h-14 bg-[#25D366] text-white font-bold rounded-2xl hover:brightness-110 shadow-xl shadow-green-500/10 active:scale-95 transition-all">
                    <MessageSquare size={20} fill="white" />
                    <span>Chat on WhatsApp</span>
                 </button>
                 <button className="flex items-center space-x-3 px-8 h-14 bg-white border border-accent text-text-heading font-bold rounded-2xl hover:bg-slate-50 active:scale-95 transition-all">
                    <Phone size={18} />
                    <span>Request Callback</span>
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Live Demo Preview / Dashboard */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-text-heading mb-4 italic underline decoration-primary/20 underline-offset-8">Get a live walkthrough of the platform</h2>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border border-accent">
                 <img 
                   src="https://images.unsplash.com/photo-1551288049-bbbda5012375?auto=format&fit=crop&q=80&w=1200" 
                   alt="EXZIBO Dashboard" 
                   className="w-full h-auto object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                       <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                 </div>
              </div>
              <div className="space-y-10">
                 <div className="flex items-start space-x-6">
                    <div className="p-4 bg-white rounded-2xl border border-accent shadow-sm">
                       <ShieldCheck className="text-primary" size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-text-heading mb-2">Automated Order Management</h4>
                       <p className="text-text-secondary text-sm leading-relaxed">See how our smart dispatching engine reduces kitchen delays by up to 25%.</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="p-4 bg-white rounded-2xl border border-accent shadow-sm">
                       <Globe className="text-primary" size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-text-heading mb-2">Multi-Channel Direct Ordering</h4>
                       <p className="text-text-secondary text-sm leading-relaxed">Launch your menu on Web, WhatsApp, and QR in a single click.</p>
                    </div>
                 </div>
                 <div className="p-8 bg-primary text-white rounded-3xl shadow-xl shadow-primary/20">
                    <p className="text-xl font-display italic font-medium leading-relaxed">
                       "EXZIBO helped us increase direct orders by 40%. The ROI was immediate."
                    </p>
                    <div className="mt-6 flex items-center space-x-3 border-t border-white/20 pt-6">
                       <div className="w-10 h-10 rounded-full bg-white/20" />
                       <div>
                          <p className="text-sm font-bold">Marcus Chen</p>
                          <p className="text-xs text-white/60">Founder, Golden Dragon</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-16">Common questions about the demo</h2>
           <div className="space-y-4">
              {[
                { q: 'Is the demo free?', a: 'Yes, the initial demo is completely free. We want you to see the value before making a decision.' },
                { q: 'How long does it take?', a: 'A typical demo lasts 20-30 minutes, but we can extend it if you have deep technical questions.' },
                { q: 'Do I need technical knowledge?', a: 'None at all. We focus on business growth and operational ease. Our software handles the tech for you.' },
                { q: 'Can I ask questions during the demo?', a: 'Absolutely! Our experts encourage questions so we can tailor the tour to your specific outlets.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-accent rounded-3xl hover:bg-slate-50 transition-all cursor-default">
                   <h4 className="font-bold text-text-heading mb-3 text-lg">{faq.q}</h4>
                   <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Urgency / CTA */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-white rounded-full dashed" />
         </div>
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Award size={48} className="text-primary mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">Ready to transform your guest experience?</h2>
            <p className="text-slate-400 mb-12 text-lg">Join 500+ restaurants that are scaling with EXZIBO’s unified platform.</p>
            <button className="h-16 px-12 bg-primary text-white font-bold text-lg rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-primary/20">
               Book My Free Demo Now
            </button>
         </div>
      </section>
    </div>
  );
}


