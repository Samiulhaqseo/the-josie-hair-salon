import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="talk-around-town" className="w-full bg-[#1b232a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left Column: Model Photography */}
          <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85"
              alt="Client with glowing smile and sun-kissed blonde balayage hair"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02]"
            />
            {/* Dark gradient blend on mobile and right side */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#1b232a]/60 md:to-[#1b232a]" />
          </div>

          {/* Right Column: "TALK AROUND TOWN" Quotes */}
          <div className="flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-12 lg:px-16 py-16 sm:py-20">
            <div className="max-w-lg mx-auto flex flex-col items-center">
              {/* Heading matching the screenshot */}
              <h2
                id="testimonials-heading"
                className="font-serif text-[#c5a059] text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.25em] font-normal mb-8 sm:mb-10 select-none"
              >
                TALK AROUND TOWN
              </h2>

              {/* Quote text */}
              <div className="min-h-[130px] sm:min-h-[140px] flex items-center justify-center">
                <blockquote
                  key={current.id}
                  id={`testimonial-quote-${current.id}`}
                  className="font-serif text-white/95 text-base sm:text-lg md:text-xl leading-relaxed italic animate-in fade-in duration-500 font-light"
                >
                  “{current.quote}”
                </blockquote>
              </div>

              {/* Author & Location */}
              <p
                key={`author-${current.id}`}
                className="text-white/80 text-xs sm:text-sm tracking-wider font-light mt-6 mb-8 animate-in fade-in duration-500"
              >
                {current.author}, {current.location}
              </p>

              {/* Carousel Pagination Dots matching the screenshot */}
              <div className="flex items-center justify-center space-x-2.5">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'bg-[#c5a059] w-6 rounded-full scale-105'
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
