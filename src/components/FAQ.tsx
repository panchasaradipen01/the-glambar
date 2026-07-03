import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqData } from '../data';
import SectionHeader from './common/SectionHeader';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Humble Queries"
          titleNormal="Frequently Asked"
          titleGradient="Questions"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl glass-card p-4 sm:p-6 overflow-hidden"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between text-left gap-4"
                >
                  <div className="flex items-start space-x-3 text-neutral-950 dark:text-neutral-50">
                    <HelpCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="font-serif text-sm sm:text-base font-bold leading-snug">
                      {item.question}
                    </span>
                  </div>
                  
                  <span className={`flex-shrink-0 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-500 border-gold-500 text-white dark:text-black' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="mt-4 pl-8 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed border-t border-neutral-100 dark:border-neutral-900/60 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
