import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle, Phone, MessageSquare, Calendar } from 'lucide-react';
import { FAQ_ITEMS, SALON_INFO } from '../data';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onOpenContact?: () => void;
  onOpenBooking?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact, onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Colour & Balayage',
    'Appointments & Consultations',
    'Hair Care & Maintenance',
    'Policies',
  ];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faqs"
      className="bg-[#faf9f6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#ece8de]/70"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-2 font-medium">
            CLIENT CONCIERGE & CARE
          </span>
          <h2
            id="faqs-main-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] uppercase tracking-[0.22em] font-normal"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] font-light max-w-xl mx-auto mt-3 leading-relaxed">
            Everything you need to know about our bespoke services, consultation process, and maintaining your hair health.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-xs font-medium'
                    : 'bg-white text-[#555555] hover:text-[#111111] border border-[#e4ded3] hover:border-[#c5a059]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`bg-white border transition-all duration-200 ${
                  isOpen ? 'border-[#c5a059] shadow-xs' : 'border-[#ece8de] hover:border-[#d9d0c1]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] text-[#c5a059] uppercase tracking-[0.18em] font-serif block">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#191e23] font-normal leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-colors mt-0.5 ${
                      isOpen
                        ? 'bg-[#c5a059] text-white border-[#c5a059]'
                        : 'bg-[#faf9f6] text-[#666666] border-[#e2dcd0]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-[14px] text-[#4a4a4a] leading-relaxed sm:leading-loose font-light border-t border-[#f0ece3]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 sm:mt-16 bg-[#161c21] text-white p-6 sm:p-8 border border-[#2a343d] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1.5">
            <h4 className="font-serif text-lg sm:text-xl tracking-[0.15em] text-[#dfba73] uppercase font-normal">
              HAVE A SPECIFIC QUESTION?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 font-light max-w-md leading-relaxed">
              Our front desk concierge and stylists are here to assist with personalized recommendations and strand evaluations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-[0.18em] transition-colors border border-white/15 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>Send Inquiry</span>
              </button>
            )}

            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
