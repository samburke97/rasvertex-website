// app/data/bodyCorporatePaintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import type { Credential } from "../components/shared/CredentialRows";
import {
  PiPresentation,
  PiMegaphone,
  PiHammer,
  PiPaintRoller,
  PiShieldCheck,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/projects/1.jpeg",
    alt: "Body corporate high-rise repaint by RAS-VERTEX on the Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Strata building exterior painting — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/nav/painting.png",
    alt: "Body corporate painting program — Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "IRATA rope access strata painting — Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Body corporate painting and maintenance — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior Facade Repaints",
    body: "Full exterior repaints for strata buildings of any height — render, masonry, concrete and cladding. Chloride rinse and salt-bonded primer as standard within 5km of the coast. Dulux Weathershield and Haymes Sandtex systems specified for the substrate and exposure, not picked off a price list.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Balcony & Soffit Painting",
    body: "Balcony soffits, balustrades, ceilings and floor coatings. High-salt environments require different preparation and system selection on balconies — we treat every balcony as a coastal exposure, not an afterthought.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "Colorbond, tile and concrete roof recoats for strata buildings. Pressure wash, moss and lichen treatment, primer and commercial-grade topcoat — the full system. Heat-reflective options available to reduce top-floor unit temperatures.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Committee Proposal",
    body: "We present to your committee before anything is signed — scope, product schedule, staging plan, colour schedule, and resident communication strategy. Everything in plain language. We've done this enough times to know what committees need to approve a project.",
    deliverable: "Written proposal + colour schedule",
    icon: PiPresentation,
  },
  {
    n: "02",
    title: "Resident Communication",
    body: "We handle all resident notifications — zone schedules, access requirements, noise windows and expected completion dates. Distributed via your building manager or directly through the committee. Residents know what's happening and when before we mobilise.",
    deliverable: "Resident communication pack",
    icon: PiMegaphone,
  },
  {
    n: "03",
    title: "Surface Preparation",
    body: "High-pressure wash, mould treatment, crack repairs, sealant replacement and chloride rinse. Preparation determines how long the paint lasts — we spend more time here than most painters spend on the entire job. No substrate surprises surfaced mid-project.",
    deliverable: "Prep completion sign-off",
    icon: PiHammer,
  },
  {
    n: "04",
    title: "Zone-Staged Application",
    body: "Painting in building zones so no face is disrupted for more than a week at a time. Car parks never fully closed. Rope access eliminates ground-level footprint. Daily progress photos sent to building manager or committee contact.",
    deliverable: "Daily progress photos",
    icon: PiPaintRoller,
  },
  {
    n: "05",
    title: "Handover & Warranty",
    body: "Final walkthrough with your project manager. Full documentation package issued — warranty certificate, paint specifications, before/after photos, and maintenance recommendations. Formatted for your sinking fund and maintenance records.",
    icon: PiShieldCheck,
    deliverable: "5-year warranty + documentation pack",
  },
];

export const CREDENTIALS: Credential[] = [
  {
    n: "01",
    title: "50+ body corporate projects on the Sunshine Coast.",
    body: "We've been painting strata buildings on the Sunshine Coast for 25 years. We know how to communicate with committees, manage resident expectations, and deliver a result the whole building is proud of — without a single special levy surprise.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "Body corporate repaint completed by RAS-VERTEX on the Sunshine Coast",
  },
  {
    n: "02",
    title: "Rope access. No scaffolding, no car park disruption.",
    body: "Our 30+ IRATA-certified technicians access high-rise facades from rooftop anchor points. No scaffold hire, no crane cost, no ground-floor footprint. On a 10-storey building, rope access typically saves the body corporate 40–60% on access costs versus full scaffold.",
    photo: "/images/projects/2.jpeg",
    photoAlt: "IRATA rope access painting on a Sunshine Coast strata building",
  },
  {
    n: "03",
    title: "Coastal-spec paint systems. Not generic inland products.",
    body: "Salt-bonded primers, chloride rinse and elastomeric topcoats as standard within 5km of the coast. We specify Dulux Weathershield and Haymes Sandtex commercial systems matched to the substrate and exposure — not picked from a price list.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "Coastal spec paint system being applied to a Sunshine Coast strata building",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.svg", alt: "Dulux" },
    ],
  },
  {
    n: "04",
    title: "5-year written warranty. Lodged in ROCO at handover.",
    body: "Workmanship warranty issued in writing and lodged in ROCO at completion — your body corporate's insurance and maintenance records are covered from day one. Manufacturer warranties (up to 15 years on qualifying systems) registered in the body corporate's name.",
    photo: "/images/projects/2.jpeg",
    photoAlt:
      "RAS-VERTEX project manager handing over warranty documentation to strata committee",
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
    alt: "Mooloolaba oceanfront high-rise body corporate repaint — RAS-VERTEX",
  },
  {
    suburb: "Maroochydore",
    name: "Strata Complex Exterior Program",
    type: "Body Corporate · 8 storeys · staged over 2 years",
    system: "Haymes Sandtex · render repairs · zone-staged delivery",
    image: "/images/projects/2.jpeg",
    alt: "Maroochydore strata complex exterior painting — RAS-VERTEX",
  },
  {
    suburb: "Caloundra",
    name: "Beachside Strata Repaint",
    type: "Body Corporate · 6 storeys · full exterior + common areas",
    system: "Dulux AcraTex · chloride rinse · colour consult",
    image: "/images/projects/1.jpeg",
    alt: "Caloundra beachside strata repaint by RAS-VERTEX",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How does a body corporate painting project get approved and started?",
    a: "We start with a committee presentation — scope, product schedule, staging plan and colour schedule, all in plain language. Most committees vote to proceed at the same meeting. We can also prepare a written tender response for committees that require it. From approval to mobilisation is typically 2–4 weeks depending on the time of year.",
  },
  {
    q: "How do you minimise disruption to residents during a strata repaint?",
    a: "Zone staging is the key — we paint one face or floor zone at a time so the disruption to any resident is limited to a week at most. Rope access eliminates scaffolding from car parks and common areas entirely. We notify affected residents 48 hours before we're on their section and schedule noisy prep work during building management's preferred hours. Most of our strata projects run without a single resident complaint.",
  },
  {
    q: "Can a body corporate use their sinking fund for exterior painting?",
    a: "Yes — painting and surface restoration are legitimate sinking fund expenditures under the BCCM Act 1997, provided the building's 10-year maintenance plan includes the work. If your current sinking fund forecast doesn't account for the repaint, your committee will need to pass a motion at an AGM or EGM to proceed. We can provide a written condition assessment to support the sinking fund case if required.",
  },
  {
    q: "What paint systems do you use for Sunshine Coast strata buildings?",
    a: "Within 5km of the coast, Dulux Weathershield or Haymes Sandtex with salt-bonded primer and chloride rinse pre-treatment as standard. Elastomeric topcoats for rendered surfaces — these bridge hairline cracks and accommodate the thermal movement that coastal buildings experience. Inland strata buildings can use a lighter system. We specify the system at quote stage with the full product schedule — no surprises.",
  },
  {
    q: "Do you use rope access or scaffolding for strata repaints?",
    a: "Rope access for all high-rise work where geometry allows. Our IRATA L1–L3 certified technicians access facades from rooftop anchor points — no scaffold hire, no crane cost, no ground-floor footprint. On buildings over 4 storeys, rope access typically saves 40–60% on access costs. For specific areas where working platforms are required (podium levels, complex balcony geometry), we use scaffold for those sections only.",
  },
  {
    q: "What does the 5-year warranty cover on a strata painting project?",
    a: "All workmanship — adhesion failure, peeling, blistering, or any defect caused by our application. It's issued in writing and lodged in ROCO at handover. Manufacturer warranties (up to 15 years on qualifying Dulux and Haymes commercial systems) run separately and are registered in the body corporate's name. The documentation package we provide at handover includes everything your committee needs for insurance and maintenance records.",
  },
  {
    q: "How long does a full exterior strata repaint take?",
    a: "For a 6–8 storey building: 2–3 weeks preparation, 3–4 weeks painting. Total 5–7 weeks on-site. For a 12-storey building: allow 10–12 weeks. We work zone by zone so the building is never fully disrupted at once. Rope access mobilises faster than scaffold and allows us to work multiple faces simultaneously — we're typically 20–30% faster than scaffold-based programs on equivalent buildings.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Body Corporate Painting",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Get a committee proposal →",
};

export const LOGO_STRIP = [
  { src: "/partners/accor.svg", alt: "Accor Hotels" },
  { src: "/partners/racv.png", alt: "RACV" },
  { src: "/partners/pica.png", alt: "Pica Group" },
  { src: "/partners/sskb.svg", alt: "SSKB" },
  { src: "/partners/archers.png", alt: "Archers Body Corporate" },
  { src: "/partners/novotel.svg.png", alt: "Novotel" },
  { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
  { src: "/images/associations/qbcc.png", alt: "QBCC Licensed" },
];
