import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeView, setActiveView] = useState<'side-by-side' | 'toggle'>('side-by-side');
  const [toggleState, setToggleState] = useState<'before' | 'after'>('after');

  return (
    <section className="py-24 bg-[#0A0C10] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            RENOVATION & MODERNIZATION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Your current website might be holding you back.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Good design isn't about making something look expensive. It's about making information easier to understand and actions easier to take.
          </p>
        </div>

        {/* View Switcher on Small Screens */}
        <div className="sm:hidden flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setToggleState('before')}
            className={`px-4 py-2 text-xs font-bold rounded uppercase ${
              toggleState === 'before'
                ? 'bg-red-950 text-red-300 border border-red-800'
                : 'bg-stone-900 text-stone-400'
            }`}
          >
            Show Before (Outdated)
          </button>
          <button
            onClick={() => setToggleState('after')}
            className={`px-4 py-2 text-xs font-bold rounded uppercase ${
              toggleState === 'after'
                ? 'bg-emerald-600 text-stone-950 font-bold'
                : 'bg-stone-900 text-stone-400'
            }`}
          >
            Show After (Keystone)
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: BEFORE (Outdated Legacy Website) */}
          <div
            className={`bg-[#151515] border-2 border-red-900/40 rounded-lg p-6 flex flex-col justify-between ${
              toggleState === 'after' ? 'hidden sm:flex' : 'flex'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="font-bold text-xs uppercase tracking-wider text-red-400">
                    BEFORE: Typical Legacy Website (circa 2014)
                  </span>
                </div>
                <span className="text-[10px] text-stone-500 font-mono">Unoptimized • Non-responsive</span>
              </div>

              {/* Fictional Outdated Website UI Simulation */}
              <div className="bg-[#EFEFEF] text-stone-900 p-4 rounded border border-stone-400 font-serif text-xs space-y-3 mb-6 shadow-inner select-none opacity-90">
                <div className="border-b-2 border-blue-900 pb-2 text-center">
                  <div className="text-sm font-bold text-blue-900 uppercase">
                    *** Welcome To Our Organization Web Portal ***
                  </div>
                  <div className="text-[10px] text-stone-600 italic">
                    Best viewed in Internet Explorer 1024x768 resolution
                  </div>
                </div>

                <div className="bg-yellow-200 p-1 text-[10px] text-center text-red-700 font-bold animate-pulse">
                  NOTICE: Click here to download our 28MB Annual PDF Prospectus!
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div className="bg-stone-200 p-1.5 border border-stone-400 space-y-1">
                    <div className="font-bold text-blue-800 underline">Main Links:</div>
                    <div>• Home Page</div>
                    <div>• About Us (Old)</div>
                    <div>• Management 2018</div>
                    <div>• Guest Book</div>
                  </div>
                  <div className="col-span-2 space-y-1 text-[11px] leading-tight text-stone-700">
                    <p className="font-bold">Message from Managing Director:</p>
                    <p>
                      Our enterprise was founded with vision and steadfast mission to cater for our clientele across all territories with unmatched synergies and endeavors... (read more)
                    </p>
                  </div>
                </div>

                <div className="text-[9px] text-center text-stone-500 border-t border-stone-300 pt-1">
                  Visitor Counter: [ 0 0 4 2 1 9 ] • Copyright 2014 All Rights Reserved
                </div>
              </div>

              {/* Pain points breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-red-300">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Unreadable on mobile phones without frustrating zooming.</span>
                </div>
                <div className="flex items-start gap-2 text-red-300">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Buried contact details with broken email mailto links.</span>
                </div>
                <div className="flex items-start gap-2 text-red-300">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Outdated news and missing modern security SSL certificates.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 text-[11px] text-stone-500 text-center">
              Result: Visitors lose confidence and leave within 6 seconds.
            </div>
          </div>

          {/* RIGHT: AFTER (Modern Keystone Website) */}
          <div
            className={`bg-[#11141A] border-2 border-emerald-500/80 rounded-lg p-6 flex flex-col justify-between shadow-2xl relative ${
              toggleState === 'before' ? 'hidden sm:flex' : 'flex'
            }`}
          >
            <div className="absolute -top-3 right-6 bg-emerald-600 text-stone-950 font-bold text-[10px] uppercase tracking-widest px-3 py-0.5 rounded shadow">
              KEYSTONE BUILD
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="font-bold text-xs uppercase tracking-wider text-emerald-400">
                    AFTER: Clean, Authoritative, High-Converting
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">0.8s Load • Mobile Optimized</span>
              </div>

              {/* Modern Groundwork UI Simulation */}
              <div className="bg-[#0E1116] text-white p-4 rounded border border-stone-700/80 text-xs space-y-3 mb-6 shadow-md select-none">
                <div className="flex items-center justify-between border-b border-stone-800/80 pb-2">
                  <div className="font-bold uppercase tracking-wider text-xs flex items-center gap-1.5 text-stone-100">
                    <span className="w-2 h-2 rounded-sm bg-emerald-500"></span>
                    INSTITUTIONAL NAME
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-stone-400 hidden sm:inline">Admissions • Portals</span>
                    <span className="bg-emerald-600 text-stone-950 font-bold text-[10px] px-2 py-0.5 rounded">
                      Inquire Now
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-stone-900/90 rounded border border-stone-800 space-y-1.5">
                  <div className="text-[9px] uppercase tracking-widest text-emerald-400 font-bold">
                    Official Admissions & Portal Gateway
                  </div>
                  <div className="font-bold text-sm text-stone-100">
                    Leading academic excellence and holistic education in Kenya.
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                      Download 2026 Prospectus (PDF)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">
                      Direct WhatsApp Desk →
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div className="p-2 bg-stone-950 rounded border border-stone-800 text-center">
                    <span className="text-white font-bold block">Parent Portal</span>
                    <span className="text-stone-500 text-[9px]">Term Results</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800 text-center">
                    <span className="text-white font-bold block">Teacher Desk</span>
                    <span className="text-stone-500 text-[9px]">Marks Grading</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800 text-center">
                    <span className="text-white font-bold block">Fee Structure</span>
                    <span className="text-stone-500 text-[9px]">Bank Ledgers</span>
                  </div>
                </div>
              </div>

              {/* Benefits breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Flawless experience on every Android and iPhone device.</span>
                </div>
                <div className="flex items-start gap-2 text-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct phone, WhatsApp, and form conversion paths.</span>
                </div>
                <div className="flex items-start gap-2 text-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Self-service portals that eliminate repetitive office calls.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-400">Ready to modernize your presence?</span>
              <button
                onClick={() => navigateTo('start-project')}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Redesign My Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
