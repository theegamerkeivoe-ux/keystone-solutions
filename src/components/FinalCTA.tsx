import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section className="py-24 bg-gradient-to-b from-[#0D0F12] via-[#12161E] to-[#0A0C0F] border-t border-stone-800/80 relative overflow-hidden w-full max-w-full">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-emerald-950/25 blur-[120px] pointer-events-none overflow-hidden"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-3">
          TAKE THE NEXT STEP
        </span>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 text-balance">
          Your next website starts here.
        </h2>

        <p className="text-stone-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us what you're building. We'll help you figure out the best way to bring it online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigateTo('start-project')}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40 active:scale-[0.98] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigateTo('book-consultation')}
            className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 border border-stone-700/80 text-stone-200 font-semibold text-sm px-7 py-4 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Book a Consultation</span>
          </button>
        </div>

        <div className="mt-8 text-xs text-stone-400">
          Serving schools, healthcare facilities, commercial enterprises, and NGOs across Kenya & internationally.
        </div>
      </div>
    </section>
  );
};
