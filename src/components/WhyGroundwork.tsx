import React from 'react';
import {
  Sparkles,
  Target,
  Smartphone,
  TrendingUp,
  Zap,
  Users2
} from 'lucide-react';

export const WhyGroundwork: React.FC = () => {
  const pillars = [
    {
      title: 'CUSTOM',
      headline: 'No generic templates forced onto your organization.',
      description:
        'Cookie-cutter templates force your unique business logic into someone else’s rigid box. We design each layout specifically around your brand and workflows.',
      icon: Sparkles
    },
    {
      title: 'PRACTICAL',
      headline: 'We focus on what the website needs to accomplish.',
      description:
        'Flashy animations mean nothing if a parent can’t find their child’s fee balance or a client can’t book an appointment. We prioritize real-world utility and clear actions.',
      icon: Target
    },
    {
      title: 'MOBILE FIRST',
      headline: 'Your audience is likely on a phone. We design accordingly.',
      description:
        'Over 80% of web traffic in Kenya and globally originates on smartphones. We test and optimize typography, touch targets, and load times on real handheld devices.',
      icon: Smartphone
    },
    {
      title: 'SCALABLE',
      headline: 'Start with a website and expand into portals and systems later.',
      description:
        'You don’t have to build everything at once. Start with a clean 5-page public website today, and seamlessly attach client portals, databases, or payment gateways as you grow.',
      icon: TrendingUp
    },
    {
      title: 'PERFORMANCE',
      headline: 'Fast, accessible and optimized experiences.',
      description:
        'Sub-second page speeds, clean semantic code, and lightweight assets ensure your website loads instantly even on modest 3G mobile connections.',
      icon: Zap
    },
    {
      title: 'HUMAN',
      headline: 'You work with real people who understand the project.',
      description:
        'No endless automated ticket loops or offshore handoffs. You collaborate directly with senior engineers and designers who take personal pride in your project’s success.',
      icon: Users2
    }
  ];

  return (
    <section className="py-24 bg-[#0A0C0F] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            THE KEYSTONE PHILOSOPHY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Why Keystone Solutions
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            We are built to be your long-term digital development partner—delivering practical engineering that produces tangible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#11141A] border border-stone-800/90 rounded-lg p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
                  {pillar.title}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {pillar.headline}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
