// app/data/heightSafetyData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/height.png",
    alt: "IRATA rope access technician performing height safety installation on the Sunshine Coast",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "Anchor point installation on a commercial building — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Height safety inspection and recertification — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Height safety compliance and rope access — Sunshine Coast",
  },
  {
    src: "/nav/cleaning.png",
    alt: "Rope access height safety technician — RAS-VERTEX Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Height Safety Installation",
    body: "We install anchor points, lifelines and roof access systems across all building types, designed for safe, practical use and future maintenance access.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Height Safety Inspections",
    body: "We inspect all fall protection systems and roof access infrastructure, identifying issues early and keeping your building safe and compliant.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Recertification",
    body: "We manage the full 12 month recertification cycle so your height safety systems stay compliant without lapses or admin stress.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Anchor Point & System Mapping",
    body: "We assess and map existing height safety systems so you know exactly what you have, what condition it is in, and what needs attention.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Rope Access Works",
    body: "We use ropes daily for access across painting, external and window cleaning, maintenance and inspections, giving us direct insight into how systems should perform.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];
export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Anchor point installation certified to AS/NZS 1891, RAS-VERTEX Sunshine Coast",
    title: "Certified to AS/NZS 1891",
    body: "Every anchor point, static line and roof access system we install is engineered and certified to AS/NZS 1891, with full compliance documentation issued at completion, insurance ready and legally defensible.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "IRATA certified rope access technician, RAS-VERTEX Sunshine Coast",
    title: "IRATA rope access technicians",
    body: "Our technicians don't just install height safety systems, they use them every day. Thirty plus IRATA certified rope access workers means every installation is built to perform under real working conditions.",
  },
  {
    photo: "/nav/height.png",
    alt: "Minimal disruption height safety installation, RAS-VERTEX Sunshine Coast",
    title: "Minimal disruption installs",
    body: "Rope access installation requires no scaffolding and minimal plant on site. Most anchor point installations are completed in a single day, with no disruption to building occupants or tenants below.",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "AS/NZS 1891 certified",
    body: "Every installation and inspection meets Australian Standards and the Work Health and Safety Act 2011. Certificates of compliance issued at completion — insurance-ready and legally defensible.",
  },
  {
    n: "02",
    title: "IRATA rope access",
    body: "Our technicians don't just install height safety — they use it daily. 30+ IRATA L1–L3 certified technicians means we understand what a compliant system needs to perform under working load conditions.",
  },
  {
    n: "03",
    title: "Compliance managed",
    body: "We track your certification dates and manage renewal scheduling. No chasing, no lapses — your system stays current and your liability stays covered.",
  },
  {
    n: "04",
    title: "Minimal disruption",
    body: "Rope access installation requires no scaffolding and minimal plant. Most anchor point installations are completed in a single day with no disruption to building occupants or tenants below.",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "$20M public liability, full workers' comp. Safe work method statements, risk assessments and certificates of currency provided for every job — everything your body corporate or property manager needs.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Commercial Tower Anchor Program",
    type: "Commercial · 14 storeys",
    system: "Anchor point installation · static line · annual certification",
    image: "/images/projects/1.jpeg",
    alt: "Anchor point installation Maroochydore commercial tower — RAS-VERTEX",
  },
  {
    suburb: "Mooloolaba",
    name: "Strata Complex Recertification",
    type: "Strata · ongoing compliance program",
    system: "Annual inspection · recertification · compliance management",
    image: "/images/projects/2.jpeg",
    alt: "Height safety recertification Mooloolaba strata — RAS-VERTEX",
  },
  {
    suburb: "Noosa",
    name: "Resort Roof Access System",
    type: "Hospitality · resort complex",
    system: "Roof access hatches · fixed ladders · horizontal lifeline",
    image: "/images/projects/1.jpeg",
    alt: "Roof access system installation Noosa resort — RAS-VERTEX",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate height safety — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate.",
    body: "Height safety compliance is a legal obligation for any building where maintenance staff or contractors access the roof. We manage the full program for body corporates across the Sunshine Coast — installation, annual inspection, recertification and compliance tracking, all documented for your committee.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building height safety — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "Rooftop plant, HVAC, façade maintenance and cleaning all require compliant height safety systems in place. We design, install and certify systems that work for how your building is actually maintained — not generic solutions that create gaps in coverage.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/height.png",
    alt: "Industrial height safety systems — RAS-VERTEX Sunshine Coast",
    title: "Industrial.",
    body: "Industrial sites with ongoing rooftop plant, silo or elevated access requirements benefit most from a managed compliance program. We install and certify systems engineered for the load and frequency of industrial access — not a one-off installation that gets forgotten.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility height safety — RAS-VERTEX Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need certified anchor points and roof access systems for maintenance staff and contractors, installed and inspected around term dates. We manage the compliance calendar so certification never lapses during a busy school year.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government facility height safety — RAS-VERTEX Sunshine Coast",
    title: "Government.",
    body: "Government and council facilities carry the same fall-protection obligations as any commercial building, with the added expectation of clean audit trails. We provide certification, inspection records and renewal reminders in a format that satisfies asset management requirements.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/height.png",
    alt: "Medical facility height safety — RAS-VERTEX Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres run rooftop plant and HVAC systems that need servicing year-round. We install and certify height safety systems that keep contractors compliant without adding rooftop clutter near sensitive building services.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "What is considered 'work at height' under Australian law?",
    a: "Under the Work Health and Safety Act 2011 and the WHS Regulations, 'work at height' is any work where a person could fall from one level to another and be injured. In practice this means any unprotected edge, rooftop, elevated platform, or structure where a fall could cause harm — regardless of the specific height. There is no minimum height threshold that exempts a workplace from fall protection obligations.",
  },
  {
    q: "What are the legal requirements for height safety equipment inspections on the Sunshine Coast?",
    a: "AS/NZS 1891.4 requires that all personal fall protection equipment and anchor systems be inspected by a competent person at least every 12 months, and after any incident or situation that may have compromised the system. For static lines and horizontal lifeline systems under AS/NZS 1891.2, annual inspection and load testing is required. Failure to maintain current certification creates direct liability for building owners and body corporate committees under the WHS Act.",
  },
  {
    q: "How can I ensure my building is compliant with height safety regulations?",
    a: "The most reliable approach is a compliance management program — a single contractor who tracks your certification dates, schedules annual inspections, and issues renewal reminders before anything lapses. We provide this service for body corporates and commercial property managers across the Sunshine Coast. It starts with a full audit of your existing height safety systems, after which we identify any gaps, carry out any remediation required, and put a forward schedule in place.",
  },
  {
    q: "How often should height safety equipment be inspected?",
    a: "All permanent height safety systems — anchor points, static lines, davit arms, roof access ladders — must be inspected by a competent person at minimum every 12 months under AS/NZS 1891. Personal protective equipment (harnesses, lanyards, carabiners) used with those systems must also be inspected at the same interval, or more frequently if the manufacturer specifies. After any fall event, near-miss, or situation where the system may have been shock-loaded, immediate inspection is required before the system can be used again.",
  },
  {
    q: "Do you partner with body corporates and commercial buildings for ongoing height safety compliance?",
    a: "Yes — this is one of our most commonly requested services. We act as the single point of contact for all height safety obligations: annual inspections, recertification, system upgrades, and compliance documentation. Body corporate committees receive a full report after every inspection, with findings, risk ratings, and recommended actions — everything needed for committee minutes and insurance records.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Height Safety Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Talk to our height safety team →",
};
