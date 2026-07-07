// app/data/paintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { BeforeAfterSpec } from "../components/shared/ServiceBeforeAfter";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import { cld } from "../lib/cloudinary";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("c1", { width: 1600 }),
    alt: "Painting project — Sunshine Coast",
  },
  {
    src: cld("c2", { width: 1600 }),
    alt: "Painting project — Sunshine Coast",
  },
  {
    src: cld("c3", { width: 1600 }),
    alt: "Painting project — Sunshine Coast",
  },
  {
    src: cld("c4", { width: 1600 }),
    alt: "Painting project — Sunshine Coast",
  },
  {
    src: cld("c5", { width: 1600 }),
    alt: "Painting project — Sunshine Coast",
  },
  {
    src: cld("c6", { width: 1600 }),
    alt: "Painting project — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior Painting",
    body: "Full exterior repaints for strata, commercial and residential buildings. Chloride rinse, salt-bonded primer and Dulux Weathershield systems as standard within 5km of the coast.",
    photo: cld("exterior", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "Colorbond, tile and membrane re-coats. Heat-reflective coatings reduce internal building temps by up to 8°C — a measurable energy saving on commercial assets.",
    photo: cld("roof-coatings", { width: 1800 }),
    href: "/contact",
  },

  {
    label: "Rope Access Painting",
    body: "IRATA L1–L3 certified technicians for high-rise and difficult-access facades. Faster mobilisation, no scaffolding cost, zero footprint on your site.",
    photo: cld("rope-access-painting", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Render & Texture",
    body: "Acrylic, polymer and sand render systems. We repair cracks and substrate defects before coating — no bandaid finishes.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Strata & Body Corporate",
    body: "Committee-ready proposals, staged scheduling around occupancy, resident communication handled end-to-end. Over 50 body corporate projects completed across the Sunshine Coast.",
    photo: cld("strata", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Colour Consulting",
    body: "On-site sample blocks at no charge for projects over $25k. Full colour schedules and heritage-compliant palettes available.",
    photo: cld("colour-consulting", { width: 1800 }),
    href: "/contact",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: cld("exterior", { width: 1800 }),
    alt: "RAS-VERTEX project manager on a Sunshine Coast painting job site",
    title: "Dedicated project manager",
    body: "One person runs your job from first site visit to warranty sign off. One number, one thread, so you always know exactly who to call.",
  },
  {
    photo: cld("rope-access-painting", { width: 1800 }),
    alt: "IRATA certified rope access painting technician, RAS-VERTEX Sunshine Coast",
    title: "IRATA certified access",
    body: "Thirty plus rope access technicians trained in house to IRATA L1 to L3 reach what scaffold can't, faster, safer and without the setup cost.",
  },
  {
    photo: cld("avere-repaint", { width: 1800 }),
    alt: "Coastal spec paint system applied to a Sunshine Coast high-rise, RAS-VERTEX",
    title: "Coastal spec paint systems",
    body: "Salt bonded primers, chloride rinse and elastomeric topcoats, every system matched to the substrate and the exposure your building actually faces.",
  },
];

export const BEFORE_AFTER_SPECS: BeforeAfterSpec[] = [
  {
    label: "Scope",
    value: "Full exterior repaint · render & masonry · 4 storeys",
  },
  {
    label: "System",
    value: "Dulux Weathershield Pure · elastomeric topcoat",
  },
  {
    label: "Crew",
    value: "4 technicians · rope access",
  },
  {
    label: "Warranty",
    value: "5-yr workmanship · 15-yr manufacturer",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High-Rise Repaint",
    type: "Body Corporate · 8 storeys",
    system: "Dulux Weathershield · elastomeric topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Mooloolaba oceanfront high-rise repaint by RAS-VERTEX",
  },
  {
    suburb: "Coolum Beach",
    name: "Coolum Resort Exterior",
    type: "Commercial · resort complex",
    system: "Haymes Sandtex · salt-bonded primer",
    image: "/images/projects/2.jpeg",
    alt: "Coolum Resort exterior painting — RAS-VERTEX",
  },
  {
    suburb: "Maroochydore",
    name: "CBD Office Tower",
    type: "Commercial · 12 storeys",
    system: "Dulux AcraTex · render & texture coat",
    image: "/images/projects/1.jpeg",
    alt: "Maroochydore CBD office tower commercial painting by RAS-VERTEX",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: cld("commercial-painting", { width: 1200 }),
    alt: "Commercial painting — RAS-VERTEX Sunshine Coast",
    title: "Commercial Painting",
    body: "Twenty five years working across Sunshine Coast commercial and high-rise buildings has taught us that disruption has a real cost. Tenants, customers and operations can’t afford delays or inconsistent crews. We plan properly, show up when we say we will, and deliver painting that fits around how your site actually runs.",
    cta: "Commercial painting",
    href: "/commercial-painting",
  },
  {
    photo: cld("body-corp-painting", { width: 1200 }),
    alt: "Body corporate and strata painting — RAS-VERTEX",
    title: "Body Corporate & Strata Painting",
    body: "We’ve worked with strata committees long enough to know that painting projects rely on clear communication. Residents want clarity, committees want certainty, and no one wants surprises mid-project. We structure our work to keep everyone informed and the building running smoothly.",
    cta: "Body corporate painting",
    href: "/body-corporate-painting",
  },
  {
    photo: cld("house-painting", { width: 1200 }),
    alt: "Residential painting — RAS-VERTEX Sunshine Coast",
    objectPosition: "top",
    title: "Residential Painting",
    body: "Your home is one of your biggest investments, and on the Sunshine Coast it needs the right protection to stay looking its best over time. We prepare properly and use coating systems chosen for local coastal conditions, so the finish holds up and your home continues to look it's best.",
    cta: "Residential painting",
    href: "/residential-painting",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How long does a typical strata repaint take?",
    a: "For a 4–5 storey strata building, expect 5–8 weeks on-site for prep plus 2 coats. We work in zones so residents only see scaffolding or rope access on their face for a week at most.",
  },
  {
    q: "Can you paint while the building stays occupied?",
    a: "Yes — almost all our strata and commercial work is done in occupied buildings. We schedule noisy or disruptive work outside business hours and notify residents at least 48 hours before we're on their level.",
  },
  {
    q: "What's covered by the 5-year warranty?",
    a: "All workmanship — adhesion failure, peeling, blistering, or any defect caused by application. It doesn't cover damage from substrate movement, flooding, or impact. Manufacturer warranties (up to 15 years) run separately and are lodged at product level.",
  },
  {
    q: "Do you do pre-sale painting?",
    a: "Yes. We do interior and exterior refreshes for agents and vendors. Most jobs turn around in 5–10 business days. We can work around open homes and settlement dates.",
  },
  {
    q: "Do you provide colour consulting?",
    a: "Yes — we do on-site sample blocks at no charge for projects over $25k. Most body corporates use the process to socialise colour with their committee before committing.",
  },
  {
    q: "Do you use rope access or scaffold?",
    a: "Both. We're IRATA L1–L3 in-house and partner with scaffolders for jobs where access is staged. Rope access typically saves 40–60% vs scaffolding on high-rise repaints.",
  },
  {
    q: "Are you QBCC licensed and insured?",
    a: "QBCC licensed, $20M public liability, full workers' comp. Certificates of currency are auto-issued through ROCO at quote stage.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Painting Lead",
  photo: "/images/people/caro.jpg",
  ctaHref: "/contact",
  ctaLabel: "Let’s talk about your project →",
};
