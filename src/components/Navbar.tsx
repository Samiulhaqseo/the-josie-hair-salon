import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { Logo } from './Logo';
import { SALON_INFO } from '../data';
import { PageRoute } from '../types';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
  currentRoute?: PageRoute;
  onNavigate?: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenContact,
  currentRoute = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0d10]/95 backdrop-blur-md border-b border-[#252c34]/60 py-3 shadow-xl'
          : 'bg-[#000000] py-4 md:py-5 border-b border-[#1b2229]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          id="nav-logo-link"
          className="cursor-pointer transition-transform hover:scale-[1.02] focus:outline-none bg-transparent border-0 p-0 text-left"
          onClick={() => handleNavClick('home')}
        >
          <Logo size="md" />
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-xs sm:text-[13px] tracking-widest text-white/90">
          {/* BOOK NOW with gold underline */}
          <button
            id="nav-book-now-btn"
            onClick={onOpenBooking}
            className="group relative font-medium text-white tracking-[0.18em] py-1 cursor-pointer focus:outline-none transition-colors hover:text-[#dfba73]"
          >
            <span>BOOK NOW</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a059] transition-all group-hover:bg-[#dfba73]" />
          </button>

          <button
            id="nav-services-btn"
            onClick={() => handleNavClick('services')}
            className={`transition-colors cursor-pointer font-light tracking-[0.12em] ${
              currentRoute === 'services' || currentRoute.startsWith('service-')
                ? 'text-[#dfba73] font-normal'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Services
          </button>

          <button
            id="nav-team-btn"
            onClick={() => handleNavClick('team')}
            className={`transition-colors cursor-pointer font-light tracking-[0.12em] ${
              currentRoute === 'team'
                ? 'text-[#dfba73] font-normal'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Our Team
          </button>

          <button
            id="nav-about-btn"
            onClick={() => handleNavClick('about')}
            className={`transition-colors cursor-pointer font-light tracking-[0.12em] ${
              currentRoute === 'about'
                ? 'text-[#dfba73] font-normal'
                : 'text-white/80 hover:text-white'
            }`}
          >
            About
          </button>

          <button
            id="nav-faqs-btn"
            onClick={() => handleNavClick('faqs')}
            className={`transition-colors cursor-pointer font-light tracking-[0.12em] ${
              currentRoute === 'faqs'
                ? 'text-[#dfba73] font-normal'
                : 'text-white/80 hover:text-white'
            }`}
          >
            FAQs
          </button>

          <button
            id="nav-contact-btn"
            onClick={() => handleNavClick('contact')}
            className={`transition-colors cursor-pointer font-light tracking-[0.12em] ${
              currentRoute === 'contact'
                ? 'text-[#dfba73] font-normal'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Contact
          </button>

          {/* Phone number */}
          <a
            id="nav-phone-link"
            href={SALON_INFO.phoneRaw}
            className="inline-flex items-center space-x-1.5 text-white/90 hover:text-[#c5a059] transition-colors font-light tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>{SALON_INFO.phone}</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href={SALON_INFO.phoneRaw}
            aria-label="Call salon"
            className="p-2 text-[#c5a059] hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#c5a059] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden bg-[#0a0d10] border-b border-[#2a343d] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-3 uppercase tracking-widest text-xs font-light text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-2.5 bg-[#c5a059] text-black font-medium tracking-[0.2em]"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 tracking-wider transition ${
                currentRoute === 'home' ? 'text-[#c5a059] font-normal' : 'text-white/90 hover:text-[#c5a059]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`py-2 tracking-wider transition ${
                currentRoute === 'services' ? 'text-[#c5a059] font-normal' : 'text-white/90 hover:text-[#c5a059]'
              }`}
            >
              Services Menu
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className={`py-2 tracking-wider transition ${
                currentRoute === 'team' ? 'text-[#c5a059] font-normal' : 'text-white/90 hover:text-[#c5a059]'
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`py-2 tracking-wider transition ${
                currentRoute === 'about' ? 'text-[#c5a059] font-normal' : 'text-white/90 hover:text-[#c5a059]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className={`py-2 tracking-wider transition ${
                currentRoute === 'faqs' ? 'text-[#c5a059] font-normal' : 'text-white/90 hover:text-[#c5a059]'
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 tracking-wider transition ${
                currentRoute === 'contact' ? 'text-[#c5a059] font-normal' : 'text-white/90 hover:text-[#c5a059]'
              }`}
            >
              Contact Us
            </button>
            <a
              href={SALON_INFO.phoneRaw}
              className="pt-2 inline-flex items-center justify-center space-x-2 text-[#c5a059] text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{SALON_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
