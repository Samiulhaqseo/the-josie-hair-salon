import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#faf9f6] py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#ece8de]/60"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <h2
          id="about-us-heading"
          className="font-serif text-[#c5a059] text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.25em] font-normal mb-8 sm:mb-10 select-none"
        >
          ABOUT US
        </h2>

        {/* Descriptive Copy matching the exact text */}
        <div className="space-y-6 sm:space-y-7 text-[#404040] text-sm sm:text-[15px] md:text-base leading-relaxed sm:leading-loose font-light">
          <p id="about-us-p1">
            Delaney Hair Stylist is Cedar Rapids, Iowa's premier full-service salon offering the latest in cut,
            color and style. We believe beauty is more than just how you look, it's how you feel.
            Whether you're looking for a drastic change or just need a refresh, our stylists at Delaney
            Hair Stylist are dedicated to offering you the very best individualized salon
            experience.
          </p>

          <p id="about-us-p2">
            Led by an extraordinary artist and salon owner, Delaney has brought
            together unrivaled talent and her own unique creative edge to create Cedar Rapids, Iowa's top salon
            experience.
          </p>

          <p id="about-us-p3" className="font-normal text-[#222222]">
            Book an appointment today or come by for a tour and experience the salon firsthand.
          </p>
        </div>
      </div>
    </section>
  );
};
