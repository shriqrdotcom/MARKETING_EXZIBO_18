/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import CustomersPage from './components/CustomersPage';
import AboutPage from './components/AboutPage';
import DemoPage from './components/DemoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'features' | 'pricing' | 'customers' | 'about' | 'demo'>('home');
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      setShowStickyCTA(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navbar logic in child components or pass this as prop
  const navigateTo = (page: 'home' | 'products' | 'features' | 'pricing' | 'customers' | 'about' | 'demo') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <TrustBar />
            <Benefits />
            <ProductShowcase />
            <Features />
            <HowItWorks />
            <Comparison />
            <Testimonials />
            <FAQ />
            <BottomCTA />
          </>
        );
      case 'products':
        return <ProductsPage />;
      case 'features':
        return <FeaturesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'customers':
        return <CustomersPage />;
      case 'about':
        return <AboutPage />;
      case 'demo':
        return <DemoPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white leading-normal">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main>
        {renderContent()}
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)]"
          >
            <button 
              onClick={() => {
                if (currentPage === 'demo') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigateTo('demo');
                }
              }}
              className="w-full h-14 bg-primary text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primary/40 flex items-center justify-center space-x-2 active:scale-95 transition-transform"
            >
              <span>
                {currentPage === 'pricing' ? 'Start Free Trial' : 
                 currentPage === 'features' ? 'See How It Works' :
                 currentPage === 'customers' ? 'See Results' :
                 'Book Free Demo'}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

