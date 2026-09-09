import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Phone, Mail } from 'lucide-react';
import { STYLISTS_LIST, SERVICES_LIST, SALON_INFO } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStylist?: string;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedStylist,
  preselectedService,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedService, setSelectedService] = useState(preselectedService || SERVICES_LIST[0].id);
  const [selectedStylist, setSelectedStylist] = useState(preselectedStylist || 'Any Available Artist');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  const currentServiceItem = SERVICES_LIST.find((s) => s.id === selectedService) || SERVICES_LIST[0];

  return (
    <div
      id="booking-appointment-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#faf9f6] text-[#222222] max-w-xl w-full max-h-[95vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#c5a059]/40 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black p-1 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="text-center mb-6">
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.3em] block mb-1">
                RESERVATION REQUEST
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.18em] text-[#111111] font-normal">
                BOOK APPOINTMENT
              </h3>
              <p className="text-xs text-[#666666] font-light mt-1.5">
                Experience Cedar Rapids' premier individualized salon service
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                  Select Experience / Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} (from ${srv.priceStartingAt} • {srv.duration})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-[#777777] mt-1 font-light italic">
                  {currentServiceItem.description}
                </p>
              </div>

              {/* Stylist Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                  Preferred Stylist
                </label>
                <select
                  value={selectedStylist}
                  onChange={(e) => setSelectedStylist(e.target.value)}
                  className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                >
                  <option value="Any Available Artist">Any Available Master Stylist</option>
                  {STYLISTS_LIST.map((stylist) => (
                    <option key={stylist.id} value={stylist.name}>
                      {stylist.name} ({stylist.role})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Requested Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Preferred Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                  >
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:45 AM">11:45 AM</option>
                    <option value="1:15 PM">1:15 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:45 PM">3:45 PM</option>
                    <option value="4:45 PM">4:45 PM</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+57 319 4126217"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2.5 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Notes or Hair Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your current hair, desired changes, or inspirations..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-[#d8d2c4] px-3.5 py-2 rounded-none focus:border-[#c5a059] focus:outline-none text-[#222222]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#12161a] hover:bg-[#c5a059] text-white hover:text-black font-medium tracking-[0.22em] text-xs sm:text-sm uppercase transition-all duration-300 shadow-md cursor-pointer"
                >
                  CONFIRM APPOINTMENT REQUEST
                </button>
              </div>

              <p className="text-[11px] text-center text-[#777777] font-light">
                Prefer to speak directly? Call us at{' '}
                <a href={SALON_INFO.phoneRaw} className="text-[#c5a059] underline">
                  {SALON_INFO.phone}
                </a>
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Step */
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl uppercase tracking-[0.2em] text-[#111111]">
              APPOINTMENT REQUESTED
            </h3>

            <p className="text-sm text-[#555555] font-light leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-black font-medium">{name}</strong>. Our concierge
              at The Josie Hair Salon has received your appointment request for{' '}
              <strong className="text-black font-medium">{currentServiceItem.name}</strong> with{' '}
              <strong className="text-black font-medium">{selectedStylist}</strong>.
            </p>

            <div className="bg-white p-4 border border-[#ece8de] text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <p>
                <span className="text-gray-500">Date & Time:</span> {date || 'Next available'} at{' '}
                {timeSlot}
              </p>
              <p>
                <span className="text-gray-500">Salon:</span> {SALON_INFO.address.street},{' '}
                {SALON_INFO.address.cityStateZip}
              </p>
              <p>
                <span className="text-gray-500">Confirmation Sent:</span> {email || phone}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#12161a] text-white hover:bg-[#c5a059] hover:text-black uppercase text-xs tracking-[0.2em] transition-colors"
              >
                RETURN TO SALON
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
