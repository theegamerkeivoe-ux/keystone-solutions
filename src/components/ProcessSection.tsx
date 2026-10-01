import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Compass, FileCode2, Palette, Terminal, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { navigateTo } = useApp();

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      headline: 'We learn about your organization, audience and goals.',
      description:
        'Through an initial consultation and structured intake, we understand your daily operational bottlenecks, what visitors need to find, and how your platform will generate measurable value.',
      icon: Compass
    },
    {
      num: '02',
      title: 'PLAN',
      headline: 'We define the structure, features and scope.',
      description:
        'We produce a comprehensive sitemap, identify required user tiers (such as parents, students, or staff), and write a crystal-clear proposal with binding timelines and flat pricing.',
      icon: FileCode2
    },
    {
      num: '03',
      title: 'DESIGN',
      headline: 'We create the visual experience.',
      description:
        'We craft high-fidelity, responsive mockups tailored to your organization’s identity. You review the exact typography, mobile layouts, and navigation before code is written.',
      icon: Palette
    },
    {
      num: '04',
      title: 'BUILD',
      headline: 'We develop, integrate and test the project.',
      description:
        'Using modern, production-grade frameworks, we build fast interfaces, connect databases, integrate payment flows (like M-PESA), and conduct thorough security and mobile audits.',
      icon: Terminal
    },
    {
      num: '05',
      title: 'LAUNCH',
      headline: 'We deploy the project and provide the necessary handover.',
      description:
        'We link your official domain (.co.ke, .com), provision high-speed SSL cloud hosting, and provide hands-on staff training so your team can easily manage updates.',
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 bg-[#0D0F12] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Simple from start to finish.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            A structured, transparent roadmap that eliminates surprises and ensures on-time delivery.
          </p>
          <div className="mt-3 inline-block bg-stone-900 border border-stone-800 text-stone-300 text-xs px-3 py-1 rounded font-medium">
            No unnecessary jargon. No confusing process.
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#11141A] border border-stone-800 rounded-lg p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono tabular-nums text-2xl font-extrabold text-emerald-400/90">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-1">
                    {step.title}
                  </h3>

                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {step.headline}
                  </h4>

                  <p className="text-xs text-stone-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/80 text-[10px] text-stone-500 uppercase tracking-widest font-mono">
                  Stage {step.num} of 05
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('book-consultation')}
            className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Book a Free Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
