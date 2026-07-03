import { motion } from 'motion/react';
import { Award, Heart, ShieldAlert, Sparkles, Smile, Users } from 'lucide-react';
import ThreeDIllustration from './ThreeDIllustration';
import WavyBackgroundLines from './WavyBackgroundLines';
import SectionHeader from './common/SectionHeader';
import config from '../config.json';

export default function About() {
  const stats = config.stats;

  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-gold-500" />,
      title: 'Certified Nail Specialist',
      desc: 'Formally trained in custom sculpted acrylic/gel structures and high-precision nail-shaping.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-500" />,
      title: 'Premium Product Selection',
      desc: 'Retail products from premium global brands like Shills, Emigel, Venalisa, and Recolte for nail lovers.'
    },
    {
      icon: <Heart className="w-5 h-5 text-gold-500" />,
      title: 'Bespoke Consultations',
      desc: 'We map nail shapes and customized product selection to match your aesthetic and personal style perfectly.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-gold-500" />,
      title: '100% Safe & Hygienic',
      desc: 'Using top-tier non-toxic materials, organic elixirs, and autoclave sterilization for your complete safety.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">

      {/* Elegantly streaming continuous background lines linking sections */}
      <WavyBackgroundLines variant="organic" className="opacity-40" />

      {/* Background elegant serif typography for 3D depth */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.025 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute -right-12 font-serif text-[12vw] font-light uppercase tracking-[0.2em] text-gold-500 dark:text-gold-200 italic"
        >
          Artistry
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Collage Column (Framer Motion scroll reveal) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Main Image (Salon Interior) */}
              <div className="relative rounded-3xl overflow-hidden aspect-3/4 shadow-2xl border-4 border-white dark:border-neutral-800">
                <img
                  src="/images/36540.png"
                  alt="The Glambar Studio Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-base sm:text-lg italic">"{config.business.aboutQuote}"</p>
                  <p className="text-[10px] tracking-wider uppercase text-gold-300 font-semibold mt-1">— {config.business.aboutQuoteAuthor}</p>
                </div>
              </div>
            </motion.div>

            {/* Background design elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gold-200/20 dark:bg-gold-800/10 blur-2xl -z-10" />
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-blush-200/20 dark:bg-blush-900/10 blur-2xl -z-10" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                tag="Since 2021"
                titleNormal="Luxury Nails &"
                titleGradient="Premium Products"
                align="left"
                className="!mb-6"
              />

              <p className="text-neutral-850 dark:text-neutral-200 leading-relaxed mb-6 text-sm sm:text-base">
                {config.business.aboutText1}
              </p>

              <p className="text-neutral-850 dark:text-neutral-200 leading-relaxed mb-10 text-sm sm:text-base">
                {config.business.aboutText2}
              </p>
            </motion.div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex space-x-3.5"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-gold-50 dark:bg-neutral-850 border border-gold-300/20 flex items-center justify-center">
                      {p.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-neutral-950 dark:text-neutral-50">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Metrics Counters Section */}
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="text-center sm:text-left"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-luxury-gradient block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium mt-1 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
