import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const { settings, currentPage } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  // Don't clutter the admin dashboard with WhatsApp widget
  if (currentPage === 'admin') return null;

  const cleanPhone = settings.whatsApp.replace(/[^0-9]/g, '');

  const handleSend = (preset?: string) => {
    const textToSend = preset || customMessage || "Hello Keystone Solutions, I would like to inquire about a digital project for my organization.";
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textToSend)}`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    setIsOpen(false);
    setCustomMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Quick-Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#12151A] border border-stone-700/80 rounded-lg shadow-2xl p-4 text-stone-200 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                KS
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Keystone Solutions WhatsApp</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Direct Consultation Desk
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-stone-300 space-y-2">
            <p className="bg-stone-800/80 p-2.5 rounded-md border border-stone-700/50">
              👋 Hello! Tell us about your organization or pick a quick topic to start chatting with our engineering lead.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                onClick={() => handleSend("Hi! I'm interested in a School Website & Portal system.")}
                className="text-[11px] bg-stone-900 hover:bg-stone-800 border border-stone-700/70 text-stone-300 px-2 py-1 rounded transition-colors text-left"
              >
                🏫 School Portal Inquiry
              </button>
              <button
                onClick={() => handleSend("Hi! I need a quote for an institutional/hospital website.")}
                className="text-[11px] bg-stone-900 hover:bg-stone-800 border border-stone-700/70 text-stone-300 px-2 py-1 rounded transition-colors text-left"
              >
                🏥 Healthcare Website
              </button>
              <button
                onClick={() => handleSend("Hi! We have an existing website that needs a modern redesign.")}
                className="text-[11px] bg-stone-900 hover:bg-stone-800 border border-stone-700/70 text-stone-300 px-2 py-1 rounded transition-colors text-left"
              >
                🔄 Website Redesign
              </button>
              <button
                onClick={() => handleSend("Hi! I would like to book a 30-minute consultation call.")}
                className="text-[11px] bg-stone-900 hover:bg-stone-800 border border-stone-700/70 text-stone-300 px-2 py-1 rounded transition-colors text-left"
              >
                📅 Book Consultation Call
              </button>
            </div>

            <div className="pt-2 flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Type your message..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSend()}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 p-2 rounded transition-colors"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="text-[10px] text-stone-400 text-center border-t border-stone-800 pt-2">
            Direct Line: {settings.whatsApp}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold px-3 sm:px-4 py-3 rounded-full shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-stone-950 text-[#25D366]" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold text-stone-950">
          Chat with us
        </span>
      </button>
    </div>
  );
};
