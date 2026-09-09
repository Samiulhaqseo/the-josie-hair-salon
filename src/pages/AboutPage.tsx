import React from 'react';
import { Sparkles, Heart, Award, Shield, CheckCircle, ArrowRight, MapPin, Phone } from 'lucide-react';
import { SALON_INFO } from '../data';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="bg-[#faf9f6] min-h-screen pt-24 pb-28">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <nav className="flex items-center space-x-2 text-xs text-[#777777] font-light">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#111111] font-medium">About Us</span>
        </nav>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16 sm:mb-20">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          OUR STORY & VALUES
        </span>
        <h1
          id="about-page-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          WHERE LUXURY MEETS HAIR INTEGRITY
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
          Founded in Cedar Rapids, Iowa by master colorist Josie Davis, The Josie Hair Salon was born out of a desire to eliminate the noise, rush, and chemical harshness of conventional salons.
        </p>
      </header>

      {/* Editorial Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.25em] font-medium block">
              THE GENESIS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] font-normal leading-snug">
              "We believe visiting a salon should feel like an unhurried retreat, not an assembly line."
            </h2>
            <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
              For over a decade, Josie Davis honed her craft in premier salons across the Midwest, studying advanced French balayage and European formulation. Yet she noticed an alarming pattern in the modern beauty industry: overlapping appointments, frantic stylists, and harsh chemicals that compromised long-term hair elasticity.
            </p>
            <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
              In 2021, Josie opened the doors to The Josie Hair Salon at 1100 3rd St SE with a revolutionary standard: **one guest at a time**. No double-booking. No assistants taking over crucial color formulation. Just uninterrupted, master-level artistry in a serene, natural-light sanctuary.
            </p>

            <div className="pt-2 flex items-center space-x-6">
              <div>
                <p className="font-serif text-2xl text-[#c5a059] font-normal">100%</p>
                <p className="text-[11px] text-[#777777] uppercase tracking-wider font-light">
                  Undivided Attention
                </p>
              </div>
              <div className="w-px h-10 bg-[#e4ded3]" />
              <div>
                <p className="font-serif text-2xl text-[#c5a059] font-normal">0%</p>
                <p className="text-[11px] text-[#777777] uppercase tracking-wider font-light">
                  Double Booking
                </p>
              </div>
              <div className="w-px h-10 bg-[#e4ded3]" />
              <div>
                <p className="font-serif text-2xl text-[#c5a059] font-normal">1,400+</p>
                <p className="text-[11px] text-[#777777] uppercase tracking-wider font-light">
                  5-Star Transformations
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-[#ebe6dc] border border-[#e2dcd0] shadow-sm relative">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85"
              alt="The Josie Hair Salon interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 border border-[#e2dacb]">
              <p className="font-serif italic text-xs text-[#111111]">
                "Every strand tells a story. Our mission is to make yours healthy, luminous, and effortless."
              </p>
              <p className="text-[10px] text-[#777777] uppercase tracking-wider mt-1">
                — Josie Davis, Founder & Master Stylist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.25em] font-medium block mb-2">
            WHAT WE STAND FOR
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] uppercase tracking-[0.16em] font-normal">
            Our Four Guiding Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Artisanal Craft',
              desc: 'We reject cookie-cutter formulas. Every cut, color blend, and balayage sweep is custom tailored to your bone structure and personal style.',
              icon: Sparkles,
            },
            {
              title: 'Hair Health Above All',
              desc: 'We will never compromise the structural integrity of your hair for an instant photo trend. We protect bonds first, always.',
              icon: Shield,
            },
            {
              title: 'Clean Formulations',
              desc: 'Low-ammonia, ammonia-free, sulfate-free, and cruelty-free European salon products that nourish both you and the environment.',
              icon: Heart,
            },
            {
              title: 'Unhurried Hospitality',
              desc: 'From our complimentary sparkling water and tea to calming acoustic playlists, our chair is your peaceful sanctuary.',
              icon: Award,
            },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#ece8de] p-8 flex flex-col justify-between hover:border-[#c5a059] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#faf9f6] border border-[#e5dfd3] flex items-center justify-center text-[#c5a059] mb-5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#111111] mb-3 font-normal">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555555] font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cedar Rapids Roots & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#161c21] text-white p-8 sm:p-14 border border-[#2a343d]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-serif text-xs text-[#dfba73] uppercase tracking-[0.25em] font-medium block">
                PROUDLY LOCATED IN CEDAR RAPIDS
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl uppercase tracking-[0.15em] font-normal leading-snug">
                VISIT OUR BOUTIQUE SANCTUARY
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed max-w-xl">
                Conveniently situated at {SALON_INFO.address.street}, Suite {SALON_INFO.address.suite}, in {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.zip}. Enjoy private guest parking directly behind the building and step into a calm, welcoming haven.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/90">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-[#dfba73]" />
                  <span>{SALON_INFO.address.street}, {SALON_INFO.address.city}, IA</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Phone className="w-4 h-4 text-[#dfba73]" />
                  <span>{SALON_INFO.phoneFormatted}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer text-center"
              >
                Reserve Your Chair
              </button>
              <button
                type="button"
                onClick={() => onNavigate('team')}
                className="w-full py-3.5 border border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-[0.22em] transition-colors cursor-pointer text-center"
              >
                Meet Our Stylists
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
