import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, ThumbsUp, Quote } from 'lucide-react';
import ResellerModal from './ResellerModal';

interface TestimonialItem {
  name: string;
  location: string;
  rating: number;
  title: string;
  story: string;
  condition: string;
  daysToResult: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Chidi K.",
    location: "Lekki, Lagos",
    rating: 5,
    title: "Completely cleared my recurring typhoid!",
    story: "For over eight months, I was trapped in a continuous cycle of malaria and typhoid. I swallowed synthetic pills almost every month, only for the fever and joint stiffness to return. After drinking Dr. David Super Tea for just 5 days, my heavy body fatigue vanished. I went for a lab test last week and my blood is 100% clean. This is a true organic miracle.",
    condition: "Recurring Malaria & Typhoid",
    daysToResult: "5 Days"
  },
  {
    name: "Grace A.",
    location: "Garki, Abuja",
    rating: 5,
    title: "The persistent numbness in my feet is gone",
    story: "The stiffness and freezing numbness in my hands and feet used to make sleeping a nightmare. A health representative explained that my blood circulation was heavily congested. I ordered the 2-pack recommended treatment. The tingling sensations completely cleared up, and the stiffness is fully gone. My body feels incredibly light and flexible now.",
    condition: "Numbness & Blood Circulation",
    daysToResult: "7 Days"
  },
  {
    name: "Alhaji Musa",
    location: "Kaduna State",
    rating: 5,
    title: "Cooled down my burning internal heat",
    story: "I suffered from a severe burning feeling of internal heat that kept me sweating and restless all night. No prescription ever solved it. After just 3 days of brewing this natural tea, my internal system cooled down completely. I sleep like a baby now and wake up fully energized. The difference is absolutely clear.",
    condition: "Severe Internal Heat",
    daysToResult: "3 Days"
  }
];

export default function Testimonials() {
  const [isResellerModalOpen, setIsResellerModalOpen] = useState(false);

  return (
    <section id="testimonials-section" className="py-16 px-4 bg-gradient-to-b from-white to-brand-50/50 relative border-t border-brand-100">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#16423c_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-200">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            Verified Customer Results
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-serif text-brand-950 font-bold tracking-tight">
            Real People, Real Permanent Relief
          </h2>
          <p className="text-xs sm:text-sm text-brand-600 max-w-xl mx-auto leading-relaxed">
            Read authentic success stories from verified customers who successfully broke free from recurring illnesses and restored their natural vitality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              id={`testimonial-card-${index}`}
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-brand-100 p-6 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-5 text-brand-900 pointer-events-none">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div className="space-y-4">
                {/* Stars and Verified Purchase Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/60">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Buyer
                  </span>
                </div>

                {/* Testimonial Title */}
                <h3 className="font-serif font-bold text-brand-950 text-sm sm:text-base leading-snug">
                  "{t.title}"
                </h3>

                {/* Testimonial Story Text */}
                <p className="text-xs sm:text-sm text-brand-700 leading-relaxed italic">
                  "{t.story}"
                </p>
              </div>

              {/* Customer Meta & Condition Tag */}
              <div className="mt-6 pt-4 border-t border-brand-50/80 space-y-3">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-brand-500">Condition Cleared:</span>
                  <span className="font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100/50">
                    {t.condition}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-brand-500">Results Observed:</span>
                  <span className="font-bold text-brand-800">
                    In {t.daysToResult}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="font-bold text-brand-900 text-xs sm:text-sm">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-brand-500">
                      {t.location}
                    </p>
                  </div>
                  <div className="text-[10px] text-brand-600 font-bold flex items-center gap-1 bg-brand-50 px-2 py-1 rounded-sm">
                    <ThumbsUp className="w-3 h-3 text-brand-500" />
                    Helpful (14)
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Social Proof Note referencing uploaded video contents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10 bg-brand-900 text-brand-100 rounded-2xl p-5 sm:p-6 border border-brand-800 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-md"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center border border-brand-700">
            <span className="text-lg animate-pulse">🎥</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              Watch Real Customer Testimonials & Clinical Demos
            </h4>
            <p className="text-xs text-brand-300 leading-relaxed">
              Customers across West Africa are recording video reviews and praising Dr. David Super Tea for its fast action on continuous body pains and fevers. As demonstrated by traditional natural healing guides, this formula builds long-term vitality.
            </p>
          </div>
        </motion.div>

        {/* Testify & Earn 3-Generation Reseller Waitlist Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 opacity-10 font-bold text-4xl select-none pointer-events-none">
            👥
          </div>
          <div className="space-y-2 text-center md:text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-200">
              💰 Brand Partner Program
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-black text-brand-950">
              Have Dr. David Tea Stories? Testify & Earn!
            </h3>
            <p className="text-xs sm:text-sm text-brand-700 leading-relaxed">
              Join our exclusive <strong className="text-brand-950">3-Generation Reseller & Affiliate Referral System</strong>. Earn <strong>20% direct commission</strong> plus downline commissions up to three levels deep whenever others testify and buy. Secure your lifetime priority rate today!
            </p>
          </div>
          <button
            onClick={() => setIsResellerModalOpen(true)}
            className="flex-shrink-0 bg-brand-900 hover:bg-brand-800 active:scale-98 text-white font-black text-xs sm:text-sm px-6 py-4 rounded-xl transition-all shadow-md flex items-center gap-2 hover:shadow-lg cursor-pointer relative z-10 uppercase tracking-tight"
          >
            📢 Testify & Join Reseller Waitlist
            <span className="bg-amber-400 text-brand-950 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">SOON</span>
          </button>
        </motion.div>

        {/* Exclusive Reseller Waitlist Popup Modal */}
        <ResellerModal 
          isOpen={isResellerModalOpen} 
          onClose={() => setIsResellerModalOpen(false)} 
        />

      </div>
    </section>
  );
}
