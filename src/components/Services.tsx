import React from 'react';

interface ServicesProps {
  onOpenServicesModal: () => void;
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenServicesModal, onOpenBooking }) => {
  return (
    <section
      id="services"
      className="bg-[#faf9f6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#ece8de]/60"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2
          id="services-main-heading"
          className="font-serif text-[#c5a059] text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.25em] font-normal mb-6 sm:mb-8 select-none"
        >
          OUR SERVICES
        </h2>

        {/* Intro Paragraph */}
        <p
          id="services-intro-text"
          className="text-[#404040] text-sm sm:text-[15px] md:text-base leading-relaxed sm:leading-loose font-light max-w-3xl mx-auto mb-6"
        >
          At The Josie Hair Salon, we are proud to offer an array of highly specialized services to fit
          all of our client's needs. To ensure we achieve the vision you have for your hair, all
          salon experiences begin with in-depth consultation with your stylist.
        </p>

        {/* "LEARN MORE" Link */}
        <div className="mb-16 sm:mb-20">
          <button
            id="services-learn-more-btn"
            onClick={onOpenServicesModal}
            className="group inline-flex flex-col items-center cursor-pointer text-xs sm:text-sm font-medium tracking-[0.22em] text-[#c5a059] hover:text-[#9e7932] transition-colors uppercase focus:outline-none"
          >
            <span>LEARN MORE</span>
            <span className="w-full h-[1px] bg-[#c5a059] group-hover:bg-[#9e7932] mt-0.5 transition-colors" />
          </button>
        </div>

        {/* Three Columns: COLOR, CUT, STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start text-center">
          {/* Pillar 1: COLOR */}
          <div
            id="service-pillar-color"
            className="flex flex-col items-center group cursor-pointer"
            onClick={onOpenBooking}
          >
            {/* Custom line-art icon: Tint bowl and brush */}
            <div className="w-16 h-16 flex items-center justify-center mb-6 text-[#222222] transition-transform duration-300 group-hover:-translate-y-1">
              <svg
                className="w-12 h-12 stroke-current fill-none stroke-[1.1]"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hair color mixing bowl */}
                <path d="M10 22 C10 32 16 38 24 38 C32 38 38 32 38 22 Z" />
                <line x1="8" y1="22" x2="40" y2="22" />
                <line x1="18" y1="38" x2="30" y2="38" />
                {/* Tint brush dipped in bowl */}
                <line x1="28" y1="8" x2="22" y2="24" />
                <line x1="30" y1="9" x2="24" y2="24" />
                <polygon points="21,24 25,24 23.5,30" className="fill-current" />
                <circle cx="28.5" cy="7.5" r="1" className="fill-current" />
              </svg>
            </div>

            <h3 className="font-serif text-[#c5a059] text-xl sm:text-2xl uppercase tracking-[0.22em] font-normal mb-4 select-none">
              COLOR
            </h3>

            <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed font-light max-w-xs">
              With years of experience specializing in balayage and color correction, we tailor our
              wide range of services to meet your needs.
            </p>
          </div>

          {/* Pillar 2: CUT */}
          <div
            id="service-pillar-cut"
            className="flex flex-col items-center group cursor-pointer"
            onClick={onOpenBooking}
          >
            {/* Custom line-art icon: Shears and comb */}
            <div className="w-16 h-16 flex items-center justify-center mb-6 text-[#222222] transition-transform duration-300 group-hover:-translate-y-1">
              <svg
                className="w-12 h-12 stroke-current fill-none stroke-[1.1]"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Scissors */}
                <circle cx="16" cy="38" r="4.5" />
                <circle cx="28" cy="38" r="4.5" />
                <line x1="19" y1="34" x2="31" y2="12" />
                <line x1="25" y1="34" x2="13" y2="12" />
                <circle cx="22" cy="28" r="1" className="fill-current" />
                {/* Styling comb */}
                <line x1="36" y1="12" x2="36" y2="38" />
                <line x1="36" y1="14" x2="42" y2="14" />
                <line x1="36" y1="18" x2="42" y2="18" />
                <line x1="36" y1="22" x2="42" y2="22" />
                <line x1="36" y1="26" x2="42" y2="26" />
                <line x1="36" y1="30" x2="42" y2="30" />
                <line x1="36" y1="34" x2="42" y2="34" />
              </svg>
            </div>

            <h3 className="font-serif text-[#c5a059] text-xl sm:text-2xl uppercase tracking-[0.22em] font-normal mb-4 select-none">
              CUT
            </h3>

            <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed font-light max-w-xs">
              No haircut is ever the same; that's why we take the time to listen, understand, and
              adapt to your ever-changing needs.
            </p>
          </div>

          {/* Pillar 3: STYLE */}
          <div
            id="service-pillar-style"
            className="flex flex-col items-center group cursor-pointer"
            onClick={onOpenBooking}
          >
            {/* Custom line-art icon: Blowdryer with air stream */}
            <div className="w-16 h-16 flex items-center justify-center mb-6 text-[#222222] transition-transform duration-300 group-hover:-translate-y-1">
              <svg
                className="w-12 h-12 stroke-current fill-none stroke-[1.1]"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hairdryer body */}
                <path d="M12 18 L28 18 C33 18 36 21 36 25 C36 29 33 32 28 32 L12 32 Z" />
                <line x1="12" y1="18" x2="12" y2="32" />
                {/* Nozzle */}
                <rect x="7" y="21" width="5" height="8" rx="1" />
                {/* Handle */}
                <path d="M25 32 L22 42 L17 40 L19 32" />
                {/* Air stream swirls */}
                <path d="M4 21 C2 21 2 25 5 25" />
                <path d="M5 28 C2 28 2 32 4 32" />
              </svg>
            </div>

            <h3 className="font-serif text-[#c5a059] text-xl sm:text-2xl uppercase tracking-[0.22em] font-normal mb-4 select-none">
              STYLE
            </h3>

            <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed font-light max-w-xs">
              When it comes to style, nothing is unachievable. From runway ready to photoshoot
              casual, The Josie Hair Salon crafts the crown for any affair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
