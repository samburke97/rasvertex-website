// app/data/cleaningData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/cleaning.png",
    alt: "Rope access window cleaning technicians on a Sunshine Coast high-rise",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "Commercial window cleaning — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "High-rise window cleaning by rope access on the Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Exterior building cleaning and maintenance — Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "IRATA rope access window cleaning — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "High-Rise Window Cleaning",
    body: "Our IRATA rope access technicians abseil facades from rooftop anchors, with no cherry pickers and no scaffolding. Streak-free results on buildings of any height, from 4 storeys to 40+.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Strata & Body Corporate Cleaning",
    body: "Regular cleaning programs for strata buildings and body corporates, covering common area windows, balustrades, facade glass and external surfaces. Scheduled to minimise resident disruption, reported to committee after every visit.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Residential Window Cleaning",
    body: "Full house window cleans for homes across the Sunshine Coast, using purified water-fed pole systems for ground-accessible windows and rope access for elevated sections. Every pane spotless, every visit documented.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Solar Panel Cleaning",
    body: "Salt, bird droppings and dust reduce solar output by up to 30%. Our purified water system cleans panels without abrasive chemicals or scratching, safely accessed by rope on any roof pitch.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Pressure & Soft Washing",
    body: "Industrial-grade pressure cleaning for driveways, pavements, roofs, facades and hard surfaces, using the same recycled water vacuum system behind all of our cleaning work.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Post-Construction Cleaning",
    body: "First-clean packages for new buildings and renovations, removing paint overspray, silicone residue, concrete dust and construction film from all glass surfaces before handover. Builders across the Sunshine Coast call us first.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Facade & Cladding Wash",
    body: "Soft-wash treatment for rendered, painted and clad facades, removing salt deposits, biological growth, mould and pollution buildup that corrode surfaces over time. Part of any effective coastal building maintenance program.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Streak-free rope access window cleaning, RAS-VERTEX Sunshine Coast",
    title: "Streak-free results",
    body: "Purified, deionised water leaves zero mineral residue on glass, so there's no squeegee marks and no streaks. Every pane comes up crystal clear, on every visit, on every building we clean.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "IRATA certified rope access technician window cleaning, RAS-VERTEX Sunshine Coast",
    title: "IRATA rope access technicians",
    body: "Thirty plus IRATA certified technicians mean we access any height without scaffolding or EWP hire. Faster mobilisation, zero footprint on your site, and no disruption to tenants or residents below.",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "100% recycled water cleaning system, RAS-VERTEX Sunshine Coast",
    title: "Eco-friendly systems",
    body: "Every job runs through our recycled water vacuum system, so nothing reaches the stormwater or the coast beyond your building.",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site assessment",
    body: "We review building height, access and glass type.",
  },
  {
    n: "02",
    title: "Access planning",
    body: "We determine rope access or water-fed system requirements.",
  },
  {
    n: "03",
    title: "Purified water cleaning",
    body: "We remove dirt, salt and contaminants using deionised water systems.",
  },
  {
    n: "04",
    title: "Detail finishing",
    body: "Edges, frames and hard-to-reach areas are completed to a streak-free finish.",
  },
  {
    n: "05",
    title: "Scheduled maintenance",
    body: "We manage ongoing cleaning schedules for body corporates and commercial buildings, if you'd like it.",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "Streak-free results",
    body: "Purified water and zero mineral residue, so every pane comes up crystal clear.",
  },
  {
    n: "02",
    title: "IRATA rope access",
    body: "Certified technicians reach any height, on any building, without scaffolding.",
  },
  {
    n: "03",
    title: "Eco-friendly systems",
    body: "Recycled, filtered water with full vacuum recovery, on every job.",
  },
  {
    n: "04",
    title: "Protective maintenance",
    body: "Salt, pollution and biological growth eat building surfaces. Regular cleaning slows corrosion, protects coatings and extends the life of every facade.",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "$20M public liability, full workers' comp. Certificates of currency issued at quote stage. Safe work method statements provided for every high-access clean.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High-Rise Window Clean",
    type: "Strata · 18 storeys",
    system: "Rope access · purified water system · full facade glass",
    image: "/images/projects/1.jpeg",
    alt: "High-rise window cleaning Mooloolaba by RAS-VERTEX",
  },
  {
    suburb: "Maroochydore",
    name: "Commercial Tower Quarterly Program",
    type: "Commercial · ongoing",
    system: "Quarterly window clean · facade wash · solar panels",
    image: "/images/projects/2.jpeg",
    alt: "Commercial tower window cleaning Maroochydore — RAS-VERTEX",
  },
  {
    suburb: "Noosa",
    name: "Luxury Resort Complex",
    type: "Hospitality · resort",
    system: "Full building clean · windows · pressure wash · balustrades",
    image: "/images/projects/1.jpeg",
    alt: "Noosa resort window and exterior cleaning by RAS-VERTEX",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Strata and body corporate window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate.",
    body: "Regular cleaning programs built around your building's schedule. Committee-ready reporting after every visit. Rope access means no scaffolding cluttering common areas and no disruption to residents.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "First impressions start with clean glass. We keep your shopfront, office tower or commercial building spotless on a schedule that works around your tenants — after hours, weekends, whatever it takes.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Industrial window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Industrial.",
    body: "Warehouses, distribution centres and industrial sites need clear sightlines for safety and presentation without disrupting operations. We schedule around shift patterns, with full site inductions and safety documentation for every visit.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need window cleaning scheduled around term dates, not during class time. We work after-hours and during holidays, with full safety documentation for campus grounds and facilities teams.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Government.",
    body: "Council buildings, libraries and public facilities need scheduled window cleaning that fits around public opening hours and existing compliance requirements. Full documentation and public liability certificates provided for every contract.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Medical facility window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Medical.",
    body: "Hospitals, medical centres and aged care facilities need window cleaning that works within strict infection control and access requirements. Our purified water system leaves no chemical residue, and every visit is scheduled to suit facility rules.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Residential window cleaning — RAS-VERTEX Sunshine Coast",
    title: "Residential.",
    body: "From single-storey homes to multi-level beachfront properties. Purified water-fed pole for accessible windows, rope access for elevated sections. Salt, dust and grime gone — undisturbed views restored.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "What is the best method for high-rise window cleaning on the Sunshine Coast?",
    a: "Rope access is consistently the fastest and most cost-effective method for high-rise window cleaning on the Sunshine Coast. IRATA-certified technicians descend from rooftop anchors using purified deionised water systems — no scaffolding, no EWP hire costs, and no disruption to ground-level access. For buildings under 4 storeys, water-fed pole systems deliver the same streak-free result from the ground.",
  },
  {
    q: "How often should commercial windows be cleaned in coastal environments?",
    a: "For coastal properties within 5km of the ocean, we recommend window cleaning every 6–8 weeks — salt spray accumulates quickly and etches glass if left too long. Buildings further inland can typically extend to 10–12 week cycles. Facade and pressure washing programs are generally run every 6–12 months depending on exposure, surface type and occupancy.",
  },
  {
    q: "Is your window cleaning eco-friendly?",
    a: "Yes. Our pressure cleaning system uses 100% recycled and filtered hot water with a vacuum recovery system — all wastewater is collected and processed, with zero stormwater discharge. We use biodegradable, pH-neutral cleaning agents on all surfaces, and our purified water window cleaning system requires no chemical additives at all.",
  },
  {
    q: "How much does commercial window cleaning cost on the Sunshine Coast?",
    a: "Cost depends on building height, number of panes, access method required, and frequency. Rope access cleans on high-rise strata buildings typically range from $800–$3,500 per visit depending on scale. Residential cleans start from $150. We provide fixed-price quotes with no hidden charges — contact us for a site-specific price.",
  },
  {
    q: "What is the best way to remove mould from a building's exterior on the Sunshine Coast?",
    a: "A soft-wash treatment using low-pressure hot water and a biodegradable biocide is the most effective and surface-safe method for mould removal. High-pressure alone can drive moisture into render and masonry. Our process kills the mould at root level, applies a residual inhibitor to slow regrowth, and leaves the surface ready for painting or coating if required.",
  },
  {
    q: "Can you safely clean solar panels on the Sunshine Coast?",
    a: "Yes. We use a purified, deionised water system with soft-bristle brushes — no abrasive pads, no chemicals that could damage panel coatings or void manufacturer warranties. Solar cleaning is integrated into our rope access programs for rooftop panels on strata and commercial buildings.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Cleaning & Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Book a clean →",
};
