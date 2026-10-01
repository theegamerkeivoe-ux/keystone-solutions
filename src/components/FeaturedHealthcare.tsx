import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  HeartPulse,
  UserCheck,
  Calendar,
  Clock,
  Phone,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Stethoscope,
  Building,
  AlertCircle
} from 'lucide-react';

export const FeaturedHealthcare: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'patient-front-door' | 'admin-triage'>('patient-front-door');

  return (
    <section className="py-24 bg-[#0A0C10] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                HEALTHCARE
              </span>
              <span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase border border-stone-700">
                CONCEPT PROJECT
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
              A better digital front door for healthcare.
            </h2>
            <p className="text-stone-300 text-base mt-2 max-w-2xl">
              Hospitals and clinics need digital systems that reassure patients during vulnerable moments, clarify specialist schedules, and eliminate congested phone lines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('patient-front-door')}
              className={`px-3.5 py-2 text-xs font-bold rounded-sm uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'patient-front-door'
                  ? 'bg-emerald-600 text-stone-950'
                  : 'bg-stone-900 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              Public Front Door
            </button>
            <button
              onClick={() => setActiveTab('admin-triage')}
              className={`px-3.5 py-2 text-xs font-bold rounded-sm uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'admin-triage'
                  ? 'bg-emerald-600 text-stone-950'
                  : 'bg-stone-900 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              Staff Triage Desk
            </button>
          </div>
        </div>

        {/* Concept Card Frame */}
        <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-10 shadow-2xl">
          {activeTab === 'patient-front-door' ? (
            <div className="space-y-8">
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-800 pb-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-red-950/80 border border-red-800 flex items-center justify-center text-red-400">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">St. Jude Medical Hospital</h3>
                    <p className="text-xs text-stone-400">24/7 Level 5 Referral & Specialist Hospital</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="text-red-400 font-mono bg-red-950/50 border border-red-800/80 px-3 py-1.5 rounded flex items-center gap-1.5 font-bold">
                    <Phone className="w-3.5 h-3.5" /> Emergency: 0700 999 112
                  </span>
                  <button
                    onClick={() => navigateTo('book-consultation')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded transition-all cursor-pointer"
                  >
                    Request Appointment
                  </button>
                </div>
              </div>

              {/* 8 Core Healthcare Experience Elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-900/60 rounded border border-stone-800">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-emerald-400" />
                    Departments
                  </div>
                  <p className="text-xs text-stone-400">
                    Pediatrics, Cardiology, Obstetrics & Gynecology, Dental, Dialysis, Diagnostic Imaging (CT/MRI).
                  </p>
                </div>

                <div className="p-4 bg-stone-900/60 rounded border border-stone-800">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    Doctors & Specialists
                  </div>
                  <p className="text-xs text-stone-400">
                    Searchable physician roster with qualifications, clinic days, and direct room numbers.
                  </p>
                </div>

                <div className="p-4 bg-stone-900/60 rounded border border-stone-800">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    Appointment Request
                  </div>
                  <p className="text-xs text-stone-400">
                    3-step patient form routing inquiries to the correct department coordinator for instant callback.
                  </p>
                </div>

                <div className="p-4 bg-stone-900/60 rounded border border-stone-800">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-400" />
                    Locations & Branches
                  </div>
                  <p className="text-xs text-stone-400">
                    Main Hospital & 3 Satellite Outpatient Centers with embedded Google Maps GPS directions.
                  </p>
                </div>
              </div>

              {/* Patient Information & Insurance Strip */}
              <div className="p-4 bg-stone-950 rounded border border-stone-800/80 flex flex-col md:flex-row items-center justify-between text-xs gap-3">
                <div className="flex items-center gap-2 text-stone-300">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Patient Information Guide:</strong> Fast-track admission checklists, visiting hours (12:30pm & 4:30pm), and pre-operative preparation guidelines.
                  </span>
                </div>
                <div className="text-emerald-400 font-semibold shrink-0">
                  Direct NHIF / SHIF Clearance Ready
                </div>
              </div>
            </div>
          ) : (
            /* Staff Triage Desk Admin Concept */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">Clinic Triage & Outpatient Intake Dashboard</h3>
                  <p className="text-xs text-stone-400">Concept interface for admissions nurses and appointment desk.</p>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded">
                  Live Queue: 14 Patients Scheduled Today
                </span>
              </div>

              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-stone-800 text-[10px] uppercase text-stone-400">
                      <th className="py-2.5 px-3">Time</th>
                      <th className="py-2.5 px-3">Patient Name</th>
                      <th className="py-2.5 px-3">Specialty</th>
                      <th className="py-2.5 px-3">Consultant</th>
                      <th className="py-2.5 px-3">Cover / Payment</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 text-stone-300">
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-stone-400">09:30 AM</td>
                      <td className="py-2.5 px-3 text-white font-medium">Beatrice Njeri</td>
                      <td className="py-2.5 px-3">Antenatal Care</td>
                      <td className="py-2.5 px-3">Dr. M. Kiptoo</td>
                      <td className="py-2.5 px-3">Britam Private</td>
                      <td className="py-2.5 px-3"><span className="text-emerald-400 font-semibold">In Consultation</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-stone-400">10:15 AM</td>
                      <td className="py-2.5 px-3 text-white font-medium">Hassan Omar</td>
                      <td className="py-2.5 px-3">Orthopedics</td>
                      <td className="py-2.5 px-3">Dr. E. Barasa</td>
                      <td className="py-2.5 px-3">SHIF / NHIF</td>
                      <td className="py-2.5 px-3"><span className="text-amber-400 font-semibold">Triage Checked In</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-stone-400">11:00 AM</td>
                      <td className="py-2.5 px-3 text-white font-medium">Mercy Achieng</td>
                      <td className="py-2.5 px-3">Pediatrics (Follow-up)</td>
                      <td className="py-2.5 px-3">Dr. J. Kariuki</td>
                      <td className="py-2.5 px-3">AAR Insurance</td>
                      <td className="py-2.5 px-3"><span className="text-stone-400">Expected</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="pt-8 border-t border-stone-800 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400 italic">
              Note: Healthcare platforms comply with patient privacy standards and never make unverified medical claims.
            </span>

            <button
              onClick={() => navigateTo('start-project')}
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build a Healthcare Website</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
