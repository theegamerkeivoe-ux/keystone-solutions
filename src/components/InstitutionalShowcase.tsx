import React, { useState } from 'react';
import { FeaturedSchool } from './FeaturedSchool';
import { FeaturedHealthcare } from './FeaturedHealthcare';
import { GraduationCap, HeartPulse } from 'lucide-react';

export const InstitutionalShowcase: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<'education' | 'healthcare'>('education');

  return (
    <div className="relative">
      {/* Sector Switcher Header Bar */}
      <div className="bg-[#0B0D11] border-t border-stone-800/80 pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800/80 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-1">
                INSTITUTIONAL PLATFORM SHOWCASE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Live System Prototypes
              </h2>
            </div>

            {/* Interactive Domain Switcher Tabs */}
            <div className="flex items-center gap-2 p-1 bg-stone-900/90 border border-stone-800 rounded-sm">
              <button
                onClick={() => setSelectedDomain('education')}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedDomain === 'education'
                    ? 'bg-emerald-600 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education: Savannah Crest</span>
              </button>

              <button
                onClick={() => setSelectedDomain('healthcare')}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedDomain === 'healthcare'
                    ? 'bg-emerald-600 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                <HeartPulse className="w-4 h-4" />
                <span>Healthcare: St. Jude</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render active flagship system */}
      <div>
        {selectedDomain === 'education' ? (
          <FeaturedSchool />
        ) : (
          <FeaturedHealthcare />
        )}
      </div>
    </div>
  );
};
