import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Globe,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Users,
  Database,
  ArrowRight,
  CheckCircle,
  Layout,
  Layers,
  ChevronRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section className="py-24 bg-[#0A0C0F] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            PRACTICAL DIGITAL INFRASTRUCTURE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            What we build
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Every organization has different operational needs. We engineer solutions ranging from clean public-facing websites to complex multi-role digital portals.
          </p>
        </div>

        {/* 6 Distinct, Alternating Service Layouts */}
        <div className="space-y-16">
          {/* 01 — PROFESSIONAL WEBSITES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded">
                  01
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                  PUBLIC DIGITAL HOMES
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Websites that make a strong first impression.
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Designed for businesses, schools, churches, NGOs, and professional firms that need to project authority, answer questions clearly, and convert casual visitors into confident clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Custom bespoke UI & brand styling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% mobile-first responsive coding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Straightforward CMS content updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp & lead intake forms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Local Kenya & global SEO meta setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>High-speed cloud performance</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigateTo('start-project')}
                  className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Build a Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-700/60 rounded-md p-5 shadow-inner">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-3 text-xs text-stone-400 font-mono">
                <span>structure.tsx</span>
                <span className="text-emerald-400">● 100% Responsive</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <div className="font-bold text-white mb-0.5">Hero & Core Value Proposition</div>
                  <div className="text-[11px] text-stone-400">Instant clarity on who you are and why visitors should choose you.</div>
                </div>
                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <div className="font-bold text-white mb-0.5">Structured Service Matrix</div>
                  <div className="text-[11px] text-stone-400">Eliminates confusing walls of text with clear, scan-friendly modules.</div>
                </div>
                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <div className="font-bold text-white mb-0.5">Direct Conversion Action</div>
                  <div className="text-[11px] text-emerald-400">One-tap WhatsApp, phone calls, or scheduled consultations.</div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 — SCHOOL WEBSITES & PORTALS (Spotlight layout) */}
          <div className="relative bg-gradient-to-br from-[#121820] to-[#0E1217] border-2 border-emerald-600/40 rounded-lg p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700/60">
                  02
                </span>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  FLAGSHIP INSTITUTIONAL SOLUTION
                </span>
              </div>
              <span className="text-xs bg-stone-900 border border-stone-700 px-3 py-1 rounded text-stone-300">
                Primary • Secondary • Colleges • Universities
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              A school website can be much more than a homepage.
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
              Transform your school into an efficient, interconnected digital campus. Replace endless paper circulars, phone calls, and manual report card printing with a structured four-tier portal ecosystem.
            </p>

            {/* Architecture Flow Diagram */}
            <div className="bg-[#0A0D11] border border-stone-800 rounded-lg p-6 mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4 text-center">
                Unified Institutional Architecture Flow
              </div>

              <div className="flex flex-col items-center">
                {/* Public Website */}
                <div className="w-full max-w-md bg-stone-900 border border-stone-700 rounded-md p-3 text-center shadow-md">
                  <div className="font-bold text-emerald-400 text-sm flex items-center justify-center gap-1.5">
                    <Globe className="w-4 h-4" />
                    PUBLIC SCHOOL WEBSITE
                  </div>
                  <div className="text-[11px] text-stone-300 mt-1">
                    Admissions • Term Dates • Fee Guidelines • Photo Gallery • Prospectus
                  </div>
                </div>

                {/* Arrow down */}
                <div className="h-6 w-0.5 bg-emerald-500/60 my-1 relative">
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-500 transform rotate-45"></div>
                </div>

                {/* 4 Portals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full mt-2">
                  <div className="bg-stone-900/90 border border-stone-800 rounded p-3 text-center">
                    <div className="text-xs font-bold text-white mb-1">STUDENT PORTAL</div>
                    <p className="text-[10px] text-stone-400">Exam results, homework assignments, class timetables, study materials</p>
                  </div>
                  <div className="bg-stone-900/90 border border-stone-800 rounded p-3 text-center">
                    <div className="text-xs font-bold text-white mb-1">PARENT PORTAL</div>
                    <p className="text-[10px] text-stone-400">Child's academic report cards, attendance checks, fee balance tracking</p>
                  </div>
                  <div className="bg-stone-900/90 border border-stone-800 rounded p-3 text-center">
                    <div className="text-xs font-bold text-white mb-1">TEACHER PORTAL</div>
                    <p className="text-[10px] text-stone-400">CAT & exam grading, attendance registers, lesson plans & marks upload</p>
                  </div>
                  <div className="bg-stone-900/90 border border-stone-800 rounded p-3 text-center">
                    <div className="text-xs font-bold text-emerald-400 mb-1">ADMIN DASHBOARD</div>
                    <p className="text-[10px] text-stone-400">Enrollment records, bulk SMS notices, fee reconciliation, website CMS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => navigateTo('services')}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore School Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigateTo('book-consultation')}
                className="w-full sm:w-auto text-xs font-semibold text-stone-300 hover:text-white px-4 py-3 flex items-center justify-center gap-1.5"
              >
                <span>Book a School Board Demo</span>
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* 03 & 04 — HEALTHCARE & BUSINESS (Side-by-Side Dual Card Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 03 — HEALTHCARE WEBSITES */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded">
                    03
                  </span>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    PATIENT TRIAGE & ACCESS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Make your healthcare organization easier to find and understand.
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  For hospitals, specialist clinics, and diagnostics centers. Clear presentation of consultant schedules, clinical departments, accepted insurance policies, and direct appointment requests.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Department & clinical specialty directory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Consultant rosters & visiting days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Online appointment triage & callback intake</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>One-tap emergency dialing & GPS clinic navigation</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('services')}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Healthcare</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>

            {/* 04 — BUSINESS WEBSITES */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded">
                    04
                  </span>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    COMMERCIAL GROWTH
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  A website built around your business.
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  Websites for commercial firms, professional services, manufacturers, and logistics enterprises that need to generate high-intent inquiries and establish market leadership.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Authoritative corporate storytelling & trust markers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Product showcases & technical catalog filtering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Request-a-quote builders & WhatsApp direct hooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Lead qualification that screens out tire-kickers</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('start-project')}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Build Your Business Website</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>

          {/* 05 & 06 — CUSTOM PORTALS & DIGITAL SYSTEMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 05 — CUSTOM PORTALS */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded">
                    05
                  </span>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    ROLE-BASED WEB ENVIRONMENTS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  When your organization needs more than a website.
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  Build private workspaces for your clients, members, or staff. Control permissions, share confidential documents, track deliverables, and manage internal communication securely.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 mb-6">
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Client Portals</div>
                    <span className="text-[10px] text-stone-500">Invoices, project progress</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Staff Portals</div>
                    <span className="text-[10px] text-stone-500">Internal files & schedules</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Member Portals</div>
                    <span className="text-[10px] text-stone-500">SACCOs, associations</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Institutional</div>
                    <span className="text-[10px] text-stone-500">Student & guardian logins</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('book-consultation')}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss a Portal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>

            {/* 06 — CUSTOM DIGITAL SYSTEMS */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded">
                    06
                  </span>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    DATABASE APPLICATIONS & WORKFLOWS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  We build the systems behind the website.
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  Replace spreadsheets and manual paper handling with custom database-backed web applications, interactive booking engines, registration pipelines, and automated reporting.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 mb-6">
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Booking Engines</div>
                    <span className="text-[10px] text-stone-500">Automated reservations</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Payments (M-PESA)</div>
                    <span className="text-[10px] text-stone-500">Instant STK reconciliation</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">PDF Generation</div>
                    <span className="text-[10px] text-stone-500">Certificates & receipts</span>
                  </div>
                  <div className="p-2 bg-stone-950 rounded border border-stone-800">
                    <div className="font-semibold text-white">Admin Dashboards</div>
                    <span className="text-[10px] text-stone-500">Real-time KPI telemetry</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('start-project')}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Build Something Custom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
