import {
  Globe, MapPin, Calendar, PieChart, Users,
  Zap, ShieldCheck, MessageSquare, Layers
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const ICON_MAP: Record<string, any> = {
  'Menu Website Builder': Globe,
  'Live Order Tracking': Zap,
  'Table Booking System': Calendar,
  'Analytics Dashboard': PieChart,
  'Team Management': Users,
  'Multi-Location Support': MapPin,
  'Secure Payments': ShieldCheck,
  'Customer Feedback': MessageSquare,
};

function getIcon(name: string) {
  return ICON_MAP[name] ?? Layers;
}

function FeaturesSkeleton() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-8 w-72 bg-slate-100 rounded-xl mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start animate-pulse">
              <div className="w-12 h-12 rounded-lg bg-slate-100 mb-6" />
              <div className="h-5 w-36 bg-slate-200 rounded mb-3" />
              <div className="space-y-2 w-full">
                <div className="h-4 w-full bg-slate-100 rounded" />
                <div className="h-4 w-4/5 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  const { data, loading } = useCMS();

  if (loading) return <FeaturesSkeleton />;

  const features = data.features;

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-heading">
            Powerful features for modern dining
          </h2>
        </div>

        {features.length === 0 ? (
          <p className="text-center text-text-secondary">No features available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {features.map((feature, i) => {
              const Icon = getIcon(feature.name);
              return (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 rounded-lg bg-bg-soft flex items-center justify-center text-primary mb-6 border border-accent">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-text-heading mb-2">{feature.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
