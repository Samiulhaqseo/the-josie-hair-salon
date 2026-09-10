import React, { useState } from 'react';
import { Instagram, Users, ChevronRight, X } from 'lucide-react';
import { STYLISTS_LIST } from '../data';

interface TeamProps {
  onOpenBookingWithStylist?: (stylistName: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenBookingWithStylist }) => {
  const [showAllStylists, setShowAllStylists] = useState(false);
  const leadStylist = STYLISTS_LIST[0];

  return (
    <section
      id="team"
      className="bg-[#faf9f6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#ece8de]/60"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Team Mission Statement */}
          <div className="flex flex-col justify-center text-left">
            <h2
              id="team-main-heading"
              className="font-serif text-[#c5a059] text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.25em] font-normal mb-8 select-none"
            >
              THE JOSIE HAIR SALON TEAM
            </h2>

            <p
              id="team-description-body"
              className="text-[#404040] text-sm sm:text-[15px] md:text-base leading-relaxed sm:leading-loose font-light mb-8"
            >
              At The Josie Hair Salon, we pride ourselves on commitment to our customers. Our stylists
              are carefully selected for their dedication to excellence and devotion to refining
              their technique. We strive to stay informed on all of the latest trends, cutting
              edge styles, products and technology. We offer a wide range of salon services that
              vary from cutting, dimensional and corrective color services, as well as styling for
              all types of occasions and events.
            </p>

            <div>
              <button
                id="view-all-team-members-btn"
                onClick={() => setShowAllStylists(true)}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-[#c5a059] hover:text-[#9e7932] uppercase transition-colors group cursor-pointer"
              >
                <span>MEET OUR STYLISTS</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Featured Stylist Card (Owner Josie Davis) matching screenshot */}
          <div className="flex flex-col items-center">
            <div
              id="featured-stylist-card"
              className="relative w-full max-w-sm overflow-hidden bg-white shadow-lg border border-[#ece8de]"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ded8cb]">
                <img
                  src={leadStylist.image}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/team-josie.jpg';
                  }}
                  alt={`${leadStylist.name}, ${leadStylist.role}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Semi-transparent bio text box overlay exactly like in the screenshot */}
                <div className="absolute inset-x-4 bottom-14 bg-black/65 backdrop-blur-[2px] p-4 text-white text-center text-xs leading-relaxed font-light border border-white/10 shadow-sm">
                  <p>{leadStylist.bio}</p>

                  {/* Instagram / Social icon inside overlay */}
                  <div className="mt-3 flex justify-center">
                    <a
                      href={leadStylist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leadStylist.name} Social`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stylist Name & Title */}
              <div className="py-5 text-center bg-[#faf9f6]">
                <h3 className="font-serif text-[#111111] text-lg sm:text-xl font-medium uppercase tracking-[0.2em]">
                  {leadStylist.name}
                </h3>
                <p className="font-serif text-[#777777] text-xs uppercase tracking-[0.18em] mt-1 font-light">
                  {leadStylist.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to view all stylists */}
      {showAllStylists && (
        <div
          id="all-stylists-modal"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAllStylists(false)}
        >
          <div
            className="bg-[#faf9f6] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-[#e5dfd3]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAllStylists(false)}
              className="absolute top-6 right-6 text-[#777777] hover:text-[#111111] p-1.5 transition-colors"
              aria-label="Close team modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-10">
              <h2 className="font-serif text-[#c5a059] text-2xl sm:text-3xl uppercase tracking-[0.25em] font-normal mb-2">
                OUR ARTISTS & STYLISTS
              </h2>
              <p className="text-sm text-[#666666] font-light tracking-wide">
                Cedar Rapids' top colorists, precision cutters, and balayage specialists
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {STYLISTS_LIST.map((stylist) => (
                <div
                  key={stylist.id}
                  className="bg-white p-5 border border-[#ece8de] flex flex-col justify-between hover:border-[#c5a059] transition-colors"
                >
                  <div>
                    <h4 className="font-serif text-[#111111] text-base uppercase tracking-[0.15em] font-medium">
                      {stylist.name}
                    </h4>
                    <p className="text-[#c5a059] text-xs font-serif uppercase tracking-[0.15em] mb-3">
                      {stylist.role}
                    </p>
                    {stylist.specialties && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {stylist.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="bg-[#faf9f6] text-[#555555] text-[11px] px-2 py-0.5 border border-[#eee]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setShowAllStylists(false);
                      if (onOpenBookingWithStylist) {
                        onOpenBookingWithStylist(stylist.name);
                      }
                    }}
                    className="w-full text-center py-2 bg-[#12161a] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.18em] transition-colors mt-2"
                  >
                    Request with {stylist.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
