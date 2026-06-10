// app/data/paintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { BeforeAfterSpec } from "../components/shared/ServiceBeforeAfter";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/projects/1.jpeg",
    alt: "Mooloolaba oceanfront high-rise repaint by RAS-VERTEX",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Coolum Resort exterior facade painting by RAS-VERTEX",
  },
  {
    src: "/nav/height.png",
    alt: "Rope access painting on the Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Waterproofing and membrane coating — Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Building maintenance and painting — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior Painting",
    body: "Full exterior repaints for strata, commercial and residential buildings. Chloride rinse, salt-bonded primer and Dulux Weathershield systems as standard within 5km of the coast.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Interior Painting",
    body: "Low-VOC systems for occupied buildings — strata corridors, hotel suites, schools and offices. Zone-staged scheduling with dust containment and same-day re-occupancy on most work.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "Colorbond, tile and membrane re-coats. Heat-reflective coatings reduce internal building temps by up to 8°C — a measurable energy saving on commercial assets.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },

  {
    label: "Rope Access Painting",
    body: "IRATA L1–L3 certified technicians for high-rise and difficult-access facades. Faster mobilisation, no scaffolding cost, zero footprint on your site.",
    photo: "/images/projects/1.jpeg",
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
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Colour Consulting",
    body: "On-site sample blocks at no charge for projects over $25k. Full colour schedules and heritage-compliant palettes available.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "Dedicated project manager",
    body: "One person runs your job from site visit to sign-off. One number, one thread, no chasing. You always know who to call.",
  },
  {
    n: "02",
    title: "IRATA-certified access",
    body: "30+ rope access technicians trained in-house to IRATA L1–L3. We reach what scaffold can't — faster, safer, cheaper.",
  },
  {
    n: "03",
    title: "5-year written warranty",
    body: "Workmanship warranty issued in writing and lodged in ROCO at handover. Backed by up to 15-year manufacturer coverage.",
  },
  {
    n: "04",
    title: "Coastal-spec paint systems",
    body: "Salt-bonded primers, chloride rinse, elastomeric topcoats. Every system is matched to the substrate and the exposure.",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
    ],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "QBCC licensed, $20M public liability, full workers' comp. Certificates of currency issued automatically at quote stage.",
    logos: [
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
      { src: "/images/associations/qbcc.png", alt: "QBCC Licensed" },
    ],
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
    photo: "/images/projects/1.jpeg",
    alt: "Residential painting — RAS-VERTEX Sunshine Coast",
    title: "Residential.",
    body: "We've been painting homes on the Sunshine Coast for 25 years — and we still treat every one like it's our own. You'll meet your project manager before a brush touches anything. They'll walk the job, explain what we're using and why, and be on the other end of the phone until you're happy.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Commercial painting — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "We know a closed shopfront or disrupted tenant costs you money. That's why we schedule around you — after hours, weekends, whatever it takes. Our crew are locals too, so when we say we'll be there Tuesday morning, we mean it.",
    cta: "See our process",
    href: "/process",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate and strata painting — RAS-VERTEX",
    title: "Body corporate & strata.",
    body: "We've worked with enough committees to know what matters: clear communication before the work starts, no surprises for residents, and a finished result the whole building is proud of. We handle the scheduling, the access, the documentation — and we back every job with a five-year written warranty.",
    cta: "Learn more",
    href: "/contact",
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
