// app/data/maintenanceData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { MaintenancePlan } from "../components/shared/MaintenancePlans";
import type { CarouselSlide } from "../components/homepage/Carousel";
import { cld } from "../lib/cloudinary";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("maintenance-hero", { width: 1600 }),
    alt: "Rope access technician carrying out building maintenance on the Sunshine Coast",
  },
  {
    src: cld("same-faces", { width: 1200 }),
    alt: "Commercial building maintenance on the Sunshine Coast",
  },
  {
    src: cld("full-access", { width: 1200 }),
    alt: "Facade inspection and repair on the Sunshine Coast",
  },
  {
    src: cld("always-here", { width: 1200 }),
    alt: "Height safety and rope access maintenance on the Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Roof restoration and waterproofing maintenance on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Roof Restoration",
    body: "We start with a thorough inspection, then build a personalised restoration plan around it. From there we revitalise weathered roofs by repairing cracked tiles, repointing ridgelines and resealing penetrations, so the roof holds up against the Sunshine Coast's UV, salt air and storm season for years to come.",
    photo: cld("roof-restoration-sunshine-coast", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Concrete & Render Repairs",
    body: "From hairline fractures through to full reinforcing bar replacement, we use modern injection treatment equipment to repair cracks, chips and spalling, restoring both structural integrity and aesthetic appeal without unnecessary demolition.",
    photo: cld("maintenance-sunshine-coast", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Leak Detection & Repair",
    body: "We use thermal imaging and moisture mapping to find leaks that a visual inspection simply misses. Once located, we seal them with a targeted repair strategy, whether that is a waterproof membrane, injection grouting or localised rewaterproofing.",
    photo: cld("leak-detection", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Preventative Maintenance",
    body: "Our scheduled inspection and repair programs deal with small issues before they turn into expensive ones. Every visit is documented with photos and condition reports, so your building file stays current for body corporate committees and insurance purposes alike.",
    photo: cld("preventative-maintenance", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Emergency Repairs",
    body: "We respond quickly to storm damage, facade failures and urgent safety hazards, mobilising fast, making the site safe and repairing it properly, all of which keeps liability exposure and tenant disruption to a minimum from the very first call.",
    photo: cld("emergency-repairs", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Building Remediation & Restoration",
    body: "Drawing on our painting, cleaning, waterproofing and maintenance teams working as one, we handle the full scope of remedial and restoration works your building needs, bringing tired, damaged or deteriorating buildings back to full performance under one accountable team.",
    photo: cld("products", { width: 1200 }),
    href: "/contact",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Dedicated project manager on site for Sunshine Coast building maintenance",
    title: "Dedicated project manager",
    body: "One person manages your building from first inspection right through to ongoing maintenance, so you get one number and one thread rather than chasing different trades or waiting on callbacks.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "IRATA certified rope access technician carrying out building maintenance on the Sunshine Coast",
    title: "IRATA rope access technicians",
    body: "Thirty plus rope access technicians reach facades, roofs and plant rooms without scaffolding, which means faster mobilisation, lower cost and no disruption to residents or tenants.",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Condition reporting and documentation for a Sunshine Coast body corporate committee",
    title: "Full documentation",
    body: "Every visit is recorded with timestamped photos and condition notes, so your building file is always current and ready for committee meetings and insurance purposes.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Beachfront Towers Facade Program",
    type: "Body Corporate · 14 storeys",
    system: "Facade inspection · concrete repairs · sealant replacement",
    image: "/images/projects/1.jpeg",
    alt: "Beachfront Towers facade maintenance in Maroochydore",
  },
  {
    suburb: "Mooloolaba",
    name: "Oceanfront Strata Complex",
    type: "Strata · ongoing maintenance plan",
    system: "Roof restoration · render repairs · leak detection",
    image: "/images/projects/2.jpeg",
    alt: "Ongoing strata maintenance for a Mooloolaba complex",
  },
  {
    suburb: "Noosa",
    name: "Resort Complex Maintenance",
    type: "Commercial · resort",
    system: "Preventative program · sign installation · concrete repairs",
    image: "/images/projects/1.jpeg",
    alt: "Building maintenance at a Noosa resort complex",
  },
];

// 6 industries from the source copy
export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate building maintenance on the Sunshine Coast",
    title: "Body Corporate.",
    body: "We partner with dozens of body corporates across the Sunshine Coast. Rope access means no scaffolding blocking car parks and no disruption to residents, with one project manager running the whole program end to end.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Industrial building maintenance on the Sunshine Coast",
    title: "Industrial.",
    body: "We are a trusted partner for major industrial facilities across the Sunshine Coast, running rope access safely, keeping structures robust and treating safety compliance as non negotiable.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Commercial property maintenance on the Sunshine Coast",
    title: "Commercial.",
    body: "From retail centres to office towers, we prioritise the upkeep of your commercial space with regular inspections, swift responsive repairs and full condition reporting along the way.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility maintenance on the Sunshine Coast",
    title: "Education.",
    body: "We partner with schools and universities across the Sunshine Coast, running routine inspections and proactive repairs that keep campuses in top condition without disrupting the school day.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government facility maintenance on the Sunshine Coast",
    title: "Government.",
    body: "We are a preferred maintenance partner for government facilities across the Sunshine Coast, with a steady commitment to reliability, compliance and documentation at every step.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/height.png",
    alt: "Medical facility maintenance on the Sunshine Coast",
    title: "Medical.",
    body: "We understand the critical nature of medical environments, bringing precision, cleanliness and efficiency to every project so maintenance never compromises your facility's operations.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const PLANS: MaintenancePlan[] = [
  {
    n: "01",
    title: "Ongoing Support",
    body: "Scheduled maintenance contracts reduce emergency repairs, extend asset life and give your committee a predictable annual maintenance budget to plan around.",
    photo: "/images/projects/1.jpeg",
    alt: "Technician carrying out preventive maintenance on the Sunshine Coast",
  },
  {
    n: "02",
    title: "Dedicated Team",
    body: "An assigned project manager with full knowledge of your building means consistent service delivery, detailed reporting after every visit and one number to call.",
    photo: "/images/projects/2.jpeg",
    alt: "Project manager on site for a dedicated maintenance program",
  },
  {
    n: "03",
    title: "Full Service",
    body: "Painting, waterproofing, concrete repairs, cleaning and rope access all come from one team across every trade, so there is no vendor complexity and no gaps in accountability.",
    photo: "/nav/maintenance.png",
    alt: "Multi trade team carrying out building maintenance on the Sunshine Coast",
  },
  {
    n: "04",
    title: "Your Terms",
    body: "Whether you need seasonal coverage or a multi year partner, we will build the plan around your budget and your building's specific condition and cycle.",
    photo: "/nav/height.png",
    alt: "Technician on a flexible maintenance contract on the Sunshine Coast",
  },
];

export const PLAN_SLIDES: CarouselSlide[] = [
  {
    image: cld("full-access", { width: 1200 }),
    imageAlt:
      "Technician carrying out preventive maintenance on the Sunshine Coast",
    heading: "Ongoing support, on your terms",
    body: "We plan maintenance around your building so problems get dealt with before they become disruptions. It comes down to staying ahead of wear and tear, knowing what is coming up and handling it before it turns expensive.",
  },
  {
    image: cld("dedicated-team", { width: 1200 }),
    imageAlt:
      "Project manager on site for a dedicated maintenance program",
    heading: "Dedicated team",
    body: "You deal with the same person who knows your building and understands how it behaves, so there is no repeating yourself and no confusion, just straight communication and updates whenever something needs attention.",
  },
  {
    image: cld("full-rope-service", { width: 1200 }),
    imageAlt:
      "Multi trade team carrying out building maintenance on the Sunshine Coast",
    heading: "Full service",
    body: "Painting, waterproofing, concrete repairs, cleaning and rope access all sit under one roof. We handle whatever the building needs without you having to coordinate different trades or chase different contractors.",
  },
];
export const FAQS: FAQItem[] = [
  {
    q: "Why is routine building maintenance important for body corporates and strata buildings on the Sunshine Coast?",
    a: "The Sunshine Coast's salt air, UV intensity and seasonal storms speed up deterioration in ways that are not always visible until they become expensive. Routine building maintenance, quarterly inspections, annual facade checks and preventative sealant programs, catches problems at the hairline crack stage rather than the structural repair stage. It also protects your committee from liability if something fails with no documented maintenance history to point to.",
  },
  {
    q: "What are the most common commercial building maintenance services on the Sunshine Coast?",
    a: "Facade inspections, concrete and render repairs, roof restoration, leak detection and sign maintenance are the most frequently requested commercial building maintenance services. For coastal properties we add sealant replacement and anti corrosion treatment to the standard schedule, since salt air degrades caulking and fixings much faster here than at inland sites.",
  },
  {
    q: "Do you offer ongoing maintenance plans for body corporates and commercial properties?",
    a: "Yes. We build plans around your building's specific condition, your committee's budget cycle and your preferred inspection frequency. Plans range from a single annual inspection with a condition report through to a fully managed ongoing program covering every trade, and everything is documented and ready for committee review.",
  },
  {
    q: "What does roof restoration and repair involve on the Sunshine Coast?",
    a: "We start with a thorough inspection, visual, physical and thermal imaging where required, then produce a scope of works with photos and a cost breakdown before any repair begins. Restoration typically involves repointing ridgelines, replacing damaged tiles or Colorbond sheets, resealing penetrations and applying a protective coating, with every job signed off by a post works condition report.",
  },
  {
    q: "Will building maintenance work disrupt residents or tenants?",
    a: "We plan every job to keep disruption to a minimum. Rope access is our preferred method of access for minimal disruption, so common areas and balconies stay clear, and we stage work zone by zone, notify affected residents in advance and schedule noisy work during building management's preferred hours. Most of our maintenance programs run without a single resident complaint.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Talk to our maintenance team →",
};
