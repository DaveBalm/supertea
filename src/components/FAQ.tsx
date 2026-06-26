import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq-section" className="py-16 px-4 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <HelpCircle className="w-8 h-8 text-brand-600 mx-auto mb-2" />
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-950 font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-brand-600 text-sm sm:text-base">
            Get quick answers to common questions about Dr. David Super Tea.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-500 bg-brand-50/20 shadow-xs' 
                    : 'border-brand-100 hover:border-brand-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-brand-900 focus:outline-hidden cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-serif">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-500 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-brand-700' : ''
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-700 border-t border-brand-100/40 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
