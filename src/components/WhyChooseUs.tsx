import { motion } from 'motion/react';
import { Award, Gem, Sparkles, Tag, HeartHandshake, Clock, ThumbsUp } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-gold-500" />,
      title: 'Professional Artists',
      desc: 'Our artists are internationally trained, holding premium certifications in custom sculpted nails, extensions, and high-end design artistry.'
    },
    {
      icon: <Gem className="w-6 h-6 text-gold-500" />,
      title: 'Premium Products Only',
      desc: 'We strictly employ premium global nail brands like Shills, Emigel, Venalisa, and Recolte to ensure optimal safety, high durability, and long-lasting vibrance.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: 'Hygienic Environment',
      desc: 'An ultra-sterile, medical-grade clean environment. All nail bits, metal pushers, scissors, and design tools undergo rigorous autoclave sterilization after every single client.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Why Choose Us"
          titleNormal="Setting the Premium"
          titleGradient="Standard in Nail Art"
          description="Sculpting world-class nail art and premium extensions involves more than simple overlays. It requires a flawless blend of hygiene, premium ingredients, and world-certified skill."
        />

        {/* Bento/Flex-style Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              key={index}
              className="p-6 rounded-2xl glass-card border border-neutral-100 dark:border-neutral-900/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gold-50 dark:bg-neutral-800 border border-gold-300/15 flex items-center justify-center mb-5 shadow-xs">
                  {item.icon}
                </div>
                
                <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-950 dark:text-neutral-50 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative gold trace at the bottom */}
              <div className="w-8 h-[2px] bg-gold-300 dark:bg-gold-500 mt-6" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
