import { Sparkles, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import config from '../config.json';

export default function Footer({ onOpenPolicy }: { onOpenPolicy?: () => void }) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const instagramUrl = config.business.instagramUrl;

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={handleScrollToTop}>
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-gold-400/25">
                <img 
                  src="/logo.png" 
                  alt="The Glambar Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">
                  {config.business.brandName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold-400 font-medium -mt-1">
                  {config.business.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm">
              {config.business.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-gold-400 hover:border-gold-500 hover:scale-105 transition-all flex items-center justify-center"
                aria-label="Follow The Glambar on Instagram"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-[18px] h-[18px]"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${config.business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-gold-400 hover:border-gold-500 hover:scale-105 transition-all flex items-center justify-center"
                aria-label={`Chat with ${config.business.brandName} on WhatsApp`}
              >
                <svg 
                  viewBox="0 0 448 512" 
                  className="w-[18px] h-[18px] fill-current"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-gold-400 hover:border-gold-500 hover:scale-105 transition-all flex items-center justify-center"
                aria-label="Follow The Glambar on Facebook"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-[18px] h-[18px] fill-current"
                >
                  <path d="M24 12a12 12 0 10-13.875 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385A12 12 0 0024 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {['Home', 'About', 'Services', 'Testimonials', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item.toLowerCase())}
                    className="hover:text-gold-400 transition-colors block text-neutral-500 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Studio Inquiry
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-500 font-medium">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{config.business.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{config.business.phoneNumber}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{config.business.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-600">
          <p className="text-center sm:text-left">
            © {currentYear} {config.business.brandName} {config.business.slogan}. All Rights Reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              Instagram
            </a>
            <span>•</span>
            <a href={`https://wa.me/${config.business.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              WhatsApp
            </a>
            {onOpenPolicy && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenPolicy}
                  className="hover:text-gold-400 transition-colors cursor-pointer"
                >
                  Payments & Delivery
                </button>
              </>
            )}
            <span>•</span>
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-1 hover:text-gold-400 transition-colors uppercase tracking-wider text-[10px] font-bold group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
