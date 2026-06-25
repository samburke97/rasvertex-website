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
    imageAlt: "RACV Noosa Resort — full-complex maintenance program by RAS-VERTEX",
    size: "wide",
  },
  {
    id: "mooloolaba-highrise",
    name: "High-Rise Facade Repaint",
    client: "Body Corporate",
    location: "Mooloolaba, QLD",
    category: "Painting",
    scope: "Rope access · exterior repaint · 18 storeys",
    image: "/images/projects/2.jpeg",
    imageAlt: "Mooloolaba high-rise exterior repaint by RAS-VERTEX",
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
    imageAlt: "Balcony waterproofing membrane restoration — Coolum Beach",
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
    imageAlt: "Height safety anchor point certification — Maroochydore",
    size: "square",
  },
  {
    id: "noosa-cleaning",
    name: "Post-Construction Clean",
    client: "Mosaic Property Group",
    location: "Noosa, QLD",
    category: "Building Cleaning",
    scope: "Window cleaning · facade wash · 12 storeys",
    image: "/nav/maintenance.png",
    imageAlt: "Post-construction building clean — Noosa development",
    size: "wide",
  },
  {
    id: "caloundra-remedial",
    name: "Spalling Concrete Remediation",
    client: "Body Corporate",
    location: "Caloundra, QLD",
    category: "Maintenance",
    scope: "Rope access · carbon fibre injection · re-bar replacement",
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
    q: "What types of projects does RAS-VERTEX complete on the Sunshine Coast?",
    a: "We handle exterior painting, balcony waterproofing, rope access facade maintenance, building cleaning, window cleaning, height safety certification, and general building remediation — for body corporates, strata schemes, commercial properties, resorts, and industrial facilities across the Sunshine Coast.",
  },
  {
    q: "Can you manage large-scale body corporate and strata maintenance projects?",
    a: "Strata and body corporate work is the core of what we do. We've completed multi-year maintenance programs for high-rise apartment buildings, resorts, and commercial complexes from Caloundra to Noosa — coordinating with committees, building managers, and insurers every step of the way.",
  },
  {
    q: "Do you use rope access for painting and facade maintenance?",
    a: "Yes. Our IRATA-certified rope access technicians handle high-rise repaints, sealant replacement, facade inspections, and remedial works without scaffold. Rope access is typically 40–60% cheaper than scaffolded alternatives and causes far less disruption to residents and car parks.",
  },
  {
    q: "What does a balcony waterproofing project involve?",
    a: "We start with a condition assessment, remove the existing membrane, prepare the substrate, then apply a new compliant membrane system and protective coating. We've waterproofed everything from single balconies to 48-unit strata complexes and carry full public liability and QBCC licence coverage.",
  },
  {
    q: "How long does a typical building maintenance project take?",
    a: "Scope determines timeline. A high-rise exterior repaint typically runs 4–12 weeks depending on access and surface condition. Balcony membrane replacement averages 1–2 working days per balcony. We issue a detailed program schedule before mobilising and keep managers updated throughout.",
  },
  {
    q: "What qualifications and licences does RAS-VERTEX hold?",
    a: "Our team holds QBCC licences (painting and building maintenance), IRATA rope access certifications (Levels 1–3), Working at Heights and Confined Space tickets, and full public liability insurance. All certification documentation is available on request.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Operations Lead",
  photo: "/images/people/caro.jpg",
  ctaHref: "/contact",
  ctaLabel: "Talk to us about your project →",
};
