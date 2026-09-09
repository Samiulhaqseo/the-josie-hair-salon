import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { SALON_INFO, STYLISTS } from '../data';
import { PageRoute } from '../types';

interface FooterProps {
  onOpenContact: () => void;
  onSelectStylist?: (stylistName: string) => void;
  onNavigate?: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onSelectStylist,
  onNavigate,
}) => {
  const handleNav = (route: PageRoute) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#151b20] text-white pt-16 sm:pt-20 border-t border-[#232c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: SALON & CONTACT (approx 3.5 cols) */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="font-serif text-[#c5a059] text-xs uppercase tracking-[0.25em] font-medium border-b border-[#2d3640] pb-2 inline-block">
              THE STUDIO
            </h3>

            <div className="space-y-3 text-xs sm:text-[13px] font-light text-white/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <p>
                  {SALON_INFO.address.street}
                  <br />
                  Suite {SALON_INFO.address.suite}
                  <br />
                  {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.zip}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={SALON_INFO.phoneRaw}
                  className="hover:text-[#dfba73] transition-colors"
                >
                  {SALON_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="hover:text-[#dfba73] transition-colors break-all"
                >
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-white/60">
                <p className="font-medium text-white/80 mb-1">Hours:</p>
                <p>Tue–Fri: 9am – 7pm</p>
                <p>Sat: 9am – 4pm • Sun–Mon: Closed</p>
              </div>
            </div>
          </div>

          {/* Column 2: EXPLORE SERVICES (approx 3 cols) */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="font-serif text-[#c5a059] text-xs uppercase tracking-[0.25em] font-medium border-b border-[#2d3640] pb-2 inline-block">
              SERVICES
            </h3>

            <ul className="space-y-2 text-xs sm:text-[13px] font-light text-white/80">
              <li>
                <button
                  onClick={() => handleNav('service-balayage')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer text-left"
                >
                  Bespoke Balayage & Blonde
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-precision-cut')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer text-left"
                >
                  Signature Precision Cut
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-gloss-treatment')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer text-left"
                >
                  Gloss & Bond Hydration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-keratin-smoothing')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer text-left"
                >
                  Keratin Smoothing Therapy
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => handleNav('services')}
                  className="text-[#c5a059] hover:underline font-medium cursor-pointer text-left"
                >
                  View Full Services Menu →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SALON PAGES & TEAM (approx 2.5 cols) */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h3 className="font-serif text-[#c5a059] text-xs uppercase tracking-[0.25em] font-medium border-b border-[#2d3640] pb-2 inline-block">
              THE SALON
            </h3>

            <ul className="space-y-2 text-xs sm:text-[13px] font-light text-white/80">
              <li>
                <button
                  onClick={() => handleNav('team')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer"
                >
                  Meet Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer"
                >
                  About Our Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy-policy')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms-and-conditions')}
                  className="hover:text-[#dfba73] transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: BRAND LOGO & SOCIALS (approx 3.5 cols) */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col items-center lg:items-end justify-between text-center lg:text-right space-y-6">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <Logo size="lg" className="border-2 border-[#c5a059]" />
            </div>

            <p className="text-xs text-white/60 font-light max-w-xs">
              Boutique hair salon specializing in bespoke balayage, precision haircutting, and healthy hair care in Cedar Rapids.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href={SALON_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white text-[#151b20] hover:bg-[#c5a059] hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white text-[#151b20] hover:bg-[#c5a059] hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[11px] text-white/40 tracking-wider">
              © {new Date().getFullYear()} The Josie Hair Salon. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Trim with Gold & Black Fluid Marble Pattern */}
      <div
        id="footer-marble-trim"
        className="h-10 sm:h-12 w-full relative overflow-hidden bg-cover bg-center border-t border-[#c5a059]/40"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#000000]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/20 via-transparent to-[#c5a059]/20 pointer-events-none" />
      </div>
    </footer>
  );
};
