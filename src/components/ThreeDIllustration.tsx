import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ThreeDIllustrationProps {
  variant?: 'hero' | 'about' | 'service';
  className?: string;
}

export default function ThreeDIllustration({ variant = 'hero', className = '' }: ThreeDIllustrationProps) {
  const isAbout = variant === 'about';
  const imgSrc = '/hands.png';
  const altText = 'The Glambar Hands Artistry';

  return (
    <div className={`relative w-full aspect-square max-w-[560px] mx-auto flex items-center justify-center ${className}`}>
      {/* Soft background aura (Premium light gold / dark luxury brown glow) */}
      <div className="absolute inset-4 rounded-full bg-radial from-gold-100/40 via-gold-50/5 to-transparent dark:from-gold-950/15 dark:to-transparent blur-3xl -z-10" />

      {/* Soft organic backing shapes */}
      <div className="absolute inset-12 bg-linear-to-tr from-gold-100/20 via-blush-100/10 to-transparent dark:from-gold-950/10 dark:to-transparent rounded-[40%_60%_70%_30%] blur-3xl animate-pulse -z-10" />

      {/* Dynamic Client Image with Framer Motion entry and floating animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -8, 0] // Subtle float animation
        }}
        transition={{
          opacity: { duration: 1.0, ease: 'easeOut' },
          scale: { duration: 1.0, ease: 'easeOut' },
          y: { 
            repeat: Infinity, 
            duration: 6, 
            ease: 'easeInOut' 
          }
        }}
        className="w-full h-full flex items-center justify-center p-0"
      >
        <img 
          src={imgSrc} 
          alt={altText} 
          className="max-w-full max-h-full object-contain rounded-2xl filter drop-shadow-[0_10px_25px_rgba(210,144,116,0.15)] dark:drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)] hands-line-art"
        />
      </motion.div>

      {/* Interactive floating sparkles around the image */}
      {Array.from({ length: 4 }).map((_, i) => {
        const delays = [0.2, 0.6, 1.0, 1.4];
        const positions = [
          { top: '8%', left: '15%' },
          { top: '15%', right: '12%' },
          { bottom: '12%', left: '10%' },
          { bottom: '20%', right: '15%' }
        ];
        return (
          <motion.div
            key={i}
            style={{ position: 'absolute', ...positions[i] }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.85, 0],
              scale: [0, 1, 0],
              y: [0, -12, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
              delay: delays[i],
              ease: 'easeInOut'
            }}
            className="text-gold-500"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        );
      })}
    </div>
  );
}
