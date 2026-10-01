import React from 'react';
import { useApp } from '../context/AppContext';
import { ServicesSection } from '../components/ServicesSection';
import { InstitutionalShowcase } from '../components/InstitutionalShowcase';
import { ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              COMPREHENSIVE DIGITAL CAPABILITIES
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance">
              Websites & Digital Systems Engineered for Organizations.
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-8">
              We design, code, and deploy custom digital assets—from public-facing institutional websites to multi-tier portals for students, parents, doctors, and staff.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo('start-project')}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Project Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigateTo('book-consultation')}
                className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-sm transition-colors cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Services Section */}
      <ServicesSection />

      {/* Flagship Institutional Showcase */}
      <InstitutionalShowcase />

      {/* Bottom Conversion Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#11141A] border border-stone-800 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-1">
              Need a custom system architecture not outlined above?
            </h3>
            <p className="text-xs text-stone-400">
              We build custom relational databases, REST APIs, and client portals tailored to exact business rules.
            </p>
          </div>
          <button
            onClick={() => navigateTo('start-project')}
            className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-colors cursor-pointer shrink-0"
          >
            Describe Your Requirements →
          </button>
        </div>
      </div>
    </div>
  );
};
