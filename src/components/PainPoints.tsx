import { motion } from 'motion/react';
import { AlertCircle, Pill, Sparkles, Flame } from 'lucide-react';
import { PAIN_POINTS } from '../data';

export default function PainPoints() {
  return (
    <section id="pain-agitation" className="py-16 px-4 bg-gradient-to-b from-brand-50 to-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef4ee_1px,transparent_1px),linear-gradient(to_bottom,#eef4ee_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100 mb-4 animate-pulse">
            <AlertCircle className="w-3.5 h-3.5" />
            Common Medical Cycle Warning
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-serif text-brand-950 font-semibold tracking-tight leading-tight">
            Are You Stuck in a Continuous Cycle of Illness?
          </h2>
          <p className="mt-3 text-brand-700 max-w-xl mx-auto text-sm sm:text-base">
            Recurring malaria and typhoid aren't just bad luck. They are a sign that deep-seated toxins and pathogens are remaining in your system, untouched by temporary remedies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, index) => {
            const Icon = index === 0 ? Pill : index === 1 ? Sparkles : Flame;
            return (
              <motion.div
                id={`pain-card-${index}`}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 border border-brand-100/80 shadow-xs hover:shadow-md transition-shadow duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-200 group-hover:bg-rose-500 transition-colors duration-300"></div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-semibold text-brand-900 group-hover:text-rose-950 transition-colors duration-300 mb-2">
                  {point.question}
                </h3>
                <p className="text-sm text-brand-600 leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-rose-50/50 rounded-2xl p-6 sm:p-8 border border-rose-100/60 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base font-medium text-rose-950 italic leading-relaxed">
            "Temporary fixes only mask the symptoms. Your liver and organs are repeatedly overloaded with heavy chemicals. Your body deserves a permanent, 100% natural reset."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
