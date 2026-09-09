import React from 'react';
import { FileText, Clock, AlertTriangle, ShieldCheck, CheckCircle } from 'lucide-react';
import { SALON_INFO } from '../data';
import { PageRoute } from '../types';

interface TermsConditionsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigate }) => {
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
          <span className="text-[#111111] font-medium">Terms & Conditions</span>
        </nav>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          SALON ETIQUETTE & GUIDELINES
        </span>
        <h1
          id="terms-conditions-title"
          className="font-serif text-3xl sm:text-5xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          TERMS & CONDITIONS
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-xs sm:text-sm text-[#777777] font-light">
          Effective Date: March 2026 • The Josie Hair Salon, Cedar Rapids, Iowa
        </p>
      </header>

      {/* Main Legal Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#ece8de] p-8 sm:p-12 space-y-10 text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              1. Welcome & Acceptance of Terms
            </h2>
            <p>
              Welcome to The Josie Hair Salon. By scheduling an appointment, using our website, or receiving services at our salon located at {SALON_INFO.address.street}, Suite {SALON_INFO.address.suite}, {SALON_INFO.address.city}, Iowa, you acknowledge and agree to comply with the following salon policies, guidelines, and terms of service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              2. Dedicated Appointment Reservations
            </h2>
            <p>
              To maintain our uncompromising standard of personalized luxury, our stylists operate on an **exclusive, one-guest-at-a-time schedule with zero double-booking**. When you reserve an appointment, that designated block of time is reserved exclusively for you.
            </p>
            <p>
              Major chemical lightening, balayage, and color transformation appointments may require a valid credit card on file or a non-refundable deposit to secure the chair reservation.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              3. Cancellation, Rescheduling & No-Show Policy
            </h2>
            <div className="bg-[#faf9f6] p-4 border-l-2 border-[#c5a059] space-y-2">
              <p className="font-medium text-[#111111]">
                We kindly request a minimum of 24 to 48 hours notice for any cancellation or rescheduling.
              </p>
              <p className="text-xs text-[#555555]">
                Because your appointment is dedicated exclusively to you, last-minute cancellations leave our stylists unable to fill the opening with waiting clients.
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-[#555555] pt-1">
              <li><strong>Cancellations with &gt;48 hours notice:</strong> No fee; deposits are transferable to a new date.</li>
              <li><strong>Cancellations within 24–48 hours:</strong> May be subject to a cancellation fee equal to 50% of the scheduled service cost.</li>
              <li><strong>Same-Day Cancellations or No-Shows:</strong> Subject to a charge of up to 100% of the reserved service value. Repeat no-shows may be required to prepay in full for future visits.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              4. Punctuality & Late Arrival Policy
            </h2>
            <p>
              Please arrive 5 to 10 minutes prior to your scheduled reservation to relax, enjoy a beverage, and prepare for your consultation.
            </p>
            <p>
              We offer a 15-minute grace period. If you anticipate arriving more than 15 minutes late, please notify us immediately. In order to honor the reservations of subsequent guests, we may need to modify your service (such as omitting a blowout or focusing on root touch-up only) or reschedule your appointment.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              5. Service Satisfaction Guarantee & Adjustment Window
            </h2>
            <p>
              We take immense pride in our technical precision and client satisfaction. If your haircut, tone, or color result requires a technical adjustment, please contact our concierge within **7 days** of your original service date.
            </p>
            <p>
              We will gladly schedule a complimentary adjustment with your original stylist to evaluate and fine-tune your results. Please note that requesting a completely different color or style than what was agreed upon during the initial consultation constitutes a new service and will be priced accordingly. We do not issue cash or credit card refunds for services rendered.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              6. Chemical Services & Health Disclosures
            </h2>
            <p>
              For your safety and the structural integrity of your hair, guests must provide full and accurate disclosures regarding previous chemical treatments, including but not limited to box dyes, metallic salts, henna, relaxers, and perm solutions.
            </p>
            <p>
              Guests with known allergies or scalp conditions agree to request a complimentary patch test 48 hours prior to any chemical or coloring service. The Josie Hair Salon is not liable for adverse reactions resulting from undisclosed medical or chemical histories.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              7. Retail Products Exchange Policy
            </h2>
            <p>
              We want you to adore the hair care products you take home. Unopened or gently used products in their original packaging may be returned for salon credit or exchanged for an alternative product within **14 days** of purchase when accompanied by a valid salon receipt.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              8. Studio Atmosphere & Child Safety
            </h2>
            <p>
              The Josie Hair Salon is designed as a tranquil, peaceful retreat for all visitors. We kindly ask guests to silence mobile ringtones and use headphones when streaming audio or video.
            </p>
            <p>
              Due to sharp styling instruments, hot thermal irons, and chemical formulations, children are only permitted in the styling area when actively receiving a haircut service and accompanied by a supervising adult.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-4 border-t border-[#f2ede4]">
            <h2 className="font-serif text-lg sm:text-xl text-[#111111] font-normal uppercase tracking-wider">
              9. Contact & Inquiries
            </h2>
            <p>
              For questions regarding our terms, cancellations, or rescheduling, please contact our studio concierge at {SALON_INFO.phoneFormatted} or email us at {SALON_INFO.email}.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};
