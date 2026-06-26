import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Sparkles, 
  Flame, 
  Activity, 
  Zap, 
  Check, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';
import { CORE_BENEFITS } from '../data';

export default function ProductBenefits() {
  // Map strings to actual icon components
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Flame':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'ThermometerSnowflake':
        return <Flame className="w-5 h-5 text-emerald-600 animate-pulse" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-600" />;
      default:
        return <Check className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="solution-benefits" className="py-20 px-4 bg-white relative border-t border-brand-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase bg-brand-50 px-3 py-1.5 rounded-full inline-block border border-brand-100">
            NATURAL HERBAL DEFENSE MECHANISM
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-serif text-brand-950 font-bold mt-4 tracking-tight leading-none">
            Say Goodbye to Illness with Dr. David Super Tea
          </h2>
          <p className="mt-4 text-brand-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            As shown on the official product packaging, this masterfully blended, all-natural herbal defense targets root causes of systemic weakness, building your body's shields from within.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-brand-50/70 p-4 rounded-3xl border border-brand-200/50 shadow-xs overflow-hidden"
            >
              {/* Decorative accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-300/20 rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-200/20 rounded-full filter blur-xl"></div>
              
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-brand-100 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. David Super Tea - 100% Plant-Based Healing Ingredients"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-brand-900/90 backdrop-blur-md text-brand-50 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-700/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Official Sourced Blend
                </div>
              </div>
            </motion.div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-brand-50/35 rounded-xl border border-brand-100/50">
                <div className="text-xs font-bold text-brand-900">100%</div>
                <div className="text-[10px] text-brand-600 mt-0.5">Plant-Based</div>
              </div>
              <div className="p-3 bg-brand-50/35 rounded-xl border border-brand-100/50">
                <div className="text-xs font-bold text-brand-900">Chemical</div>
                <div className="text-[10px] text-brand-600 mt-0.5">Free Formula</div>
              </div>
              <div className="p-3 bg-brand-50/35 rounded-xl border border-brand-100/50">
                <div className="text-xs font-bold text-brand-900">Premium</div>
                <div className="text-[10px] text-brand-600 mt-0.5">Potency Batch</div>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits Breakdown */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-900 border-b border-brand-100 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5.5 h-5.5 text-brand-600" />
              What Dr. David Super Tea Does For Your Body:
            </h3>

            <div className="flex flex-col gap-5">
              {CORE_BENEFITS.map((benefit, index) => (
                <motion.div
                  id={`benefit-item-${index}`}
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-brand-50/40 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                    {getIcon(benefit.iconName)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-semibold text-brand-900">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Critical Quality Note Block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 bg-amber-50 rounded-2xl p-5 border border-amber-200/80 flex gap-4 items-start shadow-xs"
            >
              <AlertTriangle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0 animate-bounce" />
              <div className="space-y-1">
                <span className="text-xs font-black tracking-wider text-amber-800 uppercase block">
                  ⚠️ CRITICAL QUALITY NOTE:
                </span>
                <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
                  Unlike commercial teas filled with artificial colorings and heavy synthetic chemical flavorings, <strong>Dr. David Super Tea</strong> is strictly <strong>100% Plant-Based</strong>. It contains zero toxic chemicals, making it perfectly safe, gentle on your stomach, and highly potent for deep internal relief.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
