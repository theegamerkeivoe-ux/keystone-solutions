import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { faqs, navigateTo } = useApp();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0A0C0F] border-t border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            COMMON INQUIRIES
          </span>
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Clear, honest answers to the practical questions organizations ask before embarking on a digital project.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map(item => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#11141A] border-emerald-500/50 shadow-md'
                    : 'bg-[#0E1116] border-stone-800/90 hover:border-stone-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-stone-100 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-stone-800/60 text-xs sm:text-sm text-stone-300 leading-relaxed animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-stone-900/60 border border-stone-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white mb-0.5">Have a question not listed here?</div>
            <div className="text-xs text-stone-400">Speak directly with our engineering and strategy team.</div>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
