import React from 'react';

export const OurStory: React.FC = () => {
  return (
    <section
      id="our-story"
      className="bg-[#faf9f6] py-16 sm:py-24 border-t border-[#ece8de]/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* Left Column: "OUR STORY" Text */}
          <div className="flex flex-col justify-center text-left order-2 md:order-1">
            <h2
              id="our-story-heading"
              className="font-serif text-[#c5a059] text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.25em] font-normal mb-6 sm:mb-8 select-none"
            >
              OUR STORY
            </h2>

            <p
              id="our-story-body"
              className="text-[#404040] text-sm sm:text-[15px] md:text-base leading-relaxed sm:leading-loose font-light"
            >
              The Josie Hair Salon was founded by salon owner and master stylist Josie Davis,
              whose dream is to provide a premier boutique salon experience to her Cedar Rapids
              clientele. Designed as a warm, welcoming sanctuary, the salon radiates the creative
              energy generated from a fantastic staff driven to deliver the best bespoke color,
              balayage, and cuts to their clients. The Josie Hair Salon is the place for you to
              become your most beautiful self.
            </p>
          </div>

          {/* Right Column: Lady Stylist Photograph */}
          <div className="relative order-1 md:order-2">
            <div
              id="our-story-image-container"
              className="relative overflow-hidden bg-[#e5dfd3] shadow-lg border border-[#ece8de] aspect-square max-w-md mx-auto"
            >
              <img
                src="/our-story-lady.jpg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://www.thelindseysalon.com/wp-content/uploads/2023/01/claire.jpg';
                }}
                alt="Josie Davis, Owner of The Josie Hair Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
