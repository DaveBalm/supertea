import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, PackageCheck, Hourglass } from 'lucide-react';

export default function UrgencyCard() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 45 });
  const [stockLeft, setStockLeft] = useState(14);

  // Simple countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 2 hours for simulation
          return { hours: 2, minutes: 30, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Slowly simulate stock depleting very occasionally
  useEffect(() => {
    const stockTimer = setInterval(() => {
      setStockLeft(prev => (prev > 4 ? prev - 1 : 14));
    }, 45000);

    return () => clearInterval(stockTimer);
  }, []);

  return (
    <div id="urgency-scarcity" className="bg-brand-900 text-brand-100 rounded-3xl p-6 sm:p-10 border border-brand-800 shadow-xl overflow-hidden relative max-w-4xl mx-auto my-12">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#88b088_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
        
        {/* Scarcity explanation text */}
        <div className="md:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-800 text-brand-300 border border-brand-700">
            <PackageCheck className="w-3.5 h-3.5" />
            STRICTLY CONTROLLED PRODUCTION BATCH
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white tracking-tight leading-snug">
            Strictly Limited Batch Available
          </h3>
          <p className="text-brand-300 text-xs sm:text-sm leading-relaxed">
            Because our organic herbs are naturally sourced from remote highlands, carefully harvested, and packed under strict lab quality control to preserve maximum therapeutic potency, <strong>we do not mass-produce.</strong>
          </p>
          <p className="text-brand-300 text-xs sm:text-sm leading-relaxed">
            Once the current micro-batch sells out, it takes up to 4 weeks to safely source and prepare the next run. We prioritize sending our available stock strictly to individuals who are completely ready to change their health today.
          </p>
        </div>

        {/* Action / Scarcity Box */}
        <div className="md:col-span-5 bg-brand-950/80 p-6 rounded-2xl border border-brand-800 text-center space-y-4">
          
          {/* Stock bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-brand-400 font-semibold uppercase">Micro-Batch Status</span>
              <span className="text-rose-400 font-black animate-pulse flex items-center gap-1">
                🔥 ONLY {stockLeft} PACKS LEFT
              </span>
            </div>
            <div className="w-full h-2 bg-brand-900 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: '80%' }}
                animate={{ width: `${(stockLeft / 20) * 100}%` }}
                className="h-full bg-gradient-to-r from-emerald-500 to-rose-500 rounded-full"
              ></motion.div>
            </div>
          </div>

          <div className="h-px bg-brand-850"></div>

          {/* Time timer */}
          <div className="space-y-1.5">
            <span className="text-[11px] text-brand-400 uppercase tracking-widest block font-medium">
              Daily Order Dispatch Window Closes In:
            </span>
            <div className="flex justify-center gap-2 text-center">
              <div className="bg-brand-900 px-3 py-2 rounded-lg border border-brand-800 min-w-[50px]">
                <div className="text-lg font-black text-brand-100 font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-brand-400 font-semibold">HR</div>
              </div>
              <div className="text-brand-400 text-lg font-black pt-1">:</div>
              <div className="bg-brand-900 px-3 py-2 rounded-lg border border-brand-800 min-w-[50px]">
                <div className="text-lg font-black text-brand-100 font-mono">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-brand-400 font-semibold">MIN</div>
              </div>
              <div className="text-brand-400 text-lg font-black pt-1">:</div>
              <div className="bg-brand-900 px-3 py-2 rounded-lg border border-brand-800 min-w-[50px]">
                <div className="text-lg font-black text-rose-400 font-mono">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-brand-400 font-semibold">SEC</div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-brand-400 italic">
            Orders made within this window qualify for immediate dispatch within 24 hours.
          </p>

        </div>

      </div>
    </div>
  );
}
