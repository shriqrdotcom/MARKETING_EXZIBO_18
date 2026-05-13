import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'How does EXZIBO work?',
    answer: 'EXZIBO is a comprehensive restaurant management platform. You start by building your custom menu website, after which you can manage all incoming orders, track performance, and handle bookings from a single dashboard.',
  },
  {
    question: 'Is it easy to set up?',
    answer: 'Absolutely. We designed EXZIBO for restaurant owners, not developers. You can go live with your full digital menu in under 30 minutes with our drag-and-drop builder.',
  },
  {
    question: 'Can I manage multiple restaurants?',
    answer: 'Yes! Our multi-location support allows you to switch between different branches and view consolidated or individual analytics from one account.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer: 'No technical skills are required. If you can use a smartphone, you can master EXZIBO. We handle all the hosting, security, and updates for you.',
  },
  {
    question: 'Is there customer support?',
    answer: 'We provide 24/7 dedicated support via chat and email to all our partners. We also offer one-on-one onboarding for our premium plans.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-heading text-center mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-accent rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-text-heading">{faq.question}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-accent pt-4 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
