import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';

export default function ContactPage() {
  const [formType, setFormType] = useState('General Inquiry');

  return (
    <div className="bg-white min-h-screen">
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] md:hidden pointer-events-none">
        <motion.button 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="w-full h-14 bg-primary text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primary/40 flex items-center justify-center space-x-2 pointer-events-auto active:scale-95 transition-transform"
        >
          <MessageSquare size={20} />
          <span>Chat With Us</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-text-heading leading-tight mb-6">
              Get in touch with <span className="text-primary italic">EXZIBO</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We're here to help you grow your restaurant. Reach out to our team anytime for sales, support, or general inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info & Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-heading mb-8">How would you like to connect?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Direct Contact Cards */}
                  <a href="mailto:support@exzibo.com" className="group p-6 bg-white rounded-3xl border border-accent hover:border-primary transition-all shadow-sm">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-bold text-text-heading mb-2">Email support</h4>
                    <p className="text-sm text-text-secondary mb-4">Response within 2 hours</p>
                    <span className="text-primary text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                      support@exzibo.com <ArrowRight size={14} className="ml-1" />
                    </span>
                  </a>

                  <a href="tel:+1234567890" className="group p-6 bg-white rounded-3xl border border-accent hover:border-primary transition-all shadow-sm">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-bold text-text-heading mb-2">Phone support</h4>
                    <p className="text-sm text-text-secondary mb-4">Mon-Fri, 9am - 6pm</p>
                    <span className="text-primary text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                      +1 (234) 567-890 <ArrowRight size={14} className="ml-1" />
                    </span>
                  </a>

                  <button className="group p-6 bg-[#25D366]/5 rounded-3xl border border-[#25D366]/20 hover:border-[#25D366] transition-all shadow-sm text-left">
                    <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white mb-6">
                      <MessageSquare size={24} fill="white" />
                    </div>
                    <h4 className="font-bold text-text-heading mb-2">WhatsApp</h4>
                    <p className="text-sm text-text-secondary mb-4">Chat with sales team</p>
                    <span className="text-[#25D366] text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                      Quick Chat <ArrowRight size={14} className="ml-1" />
                    </span>
                  </button>

                  <div className="p-6 bg-bg-soft rounded-3xl border border-accent shadow-sm">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6">
                      <Zap size={24} fill="white" />
                    </div>
                    <h4 className="font-bold text-text-heading mb-2">Live Chat</h4>
                    <p className="text-sm text-text-secondary mb-4">Available for partners</p>
                    <span className="text-slate-900 text-sm font-bold flex items-center opacity-50 cursor-not-allowed">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="pt-12 border-t border-accent grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-text-heading">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-heading mb-1">Our HQ</h5>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Silicon Valley, CA<br />
                      Palo Alto, Venture Street 101
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-text-heading">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-heading mb-1">Working Hours</h5>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Mon – Sat: 9:00 – 19:00<br />
                      Sunday: Emergency Support Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { icon: ShieldCheck, text: 'Secure Data' },
                  { icon: Users, text: 'Friendly Team' },
                  { icon: Zap, text: 'Fast Response' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-50">
                    <item.icon size={14} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 relative">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-display font-bold text-text-heading mb-2">Send us a message</h3>
                  <p className="text-sm text-text-secondary">We'll get back to you faster than you can cook a burger.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Full Name</label>
                    <input type="text" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. John Doe" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Email Address</label>
                      <input type="email" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Phone Number</label>
                      <input type="tel" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="+1 (234) 567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Restaurant Name</label>
                    <input type="text" required className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. The Bistro" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Inquiry Type</label>
                    <select 
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      required 
                      className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Message</label>
                    <textarea rows={4} required className="w-full p-5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-slate-400 text-sm" placeholder="How can we help you?" />
                  </div>

                  <button className="w-full h-16 bg-primary text-white font-bold text-lg rounded-2xl hover:brightness-110 shadow-2xl shadow-primary/20 active:scale-95 transition-all flex items-center justify-center space-x-3 group uppercase tracking-widest">
                    <span>Send Message</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-24 bg-bg-soft border-y border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-heading mb-16">Quick Help Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HelpCircle, title: 'FAQ', desc: 'Find answers to common questions immediately.', link: 'See FAQs' },
              { icon: ExternalLink, title: 'Help Center', desc: 'Detailed guides on how to use every EXZIBO feature.', link: 'Visit Portal' },
              { icon: Zap, title: 'Book Demo', desc: 'Want a tour? Our team can show you around live.', link: 'Book My Demo' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-accent shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-text-heading mb-4">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">{item.desc}</p>
                <button className="text-primary font-bold text-sm flex items-center mx-auto hover:underline uppercase tracking-widest">
                  {item.link} <ArrowRight size={14} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-16 underline decoration-primary/20 underline-offset-8">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How quickly will I get a response?', a: 'Our average response time for support is under 2 hours during business hours. Sales inquiries are usually addressed within the hour.' },
              { q: 'Can I get support after signup?', a: 'Absolutely. Every partner gets a dedicated account manager and 24/7 technical support access.' },
              { q: 'Is there phone support?', a: 'Yes, we offer direct phone support for all our Enterprise and Pro plan partners. Basic plans include email and WhatsApp support.' },
              { q: 'Do you help with setup?', a: 'Part of our demo and onboarding process includes setting up your first 10 menu items and configuring your branding for you.' }
            ].map((faq, i) => (
              <div key={i} className="p-8 border border-accent rounded-3xl hover:bg-slate-50 transition-all">
                <h4 className="font-bold text-text-heading mb-3 text-lg">{faq.q}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-8">Need help getting started?</h2>
           <p className="text-white/70 mb-12 text-lg">Our experts are standing by to help you choose the right plan for your growth.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="h-16 px-12 bg-white text-primary font-bold text-lg rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-primary/20">
                Book My Demo
              </button>
              <button className="h-16 px-12 bg-primary border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 active:scale-95 transition-all">
                View Frequently Asked
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
