import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Users,
  ShieldCheck,
  CalendarCheck,
  Eye,
  CheckCircle2,
  Lock,
  Search,
  Bell
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeSystemTab, setActiveSystemTab] = useState<
    'school' | 'hospital' | 'business' | 'student-portal' | 'teacher-portal' | 'admin-dashboard' | 'booking'
  >('school');

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0D0F12] via-[#0F1216] to-[#0D0F12] w-full max-w-full">
      {/* Subtle foundational structural grid background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden"></div>
      
      {/* Soft directional glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-emerald-950/20 blur-[140px] pointer-events-none -z-10 overflow-hidden"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-stone-900 border border-stone-800 text-stone-300 text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            WEB DESIGN • DEVELOPMENT • DIGITAL SYSTEMS
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            We build the <span className="text-stone-100 underline decoration-emerald-500/80 decoration-4 underline-offset-8">digital foundation</span> your organization deserves.
          </h1>

          {/* Supporting Copy */}
          <p className="text-stone-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-9">
            From professional websites to custom portals and digital systems, we build practical online experiences that help organizations look better, communicate clearly and work smarter.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={() => navigateTo('start-project')}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('work')}
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 border border-stone-700/80 text-stone-200 font-semibold text-sm px-6 py-4 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>See Our Work</span>
            </button>
          </div>

          {/* Sub-strip tags */}
          <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
            Schools • Healthcare • Businesses • Organizations
          </div>
        </div>

        {/* Sophisticated Hero Digital Composition Visual */}
        <div className="mt-14 max-w-6xl mx-auto">
          {/* Tagline over system frame */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-1 text-xs text-stone-400 border-b border-stone-800/80 mb-3 gap-2">
            <span className="font-semibold text-stone-300 tracking-wide uppercase text-[11px] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-emerald-500"></span>
              Live Architecture Preview • Interactive System Interfaces
            </span>
            <span className="text-stone-400 italic">
              "We don’t just design websites. We build systems."
            </span>
          </div>

          {/* Interactive Interface Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 scrollbar-none">
            <button
              onClick={() => setActiveSystemTab('school')}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSystemTab === 'school'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              School Website
            </button>
            <button
              onClick={() => setActiveSystemTab('student-portal')}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSystemTab === 'student-portal'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Student & Parent Portal
            </button>
            <button
              onClick={() => setActiveSystemTab('teacher-portal')}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSystemTab === 'teacher-portal'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Teacher Grading Console
            </button>
            <button
              onClick={() => setActiveSystemTab('hospital')}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSystemTab === 'hospital'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              Hospital Digital Front Door
            </button>
            <button
              onClick={() => setActiveSystemTab('admin-dashboard')}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSystemTab === 'admin-dashboard'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Executive Admin Dashboard
            </button>
            <button
              onClick={() => setActiveSystemTab('booking')}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSystemTab === 'booking'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Booking & Intake Engine
            </button>
          </div>

          {/* Main Desktop Frame */}
          <div className="relative rounded-lg border border-stone-700/80 bg-[#12151B] shadow-2xl overflow-hidden">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900/90 border-b border-stone-800 text-xs">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D0F12] border border-stone-800 rounded px-3 py-1 text-[11px] text-stone-400 font-mono max-w-sm w-full truncate justify-center">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>
                  {activeSystemTab === 'school' && 'https://savannahcrest.ac.ke'}
                  {activeSystemTab === 'student-portal' && 'https://portal.savannahcrest.ac.ke/student/results'}
                  {activeSystemTab === 'teacher-portal' && 'https://staff.savannahcrest.ac.ke/gradebook/form-3b'}
                  {activeSystemTab === 'hospital' && 'https://stjude-hospital.org/departments'}
                  {activeSystemTab === 'admin-dashboard' && 'https://systems.keystonedigital.co.ke/admin/analytics'}
                  {activeSystemTab === 'booking' && 'https://reserve.karibu-retreat.co.ke/checkout'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-stone-500">
                <Search className="w-3.5 h-3.5" />
                <Bell className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Rendered Live Screen Mockup based on selected system */}
            <div className="min-h-[380px] p-4 sm:p-6 bg-[#0E1116]">
              {/* 1. School Public Website Interface */}
              {activeSystemTab === 'school' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-emerald-800/80 flex items-center justify-center font-bold text-xs text-white">
                        SC
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                          Savannah Crest High School
                        </div>
                        <div className="text-[10px] text-stone-400">Academic Excellence & Moral Integrity</div>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3 text-xs text-stone-300">
                      <span className="text-emerald-400 font-medium">Home</span>
                      <span>Academics</span>
                      <span>Admissions</span>
                      <span>Term Calendar</span>
                      <button className="bg-emerald-700 text-white text-[11px] px-2.5 py-1 rounded">
                        Portal Login
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="md:col-span-2 bg-gradient-to-r from-stone-900 to-stone-900/60 p-5 rounded border border-stone-800">
                      <span className="inline-block text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">
                        Form 1 Intake Open
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Nurturing resilient young women in science and leadership.
                      </h3>
                      <p className="text-xs text-stone-300 mb-4 max-w-md">
                        Explore our CBC STEM laboratories, modern library, boarding amenities, and national exam honors.
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-600 text-stone-950 font-bold text-xs px-3 py-1.5 rounded-sm">
                          Download 2026 Prospectus
                        </span>
                        <span className="text-xs text-stone-400 px-2 py-1">Virtual Campus Tour</span>
                      </div>
                    </div>

                    <div className="bg-stone-900/80 p-4 rounded border border-stone-800 space-y-3">
                      <div className="text-xs font-bold text-stone-200 uppercase tracking-wider flex items-center justify-between">
                        <span>Notice Board</span>
                        <span className="text-[10px] text-emerald-400">Term 3</span>
                      </div>
                      <div className="text-[11px] space-y-2 text-stone-400">
                        <div className="p-2 bg-stone-950/60 rounded border border-stone-800">
                          <span className="text-white font-medium block">Mid-term break dates confirmed</span>
                          <span className="text-[10px] text-stone-500">Departing 14th Oct • Bus travel notice</span>
                        </div>
                        <div className="p-2 bg-stone-950/60 rounded border border-stone-800">
                          <span className="text-white font-medium block">Parent Consultation Day</span>
                          <span className="text-[10px] text-stone-500">Saturday 9:00 AM • Main Hall</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Student & Parent Portal Screen */}
              {activeSystemTab === 'student-portal' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-xs text-emerald-400 font-bold">
                        P
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Parent Portal: Guardian of Faith Chebet (Form 3 East)</div>
                        <div className="text-[10px] text-stone-400">Adm No: SC-2023-0184 • Class Teacher: Mr. Ouma</div>
                      </div>
                    </div>
                    <span className="text-[11px] bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded">
                      Fee Clearance: 100% Cleared
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="bg-stone-900 p-3 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 font-bold block">Overall Mean Grade</span>
                      <span className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">A- (78.4%)</span>
                      <span className="text-[10px] text-stone-500 block mt-1">Class Rank: 4 of 52 students</span>
                    </div>
                    <div className="bg-stone-900 p-3 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 font-bold block">Term Attendance</span>
                      <span className="text-2xl font-extrabold text-white font-mono tabular-nums">98.5%</span>
                      <span className="text-[10px] text-stone-500 block mt-1">0 Unexcused Absences</span>
                    </div>
                    <div className="bg-stone-900 p-3 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 font-bold block">Pending Assignments</span>
                      <span className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">2 Due</span>
                      <span className="text-[10px] text-stone-500 block mt-1">Physics & History essays</span>
                    </div>
                    <div className="bg-stone-900 p-3 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 font-bold block">Digital Report Card</span>
                      <button className="mt-2 text-xs bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 px-2 py-1 rounded w-full flex items-center justify-center gap-1">
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-stone-950 p-3 rounded border border-stone-800/80">
                    <div className="text-xs font-semibold text-stone-300 mb-2 flex items-center justify-between">
                      <span>Term Examination Breakdown</span>
                      <span className="text-[10px] text-stone-500">Updated by Academic Dean</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2 bg-stone-900 rounded border border-stone-800 flex justify-between">
                        <span className="text-stone-400">Mathematics</span>
                        <span className="font-bold text-white">82% (A)</span>
                      </div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800 flex justify-between">
                        <span className="text-stone-400">English</span>
                        <span className="font-bold text-white">76% (A-)</span>
                      </div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800 flex justify-between">
                        <span className="text-stone-400">Chemistry</span>
                        <span className="font-bold text-white">88% (A)</span>
                      </div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800 flex justify-between">
                        <span className="text-stone-400">Biology</span>
                        <span className="font-bold text-white">79% (A-)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Teacher Grading Console */}
              {activeSystemTab === 'teacher-portal' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div>
                      <div className="text-xs font-bold text-white">Teacher Gradebook • Form 3 Chemistry (Term 2 CAT 2)</div>
                      <div className="text-[10px] text-stone-400">Stream: 3 Blue • Total Enrolled: 48 Students</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-emerald-600 text-stone-950 font-bold px-2.5 py-1 rounded cursor-pointer">
                        Save & Calculate Means
                      </span>
                    </div>
                  </div>

                  <div className="overflow-x-auto text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-800 text-[10px] uppercase text-stone-400">
                          <th className="py-2 px-2">Adm No</th>
                          <th className="py-2 px-2">Student Name</th>
                          <th className="py-2 px-2">CAT 1 (30)</th>
                          <th className="py-2 px-2">Practical (20)</th>
                          <th className="py-2 px-2">Exam (50)</th>
                          <th className="py-2 px-2">Total %</th>
                          <th className="py-2 px-2">Grade</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800/60 text-stone-300">
                        <tr>
                          <td className="py-2 px-2 font-mono text-[11px] text-stone-500">MM-2023-004</td>
                          <td className="py-2 px-2 text-white font-medium">Amina Hassan</td>
                          <td className="py-2 px-2">26</td>
                          <td className="py-2 px-2">18</td>
                          <td className="py-2 px-2">44</td>
                          <td className="py-2 px-2 font-bold text-emerald-400">88%</td>
                          <td className="py-2 px-2 font-bold text-emerald-400">A</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-mono text-[11px] text-stone-500">MM-2023-018</td>
                          <td className="py-2 px-2 text-white font-medium">Faith Chebet</td>
                          <td className="py-2 px-2">27</td>
                          <td className="py-2 px-2">17</td>
                          <td className="py-2 px-2">42</td>
                          <td className="py-2 px-2 font-bold text-emerald-400">86%</td>
                          <td className="py-2 px-2 font-bold text-emerald-400">A</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-mono text-[11px] text-stone-500">MM-2023-042</td>
                          <td className="py-2 px-2 text-white font-medium">Grace Muthoni</td>
                          <td className="py-2 px-2">22</td>
                          <td className="py-2 px-2">15</td>
                          <td className="py-2 px-2">35</td>
                          <td className="py-2 px-2 font-bold text-stone-200">72%</td>
                          <td className="py-2 px-2 font-bold text-stone-200">B+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 4. Hospital Digital Front Door */}
              {activeSystemTab === 'hospital' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-red-950 border border-red-500/50 flex items-center justify-center text-red-400 font-bold text-xs">
                        +
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">St. Jude Medical Hospital & Specialist Centers</div>
                        <div className="text-[10px] text-stone-400">24/7 Emergency • Outpatient • Maternity • Diagnostics</div>
                      </div>
                    </div>
                    <span className="text-[11px] bg-red-950/50 text-red-300 border border-red-700/60 px-2 py-0.5 rounded font-mono">
                      Emergency: +254 700 999 112
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1">Step 1: Department</span>
                      <div className="text-xs font-bold text-white">Consultant Pediatrician</div>
                      <div className="text-[11px] text-stone-400 mt-1">Child health & immunization clinic</div>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1">Step 2: Specialist</span>
                      <div className="text-xs font-bold text-white">Dr. Joyce Kariuki (MBChB, MMed)</div>
                      <div className="text-[11px] text-emerald-400 mt-1">Available: Mon, Wed, Fri 9am - 3pm</div>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1">Step 3: Direct Request</span>
                      <button className="w-full mt-1 bg-emerald-600 text-stone-950 font-bold text-xs py-1.5 rounded">
                        Request Consultation
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-950 rounded border border-stone-800 text-xs flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-stone-400">Accepted Cover: Jubilee • AAR • Britam • APA • Madison • NHIF/SHIF</span>
                    <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Instant WhatsApp Patient Triage Enabled
                    </span>
                  </div>
                </div>
              )}

              {/* 5. Executive Admin Dashboard */}
              {activeSystemTab === 'admin-dashboard' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div>
                      <div className="text-xs font-bold text-white">Operations & Enrollment Central Engine</div>
                      <div className="text-[10px] text-stone-400">System Status: All 8 Services Operational • Database: Active</div>
                    </div>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                      Online: 1,420 Active Users
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase">Monthly Inquiries</span>
                      <div className="text-xl font-bold text-white mt-1">348</div>
                      <span className="text-[10px] text-emerald-400">+24% vs last month</span>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase">Direct Consultations</span>
                      <div className="text-xl font-bold text-white mt-1">42 Booked</div>
                      <span className="text-[10px] text-stone-400">18 Completed</span>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase">Database Queries</span>
                      <div className="text-xl font-bold text-white mt-1">99.98% Uptime</div>
                      <span className="text-[10px] text-stone-400">Sub-50ms latency</span>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase">Invoices Generated</span>
                      <div className="text-xl font-bold text-emerald-400 mt-1">KSh 1.84M</div>
                      <span className="text-[10px] text-stone-400">Automated PDF Engine</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Booking & Intake Engine */}
              {activeSystemTab === 'booking' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div>
                      <div className="text-xs font-bold text-white">Conference & Retreat Reservation Gateway</div>
                      <div className="text-[10px] text-stone-400">Automated venue scheduling & quote calculation</div>
                    </div>
                    <span className="text-xs text-stone-300">Selected: Acacia Grand Hall</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 block mb-1">Duration & Dates</span>
                      <div className="font-semibold text-white">Oct 14 - Oct 16, 2026 (3 Days)</div>
                      <div className="text-stone-400 text-[11px] mt-1">Residential Boarding</div>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 block mb-1">Delegates</span>
                      <div className="font-semibold text-white">65 Corporate Attendees</div>
                      <div className="text-stone-400 text-[11px] mt-1">Buffet Lunch & PA system included</div>
                    </div>
                    <div className="p-3 bg-stone-900 rounded border border-stone-800">
                      <span className="text-[10px] uppercase text-stone-400 block mb-1">Instant Package Estimate</span>
                      <div className="font-bold text-emerald-400 text-sm">KSh 195,000 Total</div>
                      <div className="text-stone-500 text-[10px]">Instant M-PESA or Bank Invoice</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
