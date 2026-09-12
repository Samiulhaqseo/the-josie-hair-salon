import React from 'react';
import { Calendar, Instagram, Award, Sparkles, Scissors, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import { STYLISTS, SALON_INFO } from '../data';
import { PageRoute } from '../types';

interface TeamPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingWithStylist: (stylistName?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, onOpenBookingWithStylist }) => {
  return (
    <div className="bg-[#faf9f6] min-h-screen pt-24 pb-28">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <nav className="flex items-center space-x-2 text-xs text-[#777777] font-light">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#111111] font-medium">Our Team</span>
        </nav>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16 sm:mb-24">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          MEET OUR ARTISTS
        </span>
        <h1
          id="team-page-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          THE ARTISANS OF LACI | CR IOWA HAIRSTYLIST
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
          Every stylist at Laci | CR Iowa Hairstylist has been hand-selected for their passion for healthy hair, continuous master-level education, and warm, attentive chair-side care.
        </p>
      </header>

      {/* Stylist Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {STYLISTS.map((stylist, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article
              key={stylist.id}
              id={`team-member-${stylist.id}`}
              className={`flex flex-col ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-10 lg:gap-16 bg-white border border-[#ece8de] p-6 sm:p-10 lg:p-12 shadow-xs`}
            >
              {/* Image Area */}
              <div className="w-full lg:w-5/12 aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-[#ebe6dc] border border-[#e5ded2]">
                <img
                  src={stylist.image}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (stylist.id === 'stephanie-arias') {
                      target.src = '/team-stephanie.jpg';
                    } else if (stylist.id === 'kenny-slack') {
                      target.src = '/team-kenny.jpg';
                    } else {
                      target.src = '/team-laci.jpg';
                    }
                  }}
                  alt={stylist.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-[11px] font-serif uppercase tracking-widest text-[#111111] border border-[#e2dacb]">
                  {stylist.role}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="w-full lg:w-7/12 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#c5a059] font-serif uppercase tracking-[0.2em] mb-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Master Stylist Profile</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-wide font-normal">
                    {stylist.name}
                  </h2>
                  <p className="text-sm text-[#777777] font-serif italic mt-1">
                    {stylist.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                  {stylist.bio}
                </p>

                {/* Specialties */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#888888] font-medium mb-3">
                    AREAS OF EXPERTISE
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stylist.specialties?.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#faf9f6] border border-[#e4ded3] text-xs text-[#333333] font-light"
                      >
                        <CheckCircle className="w-3 h-3 text-[#c5a059]" />
                        <span>{specialty}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chair Philosophy */}
                <div className="p-4 bg-[#faf9f6] border-l-2 border-[#c5a059] text-xs sm:text-sm italic text-[#555555] font-serif leading-relaxed">
                  "Healthy hair is always in fashion. When we honor the natural strand, the color looks luminous for months."
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenBookingWithStylist(stylist.name)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#111111] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {stylist.name.split(' ')[0]}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center space-x-2 px-5 py-3 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs uppercase tracking-[0.22em] transition-colors cursor-pointer"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {stylist.instagram && (
                    <a
                      href={`https://instagram.com/${stylist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#777777] hover:text-[#c5a059] transition-colors ml-auto"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>{stylist.instagram}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Careers Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 text-center">
        <div className="bg-[#161c21] text-white p-8 sm:p-12 border border-[#2a343d]">
          <span className="font-serif text-xs text-[#dfba73] uppercase tracking-[0.25em] block mb-2 font-medium">
            JOIN OUR FAMILY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.16em] mb-4 font-normal">
            ARE YOU A PASSIONATE COLORIST OR STYLIST?
          </h3>
          <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed max-w-xl mx-auto mb-6">
            We are always seeking dedicated artists who value craft, client hospitality, and continuing education. Enjoy a calm, boutique environment with zero double-booking pressure.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
          >
            Inquire About Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};
