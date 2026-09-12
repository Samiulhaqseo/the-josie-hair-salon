import React, { useState } from 'react';
import { Sparkles, Clock, DollarSign, ArrowRight, Search, Check, ShieldCheck } from 'lucide-react';
import { SERVICES_LIST } from '../data';
import { PageRoute, ServiceItem } from '../types';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'color', label: 'Color & Lightening' },
    { id: 'cut', label: 'Precision Cuts' },
    { id: 'style', label: 'Blowouts & Styling' },
    { id: 'treatment', label: 'Luxury Treatments' },
  ];

  // Map spotlight service to specific detailed pages
  const getDetailRoute = (serviceName: string): PageRoute | null => {
    if (serviceName.toLowerCase().includes('balayage')) return 'service-balayage';
    if (serviceName.toLowerCase().includes('precision cut')) return 'service-precision-cut';
    if (serviceName.toLowerCase().includes('gloss')) return 'service-gloss-treatment';
    if (serviceName.toLowerCase().includes('keratin')) return 'service-keratin-smoothing';
    return null;
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <span className="text-[#111111] font-medium">Services Menu</span>
        </nav>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-16">
        <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.28em] block mb-3 font-medium">
          A LA CARTE & PACKAGES
        </span>
        <h1
          id="services-page-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.16em] font-normal leading-tight"
        >
          SALON SERVICES MENU
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto mt-6 mb-6" />
        <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
          Every hair appointment includes an unhurried, personalized consultation and luxury shampoo ritual with zero overlapping reservations.
        </p>
      </header>

      {/* 4 Spotlight Featured Service Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <span className="font-serif text-xs text-[#888888] uppercase tracking-[0.22em] font-medium">
            FEATURED SPECIALTIES
          </span>
          <h2 className="font-serif text-xl sm:text-2xl text-[#111111] uppercase tracking-wider font-normal mt-1">
            Explore Dedicated Service Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              id: 'balayage',
              title: 'Bespoke Balayage',
              tag: 'Lived-In Blonde',
              price: '$220+',
              time: '3 hrs',
              route: 'service-balayage' as PageRoute,
              image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
            },
            {
              id: 'precision-cut',
              title: 'Precision Cut & Style',
              tag: 'French Anatomical',
              price: '$75+',
              time: '60 min',
              route: 'service-precision-cut' as PageRoute,
              image: 'https://scontent-iad6-1.xx.fbcdn.net/v/t39.30808-6/673438053_122198811014386712_588884175228751790_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1320x1320&ctp=s1320x1320&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeESjZEutvPpCh6HW6kWhktt0t4wT94uSWrS3jBP3i5JamdaP8HYwuQZujVt3A5W9ApLk-PhwxIzcJBBPJ-Bmy31&_nc_ohc=yRoupB3kmmcQ7kNvwFhSsUA&_nc_oc=Adr-rb6w090raIc4INS_r_kW5x7caJ6hhwRPB52_E_9V8UgA4e62RHrS-5K5Irpe4mE&_nc_zt=23&_nc_ht=scontent-iad6-1.xx&_nc_gid=peVZ7iyvHuuI0FmFqDdZnw&_nc_ss=792a8&oh=00_AQIVrE_6ayRePpb_Gh3T1w4qY4xaagO9J1zEouAaXEan3A&oe=6AA7C503',
            },
            {
              id: 'gloss-treatment',
              title: 'Gloss & Bond Hydration',
              tag: 'Tone & Mirror Shine',
              price: '$65+',
              time: '45 min',
              route: 'service-gloss-treatment' as PageRoute,
              image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
            },
            {
              id: 'keratin-smoothing',
              title: 'Keratin Smoothing Therapy',
              tag: 'Anti-Frizz 5 Months',
              price: '$275+',
              time: '2.5 hrs',
              route: 'service-keratin-smoothing' as PageRoute,
              image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.route)}
              className="group bg-white border border-[#ece8de] overflow-hidden hover:border-[#c5a059] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-[#ebe6dc]">
                <img
                  src={item.image}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/team-laci.jpg';
                  }}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-[#111111]/85 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 tracking-wider uppercase font-mono">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-base text-[#111111] group-hover:text-[#9e7932] transition-colors font-normal">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-xs text-[#777777] font-light mt-1.5">
                    <span>{item.price}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#f2ede4] flex items-center justify-between text-xs text-[#c5a059] font-serif uppercase tracking-wider">
                  <span>Full Service Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-[#ece8de] p-4 sm:p-5 shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white font-medium shadow-xs'
                      : 'bg-[#faf9f6] text-[#666666] hover:text-[#111111] hover:bg-[#f0ece3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#999999] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#faf9f6] border border-[#e2dcd0] text-xs focus:outline-none focus:border-[#c5a059] text-[#111111]"
            />
          </div>
        </div>
      </section>

      {/* Complete Services List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const detailRoute = getDetailRoute(service.name);

            return (
              <article
                key={service.id}
                id={`service-item-${service.id}`}
                className="bg-white border border-[#ece8de] p-6 sm:p-8 flex flex-col justify-between hover:border-[#c5a059] transition-all duration-300 shadow-xs group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-serif font-medium">
                        {service.category.toUpperCase()}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#111111] font-normal leading-snug mt-0.5">
                        {service.name}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif text-base sm:text-lg text-[#111111] font-medium block">
                        ${service.priceStartingAt}+
                      </span>
                      <span className="text-[11px] text-[#888888] font-light flex items-center justify-end space-x-1 mt-0.5">
                        <Clock className="w-3 h-3 text-[#c5a059]" />
                        <span>{service.duration}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#555555] font-light leading-relaxed mt-2.5">
                    {service.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 border-t border-[#f2ede4] flex items-center justify-between">
                  {detailRoute ? (
                    <button
                      type="button"
                      onClick={() => onNavigate(detailRoute)}
                      className="inline-flex items-center space-x-1.5 text-xs text-[#c5a059] hover:text-[#9e7932] font-serif uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>In-Depth Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-[11px] text-[#999999] font-light italic">
                      Includes custom wash & styling
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.name)}
                    className="px-5 py-2 bg-[#111111] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
                  >
                    Book Service
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#ece8de]">
            <p className="text-sm text-[#777777] font-light">
              No services match "{searchQuery}". Try browsing all services.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-[#c5a059] underline tracking-wider uppercase font-serif"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#161c21] text-white p-8 sm:p-10 border border-[#2a343d] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-serif text-xs text-[#dfba73] uppercase tracking-[0.25em]">
              UNSURE WHICH SERVICE TO BOOK?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              Schedule a Complimentary 15-Minute Color Consultation
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-lg">
              We assess strand integrity, perform a test strand if required, and provide an accurate timeline and transparent quote.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking('Complimentary Consultation')}
            className="shrink-0 px-8 py-3.5 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
