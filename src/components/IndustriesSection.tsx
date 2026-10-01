import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  HeartPulse,
  Building2,
  Globe2,
  Church,
  Hotel,
  Landmark,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const { navigateTo } = useApp();

  const industries = [
    {
      id: 'education',
      title: 'EDUCATION',
      subtitle: 'Schools, Universities, Colleges & Training Institutions',
      icon: GraduationCap,
      description:
        'From nursery and primary academies to national boarding high schools and technical colleges. We deliver public admissions websites, parent report card portals, and teacher gradebooks that modernize school operations.',
      features: ['Online Admissions & Prospectus', 'Student & Parent Portals', 'Term Exam Report Cards', 'Fee Guidelines & SMS Alerts']
    },
    {
      id: 'healthcare',
      title: 'HEALTHCARE',
      subtitle: 'Hospitals, Clinics & Medical Organizations',
      icon: HeartPulse,
      description:
        'Digital front doors engineered for patient peace of mind. We make it effortless for patients to look up consultant doctors, review department services, check insurance acceptance, and request appointments.',
      features: ['Doctor & Consultant Rosters', 'Clinical Specialty Directories', 'Direct Appointment Routing', 'Insurance / SHIF Information']
    },
    {
      id: 'business',
      title: 'BUSINESS & ENTERPRISE',
      subtitle: 'Companies, B2B Exporters & Professional Services',
      icon: Building2,
      description:
        'Websites built around business growth. We help established firms and expanding enterprises present their services with authority, showcase product catalogs, and generate qualified commercial leads.',
      features: ['Corporate Profile & Credentials', 'Technical Product Catalogs', 'Quote Estimator Flow', 'WhatsApp Direct Inquiries']
    },
    {
      id: 'ngos',
      title: 'NGOs & FOUNDATIONS',
      subtitle: 'Nonprofits, Community Trusts & Grant Programs',
      icon: Globe2,
      description:
        'Transparent storytelling platforms that satisfy institutional donors, showcase program impact with verifiable statistics, and host downloadable annual audited reports and grant application systems.',
      features: ['Impact & Beneficiary Data', 'Audited Annual Reports Vault', 'Grant Intake Forms', 'Community Field Stories']
    },
    {
      id: 'faith',
      title: 'FAITH-BASED ORGANIZATIONS',
      subtitle: 'Churches, Ministries & Religious Institutions',
      icon: Church,
      description:
        'Welcoming digital homes that publish weekly sermon archives, ministry event schedules, service times, and transparent member contribution/giving guidelines with secure M-PESA paybills.',
      features: ['Sermon Video & Audio Library', 'Weekly Service Timetables', 'Ministry & Youth Activities', 'Direct Giving & Tithe Guidance']
    },
    {
      id: 'hospitality',
      title: 'HOSPITALITY & VENUES',
      subtitle: 'Hotels, Safari Lodges, Venues & Retreat Centers',
      icon: Hotel,
      description:
        'Immersive visual presentations of accommodations, conference halls, and dining facilities with interactive date availability checkers and instant corporate retreat quote calculators.',
      features: ['Venue & Room Specifications', 'Date Availability Calendar', 'Automated Event Packages', 'Direct Booking Intake']
    },
    {
      id: 'government',
      title: 'GOVERNMENT & PUBLIC SECTOR',
      subtitle: 'County Departments, Parastatals & Public Bodies',
      icon: Landmark,
      description:
        'Fast, high-accessibility institutional websites that prioritize citizen service discovery, public tender procurement downloads, statutory gazette notices, and official leadership profiles.',
      features: ['Tenders & Procurement Portal', 'Public Citizen Service Guides', 'Downloadable Forms Vault', 'Official Executive Leadership']
    },
    {
      id: 'other',
      title: 'OTHER SECTORS',
      subtitle: "Don't see your industry listed?",
      icon: HelpCircle,
      description:
        "Whether you manage a SACCO, a regional agricultural cooperative, a legal chambers, or an international sports association, we design custom systems grounded in your exact operational needs.",
      features: ['Custom Workflow Architecture', 'Bespoke Database Schema', 'Role-Based Access Control', 'Tailored Discovery Process']
    }
  ];

  return (
    <section className="py-24 bg-[#0D0F12] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            SPECIALIZED SECTOR EXPERTISE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Built for your kind of organization.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            We don't force one generic template onto wildly different organizations. A school has completely different needs than a hospital or a commercial B2B supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map(ind => {
            const Icon = ind.icon;
            const isOther = ind.id === 'other';

            return (
              <div
                key={ind.id}
                className={`rounded-lg p-6 flex flex-col justify-between transition-all duration-200 ${
                  isOther
                    ? 'bg-emerald-950/20 border-2 border-dashed border-emerald-700/60'
                    : 'bg-[#11141A] border border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                      SECTOR
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {ind.title}
                  </h3>
                  <div className="text-xs text-emerald-400/90 font-medium mb-3">
                    {ind.subtitle}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="border-t border-stone-800/80 pt-3 mb-4">
                    <div className="text-[10px] uppercase font-bold text-stone-400 mb-2">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-1 text-[11px] text-stone-300">
                      {ind.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('start-project')}
                    className="w-full text-xs font-bold uppercase tracking-wider py-2 rounded text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-800 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isOther ? 'Tell Us What You Need' : `Build for ${ind.title}`}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
