import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Car, Sparkles, ArrowRight } from 'lucide-react';
import { SALON_INFO, STYLISTS } from '../data';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stylist: 'Any Master Stylist',
    service: 'Bespoke Balayage & Colour',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-24 pb-28">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <nav className="flex items-center space-x-2 text-xs text-[#777777] font-light">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#111111] font-medium">Contact Us</span>
        </nav>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16 sm:mb-20">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          CONNECT WITH CONCIERGE
        </span>
        <h1
          id="contact-page-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          WE WOULD LOVE TO HEAR FROM YOU
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
          Whether you have questions about custom formulations, scheduling a transformation, or seeking hair advice, our concierge is ready to assist.
        </p>
      </header>

      {/* Main Grid: Form + Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#ece8de] p-6 sm:p-10 shadow-xs">
            <div className="mb-8">
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.2em] font-medium block mb-1">
                ONLINE INQUIRY
              </span>
              <h2 className="font-serif text-2xl text-[#111111] font-normal">
                Send a Message to Our Front Desk
              </h2>
              <p className="text-xs text-[#666666] font-light mt-1">
                We respond to all digital inquiries within 24 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-[#faf9f6] border border-[#c5a059] rounded-full flex items-center justify-center text-[#c5a059] mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#111111]">
                  Thank You, {formData.name || 'Guest'}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light max-w-md mx-auto leading-relaxed">
                  Your message has been received by our salon concierge. We will review your inquiry and follow up shortly at {formData.email || 'your email'}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      stylist: 'Any Master Stylist',
                      service: 'Bespoke Balayage & Colour',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 border border-[#111111] text-xs uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(319) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1.5 font-medium">
                      Preferred Stylist
                    </label>
                    <select
                      value={formData.stylist}
                      onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111]"
                    >
                      <option value="Any Master Stylist">Any Master Stylist</option>
                      {STYLISTS.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.role.split('/')[0].trim()})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1.5 font-medium">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111]"
                  >
                    <option value="Bespoke Balayage & Colour">Bespoke Balayage & Colour</option>
                    <option value="Signature Precision Cut">Signature Precision Cut</option>
                    <option value="Gloss & Tone Refresh">Gloss & Tone Refresh</option>
                    <option value="Keratin Smoothing Therapy">Keratin Smoothing Therapy</option>
                    <option value="Color Correction Consultation">Color Correction Consultation</option>
                    <option value="General Question / Other">General Question / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1.5 font-medium">
                    How can we assist you? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your current hair history, goals, or timing preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111] leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#111111] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Info, Hours, Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white border border-[#ece8de] p-6 sm:p-8 space-y-6">
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.2em] font-medium block">
                SALON INFORMATION
              </span>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#111111] font-medium">
                      Studio Address
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#555555] font-light mt-0.5 leading-relaxed">
                      {SALON_INFO.address.cityStateZip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#111111] font-medium">
                      Telephone & Concierge
                    </h4>
                    <a
                      href={SALON_INFO.phoneRaw}
                      className="text-xs sm:text-[13px] text-[#111111] hover:text-[#c5a059] transition-colors font-medium mt-0.5 block"
                    >
                      {SALON_INFO.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-[#888888] font-light">
                      Calls & Text inquiries welcome
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#111111] font-medium">
                      Electronic Mail
                    </h4>
                    <a
                      href={`mailto:${SALON_INFO.email}`}
                      className="text-xs sm:text-[13px] text-[#111111] hover:text-[#c5a059] transition-colors font-light mt-0.5 block"
                    >
                      {SALON_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-6 border-t border-[#f2ede4]">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#111111] font-medium mb-3">
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-2 text-xs text-[#555555] font-light">
                  <div className="flex justify-between py-1 border-b border-[#f7f4ee]">
                    <span>Tuesday – Thursday</span>
                    <span className="font-medium text-[#111111]">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f7f4ee]">
                    <span>Friday</span>
                    <span className="font-medium text-[#111111]">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f7f4ee]">
                    <span>Saturday</span>
                    <span className="font-medium text-[#111111]">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-[#888888]">
                    <span>Sunday – Monday</span>
                    <span>Closed / VIP Events</span>
                  </div>
                </div>
              </div>

              {/* Parking note */}
              <div className="pt-4 border-t border-[#f2ede4] flex items-start space-x-3 text-xs text-[#666666] font-light leading-relaxed">
                <Car className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  Complimentary private client parking is located directly behind the studio with wheelchair-accessible ground entry.
                </span>
              </div>
            </div>

            {/* Direct Booking Callout */}
            <div className="bg-[#161c21] text-white p-6 sm:p-8 border border-[#2a343d] space-y-3 text-center sm:text-left">
              <span className="font-serif text-[11px] text-[#dfba73] uppercase tracking-[0.25em]">
                PREFER TO BOOK IMMEDIATELY?
              </span>
              <h4 className="font-serif text-xl font-normal">
                Reserve Online in Seconds
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Choose your master stylist, select your desired date and time, and receive instant calendar confirmation.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer mt-2"
              >
                Launch Booking Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
