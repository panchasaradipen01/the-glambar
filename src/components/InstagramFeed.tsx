import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { instagramFeed } from '../data';

export default function InstagramFeed() {
  const profileUrl = 'https://www.instagram.com/the_glambar.__?igsh=MWVicXljbjlxOHF3Ng==';

  const handlePostClick = () => {
    window.open(profileUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 font-semibold text-xs uppercase tracking-widest block mb-3">
            Social Connection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 dark:text-white tracking-tight mb-2">
            Follow Us <span className="italic text-luxury-gradient">On Instagram</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
            Join our community of over 5k beauty lovers at <span className="font-semibold text-gold-600 dark:text-gold-400 hover:underline cursor-pointer" onClick={() => window.open(profileUrl, '_blank')}>@the_glambar.__</span>
          </p>
        </div>

        {/* Mock Live Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramFeed.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-full min-h-[180px] sm:min-h-0 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-neutral-100 dark:border-neutral-800"
              onClick={handlePostClick}
            >
              <img
                src={post.image}
                alt={`Instagram Post ${idx + 1}`}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay displaying stats and caption snippet */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex items-center justify-end">
                  <Instagram className="w-4 h-4 text-white/80" />
                </div>

                <div className="text-center text-white my-auto">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                      <span className="text-xs font-bold font-mono">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-sky-400 fill-sky-400" />
                      <span className="text-xs font-bold font-mono">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-white/95 line-clamp-2 px-1 text-left leading-normal italic">
                    "{post.caption}"
                  </p>
                </div>

                <div className="text-center text-[9px] uppercase tracking-widest text-gold-400 font-semibold flex items-center justify-center space-x-1">
                  <span>View Post</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* QR Code Card to fill the empty space */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-3 lg:col-span-3 rounded-2xl overflow-hidden glass-card border border-gold-300/20 dark:border-gold-800/30 p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 h-full"
          >
            {/* Left side text */}
            <div className="hidden sm:flex flex-col justify-between h-full py-1">
              <div>
                <span className="text-gold-600 dark:text-gold-400 font-bold text-[10px] uppercase tracking-widest block mb-1">
                  Scan to Connect
                </span>
                <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
                  Follow Our Journey
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-3 max-w-[240px] leading-relaxed">
                  Scan the QR code with your phone camera to view our Instagram profile, latest nail art trends, and behind-the-scenes stories.
                </p>
              </div>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gold-600 dark:text-gold-400 hover:text-gold-700 transition-colors"
              >
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right side QR Code */}
            <div 
              className="relative w-full h-full sm:w-44 sm:h-44 flex items-center justify-center bg-white rounded-xl p-3 border border-neutral-100 dark:border-neutral-800 shadow-inner group/qr cursor-pointer" 
              onClick={handlePostClick}
            >
              <img
                src="/images/instagram-qr.png"
                alt="Instagram QR Code"
                className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover/qr:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
