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
              Delaney Hair Stylist was founded by salon owner and master stylist Delaney,
              whose dream is to provide a premier boutique salon experience to her Cedar Rapids, Iowa
              clientele. Designed as a warm, welcoming sanctuary, the salon radiates the creative
              energy generated from a fantastic staff driven to deliver the best bespoke color,
              balayage, and cuts to their clients. Delaney Hair Stylist is the place for you to
              become your most beautiful self.
            </p>
          </div>

          {/* Right Column: Delaney Stylist Photograph */}
          <div className="relative order-1 md:order-2">
            <div
              id="our-story-image-container"
              className="relative overflow-hidden bg-[#e5dfd3] shadow-lg border border-[#ece8de] aspect-square max-w-md mx-auto"
            >
              <img
                id="our-story-delaney-image"
                src="https://scontent-iad6-1.xx.fbcdn.net/v/t39.30808-6/543391297_32216201701312748_5999289762247901511_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHNFq64HZoCftDrlQFyWA65cBc7HBDDCfVwFzscEMMJ9azw-KKMkQXs8JNHwEY6FrIq70aDRiK3AAzag3VuIKAs&_nc_ohc=_mgHmeJRX5gQ7kNvwEucc61&_nc_oc=AdpQdknS1Q7ws5gDPPPgfUpxrmr3vSzDM_sk6VnwFiCr7OdrFBPcBzend7mZgsNwOmI&_nc_zt=23&_nc_ht=scontent-iad6-1.xx&_nc_gid=nzrinsH9OKxwTs8rMNP8Vw&_nc_ss=792a8&oh=00_AQKCHzU0qBZ5WE5_PUH4UcuqUMzNVRsaKiZzyKmES37jtQ&oe=6AAAD279"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/our-story-lady.jpg';
                }}
                alt="Delaney, Owner of Delaney Hair Stylist"
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
