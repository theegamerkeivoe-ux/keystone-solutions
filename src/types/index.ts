export type PageId =
  | 'home'
  | 'services'
  | 'work'
  | 'industries'
  | 'process'
  | 'pricing'
  | 'about'
  | 'insights'
  | 'contact'
  | 'book-consultation'
  | 'start-project'
  | 'admin';

export type LeadStatus = 'NEW' | 'CONTACTED' | 'CONSULTATION' | 'PROPOSAL SENT' | 'WON' | 'LOST';

export interface Lead {
  id: string;
  fullName: string;
  organizationName: string;
  email: string;
  phone: string;
  organizationType: string;
  projectType: string;
  budget: string;
  preferredLaunchDate: string;
  currentWebsite?: string;
  projectDescription: string;
  createdAt: string;
  status: LeadStatus;
  internalNotes: string[];
  isArchived?: boolean;
}

export interface Consultation {
  id: string;
  fullName: string;
  organizationName: string;
  email: string;
  phone: string;
  projectType: string;
  consultationType: 'General Website' | 'School Website' | 'Healthcare Website' | 'Business Website' | 'Custom Portal' | 'Digital System';
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  headline: string;
  audience: string[];
  features: string[];
  ctaText: string;
  ctaAction: PageId;
  previewType: 'website' | 'school-portal' | 'healthcare' | 'business' | 'portal' | 'system';
}

export interface PortfolioProject {
  id: string;
  name: string;
  industry: 'Education' | 'Healthcare' | 'Business' | 'Organizations' | 'Portals' | 'Digital Systems';
  projectType: string;
  isConcept: boolean; // Concept tag enforced
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  resultsNote: string; // "Project outcomes will be added when available."
  image: string;
  mobilePreview?: string;
  featured?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  startingPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface PricingAddon {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'Infrastructure' | 'Design' | 'Systems' | 'Growth';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Web Design' | 'Education Technology' | 'Healthcare Technology' | 'Business' | 'Digital Strategy' | 'Website Tips';
  readTime: string;
  summary: string;
  content: string[];
  published: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  organization: string;
  quote: string;
  role: string;
  published: boolean;
}

export interface BusinessSettings {
  brandName: string;
  tagline: string;
  supportingLine: string;
  email: string;
  phone: string;
  whatsApp: string;
  location: string;
  operatingRegion: string;
  officeHours: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export type AdminRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  status: 'ACTIVE' | 'PENDING';
  createdAt: string;
  lastLoginAt?: string;
  invitedBy?: string;
}

export interface AdminInvite {
  id: string;
  email: string;
  name?: string;
  role: AdminRole;
  token: string;
  invitedBy: string;
  createdAt: string;
  expiresAt: string;
  status: 'PENDING' | 'ACCEPTED' | 'REVOKED';
}
