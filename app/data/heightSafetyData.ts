// app/data/heightSafetyData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import { cld } from "../lib/cloudinary";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("height-hero", { width: 1600 }),
    alt: "IRATA rope access technician carrying out a height safety installation on the Sunshine Coast",
  },
  {
    src: cld("height-compliance", { width: 1200 }),
    alt: "Roof anchor installation on a commercial building on the Sunshine Coast",
  },
  {
    src: cld("height-installation", { width: 1200 }),
    alt: "Height safety inspection and recertification on the Sunshine Coast",
  },
  {
    src: cld("engineering", { width: 1200 }),
    alt: "Height safety compliance and rope access on the Sunshine Coast",
  },
  {
    src: "/nav/cleaning.png",
    alt: "Rope access height safety technician on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Height Safety Installation",
    body: "We install anchor points, static lines and roof access systems across every building type, designed for safe, practical use today and easy maintenance access down the track.",
    photo: cld("height-safety-installation", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Height Safety Inspections",
    body: "We inspect all fall protection systems and roof access infrastructure, catching issues early so your building stays safe and compliant year round.",
    photo: cld("height-safety-inspections", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Recertification",
    body: "We manage your full twelve month recertification cycle so height safety systems stay compliant without lapses or the usual admin stress landing on your desk.",
    photo: cld("recertifications", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Anchor Point & System Mapping",
    body: "We assess and map existing height safety systems so you know exactly what you have, what condition it is in, and what needs attention before it becomes a compliance problem.",
    photo: cld("anchor-point-system", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Rope Access Works",
    body: "We use ropes every day for access across painting, external and window cleaning, maintenance and inspections, which gives us direct insight into how a height safety system actually needs to perform.",
    photo: cld("rope-access-works", { width: 1200 }),
    href: "/contact",
  },
];
export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Anchor point installation certified to AS NZS 1891 on the Sunshine Coast",
    title: "Certified to AS/NZS 1891",
    body: "Every anchor point, static line and roof access system we install is engineered and certified to AS/NZS 1891, with full compliance documentation issued at completion, insurance ready and legally sound.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "IRATA certified rope access technician on the Sunshine Coast",
    title: "IRATA rope access technicians",
    body: "Our technicians do not just install height safety systems, they use them every single day. With thirty plus IRATA certified rope access workers on the team, every installation is built to perform under real working conditions, not just laboratory ones.",
  },
  {
    photo: "/nav/height.png",
    alt: "Minimal disruption height safety installation on the Sunshine Coast",
    title: "Minimal disruption installs",
    body: "Rope access installation needs no scaffolding and very little plant on site. Most anchor point installations wrap up in a single day, with no disruption to building occupants or tenants below.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Commercial Tower Anchor Program",
    type: "Commercial · 14 storeys",
    system: "Anchor point installation · static line · annual certification",
    image: "/images/projects/1.jpeg",
    alt: "Anchor point installation at a Maroochydore commercial tower",
  },
  {
    suburb: "Mooloolaba",
    name: "Strata Complex Recertification",
    type: "Strata · ongoing compliance program",
    system: "Annual inspection · recertification · compliance management",
    image: "/images/projects/2.jpeg",
    alt: "Height safety recertification for a Mooloolaba strata building",
  },
  {
    suburb: "Noosa",
    name: "Resort Roof Access System",
    type: "Hospitality · resort complex",
    system: "Roof access hatches · fixed ladders · horizontal lifeline",
    image: "/images/projects/1.jpeg",
    alt: "Roof access system installation at a Noosa resort",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate height safety on the Sunshine Coast",
    title: "Body Corporate.",
    body: "Height safety compliance is a legal obligation for any building where maintenance staff or contractors access the roof. We manage the full program for body corporates across the Sunshine Coast, covering installation, annual inspection, recertification and compliance tracking, all documented for your committee.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building height safety on the Sunshine Coast",
    title: "Commercial.",
    body: "Rooftop plant, HVAC, facade maintenance and cleaning all rely on compliant height safety systems being in place. We design, install and certify systems that suit how your building is actually maintained, not a generic solution that leaves gaps in coverage.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/height.png",
    alt: "Industrial height safety systems on the Sunshine Coast",
    title: "Industrial.",
    body: "Industrial sites with ongoing rooftop plant, silo access or elevated work requirements get the most out of a managed compliance program. We install and certify systems engineered for the load and frequency of industrial access, not a one off installation that gets forgotten a year later.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility height safety on the Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need certified anchor points and roof access systems for maintenance staff and contractors, installed and inspected around term dates. We manage the compliance calendar so certification never lapses during a busy school year.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government facility height safety on the Sunshine Coast",
    title: "Government.",
    body: "Government and council facilities carry the same fall protection obligations as any commercial building, with the added expectation of a clean audit trail. We provide certification, inspection records and renewal reminders in a format that satisfies asset management requirements.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/height.png",
    alt: "Medical facility height safety on the Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres run rooftop plant and HVAC systems that need servicing year round. We install and certify height safety systems that keep contractors compliant without adding rooftop clutter near sensitive building services.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "What is considered work at height under Australian law?",
    a: "Under the Work Health and Safety Act 2011 and the WHS Regulations, work at height is any work where a person could fall from one level to another and be injured. In practice this covers any unprotected edge, rooftop, elevated platform or structure where a fall could cause harm, regardless of the specific height involved. There is no minimum height threshold that exempts a workplace from fall protection obligations.",
  },
  {
    q: "How often must height safety equipment be inspected and recertified on the Sunshine Coast?",
    a: "Under AS/NZS 1891, all permanent height safety systems, including anchor points, static lines, davit arms and roof access ladders, must be inspected by a competent person at least every twelve months, along with the harnesses, lanyards and carabiners used with them. Static lines and horizontal lifelines also need annual load testing. After any fall event, near miss or shock load, an immediate inspection is required before the system can be used again.",
  },
  {
    q: "How can I make sure my building stays compliant with height safety regulations?",
    a: "The simplest way is a compliance management program: one contractor who tracks your certification dates, books the annual inspections and sends renewal reminders before anything lapses. We run this for body corporates and commercial property managers across the Sunshine Coast, starting with a full audit of what you've already got, then fixing any gaps and keeping you on schedule from there.",
  },
  {
    q: "Do you install and certify anchor points, static lines and roof access systems on the Sunshine Coast?",
    a: "Yes. Every anchor point, static line and roof access system we install is engineered and certified to AS/NZS 1891, with full compliance documentation issued at completion. Our IRATA certified technicians use these systems every day on painting, cleaning and maintenance jobs, so installations are built to perform under real working conditions, not just on paper.",
  },
  {
    q: "Do you partner with body corporates and commercial buildings for ongoing height safety compliance?",
    a: "Yes, this is one of our most requested services. We're the single point of contact for all your height safety obligations, annual inspections, recertification, system upgrades and paperwork. Your committee gets a full report after every inspection, ready for committee minutes and insurance records.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Height Safety Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Talk to our height safety team →",
};
