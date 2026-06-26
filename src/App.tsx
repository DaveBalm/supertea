import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Phone, Sparkles, ShieldCheck, HeartPulse, ArrowRight, MessageCircle } from 'lucide-react';
import HeaderBanner from './components/HeaderBanner';
import PainPoints from './components/PainPoints';
import ProductBenefits from './components/ProductBenefits';
import UrgencyCard from './components/UrgencyCard';
import Testimonials from './components/Testimonials';
import MediaGallery from './components/MediaGallery';
import OrderForm from './components/OrderForm';
import SuccessView from './components/SuccessView';
import FAQ from './components/FAQ';
import { OrderRecord } from './types';

export default function App() {
  const [activeOrder, setActiveOrder] = useState<OrderRecord | null>(null);

  // Load order from localStorage if it exists to maintain session persistent state
  useEffect(() => {
    const savedOrder = localStorage.getItem('dr_david_super_tea_order');
    if (savedOrder) {
      try {
        setActiveOrder(JSON.parse(savedOrder));
      } catch (e) {
        console.error('Error loading saved order', e);
      }
    }
  }, []);

  const handleOrderSubmitted = (order: OrderRecord) => {
    setActiveOrder(order);
    localStorage.setItem('dr_david_super_tea_order', JSON.stringify(order));
    // Scroll to top to see success state
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetOrder = () => {
    setActiveOrder(null);
    localStorage.removeItem('dr_david_super_tea_order');
  };

  const scrollToOrderForm = () => {
    const element = document.getElementById('order-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Floating CTA appears after scrolling past hero
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50/20 text-brand-950 selection:bg-brand-200 selection:text-brand-900 font-sans antialiased">
      {/* 1. Quality & Trust Bar */}
      <HeaderBanner />

      <AnimatePresence mode="wait">
        {activeOrder ? (
          // Success State Dashboard
          <main key="success" className="py-12 px-4 max-w-7xl mx-auto">
            <SuccessView order={activeOrder} onReset={handleResetOrder} />
          </main>
        ) : (
          // Landing Page State
          <main key="landing" className="relative pb-24">
            
            {/* 2. PREMIUM HERO BLOCK - THE HOOK */}
            <section id="hero" className="relative bg-gradient-to-br from-brand-900 via-brand-950 to-emerald-950 text-brand-100 py-16 sm:py-24 px-4 overflow-hidden border-b border-brand-850">
              {/* Background botanical matrix design */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#88b088_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
              
              <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8">
                
                {/* Organic Trust Label */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shadow-xs"
                >
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TRADITIONAL WEST AFRICAN HERBAL RESTORATIVE</span>
                </motion.div>

                {/* Primary Hook Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl sm:text-5xl md:text-5.5xl font-serif font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
                >
                  Tired of Constant Malaria, Typhoid, and Mysterious Body Pains That Keep Coming Back?
                </motion.h1>

                {/* Subheadline description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="text-brand-200 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
                >
                  Discover the potent, 100% plant-based natural healing tea that flushes out deep-seated toxins, eliminates recurring infections, and restores your vibrant health in days.
                </motion.p>

                {/* Hero Call to Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                  <button
                    onClick={scrollToOrderForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-brand-950 font-black text-sm sm:text-base py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
                  >
                    SECURE YOUR TEA PACKAGE NOW
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                  
                  <span className="text-xs sm:text-sm text-brand-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Pay Only On Delivery (POD)
                  </span>
                </motion.div>

                {/* Quick Trust Badges in Hero */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 sm:pt-12 border-t border-brand-850 text-xs text-brand-300"
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-emerald-400 text-base">✓</span>
                    <span>No Synthetic Chemicals</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-emerald-400 text-base">✓</span>
                    <span>100% Organic Herbs</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-emerald-400 text-base">✓</span>
                    <span>Gentle on Your Stomach</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-emerald-400 text-base">✓</span>
                    <span>Guaranteed High Potency</span>
                  </div>
                </motion.div>

              </div>
            </section>

            {/* 3. AGITATING PAIN SECTION */}
            <PainPoints />

            {/* 4. PRODUCT BENEFITS & SCIENCE */}
            <ProductBenefits />

            {/* 5. URGENCY & SCARCITY CARD */}
            <UrgencyCard />

            {/* 5.3. PRODUCT VIDEO & IMAGE GALLERY */}
            <MediaGallery />

            {/* 5.5. VERIFIED TESTIMONIALS */}
            <Testimonials />

            {/* 6. CONVERSION ORDER FORM */}
            <OrderForm onSubmitOrder={handleOrderSubmitted} />

            {/* 7. FREQUENTLY ASKED QUESTIONS */}
            <FAQ />

            {/* 8. DIRECT PHONE/WHATSAPP SUPPORT SECTION */}
            <section id="support-section" className="py-12 px-4 bg-brand-50/30 text-center border-t border-brand-100">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto text-brand-700">
                  <Phone className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-950">
                  Have Questions Before Ordering?
                </h3>
                <p className="text-sm sm:text-base text-brand-700 max-w-md mx-auto leading-relaxed">
                  Need to speak with a health representative before ordering? Call or WhatsApp us directly at:
                </p>
                <div className="inline-flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
                  <a 
                    href="tel:08135417227" 
                    className="inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-900 font-bold px-5 py-3 rounded-xl hover:bg-brand-50 transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-brand-600" />
                    08135417227 (Call Us)
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send?phone=2348135417227&text=Hello,%20I'm%20visiting%20the%20landing%20page%20and%20would%20love%20to%20learn%20more%20about%20Dr.%20David%20Super%20Tea." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold px-5 py-3 rounded-xl hover:bg-emerald-100 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/10" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* 9. SECURE TRUST FOOTER */}
            <footer className="bg-brand-950 text-brand-300 py-12 px-4 text-xs text-center border-t border-brand-900">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-2 text-white font-serif font-semibold text-sm sm:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Dr. David Super Tea
                </div>
                <p className="max-w-2xl mx-auto text-brand-400 leading-relaxed text-[11px] sm:text-xs">
                  DISCLAIMER: Dr. David Super Tea is a premium organic herbal formulation made from 100% plant-based ingredients traditional to West African restorative medicine. It contains no artificial additives or preservatives. While highly potent for cleansing, this tea does not substitute professional medical prescriptions for acute clinical emergencies. Always seek physician advice if pregnant or nursing before commencing any herbal regime.
                </p>
                <div className="text-brand-500 pt-4 border-t border-brand-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs">
                  <span>© {new Date().getFullYear()} Dr. David College of Natural Studies. All rights reserved.</span>
                  <div className="flex gap-4">
                    <span>Free Worldwide Standard Delivery</span>
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>
            </footer>

            {/* 10. PERSISTENT FLOATING BAR FOR MOBILE/DESKTOP CONVERSION */}
            <AnimatePresence>
              {showFloatingCta && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-brand-100 p-4 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between gap-4 max-w-7xl mx-auto sm:rounded-t-3xl"
                >
                  <div className="hidden sm:block text-left">
                    <span className="text-[10px] font-bold text-brand-500 uppercase tracking-wider block">Recommended Course</span>
                    <strong className="text-sm text-brand-950">2 Packs Treatment (Save ₦23,000)</strong>
                  </div>
                  <button
                    onClick={scrollToOrderForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 active:scale-98 text-white font-bold text-sm py-3 px-6 sm:px-8 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    🚀 YES! PURIFY MY SYSTEM & ORDER NOW
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

