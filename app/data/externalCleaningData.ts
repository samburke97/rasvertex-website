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
    alt: "Exterior building cleaning project on the Sunshine Coast",
  },
  {
    src: cld("bw2", { width: 1600 }),
    alt: "Commercial building cleaning project on the Sunshine Coast",
  },
  {
    src: cld("bw3", { width: 1600 }),
    alt: "Building wash project on the Sunshine Coast",
  },
  {
    src: cld("bw4", { width: 1600 }),
    alt: "Facade cleaning project on the Sunshine Coast",
  },
  {
    src: cld("bw5", { width: 1600 }),
    alt: "Pressure cleaning project on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Facade Cleaning and Rope Access",
    body: "We use a soft wash treatment on rendered, painted and clad facades to lift salt deposits, biological growth and general pollution buildup before they start corroding the surface underneath. Our IRATA certified rope access team reaches every high rise facade at any height, with no scaffolding, no EWP hire and no disruption to tenants or car parks below.",
    photo: cld("bw1", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Roof Cleaning",
    body: "Our soft wash roof cleaning suits tile, Colorbond and membrane roofs, removing lichen, moss and algae without the damage that high pressure water can cause. It extends the life of the roof and clears away the growth that traps moisture and speeds up deterioration in our humidity.",
    photo: cld("roof-cleaning", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Hard Surface Cleaning",
    body: "Our industrial grade hot water pressure cleaning handles driveways, pavements, pool surrounds, car parks, loading docks and hard stands, lifting oil, grease, tyre marks and biological staining that cold water alone will never shift. Our 100 percent recycled water system deep cleans concrete and hard surfaces while recovering all wastewater on site.",
    photo: cld("hard-surface", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Specialist Cleaning and Programs",
    body: "We handle graffiti removal using surface appropriate solvents and pressure washing that will not damage the substrate underneath, along with complete post construction clean downs before handover. We also run ongoing strata and body corporate maintenance programs with committee ready condition reporting after every visit.",
    photo: cld("specialist-cleaning", { width: 1200 }),
    href: "/contact",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Commercial Tower Facade Wash",
    type: "Commercial · 12 storeys",
    system: "Rope access · soft wash facade · pressure clean podium",
    image: "/images/projects/1.jpeg",
    alt: "Commercial facade wash in Maroochydore",
  },
  {
    suburb: "Mooloolaba",
    name: "Strata Complex External Program",
    type: "Strata · ongoing",
    system: "Quarterly facade wash · car park clean · graffiti removal",
    image: "/images/projects/2.jpeg",
    alt: "Strata external cleaning program in Mooloolaba",
  },
  {
    suburb: "Noosa",
    name: "Resort Post Construction Clean",
    type: "Hospitality · resort",
    system: "Full external clean down · concrete · render · glass",
    image: "/images/projects/1.jpeg",
    alt: "Post construction external clean at a Noosa resort",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "IRATA rope access technician cleaning a Sunshine Coast high rise facade",
    title: "Minimal disruption, maximum results",
    body: "Rope access is our default, not our fallback, because it is genuinely the fastest and least disruptive way to reach any facade on the Sunshine Coast. No scaffolding, no EWP hire and no disruption to the site while we work.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Local crew on site for Sunshine Coast building cleaning",
    title: "Clear communication, start to finish",
    body: "The same local, fully employed crew works your building every time, so there are no subcontractors and no unfamiliar faces, just consistent care. Every visit gets logged and reported through your own portal.",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "100 percent recycled water pressure cleaning system on the Sunshine Coast",
    title: "Responsible cleaning systems",
    body: "Every wash we run passes through our 100 percent recycled, filtered water system with full vacuum recovery, so nothing is ever discharged to stormwater. That protects the waterways that make the Sunshine Coast what it is.",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Strata and body corporate external cleaning on the Sunshine Coast",
    title: "Body Corporate.",
    body: "Scheduled building cleaning programs keep your building's exterior in top condition year round, staged carefully to keep residents undisturbed. Committee reports follow every visit, complete with photos and condition notes.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building exterior cleaning on the Sunshine Coast",
    title: "Commercial.",
    body: "First impressions are made at the facade, so we keep your commercial building, retail centre or office tower clean, presentable and protected, on a schedule that works around your tenants rather than against them.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Industrial exterior cleaning on the Sunshine Coast",
    title: "Industrial.",
    body: "Tilt slab warehouses, factories and industrial sites build up oil, grease and airborne contamination that generic pressure washing will not shift. Our hot water systems break down hydrocarbon staining on hardstands and facades, with full wastewater recovery to meet site environmental requirements.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility exterior cleaning on the Sunshine Coast",
    title: "Education.",
    body: "Facade washes, roof cleans and graffiti removal get scheduled around term dates and after hours access, with full safety documentation supplied directly to campus grounds and facilities teams.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building exterior cleaning on the Sunshine Coast",
    title: "Government.",
    body: "Council buildings, libraries and public facilities need a contractor who works around public access and existing compliance requirements. We provide full documentation, public liability certificates and scheduled programs that fit around opening hours, not the other way around.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Medical facility exterior cleaning on the Sunshine Coast",
    title: "Medical.",
    body: "Hospitals, medical centres and aged care facilities run on fixed access windows and infection control protocols. We work to whatever window you set, using biodegradable agents and providing a sign off report for your facilities team.",
    cta: "Get a building wash quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How often should commercial buildings on the Sunshine Coast be pressure cleaned?",
    a: "Most commercial buildings within about five kilometres of the coast need pressure cleaning or a facade wash every six to twelve months, since salt spray and biological growth build up quickly this close to the water. Buildings further inland can often stretch to twelve to eighteen months, while car parks and other hard surfaces usually need attention every three to six months.",
  },
  {
    q: "What's the difference between soft washing and pressure cleaning for external building cleaning?",
    a: "Soft washing uses low pressure hot water and biodegradable agents to safely clean rendered facades, paint and roof tiles without damaging them. Pressure cleaning uses high pressure water suited to hard surfaces like concrete, pavers and driveways. As part of our external building cleaning service, we choose the right method for each surface so nothing gets damaged along the way.",
  },
  {
    q: "Can you provide high rise building cleaning on the Sunshine Coast without scaffolding?",
    a: "Yes. Our IRATA certified rope access team reaches any height from rooftop anchor points, with no scaffolding and no EWP hire required. It is faster to deploy than a traditional setup and far less disruptive to residents and tenants, which is why most of our high rise building cleaning work across the Sunshine Coast uses rope access as standard.",
  },
  {
    q: "Is your external building cleaning process environmentally compliant?",
    a: "Yes. Our pressure cleaning system runs on 100 percent recycled, filtered water with full vacuum recovery, so nothing is discharged to stormwater. We use pH neutral, biodegradable cleaning agents on every building cleaning job we run across the Sunshine Coast.",
  },
  {
    q: "Do you provide condition reports for strata and body corporate building cleaning?",
    a: "Yes. Every visit includes photographic reporting and condition notes suitable for committees, councils and asset managers, logged and available through your own portal if that is something you would like.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Cleaning & Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Get a building wash quote →",
};
