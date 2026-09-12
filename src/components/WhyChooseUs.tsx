import React from 'react';
import { Sparkles, ShieldCheck, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      num: '01',
      title: 'Dedicated One-on-One Care',
      subtitle: 'Zero double-booking',
      description:
        'Your appointment is solely yours. From initial strand consultation to final blowout, your stylist is dedicated exclusively to your chair with undivided attention.',
      icon: Clock,
    },
    {
      num: '02',
      title: 'Health-First Formulations',
      subtitle: 'Preserving hair integrity',
      description:
        'We formulate with low-ammonia European color systems, bond-building peptides, and nourishing botanicals to ensure luminous shine without chemical fatigue.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Dimensional Colour Mastery',
      subtitle: 'Bespoke hand-painted balayage',
      description:
        'Specializing in seamless, lived-in blondes, melted brondes, and rich brunettes tailored to your skin undertone and natural texture for effortless grow-out.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Curated Home Prescriptions',
      subtitle: 'Longevity beyond the salon',
      description:
        'You leave with a personalized regimen of clean, professional products and styling advice, ensuring your salon-fresh tone and gloss endure for months.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-[#faf9f6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#ece8de]/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
            THE DELANEY DIFFERENCE
          </span>
          <h2
            id="why-choose-us-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-[0.18em] font-normal leading-tight"
          >
            Why Choose Us
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed max-w-xl mx-auto">
            A boutique salon sanctuary in Cedar Rapids, Iowa where meticulous craftsmanship, gentle formulations, and calm personal attention define every visit.
          </p>
        </div>

        {/* 4 Pillars Grid - Minimalist & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                id={`pillar-${pillar.num}`}
                className="group relative bg-white border border-[#ece8de] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#c5a059] hover:shadow-xs"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f3efe8]">
                    <span className="font-serif text-2xl sm:text-3xl text-[#c5a059] font-light tracking-wider">
                      {pillar.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#faf9f6] border border-[#e8e2d5] flex items-center justify-center text-[#111111] group-hover:bg-[#c5a059] group-hover:text-white group-hover:border-[#c5a059] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Subtitle & Title */}
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium block mb-1.5">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#191e23] font-normal mb-3.5 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#555555] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom indicator line */}
                <div className="mt-6 pt-4 border-t border-[#f3efe8] flex items-center space-x-2 text-[11px] text-[#c5a059] font-serif uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Delaney Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Bottom Pledge Strip */}
        <div className="mt-14 sm:mt-16 bg-white border border-[#ece8de] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-serif italic text-base sm:text-lg text-[#191e23]">
              "Healthy hair is the foundation of timeless beauty. We never rush the process."
            </p>
            <p className="text-xs text-[#888888] font-light uppercase tracking-wider">
              Delaney & The Styling Team • Cedar Rapids, Iowa
            </p>
          </div>

          {onOpenBooking && (
            <button
              type="button"
              onClick={onOpenBooking}
              className="shrink-0 px-6 py-3 bg-[#111111] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
            >
              Reserve Your Chair
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
