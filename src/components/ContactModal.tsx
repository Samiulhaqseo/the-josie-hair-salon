import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact-salon-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#faf9f6] text-[#222222] max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#c5a059]/40 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black p-1 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-[0.2em]">MESSAGE SENT</h3>
            <p className="text-xs sm:text-sm text-[#666666] max-w-sm mx-auto">
              Thank you for contacting Laci | CR Iowa Hairstylist. Our front desk concierge will be in touch
              with you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#12161a] text-white hover:bg-[#c5a059] hover:text-black uppercase text-xs tracking-widest transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.3em] block mb-1">
                INQUIRE & CONNECT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.18em] text-[#111111] font-normal">
                CONTACT THE SALON
              </h3>
              <p className="text-xs text-[#666666] font-light mt-1">
                We welcome your questions, consultation requests, and feedback
              </p>
            </div>

            {/* Quick Contact Details */}
            <div className="bg-white p-4 border border-[#ece8de] mb-6 space-y-2 text-xs text-[#444444]">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>
                  {SALON_INFO.address.cityStateZip}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={SALON_INFO.phoneRaw} className="text-[#c5a059] underline font-medium">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="text-[#c5a059] underline font-medium">
                  {SALON_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Tuesday - Saturday: 9am - 6pm (Closed Sun/Mon)</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-white border border-[#d8d2c4] px-3 py-2 focus:border-[#c5a059] focus:outline-none text-[#222222]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full bg-white border border-[#d8d2c4] px-3 py-2 focus:border-[#c5a059] focus:outline-none text-[#222222]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+00 123 40000"
                    className="w-full bg-white border border-[#d8d2c4] px-3 py-2 focus:border-[#c5a059] focus:outline-none text-[#222222]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                  Message or Consultation Question
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our stylists assist you?"
                  className="w-full bg-white border border-[#d8d2c4] px-3 py-2 focus:border-[#c5a059] focus:outline-none text-[#222222]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#12161a] hover:bg-[#c5a059] text-white hover:text-black font-medium tracking-[0.2em] text-xs uppercase transition-colors shadow cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
