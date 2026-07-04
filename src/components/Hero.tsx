import { motion } from 'motion/react';
import { Sparkles, Phone, ArrowDown, ShieldCheck } from 'lucide-react';
import ThreeDIllustration from './ThreeDIllustration';
import config from '../config.json';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // WhatsApp redirect helper
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${config.business.whatsappNumber}?text=Hello%20${encodeURIComponent(config.business.brandName)}!%20I%20would%20like%20to%20book%20an%20appointment.`, '_blank');
  };

  // Generate drift circles
  const bubblePositions = [
    { size: 'w-96 h-96', bg: 'bg-nude-200/40 dark:bg-gold-900/10', bottom: '10%', right: '-10%', delay: 2 },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12">

      {/* 1. Large background typography floating elegantly (from Nailsy reference) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-1/4 left-4 sm:left-12 font-serif text-[13vw] font-black uppercase tracking-[0.25em] text-gold-700/12 dark:text-gold-200/4"
        >
          Glam
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="absolute bottom-1/4 right-4 sm:right-12 font-serif text-[13vw] font-black uppercase tracking-[0.25em] text-gold-700/10 dark:text-gold-200/3 italic font-light"
        >
          Nails
        </motion.div>
      </div>

      {/* 2. Soft organic background blobs (Smooth Gradient Transitions, No Sharp Partitions) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bubblePositions.map((bubble, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.1, 0.95, 1],
              x: [0, 15, -10, 0],
              y: [0, -15, 10, 0],
            }}
            transition={{
              duration: 12 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bubble.delay,
            }}
            style={{
              filter: 'blur(50px)',
              bottom: bubble.bottom,
              right: bubble.right
            }}
            className={`absolute rounded-full ${bubble.size} ${bubble.bg}`}
          />
        ))}
      </div>

      {/* 3. Main Split Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text / Copy column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Accent Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="inline-flex items-center self-start space-x-2 px-3.5 py-2 rounded-full glass-pill mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-spin-slow" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold-700 dark:text-gold-300">
                {config.business.slogan}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl lg:text-[76px] leading-[0.95] font-serif tracking-tight text-neutral-900 dark:text-white mb-6"
            >
              <span className="italic font-light text-luxury-gradient">{config.business.brandName}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed mb-8"
            >
              {config.business.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
              className="flex flex-wrap gap-4 items-center mb-8"
            >
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Book on WhatsApp
              </button>

              <button
                onClick={() => onScrollToSection('services')}
                className="px-8 py-4 border border-neutral-900 dark:border-white rounded-full font-bold text-xs uppercase tracking-widest text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-103 transition-all duration-300 cursor-pointer"
              >
                View Services
              </button>
            </motion.div>

            {/* Small Trust Seal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Certified Artists • Premium Luxury Products</span>
            </motion.div>
          </div>

          {/* Right Visual 3D Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex justify-center items-center relative"
          >
            <ThreeDIllustration variant="hero" />
          </motion.div>

        </div>
      </div>

      {/* Mouse Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 0.6, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' }
        }}
        onClick={() => onScrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1.5 font-bold group-hover:text-gold-500 transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex justify-center p-1 group-hover:border-gold-500 transition-colors">
          <motion.div className="w-1 h-1 rounded-full bg-gold-500" />
        </div>
      </motion.div>
    </section>
  );
}
