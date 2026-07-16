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
    alt: "High rise commercial building repaint on the Sunshine Coast",
  },
  {
    src: cld("commercial-ropes", { width: 1600 }),
    alt: "Rope access commercial painting on the Sunshine Coast",
  },
  {
    src: cld("commercial_hero_3", { width: 1600 }),
    alt: "Strata and body corporate painting on the Sunshine Coast",
  },
  {
    src: cld("commercial_hero_4", { width: 1600 }),
    alt: "IRATA rope access facade painting on a Sunshine Coast high rise",
  },
  {
    src: cld("commercial_hero_5", { width: 1600 }),
    alt: "Commercial building maintenance and painting on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "High Rise Facade Repaints",
    body: "We repaint anything from single storey apartment complexes to high-rise commercial buildings using IRATA certified rope access, our preferred method of access for minimal disruption, with no footprint sitting on your ground floor. Within about five kilometres of the coast we treat every facade with an environmentally friendly pressure clean first, then finish with a coating system tailored to our coastal climate.",
    photo: cld("commercial_hero_5", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Render & Texture Coatings",
    body: "We specialise in commercial render finishes and facade repairs, restoring tired buildings with clean, durable results. From minor repairs to full facade upgrades, our team prepares surfaces properly to ensure a finish that looks great and stands the test of time.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "From Colorbond and tile roofs to concrete roof systems, our team delivers professional rooftop repaints across the Sunshine Coast. We focus on thorough preparation, repairs and waterproofing to provide a long-lasting finish that protects your asset. If your building experiences excessive heat, we can assess whether a heat reflective coating system could help improve roof performance and comfort.",
    photo: cld("roof-coatings", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Ongoing Maintenance Painting",
    body: "A tailored maintenance painting plan keeps your property looking its best all year round, catching wear before it turns into a full repaint. It is a straightforward way to hold long term costs down while keeping a professional appearance without having to think about it.",
    photo: cld("ongoing-maintenance", { width: 1200 }),
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site Assessment",
    body: "We start with a detailed inspection of your building, assessing condition, existing coatings, access requirements and any repairs worth addressing before painting begins. That gives us an accurate scope from day one, rather than surprises further down the track.",
    deliverable: "Written condition assessment",
    icon: PiMagnifyingGlass,
  },
  {
    n: "02",
    title: "System Specification",
    body: "Every building faces different conditions, so we specify a coating system based on your building's substrate, exposure and how close it sits to the coast. You get a clear product schedule as part of your quotation, so you know exactly what is being applied and why.",
    deliverable: "Product schedule + specification sheet",
    icon: PiClipboardText,
  },
  {
    n: "03",
    title: "Surface Preparation",
    body: "Before any paint goes on, we complete the preparation that gives the coating system a genuine chance of performing for years to come. An environmentally friendly pressure clean is standard, alongside mould treatment, crack repairs and sealant replacement.",
    deliverable: "Prep completion sign off",
    icon: PiHammer,
    links: [
      { text: "pressure clean", href: "/external-cleaning" },
      { text: "crack repairs", href: "/maintenance" },
    ],
  },
  {
    n: "04",
    title: "Application",
    body: "Once preparation is complete, we apply each coating in line with the manufacturer's specifications. Your project manager oversees the works, keeps you updated throughout, and makes sure the agreed programme is delivered safely and efficiently.",
    deliverable: "Daily progress photos",
    icon: PiPaintRoller,
  },
  {
    n: "05",
    title: "Handover & Warranty",
    body: "Before we call the job finished, we walk the project with you to confirm everything has been delivered as agreed. Any final items get addressed before handover, and you will receive your workmanship warranty, manufacturer warranty documentation and a complete handover package for your records.",
    deliverable: "Warranty certificate + documentation pack",
    icon: PiShieldCheck,
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High Rise Repaint",
    type: "Body Corporate · 12 storeys · 84 lots",
    system: "Coastal-climate coating system",
    image: "/images/projects/1.jpeg",
    alt: "Oceanfront high rise repaint in Mooloolaba",
  },
  {
    suburb: "Maroochydore",
    name: "CBD Commercial Tower",
    type: "Commercial · 10 storeys",
    system:
      "Coastal-climate coating system · render repairs · full facade repaint",
    image: "/images/projects/2.jpeg",
    alt: "Maroochydore CBD commercial tower painting project",
  },
  {
    suburb: "Coolum Beach",
    name: "RACV Resort Complex",
    type: "Hospitality · resort complex",
    system:
      "Coastal-climate coating system · heritage palette · multi building program",
    image: "/images/projects/1.jpeg",
    alt: "RACV Coolum Resort exterior painting project",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate and strata painting on the Sunshine Coast",
    title: "Body Corporate.",
    body: "Committee ready proposals and staged scheduling are just part of the process. We have run more than fifty body corporate repaints across the Sunshine Coast, so we know how to communicate with committees, manage resident expectations and deliver a result that gets the building manager off the phone for good.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building painting on the Sunshine Coast",
    title: "Commercial.",
    body: "Office towers, retail centres, hotels and mixed use buildings all run differently, so we schedule around your tenants, after hours, on weekends or staged floor by floor. A closed shopfront or a disrupted tenant costs you money, and we have built our entire approach around avoiding exactly that.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Industrial painting on the Sunshine Coast",
    title: "Industrial.",
    body: "Tilt slab warehouses and industrial facilities need epoxy and polyurethane systems that stand up to chemical exposure, forklift traffic and constant daily use, not a retail grade coating stretched thin to cover an industrial floor or facade.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility painting on the Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need repainting scheduled around term dates, using low VOC systems suited to occupied classrooms and common areas. We work through holidays and after hours so the timetable is never affected.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building painting on the Sunshine Coast",
    title: "Government.",
    body: "Government buildings need painting programs backed by full compliance documentation and specification records ready for asset management sign off. We provide both, on a schedule built around public access and operating hours.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Medical facility painting on the Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres need low VOC, quick cure systems that keep clinical areas usable with minimal downtime. We stage work zone by zone and schedule around operating requirements, not the other way around.",
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
  { value: "8yr", label: "written warranty on every job" },
];

export const FAQS: FAQItem[] = [
  {
    q: "How much does commercial painting cost on the Sunshine Coast?",
    a: "Cost depends on building height, access method, substrate condition and the coating system specified. As commercial painters across the Sunshine Coast, we quote every project individually after a site assessment, with a fully itemised written quote and no hidden extras. For high rise work, rope access often brings the overall cost down compared to a scaffolded quote for the same scope.",
  },
  {
    q: "Can rope access reduce commercial painting costs on high rise buildings?",
    a: "Yes. Rope access is our preferred method of access for minimal disruption, and our thirty plus IRATA certified technicians access and paint any facade from rooftop anchor points with no lost ground floor space. On buildings over four storeys, rope access typically saves 40 to 60 percent on access costs compared to a full scaffold, while also mobilising faster and letting us work multiple faces at once.",
  },
  {
    q: "Can you paint a commercial building on the Sunshine Coast while it stays occupied?",
    a: "Yes, almost all of our commercial painting happens in buildings that stay fully occupied. We schedule noisy or disruptive prep work outside business hours, notify tenants and building management at least 48 hours before we are on each floor or face, and use dust containment and low odour systems for interior scopes. Rope access also removes most of the ground level disruption scaffolding would otherwise cause.",
  },
  {
    q: "What paint systems do you use for commercial buildings in coastal conditions?",
    a: "Within about five kilometres of the coast, we specify an environmentally friendly pressure clean and a flexible topcoat as standard, using coating systems tailored to our coastal climate for masonry, render and textured surfaces. The flexible topcoat bridges hairline cracks and handles the movement coastal commercial buildings experience, which standard topcoats cannot manage.",
  },
  {
    q: "Are you QBCC licensed and what warranty do you offer on commercial painting?",
    a: "Yes, we are fully QBCC licensed for commercial painting across Queensland, with $20 million in public liability cover and full workers compensation. Every project is backed by an eight year written workmanship warranty covering adhesion failure, peeling and blistering, plus manufacturer warranties of up to fifteen years on qualifying Dulux and Haymes systems, registered in the owner's or body corporate's name.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Commercial Painting Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Get a quote →",
};
