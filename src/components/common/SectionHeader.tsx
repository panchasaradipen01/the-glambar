import { motion } from 'motion/react';

interface SectionHeaderProps {
  tag?: string;
  titleNormal?: string;
  titleGradient?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  tag,
  titleNormal,
  titleGradient,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {tag && (
        <span className="text-gold-600 dark:text-gold-400 font-semibold text-xs uppercase tracking-widest block mb-3">
          {tag}
        </span>
      )}
      
      {(titleNormal || titleGradient) && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 dark:text-white tracking-tight mb-4">
          {titleNormal}{' '}
          {titleGradient && (
            <span className="italic text-luxury-gradient">{titleGradient}</span>
          )}
        </h2>
      )}

      <div className={`w-20 h-[2px] bg-gold-400 mb-6 ${isCenter ? 'mx-auto' : ''}`} />

      {description && (
        <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
