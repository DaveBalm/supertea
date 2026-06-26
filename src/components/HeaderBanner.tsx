import { motion } from 'motion/react';
import { Leaf, Award } from 'lucide-react';

export default function HeaderBanner() {
  return (
    <div id="top-banner" className="bg-brand-900 text-brand-100 py-3 px-4 shadow-md overflow-hidden relative border-b border-brand-800">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#88b088_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center relative z-10 text-xs sm:text-sm font-medium">
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Leaf className="w-4.5 h-4.5 text-brand-300 animate-pulse" />
          <span>🌿 <strong className="text-brand-300 font-bold">100% Plant-Based</strong> Natural Healing</span>
        </motion.div>
        
        <div className="hidden md:block h-4 w-px bg-brand-800"></div>

        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1.5 text-brand-200"
        >
          <Award className="w-4 h-4 text-brand-300" />
          <span>Formulated by the <span className="font-semibold text-brand-100">Dr. David College of Natural Studies</span></span>
        </motion.div>
      </div>
    </div>
  );
}
