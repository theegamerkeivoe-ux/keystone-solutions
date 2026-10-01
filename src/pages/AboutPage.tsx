import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from '../components/Navbar';
import { ArrowRight, CheckCircle2, User, Code, Lightbulb, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              ABOUT KEYSTONE DIGITAL SOLUTIONS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance">
              Good digital work starts with understanding people.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              We started Keystone Digital Solutions because too many organizations were being handed slow, generic templates that failed to solve their real-world administrative challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-[#0A0C0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-white font-display text-balance">
                A digital development partner, not just a design shop.
              </h2>
              <p>
                At Keystone Digital Solutions, we combine thoughtful design, clean software development, practical strategy, and dependable technology to help organizations build online experiences that people actually use.
              </p>
              <p>
                Whether you lead a secondary school needing to modernize term report cards, a regional clinic needing to guide patients to specialist doctors, or a growing enterprise expanding to international markets, your digital presence should be an asset that saves time and builds trust.
              </p>
            </div>

            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 space-y-4">
              <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                What Guides Every Line of Code
              </div>
              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Simplicity over Gimmicks:</strong> Clear navigation beats confusing visual distractions every single time.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Speed & Mobile Focus:</strong> Designed for Kenyan mobile networks and global standards alike.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Complete Transparency:</strong> Open communication, clear milestone scopes, and full client asset ownership.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section as strictly instructed: Use placeholders, do not invent certifications or years */}
          <div className="border-t border-stone-800 pt-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              LEADERSHIP & CRAFT
            </span>
            <h3 className="text-2xl font-bold text-white mb-8">
              Leadership
            </h3>

            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 max-w-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Photo Placeholder */}
              <div className="w-28 h-28 rounded-md bg-stone-900 border border-stone-700/80 flex flex-col items-center justify-center text-stone-500 shrink-0">
                <User className="w-10 h-10 text-stone-400 mb-1" />
                <span className="text-[10px] uppercase font-mono text-stone-400">[Founder Photo]</span>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">
                  Founder & Lead Developer
                </h4>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  [Your Name]
                </div>
                <p className="text-xs text-stone-300 leading-relaxed pt-1">
                  Leading system architecture, design direction, and engineering execution at Keystone Digital Solutions. Focused on building high-performance web applications and digital platforms for institutions across Kenya and internationally.
                </p>
                <div className="pt-2 text-[11px] text-stone-400 italic">
                  *Available directly for project consultations and technical architecture reviews.
                </div>
              </div>
            </div>
          </div>

          {/* Company CTA */}
          <div className="p-8 bg-gradient-to-r from-stone-900 to-stone-950 border border-stone-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">
                Let's discuss your organization's digital foundation.
              </h4>
              <p className="text-xs text-stone-400">
                We're always open to exploring new institutional websites, portal platforms, and custom digital systems.
              </p>
            </div>
            <button
              onClick={() => navigateTo('start-project')}
              className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
