import React from 'react';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { SalonInterior } from '../components/SalonInterior';
import { OurStory } from '../components/OurStory';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Team } from '../components/Team';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { InstagramVideosSection } from '../components/InstagramVideosSection';
import { PageRoute } from '../types';

interface HomePageProps {
  onOpenBooking: (stylistOrService?: string) => void;
  onOpenServicesModal: () => void;
  onOpenContactModal: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenServicesModal,
  onOpenContactModal,
  onNavigate,
}) => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onOpenServices={() => onNavigate('services')}
      />

      {/* 2. About Us - Welcome Intro */}
      <AboutUs onOpenAbout={() => onNavigate('about')} />

      {/* 3. Salon Interior Gallery */}
      <SalonInterior onOpenBooking={() => onOpenBooking()} />

      {/* 4. Our Story / Founder Spotlight */}
      <OurStory onOpenBooking={() => onOpenBooking('Laci')} />

      {/* 5. Services Menu Highlights */}
      <Services
        onOpenBooking={(serviceName) => onOpenBooking(serviceName)}
        onOpenAllServices={() => onNavigate('services')}
      />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Team Section */}
      <Team
        onOpenBookingWithStylist={(stylistName) => onOpenBooking(stylistName)}
      />

      {/* 8. Why Choose Us */}
      <WhyChooseUs onOpenBooking={() => onOpenBooking()} />

      {/* 9. Blog Section */}
      <BlogSection onOpenBooking={() => onOpenBooking()} />

      {/* 10. FAQs Section */}
      <FaqSection
        onOpenContact={onOpenContactModal}
        onOpenBooking={() => onOpenBooking()}
      />

      {/* 11. Instagram & TikTok Videos Section */}
      <InstagramVideosSection onOpenBooking={(look) => onOpenBooking(look)} />
    </>
  );
};
