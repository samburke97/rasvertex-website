// app/data/externalCleaningData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/cleaning.png",
    alt: "Rope access technician pressure cleaning a commercial facade on the Sunshine Coast",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "External building cleaning — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Facade wash and pressure cleaning on a Sunshine Coast commercial building",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Building exterior cleaning and maintenance — RAS-VERTEX",
  },
  {
    src: "/nav/height.png",
    alt: "High-access external cleaning by rope access — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Facade & Render Washing",
    body: "Soft-wash treatment for rendered, painted and clad facades — removing salt deposits, biological growth, mould, algae and pollution buildup that corrode surfaces over time. Pressure calibrated to the surface type; no blast damage to render or coatings.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Pressure & Surface Cleaning",
    body: "Industrial-grade hot-water pressure cleaning for driveways, pavements, car parks, pool surrounds, roofs and hard surfaces. Our 100% recycled hot-water vacuum system deep-cleans and recovers all wastewater — zero stormwater discharge.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Roof Cleaning",
    body: "Soft-wash roof cleaning for tile, Colorbond and membrane roofs — removing lichen, moss, algae and organic growth without high-pressure damage. Extends roof life, restores appearance, and removes the growth that traps moisture and accelerates deterioration.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Graffiti Removal",
    body: "Safe, surface-appropriate graffiti removal using professional-grade solvents and pressure washing — from painted masonry to glass, cladding and signage. We assess the surface first and select the method that removes the tag without damaging the substrate.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Concrete & Car Park Cleaning",
    body: "Deep cleaning of concrete surfaces, car parks, loading docks and hard stands — removing oil, grease, tyre marks and biological staining. Hot-water pressure systems break down hydrocarbon contamination that cold water alone won't touch.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Post-Construction Clean",
    body: "Complete external clean-down for new buildings and renovations — removing construction dust, mortar splatter, paint overspray, silicone residue and protective film from all external surfaces before handover. Builders across the Sunshine Coast call us first.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Strata & Body Corporate Programs",
    body: "Ongoing external cleaning programs for strata buildings and body corporates — scheduled facade washes, common area pressure cleaning, and condition reporting after every visit. Committee-ready documentation and no disruption to residents.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "Eco-friendly system",
    body: "100% recycled and filtered hot-water with full vacuum recovery. All wastewater collected — zero discharge to stormwater. Biodegradable agents on every job.",
  },
  {
    n: "02",
    title: "IRATA rope access",
    body: "30+ IRATA L1–L3 certified technicians. We clean any surface at any height without scaffolding — faster, cheaper and with zero footprint on your site.",
  },
  {
    n: "03",
    title: "Surface-first approach",
    body: "Every surface assessed before we touch it. Pressure, temperature and chemical concentration calibrated to the substrate — render, tile, Colorbond, glass or cladding.",
  },
  {
    n: "04",
    title: "Protective, not just aesthetic",
    body: "Salt, biological growth and pollution don't just look bad — they accelerate corrosion and degrade coatings. Regular external cleaning is the most cost-effective protective maintenance you can run.",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "$20M public liability, full workers' comp. Safe work method statements and certificates of currency provided for every high-access clean.",
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

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Strata and body corporate external cleaning — RAS-VERTEX Sunshine Coast",
    title: "Strata & Body Corporate.",
    body: "Scheduled programs that keep your building's exterior in top condition year-round. Rope access means no scaffolding disrupting residents. Committee reports after every visit, with photos and condition notes.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Commercial.",
    body: "First impressions are made at the facade. We keep your commercial building, retail centre or office tower clean, presentable and protected — on a schedule that works around your tenants.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Industrial and government exterior cleaning — RAS-VERTEX Sunshine Coast",
    title: "Industrial & Government.",
    body: "Heavy-duty external cleaning for industrial facilities, government buildings and institutions. Hot-water pressure systems for oil, grease and industrial contamination. Full compliance documentation provided.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How often should I have my building's exterior professionally cleaned on the Sunshine Coast?",
    a: "For coastal properties within 5km of the ocean, we recommend a facade wash every 6–12 months — salt spray and biological growth accumulate quickly in the marine environment and will begin degrading render, coatings and sealants if left unchecked. Buildings further inland can typically extend to 12–18 month cycles. Car parks and high-traffic hard surfaces generally benefit from cleaning every 3–6 months.",
  },
  {
    q: "What's the difference between pressure cleaning and soft washing?",
    a: "Pressure cleaning uses high-pressure water to physically remove surface contaminants — best suited to hard surfaces like concrete, pavers and car parks where high pressure won't cause damage. Soft washing uses low-pressure hot water combined with biodegradable cleaning agents to kill and remove biological growth (mould, algae, lichen) from more sensitive surfaces like rendered facades, painted exteriors and roof tiles. Using high-pressure on render or coatings can cause surface damage and force moisture into the substrate — we assess every surface before choosing the method.",
  },
  {
    q: "Is external building cleaning eco-friendly?",
    a: "Ours is. Our hot-water pressure cleaning system uses 100% recycled and filtered water with a full vacuum recovery unit — all wastewater is collected, no contaminated runoff enters stormwater drains. We use pH-neutral, biodegradable cleaning agents on all surfaces. For sensitive areas near vegetation or water, we select agents specifically rated for environmental safety.",
  },
  {
    q: "Can you clean facades at any height without scaffolding?",
    a: "Yes. Our IRATA-certified rope access team can clean facades on buildings of any height from rooftop anchor points — no scaffolding, no elevated work platform hire, and no disruption to ground-level access or car parks. For buildings under four storeys, boom-lift or ladder access may be appropriate depending on the site. We assess each building and recommend the safest, most cost-effective access method.",
  },
  {
    q: "Do you also clean windows as part of a facade clean?",
    a: "External facade cleaning and window cleaning are separate scopes — different equipment, different techniques, and different results. Facade cleaning removes biological growth, salt and pollution from rendered, clad or painted surfaces. Window cleaning uses purified deionised water to deliver a streak-free finish on glass. We offer both, and they're often scheduled together as part of a full building clean program. See our window cleaning page for more detail.",
  },
  {
    q: "How much does external building cleaning cost on the Sunshine Coast?",
    a: "Cost depends on building size, height, access requirements, surface type and cleaning method. A single facade wash on a mid-rise strata building typically ranges from $1,500–$6,000. Car park and concrete cleaning starts from $400. Post-construction cleans are quoted by scope. We provide fixed-price quotes after a site assessment — contact us for a building-specific price.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Cleaning & Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Book a clean →",
};
