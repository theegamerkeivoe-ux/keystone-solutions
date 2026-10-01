import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Send, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const StartProjectPage: React.FC = () => {
  const { addLead, pageParams, navigateTo, showToast } = useApp();

  const organizationTypes = [
    'School',
    'University',
    'Hospital',
    'Clinic',
    'Church',
    'NGO',
    'Business',
    'Government',
    'Hotel',
    'Other'
  ];

  const projectTypes = [
    'New Website',
    'Website Redesign',
    'School Portal',
    'Hospital Website',
    'Business Website',
    'Custom Portal',
    'Booking System',
    'Digital System',
    'Other'
  ];

  const budgetRanges = [
    'KSh 100,000–150,000',
    'KSh 150,000–300,000',
    'KSh 300,000–500,000',
    'KSh 500,000+',
    'Custom Scope / Not Sure'
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    phone: '',
    organizationType: 'School',
    projectType: 'New Website',
    budget: 'KSh 100,000–150,000',
    preferredLaunchDate: 'Within 1 Month',
    currentWebsite: '',
    projectDescription: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createdLeadId, setCreatedLeadId] = useState<string | null>(null);

  useEffect(() => {
    // If incoming with selected package or addons
    if (pageParams.selectedPackage) {
      setFormData(prev => ({
        ...prev,
        projectType: pageParams.selectedPackage.includes('ESSENTIAL') ? 'New Website' : pageParams.selectedPackage.includes('INSTITUTIONAL') ? 'New Website' : 'Custom Portal',
        budget: pageParams.selectedPackage.includes('ESSENTIAL') ? 'KSh 100,000–150,000' : pageParams.selectedPackage.includes('INSTITUTIONAL') ? 'KSh 150,000–300,000' : 'KSh 500,000+',
        projectDescription: `Interested in package: ${pageParams.selectedPackage}`
      }));
    }
    if (pageParams.addons) {
      setFormData(prev => ({
        ...prev,
        projectDescription: (prev.projectDescription ? prev.projectDescription + '\n' : '') + `Selected Add-ons: ${pageParams.addons}`
      }));
    }
  }, [pageParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.projectDescription) {
      showToast('Please fill in your name, email, phone, and project description.');
      return;
    }

    const lead = addLead({
      fullName: formData.fullName,
      organizationName: formData.organizationName || 'Unnamed Organization',
      email: formData.email,
      phone: formData.phone,
      organizationType: formData.organizationType,
      projectType: formData.projectType,
      budget: formData.budget,
      preferredLaunchDate: formData.preferredLaunchDate,
      currentWebsite: formData.currentWebsite,
      projectDescription: formData.projectDescription
    });

    setCreatedLeadId(lead.id);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              PROJECT INTAKE
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Tell us what you're trying to build.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Fill in the specifications below. Our engineering lead will review your requirements, prepare an architecture roadmap, and follow up with a formal scope proposal.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isSubmitted ? (
          <div className="bg-[#11141A] border-2 border-emerald-500/80 rounded-lg p-8 sm:p-12 text-center shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                PROPOSAL REQUEST RECEIVED
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Thanks. We've received your project request and will get back to you shortly.
              </h2>
            </div>

            <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been cataloged in our system. A project engineer is reviewing your operational goals and will respond with an initial scope and timeline estimate.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigateTo('home')}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm"
              >
                Back to Home
              </button>
              <button
                onClick={() => navigateTo('work')}
                className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm flex items-center gap-1.5"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="border-b border-stone-800 pb-3">
              <h3 className="text-base font-bold uppercase tracking-wider text-white">
                Contact & Organization Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dennis Kiptoo"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                  Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rift Valley Polytechnic"
                  value={formData.organizationName}
                  onChange={e => setFormData({ ...formData, organizationName: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="kiptoo@example.co.ke"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="border-t border-stone-800 pt-6">
              <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4">
                Project Scope & Parameters
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Organization Type */}
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Organization Type
                  </label>
                  <select
                    value={formData.organizationType}
                    onChange={e => setFormData({ ...formData, organizationType: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    {organizationTypes.map(org => (
                      <option key={org} value={org}>
                        {org}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    {projectTypes.map(p => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    {budgetRanges.map(b => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Launch Date */}
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Preferred Launch Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. In 4 weeks, or Before next term starts"
                    value={formData.preferredLaunchDate}
                    onChange={e => setFormData({ ...formData, preferredLaunchDate: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Current Website */}
                <div className="sm:col-span-2">
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Current Website (If applicable)
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourcurrentwebsite.com"
                    value={formData.currentWebsite}
                    onChange={e => setFormData({ ...formData, currentWebsite: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Project Description */}
                <div className="sm:col-span-2">
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Project Description & Requirements *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Describe your organization, who will use the website, key features you need (e.g. parent portal, appointments, M-PESA payments), and what your primary goal is..."
                    value={formData.projectDescription}
                    onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-4 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Request →</span>
              </button>
            </div>

            <div className="text-[11px] text-stone-400 text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Confidential • Fixed quote guarantee • Real engineers review every inquiry</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
