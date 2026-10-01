import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials, navigateTo } = useApp();
  const publishedTestimonials = testimonials.filter(t => t.published);

  return (
    <section className="py-20 bg-[#0D0F12] border-t border-stone-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
          CLIENT VOICES & INTEGRITY
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6 text-balance">
          Client stories
        </h2>

        {publishedTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {publishedTestimonials.map(t => (
              <div key={t.id} className="bg-[#11141A] border border-stone-800 p-6 rounded-lg">
                <MessageSquareQuote className="w-8 h-8 text-emerald-500 mb-3" />
                <p className="text-stone-300 text-sm italic mb-4">"{t.quote}"</p>
                <div className="font-bold text-white text-xs">{t.clientName}</div>
                <div className="text-[11px] text-stone-400">{t.role} • {t.organization}</div>
              </div>
            ))}
          </div>
        ) : (
          /* Strictly compliant state as instructed */
          <div className="bg-[#11141A] border border-stone-800/90 rounded-lg p-8 sm:p-12 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 mx-auto flex items-center justify-center text-stone-400 mb-4">
              <MessageSquareQuote className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Client stories will appear here as we grow.
            </h3>

            <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto leading-relaxed mb-6">
              We uphold strict integrity: we never invent fake client reviews, fabricate awards, or inflate testimonials. As client authorizations are finalized, verified case stories are published here.
            </p>

            <button
              onClick={() => navigateTo('start-project')}
              className="bg-stone-900 hover:bg-stone-850 text-emerald-400 border border-stone-700 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors cursor-pointer"
            >
              Partner with Keystone on Your Next Project →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
