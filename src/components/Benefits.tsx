import { motion } from 'motion/react';
import { TrendingUp, LayoutDashboard, BarChart2, Users, Heart } from 'lucide-react';

const benefits = [
  {
    title: 'Increase Orders',
    description: 'Optimize your sales funnel with a high-converting digital menu and seamless checkout experience.',
    icon: TrendingUp,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Manage Everything',
    description: 'Orders, inventory, and bookings — all handled from a single, intuitive interface.',
    icon: LayoutDashboard,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with insights into peak hours, popular items, and customer behavior.',
    icon: BarChart2,
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Easy Team Management',
    description: 'Assign roles, track performance, and streamline communication with your entire staff.',
    icon: Users,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Better Experience',
    description: 'DELIGHT your customers with split-second loading menus and effortless table bookings.',
    icon: Heart,
    color: 'bg-pink-50 text-pink-600',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-bold text-primary tracking-wide uppercase mb-4">Why EXZIBO?</h2>
          <p className="text-3xl sm:text-5xl font-display font-bold text-text-heading mb-6 tracking-tight">
            Stop juggling tools, start growing your restaurant.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            We provide the infrastructure so you can focus on what you do best: serving incredible food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-accent hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-4">{benefit.title}</h3>
              <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
