// app/data/projectsData.ts
// Add new projects here — the bento grid picks them up automatically.

import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  category: string;
  scope: string;
  image: string;
  imageAlt: string;
  size: "wide" | "tall" | "square";
}

export const PROJECTS: Project[] = [
  {
    id: "racv-noosa",
    name: "Full Resort Maintenance Program",
    client: "RACV Noosa Resort",
    location: "Noosa Heads, QLD",
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
    location: "Coolum Beach, QLD",
    category: "Waterproofing",
    scope: "Membrane replacement · 48 balconies",
    image: "/nav/waterproofing.png",
    imageAlt: "Balcony waterproofing membrane restoration in Coolum Beach",
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
  {
    id: "noosa-cleaning",
    name: "Post Construction Clean",
    client: "Mosaic Property Group",
    location: "Noosa, QLD",
    category: "Building Cleaning",
    scope: "Window cleaning · facade wash · 12 storeys",
    image: "/nav/maintenance.png",
    imageAlt: "Post construction building clean at a Noosa development",
    size: "wide",
  },
  {
    id: "caloundra-remedial",
    name: "Spalling Concrete Remediation",
    client: "Body Corporate",
    location: "Caloundra, QLD",
    category: "Maintenance",
    scope: "Rope access · carbon fibre injection · reinforcing bar replacement",
    image: "/images/projects/rope-access.png",
    imageAlt: "Spalling concrete remediation at a Caloundra strata building",
    size: "tall",
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
    a: "Yes. Our IRATA certified rope access technicians handle high rise repaints, sealant replacement, facade inspections and remedial works without any scaffold. Rope access is typically 40 to 60 percent cheaper than scaffolded alternatives and causes far less disruption to residents and car parks.",
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
