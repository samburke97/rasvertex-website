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
  PiBuildings,
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
    body: "We carry out a comprehensive visual and physical inspection of the full building facade, covering render, cladding, sealants, flashings, expansion joints, fixings and weep holes. Every element gets assessed, photographed and risk rated, then delivered as a written condition report with findings, risk classification and recommended remediation timeframes.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Drone & Thermal Imaging",
    body: "We combine aerial drone inspection for inaccessible or very tall facades with thermal imaging cameras that detect moisture ingress, delamination and air infiltration behind cladding and render that the naked eye simply cannot see. Thermal surveys work best in the early morning, before solar heat masks the temperature differentials we are looking for.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Concrete & Structural Inspections",
    body: "We assess concrete spalling, reinforcing corrosion, carbonation and concrete cancer, which is particularly relevant for Sunshine Coast buildings within about five kilometres of the ocean, where chloride induced reinforcement corrosion progresses noticeably faster than it does inland. Every finding is documented with photos and a remediation scope.",
    photo: "/images/projects/1.jpeg",
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
    body: "We carry out a comprehensive visual and physical inspection of the full building facade, covering render, cladding, sealants, flashings, expansion joints, fixings and weep holes. Every element gets assessed, photographed and risk rated, then delivered as a written condition report with findings, risk classification and recommended remediation timeframes.",
    icon: PiMagnifyingGlass,
  },
  {
    n: "02",
    title: "Drone & Thermal Imaging",
    body: "We combine aerial drone inspection for inaccessible or very tall facades with thermal imaging cameras that detect moisture ingress, delamination and air infiltration behind cladding and render that the naked eye simply cannot see. Thermal surveys work best in the early morning, before solar heat masks the temperature differentials we are looking for.",
    icon: PiDrone,
  },
  {
    n: "03",
    title: "Concrete & Structural Inspections",
    body: "We assess concrete spalling, reinforcing corrosion, carbonation and concrete cancer, which is particularly relevant for Sunshine Coast buildings within about five kilometres of the ocean, where chloride induced reinforcement corrosion progresses noticeably faster than it does inland. Every finding is documented with photos and a remediation scope.",
    icon: PiBuildings,
  },
  {
    n: "04",
    title: "Sinking Fund Support Reports",
    body: "Our condition assessment reports are formatted for use in ten year maintenance plans and sinking fund forecasts under the Body Corporate and Community Management Act 1997, including a prioritised works schedule with cost estimates so committees have the data they need to plan levies accurately and avoid special levy surprises.",
    icon: PiCalculator,
  },
  {
    n: "05",
    title: "Post Storm Damage Assessments",
    body: "We mobilise quickly after severe weather events, whether that is hail, cyclone or storm surge, to assess facade damage, membrane breaches and structural concerns. Insurance ready condition reports with photographic evidence and a scope of works are issued within 48 hours of the inspection.",
    icon: PiCloudLightning,
  },
  {
    n: "06",
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
    body: "We detect moisture, delamination and air infiltration behind cladding and render, defects that stay completely invisible to the naked eye without a proper thermal survey.",
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
    system: "Concrete inspection · thermal imaging · remediation scope",
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
    body: "Hospitals and medical centres need facade and roof condition data without disrupting clinical operations. Our rope access and thermal imaging methods assess the full building envelope with minimal footprint on site.",
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
    a: "We recommend annual building inspections for Sunshine Coast properties within about five kilometres of the ocean, since salt air, UV intensity and humidity speed up sealant degradation, render delamination and reinforcement corrosion well beyond what inland buildings experience. Buildings further from the coast can typically extend to inspections every two years. Annual inspections also build a condition baseline, which makes sinking fund forecasting significantly more accurate over time.",
  },
  {
    q: "What does a building inspection report include?",
    a: "Our condition reports include a full defect register with location references and photographs, a risk classification for each defect across three priority levels, recommended remediation scope, indicative cost estimates for budgeting, a thermal imaging scan report where applicable, and an executive summary suitable for a body corporate committee or AGM. Reports are formatted for direct use in sinking fund forecasts and ten year maintenance plans.",
  },
  {
    q: "How is a rope access building inspection different from a standard inspection?",
    a: "A standard building inspector works from the ground, ladders or a cherry picker, so their report reflects only what they can physically reach, which on a multi storey building is often very little. Our IRATA certified technicians descend the full facade from rooftop anchor points, physically assessing sealant condition, expansion joint integrity, render adhesion and balcony membrane upturns, all elements completely inaccessible to a ground level inspector. The difference in the quality of the condition data is significant.",
  },
  {
    q: "Can a building inspection report be used for an insurance claim?",
    a: "Yes. Our post storm and post incident reports are formatted to support insurance claims, with timestamped photographs, documented defect locations and a scope of works. Where a claim needs to distinguish pre existing damage from storm caused damage, our condition baseline from prior annual building inspections provides the comparative evidence insurers require.",
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
    body: "Hollow sections behind the render surface point to a loss of adhesion between the render and the substrate underneath. On the Sunshine Coast, thermal cycling and salt air speed up this process, and the bond breaks down from the back face, invisible until a section eventually falls.",
    consequence:
      "Delaminated render panels can fall from height, creating a serious public safety risk and significant liability exposure for the body corporate. Remediation costs increase substantially once water starts entering behind the render.",
  },
  {
    n: "02",
    x: "58%",
    y: "45%",
    title: "Sealant Failure at Expansion Joint",
    priority: "1",
    priorityLabel: "Immediate action required",
    body: "The sealant at this expansion joint has hardened, cracked and pulled away from the substrate, so it is no longer functioning as a watertight seal. Expansion joints are specifically designed to accommodate building movement, and failed sealant here means uncontrolled water entry during every rain event.",
    consequence:
      "Water tracking behind the facade will cause progressive concrete carbonation, reinforcement corrosion and internal water damage. In strata buildings this typically shows up as ceiling staining in the apartment below, by which point significant internal damage has usually already occurred.",
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
