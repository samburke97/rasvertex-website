// app/data/cleaningData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import { cld } from "../lib/cloudinary";
import {
  PiBuildingApartment,
  PiUsersThree,
  PiSun,
  PiDrop,
  PiHammer,
  PiBuildings,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("gold-standard", { width: 1600 }),
    alt: "Rope access window cleaning technicians on a Sunshine Coast high rise",
  },
  {
    src: cld("high-rise-window-cleaning", { width: 1200 }),
    alt: "Commercial window cleaning on the Sunshine Coast",
  },
  {
    src: cld("rope-access-windows", { width: 1200 }),
    alt: "High rise window cleaning by rope access on the Sunshine Coast",
  },
  {
    src: cld("window-cleaning", { width: 1200 }),
    alt: "Exterior building cleaning and maintenance on the Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "IRATA rope access window cleaning on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "High Rise Window Cleaning",
    body: "Our IRATA rope access technicians abseil facades straight from rooftop anchors, with no cherry pickers and no scaffolding involved. That means streak free glass on buildings of any height, from four storeys right up past forty.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Strata & Body Corporate Window Cleaning",
    body: "We run regular window cleaning programs for strata buildings and body corporates, covering common area windows, balustrades, facade glass and external surfaces. Everything is scheduled to minimise resident disruption, with reporting back to the committee after every visit.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Solar Panel Cleaning",
    body: "Salt, bird droppings and dust can reduce solar output by up to 30 percent. Our purified water system cleans panels without abrasive chemicals or scratching, accessed safely by rope on any roof pitch.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Pressure & Soft Washing",
    body: "We run industrial grade pressure cleaning across driveways, pavements, roofs, facades and hard surfaces, using the same recycled water vacuum system behind all of our cleaning work.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Post Construction Cleaning",
    body: "Our first clean packages for new buildings and renovations remove paint overspray, silicone residue, concrete dust and construction film from every glass surface before handover. Builders across the Sunshine Coast call us first for exactly this reason.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Facade & Cladding Wash",
    body: "We apply a soft wash treatment to rendered, painted and clad facades, lifting salt deposits, biological growth, mould and general pollution buildup that corrodes surfaces over time. It is part of any effective coastal building maintenance program.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const SERVICE_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "High Rise Window Cleaning",
    body: "Our IRATA rope access technicians abseil facades straight from rooftop anchors, with no cherry pickers and no scaffolding involved. That means streak free glass on buildings of any height, from four storeys right up past forty.",
    icon: PiBuildingApartment,
  },
  {
    n: "02",
    title: "Strata & Body Corporate Window Cleaning",
    body: "We run regular window cleaning programs for strata buildings and body corporates, covering common area windows, balustrades, facade glass and external surfaces. Everything is scheduled to minimise resident disruption, with reporting back to the committee after every visit.",
    icon: PiUsersThree,
  },
  {
    n: "03",
    title: "Solar Panel Cleaning",
    body: "Salt, bird droppings and dust can reduce solar output by up to 30 percent. Our purified water system cleans panels without abrasive chemicals or scratching, accessed safely by rope on any roof pitch.",
    icon: PiSun,
  },
  {
    n: "04",
    title: "Pressure & Soft Washing",
    body: "We run industrial grade pressure cleaning across driveways, pavements, roofs, facades and hard surfaces, using the same recycled water vacuum system behind all of our cleaning work.",
    icon: PiDrop,
  },
  {
    n: "05",
    title: "Post Construction Cleaning",
    body: "Our first clean packages for new buildings and renovations remove paint overspray, silicone residue, concrete dust and construction film from every glass surface before handover. Builders across the Sunshine Coast call us first for exactly this reason.",
    icon: PiHammer,
  },
  {
    n: "06",
    title: "Facade & Cladding Wash",
    body: "We apply a soft wash treatment to rendered, painted and clad facades, lifting salt deposits, biological growth, mould and general pollution buildup that corrodes surfaces over time. It is part of any effective coastal building maintenance program.",
    icon: PiBuildings,
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Streak free rope access window cleaning on the Sunshine Coast",
    title: "Streak free results",
    body: "Purified, deionised water leaves zero mineral residue on glass, so there are no squeegee marks and no streaks left behind. Every pane comes up crystal clear, on every visit, on every building we clean.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "IRATA certified rope access technician window cleaning on the Sunshine Coast",
    title: "IRATA rope access technicians",
    body: "Thirty plus IRATA certified technicians mean we can access any height without scaffolding or EWP hire. That gives us faster mobilisation, zero footprint on your site, and no disruption to tenants or residents below.",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "100 percent recycled water cleaning system on the Sunshine Coast",
    title: "Eco friendly systems",
    body: "Every job runs through our recycled water vacuum system, so nothing reaches the stormwater or the coast beyond your building.",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site assessment",
    body: "We review building height, access and glass type before anything else.",
  },
  {
    n: "02",
    title: "Access planning",
    body: "We work out whether rope access or a water fed system is the right fit.",
  },
  {
    n: "03",
    title: "Purified water cleaning",
    body: "We remove dirt, salt and contaminants using deionised water systems.",
  },
  {
    n: "04",
    title: "Detail finishing",
    body: "Edges, frames and hard to reach areas are finished off to a streak free standard.",
  },
  {
    n: "05",
    title: "Scheduled maintenance",
    body: "We can manage an ongoing cleaning schedule for body corporates and commercial buildings, if that is something you would like.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High Rise Window Clean",
    type: "Strata · 18 storeys",
    system: "Rope access · purified water system · full facade glass",
    image: "/images/projects/1.jpeg",
    alt: "High rise window cleaning project in Mooloolaba",
  },
  {
    suburb: "Maroochydore",
    name: "Commercial Tower Quarterly Program",
    type: "Commercial · ongoing",
    system: "Quarterly window clean · facade wash · solar panels",
    image: "/images/projects/2.jpeg",
    alt: "Commercial tower window cleaning in Maroochydore",
  },
  {
    suburb: "Noosa",
    name: "Luxury Resort Complex",
    type: "Hospitality · resort",
    system: "Full building clean · windows · pressure wash · balustrades",
    image: "/images/projects/1.jpeg",
    alt: "Resort window and exterior cleaning project in Noosa",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Strata and body corporate window cleaning on the Sunshine Coast",
    title: "Body Corporate.",
    body: "Regular window cleaning programs are built around your building's own schedule, with committee ready reporting after every visit. Rope access means no scaffolding cluttering common areas and no disruption to residents.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building window cleaning on the Sunshine Coast",
    title: "Commercial.",
    body: "First impressions start with clean glass. We keep your shopfront, office tower or commercial building spotless on a schedule that works around your tenants, whether that means after hours, weekends or whatever else it takes.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Industrial window cleaning on the Sunshine Coast",
    title: "Industrial.",
    body: "Warehouses, distribution centres and industrial sites need clear sightlines for safety and presentation without disrupting operations. We schedule around shift patterns, with full site inductions and safety documentation for every visit.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility window cleaning on the Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need window cleaning scheduled around term dates, not during class time. We work after hours and through holidays, with full safety documentation for campus grounds and facilities teams.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building window cleaning on the Sunshine Coast",
    title: "Government.",
    body: "Council buildings, libraries and public facilities need scheduled window cleaning that fits around public opening hours and existing compliance requirements. Full documentation and public liability certificates are provided for every contract.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/cleaning.png",
    alt: "Medical facility window cleaning on the Sunshine Coast",
    title: "Medical.",
    body: "Hospitals, medical centres and aged care facilities need window cleaning that works within strict infection control and access requirements. Our purified water system leaves no chemical residue, and every visit is scheduled to suit facility rules.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Residential window cleaning on the Sunshine Coast",
    title: "Residential.",
    body: "From single storey homes to multi level beachfront properties, we use a purified water fed pole for accessible windows and rope access for elevated sections. Salt, dust and grime disappear, and the view comes back.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "What is the best method for high rise window cleaning on the Sunshine Coast?",
    a: "Rope access window cleaning is consistently the fastest and most cost effective method for high rise buildings on the Sunshine Coast. IRATA certified technicians descend from rooftop anchors using purified deionised water systems, with no scaffolding, no EWP hire costs and no disruption to ground level access. For buildings under four storeys, a water fed pole system delivers the same streak free result from the ground.",
  },
  {
    q: "How much does commercial window cleaning cost on the Sunshine Coast?",
    a: "Cost depends on building height, the number of panes, the access method required and how often you need us. Rope access window cleaning on high rise strata buildings typically ranges from $800 to $3,500 per visit depending on scale, while residential cleans start from $150. We provide fixed price quotes with no hidden charges, so get in touch for a site specific price.",
  },
  {
    q: "How often should commercial windows be cleaned on the Sunshine Coast?",
    a: "For properties within about five kilometres of the ocean, we recommend commercial window cleaning every six to eight weeks, since salt spray builds up quickly and can etch glass if left too long. Buildings further inland can typically stretch to a ten to twelve week cycle, while facade and pressure washing programs generally run every six to twelve months depending on exposure and occupancy.",
  },
  {
    q: "Is your window cleaning process eco friendly?",
    a: "Yes. Our pressure cleaning system uses 100 percent recycled and filtered hot water with a vacuum recovery system, so all wastewater is collected and processed with zero stormwater discharge. We use biodegradable, pH neutral cleaning agents on every surface, and our purified water window cleaning system needs no chemical additives at all.",
  },
  {
    q: "Can you safely clean solar panels on the Sunshine Coast?",
    a: "Yes. We use a purified, deionised water system with soft bristle brushes, so there are no abrasive pads and no chemicals that could damage panel coatings or void manufacturer warranties. Solar cleaning is built straight into our rope access programs for rooftop panels on strata and commercial buildings.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Cleaning & Maintenance Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Book a clean →",
};
