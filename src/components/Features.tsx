import { 
  Globe, 
  MapPin, 
  Calendar, 
  PieChart, 
  Users, 
  Zap, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';

const features = [
  {
    name: 'Menu Website Builder',
    description: 'No code required. Launch your stunning menu website in minutes.',
    icon: Globe,
  },
  {
    name: 'Live Order Tracking',
    description: 'Real-time updates for kitchen staff and waiting customers.',
    icon: Zap,
  },
  {
    name: 'Table Booking System',
    description: 'Manage reservations and floor plans with zero effort.',
    icon: Calendar,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Deep dive into sales, trends, and customer demographics.',
    icon: PieChart,
  },
  {
    name: 'Team Management',
    description: 'Track staff shifts, tips, and performance metrics.',
    icon: Users,
  },
  {
    name: 'Multi-Location Support',
    description: 'Manage all your restaurant branches from one single account.',
    icon: MapPin,
  },
  {
    name: 'Secure Payments',
    description: 'Integrated with top payment providers for safe transactions.',
    icon: ShieldCheck,
  },
  {
    name: 'Customer Feedback',
    description: 'Gather and respond to customer reviews automatically.',
    icon: MessageSquare,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-text-heading">Powerful features for modern dining</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
           {features.map((feature, i) => (
             <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
               <div className="w-12 h-12 rounded-lg bg-bg-soft flex items-center justify-center text-primary mb-6 border border-accent">
                 <feature.icon size={24} />
               </div>
               <h3 className="text-lg font-bold text-text-heading mb-2">{feature.name}</h3>
               <p className="text-sm text-text-secondary leading-relaxed">
                 {feature.description}
               </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
