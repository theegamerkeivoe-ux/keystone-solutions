import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import {
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users2,
  CheckCircle2,
  Layers,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeShowcase, setActiveShowcase] = useState<'education' | 'healthcare'>('education');

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Live Architecture Preview */}
      <Hero />

      {/* 2. Industry Trust Strip */}
      <TrustStrip />

      {/* 3. Core Capabilities: What We Build */}
      <section className="py-20 bg-[#0A0C0F] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
                WHAT WE BUILD
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Practical digital infrastructure.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl">
                We design and engineer specialized digital experiences built around how your organization actually functions.
              </p>
            </div>
            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Institutional Websites */}
            <div
              onClick={() => navigateTo('services')}
              className="group bg-[#11141A] border border-stone-800 hover:border-emerald-500/50 p-6 rounded-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-950/60 transition-colors">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  High-Performance Websites
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-6">
                  Clean, modern websites that articulate your mission, present programs clearly, and drive parent enrollments, client consultations, and business inquiries.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400 group-hover:text-emerald-400 font-semibold">
                <span>Tailored Design & SEO</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Multi-Tier Portals */}
            <div
              onClick={() => navigateTo('services')}
              className="group bg-[#11141A] border border-stone-800 hover:border-emerald-500/50 p-6 rounded-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-950/60 transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Institutional Portals
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-6">
                  Secure authenticated environments for students, parents, doctors, and staff. Manage admissions, fee statements, report cards, and doctor schedules with zero friction.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400 group-hover:text-emerald-400 font-semibold">
                <span>Role-Based Access</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: Custom Digital Systems */}
            <div
              onClick={() => navigateTo('services')}
              className="group bg-[#11141A] border border-stone-800 hover:border-emerald-500/50 p-6 rounded-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-950/60 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Custom Digital Systems
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-6">
                  When off-the-shelf software falls short. We engineer custom workflow engines, relational database dashboards, and automated intake pipelines built for scale.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400 group-hover:text-emerald-400 font-semibold">
                <span>Database & APIs</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flagship Spotlight: Education & Healthcare Interactive Preview */}
      <section className="py-20 bg-[#0D0F12] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                  FLAGSHIP BLUEPRINTS
                </span>
                <span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase border border-stone-700">
                  LIVE INTERACTIVE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineered for complex real-world use.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl">
                Toggle between our education and healthcare systems to preview how we structure digital portals.
              </p>
            </div>

            {/* Quick Switcher */}
            <div className="flex items-center gap-2 p-1 bg-stone-900 border border-stone-800 rounded-sm self-start md:self-auto">
              <button
                onClick={() => setActiveShowcase('education')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeShowcase === 'education'
                    ? 'bg-emerald-600 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>School System</span>
              </button>
              <button
                onClick={() => setActiveShowcase('healthcare')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeShowcase === 'healthcare'
                    ? 'bg-emerald-600 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Healthcare Clinic</span>
              </button>
            </div>
          </div>

          {/* Interactive Card Container */}
          <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8">
            {activeShowcase === 'education' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-block text-[11px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                    Savannah Crest Academy
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Integrated School Website & CBC Portal System
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    A comprehensive institutional platform serving parents, students, teachers, and admissions officers. Eliminates paper report cards and physical fee counter queues.
                  </p>
                  <ul className="space-y-2 text-xs text-stone-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Online CBC admission and document verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Term fee statements & instant M-Pesa receipts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Parent portal with terminal performance analytics</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => navigateTo('work')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => navigateTo('start-project')}
                      className="text-stone-300 hover:text-white text-xs font-semibold underline px-2 py-1"
                    >
                      Request School Scope
                    </button>
                  </div>
                </div>

                {/* Simulated Portal Snapshot */}
                <div className="lg:col-span-7 bg-[#0A0C0F] border border-stone-800 rounded-md p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="font-mono text-stone-300 font-semibold">PORTAL.SAVANNAHCREST.AC.KE</span>
                    </div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest">TERM 2 ACADEMIC CYCLE</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#11141A] p-3 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block">Enrolled</span>
                      <span className="font-mono tabular-nums text-lg font-bold text-white">840 Students</span>
                    </div>
                    <div className="bg-[#11141A] p-3 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block">Fee Clearance</span>
                      <span className="font-mono tabular-nums text-lg font-bold text-emerald-400">94.2%</span>
                    </div>
                    <div className="bg-[#11141A] p-3 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block">CBC Strands</span>
                      <span className="font-mono tabular-nums text-lg font-bold text-white">Active</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#11141A] rounded border border-stone-800 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Admissions Portal Live</div>
                      <div className="text-[11px] text-stone-400">32 pending grade 7 applications under review</div>
                    </div>
                    <span className="px-2 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] rounded font-bold uppercase">
                      Intake Open
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-block text-[11px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                    St. Jude Medical Center
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Patient Digital Front Door & Specialist Triage
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Designed to reassure patients during anxious moments. Allows families to check consultant schedules, verify insurance panels, and book specialized clinic visits.
                  </p>
                  <ul className="space-y-2 text-xs text-stone-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Specialist doctor schedules and instant booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Insurance panel verification (SHA, Jubilee, Britam, etc.)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Emergency 24/7 triage guidance & pharmacy dispatch</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => navigateTo('work')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => navigateTo('start-project')}
                      className="text-stone-300 hover:text-white text-xs font-semibold underline px-2 py-1"
                    >
                      Request Clinic Scope
                    </button>
                  </div>
                </div>

                {/* Simulated Healthcare Snapshot */}
                <div className="lg:col-span-7 bg-[#0A0C0F] border border-stone-800 rounded-md p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="font-mono text-stone-300 font-semibold">CARE.STJUDEMEDICAL.ORG</span>
                    </div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest">24/7 TRIAGE CONNECTED</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#11141A] p-3 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block">Specialists</span>
                      <span className="font-mono tabular-nums text-lg font-bold text-white">18 On Duty</span>
                    </div>
                    <div className="bg-[#11141A] p-3 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block">Avg Wait Time</span>
                      <span className="font-mono tabular-nums text-lg font-bold text-emerald-400">12 Mins</span>
                    </div>
                    <div className="bg-[#11141A] p-3 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block">Insurance</span>
                      <span className="font-mono tabular-nums text-lg font-bold text-white">14 Panels</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#11141A] rounded border border-stone-800 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Pediatric & Maternity Wing</div>
                      <div className="text-[11px] text-stone-400">Next available consultation slot: Today at 2:30 PM</div>
                    </div>
                    <span className="px-2 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] rounded font-bold uppercase">
                      Open Slots
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. The Keystone Difference: Why Choose Us */}
      <section className="py-20 bg-[#0A0C0F] border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              THE KEYSTONE APPROACH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why organizations choose to build with us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#11141A] border border-stone-800 p-6 rounded-lg">
              <div className="w-9 h-9 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">No Generic Templates</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                We write clean, purposeful code structured around your organizational rules—not bloated off-the-shelf themes that break when you need to customize.
              </p>
            </div>

            <div className="bg-[#11141A] border border-stone-800 p-6 rounded-lg">
              <div className="w-9 h-9 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Sub-Second Mobile Speed</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Over 80% of regional users access your site on mobile devices. We optimize assets and typography for lightning-fast loads even on low-bandwidth networks.
              </p>
            </div>

            <div className="bg-[#11141A] border border-stone-800 p-6 rounded-lg">
              <div className="w-9 h-9 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Direct Senior Collaboration</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                No automated ticket loops or junior handoffs. You collaborate directly with senior engineers who understand your goals and respect your deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Transparent Packages & Next Step */}
      <section className="py-20 bg-[#0D0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#11141A] via-[#141820] to-[#11141A] border border-stone-800 rounded-xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block">
                READY TO BEGIN?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's plan your organization's digital foundation.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Whether you need a modern school website, a patient triage portal, or a customized web database, we're here to help you get it right.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigateTo('start-project')}
                  className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/40"
                >
                  <span>Start Project Intake</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo('book-consultation')}
                  className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-sm transition-colors cursor-pointer"
                >
                  Schedule Discovery Call
                </button>
                <button
                  onClick={() => navigateTo('pricing')}
                  className="text-stone-400 hover:text-white text-xs font-semibold px-4 py-3.5 flex items-center gap-1.5"
                >
                  <span>View Pricing & Calculator</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Pricing Snapshot Card */}
            <div className="bg-[#0A0C0F] border border-stone-800 rounded-lg p-6 lg:w-80 shrink-0 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Investment Starting Points
              </div>
              <div className="border-b border-stone-800/80 pb-2">
                <div className="text-xs text-stone-400">Essential Web Foundation</div>
                <div className="font-mono tabular-nums text-lg font-bold text-white">from KSh 100,000</div>
              </div>
              <div className="border-b border-stone-800/80 pb-2">
                <div className="text-xs text-stone-400">Institutional Platform</div>
                <div className="font-mono tabular-nums text-lg font-bold text-white">from KSh 220,000</div>
              </div>
              <div>
                <div className="text-xs text-stone-400">Custom Portals & Systems</div>
                <div className="font-mono tabular-nums text-lg font-bold text-emerald-400">from KSh 450,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
