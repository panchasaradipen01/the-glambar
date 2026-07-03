import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Clock, User, Phone, CheckCircle, MessageSquare } from 'lucide-react';
import { servicesData } from '../data';
import WavyBackgroundLines from './WavyBackgroundLines';
import SectionHeader from './common/SectionHeader';
import config from '../config.json';

interface BookingProps {
  preselectedService: string;
}

export default function Booking({ preselectedService }: BookingProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '11:00 AM',
    notes: ''
  });
  const [success, setSuccess] = useState(false);

  // Sync preselectedService state whenever it changes (e.g., when clicking "Book Now" on a service card)
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
      // Scroll to booking section smoothly
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedService]);

  const timeSlots = [
    '09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (slot: string) => {
    setFormData(prev => ({ ...prev, time: slot }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      alert('Please fill out all required fields.');
      return;
    }

    // Format beautifully compiled message for WhatsApp
    const waNumber = config.business.whatsappNumber; // Dynamic Salon WhatsApp number
    const baseMsg = `Hello ${config.business.brandName}! \uD83D\uDC96\n\nI would like to request an appointment for a premium makeover:\n\n\u2728 *Client Name:* ${formData.name}\n\uD83D\uDCDE *Contact:* ${formData.phone}\n\uD83D\uDC85 *Selected Service:* ${formData.service}\n\uD83D\uDCC5 *Preferred Date:* ${formData.date}\n\u23F0 *Preferred Time:* ${formData.time}\n\uD83D\uDCAC *Additional Notes:* ${formData.notes || 'None'}\n\nPlease confirm availability for my slot!`;
    const encodedMsg = encodeURIComponent(baseMsg);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${encodedMsg}`, '_blank');
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      // Reset form (except service)
      setFormData(prev => ({
        ...prev,
        name: '',
        phone: '',
        notes: ''
      }));
    }, 4000);
  };

  const handleDirectCall = () => {
    window.open(`tel:${config.business.phoneNumber.replace(/\s+/g, '')}`, '_self');
  };

  return (
    <section id="booking" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Elegantly streaming diagonal lines connecting the section */}
      <WavyBackgroundLines variant="stream" className="opacity-40" />
      
      {/* Background drifting typography */}
      <div className="absolute inset-x-0 top-1/4 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-8 font-serif text-[11vw] font-bold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-200"
        >
          Reserve
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text/CTA Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                tag="Secure Your Slot"
                titleNormal="Ready for Your"
                titleGradient="Luxury Nail Session?"
                align="left"
                className="!mb-6"
              />
              
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 text-sm sm:text-base">
                Whether you want customized extensions, hand-painted artwork, or premium overlay sessions, allow our master artists to sculpt your ideal hands.
              </p>

              {/* Booking Perks */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span>Interactive instant WhatsApp routing</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span>Free 1-on-1 custom nail shape styling</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span>Zero reservation booking fees</span>
                </div>
              </div>

              {/* Alternate Quick Call Out Options */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDirectCall}
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 border border-neutral-300 dark:border-neutral-800 hover:border-gold-500 hover:text-gold-500 text-neutral-700 dark:text-neutral-300 text-xs uppercase tracking-wider rounded-full font-bold transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now: {config.business.phoneNumber}</span>
                </button>
              </div>

            </motion.div>
          </div>

          {/* Right Booking Widget Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-neutral-100 dark:border-neutral-900/60 shadow-2xl relative"
            >
              {/* Glowing decorative frame */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/10 dark:bg-gold-800/5 rounded-full blur-xl -z-10" />
              
              <div className="flex items-center space-x-2.5 mb-8">
                <div className="p-2 bg-gold-500 text-white rounded-lg shadow-sm">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100">
                  Bespoke Appointment Booking
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Meera Singhania"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-hidden focus:border-gold-500 transition-colors text-neutral-800 dark:text-neutral-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                      WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-hidden focus:border-gold-500 transition-colors text-neutral-800 dark:text-neutral-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-hidden focus:border-gold-500 transition-colors text-neutral-800 dark:text-neutral-100 cursor-pointer"
                    >
                      <option value="">-- Choose Services --</option>
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-hidden focus:border-gold-500 transition-colors text-neutral-800 dark:text-neutral-100 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Time Slots Chips Selection */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mb-2 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Select Time Slot *</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = formData.time === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleTimeSelect(slot)}
                          className={`py-2 px-1 rounded-lg text-xs font-semibold text-center transition-all ${
                            isSelected
                              ? 'bg-gold-500 text-white shadow-xs'
                              : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-800/80 hover:border-gold-400'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                    Additional Requests / Custom Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Prefer almond shape gel extensions, specific hand-painted chrome artwork, custom sizes, etc."
                    rows={3}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-hidden focus:border-gold-500 transition-colors text-neutral-800 dark:text-neutral-100"
                  />
                </div>

                {/* Submit Trigger Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer group hover:scale-101"
                >
                  <MessageSquare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Book Appointment on WhatsApp</span>
                </button>

              </form>

              {/* Success Confirmation Notification Overlay */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-6 bottom-6 bg-emerald-500 text-white p-4 rounded-xl flex items-center space-x-3 shadow-xl z-20"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold">WhatsApp Ticket Formulated!</p>
                      <p className="opacity-90">Opening chat. Please tap send in WhatsApp to submit.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
