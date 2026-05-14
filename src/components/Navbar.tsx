import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Home, LayoutGrid, PlayCircle, Tag, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'products' | 'features' | 'pricing' | 'customers' | 'about' | 'demo' | 'contact') => void;
  currentPage: 'home' | 'products' | 'features' | 'pricing' | 'customers' | 'about' | 'demo' | 'contact';
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Customers', id: 'customers' },
    { name: 'About', id: 'about' },
    { name: 'Demo', id: 'demo' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (link: any) => {
    const pageIds = ['home', 'products', 'features', 'pricing', 'customers', 'about', 'demo', 'contact'];
    if (pageIds.includes(link.id)) {
      onNavigate(link.id as any);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-accent py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center space-x-2 cursor-pointer z-50"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-display font-bold text-text-heading tracking-tight">
              EXZIBO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                  (link.id === currentPage) 
                    ? 'text-primary underline decoration-2 underline-offset-8' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-heading p-2 z-50"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Standard Responsive Dropdown) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-accent shadow-2xl overflow-hidden py-10 px-6"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`flex items-center justify-between w-full p-4 rounded-xl text-left transition-all ${
                    link.id === currentPage 
                      ? 'text-primary bg-primary/5 font-bold' 
                      : 'text-text-heading hover:bg-slate-50 font-semibold'
                  }`}
                >
                  <span className="text-lg">{link.name}</span>
                  <ChevronRight size={18} className="opacity-20" />
                </button>
              ))}
              
              <div className="pt-8 flex flex-col space-y-4">
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
