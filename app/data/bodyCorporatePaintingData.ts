// app/data/bodyCorporatePaintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import type { Credential } from "../components/shared/CredentialRows";
import { cld } from "../lib/cloudinary";
import {
  PiPresentation,
  PiMegaphone,
  PiHammer,
  PiPaintRoller,
  PiShieldCheck,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("body-corporate", { width: 1600 }),
    alt: "Body corporate high rise repaint on the Sunshine Coast",
  },
  {
    src: cld("zone-staged", { width: 1200 }),
    alt: "Strata building exterior painting on the Sunshine Coast",
  },
  {
    src: "/nav/painting.png",
    alt: "Body corporate painting program on the Sunshine Coast",
  },
  {
    src: cld("warranty", { width: 1200 }),
    alt: "IRATA rope access strata painting on the Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Body corporate painting and building maintenance on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior Facade Repaints",
    body: "We carry out full exterior repaints for strata buildings of any height, across render, masonry, concrete and cladding. Anything within five kilometres of the coast gets a chloride rinse and a coating system tailored to our coastal climate, specified to suit the actual substrate and exposure, not picked off a generic price list.",
    photo: cld("exterior-facade", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Balcony & Soffit Painting",
    body: "We paint balcony soffits, balustrades, ceilings and floor coatings, and high salt environments call for different preparation and system choices on balconies. We treat every balcony as its own coastal exposure rather than an afterthought tacked onto the main facade job.",
    photo: cld("balcony-painting", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "We recoat Colorbond, tile and concrete roofs on strata buildings, starting with a pressure wash and moss or lichen treatment before priming and finishing with a commercial grade topcoat. Heat reflective options are available too, which helps keep top floor units cooler.",
    photo: cld("roof-coatings", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Maintenance Painting",
    body: "Our ongoing maintenance painting plans catch wear before it turns into a full repaint, with touch ups to common areas, entries and high traffic zones on a schedule your committee can budget for, keeping the building presentable in between full repaint cycles.",
    photo: cld("maintenance-painting", { width: 1200 }),
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Committee Proposal",
    body: "We present to your committee before anything is signed, covering scope, product schedule, staging plan, colour schedule and resident communication strategy, all in plain language. We have done this enough times now to know exactly what a committee needs in order to approve a project.",
    deliverable: "Written proposal + colour schedule",
    icon: PiPresentation,
  },
  {
    n: "02",
    title: "Resident Communication",
    body: "We handle every resident notification ourselves, covering zone schedules, access requirements, noise windows and expected completion dates, distributed through your building manager or directly via the committee. Residents know what is happening and when, well before we mobilise on site.",
    deliverable: "Resident communication pack",
    icon: PiMegaphone,
  },
  {
    n: "03",
    title: "Surface Preparation",
    body: "High pressure washing, mould treatment, crack repairs, sealant replacement and chloride rinse all happen before a single coat goes on. Preparation is what determines how long the paint actually lasts, so we spend more time here than most painters spend on the entire job, and it means no substrate surprises turning up mid project.",
    deliverable: "Prep completion sign off",
    icon: PiHammer,
    links: [
      { text: "High pressure wash", href: "/external-cleaning" },
      { text: "crack repairs", href: "/maintenance" },
    ],
  },
  {
    n: "04",
    title: "Zone Staged Application",
    body: "We paint in building zones so no single face is disrupted for more than about a week at a time, and car parks are never fully closed. Rope access removes most of the ground level footprint, and daily progress photos go straight to your building manager or committee contact.",
    deliverable: "Daily progress photos",
    icon: PiPaintRoller,
  },
  {
    n: "05",
    title: "Handover & Warranty",
    body: "We finish with a final walkthrough alongside your project manager and issue a full documentation package, warranty certificate, paint specifications, before and after photos, and maintenance recommendations, all formatted for your sinking fund and maintenance records.",
    icon: PiShieldCheck,
    deliverable: "8-year warranty + documentation pack",
  },
];

export const CREDENTIALS: Credential[] = [
  {
    n: "01",
    title: "Fifty plus body corporate projects on the Sunshine Coast.",
    body: "We have been painting strata buildings on the Sunshine Coast for twenty five years now, which means we know how to communicate with committees, manage resident expectations and deliver a result the whole building is proud of, all without a single special levy surprise along the way.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "Body corporate repaint completed on the Sunshine Coast",
  },
  {
    n: "02",
    title: "Rope access, with no scaffolding and no car park disruption.",
    body: "Rope access is our preferred method of access for minimal disruption. Our thirty plus IRATA certified technicians access high rise facades straight from rooftop anchor points, with no ground floor footprint to work around. On a ten storey building, rope access typically saves the body corporate 40 to 60 percent on access costs compared with a full scaffold.",
    photo: "/images/projects/2.jpeg",
    photoAlt: "IRATA rope access painting on a Sunshine Coast strata building",
  },
  {
    n: "03",
    title: "Coastal spec paint systems, not generic inland products.",
    body: "Chloride rinse and a flexible topcoat are standard on anything within five kilometres of the coast. We specify coating systems tailored to our coastal climate, matched to the substrate and exposure your building actually faces, not something picked from a price list.",
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
    title: "An 8-year written warranty, issued at handover.",
    body: "Our workmanship warranty is issued in writing at completion, so your body corporate's insurance and maintenance records are covered from day one. Manufacturer warranties of up to fifteen years on qualifying systems are registered in the body corporate's name.",
    photo: "/images/projects/2.jpeg",
    photoAlt:
      "Project manager handing over warranty documentation to a strata committee",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC Licensed" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High Rise Repaint",
    type: "Body Corporate · 12 storeys · 84 lots",
    system: "Coastal-climate coating system · flexible topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Oceanfront high rise body corporate repaint in Mooloolaba",
  },
  {
    suburb: "Maroochydore",
    name: "Strata Complex Exterior Program",
    type: "Body Corporate · 8 storeys · staged over 2 years",
    system: "Coastal-climate coating system · render repairs · zone staged delivery",
    image: "/images/projects/2.jpeg",
    alt: "Strata complex exterior painting in Maroochydore",
  },
  {
    suburb: "Caloundra",
    name: "Beachside Strata Repaint",
    type: "Body Corporate · 6 storeys · full exterior + common areas",
    system: "Coastal-climate coating system · chloride rinse · colour consult",
    image: "/images/projects/1.jpeg",
    alt: "Beachside strata repaint in Caloundra",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How often should a body corporate repaint a building on the Sunshine Coast?",
    a: "Most coastal buildings on the Sunshine Coast need a full exterior repaint every eight to twelve years, though salt air, UV and storm exposure can shorten that cycle for beachfront properties. As body corporate painters, we assess the existing coating condition at quote stage and give your committee an honest recommendation rather than an upsell, so the repaint fits your sinking fund cycle rather than forcing an early one.",
  },
  {
    q: "How long does a full exterior strata repaint take, and how do you minimise disruption to residents?",
    a: "For a building of six to eight storeys, allow around five to seven weeks on site in total, or ten to twelve weeks for a twelve storey building. We paint one face or zone at a time so any resident only experiences disruption for about a week, and rope access removes scaffolding from car parks and common areas entirely. Most of our strata painting projects run without a single resident complaint.",
  },
  {
    q: "Can a body corporate use their sinking fund for exterior painting on the Sunshine Coast?",
    a: "Yes, painting and surface restoration are legitimate sinking fund expenditures under the BCCM Act 1997, provided the building's ten year maintenance plan includes the work. If your current forecast does not account for the repaint, the committee will need to pass a motion at an AGM or EGM, and we can provide a written condition assessment to support that case.",
  },
  {
    q: "Do you use rope access or scaffolding for body corporate and strata repaints?",
    a: "Rope access is our preferred method of access for minimal disruption, and it covers all high rise work where the building geometry allows it. Our IRATA certified technicians access facades directly from rooftop anchor points, with no ground floor footprint. On buildings over four storeys, rope access typically saves 40 to 60 percent on access costs, and we bring in scaffold only for specific areas that genuinely need a working platform.",
  },
  {
    q: "What warranty and paint systems do you provide for Sunshine Coast strata painting projects?",
    a: "Within five kilometres of the coast, we specify a coating system tailored to our coastal climate with a chloride rinse pre treatment, using a flexible topcoat to bridge hairline cracks and handle movement. Every strata project carries an eight year written workmanship warranty issued at handover, plus manufacturer warranties of up to fifteen years registered in the body corporate's name.",
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
