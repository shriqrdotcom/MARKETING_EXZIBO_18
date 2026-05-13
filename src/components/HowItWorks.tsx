import { motion } from 'motion/react';
import { Smartphone, LayoutDashboard, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Create your website',
    description: 'Upload your logo, choose a theme, and add your menu items in minutes.',
    icon: Smartphone,
    color: 'bg-blue-500',
  },
  {
    title: 'Manage orders & menu',
    description: 'Start receiving orders and managing your kitchen via the central dashboard.',
    icon: LayoutDashboard,
    color: 'bg-indigo-600',
  },
  {
    title: 'Grow your business',
    description: 'Use our data insights to optimize your menu and reach more customers.',
    icon: Rocket,
    color: 'bg-primary',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-heading mb-6">Get started in 3 simple steps</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            We’ve simplified the technical side so you can launch and scale faster than ever.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-accent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <step.icon size={36} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-text-heading font-black text-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
