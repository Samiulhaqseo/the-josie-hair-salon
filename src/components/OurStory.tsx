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
              Laci | CR Iowa Hairstylist was founded by salon owner and master stylist Laci,
              whose dream is to provide a premier boutique salon experience to her Cedar Rapids
              clientele. Designed as a warm, welcoming sanctuary, the salon radiates the creative
              energy generated from a fantastic staff driven to deliver the best bespoke color,
              balayage, and cuts to their clients. Laci | CR Iowa Hairstylist is the place for you to
              become your most beautiful self.
            </p>
          </div>

          {/* Right Column: Laci Stylist Photograph */}
          <div className="relative order-1 md:order-2">
            <div
              id="our-story-image-container"
              className="relative overflow-hidden bg-[#e5dfd3] shadow-lg border border-[#ece8de] aspect-square max-w-md mx-auto"
            >
              <img
                id="our-story-laci-image"
                src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/763824691_3804590616358634_1176831187202434842_n.jpg?stp=dst-jpg_tt6&cstp=mx1366x2048&ctp=s1366x2048&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFN7rI8OO0ehfn0HqDks9RNvwt5bNDgiT6_C3ls0OCJPjkTH1GTDb65MeMAjCM1yBmeX96KMK1yQfL8QmfaU3sz&_nc_ohc=DOyFEaWdexsQ7kNvwF0Osg3&_nc_oc=AdqkuPnYSheZ40ejRcUHPJ9drs4ybhIcRZBFsRacghF-kwOqrWm9ZSPD8-THFnnu1pk&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=SbcElpLlMzjDpIZVm9oI0w&_nc_ss=792a8&oh=00_AQKwOYyMVZLaetK76oA4RRmP9tNYXgFX8ON-cjEwDdwDSw&oe=6AAAD87C"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/laci-story.jpg';
                }}
                alt="Laci, Owner of Laci | CR Iowa Hairstylist"
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
