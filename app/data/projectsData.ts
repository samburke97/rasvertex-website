// app/data/projectsData.ts
// Add new projects here — the bento grid picks them up automatically.

import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import { cld } from "../lib/cloudinary";

export interface Project {
  id: string;
  name: string;
  client?: string;
  location?: string;
  category?: string;
  scope?: string;
  image: string;
  imageAlt: string;
  size?: "wide" | "tall" | "square";
}

export const PROJECTS: Project[] = [
  {
    id: "racv-noosa",
    name: "Full Resort Maintenance Program",
    client: "RACV Noosa Resort",
    location: "Maroochydore, QLD",
    category: "Maintenance",
    scope: "Rope access · painting · waterproofing · ongoing",
    image: "/images/projects/1.jpeg",
    imageAlt: "Full complex maintenance program at RACV Noosa Resort",
    size: "wide",
  },
  {
    id: "mooloolaba-highrise",
    name: "High Rise Facade Repaint",
    client: "Body Corporate",
    location: "Mooloolaba, QLD",
    category: "Painting",
    scope: "Rope access · exterior repaint · 18 storeys",
    image: "/images/projects/2.jpeg",
    imageAlt: "High rise exterior repaint in Mooloolaba",
    size: "tall",
  },
  {
    id: "coolum-waterproofing",
    name: "Balcony Membrane Restoration",
    client: "Strata Committee",
    location: "Alexandra Headland, QLD",
    category: "Waterproofing",
    scope: "Membrane replacement · 48 balconies",
    image: "/nav/waterproofing.png",
    imageAlt: "Balcony waterproofing membrane restoration in Alexandra Headland",
    size: "square",
  },
  {
    id: "maroochydore-height",
    name: "Anchor Point Certification",
    client: "Commercial Building",
    location: "Maroochydore, QLD",
    category: "Height Safety",
    scope: "AS/NZS 1891 · full anchor point audit",
    image: "/nav/height.png",
    imageAlt: "Height safety anchor point certification in Maroochydore",
    size: "square",
  },
];

// ─── Gallery — /projects page only, distinct from the homepage carousel ──
export const GALLERY_PROJECTS: Project[] = [
  {
    id: "coolum-fc",
    name: "Coolum Fc",
    image: cld("coolum_fc", { width: 1200 }),
    imageAlt: "Coolum Fc — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "inspect",
    name: "Inspect",
    image: cld("inspect", { width: 1200 }),
    imageAlt: "Inspect — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "contact-us",
    name: "Contact Us",
    image: cld("contact-us", { width: 1200 }),
    imageAlt: "Contact Us — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "the-work",
    name: "The Work",
    image: cld("the-work", { width: 1200 }),
    imageAlt: "The Work — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    image: cld("waterproofing", { width: 1200 }),
    imageAlt: "Waterproofing — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "rope-access-works",
    name: "Rope Access Works",
    image: cld("rope-access-works", { width: 1200 }),
    imageAlt: "Rope Access Works — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "commercial",
    name: "Commercial",
    image: cld("commercial", { width: 1200 }),
    imageAlt: "Commercial — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "body-corp",
    name: "Body Corp",
    image: cld("body-corp", { width: 1200 }),
    imageAlt: "Body Corp — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "residential",
    name: "Residential",
    image: cld("residential", { width: 1200 }),
    imageAlt: "Residential — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "zone-staged",
    name: "Zone Staged",
    image: cld("zone-staged", { width: 1200 }),
    imageAlt: "Zone Staged — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "warranty",
    name: "Warranty",
    image: cld("warranty", { width: 1200 }),
    imageAlt: "Warranty — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "exterior-facade",
    name: "Exterior Facade",
    image: cld("exterior-facade", { width: 1200 }),
    imageAlt: "Exterior Facade — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "balcony-painting",
    name: "Balcony Painting",
    image: cld("balcony-painting", { width: 1200 }),
    imageAlt: "Balcony Painting — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "roof-coatings",
    name: "Roof Coatings",
    image: cld("roof-coatings", { width: 1200 }),
    imageAlt: "Roof Coatings — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "maintenance-painting",
    name: "Maintenance Painting",
    image: cld("maintenance-painting", { width: 1200 }),
    imageAlt: "Maintenance Painting — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "inspections",
    name: "Inspections",
    image: cld("inspections", { width: 1200 }),
    imageAlt: "Inspections — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "rope-access-everywhere",
    name: "Rope Access Everywhere",
    image: cld("rope-access-everywhere", { width: 1200 }),
    imageAlt: "Rope Access Everywhere — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "archers-reports",
    name: "Archers Reports",
    image: cld("archers-reports", { width: 1200 }),
    imageAlt: "Archers Reports — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "gold-standard",
    name: "Gold Standard",
    image: cld("gold-standard", { width: 1200 }),
    imageAlt: "Gold Standard — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "high-rise-window-cleaning",
    name: "High Rise Window Cleaning",
    image: cld("high-rise-window-cleaning", { width: 1200 }),
    imageAlt: "High Rise Window Cleaning — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "rope-access-windows",
    name: "Rope Access Windows",
    image: cld("rope-access-windows", { width: 1200 }),
    imageAlt: "Rope Access Windows — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "window-cleaning",
    name: "Window Cleaning",
    image: cld("window-cleaning", { width: 1200 }),
    imageAlt: "Window Cleaning — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "commercial-hero-1",
    name: "Commercial Hero 1",
    image: cld("commercial_hero_1", { width: 1200 }),
    imageAlt: "Commercial Hero 1 — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "commercial-ropes",
    name: "Commercial Ropes",
    image: cld("commercial-ropes", { width: 1200 }),
    imageAlt: "Commercial Ropes — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "commercial-hero-3",
    name: "Commercial Hero 3",
    image: cld("commercial_hero_3", { width: 1200 }),
    imageAlt: "Commercial Hero 3 — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "commercial-hero-4",
    name: "Commercial Hero 4",
    image: cld("commercial_hero_4", { width: 1200 }),
    imageAlt: "Commercial Hero 4 — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "commercial-hero-5",
    name: "Commercial Hero 5",
    image: cld("commercial_hero_5", { width: 1200 }),
    imageAlt: "Commercial Hero 5 — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "ongoing-maintenance",
    name: "Ongoing Maintenance",
    image: cld("ongoing-maintenance", { width: 1200 }),
    imageAlt: "Ongoing Maintenance — RAS-VERTEX Sunshine Coast",
  },
  {
    id: "bw1",
    name: "Bw1",
    image: cld("bw1", { width: 1200 }),
    imageAlt: "Bw1 — RAS-VERTEX Sunshine Coast",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  ...new Set(PROJECTS.map((p) => p.category)),
];

// ─── FAQ ──────────────────────────────────────────────────────

export const FAQS: FAQItem[] = [
  {
    q: "What types of projects do you complete on the Sunshine Coast?",
    a: "We handle exterior painting, balcony waterproofing, rope access facade maintenance, building cleaning, window cleaning, height safety certification and general building remediation, for body corporates, strata schemes, commercial properties, resorts and industrial facilities right across the Sunshine Coast.",
  },
  {
    q: "Can you manage large scale body corporate and strata maintenance projects?",
    a: "Strata and body corporate work is really the core of what we do. We have completed multi year maintenance programs for high rise apartment buildings, resorts and commercial complexes from Caloundra to Noosa, coordinating with committees, building managers and insurers every step of the way.",
  },
  {
    q: "Do you use rope access for painting and facade maintenance?",
    a: "Yes. Rope access is our preferred method of access for minimal disruption. Our IRATA certified rope access technicians handle high rise repaints, sealant replacement, facade inspections and remedial works, typically 40 to 60 percent cheaper than scaffolded alternatives and with far less disruption to residents and car parks.",
  },
  {
    q: "What does a balcony waterproofing project involve?",
    a: "We start with a condition assessment, remove the existing membrane, prepare the substrate properly, then apply a new compliant membrane system and protective coating. We have waterproofed everything from single balconies to 48 unit strata complexes, and we carry full public liability and QBCC licence coverage throughout.",
  },
  {
    q: "How long does a typical building maintenance project take?",
    a: "Scope really determines the timeline. A high rise exterior repaint typically runs four to twelve weeks depending on access and surface condition, while balcony membrane replacement averages one to two working days per balcony. We issue a detailed program schedule before mobilising and keep managers updated throughout the job.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Operations Lead",
  photo: "/images/people/caro.jpg",
  ctaHref: "/contact",
  ctaLabel: "Talk to us about your project →",
};
