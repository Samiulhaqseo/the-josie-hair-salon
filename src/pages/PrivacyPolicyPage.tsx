import React from 'react';
import { ShieldCheck, Lock, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SALON_INFO } from '../data';
import { PageRoute } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf9f6] min-h-screen pt-24 pb-28">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <nav className="flex items-center space-x-2 text-xs text-[#777777] font-light">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#111111] font-medium">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          LEGAL & DATA PROTECTION
        </span>
        <h1
          id="privacy-policy-title"
          className="font-serif text-3xl sm:text-5xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          PRIVACY POLICY
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-xs sm:text-sm text-[#777777] font-light">
          Last Updated: March 2026 • Delaney Hair Stylist, Cedar Rapids, Iowa
        </p>
      </header>

      {/* Main Legal Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#ece8de] p-8 sm:p-12 space-y-10 text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              1. Introduction & Our Commitment
            </h2>
            <p>
              At Delaney Hair Stylist ("we," "us," or "our"), located in {SALON_INFO.address.cityStateZip}, we prioritize the confidentiality and security of our guests’ personal information. This Privacy Policy details how we collect, store, utilize, and safeguard your personal details when you interact with our website, book salon appointments, participate in text message notifications, or visit our studio.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              2. Personal Data We Collect
            </h2>
            <p>
              When you schedule an appointment or submit an inquiry through our digital channels, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#555555]">
              <li><strong>Contact Information:</strong> Full legal or preferred name, email address, and mobile phone number.</li>
              <li><strong>Appointment Records:</strong> Dates, service types, selected stylist, and frequency of visits.</li>
              <li><strong>Hair & Color Profiles:</strong> Chemical history, patch-test results, allergy notes, scalp sensitivities, and personalized toner/lightener formulation formulas.</li>
              <li><strong>Billing & Payment Information:</strong> Credit card details collected via encrypted, PCI-DSS compliant third-party payment gateways. We never store raw credit card numbers on our local servers.</li>
              <li><strong>Photographs & Visual Media:</strong> Before-and-after transformation photos taken with your explicit verbal or written consent for salon portfolio and social media.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              3. How We Use Collected Information
            </h2>
            <p>
              Your personal information is used exclusively to deliver exceptional salon experiences and ensure seamless studio operations:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#555555]">
              <li>To confirm, coordinate, and modify your salon reservations.</li>
              <li>To transmit automated appointment confirmations and reminder text messages (SMS) or emails.</li>
              <li>To archive and reference your bespoke hair color formulations for future visits.</li>
              <li>To communicate important updates regarding salon hours, policy changes, or holiday schedules.</li>
              <li>To process payments, refunds, and issue electronic receipts.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              4. SMS & Automated Communication Policies
            </h2>
            <p>
              By providing your mobile phone number when scheduling an appointment, you consent to receive informational and transactional SMS messages regarding your upcoming visit (e.g., booking confirmations, reminders, parking updates). You may opt out of promotional messages at any time by replying "STOP" or notifying our front desk concierge directly.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              5. Information Sharing & Third Parties
            </h2>
            <p className="font-medium text-[#111111]">
              We do not sell, lease, rent, or trade your personal information to any third parties for advertising or commercial marketing purposes under any circumstances.
            </p>
            <p>
              Information is only shared with trusted service providers strictly necessary to execute salon operations, such as cloud-based scheduling software, SMS notification gateways, and merchant processing banks. All such vendors are contractually bound to maintain strict data confidentiality.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              6. Data Security & Retention
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technological security controls to safeguard your data against unauthorized access, disclosure, or alteration. Hair history profiles and formulation formulas are retained to guarantee consistent, safe color services over the lifespan of your patronage.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              7. Your Rights & Data Access
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to erroneous information, or request the deletion of your client profile and photographic records, subject to legal and financial retention requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-[#f2ede4]">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              8. Contacting Us Regarding Privacy
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our studio administrator:
            </p>
            <div className="bg-[#faf9f6] p-4 border border-[#e8e2d5] space-y-1 text-xs">
              <p className="font-medium text-[#111111]">Delaney Hair Stylist</p>
              <p>Attention: Privacy Administrator</p>
              <p>{SALON_INFO.address.cityStateZip}</p>
              <p>Telephone: {SALON_INFO.phoneFormatted}</p>
              <p>Email: {SALON_INFO.email}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
