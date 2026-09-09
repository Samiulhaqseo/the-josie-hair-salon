import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServicesModal } from './components/ServicesModal';
import { ContactModal } from './components/ContactModal';

// Pages
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { PageRoute } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [preselectedStylist, setPreselectedStylist] = useState<string | undefined>(undefined);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Scroll to top upon page navigation
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (stylistOrService?: string) => {
    // Determine whether argument is a stylist or service
    if (
      stylistOrService &&
      (stylistOrService.includes('Balayage') ||
        stylistOrService.includes('Cut') ||
        stylistOrService.includes('Gloss') ||
        stylistOrService.includes('Keratin') ||
        stylistOrService.includes('Blowout') ||
        stylistOrService.includes('Consultation') ||
        stylistOrService.includes('Treatment'))
    ) {
      setPreselectedService(stylistOrService);
      setPreselectedStylist(undefined);
    } else if (stylistOrService) {
      setPreselectedStylist(stylistOrService);
      setPreselectedService(undefined);
    } else {
      setPreselectedStylist(undefined);
      setPreselectedService(undefined);
    }
    setBookingOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'team':
        return (
          <TeamPage
            onNavigate={handleNavigate}
            onOpenBooking={(stylistName) => handleOpenBooking(stylistName)}
          />
        );

      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
          />
        );

      // 4 Dedicated Hair Salon Service Detail Pages
      case 'service-balayage':
        return (
          <ServiceDetailPage
            serviceKey="balayage"
            onNavigate={handleNavigate}
            onOpenBooking={(name) => handleOpenBooking(name)}
          />
        );

      case 'service-precision-cut':
        return (
          <ServiceDetailPage
            serviceKey="precision-cut"
            onNavigate={handleNavigate}
            onOpenBooking={(name) => handleOpenBooking(name)}
          />
        );

      case 'service-gloss-treatment':
        return (
          <ServiceDetailPage
            serviceKey="gloss-treatment"
            onNavigate={handleNavigate}
            onOpenBooking={(name) => handleOpenBooking(name)}
          />
        );

      case 'service-keratin-smoothing':
        return (
          <ServiceDetailPage
            serviceKey="keratin-smoothing"
            onNavigate={handleNavigate}
            onOpenBooking={(name) => handleOpenBooking(name)}
          />
        );

      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        );

      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        );

      case 'faqs':
        return (
          <FaqPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        );

      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;

      case 'terms-and-conditions':
        return <TermsConditionsPage onNavigate={handleNavigate} />;

      case 'home':
      default:
        return (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenServicesModal={() => setServicesModalOpen(true)}
            onOpenContactModal={() => setContactModalOpen(true)}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans text-[#222222] selection:bg-[#c5a059]/20 selection:text-black">
      {/* 1. Header & Navigation with active route indicator */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* 2. Main Page Content Router */}
      <main className="flex-grow">{renderCurrentPage()}</main>

      {/* 3. Footer with Complete Directory Links */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
        onSelectStylist={(stylistName) => handleOpenBooking(stylistName)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedStylist={preselectedStylist}
        preselectedService={preselectedService}
      />

      <ServicesModal
        isOpen={servicesModalOpen}
        onClose={() => setServicesModalOpen(false)}
        onSelectServiceToBook={(serviceId) => handleOpenBooking(serviceId)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
