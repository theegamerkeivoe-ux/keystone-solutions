import React from 'react';
import { ProcessSection } from '../components/ProcessSection';
import { WhyGroundwork } from '../components/WhyGroundwork';
import { useApp } from '../context/AppContext';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              OUR ENGINEERING APPROACH
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Clear, Predictable & Collaborative.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              We eliminate technical confusion with a transparent five-stage process. You always know what is being built, who is responsible, and when milestones will be delivered.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />
      <WhyGroundwork />

      {/* Quality Guarantees */}
      <section className="py-16 bg-[#0A0C0F] border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#11141A] border border-stone-800 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Our Commitments to Every Client</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Full Asset Ownership:</strong> You own 100% of your domain, codebase, content, and database credentials upon completion.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No Surprise Billing:</strong> Fixed scope and transparent milestone payments. No surprise hosting markups or hidden fees.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Post-Launch Warranty:</strong> 30 days of complimentary technical warranty to address any operational bugs or tweaks.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Staff Handover Training:</strong> Personalized video or in-person training for your administrators on how to edit content and manage users.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
