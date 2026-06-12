// app/data/commercialPaintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/projects/1.jpeg",
    alt: "High-rise commercial building repaint by RAS-VERTEX on the Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Rope access commercial painting — Sunshine Coast",
  },
  {
    src: "/nav/painting.png",
    alt: "Strata and body corporate painting — Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "IRATA rope access facade painting — Sunshine Coast high-rise",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Commercial building maintenance and painting — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "High-Rise Facade Repaints",
    body: "Full exterior repaints for buildings from 4 to 40+ storeys using IRATA-certified rope access. No scaffolding hire, no crane cost, no footprint on the ground floor. Salt-bonded primer, chloride rinse and Dulux Weathershield or Haymes Sandtex systems as standard within 5km of the coast.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Body Corporate & Strata Painting",
    body: "Committee-ready proposals, staged zone scheduling to minimise resident disruption, and resident communication handled end-to-end. Over 50 body corporate projects completed across the Sunshine Coast. Written warranty lodged at handover, formatted for your maintenance plan.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Commercial Interior Painting",
    body: "Low-VOC systems for occupied commercial buildings — offices, retail tenancies, hotel suites, hospitality venues and common areas. Zone-staged scheduling with dust containment and same-day re-occupancy on most scopes. After hours and weekend crews available.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Render & Texture Coatings",
    body: "Acrylic, polymer and sand-finish render systems for commercial facades. We repair all cracks and substrate defects before coating — no bandaid bridges over movement joints. Surface preparation is half the job; we don't shortcut it.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "Colorbond, tile and concrete roof recoats for commercial buildings. Heat-reflective coatings reduce internal temperatures by up to 8°C — a measurable energy saving on commercial assets and a significant improvement for top-floor tenants.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Line Marking & Car Park Painting",
    body: "Car park line marking, bay numbering, directional arrows and disabled bay stencils. Chlorinated rubber and road-grade epoxy systems. Completed overnight — no disruption to building tenants during business hours.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Colour Consulting",
    body: "On-site sample blocks at no charge for projects over $25k. Full colour schedules prepared with body corporate committees or commercial owners. We've seen what works on coastal facades — and what fails within two years.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site Assessment",
    body: "We inspect the full facade before pricing anything — substrate condition, access requirements, coating history, and any defects that need remediation before painting begins. What we find determines what we specify.",
    deliverable: "Written condition assessment",
  },
  {
    n: "02",
    title: "System Specification",
    body: "Paint system selected for your building's substrate, exposure and coastal proximity. Not a generic spec — a system matched to the salt air, UV intensity and humidity your building actually experiences. Full product schedule provided at quote stage.",
    deliverable: "Product schedule + specification sheet",
  },
  {
    n: "03",
    title: "Surface Preparation",
    body: "High-pressure wash, mould treatment, crack repairs, sealant replacement and chloride rinse where required. Preparation determines how long the paint lasts — we spend more time here than most painters spend on the entire job.",
    deliverable: "Prep completion sign-off",
  },
  {
    n: "04",
    title: "Application",
    body: "Primer, intermediate coat and topcoat applied to manufacturer's specified DFT (dry film thickness). Every coat documented. Rope access for all elevated work — no scaffolding unless the scope specifically requires it.",
    deliverable: "Daily progress photos",
  },
  {
    n: "05",
    title: "Handover & Warranty",
    body: "Final inspection with your project manager. Written 5-year workmanship warranty issued and lodged in ROCO. Manufacturer warranties (up to 15 years on qualifying systems) registered in the building owner's name. Full documentation package for your body corporate records.",
    deliverable: "Warranty certificate + documentation pack",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "One project manager",
    body: "One person from site assessment to warranty sign-off. One phone number. No handoffs between sales and production — the person who quotes is the person who runs the job.",
  },
  {
    n: "02",
    title: "IRATA rope access",
    body: "30+ IRATA L1–L3 certified technicians — all direct employees, no subcontractors. High-rise repaints without scaffolding: 40–60% cheaper on buildings over 4 storeys, faster mobilisation, no ground-floor disruption.",
  },
  {
    n: "03",
    title: "Coastal paint systems",
    body: "Salt-bonded primers, chloride rinse and elastomeric topcoats as standard within 5km of the coast. We specify Dulux and Haymes commercial systems — not hardware store products in trade buckets.",
  },
  {
    n: "04",
    title: "5-year written warranty",
    body: "Workmanship warranty issued in writing and lodged in ROCO at handover. Backed by up to 15-year manufacturer coverage on qualifying systems.",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
    ],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "QBCC licensed, $20M public liability, full workers' comp. Certificates of currency issued automatically at quote stage — everything your body corporate or property manager needs.",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC Licensed" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High-Rise Repaint",
    type: "Body Corporate · 12 storeys · 84 lots",
    system: "Dulux Weathershield · salt-bonded primer · elastomeric topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Mooloolaba oceanfront high-rise repaint by RAS-VERTEX",
  },
  {
    suburb: "Maroochydore",
    name: "CBD Commercial Tower",
    type: "Commercial · 10 storeys",
    system: "Dulux AcraTex · render repairs · full facade repaint",
    image: "/images/projects/2.jpeg",
    alt: "Maroochydore CBD commercial tower painting by RAS-VERTEX",
  },
  {
    suburb: "Coolum Beach",
    name: "RACV Resort Complex",
    type: "Hospitality · resort complex",
    system: "Haymes Sandtex · heritage palette · multi-building program",
    image: "/images/projects/1.jpeg",
    alt: "RACV Coolum Resort exterior painting by RAS-VERTEX",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate and strata painting — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate & Strata.",
    body: "Committee-ready proposals and staged scheduling. We've run over 50 body corporate repaints across the Sunshine Coast — we know how to communicate with committees, manage resident expectations, and deliver a result that gets the building manager off the phone.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building painting — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "Office towers, retail centres, hotels and mixed-use buildings. We schedule around your tenants — after hours, weekends, staged by floor. A closed shopfront or disrupted tenant costs you money; we've built our entire model around avoiding that.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Industrial and government painting — RAS-VERTEX Sunshine Coast",
    title: "Industrial & Government.",
    body: "Tilt-slab warehouses, industrial facilities, schools and government buildings. Epoxy and polyurethane systems for industrial environments, low-VOC for occupied educational and government buildings. Full compliance documentation provided.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const TRUST_LOGOS = [
  { src: "/partners/accor.svg", alt: "Accor Hotels" },
  { src: "/partners/novotel.svg.png", alt: "Novotel" },
  { src: "/partners/racv.png", alt: "RACV" },
  { src: "/partners/raywhite.png", alt: "Ray White" },
  { src: "/partners/mosaic.svg", alt: "Mosaic" },
  { src: "/partners/pica.png", alt: "Pica Group" },
  { src: "/partners/sskb.svg", alt: "SSKB" },
  { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
];

export const TRUST_STATS = [
  { value: "25+", label: "years on the Sunshine Coast" },
  { value: "50+", label: "body corporate projects" },
  { value: "5yr", label: "written warranty on every job" },
];

export const FAQS: FAQItem[] = [
  {
    q: "How long does a high-rise commercial repaint take on the Sunshine Coast?",
    a: "For a 10–12 storey building, allow 8–12 weeks on-site from mobilisation to handover. Preparation — pressure washing, crack repairs, sealant replacement and chloride treatment — typically takes 2–3 weeks before painting begins. We work in zones so the building is never fully scaffolded or inaccessible at any one time. Rope access mobilises faster than scaffold and allows us to work multiple faces simultaneously.",
  },
  {
    q: "Can you paint a commercial building while it stays occupied?",
    a: "Yes — almost all our commercial work is done in occupied buildings. We schedule noisy or disruptive prep work outside business hours, notify tenants and building management at least 48 hours before we're on each floor or face, and use dust containment and low-odour systems for interior scopes. Rope access eliminates most of the ground-level disruption associated with scaffolding.",
  },
  {
    q: "What paint systems do you use for coastal buildings on the Sunshine Coast?",
    a: "Within 5km of the coast, we specify salt-bonded primers, chloride rinse pre-treatment and elastomeric topcoats as standard. The most common systems are Dulux Weathershield (for masonry and render) and Haymes Sandtex (for textured surfaces). Elastomeric topcoats bridge hairline cracks and accommodate the thermal movement coastal buildings experience — standard gloss or low-sheen topcoats don't.",
  },
  {
    q: "Do you use rope access or scaffolding for high-rise painting?",
    a: "Rope access for the vast majority of high-rise work. Our 30+ IRATA L1–L3 certified technicians can access and paint any facade from rooftop anchor points — faster mobilisation, no scaffold hire cost, and no disruption to ground-floor tenants or car parks. On average, rope access saves 40–60% on access costs compared to full scaffold on buildings over 4 storeys. For buildings with complex geometries or where access-constrained floors require a working platform, we use scaffold for those specific areas.",
  },
  {
    q: "What does the 5-year warranty cover on commercial painting?",
    a: "All workmanship — adhesion failure, peeling, blistering, or any defect caused by our application. It doesn't cover damage from substrate movement beyond normal thermal expansion, flooding, or physical impact. The warranty is issued in writing at handover and lodged in ROCO. Manufacturer warranties — up to 15 years on qualifying Dulux and Haymes commercial systems — run separately and are registered in the building owner's or body corporate's name.",
  },
  {
    q: "How do you manage a body corporate painting project?",
    a: "We present to the committee before anything is signed — scope, product schedule, staging plan, and resident communication strategy. During the job, the project manager is the single point of contact for both the committee and building manager. We issue weekly progress photos and flag any substrate issues the moment they're identified so there are no scope surprises at the end. Everything is documented for the body corporate's maintenance records.",
  },
  {
    q: "Are you QBCC licensed for commercial painting?",
    a: "Yes — QBCC licensed for all commercial painting works in Queensland. $20M public liability, full workers' compensation, IRATA certification for all rope access crew. Certificates of currency are issued automatically at quote stage — everything your property manager or body corporate committee needs for compliance records.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Commercial Painting Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Get a quote →",
};
