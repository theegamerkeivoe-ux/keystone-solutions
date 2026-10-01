import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Check } from 'lucide-react';

export const Introduction: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section className="py-20 md:py-28 bg-[#0D0F12] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-2 border-emerald-500 pl-6 sm:pl-8 mb-8">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            WHY WE EXIST
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight text-balance">
            A website should do more than sit online.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-300 text-base sm:text-lg leading-relaxed mb-10">
          <p>
            Your website is often the first place people meet your organization. It should make information easier to find, your services easier to understand and your organization easier to trust.
          </p>
          <p>
            Keystone combines thoughtful design with practical technology to create websites, portals and systems that people actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 border-t border-stone-800/80 pt-8">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Information Clarity</h4>
              <p className="text-xs text-stone-400">Visitors find what they came for in under three clicks without confusing jargon.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Operational Utility</h4>
              <p className="text-xs text-stone-400">Reduce phone calls and manual paperwork with self-service portals and forms.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Institutional Trust</h4>
              <p className="text-xs text-stone-400">Professional architecture that communicates permanence, security, and competence.</p>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group cursor-pointer"
          >
            <span>What We Build</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
