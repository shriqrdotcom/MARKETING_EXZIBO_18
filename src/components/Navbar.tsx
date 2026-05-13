import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'products') => void;
  currentPage: 'home' | 'products';
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
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Customers', href: '#customers' },
    { name: 'About', href: '#about' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (link: any) => {
    if (link.id === 'home' || link.id === 'products') {
      onNavigate(link.id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-accent py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-display font-bold text-text-heading tracking-tight">
                EXZIBO
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  (link.id === currentPage) 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
              Login
            </button>
            <button className="btn-primary">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-heading p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-accent overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href || '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                  }}
                  className={`block w-full text-left px-3 py-4 text-base font-medium transition-colors rounded-lg cursor-pointer ${
                    link.id === currentPage 
                      ? 'text-primary bg-primary/5' 
                      : 'text-text-secondary hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="w-full py-3 text-center font-semibold text-text-secondary border border-accent rounded-lg">
                  Login
                </button>
                <button className="w-full btn-primary py-3">
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
