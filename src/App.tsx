import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, Heart, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import config from './config.json';

// Eagerly loaded components (above-the-fold)
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazily loaded components (below-the-fold)
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const InstagramFeed = lazy(() => import('./components/InstagramFeed'));
const Booking = lazy(() => import('./components/Booking'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  // 1. Initial configuration, preloading sequence, and Theme state syncing
  useEffect(() => {
    // Check local storage or system preferences for dark mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Preloading intro timeout
    const preloaderTimer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(preloaderTimer);
  }, []);

  // 2. Track global scroll progress for header indicator
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // 3. Dark mode toggler
  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // 4. Scroll to sections smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 5. Connect "Book Now" in Service Cards to Booking Form
  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen text-neutral-800 dark:text-neutral-100 transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. LUXURY INTRO PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center p-6 text-center bg-[#FFFBF7] dark:bg-neutral-950 transition-colors duration-300"
          >
            <div className="relative flex flex-col items-center max-w-sm">
              
              {/* Logo & Border Container */}
              <div className="relative w-28 h-28 flex items-center justify-center mb-5">
                {/* Spinning Accent Border */}
                <div className="absolute inset-0 border border-dashed border-gold-300/40 rounded-full animate-spin-slow" />
                
                {/* Round Logo */}
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl border border-gold-300/30 bg-[#120C0A] flex items-center justify-center relative">
                  <img 
                    src="/images/logo-round.jpg" 
                    alt="The Glambar Logo" 
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
              </div>

              {/* Title & Tag */}
              <h2 className="font-serif text-xl font-bold tracking-widest text-[#120C0A] dark:text-[#FFFBF7] uppercase">
                {config.business.brandName}
              </h2>
              <p className="text-[10px] tracking-[0.25em] text-gold-600 dark:text-gold-400 font-bold uppercase mt-1.5 max-w-[280px] leading-relaxed">
                {config.business.slogan}
              </p>

              {/* Custom High-Aesthetic Pulse line Loader */}
              <div className="w-16 h-[1.5px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mt-6 relative">
                <div className="absolute h-full w-1/2 bg-linear-to-r from-gold-300 to-gold-500 rounded-full animate-progress" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PROGRESS BAR INDICATOR */}
      <div 
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-[3px] bg-linear-to-r from-gold-300 via-gold-500 to-blush-400 z-100 transition-all duration-100"
      />

      {/* 3. PRIMARY PAGE MODULES */}
      {!loading && (
        <div className="relative">
          
          {/* Header Navigation */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Core Landing Page Sections */}
          <Hero onScrollToSection={scrollToSection} />
          
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[40vh] bg-transparent">
              <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <About />
            
            <Services onBookService={handleBookService} />
            
            <WhyChooseUs />

            {/* Testimonials Segment */}
            <Testimonials />

            {/* LUXURY GOOGLE REVIEWS STRIPE */}
            <section className="py-12 bg-white dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900 transition-colors duration-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-br from-gold-50/40 via-nude-50/20 to-transparent dark:from-neutral-900/40 p-8 rounded-3xl border border-gold-300/10">
                  
                  {/* Google Verified Seal */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xl font-bold text-blue-500 shadow-xs">
                      G
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-100">
                          Google Verified Reviews
                        </h4>
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex text-amber-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                          ))}
                        </div>
                        <span className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200">5.0 / 5.0 Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
                    <div className="text-center lg:text-left">
                      <p className="text-2xl font-bold font-serif text-luxury-gradient">{config.reviews.verifiedCount}</p>
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">Verified Client Reviews</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-2xl font-bold font-serif text-luxury-gradient">{config.reviews.sanitization}</p>
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">Sanitization Standard</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-2xl font-bold font-serif text-luxury-gradient">{config.reviews.brandStandard}</p>
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">Nail Brand Standard</p>
                    </div>
                  </div>

                  {/* Live Link action */}
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 hover:text-gold-700 transition-colors group cursor-pointer"
                  >
                    <span>Experience it yourself</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>
              </div>
            </section>

            <FAQ />
            
            <InstagramFeed />
            
            <Booking preselectedService={selectedService} />
            
            <Contact />
            
            <Footer onOpenPolicy={() => setShowPolicyModal(true)} />

            {/* 4. FLOATING PULSING WHATSAPP INTERACTION */}
            <WhatsAppButton />

            {/* 5. PAYMENTS & DELIVERY POLICY MODAL */}
            <AnimatePresence>
              {showPolicyModal && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
                >
                  <motion.div
                    initial={{ scale: 0.95, y: 15 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 15 }}
                    className="relative w-full max-w-2xl bg-[#FFFBF7] dark:bg-neutral-900 border border-gold-300/20 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center bg-gradient-to-r from-gold-50/20 to-transparent dark:from-neutral-900/50">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-gold-500" />
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100">
                          Payments & Delivery Policy
                        </h3>
                      </div>
                      <button
                        onClick={() => setShowPolicyModal(false)}
                        className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Content Scroll Area */}
                    <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed [scrollbar-width:thin]">
                      
                      {/* WhatsApp Order Highlight Banner */}
                      <div className="bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <h4 className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            Order & Pay via WhatsApp
                          </h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            We accept orders and payment validation directly through WhatsApp. Tap the button to message us!
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            window.open("https://wa.me/919327557465?text=Hello%20The%20Glambar!%20I%20would%20like%20to%20order%20premium%20nail%20products.", "_blank");
                          }}
                          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap self-start sm:self-center"
                        >
                          Chat at +91 93275 57465
                        </button>
                      </div>

                      {/* Policy Details */}
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <h4 className="font-serif text-sm font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">
                            1. How to Order
                          </h4>
                          <p className="text-xs sm:text-sm">
                            Browse our product offerings on the site and contact us directly via WhatsApp at **+91 93275 57465** to place your order. Our team will verify availability, calculate shipping costs, and help you finalize your order detail.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-serif text-sm font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">
                            2. Payment Policy
                          </h4>
                          <p className="text-xs sm:text-sm">
                            Payments are handled securely via WhatsApp using **UPI** (Google Pay, PhonePe, Paytm), Net Banking, or Bank Transfer. Rajkot clients can also opt for Cash on local collection. **Full payment is required before your package is dispatched.** Once transfer is done, share a transaction screenshot to confirm.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-serif text-sm font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">
                            3. Shipping & Delivery Times
                          </h4>
                          <p className="text-xs sm:text-sm">
                            We ship premium nail and beauty supplies across India:
                          </p>
                          <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1">
                            <li>**Within Gujarat**: 2–4 business days</li>
                            <li>**Rest of India**: 3–7 business days</li>
                          </ul>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            *Orders are processed and dispatched within **1–2 business days** after payment confirmation.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-serif text-sm font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">
                            4. Tracking Your Order
                          </h4>
                          <p className="text-xs sm:text-sm">
                            As soon as your parcel is shipped, we will send the tracking ID and link directly to your WhatsApp thread so you can follow the package in real-time.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-serif text-sm font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">
                            5. Returns & Exchange
                          </h4>
                          <p className="text-xs sm:text-sm">
                            Due to sanitation and personal hygiene standards for nail and cosmetic products, we do not accept returns or exchanges. If your parcel is damaged or incorrect upon arrival, notify us on WhatsApp with photos within **48 hours of delivery** to arrange a resolution.
                          </p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Suspense>

        </div>
      )}

    </div>
  );
}
