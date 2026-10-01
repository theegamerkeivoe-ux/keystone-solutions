/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProcessPage } from './pages/ProcessPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CheckCircle2, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentPage, navigateTo, toastMessage, clearToast } = useApp();

  // Discreet Admin Access: keyboard shortcut (Alt+A or Ctrl+Shift+A) or URL search param (?admin=true or ?invite=...)
  React.useEffect(() => {
    // Check URL parameters on mount
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === 'true' || urlParams.get('page') === 'admin' || urlParams.get('invite')) {
        navigateTo('admin', { invite: urlParams.get('invite') || '' });
      }
    } catch {
      // Ignore
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt+A or Ctrl+Shift+A opens the admin portal
      if ((e.altKey && (e.key === 'a' || e.key === 'A')) || (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        navigateTo('admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateTo]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'work':
        return <WorkPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'process':
        return <ProcessPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'insights':
        return <InsightsPage />;
      case 'contact':
        return <ContactPage />;
      case 'book-consultation':
        return <BookConsultationPage />;
      case 'start-project':
        return <StartProjectPage />;
      case 'admin':
        return <AdminDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0F12] text-[#F3F4F6] selection:bg-emerald-600 selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Active Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer (shown on all public pages) */}
      {currentPage !== 'admin' && <Footer />}

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Toast Notification Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-stone-900 border border-emerald-500/80 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-200 max-w-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs text-stone-200 font-medium leading-snug">{toastMessage}</p>
          <button
            onClick={clearToast}
            className="text-stone-400 hover:text-white p-1 ml-auto"
            aria-label="Dismiss message"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
