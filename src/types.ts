export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'nails' | 'products' | 'before-after';
  image: string;
  beforeImage?: string; // only for before-after
  afterImage?: string; // only for before-after
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
