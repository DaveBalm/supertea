import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Users, Percent, Gift, Send, X, AlertCircle } from 'lucide-react';

interface ResellerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResellerModal({ isOpen, onClose }: ResellerModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsLoading(true);
    // Simulate API call to register reseller waitlist
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-950/80 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-brand-100 shadow-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 bg-brand-900 text-white flex items-center justify-between relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 space-y-1">
                <span className="inline-flex items-center gap-1 bg-brand-800 text-brand-200 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-brand-700">
                  ⚡ Earn While Sharing Wellness
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  3-Generation Reseller Program
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brand-800/80 hover:bg-brand-700 text-white flex items-center justify-center cursor-pointer transition-colors relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {!isSubmitted ? (
                <>
                  {/* Explanation card */}
                  <div className="bg-brand-50 border border-brand-100 rounded-2xl p-4 sm:p-5 space-y-3">
                    <h4 className="font-serif font-bold text-brand-950 text-sm sm:text-base flex items-center gap-2">
                      <Users className="w-5 h-5 text-brand-700" />
                      What is the 3-Generation Referral System?
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-700 leading-relaxed">
                      If you've experienced the healing power of Dr. David Super Tea, you can now <strong className="text-brand-950">Testify & Earn</strong>. Share your authentic testimony with friends or family, give them your unique affiliate link, and receive generous commissions up to three levels deep!
                    </p>

                    {/* Commissions Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="bg-white p-3 rounded-xl border border-brand-200/80 text-center space-y-1">
                        <span className="text-[10px] uppercase font-bold text-brand-500 block">Gen 1 (Direct)</span>
                        <div className="text-lg sm:text-xl font-black text-emerald-700">20%</div>
                        <span className="text-[9px] text-brand-600 block">Of direct sales</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-brand-200/80 text-center space-y-1">
                        <span className="text-[10px] uppercase font-bold text-brand-500 block">Gen 2 (T2)</span>
                        <div className="text-lg sm:text-xl font-black text-brand-800">7%</div>
                        <span className="text-[9px] text-brand-600 block">Indirect sub-sales</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-brand-200/80 text-center space-y-1">
                        <span className="text-[10px] uppercase font-bold text-brand-500 block">Gen 3 (T3)</span>
                        <div className="text-lg sm:text-xl font-black text-brand-600">3%</div>
                        <span className="text-[9px] text-brand-600 block">Deep tier passive</span>
                      </div>
                    </div>
                  </div>

                  {/* Informational Waitlist Ribbon */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed font-medium">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>COMING SOON:</strong> We are currently building the automated reseller tracking dashboard. Sign up below to join our exclusive beta launch list and secure a lifetime priority commission rate!
                    </span>
                  </div>

                  {/* Onboarding Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-800 block">
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Adebayo Kunle"
                          className="block w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 outline-hidden transition-all bg-brand-50/20"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-800 block">
                          Email Address <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. adebayo@gmail.com"
                          className="block w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 outline-hidden transition-all bg-brand-50/20"
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-800 block">
                        WhatsApp Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        placeholder="e.g. +234 813 541 7227"
                        className="block w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 outline-hidden transition-all bg-brand-50/20"
                      />
                      <p className="text-[10px] text-brand-500 italic">WhatsApp is required for onboarding training and sales material deployment.</p>
                    </div>

                    {/* Optional Testimonial / Story */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-800 block">
                        Your Testimonial or Motivation <span className="text-brand-400">(Optional)</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={3}
                        placeholder="Briefly state your experience with Dr. David Super Tea or why you'd like to join us..."
                        className="block w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 outline-hidden transition-all bg-brand-50/20 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm sm:text-base py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
                    >
                      {isLoading ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                          <span>SUBMITTING REGISTRATION...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>JOIN THE RESELLER WAITLIST NOW</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto text-3xl animate-bounce">
                    ✓
                  </div>
                  <h4 className="text-xl font-serif font-bold text-brand-950">
                    Registration Successful!
                  </h4>
                  <div className="max-w-md mx-auto space-y-2">
                    <p className="text-sm text-brand-700 leading-relaxed">
                      Thank you <strong className="text-brand-950">{formData.name}</strong> for joining our early reseller waitlist! We have successfully reserved your position in our priority 3-generation payout pool.
                    </p>
                    <p className="text-xs text-brand-600 bg-brand-50 border border-brand-100 p-3 rounded-xl leading-relaxed">
                      📧 A confirmation email has been dispatched to <strong>{formData.email}</strong>. Our onboarding team will contact you via WhatsApp (<strong>{formData.whatsapp}</strong>) as soon as the tracking portal goes live.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-4 bg-brand-950 hover:bg-brand-900 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
