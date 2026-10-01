import React from 'react';
import { PortfolioSection } from '../components/PortfolioSection';
import { BeforeAfter } from '../components/BeforeAfter';
import { useApp } from '../context/AppContext';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              PORTFOLIO & CASE STUDIES
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Real Work & Concept Blueprints.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-6">
              Explore how we design and engineer digital platforms for schools, healthcare centers, B2B enterprises, and non-profits.
            </p>

            <div className="p-4 bg-stone-900/60 border border-stone-800 rounded-md text-xs text-stone-300 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Integrity Policy:</strong> In accordance with our professional ethics, concept prototypes are transparently designated as <strong className="text-emerald-400">CONCEPT PROJECTS</strong>. We never fabricate client awards, fake testimonials, or artificial performance metrics.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid with Filter */}
      <PortfolioSection />

      {/* Before / After Redesign Comparison */}
      <BeforeAfter />

      {/* Call to action */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Have a similar project in mind?
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mb-6 max-w-md mx-auto">
          We can build your organization's digital foundation from scratch or modernize your existing system.
        </p>
        <button
          onClick={() => navigateTo('start-project')}
          className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
