import { motion } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, Users, Globe, Award, Mail, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-bg-soft relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-primary rounded-full dashed" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-heading mb-8">
              We're on a mission to empower every <span className="text-primary italic">restaurateur</span>
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
              EXZIBO was founded on the belief that high-end digital tools shouldn't only be for massive chains. We build professional, all-in-one software for restaurants of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
               <button className="btn-primary px-10 h-14">Explore Platform</button>
               <button className="btn-secondary px-10 h-14">Read Success Stories</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-display font-bold text-text-heading mb-4">Our Core Values</h2>
             <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Zap, title: 'Simplicity', desc: 'SaaS doesn’t have to be complicated. We build tools that make sense instantly.' },
               { icon: ShieldCheck, title: 'Reliability', desc: 'Your business runs 24/7. Our platform does too, with 99.9% uptime.' },
               { icon: TrendingUp, title: 'Growth', desc: 'We only succeed when you grow. Every feature is built with revenue in mind.' },
               { icon: Users, title: 'Empowerment', desc: 'We give you the data and tools to take control of your digital presence.' }
             ].map((v, i) => (
               <div key={i} className="p-8 border border-accent rounded-3xl hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 bg-bg-soft rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                     <v.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-text-heading mb-4">{v.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Our Story / Vision */}
      <section className="py-24 bg-bg-soft">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="relative">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                     <img 
                       src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" 
                       alt="Our Team" 
                       className="w-full h-auto"
                       referrerPolicy="no-referrer"
                     />
                  </div>
                  <div className="absolute -bottom-10 -right-10 p-10 bg-primary text-white rounded-3xl shadow-2xl hidden lg:block">
                     <p className="text-5xl font-display font-bold mb-2">500+</p>
                     <p className="text-sm font-bold uppercase tracking-widest opacity-70">Global Partners</p>
                  </div>
               </div>
               <div>
                  <h2 className="text-4xl font-display font-bold text-text-heading mb-8">From a small idea to a global platform</h2>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                     Started by a group of hospitality enthusiasts and software engineers, EXZIBO was born in a small cloud kitchen. We saw firsthand how hard it was to manage orders, menus, and customers across different platforms.
                  </p>
                  <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                     Today, we’re proud to support over 500 restaurants worldwide, processing millions in revenue and helping restaurateurs focus on what they do best: cooking amazing food.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <h4 className="text-2xl font-display font-bold text-primary mb-1">2021</h4>
                        <p className="text-sm text-text-secondary">Founded in a cloud kitchen</p>
                     </div>
                     <div>
                        <h4 className="text-2xl font-display font-bold text-primary mb-1">100k+</h4>
                        <p className="text-sm text-text-secondary">Orders per month</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Team / Leadership - Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-3xl font-display font-bold text-text-heading mb-4 italic underline decoration-primary/20 underline-offset-8">The humans behind the code</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { name: 'Alex Rivera', role: 'Founder & CEO', image: 'https://picsum.photos/seed/alex/200' },
               { name: 'Sarah Chen', role: 'Head of Product', image: 'https://picsum.photos/seed/sarah/200' },
               { name: 'Michael Beck', role: 'CTO', image: 'https://picsum.photos/seed/mike/200' },
               { name: 'Elena Voss', role: 'Customer Success', image: 'https://picsum.photos/seed/elena/200' }
             ].map((m, i) => (
               <div key={i} className="text-center group">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 border border-accent">
                     <img 
                       src={m.image} 
                       alt={m.name} 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                       referrerPolicy="no-referrer"
                     />
                  </div>
                  <h4 className="font-bold text-text-heading">{m.name}</h4>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mt-1">{m.role}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <Globe size={48} className="text-primary mx-auto mb-8 animate-[spin_20s_linear_infinite]" />
           <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8">Serving restaurants <span className="text-primary italic">globally</span></h2>
           <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
             With presence in 12 countries and support for multiple currencies, we're building the future of digital hospitality.
           </p>
           <button className="h-16 px-12 bg-primary text-white font-bold text-lg rounded-xl hover:brightness-110 shadow-2xl active:scale-95 transition-all">
             Join the Global Community
           </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white border-y border-accent" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                 <h2 className="text-4xl font-display font-bold text-text-heading mb-8">Get in touch</h2>
                 <p className="text-lg text-text-secondary mb-12">
                   Have questions? We'd love to hear from you. Our team is always ready to talk about how we can help your restaurant grow.
                 </p>
                 <div className="space-y-8">
                    <div className="flex items-center space-x-6">
                       <div className="w-12 h-12 rounded-xl bg-bg-soft flex items-center justify-center text-primary">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-text-heading uppercase tracking-widest">Email Us</p>
                          <p className="text-text-secondary">hello@exzibo.com</p>
                       </div>
                    </div>
                    <div className="flex items-center space-x-6">
                       <div className="w-12 h-12 rounded-xl bg-bg-soft flex items-center justify-center text-primary">
                          <Phone size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-text-heading uppercase tracking-widest">Call Us</p>
                          <p className="text-text-secondary">+1 (555) 234-5678</p>
                       </div>
                    </div>
                    <div className="flex items-center space-x-6">
                       <div className="w-12 h-12 rounded-xl bg-bg-soft flex items-center justify-center text-primary">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-text-heading uppercase tracking-widest">Visit Us</p>
                          <p className="text-text-secondary">123 Tech Avenue, Silicon Valley, CA</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-bg-soft rounded-3xl p-10 border border-accent">
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Full Name</label>
                          <input type="text" className="w-full h-12 px-4 rounded-xl border border-accent focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Email Address</label>
                          <input type="email" className="w-full h-12 px-4 rounded-xl border border-accent focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Subject</label>
                       <input type="text" className="w-full h-12 px-4 rounded-xl border border-accent focus:border-primary outline-none transition-colors" placeholder="Quick Question" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Message</label>
                       <textarea className="w-full h-32 p-4 rounded-xl border border-accent focus:border-primary outline-none transition-colors resize-none" placeholder="How can we help?" />
                    </div>
                    <button className="btn-primary w-full h-14">Send Message</button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
         <h2 className="text-3xl font-display font-bold text-text-heading mb-8">Ready to transform your restaurant?</h2>
         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary h-14 px-10">Start My Free Trial</button>
            <button className="btn-secondary h-14 px-10">Learn More About Products</button>
         </div>
      </section>
    </div>
  );
}
