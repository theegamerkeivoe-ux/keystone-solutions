import React from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, HeartPulse, Building2, Globe2, Church, Hotel, Briefcase } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { navigateTo } = useApp();

  const sectors = [
    { label: 'EDUCATION', icon: GraduationCap, sub: 'Schools, Colleges & Unis' },
    { label: 'HEALTHCARE', icon: HeartPulse, sub: 'Hospitals & Medical Centers' },
    { label: 'BUSINESS', icon: Building2, sub: 'Commercial Enterprises' },
    { label: 'NGOs', icon: Globe2, sub: 'Foundations & Trusts' },
    { label: 'FAITH', icon: Church, sub: 'Churches & Ministries' },
    { label: 'HOSPITALITY', icon: Hotel, sub: 'Resorts & Venues' },
    { label: 'PROFESSIONAL SERVICES', icon: Briefcase, sub: 'Consultancies & Legal' }
  ];

  return (
    <section className="border-y border-stone-800/80 bg-[#0B0D10] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-stone-400">
            Built for organizations that need more than a template.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <button
                key={idx}
                onClick={() => navigateTo('industries')}
                className="group flex flex-col items-center justify-center p-3 rounded-sm bg-stone-900/40 border border-stone-800/60 hover:border-emerald-500/40 hover:bg-stone-900 transition-all text-center cursor-pointer"
              >
                <Icon className="w-5 h-5 text-stone-400 group-hover:text-emerald-400 transition-colors mb-2" />
                <span className="text-[11px] font-bold tracking-wider text-stone-200 group-hover:text-white uppercase">
                  {s.label}
                </span>
                <span className="text-[9px] text-stone-400 mt-0.5 line-clamp-1">
                  {s.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
