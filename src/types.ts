export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio?: string;
  specialties?: string[];
  image?: string;
  instagram?: string;
}

export interface ServiceItem {
  id: string;
  category: 'color' | 'cut' | 'style' | 'treatment';
  name: string;
  duration: string;
  priceStartingAt: number;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments & Consultations' | 'Colour & Balayage' | 'Hair Care & Maintenance' | 'Policies';
}

export interface InstagramReel {
  id: string;
  thumbnail: string;
  videoUrl?: string;
  overlayText?: string;
  caption: string;
  views: string;
  likes: string;
  platform: 'instagram' | 'tiktok' | 'both';
  link: string;
}

export type PageRoute =
  | 'home'
  | 'team'
  | 'services'
  | 'service-balayage'
  | 'service-precision-cut'
  | 'service-gloss-treatment'
  | 'service-keratin-smoothing'
  | 'about'
  | 'contact'
  | 'faqs'
  | 'privacy-policy'
  | 'terms-and-conditions';

