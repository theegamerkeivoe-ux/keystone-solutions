import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings, addLead, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in your name, email, and message.');
      return;
    }

    addLead({
      fullName: formData.name,
      organizationName: formData.organization || 'Direct Contact Inquiry',
      email: formData.email,
      phone: formData.phone || 'Not provided',
      organizationType: 'General',
      projectType: 'Contact Inquiry',
      budget: 'Inquiry',
      preferredLaunchDate: 'Immediate',
      projectDescription: formData.message
    });

    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              GET IN TOUCH
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Let's build something useful.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {settings.operatingRegion}. Reach out directly via email, phone, WhatsApp, or through the inquiry form below.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Centralized Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Communication Channels
              </h3>
              <p className="text-xs sm:text-sm text-stone-400">
                You speak directly with our engineering and strategy team. No automated runarounds.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              {/* Location */}
              <div className="p-4 bg-[#11141A] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    Location
                  </div>
                  <div className="text-white font-bold mt-0.5">{settings.location}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{settings.operatingRegion}</div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-[#11141A] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    Email
                  </div>
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-white hover:text-emerald-400 font-bold transition-colors block mt-0.5"
                  >
                    {settings.email}
                  </a>
                  <div className="text-xs text-stone-400 mt-0.5">Response within 24 hours</div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 bg-[#11141A] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    Telephone
                  </div>
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-emerald-400 font-bold transition-colors block mt-0.5"
                  >
                    {settings.phone}
                  </a>
                  <div className="text-xs text-stone-400 mt-0.5">{settings.officeHours}</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-4 bg-[#11141A] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    WhatsApp Desk
                  </div>
                  <a
                    href={`https://wa.me/${settings.whatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Keystone,%20I%20would%20like%20to%20inquire%20about%20a%20website%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors block mt-0.5"
                  >
                    {settings.whatsApp} (Click to Chat)
                  </a>
                  <div className="text-xs text-stone-400 mt-0.5">Fastest for quick inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-10 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                    Thank you. We have received your message and will review it promptly. An engineer will follow up via your provided email or phone.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', organization: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-4 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-sm"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-800 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-white">Send Us a Direct Message</h3>
                    <p className="text-xs text-stone-400">Fill in your details and we’ll get right back to you.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Kamau"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700/80 rounded px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Savannah Crest Academy"
                        value={formData.organization}
                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700/80 rounded px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700/80 rounded px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700/80 rounded px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your organization, project goals, timeline, or any questions you have..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700/80 rounded px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
