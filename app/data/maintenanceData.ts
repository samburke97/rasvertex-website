// app/data/maintenanceData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { MaintenancePlan } from "../components/shared/MaintenancePlans";
import type { CarouselSlide } from "../components/homepage/Carousel";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/maintenance.png",
    alt: "Rope access technician performing building maintenance on the Sunshine Coast",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "Commercial building maintenance — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Facade inspection and repair by RAS-VERTEX on the Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "Height safety and rope access maintenance — Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Roof restoration and waterproofing maintenance — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Roof Restoration",
    body: "Thorough inspection first, then a personalised restoration plan. We revitalise weathered roofs — repairing cracked tiles, repointing ridgelines, resealing penetrations — so they hold up against the Sunshine Coast's UV, salt air and storm season for years to come.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Concrete & Render Repairs",
    body: "From hairline fractures to full re-bar replacement. We use modern injection treatment equipment to repair cracks, chips and spalling — restoring structural integrity and aesthetic appeal without unnecessary demolition.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Leak Detection & Repair",
    body: "Thermal imaging and moisture mapping to find leaks that visual inspection misses. Once located, we seal them with targeted repair strategies — waterproof membranes, injection grouting, or localised re-waterproofing as required.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Preventative Maintenance",
    body: "Scheduled inspection and repair programs that address small issues before they become expensive ones. Every visit is documented with photos and condition reports — so your building file is always current for body corporate committees and insurance purposes.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Emergency Repairs",
    body: "Rapid response for storm damage, facade failures, and urgent safety hazards. We mobilise quickly, make safe, and repair — minimising liability exposure and tenant disruption from the first call.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "RAS-VERTEX dedicated project manager on site, Sunshine Coast building maintenance",
    title: "Dedicated project manager",
    body: "One person manages your building from first inspection to ongoing maintenance. One number, one thread, no chasing different trades or waiting on callbacks.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "IRATA certified rope access technician performing building maintenance, RAS-VERTEX Sunshine Coast",
    title: "IRATA rope access technicians",
    body: "Thirty plus rope access technicians reach facades, roofs and plant rooms without scaffolding. Faster mobilisation, lower cost, and no disruption to residents or tenants.",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Condition reporting and documentation for body corporate committees, RAS-VERTEX Sunshine Coast",
    title: "Full documentation",
    body: "Every visit is recorded with timestamped photos and condition notes, so your building file is always current for committee meetings and insurance purposes.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Beachfront Towers Facade Program",
    type: "Body Corporate · 14 storeys",
    system: "Facade inspection · concrete repairs · sealant replacement",
    image: "/images/projects/1.jpeg",
    alt: "Beachfront Towers Maroochydore facade maintenance by RAS-VERTEX",
  },
  {
    suburb: "Mooloolaba",
    name: "Oceanfront Strata Complex",
    type: "Strata · ongoing maintenance plan",
    system: "Roof restoration · render repairs · leak detection",
    image: "/images/projects/2.jpeg",
    alt: "Mooloolaba strata complex ongoing maintenance — RAS-VERTEX",
  },
  {
    suburb: "Noosa",
    name: "Resort Complex Maintenance",
    type: "Commercial · resort",
    system: "Preventative program · sign installation · concrete repairs",
    image: "/images/projects/1.jpeg",
    alt: "Noosa resort complex building maintenance by RAS-VERTEX",
  },
];

// 6 industries from the source copy
export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate building maintenance — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate.",
    body: "We partner with dozens of body corporates across the Sunshine Coast. Rope access means no scaffolding blocking car parks, no disruption to residents — and one project manager running the program end to end.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Industrial building maintenance — RAS-VERTEX Sunshine Coast",
    title: "Industrial.",
    body: "The trusted partner for major industrial facilities across the Sunshine Coast. Rope access running safely, structures kept robust, and safety compliance always paramount.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Commercial property maintenance — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "From retail centres to office towers, we prioritise the upkeep of your commercial space — regular inspections, swift responsive repairs, and full condition reporting.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility maintenance — RAS-VERTEX Sunshine Coast",
    title: "Education.",
    body: "Partnering with schools and universities across the Sunshine Coast. Routine inspections and proactive repairs — keeping campuses in top condition without disrupting the school day.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government facility maintenance — RAS-VERTEX Sunshine Coast",
    title: "Government.",
    body: "A preferred maintenance partner for government facilities across the Sunshine Coast. Steadfast commitment to reliability, compliance, and documentation at every step.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/height.png",
    alt: "Medical facility maintenance — RAS-VERTEX Sunshine Coast",
    title: "Medical.",
    body: "We understand the critical nature of medical environments. Precision, cleanliness and efficiency in every project — maintenance delivered without compromising your facility's operations.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const PLANS: MaintenancePlan[] = [
  {
    n: "01",
    title: "Ongoing Support",
    body: "Scheduled maintenance contracts that reduce emergency repairs, extend asset life, and give your committee a predictable annual maintenance budget.",
    photo: "/images/projects/1.jpeg",
    alt: "RAS-VERTEX technician conducting preventive maintenance on the Sunshine Coast",
  },
  {
    n: "02",
    title: "Dedicated Team",
    body: "An assigned project manager with full knowledge of your building — consistent service delivery, detailed reporting after every visit, one number to call.",
    photo: "/images/projects/2.jpeg",
    alt: "RAS-VERTEX project manager on site for a dedicated maintenance program",
  },
  {
    n: "03",
    title: "Full Service",
    body: "Painting, waterproofing, concrete repairs, cleaning, rope access — one team across every trade. No vendor complexity, no gaps in accountability.",
    photo: "/nav/maintenance.png",
    alt: "RAS-VERTEX multi-trade team performing building maintenance on the Sunshine Coast",
  },
  {
    n: "04",
    title: "Your Terms",
    body: "Whether you need seasonal coverage or a multi-year partner, we'll build the plan around your budget and your building's specific condition and cycle.",
    photo: "/nav/height.png",
    alt: "RAS-VERTEX technician on a flexible maintenance contract on the Sunshine Coast",
  },
];

export const PLAN_SLIDES: CarouselSlide[] = [
  {
    image: "/images/projects/1.jpeg",
    imageAlt:
      "RAS-VERTEX technician conducting preventive maintenance on the Sunshine Coast",
    heading: "Ongoing support, on your terms",
    body: "We plan maintenance around your building so problems are dealt with before they become disruptions. It is about staying ahead of wear and tear, knowing what is coming up and dealing with it before it becomes expensive.",
  },
  {
    image: "/images/projects/2.jpeg",
    imageAlt:
      "RAS-VERTEX project manager on site for a dedicated maintenance program",
    heading: "Dedicated team",
    body: "You deal with the same person who knows your building and understands how it behaves. No repeating yourself, no confusion, just straight communication and updates when something needs attention.",
  },
  {
    image: "/nav/maintenance.png",
    imageAlt:
      "RAS-VERTEX multi-trade team performing building maintenance on the Sunshine Coast",
    heading: "Full service",
    body: "Painting, waterproofing, concrete repairs, cleaning and rope access. We handle whatever the building needs without you having to coordinate different trades or chase different contractors.",
  },
];
export const FAQS: FAQItem[] = [
  {
    q: "Why is routine maintenance crucial for body corporates and strata buildings?",
    a: "The Sunshine Coast's salt air, UV intensity and seasonal storms accelerate deterioration in ways that aren't always visible until they're expensive. Routine maintenance — quarterly inspections, annual facade checks, preventative sealant programs — catches problems at the hairline crack stage, not the structural repair stage. It also protects your committee from liability if something fails and there's no documented maintenance history.",
  },
  {
    q: "What are the most common maintenance services for commercial properties on the Sunshine Coast?",
    a: "Facade inspections, concrete and render repairs, roof restoration, leak detection, and sign maintenance are the most frequently requested. For coastal properties we add sealant replacement and anti-corrosion treatment to the standard schedule — salt air degrades caulking and fixings much faster than inland sites.",
  },
  {
    q: "Do you offer maintenance plans for body corporates and commercial properties?",
    a: "Yes. We build plans around your building's specific condition, your committee's budget cycle, and your preferred inspection frequency. Plans range from a single annual inspection with a condition report to a fully managed ongoing program covering all trades. Everything is documented and committee-ready.",
  },
  {
    q: "What is involved in roof restoration and repair on the Sunshine Coast?",
    a: "We start with a thorough inspection — visual, physical, and thermal imaging where required — then produce a scope of works with photos and cost breakdown before any repair begins. Restoration typically involves repointing ridgelines, replacing damaged tiles or Colorbond sheets, resealing penetrations, and applying a protective coating. Every job is signed off with a post-works condition report.",
  },
  {
    q: "Will maintenance work cause disruption to residents?",
    a: "We plan every job to minimise it. Rope access means no scaffolding on balconies or blocking common areas. We stage work zone by zone, notify affected residents in advance, and schedule noisy work during building management's preferred hours. Most maintenance programs run without a single resident complaint.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Talk to our maintenance team →",
};
