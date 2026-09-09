import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceToBook,
}) => {
  if (!isOpen) return null;

  const categories = [
    { key: 'color', label: 'COLOR SERVICES & BALAYAGE' },
    { key: 'cut', label: 'PRECISION CUTS & SHAPING' },
    { key: 'style', label: 'BLOWOUTS & EVENT STYLING' },
    { key: 'treatment', label: 'RESTORATIVE TREATMENTS' },
  ];

  return (
    <div
      id="services-full-menu-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#faf9f6] text-[#222222] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-[#c5a059]/40 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-black p-1 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-10">
          <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.3em] block mb-1">
            HAUT COIFFURE & BESPOKE CARE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-[0.2em] text-[#111111] font-normal">
            OUR SERVICES MENU
          </h2>
          <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#666666] font-light max-w-xl mx-auto">
            Every service begins with a one-on-one consultation to match your personal aesthetic,
            lifestyle, and hair integrity.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map(({ key, label }) => {
            const items = SERVICES_LIST.filter((s) => s.category === key);
            if (items.length === 0) return null;

            return (
              <div key={key} className="space-y-4">
                <h3 className="font-serif text-sm sm:text-base text-[#c5a059] uppercase tracking-[0.22em] border-b border-[#e6e0d4] pb-1.5 font-medium">
                  {label}
                </h3>

                <div className="divide-y divide-[#ece8de]">
                  {items.map((srv) => (
                    <div
                      key={srv.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group"
                    >
                      <div className="max-w-xl pr-4">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-serif text-sm sm:text-base text-[#111111] font-normal tracking-wide group-hover:text-[#c5a059] transition-colors">
                            {srv.name}
                          </h4>
                          <span className="text-[11px] text-[#888888] font-light">
                            • {srv.duration}
                          </span>
                        </div>
                        <p className="text-xs text-[#666666] font-light mt-1 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>

                      <div className="flex items-center sm:flex-col sm:items-end justify-between shrink-0 pt-2 sm:pt-0">
                        <span className="font-serif text-sm sm:text-base font-medium text-[#111111]">
                          ${srv.priceStartingAt}+
                        </span>
                        <button
                          onClick={() => {
                            onClose();
                            onSelectServiceToBook(srv.id);
                          }}
                          className="text-[11px] uppercase tracking-widest text-[#c5a059] hover:text-[#9e7932] underline underline-offset-4 cursor-pointer mt-1"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 bg-white border border-[#ece8de] text-center text-xs text-[#666666] font-light space-y-1">
          <p className="font-medium text-[#222222]">Individualized Consultation Guarantee</p>
          <p>
            Prices may vary based on hair length, density, and customized formulation. Complimentary
            in-person consultations are available prior to your service.
          </p>
        </div>
      </div>
    </div>
  );
};
