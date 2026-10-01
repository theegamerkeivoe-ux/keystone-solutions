import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Navbar';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, settings } = useApp();
  const [legalModal, setLegalModal] = React.useState<{ title: string; content: string } | null>(null);

  return (
    <footer className="bg-[#090A0D] border-t border-stone-800/80 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Foundation */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" light withSubtitle />
            <p className="text-stone-300 font-medium text-base mt-3 max-w-sm">
              We build the digital foundation your organization deserves.
            </p>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Specialized web design, multi-tier school portals, healthcare digital systems, and custom database web applications serving institutions in Kenya and internationally.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{settings.location} • {settings.operatingRegion}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-emerald-400 transition-colors">
                  {settings.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-400 transition-colors">
                  {settings.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-stone-100 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Professional Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left text-emerald-400/90 font-medium"
                >
                  School Websites & Portals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Healthcare Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Portals (Staff & Client)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Digital Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('pricing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Website Redesigns
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-stone-100 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => navigateTo('work')} className="hover:text-white transition-colors">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('industries')} className="hover:text-white transition-colors">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('process')} className="hover:text-white transition-colors">
                  Development Process
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')} className="hover:text-white transition-colors">
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  About Keystone
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('insights')} className="hover:text-white transition-colors">
                  Insights & Articles
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Start Here */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-stone-100 mb-4">
              Start Here
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('start-project')}
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('book-consultation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Book a Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('pricing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Get an Instant Quote
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${settings.whatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Keystone,%20I%20would%20like%20to%20inquire%20about%20a%20website%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Direct WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            <span
              onDoubleClick={() => navigateTo('admin')}
              className="cursor-default select-none"
              title=""
            >
              © 2026 Keystone Digital Solutions.
            </span>{' '}
            All Rights Reserved. Built for organizations that need more than a template.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-stone-400">Nairobi • Nakuru • Kisumu • Global</span>
            <button
              onClick={() =>
                setLegalModal({
                  title: 'Keystone Privacy Commitment',
                  content:
                    'We do not sell, rent, or distribute client data. Any information submitted via consultation intake, quotation calculators, or direct communication is held with strict confidentiality under modern data protection guidelines.'
                })
              }
              className="hover:text-stone-300 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() =>
                setLegalModal({
                  title: 'Keystone Terms & Engineering Standard',
                  content:
                    'All client engagements are governed by customized scope statements, milestone acceptance criteria, and formal service agreements ensuring clear intellectual property handover and uptime delivery.'
                })
              }
              className="hover:text-stone-300 cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Non-intrusive legal notice dialog */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#11141A] border border-stone-700/80 rounded-lg p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-display text-lg font-bold text-white">{legalModal.title}</h3>
            <p className="text-xs text-stone-300 leading-relaxed">{legalModal.content}</p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-stone-950 rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
