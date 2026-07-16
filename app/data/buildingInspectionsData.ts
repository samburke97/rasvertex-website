// app/data/buildingInspectionsData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import { cld } from "../lib/cloudinary";
import {
  PiMagnifyingGlass,
  PiDrone,
  PiCalculator,
  PiCloudLightning,
  PiCalendarCheck,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("inspections", { width: 1600 }),
    alt: "Technician carrying out a rope access building inspection on the Sunshine Coast",
  },
  {
    src: cld("rope-access-everywhere", { width: 1200 }),
    alt: "Facade condition inspection on a Sunshine Coast strata building",
  },
  {
    src: cld("thermal-imaging", { width: 1200 }),
    alt: "Detailed building inspection report for a Sunshine Coast property",
  },
  {
    src: cld("archers-reports", { width: 1200 }),
    alt: "High access building inspection by rope access on the Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Waterproofing and facade inspection on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Facade Condition Inspections",
    body: "We inspect the full building facade, top to bottom, covering render, cladding, sealants and fixings. Every issue gets photographed and rated by urgency, then handed to you as a written report with clear next steps.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Drone & Thermal Imaging",
    body: "We combine drone footage for the full facade with thermal cameras that pick up hidden moisture and defects behind cladding and render before they show up as visible damage.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Pre Purchase Inspections",
    body: "We provide an independent condition assessment for prospective buyers, investors and buyers agents, inspecting what a standard building inspector simply cannot reach, including high facades, rooftop areas, balcony membranes and cladding details. A pre purchase inspection gives you an accurate picture of the deferred maintenance liability before contracts are exchanged.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Sinking Fund Support Reports",
    body: "Our condition assessment reports are formatted for use in ten year maintenance plans and sinking fund forecasts under the Body Corporate and Community Management Act 1997, including a prioritised works schedule with cost estimates so committees have the data they need to plan levies accurately and avoid special levy surprises.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Post Storm Damage Assessments",
    body: "We mobilise quickly after severe weather events, whether that is hail, cyclone or storm surge, to assess facade damage, membrane breaches and structural concerns. Insurance ready condition reports with photographic evidence and a scope of works are issued within 48 hours of the inspection.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Annual Maintenance Inspections",
    body: "Our ongoing annual inspection programs track a building's condition over time, identifying early stage deterioration before it escalates into structural repair. Year on year condition data gives body corporate committees and property managers an accurate picture of their building's asset lifecycle.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "We scope the building",
    body: "We review the plans, confirm access methods and define the inspection scope, so you know exactly what will be covered before work begins.",
  },
  {
    n: "02",
    title: "We access the full facade",
    body: "Our IRATA technicians inspect every part of the building using rope access, giving full coverage at height without any disruption to the site.",
  },
  {
    n: "03",
    title: "We capture what you can’t see",
    body: "Thermal imaging and high resolution inspection identify hidden moisture, defects and early stage building issues well before they become visible problems.",
  },
  {
    n: "04",
    title: "We prioritise every finding",
    body: "Each defect is ranked by urgency, so you know what needs immediate attention, what can be planned for, and what simply needs monitoring. That gives committees clear direction for budgeting and maintenance planning.",
  },
  {
    n: "05",
    title: "You get a decision ready report",
    body: "Within five business days you receive photos, mapped defects, priority ratings and cost guidance you can use for sinking funds, maintenance planning and AGM reporting.",
  },
];

export const SERVICE_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Facade Condition Inspections",
    body: "We inspect the full building facade, top to bottom, covering render, cladding, sealants and fixings. Every issue gets photographed and rated by urgency, then handed to you as a written report with clear next steps.",
    icon: PiMagnifyingGlass,
  },
  {
    n: "02",
    title: "Drone & Thermal Imaging",
    body: "We combine drone footage for the full facade with thermal cameras that pick up hidden moisture and defects behind cladding and render before they show up as visible damage.",
    icon: PiDrone,
  },
  {
    n: "03",
    title: "Sinking Fund Support Reports",
    body: "Our condition assessment reports are formatted for use in ten year maintenance plans and sinking fund forecasts under the Body Corporate and Community Management Act 1997, including a prioritised works schedule with cost estimates so committees have the data they need to plan levies accurately and avoid special levy surprises.",
    icon: PiCalculator,
  },
  {
    n: "04",
    title: "Post Storm Damage Assessments",
    body: "We mobilise quickly after severe weather events, whether that is hail, cyclone or storm surge, to assess facade damage, membrane breaches and structural concerns. Insurance ready condition reports with photographic evidence and a scope of works are issued within 48 hours of the inspection.",
    icon: PiCloudLightning,
  },
  {
    n: "05",
    title: "Annual Maintenance Inspections",
    body: "Our ongoing annual inspection programs track a building's condition over time, identifying early stage deterioration before it escalates into structural repair. Year on year condition data gives body corporate committees and property managers an accurate picture of their building's asset lifecycle.",
    icon: PiCalendarCheck,
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "IRATA rope access technician inspecting a Sunshine Coast building facade",
    title: "Rope access reach",
    body: "We access facades that standard inspectors simply cannot. Our IRATA certified technicians physically inspect every element at every level, so there are no assumptions and no gaps in the picture.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Thermal imaging survey of a Sunshine Coast building facade",
    title: "Thermal imaging",
    body: "We spot hidden moisture and problems behind cladding and render that a thermal camera can see but your eyes never will.",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Sinking fund ready building inspection report for a Sunshine Coast property",
    title: "Sinking fund ready",
    body: "Every report is formatted for direct use in ten year maintenance plans and sinking fund forecasts, with cost estimates included so committees can plan budgets accurately from the outset.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Beachfront Towers Facade Audit",
    type: "Strata · 14 storeys · 96 lots",
    system: "Full facade inspection · thermal scan · sinking fund report",
    image: "/images/projects/1.jpeg",
    alt: "Facade condition inspection for a Maroochydore strata building",
  },
  {
    suburb: "Mooloolaba",
    name: "Oceanfront Strata Annual Program",
    type: "Strata · annual inspection program",
    system: "Annual condition inspection · risk register · committee report",
    image: "/images/projects/2.jpeg",
    alt: "Annual building inspection program in Mooloolaba",
  },
  {
    suburb: "Noosa",
    name: "Resort Pre Remediation Assessment",
    type: "Hospitality · resort complex",
    system: "Facade condition inspection · thermal imaging · remediation scope",
    image: "/images/projects/1.jpeg",
    alt: "Pre remediation building inspection at a Noosa resort",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate building inspection on the Sunshine Coast",
    title: "Body Corporate.",
    body: "Under the BCCM Act 1997, every Queensland body corporate must maintain a ten year sinking fund forecast. Our condition reports give committees the data to plan accurately, with a defect register, risk ratings, prioritised works schedule and cost estimates, all ready for the AGM.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building inspection on the Sunshine Coast",
    title: "Commercial.",
    body: "Facility managers and asset owners need to understand what their building actually needs, not guesswork and not deferred maintenance. Our inspection reports give you an accurate condition picture with a prioritised remediation plan you can budget against.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Industrial building inspection on the Sunshine Coast",
    title: "Industrial.",
    body: "Industrial buildings carry different failure risks, from tilt slab movement to hardstand cracking and roof membrane exposure to chemical or particulate contamination. Our condition reports assess against how the site actually operates, not a generic commercial checklist.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility building inspection on the Sunshine Coast",
    title: "Education.",
    body: "Schools and universities need condition data that supports capital works planning across multiple buildings and budget cycles. We inspect during holidays where possible and deliver reports formatted for facilities managers and school boards.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building inspection on the Sunshine Coast",
    title: "Government.",
    body: "Government and council owned buildings need condition reporting that stands up to asset management audits. Our reports include defect registers, risk ratings and cost estimates formatted for public sector capital works planning.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Medical facility building inspection on the Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres need facade and roof condition data without disrupting clinical operations. Our rope access and thermal imaging methods cover the whole building with minimal footprint on site.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Pre purchase building inspection on the Sunshine Coast",
    title: "Pre Purchase.",
    body: "Know what you are actually buying. We access high facades, rooftop areas and balcony membranes that standard building inspectors cannot reach, giving buyers and investors an accurate picture of deferred maintenance liability before contracts are exchanged.",
    cta: "Book an inspection",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Why does a body corporate need a professional building inspection on the Sunshine Coast?",
    a: "Under the Body Corporate and Community Management Act 1997, every Queensland body corporate must maintain a ten year sinking fund forecast projecting all major maintenance expenditure. That forecast is only as accurate as the condition data behind it, and without a professional building inspection, cost estimates come down to guesswork that leads to underfunded sinking funds and eventual special levies. A proper condition report gives committees the defect register, risk ratings and cost estimates they need to plan levies accurately.",
  },
  {
    q: "How often should a building's facade be inspected on the Sunshine Coast?",
    a: "We recommend annual building inspections for Sunshine Coast properties within about five kilometres of the ocean, since salt air, UV and humidity wear buildings down much faster than they do further inland. Buildings further from the coast can typically extend to inspections every two years. Annual inspections also build a track record for your building, which makes sinking fund forecasting more accurate over time.",
  },
  {
    q: "What does a building inspection report include?",
    a: "Our reports include a full defect list with photos and locations, a priority rating for each issue, a cost estimate for budgeting, a thermal imaging scan where relevant, and a summary ready for your committee or AGM. Everything's formatted to drop straight into sinking fund forecasts and ten year maintenance plans.",
  },
  {
    q: "How is a rope access building inspection different from a standard inspection?",
    a: "A standard building inspector works from the ground, ladders or a cherry picker, so their report only covers what they can actually reach, which on a multi storey building often isn't much. Our IRATA certified technicians go down the full facade from rooftop anchor points, checking sealants, joints, render and balcony edges up close, all the things a ground level inspector simply can't get to.",
  },
  {
    q: "Can a building inspection report be used for an insurance claim?",
    a: "Yes. Our post storm reports are built to support insurance claims, with timestamped photos, defect locations and a scope of works. If a claim needs to separate pre-existing damage from storm damage, your past annual inspections give us the before-and-after evidence insurers ask for.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Inspections Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Book an inspection →",
};

import type { Hotspot } from "../components/shared/InspectionHotspots";

export const INSPECTION_HOTSPOTS: Hotspot[] = [
  {
    n: "01",
    x: "22%",
    y: "28%",
    title: "Render Delamination",
    priority: "1",
    priorityLabel: "Immediate action required",
    body: "Hollow sections mean the render has come loose from the wall underneath. Our sun and salt air speed this up, and you won't see it happening until a piece actually falls.",
    consequence:
      "Loose render can fall from height, which is a real safety risk and a liability problem for the body corporate. The longer it's left, the more expensive the fix gets once water finds its way in behind it.",
  },
  {
    n: "02",
    x: "58%",
    y: "45%",
    title: "Sealant Failure at Expansion Joint",
    priority: "1",
    priorityLabel: "Immediate action required",
    body: "The sealant here has hardened, cracked and pulled away from the wall, so it's no longer keeping water out. This joint is built to flex with the building, and once the seal fails, water gets in every time it rains.",
    consequence:
      "Water getting in behind the facade causes real damage over time, and in strata buildings it usually shows up as staining on the ceiling of the unit below — by which point the damage is already done.",
  },
  {
    n: "03",
    x: "75%",
    y: "22%",
    title: "Concrete Spalling",
    priority: "1",
    priorityLabel: "Immediate action required",
    body: "Exposed reinforcing steel is visible where the concrete cover has spalled away. Chloride induced corrosion of the reinforcing bar causes the steel to expand, fracturing the surrounding concrete from within, which is particularly common on Sunshine Coast buildings within about five kilometres of the ocean.",
    consequence:
      "Spalled concrete with exposed reinforcing will keep deteriorating without intervention, and the corroding steel weakens structural capacity over time. Falling concrete fragments present an immediate public safety hazard that requires temporary protection until repairs are completed.",
  },
];
