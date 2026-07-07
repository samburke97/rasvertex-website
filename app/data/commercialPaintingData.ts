// app/data/commercialPaintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import { cld } from "../lib/cloudinary";
import {
  PiMagnifyingGlass,
  PiClipboardText,
  PiHammer,
  PiPaintRoller,
  PiShieldCheck,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("commercial_hero_1", { width: 1600 }),
    alt: "High-rise commercial building repaint by RAS-VERTEX on the Sunshine Coast",
  },
  {
    src: cld("commercial_hero_2", { width: 1600 }),
    alt: "Rope access commercial painting — Sunshine Coast",
  },
  {
    src: cld("commercial_hero_3", { width: 1600 }),
    alt: "Strata and body corporate painting — Sunshine Coast",
  },
  {
    src: cld("commercial_hero_4", { width: 1600 }),
    alt: "IRATA rope access facade painting — Sunshine Coast high-rise",
  },
  {
    src: cld("commercial_hero_5", { width: 1600 }),
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
    label: "Ongoing Maintenance Painting",
    body: "Keep your property looking its best year-round with a tailored maintenance painting plan. Prevent premature wear, reduce long-term costs, and maintain a professional appearance effortlessly.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site Assessment",
    body: "We begin with a detailed inspection of your building, assessing substrate condition, existing coatings, access requirements, and any repairs that should be addressed before painting begins. This allows us to provide an accurate scope and recommend the right approach from day one.",
    deliverable: "Written condition assessment",
    icon: PiMagnifyingGlass,
  },
  {
    n: "02",
    title: "System Specification",
    body: "Every building is different. We specify a coating system based on your building's substrate, exposure, and coastal environment, then provide a clear product schedule as part of your quotation so you know exactly what's being applied and why.",
    deliverable: "Product schedule + specification sheet",
    icon: PiClipboardText,
  },
  {
    n: "03",
    title: "Surface Preparation",
    body: "Before any paint is applied, we complete the preparation needed to give the coating system the best chance of performing for years to come. This includes a pressure clean as standard, along with mould treatment, crack repairs, sealant replacement, and chloride rinsing where required.",
    deliverable: "Prep completion sign-off",
    icon: PiHammer,
    links: [
      { text: "pressure clean", href: "/external-cleaning" },
      { text: "crack repairs", href: "/maintenance" },
    ],
  },
  {
    n: "04",
    title: "Application",
    body: "Once preparation is complete, we apply each coating in accordance with the manufacturer's specifications. Your project manager oversees the works, keeps you informed throughout the project, and ensures the agreed programme is delivered safely and efficiently.",
    deliverable: "Daily progress photos",
    icon: PiPaintRoller,
  },
  {
    n: "05",
    title: "Handover & Warranty",
    body: "Before completion, we walk the project with you to ensure everything has been delivered as agreed. Any final items are addressed before handover, and you'll receive your workmanship warranty, manufacturer warranty documentation, and a complete handover package for your records.",
    deliverable: "Warranty certificate + documentation pack",
    icon: PiShieldCheck,
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
    title: "Body Corporate.",
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
    alt: "Industrial painting — RAS-VERTEX Sunshine Coast",
    title: "Industrial.",
    body: "Tilt-slab warehouses and industrial facilities need epoxy and polyurethane systems that hold up to chemical exposure, forklift traffic and constant use — not a retail-grade coating stretched to cover an industrial floor or facade.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility painting — RAS-VERTEX Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need repainting scheduled around term dates, with low-VOC systems suited to occupied classrooms and common areas. We work through holidays and after-hours to keep disruption off the timetable.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building painting — RAS-VERTEX Sunshine Coast",
    title: "Government.",
    body: "Government buildings need painting programs backed by full compliance documentation and specification records for asset management sign-off. We deliver both, on a schedule that fits around public access and operating hours.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Medical facility painting — RAS-VERTEX Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres need low-VOC, quick-cure systems that keep clinical areas usable with minimal downtime. We stage work zone by zone and schedule around operating requirements, not the other way around.",
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
    q: "What does the 8-year warranty cover on commercial painting?",
    a: "All workmanship — adhesion failure, peeling, blistering, or any defect caused by our application. It doesn't cover damage from substrate movement beyond normal thermal expansion, flooding, or physical impact. The warranty is issued in writing at handover. Manufacturer warranties — up to 15 years on qualifying Dulux and Haymes commercial systems — run separately and are registered in the building owner's or body corporate's name.",
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
