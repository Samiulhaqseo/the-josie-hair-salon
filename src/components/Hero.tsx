import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[780px] w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Layer with Flat-Lay Salon Tools */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury salon styling tools and shears flat-lay"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Deep luxury vignette and gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center py-16 sm:py-24">
        {/* Main Heading matching the screenshot */}
        <h1
          id="hero-headline"
          className="font-serif text-[#d6b165] flex flex-col items-center select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.28em] font-normal mb-1 sm:mb-2">
            CEDAR RAPIDS'
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.22em] font-normal mb-1 sm:mb-2">
            PREMIER SALON
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.28em] font-normal">
            EXPERIENCE
          </span>
        </h1>

        {/* Decorative Divider Line */}
        <div className="w-16 h-[1px] bg-[#c5a059]/40 my-6 sm:my-8" />

        {/* "BOOK APPOINTMENT" Button matching the boxed outline style in the screenshot */}
        <button
          id="hero-book-appointment-btn"
          onClick={onOpenBooking}
          className="group relative inline-flex items-center justify-center border border-white/80 hover:border-[#dfba73] bg-transparent hover:bg-white text-white hover:text-[#0f1418] px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
        >
          <span>BOOK APPOINTMENT</span>
        </button>
      </div>

      {/* Subtle bottom edge gradient to smooth transition into white About section */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#faf9f6]/20 to-transparent pointer-events-none" />
    </section>
  );
};
