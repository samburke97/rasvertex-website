// app/data/paintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { BeforeAfterSpec } from "../components/shared/ServiceBeforeAfter";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import { cld } from "../lib/cloudinary";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("building-repaint", { width: 1600 }),
    alt: "Commercial building repaint on the Sunshine Coast",
  },
  {
    src: cld("c2", { width: 1600 }),
    alt: "Painting contractors at work on the Sunshine Coast",
  },
  {
    src: cld("c3", { width: 1600 }),
    alt: "Exterior painting project on the Sunshine Coast",
  },
  {
    src: cld("c4", { width: 1600 }),
    alt: "Strata painting project underway on the Sunshine Coast",
  },
  {
    src: cld("c5", { width: 1600 }),
    alt: "Facade painting project on the Sunshine Coast",
  },
  {
    src: cld("c6", { width: 1600 }),
    alt: "Residential painting project on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior Painting",
    body: "We carry out full exterior repaints for strata, commercial and residential buildings right across the Sunshine Coast. Anything within about five kilometres of the water gets a chloride rinse and a salt bonded primer before a drop of Dulux Weathershield goes anywhere near the wall, because that is what actually holds up against our salt air.",
    photo: cld("exterior", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "We recoat Colorbond, tile and membrane roofs all over the region, and where it makes sense we will apply a heat reflective coating that can bring internal temperatures down by as much as eight degrees. On a commercial building that adds up to a genuine energy saving over a full Queensland summer.",
    photo: cld("roof-coatings", { width: 1800 }),
    href: "/contact",
  },

  {
    label: "Rope Access Painting",
    body: "Our IRATA certified technicians, trained through levels one to three, work on high rise and difficult to reach facades without needing scaffolding at all. That means faster mobilisation, no scaffold hire bill, and barely any footprint on your site while the job is underway.",
    photo: cld("rope-access-painting", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Render & Texture",
    body: "We work across acrylic, polymer and sand render systems, and we always repair cracks and substrate defects properly before any coating goes on top. A patch job over a damaged surface never lasts long, so that is simply not how we do it.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Strata & Body Corporate",
    body: "As body corporate painters trusted across the Sunshine Coast, we bring committees a proposal that is ready to approve, schedule the work in stages around residents, and manage every bit of communication from the first meeting to the final coat. We have now completed more than fifty strata repainting projects up and down the coast.",
    photo: cld("strata", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Colour Consulting",
    body: "For projects over $25k we will paint sample blocks on site at no charge, so you can see the actual colour in your actual light before committing to anything. We also put together full colour schedules and heritage compliant palettes whenever a project calls for it.",
    photo: cld("colour-consulting", { width: 1800 }),
    href: "/contact",
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: cld("exterior", { width: 1800 }),
    alt: "Project manager on a Sunshine Coast painting job site",
    title: "Dedicated project manager",
    body: "One project manager runs your job from the very first site visit right through to warranty sign off, so you have got one number and one familiar face to deal with rather than a rotating cast of subcontractors.",
  },
  {
    photo: cld("rope-access-painting", { width: 1800 }),
    alt: "IRATA certified rope access painting technician on the Sunshine Coast",
    title: "IRATA certified access",
    body: "We have trained more than thirty rope access technicians in house through IRATA levels one to three, and they reach parts of a building that scaffold simply cannot, faster, safer and without the setup cost eating into your budget.",
  },
  {
    photo: cld("avere-repaint", { width: 1800 }),
    alt: "Coastal spec paint system applied to a Sunshine Coast high rise building",
    title: "Coastal spec paint systems",
    body: "We match salt bonded primers, chloride rinse treatments and elastomeric topcoats to whatever substrate and exposure your building is actually dealing with, rather than reaching for the same system regardless of how close it sits to the coast.",
  },
];

export const BEFORE_AFTER_SPECS: BeforeAfterSpec[] = [
  {
    label: "Scope",
    value: "Full exterior repaint · render and masonry · 4 storeys",
  },
  {
    label: "System",
    value: "Dulux Weathershield Pure · elastomeric topcoat",
  },
  {
    label: "Crew",
    value: "4 technicians · rope access",
  },
  {
    label: "Warranty",
    value: "8-year workmanship · 15-year manufacturer",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High Rise Repaint",
    type: "Body Corporate · 8 storeys",
    system: "Dulux Weathershield · elastomeric topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Oceanfront high rise repaint in Mooloolaba",
  },
  {
    suburb: "Coolum Beach",
    name: "Coolum Resort Exterior",
    type: "Commercial · resort complex",
    system: "Haymes Sandtex · salt bonded primer",
    image: "/images/projects/2.jpeg",
    alt: "Coolum Resort exterior painting project",
  },
  {
    suburb: "Maroochydore",
    name: "CBD Office Tower",
    type: "Commercial · 12 storeys",
    system: "Dulux AcraTex · render and texture coat",
    image: "/images/projects/1.jpeg",
    alt: "Maroochydore CBD office tower commercial painting project",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: cld("commercial-painters", { width: 1200 }),
    alt: "Commercial painting on the Sunshine Coast",
    title: "Commercial Painting",
    body: "For more than 25 years, we've delivered commercial painting projects across the Sunshine Coast's schools, hotels, shopping centres and high-rise buildings. We know that downtime costs money, which is why our in-house team plans every project around your operations, using rope access, EWPs and staged delivery methods to minimise disruption. Beyond the paint itself, we identify and remediate defects as we go, protecting the long-term performance of your asset rather than simply coating over problems. No subcontractors, experienced project managers, and 25+ years of commercial painting experience on every project.",
    cta: "Commercial painting",
    href: "/commercial-painting",
  },
  {
    photo: cld("rope-access-painting", { width: 1200 }),
    alt: "Body corporate and strata painting on the Sunshine Coast",
    title: "Body Corporate & Strata Painting",
    body: "Body corporate painting is about more than applying a fresh coat of paint. It's about delivering a result that residents are proud of while keeping communities informed and disruption to a minimum. Backed by 25+ years of body corporate and strata painting experience on the Sunshine Coast, we've built a process centred on proactive communication, detailed project management and clean, well-organised worksites. Every project includes colour consultation as standard and premium Dulux and Haymes coating systems tailored to coastal conditions.",
    cta: "Body corporate painting",
    href: "/body-corporate-painting",
  },
  {
    photo: cld("house-painting", { width: 1200 }),
    alt: "Residential painting on the Sunshine Coast",
    objectPosition: "top",
    title: "Residential Painting",
    body: "Painting your home should be an exciting experience, not a stressful one. Backed by 25+ years of residential painting experience, our local Sunshine Coast team takes the time to understand your vision, guide you through colour selections and recommend the right products and finishes for your home. With no subcontractors and a friendly, experienced team managing every detail, our goal is simple: to deliver a home you'll genuinely love coming back to every day.",
    cta: "Residential painting",
    href: "/residential-painting",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How much does painting cost on the Sunshine Coast?",
    a: "Cost depends on the type of project, whether that is a residential repaint, a commercial building or a full body corporate program, plus the size, substrate and access required. As commercial and residential painters across the Sunshine Coast, we provide a fully itemised written quote with no lump sums and no hidden extras, so you know exactly what you are paying for before any work begins.",
  },
  {
    q: "Do you handle both commercial and residential painting on the Sunshine Coast?",
    a: "Yes. We work as commercial painters for offices, retail centres and industrial sites, as residential painters for homes across the Sunshine Coast, and as body corporate painters for strata buildings of any height. Every project gets the same standard of surface preparation and coastal spec coating systems, whatever the scale.",
  },
  {
    q: "Can you paint while a building or home stays occupied?",
    a: "Yes, almost all of our commercial, strata and residential painting happens while the property stays fully occupied. We schedule anything noisy or disruptive outside business hours, work zone by zone on larger buildings, and give residents or tenants advance notice before we are working on their section.",
  },
  {
    q: "Do you use rope access or scaffolding for high rise painting?",
    a: "Both, depending on the job. Our crew is IRATA certified in house through levels one to three, and we partner with scaffolders on projects where access needs to be staged differently. On most high rise repaints, rope access saves somewhere between 40 and 60 percent compared to scaffolding alone.",
  },
  {
    q: "Are you QBCC licensed and insured for painting work on the Sunshine Coast?",
    a: "Yes, we are fully QBCC licensed, carry $20 million in public liability cover and maintain full workers compensation insurance. Every project is backed by a written workmanship warranty, and certificates of currency are issued automatically at quote stage, so you have everything you need on file from day one.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Painting Lead",
  photo: "/images/people/caro.jpg",
  ctaHref: "/contact",
  ctaLabel: "Let’s talk about your project →",
};
