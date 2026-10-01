import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { useApp } from '../context/AppContext';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              TRANSPARENT VALUE
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Clear Pricing. Predictable Investment.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              We believe in upfront clarity. Explore starting rates for small organizations, high-impact institutional websites, and custom portal platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing and Addons */}
      <PricingSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="bg-[#11141A] border border-stone-800 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-2">
            Need a tailored proposal for your board or committee?
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mb-6 max-w-lg mx-auto">
            We prepare detailed, itemized PDF scope documents formatted for board review, procurement committee evaluation, and grant reporting.
          </p>
          <button
            onClick={() => navigateTo('start-project')}
            className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Request Board Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
