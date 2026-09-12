import { Stylist, ServiceItem, Testimonial, BlogPost, FaqItem, InstagramReel } from './types';

export const SALON_INFO = {
  name: 'Laci | CR Iowa Hairstylist',
  phone: '+00 123 40000',
  phoneFormatted: '+00 123 40000',
  phoneRaw: 'tel:+0012340000',
  email: 'booknow@gmail.com',
  address: {
    street: '',
    suite: '',
    city: 'Cedar Rapids',
    state: 'IA',
    zip: '52401',
    cityStateZip: 'Cedar Rapids, IA 52401',
    full: 'Cedar Rapids, IA 52401',
    mapsUrl: 'https://maps.google.com/?q=Cedar+Rapids+IA+52401',
  },
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday - Saturday', time: '9am - 6pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://www.facebook.com/',
  },
};

export const STYLISTS_LIST: Stylist[] = [
  {
    id: 'laci',
    name: 'Laci',
    role: 'Owner / Master Stylist',
    bio: "Laci is the visionary owner and lead master artist of Laci | CR Iowa Hairstylist in Cedar Rapids. Renowned for her tailored balayage artistry, color correction, and precision styling, she delivers a boutique salon experience that radiates warmth, craft, and creative energy.",
    specialties: ['Balayage', 'Color Correction', 'Precision Cutting', 'Blonde Artistry'],
    instagram: 'https://www.facebook.com/',
    image: 'https://scontent-iad6-1.xx.fbcdn.net/v/t39.30808-6/763831721_3804590603025302_9090068041945421282_n.jpg?stp=dst-jpg_tt6&cstp=mx1366x2048&ctp=s1366x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKyH9Lv7_HemWvJVMp8Bk8pho1GvK2xa-mGjUa8rbFrxhuPdRlPGQZ_GfSrXmfBEVIkYaPnv-Y1Nwqs_O421qX&_nc_ohc=hUmNf2mZoZMQ7kNvwE0Kr3h&_nc_oc=Adrr2hYDOx92ONpkYPBrblrFTlGrWphFeqos09lpCrNHsTo4GCLaMdGF9IrCHUMCnew&_nc_zt=23&_nc_ht=scontent-iad6-1.xx&_nc_gid=y4FYOM_NpWevkT0EUq1xKA&_nc_ss=792a8&oh=00_AQIdlgFPEmVgCPp8vNYIMCcHYP5xXiSB4rLRA3u2WswqEA&oe=6AAAD7D0',
  },
  {
    id: 'stephanie-arias',
    name: 'Stephanie Arias',
    role: 'Stylist',
    bio: "Stephanie brings high-fashion dimensional color, lived-in blonding, and effortless custom blowouts to every appointment. Her passion is crafting low-maintenance, luminous hair that complements each client's lifestyle.",
    specialties: ['Dimensional Color', 'Blowouts', 'Layered Cuts', 'Lived-In Blonding'],
    image: 'https://scontent-iad6-1.xx.fbcdn.net/v/t51.82787-15/516084227_17898848796239551_8520137885750156213_n.jpg?stp=dst-jpg_tt6&cstp=mx1179x1473&ctp=s1179x1473&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH57eWU_5CyVhqWn_3mhyqLWxWSucYTFP5bFZK5xhMU_jHPmaxMk1VztI2Oytpi41pNu5t9wt_2QmoGPXyCXsXk&_nc_ohc=3UJ5RnZ-sJgQ7kNvwEKCsW3&_nc_oc=AdruqDQf2Nt1E3_MrW_VebVGn2j9aEpWGseQx3bX86TLTQxgibxqxg52vomS0fS0hIA&_nc_zt=23&_nc_ht=scontent-iad6-1.xx&_nc_gid=CUP3sAVp5X1A8DUD-e3CaQ&_nc_ss=792a8&oh=00_AQKZhD-b_ozEpJOL0ar2Ci4WGUjs6Sa1ZmZf0WzbhrzmgQ&oe=6AA7DECE',
  },
  {
    id: 'kenny-slack',
    name: 'Kenny Slack',
    role: 'Senior Stylist/Wella Educator',
    bio: "As an accomplished Senior Stylist and certified Wella Educator, Kenny is a master of corrective color, editorial styling, and precision technique. He mentors emerging stylists while delivering runway-caliber transformations.",
    specialties: ['Master Colorist', 'Editorial Styling', 'Wella Education', 'Corrective Color'],
    image: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/706318041_3722721307878899_5657463308930864186_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFbv2glmfN3GY0Lhf3n-AccZxi0GrYsxPxnGLQatizE_LIOsjUQ4IfgqVGaVRTGmeH-k5cx2V4MuY1TkMYDK1RV&_nc_ohc=U6MO4WLQy5cQ7kNvwFeOjeI&_nc_oc=AdqcKYbomK4MI38Onu5vJ0RPz35kX8AFY4qRTCp51eCV_TgIdj1CrYhoCcqi9bNydD8&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=WF3NqeMZwAQXOAFt0BIoeQ&_nc_ss=792a8&oh=00_AQJxqx-kbQ8G5b3z2K3e2iyO-murCSJbgnEsyjvEUkKp6A&oe=6AAABC73',
  },
];

export const STYLISTS = STYLISTS_LIST;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Way more than a haircut. Going to Laci | CR Iowa Hairstylist feels like going to a luxury boutique spa! I left looking and feeling marvelous!',
    author: 'Tanya B',
    location: 'Cedar Rapids, IA',
  },
  {
    id: '2',
    quote: 'Laci is a true color artist. My balayage looks effortlessly luminous and natural, lasting months with zero harsh lines. The vibe is sophisticated and welcoming.',
    author: 'Michelle R',
    location: 'Marion, IA',
  },
  {
    id: '3',
    quote: "Cedar Rapids' premier salon experience. The attention to detail from consultation to final blowout is unparalleled. Truly bespoke craft.",
    author: 'Caroline S',
    location: 'Iowa City, IA',
  },
  {
    id: '4',
    quote: 'I have never felt so pampered. The team listened carefully to what I envisioned and executed it beyond my expectations. I will never go anywhere else!',
    author: 'Amanda L',
    location: 'Cedar Rapids, IA',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'balayage',
    category: 'color',
    name: 'Signature Balayage & Foilayage',
    duration: '180 min',
    priceStartingAt: 240,
    description: 'Custom hand-painted highlighting technique for seamless, sun-kissed dimension tailored to your face shape and hair texture.',
  },
  {
    id: 'all-over-color',
    category: 'color',
    name: 'All-Over Single Process Color',
    duration: '90 min',
    priceStartingAt: 135,
    description: 'Rich, multidimensional permanent or demi-permanent gloss and color formulation providing complete gray coverage and high-shine.',
  },
  {
    id: 'color-correction',
    category: 'color',
    name: 'Specialized Color Correction',
    duration: '240 min',
    priceStartingAt: 320,
    description: 'In-depth corrective service to restore hair health, balance undertones, and eliminate unwanted brass or uneven pigmentation.',
  },
  {
    id: 'precision-cut-women',
    category: 'cut',
    name: 'Designer Haircut & Finish',
    duration: '60 min',
    priceStartingAt: 95,
    description: 'Personalized consultation, scalp massage, bespoke cut designed to enhance your facial features, completed with a signature blowout.',
  },
  {
    id: 'mens-cut',
    category: 'cut',
    name: 'Gentlemen’s Precision Cut',
    duration: '45 min',
    priceStartingAt: 65,
    description: 'Classic or contemporary tailored shear and clipper work, neck shave, and scalp revitalizing rinse.',
  },
  {
    id: 'signature-blowout',
    category: 'style',
    name: 'Signature Luxury Blowout',
    duration: '50 min',
    priceStartingAt: 65,
    description: 'Invigorating shampoo, conditioning treatment, and high-volume round-brush styling that lasts for days.',
  },
  {
    id: 'event-styling',
    category: 'style',
    name: 'Event & Gala Styling / Updo',
    duration: '75 min',
    priceStartingAt: 125,
    description: 'Runway-ready curls, sleek modern ponytails, or intricate romantic updos for charity galas, weddings, and photoshoots.',
  },
  {
    id: 'keratin-treatment',
    category: 'treatment',
    name: 'Brazilian Keratin Smoothing',
    duration: '120 min',
    priceStartingAt: 275,
    description: 'Eliminate frizz, cut down drying time, and lock in glossy smoothness for up to 4 to 5 months.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'best-products-coloured-hair',
    title: 'Best Hair Products for Coloured Hair: What Laci Recommends',
    excerpt: 'The best hair products for coloured hair protect pigment, restore moisture and maintain luminous dimension between salon visits...',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Blonde woman with gorgeous healthy coloured blowout smiling outdoors',
    date: 'March 2026',
    readTime: '4 min read',
    content: [
      'Maintaining vibrant salon colour requires intentional at-home care. When you invest in custom balayage or dimensional colour, using the right regimen ensures the hair cuticle remains closed and pigment locked in.',
      'Sulfate-Free Cleansers: Standard sulfates strip away the natural lipids and protective toner layers. Always opt for moisture-rich, sulfate-free shampoos formulated specifically for treated hair.',
      'Bond-Building Treatments: Heat styling and environmental exposure break down keratin bonds. A weekly intensive repair masque will replenish structural strength and prevent split ends.',
      'UV & Heat Protectants: Sun exposure in Iowa and thermal tools oxidize cool tones into brassiness. Mist a lightweight thermal shield onto damp hair before blow drying.',
    ],
  },
  {
    id: 'balayage-on-curly-hair',
    title: 'Balayage on Curly Hair: Is It Suitable for You?',
    excerpt: 'Yes, balayage suits curly hair beautifully. Laci | CR Iowa Hairstylist explains how balayage enhances natural curls and dimensional wave patterns...',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Young woman with sun-kissed naturally curly textured hair in casual white tee',
    date: 'February 2026',
    readTime: '5 min read',
    content: [
      'A common misconception is that balayage only works on straight or blow-dried hair. In reality, hand-painted balayage is arguably the most flattering colour technique for curls and textured coils.',
      'Freehand Precision: Because curls fall in organic ribbons rather than uniform sheets, traditional foil lines can look disjointed. With balayage, your stylist paints each curl cluster according to its natural bounce and contour.',
      'Zero Harsh Regrowth: The seamless graduation of pigment means you enjoy a gentle, low-maintenance grow-out with no stark demarcation lines at your roots.',
      'Hydration First: Bleach naturally dehydrates curly patterns. At Laci | CR Iowa Hairstylist, we incorporate bond multipliers into our lighteners and follow every balayage with an acid-balanced gloss to seal hydration.',
    ],
  },
  {
    id: 'lived-in-blonde-secrets',
    title: 'The Secret to Maintaining Luminous Lived-In Blondes',
    excerpt: 'Achieving that effortless, sun-drenched blonde is only half the journey. Discover our daily salon rituals to keep strands silky, strong, and radiant...',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Sunkissed blonde hair with soft glossy waves in natural light',
    date: 'January 2026',
    readTime: '4 min read',
    content: [
      'The modern lived-in blonde is defined by shadow roots, melted mid-lengths, and bright, glistening pops around the face.',
      'Toning Gloss Refreshers: Scheduling a quick 45-minute toner refresh between major appointments restores high-gloss shine and dials in the exact cool or buttery warmth you desire.',
      'Wash Frequency: Over-washing is the number one cause of premature fade. Try washing 2-3 times per week and refreshing with a gentle salon dry shampoo.',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Colour & Balayage',
    question: 'How do I know whether balayage, traditional foil highlights, or a gloss is right for me?',
    answer:
      "Every appointment at Laci | CR Iowa Hairstylist begins with a personalized, one-on-one consultation. We evaluate your hair texture, chemical history, and daily maintenance goals. Balayage offers an organic, seamless, sun-kissed gradient that grows out softly with zero harsh demarcation. Foil highlights deliver brighter dimension from roots to ends, and a conditioning gloss revives tone, enhances richness, and seals in mirror-like shine.",
  },
  {
    id: 'faq-2',
    category: 'Appointments & Consultations',
    question: 'Do you offer one-on-one consultations prior to major color transformations?',
    answer:
      "Yes, absolutely. For major transformations, color corrections, or transition to platinum blonde, we highly recommend a complimentary 15-minute consultation. We evaluate strand integrity, perform a test strand if necessary, map out a healthy multi-step strategy, and provide a clear, upfront quote.",
  },
  {
    id: 'faq-3',
    category: 'Hair Care & Maintenance',
    question: 'How frequently will I need to touch up my bespoke color or balayage?',
    answer:
      "Because our balayage is hand-painted to honor your natural root depth, clients typically enjoy 12 to 16 weeks between full lightening appointments. We recommend a 45-minute gloss and toner refresh at the 6 to 8 week mark to keep your tone luminous and brass-free. Classic single-process grey coverage is usually maintained every 4 to 6 weeks.",
  },
  {
    id: 'faq-4',
    category: 'Appointments & Consultations',
    question: 'How should I prepare my hair for my cut or color reservation?',
    answer:
      "Please arrive with clean-to-day-two dry hair in its natural state, free of heavy root touch-up sprays, pigmented powders, or excessive wax. Feel free to bring 2 to 3 visual reference photos of hair styles and tones that you love (as well as examples of what you do not like!) to guide our creative alignment.",
  },
  {
    id: 'faq-5',
    category: 'Hair Care & Maintenance',
    question: 'Can I purchase the professional salon products used during my service?',
    answer:
      "Yes. We exclusively stock premium, salon-grade hair care lines that are sulfate-free, paraben-free, and cruelty-free. Your stylist will provide a customized regimen of cleansers, bonding masques, and heat protectants so you can effortlessly replicate salon results at home.",
  },
  {
    id: 'faq-6',
    category: 'Policies',
    question: 'What is your salon cancellation and rescheduling policy?',
    answer:
      "We reserve dedicated, uninterrupted time for each guest. If you need to reschedule or cancel your visit, we kindly request at least 24 to 48 hours notice. This courtesy allows our concierge to offer the open reservation to clients on our waitlist.",
  },
  {
    id: 'faq-7',
    category: 'Colour & Balayage',
    question: 'Are your lightening and coloring formulations safe for sensitive scalps?',
    answer:
      "We formulate using gentle, low-ammonia and ammonia-free luxury European color lines enriched with conditioning lipids and bond protectors. If you have known sensitivities or allergies, please let our team know ahead of time and we will gladly perform a patch test 48 hours prior to your chemical service.",
  },
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-1',
    thumbnail: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85',
    caption: 'Fringe detail & soft piecey texture on our morning muse ✨ Customized French bob cut.',
    views: '42.8K',
    likes: '3.2K',
    platform: 'both',
    link: 'https://instagram.com',
  },
  {
    id: 'reel-2',
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    overlayText: 'THE RESULTS',
    caption: 'That smile when the gloss hits just right 🤍 Dimensional lived-in blonde by Laci.',
    views: '89.4K',
    likes: '7.1K',
    platform: 'both',
    link: 'https://instagram.com',
  },
  {
    id: 'reel-3',
    thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
    caption: 'Glass hair hydration therapy. Deep bond nourishment & silk press blowout.',
    views: '61.2K',
    likes: '5.4K',
    platform: 'both',
    link: 'https://instagram.com',
  },
  {
    id: 'reel-4',
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85',
    caption: 'The signature 90s bombshell blowout. Maximum root lift and airy curtain layers.',
    views: '114K',
    likes: '9.8K',
    platform: 'both',
    link: 'https://instagram.com',
  },
  {
    id: 'reel-5',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85',
    overlayText: 'kinda chic to get a blow out on a random wednesday',
    caption: 'Midweek self-care never goes out of style ☕️💇‍♀️ Book your Wednesday luxury wash & style.',
    views: '158K',
    likes: '14.2K',
    platform: 'both',
    link: 'https://tiktok.com',
  },
];
