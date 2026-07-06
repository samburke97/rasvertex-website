// app/data/waterproofingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/waterproofing.png",
    alt: "Waterproofing membrane application on a Sunshine Coast rooftop by RAS-VERTEX",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "Concrete roof restoration and waterproofing — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Balcony waterproofing and membrane coating — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Building waterproofing and remedial works — Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "Rope access waterproofing on a Sunshine Coast building",
  },
];

export const PREP_STEPS = [
  {
    number: "01",
    title: "Floor Preparation",
    body: "Before any membrane is applied, all existing finishes including coatings, tiles and coverings are fully removed to expose the base structure. The goal is simple — a clean, sound surface that will actually hold the system long term.",
  },
  {
    number: "02",
    title: "Diamond Grinding",
    body: "We mechanically prepare concrete to remove contamination, open the surface and expose hidden cracks and voids. This step ensures the waterproofing system bonds properly and performs as designed, not just on paper.",
  },
  {
    number: "03",
    title: "Crack Repair",
    body: "Once exposed, cracks are assessed and repaired based on movement and severity. Structural cracks are cut, backed and sealed to allow movement, preventing repairs from failing as the building shifts over time.",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Concrete Roof Restoration",
    body: "We restore failed concrete roof systems using a complete coating system designed for coastal exposure, including UV, salt air and thermal movement. Every layer is applied to manufacturer requirements to ensure long term performance and durability.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Balcony Waterproofing",
    body: "We remove and replace failed balcony waterproofing systems after diagnosing the cause of failure, whether that is membrane breakdown, substrate cracking or poor drainage. New systems are installed to suit the movement and exposure conditions of the structure.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Leak Detection & Repair",
    body: "Using thermal imaging and moisture detection equipment, we locate the exact source of water ingress without unnecessary destructive investigation. On the Sunshine Coast, water often travels through concrete before it becomes visible, so we trace it back to the origin, not just the surface damage.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Remedial & Injection Works",
    body: "We use epoxy and polyurethane injection to stop active leaks in concrete structures including basements, lift pits and retaining walls. This seals water ingress at the source and helps protect reinforcing steel from ongoing corrosion.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Concrete surface preparation before waterproofing, RAS-VERTEX Sunshine Coast",
    title: "Preparation first",
    body: "Waterproofing is only as good as the surface beneath it. We grind, repair and prime before a single drop of membrane is applied, with no shortcuts on substrate prep.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Diamond grinding equipment used for waterproofing preparation, RAS-VERTEX Sunshine Coast",
    title: "German-engineered equipment",
    body: "Diamond grinding equipment powered by three phase generators, paired with HEPA filtered vacuum extractors, producing a surface that membranes actually bond to.",
  },
  {
    photo: "/nav/waterproofing.png",
    alt: "Written waterproofing warranty, RAS-VERTEX Sunshine Coast",
    title: "Written warranty",
    body: "A workmanship warranty is issued in writing at handover, backed by manufacturer product warranties up to 15 years on qualifying membrane systems.",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "Preparation first",
    body: "No shortcuts on substrate prep. Full detail above.",
  },
  {
    n: "02",
    title: "German-engineered equipment",
    body: "The right tools for a surface membranes bond to. See above.",
  },
  {
    n: "03",
    title: "SEQ climate specification",
    body: "UV-stable, salt-resistant membrane systems specified for the Sunshine Coast's thermal cycling, UV intensity and coastal exposure — not generic inland systems applied to coastal conditions.",
  },
  {
    n: "04",
    title: "Written warranty",
    body: "Issued at handover, backed by manufacturer warranties. Full detail above.",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "QBCC licensed for waterproofing works in Queensland. $20M public liability, full workers' comp. Compliance certificates issued at completion for body corporate and building owner records.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront Strata — Balcony Program",
    type: "Strata · 52 balconies",
    system: "Full membrane replacement · AS 3740 · polyurethane system",
    image: "/images/projects/1.jpeg",
    alt: "Balcony waterproofing program Mooloolaba strata — RAS-VERTEX",
  },
  {
    suburb: "Maroochydore",
    name: "Commercial Rooftop Restoration",
    type: "Commercial · concrete roof",
    system:
      "Diamond grind · crack repair · epoxy prime · polyurethane membrane",
    image: "/images/projects/2.jpeg",
    alt: "Concrete roof restoration Maroochydore — RAS-VERTEX",
  },
  {
    suburb: "Noosa",
    name: "Resort Rooftop Waterproofing",
    type: "Hospitality · resort",
    system: "Full roof preparation · membrane system · UV-stable topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Rooftop waterproofing Noosa resort — RAS-VERTEX",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate balcony waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate.",
    body: "Failed balcony waterproofing is the most common and most expensive maintenance issue facing strata buildings on the Sunshine Coast. We run full balcony programs for body corporates — staged by floor to minimise owner disruption, with committee-ready condition reports at every stage.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial rooftop waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "Concrete roof restorations, podium decks and expansion joint replacement for commercial buildings and retail centres. We diagnose correctly, prepare the substrate properly, and apply systems specified to last — not to get through the next wet season.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/waterproofing.png",
    alt: "Industrial waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Industrial.",
    body: "Warehouse roofing, tilt-slab expansion joints and hardstand drainage need systems that handle structural movement and chemical exposure, not just weather. We specify for the substrate and the operation — so the fix outlasts the next audit.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Education.",
    body: "Leaking roofs and balconies on school and campus buildings need repairs scheduled around term dates. We work during holidays and after-hours where possible, with full safety documentation for facilities and grounds teams.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Government.",
    body: "Council buildings and public facilities need waterproofing works documented to a standard that satisfies asset management and compliance requirements. We provide full condition reports, specification records and warranty documentation for every project.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/waterproofing.png",
    alt: "Medical facility waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres can't tolerate water ingress near clinical spaces or unplanned shutdowns. We use thermal imaging to find the source before opening anything up, and schedule works to minimise disruption to critical areas.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Residential waterproofing — RAS-VERTEX Sunshine Coast",
    title: "Residential.",
    body: "Bathroom, balcony and rooftop waterproofing for homes and units. We find the source, prepare the surface correctly, and apply a warranted system — protecting your home and your investment from the Sunshine Coast's wet seasons.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How often should roof waterproofing be inspected or reapplied on the Sunshine Coast?",
    a: "We recommend a visual inspection every 2–3 years for flat and low-pitch concrete roofs on the Sunshine Coast. The combination of intense UV, thermal cycling and salt air degrades membrane systems faster than most Australian climates. A full system reapplication is typically required every 8–12 years, depending on the original membrane specification, application quality and level of ongoing maintenance. Signs that reapplication is overdue include surface crazing, blistering, delamination at edges or upturns, and any evidence of ponding water.",
  },
  {
    q: "What are the signs that my roof or balcony needs waterproofing?",
    a: "The most common signs are water staining or damp patches on ceilings and walls below the roof or balcony, efflorescence (white salt deposits) on concrete soffits, visible cracking or blistering of the existing membrane surface, failed sealant at wall junctions and penetrations, and musty odour in spaces below. In strata buildings, complaints from the apartment below are often the first indicator. By the time visible damage appears inside, the membrane has typically been failing for some time — a thermal imaging inspection will confirm the extent without any destructive work.",
  },
  {
    q: "What waterproofing materials do you use?",
    a: "The system depends on the substrate, the expected structural movement, the level of foot traffic and the coastal exposure. For concrete rooftops we typically use a two-pack epoxy prime coat, a polyurethane membrane, and a UV-stable non-slip topcoat. For balconies to AS 3740, polyurethane or fibreglass systems are most common. For wet areas and bathrooms, liquid-applied membranes to AS 3740. We specify materials from proven commercial manufacturers — no budget systems on coastal exposures.",
  },
  {
    q: "Can I do my own roof waterproofing?",
    a: "Waterproofing is a licensed trade in Queensland — all waterproofing works on a building (other than minor maintenance) must be carried out by a QBCC-licensed contractor. Beyond the licensing requirement, the outcome depends heavily on correct substrate preparation, which requires diamond grinding equipment and HEPA-filtered dust extraction. An improperly prepared surface will cause membrane delamination, typically within one to two wet seasons. A professional application with a written warranty is significantly more cost-effective than a failed DIY attempt followed by full professional remediation.",
  },
  {
    q: "What trades specialise in waterproofing?",
    a: "In Queensland, waterproofing is a specialist trade licensed separately by the QBCC. While some tilers and builders hold waterproofing licences for wet areas, rooftop and balcony waterproofing on strata and commercial buildings requires a contractor with specific experience in membrane systems, substrate preparation and the relevant Australian Standards (AS 3740 for wet areas, AS 4654 for roofs). RAS-VERTEX holds the relevant QBCC licences and specialises in waterproofing for strata, body corporate, commercial and residential properties across the Sunshine Coast.",
  },
  {
    q: "Do you provide condition reports for body corporate sinking fund planning?",
    a: "Yes. We provide written condition assessments suitable for use in 10-year maintenance plans and sinking fund forecasts — with photos, risk ratings, and recommended remediation timeframes for each area inspected. Body corporate committees and strata managers across the Sunshine Coast use these reports to prioritise spending and plan maintenance budgets accurately.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Waterproofing Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Chat to our waterproofing team →",
};
