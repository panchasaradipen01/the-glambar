import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data';
import WavyBackgroundLines from './WavyBackgroundLines';
import SectionHeader from './common/SectionHeader';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Delicate diagonal background streams joining sections smoothly */}
      <WavyBackgroundLines variant="waves" className="opacity-40" />
      
      {/* Background drifting typography */}
      <div className="absolute inset-x-0 top-1/4 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute right-8 font-serif text-[11vw] font-bold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-200"
        >
          Elegance
        </motion.div>
      </div>

      {/* Absolute Decorative Background Elements */}
      <div className="absolute top-1/2 left-4 w-72 h-72 rounded-full bg-gold-200/20 dark:bg-gold-800/5 blur-3xl -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-4 w-72 h-72 rounded-full bg-blush-200/20 dark:bg-blush-900/5 blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          tag="Voices of Glamour"
          titleNormal="Testimonials from"
          titleGradient="Our Radiant Clients"
          description="Nothing fills us with greater pride than reading the wonderful notes left by our gorgeous brides and clients. Read what they have to say."
        />

        {/* Testimonial Active Display Card with Carousel Controls */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-full glass-card rounded-3xl p-6 sm:p-12 border border-neutral-100 dark:border-neutral-800/50 shadow-xl flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold-300 dark:border-gold-800/50 shadow-lg bg-neutral-100 dark:bg-neutral-800">
                    <img
                      src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=client_${activeIndex + 1}`}
                      alt="Client avatar"
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Absolute Quote Accent */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-md">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 text-center sm:text-left">
                  {/* Stars Rating */}
                  <div className="flex justify-center sm:justify-start space-x-1 mb-4">
                    {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-gold-500 text-gold-500 drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 italic font-medium leading-relaxed mb-6">
                    "{testimonialsData[activeIndex].text}"
                  </blockquote>

                  {/* Customer Identity */}
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-100">Client</h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-200/60 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-gold-500 hover:text-white dark:hover:text-black hover:border-gold-500 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slide Index Indicators */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === dotIdx ? 'bg-gold-500 w-6' : 'bg-neutral-300 dark:bg-neutral-800'
                  }`}
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-200/60 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-gold-500 hover:text-white dark:hover:text-black hover:border-gold-500 transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
