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

          {/* Right Column: Josie Stylist Photograph */}
          <div className="relative order-1 md:order-2">
            <div
              id="our-story-image-container"
              className="relative overflow-hidden bg-[#e5dfd3] shadow-lg border border-[#ece8de] aspect-square max-w-md mx-auto"
            >
              <img
                id="our-story-josie-image"
                src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/723240801_122204643632386712_4359750185395679601_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s206x206&_nc_cat=105&ccb=1-7&_nc_sid=7a06f5&_nc_eui2=AeFiAtOeyMGZ9lcC7avEBsZ-tyhnn_Jwq823KGef8nCrzXlcGd2f6fsc1no0LW0hXejL1U-j6ofJ6CBodVZ6i7ux&_nc_ohc=n7GxNxFt72MQ7kNvwHR3ypV&_nc_oc=AdpDpixO5ZVRpkXxlQb8jGOkDN9AmqIiqUh94WEi1zuqDiPRRTZyR7W97yZpqxaT_nE&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=eDH5a1oyjp3nSUjouLsuwg&_nc_ss=792a8&oh=00_AQKrvjudWL4m2P_DZL8dbndC8YVS6MQBBi5vckbaJFovaA&oe=6AA7F868"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/team-josie.jpg';
                }}
                alt="Josie Davis, Owner of The Josie Hair Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
