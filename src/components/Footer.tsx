import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export default function Footer() {
  const { data } = useCMS();
  const footer = data.footer;

  const links = [
    { title: 'Product', items: ['Menu Builder', 'Order Manager', 'Analytics', 'Bookings'] },
    { title: 'Company', items: ['About Us', 'Careers', 'Press', 'Contact'] },
    { title: 'Resources', items: ['Blog', 'Help Center', 'API Docs', 'Status'] },
    { title: 'Legal', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer className="bg-bg-soft pt-16 pb-12 border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16 lg:mb-20">
          <div className="col-span-1 sm:col-span-2 space-y-8">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-display font-bold text-text-heading tracking-tight">
                {data.general.siteName}
              </span>
            </a>
            <p className="text-text-secondary max-w-xs leading-relaxed">
              {data.general.siteDescription || footer.tagline}
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {links.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-text-heading mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h4 className="font-bold text-text-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-text-secondary">
                <Mail size={16} className="text-primary" />
                <span>{footer.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-text-secondary">
                <Phone size={16} className="text-primary" />
                <span>{footer.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-text-secondary">
                <MapPin size={16} className="text-primary" />
                <span>{footer.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-accent flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-text-secondary">
          <p>© 2026 {data.general.siteName} Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary">English</a>
            <a href="#" className="hover:text-primary">INR (₹)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
