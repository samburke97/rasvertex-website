// app/data/externalCleaningData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import { cld } from "../lib/cloudinary";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("bw1", { width: 1600 }),
    alt: "External cleaning project — Sunshine Coast",
  },
  {
    src: cld("bw2", { width: 1600 }),
    alt: "External cleaning project — Sunshine Coast",
  },
  {
    src: cld("bw3", { width: 1600 }),
    alt: "External cleaning project — Sunshine Coast",
  },
  {
    src: cld("bw4", { width: 1600 }),
    alt: "External cleaning project — Sunshine Coast",
  },
  {
    src: cld("bw5", { width: 1600 }),
    alt: "External cleaning project — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Facade Cleaning and Rope Access",
    body: "Soft-wash treatment for rendered, painted and clad facades — removing salt deposits, biological growth and pollution buildup before they corrode surfaces. Our IRATA-certified rope access team reaches every facade at any height — no scaffolding, no EWP hire, no disruption to tenants or car parks below.",
    photo: cld("bw1", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Roof Cleaning",
    body: "Soft-wash roof cleaning for tile, Colorbond and membrane roofs — removing lichen, moss and algae without high-pressure damage. Extends roof life and removes the growth that traps moisture and accelerates deterioration.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Hard Surface Cleaning",
    body: "Industrial-grade hot-water pressure cleaning for driveways, pavements, pool surrounds and general hard surfaces across the site. Our 100% Recycled Water System deep-cleans and recovers all wastewater on-site.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Car Parks and Heavy Duty Concrete Cleaning",
    body: "Deep cleaning of car parks, loading docks and hard stands — removing oil, grease, tyre marks and biological staining. Hot-water pressure systems break down heavy hydrocarbon contamination that cold water alone won't touch.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Specialist Cleaning and Programs",
    body: "Graffiti removal using surface-appropriate solvents and pressure washing without damaging the substrate. Complete post-construction clean-downs before handover. Ongoing strata and body corporate maintenance programs with committee-ready condition reporting after every visit.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Commercial Tower Facade Wash",
    type: "Commercial · 12 storeys",
    system: "Rope access · soft-wash facade · pressure clean podium",
    image: "/images/projects/1.jpeg",
    alt: "Commercial facade wash Maroochydore by RAS-VERTEX",
  },
  {
    suburb: "Mooloolaba",
    name: "Strata Complex External Program",
    type: "Strata · ongoing",
    system: "Quarterly facade wash · car park clean · graffiti removal",
    image: "/images/projects/2.jpeg",
    alt: "Strata external cleaning program Mooloolaba — RAS-VERTEX",
  },
  {
    suburb: "Noosa",
    name: "Resort Post-Construction Clean",
    type: "Hospitality · resort",
    system: "Full external clean-down · concrete · render · glass",
    image: "/images/projects/1.jpeg",
    alt: "Post-construction external clean Noosa resort by RAS-VERTEX",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "IRATA rope access technician cleaning a Sunshine Coast high-rise facade",
    title: "Minimal disruption, maximum results",
    body: "Rope access is our default, not our fallback. It's the fastest, least disruptive way to reach any facade on the Sunshine Coast, with no scaffolding, no EWP hire and no site disruption.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Local RAS-VERTEX crew on site, Sunshine Coast building cleaning",
    title: "Clear communication, start to finish",
    body: "The same local, fully employed crew works your building every time. No subcontractors, no unfamiliar faces, just consistent care. Every visit is logged and reported through your own portal.",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "100% recycled water pressure cleaning system, RAS-VERTEX Sunshine Coast",
    title: "Responsible cleaning systems",
    body: "Every wash we run goes through our 100% recycled, filtered water system with full vacuum recovery. Nothing is ever discharged to stormwater, protecting the waterways that make the Sunshine Coast what it is.",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Strata and body corporate external cleaning — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate.",
    body: "Scheduled programs that keep your building's exterior in top condition year-round, staged to keep residents undisturbed. Committee reports after every visit, with photos and condition notes.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "First impressions are made at the facade. We keep your commercial building, retail centre or office tower clean, presentable and protected — on a schedule that works around your tenants.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Industrial exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Industrial.",
    body: "Tilt-slab warehouses, factories and industrial sites accumulate oil, grease and airborne contamination that generic pressure washing won't shift. Our hot-water systems break down hydrocarbon staining on hardstands and facades, with full wastewater recovery to meet site environmental requirements.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Education.",
    body: "Facade washes, roof cleans and graffiti removal scheduled around term dates and after-hours access. Full safety documentation supplied direct to campus grounds and facilities teams.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Government.",
    body: "Council buildings, libraries and public facilities need a contractor who works around public access and existing compliance requirements. We provide full documentation, public liability certificates and scheduled programs that fit around opening hours, not the other way around.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Medical facility exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Medical.",
    body: "Hospitals, medical centres and aged care facilities run on fixed access windows and infection-control protocols. We work to the window you set, with biodegradable agents and a sign-off report for your facilities team.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How often should a facade cleaning be scheduled in coastal environments?",
    a: "Every 6 to 12 months within 5km of the coast, where salt spray and biological growth build up fast. Inland buildings can often stretch to 12 to 18 months. Car parks and hard surfaces usually need attention every 3 to 6 months.",
  },
  {
    q: "What's the difference between soft washing and pressure cleaning?",
    a: "Soft washing uses low pressure hot water and biodegradable agents to safely clean rendered facades, paint and roof tiles. Pressure cleaning uses high pressure water for hard surfaces like concrete and pavers. We choose the right method for each surface so nothing gets damaged.",
  },
  {
    q: "Can you clean high-rise buildings without scaffolding?",
    a: "Yes. Our IRATA certified rope access team reaches any height from rooftop anchor points, with no scaffolding and no EWP hire. It's faster to deploy and far less disruptive to residents and tenants.",
  },
  {
    q: "Is your system compliant with environmental regulations?",
    a: "Yes. Our pressure cleaning system runs on 100% recycled, filtered water with full vacuum recovery, so nothing is discharged to stormwater. We use pH neutral, biodegradable cleaning agents on every job.",
  },
  {
    q: "Do you provide strata reporting and condition photos?",
    a: "Yes. Every visit includes photographic reporting and condition notes suitable for committees, councils and asset managers, logged and available through your own portal if you'd like it.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Cleaning & Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Get a building wash quote →",
};
