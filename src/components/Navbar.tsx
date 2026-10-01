import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { Menu, X, ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg'; light?: boolean; withSubtitle?: boolean }> = ({
  size = 'md',
  light = false,
  withSubtitle = false
}) => {
  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Architectural Foundation Cornerstone Icon */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-sm bg-stone-900 border border-stone-800 shadow-sm transition-all duration-300 group-hover:border-emerald-500/60">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4.5 h-4.5 text-emerald-500 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Bedrock foundational stepped blocks */}
          <rect x="3" y="15" width="18" height="5" rx="0.5" fill="currentColor" fillOpacity="0.95" />
          <rect x="6" y="9" width="12" height="5" rx="0.5" fill="currentColor" fillOpacity="0.8" />
          <rect x="9" y="3" width="6" height="5" rx="0.5" fill="currentColor" fillOpacity="0.65" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight transition-colors whitespace-nowrap ${
            light ? 'text-white' : 'text-stone-100 group-hover:text-white'
          } ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base sm:text-lg'}`}
        >
          KEYSTONE SOLUTIONS
        </span>
        {withSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.16em] text-stone-400 font-semibold mt-1">
            Websites & Digital Systems
          </span>
        )}
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, isAdminAuthenticated } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Top Bar Contract: 5 focused primary navigation links
  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Work', page: 'work' },
    { label: 'Services', page: 'services' },
    { label: 'Process', page: 'process' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' }
  ];

  const handleNav = (page: PageId) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#0A0C10]/95 backdrop-blur-md border-stone-800/80 shadow-lg py-3'
          : 'bg-[#0A0C10]/70 backdrop-blur-sm border-transparent py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Zone 1: Single text element wordmark with clean icon */}
          <button
            onClick={() => handleNav('home')}
            className="focus:outline-none text-left cursor-pointer transition-opacity hover:opacity-90"
            aria-label="Keystone Home"
          >
            <Logo size="md" />
          </button>

          {/* Zone 2: 5 clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-sm cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-stone-800/80 border border-stone-700/70 shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNav('book-consultation')}
              className="text-stone-300 hover:text-white text-xs font-semibold uppercase tracking-wider px-3 py-2 flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Book Call</span>
            </button>

            <button
              onClick={() => handleNav('start-project')}
              className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm transition-all duration-150 flex items-center gap-1.5 shadow-sm hover:shadow-emerald-950/40 cursor-pointer active:scale-[0.98] whitespace-nowrap"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Admin Console Shortcut (Only visible when authenticated as an admin) */}
            {isAdminAuthenticated && (
              <button
                onClick={() => handleNav('admin')}
                title="Admin Console (Logged In)"
                aria-label="Admin Dashboard"
                className={`p-1.5 rounded-sm text-xs border transition-colors cursor-pointer shrink-0 ${
                  currentPage === 'admin'
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
                    : 'border-emerald-800 text-emerald-400 hover:bg-emerald-950/30'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNav('start-project')}
              className="bg-emerald-600 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-sm"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded border border-stone-800 bg-stone-900/80"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-800 bg-[#0C0E13] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`text-left px-3 py-2 rounded text-xs uppercase tracking-wider font-semibold ${
                  currentPage === link.page
                    ? 'bg-stone-800/90 text-emerald-400 font-bold border-l-2 border-emerald-500'
                    : 'text-stone-300 hover:bg-stone-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNav('industries')}
              className="text-left px-3 py-2 rounded text-xs uppercase tracking-wider font-semibold text-stone-300 hover:bg-stone-900"
            >
              Industries
            </button>

            <button
              onClick={() => handleNav('insights')}
              className="text-left px-3 py-2 rounded text-xs uppercase tracking-wider font-semibold text-stone-300 hover:bg-stone-900"
            >
              Insights
            </button>

            <div className="pt-3 border-t border-stone-800/80 mt-2 flex flex-col gap-2">
              <button
                onClick={() => handleNav('book-consultation')}
                className="w-full text-center py-2.5 text-xs uppercase font-bold tracking-wider text-stone-200 bg-stone-900 border border-stone-800 rounded-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                Book a Free Consultation
              </button>
              <button
                onClick={() => handleNav('start-project')}
                className="w-full text-center py-2.5 text-xs uppercase font-bold tracking-wider bg-emerald-600 text-stone-950 rounded-sm flex items-center justify-center gap-2"
              >
                Start a Project <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {isAdminAuthenticated && (
                <button
                  onClick={() => handleNav('admin')}
                  className="w-full text-left px-3 py-2 text-xs text-emerald-400 hover:text-emerald-300 flex items-center justify-between"
                >
                  <span>Admin Console</span>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
