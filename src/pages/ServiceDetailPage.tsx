import React from 'react';
import { Calendar, Clock, DollarSign, Sparkles, Check, ArrowLeft, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface ServiceDetailPageProps {
  serviceKey: 'service-balayage' | 'service-precision-cut' | 'service-gloss-treatment' | 'service-keratin-smoothing';
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

interface ServiceDetailData {
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  price: string;
  heroImage: string;
  intro: string;
  benefits: string[];
  steps: { step: string; title: string; desc: string }[];
  idealFor: string;
  maintenance: string;
  preparation: string[];
  faqs: { q: string; a: string }[];
}

const SERVICE_DATA_MAP: Record<string, ServiceDetailData> = {
  'service-balayage': {
    title: 'Bespoke Balayage & Lived-in Blonde',
    subtitle: 'Hand-painted dimensional lightening tailored to your natural root depth',
    category: 'Colour & Lightening',
    duration: '2.5 – 3.5 Hours',
    price: 'Starting at $220',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    intro:
      'Our signature balayage service is the pinnacle of customized hair artistry. Rather than using uniform mechanical foils, our master colorists hand-sweep lightener directly onto the hair surface. This produces organic ribbons of sunlight and gentle shadow that grow out with zero harsh lines.',
    benefits: [
      'Low-maintenance grow-out with 12 to 16 weeks between major appointments',
      'Protective bond-multiplying additives blended into every lightener bowl',
      'Custom acid-balanced toner formulation to match warm, neutral, or cool skin tones',
      'Includes deep conditioning cleanse, tonal gloss, and signature luxury blowout',
    ],
    steps: [
      {
        step: '01',
        title: 'Strand & Lifestyle Consultation',
        desc: 'We analyze your hair density, curl pattern, chemical history, and determine the ideal placement of highlights for your face shape.',
      },
      {
        step: '02',
        title: 'Artisanal Hand-Painted Lightening',
        desc: 'Using nutrient-rich clay bleach, we hand-paint dimensional accents that melt effortlessly into your natural base.',
      },
      {
        step: '03',
        title: 'Custom Acidic Gloss & Bonding Masque',
        desc: 'An acidic demi-permanent toner closes the cuticle, eliminates brassiness, and imparts mirror-like reflectivity.',
      },
      {
        step: '04',
        title: 'Luxury Signature Blowout & Style',
        desc: 'Finished with a thermal shield and styled with soft dimensional waves to showcase the multifaceted light reflection.',
      },
    ],
    idealFor: 'Anyone wanting natural, sun-drenched blonde, bronde, or caramel dimension without monthly root touch-up anxiety.',
    maintenance: 'Full balayage every 12–16 weeks; quick 45-minute toner & gloss refresh at week 6–8.',
    preparation: [
      'Arrive with clean-to-day-two dry hair in its natural texture',
      'Avoid heavy root sprays, metallic powders, or dense dry shampoos 48 hours prior',
      'Bring 2–3 reference photos of tones you adore',
    ],
    faqs: [
      {
        q: 'Will balayage damage my fine or fragile hair?',
        a: 'We incorporate bond-building peptides directly into our European lighteners. This protects structural keratin bonds and retains elasticity.',
      },
      {
        q: 'How long does the appointment take?',
        a: 'Typically between 2.5 and 3.5 hours depending on your hair length, density, and lightness goals.',
      },
    ],
  },
  'service-precision-cut': {
    title: 'Signature Precision Cut & Sculpting',
    subtitle: 'Anatomical haircutting designed to complement your bone structure and natural movement',
    category: 'Precision Cuts',
    duration: '60 – 75 Minutes',
    price: 'Starting at $75',
    heroImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85',
    intro:
      'A great haircut should look sensational not just when you leave our chair, but every morning when you style it at home. Our precision cuts combine French wet-cutting techniques with dry-sculpting texturizing to liberate weight and accentuate natural bounce.',
    benefits: [
      'Individually customized to your face shape, profile, and hair texture',
      'Includes an aromatherapy double shampoo and tension-melting scalp massage',
      'Dry-detail refinement ensures seamless blending and effortless movement',
      'Hands-on styling tutorial so you can effortlessly recreate the look at home',
    ],
    steps: [
      {
        step: '01',
        title: 'Silhouette & Texture Assessment',
        desc: 'We examine your cowlicks, growth patterns, facial proportions, and desired styling commitment.',
      },
      {
        step: '02',
        title: 'Botanical Wash & Scalp Massage',
        desc: 'A therapeutic cleanse featuring organic plant extracts, followed by a warm towel conditioning wrap.',
      },
      {
        step: '03',
        title: 'Architectural Wet Cut',
        desc: 'Establishing the perimeter, clean baseline, and internal weight distribution with micro-honed Japanese shears.',
      },
      {
        step: '04',
        title: 'Blow-Dry & Dry Detail Sculpting',
        desc: 'After blow-drying smooth, we refine the internal layers, soften the fringe, and personalize weight removal.',
      },
    ],
    idealFor: 'Clients seeking structured bobs, cascading butterfly layers, French fringe, or textured lived-in lobs.',
    maintenance: 'Every 6–8 weeks for short bobs/pixies; every 8–12 weeks for long, layered cuts.',
    preparation: [
      'Arrive wearing your regular daily clothing style to help us understand your personal aesthetic',
      'Be prepared to discuss your morning styling time and hot tool habits',
    ],
    faqs: [
      {
        q: 'Do you offer complimentary fringe trims between haircut appointments?',
        a: 'Yes, existing haircut clients enjoy one complimentary quick bang refresh between full appointments.',
      },
      {
        q: 'Is a blow-dry included with the haircut?',
        a: 'Always. Every precision cut includes our signature blowout and styling.',
      },
    ],
  },
  'service-gloss-treatment': {
    title: 'Gloss, Tone & Deep Hydration Treatment',
    subtitle: 'Revitalize dull hair with acid-balanced tonal radiance and concentrated peptide moisture',
    category: 'Luxury Treatments',
    duration: '45 – 60 Minutes',
    price: 'Starting at $65',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    intro:
      'The ultimate midday hair rescue. Hard water, Iowa summer sun, and hot styling tools naturally oxidize blonde and brunette tones, leaving hair dull and brittle. Our conditioning gloss acts like a nourishing facial for your hair cuticle, restoring optimal pH balance and rich, multidimensional shine.',
    benefits: [
      'Neutralizes unwanted brassy yellow or orange undertones in 20 minutes',
      'Infuses hyaluronic acid and conditioning lipids deep into the cortex',
      'Zero lift, zero damage — 100% ammonia-free formulation',
      'Includes luxury blowout with silk serum finish',
    ],
    steps: [
      {
        step: '01',
        title: 'Mineral Clarifying Cleanse',
        desc: 'Gentle chelation removes mineral build-up, chlorine, and environmental impurities from the cuticle.',
      },
      {
        step: '02',
        title: 'Custom Acidic Demi-Gloss Application',
        desc: 'A bespoke blend of sheer pigments applied at the shampoo basin to dial in exact tone and reflection.',
      },
      {
        step: '03',
        title: 'Intense Lipid Infusion Masque',
        desc: 'A botanical treatment wrapped in a warm lavender-infused towel to lock moisture into dry ends.',
      },
      {
        step: '04',
        title: 'Mirror Shine Thermal Blowout',
        desc: 'Blow-dried with high-density boar bristle brushes to seal the cuticle and deliver glass-like radiance.',
      },
    ],
    idealFor: 'Anyone wanting to revive blonde or brunette hair between major color appointments, or add crystal-clear gloss to natural virgin hair.',
    maintenance: 'Every 4 to 6 weeks.',
    preparation: [
      'Perfect to schedule on a lunch break or right before a weekend dinner or special event.',
    ],
    faqs: [
      {
        q: 'Can I get a clear gloss if I do not want any color change?',
        a: 'Yes! Our Crystal Clear gloss deposits zero pigment and provides 6 weeks of liquid glass shine.',
      },
      {
        q: 'Will this cover my grey hair?',
        a: 'A gloss gently blends and softens fine greys with translucent tone, but does not provide opaque root coverage.',
      },
    ],
  },
  'service-keratin-smoothing': {
    title: 'Keratin Smoothing & Frizz-Free Therapy',
    subtitle: 'Lock out humidity, cut blow-dry time by 60%, and enjoy glass-smooth hair for up to 5 months',
    category: 'Luxury Treatments',
    duration: '2.5 – 3 Hours',
    price: 'Starting at $275',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    intro:
      'Say goodbye to humid Iowa frizz and endless morning flat-iron battles. Our medical-grade Keratin Complex treatment infuses natural hydrolyzed keratin deep into the porous gaps of the hair cuticle, sealing strands in a silky, humidity-resistant cocoon while preserving your natural body and movement.',
    benefits: [
      'Eliminates up to 95% of frizz without flattening your natural volume',
      'Cuts morning blow-drying and styling time by more than half',
      'Forms a protective shield against heat damage and environmental humidity',
      'Results last between 4 and 5 months with proper sulfate-free care',
    ],
    steps: [
      {
        step: '01',
        title: 'Deep Pre-Treatment Clarification',
        desc: 'Prepares the hair by opening cuticular pathways to receive the bioactive keratin peptides.',
      },
      {
        step: '02',
        title: 'Precision Keratin Solution Saturation',
        desc: 'The nourishing formula is applied strand by strand from root to tip for uniform absorption.',
      },
      {
        step: '03',
        title: 'Infrared Thermal Activation',
        desc: 'Blow-dried smooth and sealed with ceramic thermal plates calibrated precisely to your hair integrity.',
      },
      {
        step: '04',
        title: 'Post-Care Prescription Consultation',
        desc: 'Guidance on washing intervals, recommended sulfate-free shampoos, and maintaining velvet softness.',
      },
    ],
    idealFor: 'Anyone struggling with coarse, unruly texture, humidity puffiness, or unruly morning flyaways.',
    maintenance: 'Repeated every 4 to 5 months.',
    preparation: [
      'Plan to wait 48 to 72 hours before washing your hair or tying it back in elastic hair bands',
      'If you also need color, we recommend coloring your hair 2 weeks prior or 2 weeks after keratin',
    ],
    faqs: [
      {
        q: 'Will this make my hair completely pin-straight?',
        a: 'No, this is a smoothing therapy rather than a chemical relaxer. You retain natural body, but styling becomes effortless.',
      },
      {
        q: 'What shampoo should I use afterward?',
        a: 'You must use a strictly sulfate-free and sodium-chloride-free salon shampoo, available right in our salon apothecary.',
      },
    ],
  },
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceKey,
  onNavigate,
  onOpenBooking,
}) => {
  const service = SERVICE_DATA_MAP[serviceKey] || SERVICE_DATA_MAP['service-balayage'];

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
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            Services
          </button>
          <span>/</span>
          <span className="text-[#111111] font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.25em] font-medium block">
              {service.category}
            </span>
            <h1
              id="service-detail-title"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-tight"
            >
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              {service.subtitle}
            </p>

            {/* Quick Meta Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center space-x-2 bg-white border border-[#ece8de] px-4 py-2 text-xs">
                <Clock className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[#333333] font-medium">{service.duration}</span>
              </div>

              <div className="flex items-center space-x-2 bg-white border border-[#ece8de] px-4 py-2 text-xs">
                <DollarSign className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[#333333] font-medium">{service.price}</span>
              </div>

              <div className="flex items-center space-x-2 bg-white border border-[#ece8de] px-4 py-2 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[#333333]">Zero Double-Booking</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking(service.title)}
                className="px-8 py-3.5 bg-[#111111] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer shadow-sm"
              >
                Reserve This Service
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs uppercase tracking-[0.22em] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Services</span>
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 aspect-[4/5] rounded-none overflow-hidden bg-[#e5dfd3] shadow-md border border-[#e4ded3]">
            <img
              src={service.heroImage}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro & Key Benefits */}
        <section className="bg-white border border-[#ece8de] p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.25em] font-medium block mb-2">
              SERVICE OVERVIEW
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-6 font-normal">
              The Experience & Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#444444] font-light leading-relaxed mb-8">
              {service.intro}
            </p>

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#888888] font-medium mb-4">
              SIGNATURE HIGHLIGHTS & BENEFITS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#333333] font-light">
                  <span className="w-5 h-5 rounded-full bg-[#faf9f6] border border-[#c5a059] flex items-center justify-center shrink-0 mt-0.5 text-[#c5a059]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Experience */}
        <section className="bg-white border border-[#ece8de] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.25em] font-medium block mb-2">
              STEP BY STEP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal">
              What to Expect During Your Chair Time
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((item) => (
              <div key={item.step} className="p-6 bg-[#faf9f6] border border-[#ece8de]">
                <span className="font-serif text-2xl text-[#c5a059] font-light block mb-3">
                  {item.step}
                </span>
                <h4 className="font-serif text-base text-[#111111] font-normal mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Maintenance & Preparation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ideal For & Upkeep */}
          <div className="bg-white border border-[#ece8de] p-8 sm:p-10 space-y-6">
            <div>
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.2em] font-medium block mb-1">
                IDEAL CANDIDATE
              </span>
              <h3 className="font-serif text-xl text-[#111111] font-normal mb-2">
                Who Is This Service For?
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                {service.idealFor}
              </p>
            </div>

            <div className="pt-4 border-t border-[#f2ede4]">
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.2em] font-medium block mb-1">
                MAINTENANCE TIMELINE
              </span>
              <h3 className="font-serif text-xl text-[#111111] font-normal mb-2">
                Recommended Upkeep Interval
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                {service.maintenance}
              </p>
            </div>
          </div>

          {/* How to Prepare */}
          <div className="bg-white border border-[#ece8de] p-8 sm:p-10">
            <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.2em] font-medium block mb-1">
              ARRIVAL CHECKLIST
            </span>
            <h3 className="font-serif text-xl text-[#111111] font-normal mb-4">
              How to Prepare for Your Appointment
            </h3>
            <ul className="space-y-3">
              {service.preparation.map((prep, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#444444] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                  <span>{prep}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Specific FAQs */}
        {service.faqs.length > 0 && (
          <section className="bg-white border border-[#ece8de] p-8 sm:p-12">
            <div className="max-w-3xl">
              <span className="font-serif text-xs text-[#c5a059] uppercase tracking-[0.25em] font-medium block mb-2">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-8 font-normal">
                Frequently Asked About {service.title}
              </h2>

              <div className="space-y-6">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="pb-6 border-b border-[#f2ede4] last:border-b-0">
                    <h4 className="font-serif text-base text-[#111111] font-normal mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom Booking Banner */}
        <div className="bg-[#161c21] text-white p-8 sm:p-12 border border-[#2a343d] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-serif text-xs text-[#dfba73] uppercase tracking-[0.25em]">
              EXPERIENCE THE LACI STANDARD
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Ready to reserve {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-md">
              Enjoy dedicated one-on-one attention with zero overlapping clients.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onOpenBooking(service.title)}
              className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 border border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-[0.22em] transition-colors cursor-pointer"
            >
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
