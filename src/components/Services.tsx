import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Crown, Scissors, Hand, Droplet, Layers, HelpCircle } from 'lucide-react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';
import WavyBackgroundLines from './WavyBackgroundLines';
import SectionHeader from './common/SectionHeader';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState('Nails');

  const tabs = ['Nails', 'Products'];

  // Map service ID to an elegant Lucide icon
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'nail-extensions':
        return <Layers className="w-5 h-5 text-gold-500" />;
      case 'nail-art':
        return <Sparkles className="w-5 h-5 text-gold-500" />;
      case 'gel-polish':
        return <Droplet className="w-5 h-5 text-gold-500" />;
      case 'nail-products':
        return <Hand className="w-5 h-5 text-gold-500" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gold-500" />;
    }
  };

  const filteredServices = servicesData.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Dynamic diagonal multi-line waves joining pages smoothly */}
      <WavyBackgroundLines variant="waves" className="opacity-45" />
      
      {/* Background elegant typography */}
      <div className="absolute inset-x-0 top-1/4 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-8 font-serif text-[11vw] font-bold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-200"
        >
          Luminescence
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Our Menu of Splendor"
          titleNormal="Luxurious Beauty"
          titleGradient="& Glamour Services"
          description="Meticulously customized styles crafted with high-definition techniques and top-shelf luxury brands to keep you glowing, polished, and confident."
        />

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-gold-500 border-gold-500 text-white shadow-md'
                  : 'glass-pill text-neutral-600 dark:text-neutral-400 hover:border-gold-400 dark:hover:border-gold-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={service.id}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-card shadow-lg hover:shadow-xl hover:border-gold-300/40 dark:hover:border-gold-700/40 transition-all duration-500 h-full border border-neutral-100 dark:border-neutral-900 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-4/3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-xs text-[10px] font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400 px-3 py-1 rounded-full border border-gold-400/20 shadow-xs">
                    {service.category}
                  </span>

                  {/* Price & Duration */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xl font-serif font-bold text-gold-300">{service.price}</span>
                    <span className="text-xs tracking-wider opacity-90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">{service.duration}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center space-x-2.5 mb-3">
                      <div className="flex-shrink-0 p-1.5 rounded-lg bg-gold-50 dark:bg-neutral-800">
                        {getServiceIcon(service.id)}
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-950 dark:text-neutral-50 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-300 line-clamp-3 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2 text-xs text-neutral-800 dark:text-neutral-300 font-medium">
                          <span className="w-1 h-1 rounded-full bg-gold-500" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book CTA Button */}
                  <button
                    onClick={() => onBookService(service.title)}
                    className="w-full py-3 bg-linear-to-r from-neutral-900 to-neutral-850 hover:from-gold-500 hover:to-gold-600 dark:from-neutral-800 dark:to-neutral-900 dark:hover:from-gold-500 dark:hover:to-gold-600 text-white dark:text-neutral-100 hover:text-white dark:hover:text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 scale-100 active:scale-98 shadow-sm"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
