import React, { useState } from 'react';
import { Search, Plus, Minus, HelpCircle, MessageSquare, Calendar, Phone } from 'lucide-react';
import { FAQ_ITEMS, SALON_INFO } from '../data';
import { PageRoute } from '../types';

interface FaqPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id, FAQ_ITEMS[1].id]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Colour & Balayage',
    'Appointments & Consultations',
    'Hair Care & Maintenance',
    'Policies',
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
          <span className="text-[#111111] font-medium">Frequently Asked Questions</span>
        </nav>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-12 sm:mb-16">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          KNOWLEDGE BASE & SALON CARE
        </span>
        <h1
          id="faq-page-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
          Find transparent answers regarding our custom formulations, appointment preparation, aftercare routines, and salon policies.
        </p>
      </header>

      {/* Search and Filter Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#999999] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions or keywords (e.g. balayage, booking, cancel, products)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#ece8de] text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] text-[#111111] shadow-xs"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs tracking-wider transition-all duration-200 cursor-pointer ${
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
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              id={`page-faq-${faq.id}`}
              className={`bg-white border transition-all duration-200 ${
                isOpen ? 'border-[#c5a059] shadow-xs' : 'border-[#ece8de] hover:border-[#d9d0c1]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer select-none focus:outline-none"
              >
                <div className="space-y-1.5">
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
                <div className="px-6 pb-6 pt-1 text-xs sm:text-[14px] text-[#4a4a4a] leading-relaxed sm:leading-loose font-light border-t border-[#f0ece3]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#ece8de]">
            <p className="text-sm text-[#777777] font-light">
              No questions matched your search "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-xs text-[#c5a059] underline tracking-wider uppercase font-serif"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-[#161c21] text-white p-8 sm:p-10 border border-[#2a343d] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1.5">
            <span className="font-serif text-xs text-[#dfba73] uppercase tracking-[0.2em] font-medium block">
              NEED IMMEDIATE ASSISTANCE?
            </span>
            <h4 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.14em] font-normal">
              STILL HAVE QUESTIONS?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed max-w-md">
              Speak directly with our front desk concierge or send a private inquiry to Laci and the team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-[0.18em] transition-colors border border-white/15 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Contact Us</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-5 py-3 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
