// app/data/buildingInspectionsData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/maintenance.png",
    alt: "RAS-VERTEX technician conducting a rope access building inspection on the Sunshine Coast",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "Facade condition inspection on a Sunshine Coast strata building",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Detailed building inspection report — RAS-VERTEX Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "High-access building inspection by rope access — Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Waterproofing and facade inspection — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Facade Condition Inspections",
    body: "Comprehensive visual and physical inspection of the full building facade — render, cladding, sealants, flashings, expansion joints, fixings and weep holes. Every element assessed, photographed and risk-rated. Delivered as a written condition report with findings, risk classification and recommended remediation timeframes.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Drone & Thermal Imaging",
    body: "Aerial drone inspection for inaccessible or very tall facades, combined with thermal imaging cameras to detect moisture ingress, delamination and air infiltration behind cladding and render that isn't visible to the naked eye. Thermal surveys are most effective in the early morning before solar heat masks temperature differentials.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Concrete & Structural Inspections",
    body: "Assessment of concrete spalling, reinforcing corrosion, carbonation and concrete cancer — particularly relevant for Sunshine Coast buildings within 5km of the ocean, where chloride-induced reinforcement corrosion progresses significantly faster than inland buildings. Findings documented with photos and remediation scope.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Pre-Purchase Inspections",
    body: "Independent condition assessment for prospective buyers, investors and buyers' agents. We inspect what a standard building inspector can't reach — high facades, rooftop areas, balcony membranes and cladding details. A pre-purchase inspection gives you an accurate picture of the deferred maintenance liability before contracts are exchanged.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Sinking Fund Support Reports",
    body: "Condition assessment reports formatted for use in 10-year maintenance plans and sinking fund forecasts under the Body Corporate and Community Management Act 1997. Includes a prioritised works schedule with cost estimates — giving committees the data they need to plan levies accurately and avoid special levy surprises.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Post-Storm Damage Assessments",
    body: "Rapid mobilisation after severe weather events — hail, cyclone, storm surge — to assess facade damage, membrane breaches and structural concerns. Insurance-ready condition reports with photographic evidence and scope of works, issued within 48 hours of inspection.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Annual Maintenance Inspections",
    body: "Ongoing annual inspection programs that track building condition over time — identifying early-stage deterioration before it escalates to structural repair. Year-on-year condition data gives body corporate committees and property managers an accurate picture of their building's asset lifecycle.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site Review",
    body: "We review your building plans, confirm anchor and access points, and scope the inspection method. Rope access, drone, or a combination — determined by building height, geometry and the areas of concern.",
    deliverable: "Access plan & scope of works",
  },
  {
    n: "02",
    title: "Physical Inspection",
    body: "IRATA-certified technicians descend the full facade, physically assessing every element — render, sealants, expansion joints, balconies, fixings, flashings and penetrations. Every defect is photographed with location reference.",
    deliverable: "Timestamped photo record",
  },
  {
    n: "03",
    title: "Thermal & Drone Survey",
    body: "Thermal imaging to detect moisture behind surfaces and delamination that physical inspection can't confirm. Drone footage for context and documentation of overall building condition.",
    deliverable: "Thermal scan report & drone footage",
  },
  {
    n: "04",
    title: "Risk Assessment",
    body: "All findings are classified by risk — Priority 1 (immediate action), Priority 2 (within 12 months), Priority 3 (monitor). Classification follows Australian Standards and gives committees a clear basis for maintenance decisions.",
    deliverable: "Risk-rated defect register",
  },
  {
    n: "05",
    title: "Condition Report",
    body: "Full written condition report issued within 5 business days — findings, photos, risk ratings, recommended remediation scope and cost estimates. Formatted for use in sinking fund forecasts and 10-year maintenance plans under the BCCM Act.",
    deliverable: "Written condition report + cost estimates",
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "Rope access reach",
    body: "We access facades that standard inspectors can't. IRATA-certified technicians physically inspect every element at every level — no assumptions, no gaps.",
  },
  {
    n: "02",
    title: "Thermal imaging",
    body: "Detect moisture, delamination and air infiltration behind cladding and render — defects that are invisible to the naked eye and undetectable without thermal survey.",
  },
  {
    n: "03",
    title: "Sinking fund ready",
    body: "Reports formatted for direct use in 10-year maintenance plans and sinking fund forecasts under the BCCM Act 1997. Cost estimates included — committees can plan budgets accurately.",
  },
  {
    n: "04",
    title: "Priority-rated findings",
    body: "Every defect classified as Priority 1, 2 or 3. Committees understand exactly what needs attention now, what can be scheduled, and what is being monitored.",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC Licensed" },
      {
        src: "/images/associations/smartstrata.png",
        alt: "Smart Strata Partner",
      },
    ],
  },
  {
    n: "05",
    title: "We also do the repairs",
    body: "Unlike independent inspection-only firms, we're a full-service contractor. When the report identifies works, we can scope and price them — the same team, no re-mobilisation cost.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Maroochydore",
    name: "Beachfront Towers Facade Audit",
    type: "Strata · 14 storeys · 96 lots",
    system: "Full facade inspection · thermal scan · sinking fund report",
    image: "/images/projects/1.jpeg",
    alt: "Facade condition inspection Maroochydore strata — RAS-VERTEX",
  },
  {
    suburb: "Mooloolaba",
    name: "Oceanfront Strata Annual Program",
    type: "Strata · annual inspection program",
    system: "Annual condition inspection · risk register · committee report",
    image: "/images/projects/2.jpeg",
    alt: "Annual building inspection program Mooloolaba — RAS-VERTEX",
  },
  {
    suburb: "Noosa",
    name: "Resort Pre-Remediation Assessment",
    type: "Hospitality · resort complex",
    system: "Concrete inspection · thermal imaging · remediation scope",
    image: "/images/projects/1.jpeg",
    alt: "Pre-remediation building inspection Noosa resort — RAS-VERTEX",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate building inspection — RAS-VERTEX Sunshine Coast",
    title: "Body Corporate & Strata.",
    body: "Under the BCCM Act 1997, every Queensland body corporate must maintain a 10-year sinking fund forecast. Our condition reports give committees the data to plan accurately — defect register, risk ratings, prioritised works schedule and cost estimates, ready for the AGM.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial building inspection — RAS-VERTEX Sunshine Coast",
    title: "Commercial & Industrial.",
    body: "Facility managers and asset owners need to understand what their building actually needs — not guesswork, not deferred maintenance. Our inspection reports give you an accurate condition picture with a prioritised remediation plan you can budget against.",
    cta: "Book an inspection",
    href: "/contact",
  },
  {
    photo: "/nav/maintenance.png",
    alt: "Pre-purchase building inspection — RAS-VERTEX Sunshine Coast",
    title: "Pre-Purchase.",
    body: "Know what you're buying. We access high facades, rooftop areas and balcony membranes that standard building inspectors can't reach. A pre-purchase inspection gives buyers and investors an accurate picture of deferred maintenance liability before contracts are exchanged.",
    cta: "Book an inspection",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Why does a body corporate need a professional building inspection?",
    a: "Under the Body Corporate and Community Management Act 1997, every Queensland body corporate must maintain a 10-year sinking fund forecast projecting all major maintenance expenditure. That forecast is only as accurate as the condition data behind it. Without a professional inspection, cost estimates are guesswork — and guesswork leads to underfunded sinking funds, deferred maintenance, and eventually special levies. A condition report gives committees the defect register, risk ratings and cost estimates they need to plan levies accurately and avoid unpleasant surprises for lot owners.",
  },
  {
    q: "What does a building inspection report include?",
    a: "Our condition reports include: a full defect register with location references and photographs; risk classification for each defect (Priority 1 — immediate, Priority 2 — within 12 months, Priority 3 — monitor); recommended remediation scope for each defect; indicative cost estimates for budgeting purposes; a thermal imaging scan report where applicable; and an executive summary suitable for presentation to a body corporate committee or AGM. Reports are formatted for direct use in sinking fund forecasts and 10-year maintenance plans.",
  },
  {
    q: "How is a rope access inspection different from a standard building inspection?",
    a: "A standard building inspector works from the ground, ladders, or a cherry picker — and their report reflects what they can physically reach, which on a multi-storey building is often very little. Our IRATA-certified technicians descend the full facade from rooftop anchor points, physically assessing every element at every level. Sealant condition, expansion joint integrity, render adhesion, fixing corrosion, balcony membrane upturns — elements that are completely inaccessible to a ground-level inspector. The difference in the quality of the condition data is significant.",
  },
  {
    q: "How often should a building's facade be inspected on the Sunshine Coast?",
    a: "We recommend annual inspections for Sunshine Coast buildings within 5km of the ocean — the combination of salt air, UV intensity and humidity accelerates sealant degradation, render delamination and reinforcement corrosion significantly faster than inland buildings. Buildings further from the coast can typically extend to biennial inspections. Annual inspections also create a condition baseline — year-on-year data allows us to track deterioration rates and predict when elements will require replacement, making sinking fund forecasting significantly more accurate.",
  },
  {
    q: "Can an inspection report be used for an insurance claim?",
    a: "Yes. Our post-storm and post-incident reports are formatted to support insurance claims — timestamped photographs, documented defect locations, and a scope of works. Where the claim relates to pre-existing versus storm-caused damage, our condition baseline from prior annual inspections provides the comparative evidence insurers require.",
  },
  {
    q: "How long does a building inspection take?",
    a: "Inspection duration depends on building size, height and the number of areas requiring access. A typical 8–12 storey strata building takes one to two days for the physical inspection and drone survey. The condition report is issued within five business days of inspection completion. We notify affected residents and building management in advance, and all rope access work is conducted under a site-specific SWMS — residents are not required to vacate.",
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
    body: "Hollow sections behind the render surface indicate loss of adhesion between the render and the substrate. On the Sunshine Coast, thermal cycling and salt air accelerate this process — the bond breaks down from the back face, invisible until a section falls.",
    consequence:
      "Delaminated render panels can fall from height, creating a serious public safety risk and significant liability exposure for the body corporate. Remediation costs increase substantially once water enters behind the render.",
  },
  {
    n: "02",
    x: "58%",
    y: "45%",
    title: "Sealant Failure at Expansion Joint",
    priority: "1",
    priorityLabel: "Immediate action required",
    body: "The sealant at this expansion joint has hardened, cracked and pulled away from the substrate — it is no longer functioning as a watertight seal. Expansion joints are specifically designed to accommodate building movement; failed sealant here means uncontrolled water entry during every rain event.",
    consequence:
      "Water tracking behind the facade will cause progressive concrete carbonation, reinforcement corrosion and internal water damage. In strata buildings, this typically presents as ceiling staining in the apartment below — by which point significant internal damage has already occurred.",
  },
  {
    n: "03",
    x: "75%",
    y: "22%",
    title: "Concrete Spalling",
    priority: "1",
    priorityLabel: "Immediate action required",
    body: "Exposed reinforcing steel is visible where the concrete cover has spalled away. Chloride-induced corrosion of the reinforcing bar causes the steel to expand, fracturing the surrounding concrete from within. This is particularly prevalent on Sunshine Coast buildings within 5km of the ocean.",
    consequence:
      "Spalled concrete with exposed reinforcing will continue to deteriorate without intervention. The corroding steel weakens structural capacity over time. Falling concrete fragments present an immediate public safety hazard requiring temporary protection until repairs are completed.",
  },
  {
    n: "04",
    x: "35%",
    y: "68%",
    title: "Balcony Membrane Failure",
    priority: "2",
    priorityLabel: "Within 12 months",
    body: "The waterproofing membrane on this balcony is showing surface crazing and has delaminated at the wall upturn junction. The membrane is at end of service life and no longer providing reliable waterproofing — moisture is likely entering the substrate during heavy rain, though visible internal damage has not yet appeared.",
    consequence:
      "Once water breaches the membrane consistently, it will track through the slab and manifest as water staining or active leaks in the apartment below. Full balcony membrane replacement at this stage costs significantly less than the combined cost of membrane replacement plus internal remediation.",
  },
  {
    n: "05",
    x: "88%",
    y: "60%",
    title: "Weep Hole Blockage",
    priority: "3",
    priorityLabel: "Monitor annually",
    body: "Weep holes in this section of brickwork are blocked with render overspray and biological growth. Weep holes allow water that enters the wall cavity to drain out — when blocked, that water has no exit point and accumulates within the cavity.",
    consequence:
      "Prolonged moisture accumulation in the wall cavity accelerates corrosion of wall ties and cavity flashings. This is a monitor item at this stage, but should be cleared and re-inspected annually. If cavity wall tie corrosion is identified at future inspection, the scope and cost of remediation increases significantly.",
  },
];
