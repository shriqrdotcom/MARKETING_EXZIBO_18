import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Testimonial {
  name: string;
  restaurant: string;
  result: string;
  quote: string;
  image: string;
}

export interface Feature {
  name: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface CMSData {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    trustItem1: string;
    trustItem2: string;
  };
  features: Feature[];
  testimonials: Testimonial[];
  pricing: PricingPlan[];
  contact: {
    email: string;
    phone: string;
    location: string;
    hours: string;
  };
  footer: {
    tagline: string;
    email: string;
    phone: string;
    location: string;
  };
  general: {
    siteName: string;
    siteTagline: string;
    heroImage: string;
  };
}

const DEFAULT_DATA: CMSData = {
  hero: {
    badge: 'Version 2.0 is now live',
    title: 'All-in-one platform to grow your',
    titleHighlight: 'restaurant',
    subtitle: 'Create your menu website, manage orders, track performance, and grow your restaurant — all from one dashboard.',
    primaryButtonText: 'Explore Platform',
    secondaryButtonText: 'View Features',
    trustItem1: 'No credit card required',
    trustItem2: '14-day free trial',
  },
  features: [
    { name: 'Menu Website Builder', description: 'No code required. Launch your stunning menu website in minutes.' },
    { name: 'Live Order Tracking', description: 'Real-time updates for kitchen staff and waiting customers.' },
    { name: 'Table Booking System', description: 'Manage reservations and floor plans with zero effort.' },
    { name: 'Analytics Dashboard', description: 'Deep dive into sales, trends, and customer demographics.' },
    { name: 'Team Management', description: 'Track staff shifts, tips, and performance metrics.' },
    { name: 'Multi-Location Support', description: 'Manage all your restaurant branches from one single account.' },
    { name: 'Secure Payments', description: 'Integrated with top payment providers for safe transactions.' },
    { name: 'Customer Feedback', description: 'Gather and respond to customer reviews automatically.' },
  ],
  testimonials: [
    {
      name: 'Sarah Jenkins',
      restaurant: 'Bistro 42',
      result: 'Increased orders by 40%',
      quote: 'Switching to EXZIBO was the best decision we made for our digital presence. The dashboard is incredibly intuitive.',
      image: 'https://picsum.photos/seed/sarah/100/100',
    },
    {
      name: 'Marcus Chen',
      restaurant: 'Golden Dragon Express',
      result: 'Efficiency improved by 65%',
      quote: 'The live order tracking has completely eliminated errors in our kitchen. Our staff and customers are much happier.',
      image: 'https://picsum.photos/seed/marcus/100/100',
    },
    {
      name: 'Elena Rodriguez',
      restaurant: 'Taco Haven',
      result: 'Bookings up by 25%',
      quote: 'The table booking system is a game changer. We no longer lose peak-hour traffic due to management issues.',
      image: 'https://picsum.photos/seed/elena/100/100',
    },
  ],
  pricing: [
    {
      id: 'starter',
      name: 'Starter',
      price: 999,
      description: 'Perfect for getting your restaurant online and managing basics.',
      features: ['Menu Website Builder', 'Basic Order Management', 'Customer Support', '1 Location'],
      cta: 'Choose Starter',
      highlight: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 1999,
      description: 'Everything you need to attract customers and grow orders.',
      features: ['Everything in Starter', 'Table Booking System', 'Analytics Dashboard', '3 Locations'],
      cta: 'Choose Growth',
      highlight: false,
    },
    {
      id: 'business',
      name: 'Business',
      price: 2999,
      description: 'Advanced tools to streamline operations and maximize revenue.',
      features: ['Everything in Growth', 'Advanced Analytics', 'Customer Loyalty Program', 'Marketing Automation', 'Priority Support'],
      cta: 'Choose Business',
      highlight: true,
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 4999,
      description: 'For multi-outlet restaurants and serious scale.',
      features: ['Everything in Business', 'Multi-outlet Management', 'Advanced Reports', 'API Access', 'Dedicated Account Manager'],
      cta: 'Choose Scale',
      highlight: false,
    },
  ],
  contact: {
    email: 'hello@exzibo.com',
    phone: '+1 (555) 000-0000',
    location: 'San Francisco, CA',
    hours: 'Mon–Sat, 9am–7pm',
  },
  footer: {
    tagline: 'The all-in-one platform to grow your restaurant online.',
    email: 'hello@exzibo.com',
    phone: '+1 (555) 000-0000',
    location: 'San Francisco, CA',
  },
  general: {
    siteName: 'EXZIBO',
    siteTagline: 'Grow Your Restaurant Online',
    heroImage: '',
  },
};

const STORAGE_KEY = 'exzibo_cms_data';

function loadData(): CMSData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_DATA, ...parsed };
    }
  } catch {}
  return DEFAULT_DATA;
}

interface CMSContextType {
  data: CMSData;
  updateData: (newData: CMSData) => void;
  saveData: (newData: CMSData) => void;
  resetData: () => void;
  isDirty: boolean;
}

const CMSContext = createContext<CMSContextType | null>(null);

export function CMSProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CMSData>(loadData);
  const [isDirty, setIsDirty] = useState(false);

  const updateData = (newData: CMSData) => {
    setData(newData);
    setIsDirty(true);
  };

  const saveData = (newData: CMSData) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setIsDirty(false);
  };

  const resetData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(DEFAULT_DATA);
    setIsDirty(false);
  };

  return (
    <CMSContext.Provider value={{ data, updateData, saveData, resetData, isDirty }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error('useCMS must be used within CMSProvider');
  return ctx;
}

export { DEFAULT_DATA };
