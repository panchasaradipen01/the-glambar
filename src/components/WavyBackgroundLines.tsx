import { motion } from 'motion/react';

interface WavyBackgroundLinesProps {
  variant?: 'stream' | 'waves' | 'organic' | 'elegant';
  className?: string;
}

export default function WavyBackgroundLines({ variant = 'stream', className = '' }: WavyBackgroundLinesProps) {
  if (variant === 'waves') {
    // Elegant wavy multi-line streams (recreating Image 6)
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-25 dark:opacity-15 ${className}`}>
        <svg viewBox="0 0 1440 800" className="w-full h-full text-gold-400 dark:text-gold-200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="1" opacity="0.6">
            {/* Multiple nested waves flowing together */}
            {Array.from({ length: 12 }).map((_, i) => {
              const offset = i * 22;
              return (
                <motion.path
                  key={i}
                  d={`M-100,${200 + offset} C300,${150 + offset} 600,${650 + offset} 1000,${300 + offset} C1200,${150 + offset} 1500,${450 + offset} 1700,${250 + offset}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 - i * 0.06 }}
                  transition={{ duration: 3, delay: i * 0.1, ease: 'easeInOut' }}
                />
              );
            })}
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'organic') {
    // Soft organic drifting waves (recreating Image 7)
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-30 dark:opacity-20 ${className}`}>
        <svg viewBox="0 0 1440 900" className="w-full h-full text-gold-500/50 dark:text-gold-300/30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100,100 C 300,400 500,-100 900,300 C 1100,500 1300,100 1600,200"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
          />
          <motion.path
            d="M -100,250 C 250,550 450,50 850,450 C 1050,650 1250,250 1600,350"
            stroke="currentColor"
            strokeWidth="1.0"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: 'easeInOut' }}
          />
          <motion.path
            d="M -100,600 C 400,800 700,400 1000,750 C 1200,900 1400,600 1600,700"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 0.2, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }

  // Default elegant flowing stream (diagonal, traversing page bounds)
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20 dark:opacity-10 ${className}`}>
      <svg viewBox="0 0 1440 1000" className="w-full h-full text-gold-500/40 dark:text-gold-200/20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1.25">
          {/* Main stream line */}
          <motion.path
            d="M-50,150 C400,100 500,850 1000,500 C1250,320 1300,800 1550,750"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
          />
          {/* Parallel stream line 1 */}
          <motion.path
            d="M-50,190 C400,140 500,890 1000,540 C1250,360 1300,840 1550,790"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4.2, delay: 0.1, ease: 'easeInOut' }}
          />
          {/* Parallel stream line 2 */}
          <motion.path
            d="M-50,230 C400,180 500,930 1000,580 C1250,400 1300,880 1550,830"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4.4, delay: 0.2, ease: 'easeInOut' }}
          />
          {/* Dotted tracer line */}
          <motion.path
            d="M-50,110 C400,60 500,810 1000,460 C1250,280 1300,760 1550,710"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4.6, delay: 0.3, ease: 'easeInOut' }}
          />
        </g>
      </svg>
    </div>
  );
}
