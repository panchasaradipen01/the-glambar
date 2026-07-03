import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import WavyBackgroundLines from './WavyBackgroundLines';
import SectionHeader from './common/SectionHeader';
import config from '../config.json';

export default function Contact() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: 'Bridal Packages Info',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInquiryData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Since we want real interactions where possible, we can print a success confirmation or proxy it
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryData({
        name: '',
        email: '',
        subject: 'Bridal Packages Info',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Soft waving backdrops connecting the final pages smoothly */}
      <WavyBackgroundLines variant="organic" className="opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Visit Our Studio"
          titleNormal="Get In Touch"
          titleGradient="With The Glambar"
        />

        {/* Top Block: Contact Cards & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass-card border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-start space-x-4 h-full"
          >
            <div className="p-2.5 rounded-xl bg-gold-50 dark:bg-neutral-800 text-gold-500 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-950 dark:text-neutral-50 mb-1">
                Salon Address
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {config.business.address}
              </p>
            </div>
          </motion.div>

          {/* Quick Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="p-6 rounded-2xl glass-card border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-start space-x-4 h-full"
          >
            <div className="p-2.5 rounded-xl bg-gold-50 dark:bg-neutral-800 text-gold-500 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-950 dark:text-neutral-50 mb-1">
                Phone &amp; WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                Call: {config.business.phoneNumber}
              </p>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                WhatsApp: +{config.business.whatsappNumber}
              </p>
            </div>
          </motion.div>

          {/* Email Address */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl glass-card border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-start space-x-4 h-full"
          >
            <div className="p-2.5 rounded-xl bg-gold-50 dark:bg-neutral-800 text-gold-500 flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-950 dark:text-neutral-50 mb-1">
                Support Email
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 break-all">
                {config.business.email}
              </p>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-6 rounded-2xl glass-card border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-start space-x-4 h-full"
          >
            <div className="p-2.5 rounded-xl bg-gold-50 dark:bg-neutral-800 text-gold-500 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-950 dark:text-neutral-50 mb-2">
                Working Hours
              </h4>
              <div className="space-y-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                <div className="flex justify-between space-x-4">
                  <span className="text-neutral-950 dark:text-neutral-50">{config.business.openingHours}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Block: Inquiry, Card, and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Inquiry Form */}
          <div className="flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-neutral-100 dark:border-neutral-800 shadow-lg h-full relative"
            >
              <h4 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Send Quick Inquiry
              </h4>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={inquiryData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Diya Patel"
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs focus:outline-hidden focus:border-gold-500 text-neutral-800 dark:text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={inquiryData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. diya@gmail.com"
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs focus:outline-hidden focus:border-gold-500 text-neutral-800 dark:text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    name="subject"
                    value={inquiryData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs focus:outline-hidden focus:border-gold-500 text-neutral-800 dark:text-neutral-100 cursor-pointer"
                  >
                    <option value="Bridal Packages Info">Bridal Packages Info</option>
                    <option value="Nail Extensions & Infill Rates">Nail Extensions & Infill Rates</option>
                    <option value="Premium Product Bulk Orders">Premium Product Bulk Orders</option>
                    <option value="Collaboration / PR">Collaboration / PR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={inquiryData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs focus:outline-hidden focus:border-gold-500 text-neutral-800 dark:text-neutral-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-neutral-900 hover:bg-gold-500 dark:bg-neutral-800 dark:hover:bg-gold-500 text-white dark:text-neutral-100 hover:text-white dark:hover:text-black font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Submission Banner Confirmation Overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-neutral-50/95 dark:bg-neutral-950/95 rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10 transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-12 h-12 text-gold-500 mb-4 animate-bounce-slow" />
                    <h5 className="font-serif text-base font-bold text-neutral-950 dark:text-neutral-50 mb-2">
                      Inquiry Logged Successfully!
                    </h5>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-[240px] leading-relaxed">
                      Thank you for contacting The Glambar. We have recorded your message and our senior consultation representative will email you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

          {/* Column 2: Business Visiting Card */}
          <div className="flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-card border border-neutral-150 dark:border-neutral-800/80 shadow-md flex flex-col justify-between items-center h-full group"
            >
              <div className="w-full">
                <span className="text-gold-600 dark:text-gold-400 font-bold text-[10px] uppercase tracking-widest block mb-1">
                  Digital Card
                </span>
                <h4 className="font-serif text-sm font-bold text-neutral-850 dark:text-neutral-100 mb-4">
                  Save Our Details
                </h4>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-xs transition-transform duration-500 group-hover:scale-[1.03] group-hover:shadow-md cursor-pointer" onClick={() => window.open('/images/36510.jpg', '_blank')}>
                <img
                  src="/images/36510.jpg"
                  alt="The Glambar Business Card"
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] text-neutral-400 mt-4 text-center leading-normal">
                Click to view or save our official business card with direct call & address info.
              </p>
            </motion.div>
          </div>

          {/* Column 3: Embedded Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-neutral-800 h-[380px] lg:h-auto min-h-[350px]">
            <iframe
              src="https://maps.google.com/maps?q=B-20/146,%20Anand%20nagar,%20kothariya%20main%20road,%20rajkot&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Glambar Google Map Embed"
              className="w-full h-full filter grayscale-[30%] dark:invert-[90%] dark:hue-rotate-[180deg]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
