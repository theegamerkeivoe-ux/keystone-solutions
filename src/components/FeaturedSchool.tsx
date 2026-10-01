import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Globe,
  UserCheck,
  Users,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  FileText,
  Calendar,
  DollarSign,
  Award,
  CheckCircle2
} from 'lucide-react';

export const FeaturedSchool: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTier, setActiveTier] = useState<'public' | 'student' | 'parent' | 'teacher' | 'admin'>('public');

  return (
    <section className="py-24 bg-[#0D1015] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                EDUCATION
              </span>
              <span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase border border-stone-700">
                CONCEPT PROJECT
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
              From school website to complete digital platform.
            </h2>
            <p className="text-stone-300 text-base mt-2 max-w-2xl">
              Case study concept: <strong className="text-white">Savannah Crest High School</strong> (Concept Institution). How a modern institution bridges public admissions with daily student, parent, and teacher workflows.
            </p>
          </div>

          <div>
            <button
              onClick={() => navigateTo('book-consultation')}
              className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>View School Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive 5-Tier Portal Navigator */}
        <div className="bg-[#12151B] border border-stone-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Navigation Bar for Tiers */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-stone-800 bg-[#0E1116] text-xs">
            <button
              onClick={() => setActiveTier('public')}
              className={`p-3.5 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-r border-stone-800/80 ${
                activeTier === 'public'
                  ? 'bg-emerald-950/60 text-emerald-400 border-b-2 border-b-emerald-500'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Public Website</span>
            </button>

            <button
              onClick={() => setActiveTier('student')}
              className={`p-3.5 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-r border-stone-800/80 ${
                activeTier === 'student'
                  ? 'bg-emerald-950/60 text-emerald-400 border-b-2 border-b-emerald-500'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Student Portal</span>
            </button>

            <button
              onClick={() => setActiveTier('parent')}
              className={`p-3.5 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-r border-stone-800/80 ${
                activeTier === 'parent'
                  ? 'bg-emerald-950/60 text-emerald-400 border-b-2 border-b-emerald-500'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Parent Portal</span>
            </button>

            <button
              onClick={() => setActiveTier('teacher')}
              className={`p-3.5 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-r border-stone-800/80 ${
                activeTier === 'teacher'
                  ? 'bg-emerald-950/60 text-emerald-400 border-b-2 border-b-emerald-500'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Teacher Portal</span>
            </button>

            <button
              onClick={() => setActiveTier('admin')}
              className={`col-span-2 sm:col-span-1 p-3.5 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                activeTier === 'admin'
                  ? 'bg-emerald-950/60 text-emerald-400 border-b-2 border-b-emerald-500'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>
          </div>

          {/* Tier Content Display */}
          <div className="p-6 sm:p-8">
            {/* 1. PUBLIC WEBSITE */}
            {activeTier === 'public' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Public Institutional Website</h3>
                    <p className="text-xs text-stone-400">The external face that prospective parents, alumni, and inspectors visit.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono text-emerald-400">
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">Home</span>
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">About</span>
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">Academics</span>
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">Admissions</span>
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">News</span>
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">Gallery</span>
                    <span className="bg-stone-900 px-2.5 py-1 rounded border border-stone-800">Contact</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-stone-900/60 rounded border border-stone-800 space-y-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Academic Profile & Values
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Detailed curriculum outline (CBC & 8-4-4 transitions), STEM initiatives, leadership clubs, and historical national exam results.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-900/60 rounded border border-stone-800 space-y-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      Online Admissions Gateway
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Downloadable joining instructions, medical assessment forms, uniform guidelines, and digital application submission with automated confirmation.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-900/60 rounded border border-stone-800 space-y-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      Term Calendar & Notices
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Always up-to-date term opening dates, visiting days, half-term breaks, and inter-school athletics events.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. STUDENT PORTAL */}
            {activeTier === 'student' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Student Portal</h3>
                    <p className="text-xs text-stone-400">Authenticated dashboard for enrolled students to track academic milestones.</p>
                  </div>
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded">
                    Student Login: Verified via Admission Number
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Academic Results</div>
                    <p className="text-[11px] text-stone-400">Instant access to CAT scores, term ranks, and teacher remarks.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Assignments</div>
                    <p className="text-[11px] text-stone-400">Download holiday assignments, project briefs, and reading lists.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Timetable</div>
                    <p className="text-[11px] text-stone-400">Daily lesson schedule, lab sessions, and weekend prep schedules.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Attendance</div>
                    <p className="text-[11px] text-stone-400">Class presence register verified by subject teachers.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Announcements</div>
                    <p className="text-[11px] text-stone-400">Direct student notices from the Head of Curriculum and sports captains.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. PARENT PORTAL */}
            {activeTier === 'parent' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Parent Portal</h3>
                    <p className="text-xs text-stone-400">Empowers parents and guardians with transparency without visiting the finance office.</p>
                  </div>
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded">
                    Parent Access: Mobile OTP Verification
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-stone-900/60 rounded border border-stone-800 space-y-1.5">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Child’s Performance
                    </div>
                    <p className="text-xs text-stone-400">
                      Subject-by-subject score graph, comparative term progress, and printable term report cards with principal stamp.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-900/60 rounded border border-stone-800 space-y-1.5">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4" /> Fees Information
                    </div>
                    <p className="text-xs text-stone-400">
                      Clear fee breakdown, current balance, verified bank account/paybill numbers, and payment receipt confirmations.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-900/60 rounded border border-stone-800 space-y-1.5">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4" /> School Circulars & Documents
                    </div>
                    <p className="text-xs text-stone-400">
                      Never miss a school circular. Direct PDF downloads of term newsletters, trip consent forms, and medical updates.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. TEACHER PORTAL */}
            {activeTier === 'teacher' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Teacher Portal</h3>
                    <p className="text-xs text-stone-400">Designed specifically for teaching staff to streamline administrative chores.</p>
                  </div>
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded">
                    Staff Authentication
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Class Rosters</div>
                    <p className="text-[11px] text-stone-400">Assigned classes, subject enrollment, and student contact cards.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Attendance Register</div>
                    <p className="text-[11px] text-stone-400">One-click morning roll call and lesson attendance marking.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Results Entry</div>
                    <p className="text-[11px] text-stone-400">Spreadsheet-style fast marks upload for CATs and terminal exams.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Assignments</div>
                    <p className="text-[11px] text-stone-400">Publish homework briefs and study reference files directly to students.</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/70 rounded border border-stone-800">
                    <div className="text-xs font-bold text-white mb-1">Teacher Timetable</div>
                    <p className="text-[11px] text-stone-400">Personal weekly lesson allocation and duty roster notifications.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. ADMIN PORTAL */}
            {activeTier === 'admin' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Administration Master Portal</h3>
                    <p className="text-xs text-stone-400">The control center for the Principal, Board of Management, and Finance Office.</p>
                  </div>
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded">
                    Role-Based Executive Control
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Students Database</span>
                    <span className="text-stone-400 text-[11px]">Enrollment, admission letters, transfers</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Teachers & Staff</span>
                    <span className="text-stone-400 text-[11px]">Subject allocation, leave approvals</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Parents Directory</span>
                    <span className="text-stone-400 text-[11px]">Guardians, phone contacts, linked wards</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Fees & Billing</span>
                    <span className="text-stone-400 text-[11px]">Invoicing, balance ledgers, fee reminders</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Exams & Ranking</span>
                    <span className="text-stone-400 text-[11px]">Automated grade curving, KNEC prep</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Bulk Notifications</span>
                    <span className="text-stone-400 text-[11px]">SMS alerts to all parents in 1 click</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Website CMS</span>
                    <span className="text-stone-400 text-[11px]">Publish news, term dates & photo gallery</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded border border-stone-800">
                    <span className="font-bold text-white block mb-0.5">Security & Backups</span>
                    <span className="text-stone-400 text-[11px]">Encrypted data vaults, daily backups</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
