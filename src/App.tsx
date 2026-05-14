/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import CustomersPage from './components/CustomersPage';
import AboutPage from './components/AboutPage';
import DemoPage from './components/DemoPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'features' | 'pricing' | 'customers' | 'about' | 'demo' | 'contact'>('home');
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
  const navigateTo = (page: 'home' | 'products' | 'features' | 'pricing' | 'customers' | 'about' | 'demo' | 'contact') => {
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
            <ProductShowcase />
            <HowItWorks />
            <Comparison />
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
      case 'contact':
        return <ContactPage />;
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
    </div>
  );
}

