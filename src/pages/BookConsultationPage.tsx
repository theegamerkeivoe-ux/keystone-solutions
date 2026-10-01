import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Consultation } from '../types';
import {
  Calendar as CalendarIcon,
  Clock,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video
} from 'lucide-react';

export const BookConsultationPage: React.FC = () => {
  const { bookConsultation, navigateTo } = useApp();

  const consultationTypes: Consultation['consultationType'][] = [
    'General Website',
    'School Website',
    'Healthcare Website',
    'Business Website',
    'Custom Portal',
    'Digital System'
  ];

  const timeSlots = [
    '09:00 AM - 09:45 AM (EAT)',
    '10:30 AM - 11:15 AM (EAT)',
    '02:00 PM - 02:45 PM (EAT)',
    '03:30 PM - 04:15 PM (EAT)',
    '05:00 PM - 05:45 PM (EAT)'
  ];

  // Helper date generation for next 10 business days
  const today = new Date();
  const availableDates: { dateStr: string; display: string }[] = [];
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Exclude Sundays
    if (d.getDay() !== 0) {
      availableDates.push({
        dateStr: d.toISOString().split('T')[0],
        display: d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        })
      });
    }
  }

  const [selectedType, setSelectedType] = useState<Consultation['consultationType']>('General Website');
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.dateStr || '');
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]);

  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [isBooked, setIsBooked] = useState(false);
  const [bookedDetails, setBookedDetails] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    const booking = bookConsultation({
      fullName: formData.fullName,
      organizationName: formData.organizationName || 'Not specified',
      email: formData.email,
      phone: formData.phone,
      projectType: selectedType,
      consultationType: selectedType,
      date: selectedDate,
      timeSlot: selectedTime,
      notes: formData.notes
    });

    setBookedDetails(booking);
    setIsBooked(true);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              EXPERT CONSULTATION
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Let's talk about what you're building.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Not sure exactly what you need? That's fine. Tell us about your organization and we'll help you figure out the right solution in a complimentary 45-minute technical discovery session.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isBooked ? (
          <div className="bg-[#11141A] border-2 border-emerald-500/80 rounded-lg p-8 sm:p-12 text-center shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                CONSULTATION CONFIRMED
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                We're looking forward to speaking with you!
              </h2>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded p-6 max-w-md mx-auto text-left space-y-2.5 text-xs text-stone-300">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Organization:</span>
                <span className="font-bold text-white">{bookedDetails?.organizationName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Topic:</span>
                <span className="font-bold text-emerald-400">{bookedDetails?.consultationType}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Scheduled Date:</span>
                <span className="font-bold text-white">{bookedDetails?.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Time Window:</span>
                <span className="font-bold text-white">{bookedDetails?.timeSlot}</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
              A calendar invitation and direct meeting link have been prepared for <strong>{bookedDetails?.email}</strong>. Our team will also send an SMS confirmation to <strong>{bookedDetails?.phone}</strong> prior to the call.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigateTo('home')}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm"
              >
                Return to Homepage
              </button>
              <button
                onClick={() => navigateTo('work')}
                className="bg-stone-900 hover:bg-stone-850 text-stone-200 border border-stone-700 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm"
              >
                Explore Projects →
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Step 1: Consultation Type */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-stone-950 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Select Consultation Type
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {consultationTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-3 text-left rounded border transition-colors cursor-pointer text-xs font-semibold ${
                      selectedType === type
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                        : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:bg-stone-850'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-stone-950 font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-emerald-400" />
                  Choose Date
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {availableDates.slice(0, 12).map(item => (
                  <button
                    key={item.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(item.dateStr)}
                    className={`p-2.5 rounded text-center text-xs border transition-all cursor-pointer ${
                      selectedDate === item.dateStr
                        ? 'bg-emerald-600 text-stone-950 font-bold border-emerald-400 shadow-sm'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    {item.display}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Time Slot */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-stone-950 font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Choose Available Time Slot (East Africa Time)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`p-2.5 rounded text-left text-xs border transition-colors cursor-pointer ${
                      selectedTime === slot
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div className="border-t border-stone-800 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-stone-950 font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Your Details
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
                    placeholder="e.g. Dr. Grace Wanjiku"
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
                    placeholder="e.g. Hillcrest International"
                    value={formData.organizationName}
                    onChange={e => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="gwanjiku@hillcrest.ac.ke"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 712 000 000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    What specific challenge or system would you like to discuss?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We have 800 students and want to roll out an online parent results portal before next term..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-4 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Video className="w-4 h-4" />
                <span>Confirm Free Consultation Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] text-stone-400 text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct engineer discussion • No obligations • Calendar invitations prepared</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
