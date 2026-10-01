import React from 'react';
import { IndustriesSection } from '../components/IndustriesSection';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              ORGANIZATIONAL DOMAINS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Built for Your Kind of Organization.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              We specialize in the operational realities of institutional sectors: Kenyan schools complying with CBC guidelines, hospitals managing patient queues, and businesses expanding to regional export markets.
            </p>
          </div>
        </div>
      </section>

      <IndustriesSection />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="bg-[#11141A] border border-stone-800 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-2">
            Operating in a unique sector?
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mb-6 max-w-lg mx-auto">
            Tell us about your organization and audience. We'll map out a custom software architecture tailored to your workflows.
          </p>
          <button
            onClick={() => navigateTo('start-project')}
            className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Tell Us What You Need</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
