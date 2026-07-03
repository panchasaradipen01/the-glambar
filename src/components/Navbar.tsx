import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Phone, Sparkles } from 'lucide-react';
import config from '../config.json';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? 'glass-navbar py-3 shadow-md'
            : 'bg-white/30 dark:bg-neutral-950/35 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2.5 cursor-pointer group"
              onClick={() => handleLinkClick('home')}
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow-md border border-gold-300/35">
                <img 
                  src="/logo.png" 
                  alt="The Glambar Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-neutral-900 dark:text-white group-hover:text-gold-500 transition-colors uppercase">
                  {config.business.brandName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold-600 dark:text-gold-400 font-medium -mt-1">
                  {config.business.slogan}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                    activeSection === link.id
                      ? 'text-gold-600 dark:text-gold-400'
                      : 'text-neutral-700 hover:text-gold-500 dark:text-neutral-300 dark:hover:text-gold-300'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              {/* Quick Book Button */}
              <button
                onClick={() => handleLinkClick('booking')}
                className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-medium text-xs tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 scale-100 hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu & Theme Buttons */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-neutral-50 dark:bg-neutral-950 p-6 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-16">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-left py-3 text-lg font-serif tracking-widest uppercase border-b border-neutral-200/50 dark:border-neutral-800/50 ${
                        activeSection === link.id
                          ? 'text-gold-600 dark:text-gold-400 font-semibold'
                          : 'text-neutral-800 dark:text-neutral-200'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                <button
                  onClick={() => handleLinkClick('booking')}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-linear-to-r from-gold-500 to-gold-600 text-white font-medium text-sm tracking-widest uppercase rounded-full shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book Slot</span>
                </button>
                <p className="text-center text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  © {new Date().getFullYear()} {config.business.brandName.toUpperCase()}. ALL RIGHTS RESERVED.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
