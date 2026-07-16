// app/data/waterproofingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { ServiceCard } from "../components/shared/ServiceCards";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import { cld } from "../lib/cloudinary";
import {
  PiHouseLine,
  PiBuildingApartment,
  PiMagnifyingGlass,
  PiSyringe,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/nav/waterproofing.png",
    alt: "Waterproofing membrane application on a Sunshine Coast rooftop",
  },
  {
    src: cld("prep-done-right", { width: 1200 }),
    alt: "Concrete roof restoration and waterproofing on the Sunshine Coast",
  },
  {
    src: cld("leading-systems", { width: 1200 }),
    alt: "Balcony waterproofing and membrane coating on the Sunshine Coast",
  },
  {
    src: cld("documented-waterproofing", { width: 1200 }),
    alt: "Building waterproofing and remedial works on the Sunshine Coast",
  },
  {
    src: "/nav/height.png",
    alt: "Rope access waterproofing on a Sunshine Coast building",
  },
];

export const PREP_STEPS = [
  {
    number: "01",
    title: "Floor Preparation",
    body: "Before any membrane goes down, every existing finish, including old coatings, tiles and coverings, gets fully removed to expose the base structure. The goal is simple, a clean, sound surface that will actually hold the system for the long term.",
  },
  {
    number: "02",
    title: "Diamond Grinding",
    body: "We mechanically prepare the concrete to remove contamination, open the surface and expose any hidden cracks and voids. This step is what allows the waterproofing system to bond properly and perform as designed, rather than just on paper.",
  },
  {
    number: "03",
    title: "Crack Repair",
    body: "Once the surface is exposed, cracks get assessed and repaired based on movement and severity. Structural cracks are cut, backed and sealed in a way that allows for movement, so the repair does not fail as the building shifts over time.",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Concrete Roof Restoration",
    body: "We restore failed concrete roof systems using a complete coating system designed for our coastal exposure, including UV, salt air and thermal movement. Every layer goes on to manufacturer requirements, giving you long term performance and durability rather than a short term fix.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Balcony Waterproofing",
    body: "We remove and replace failed balcony waterproofing systems once we have diagnosed the actual cause of failure, whether that is membrane breakdown, substrate cracking or poor drainage. The new system is installed to suit the movement and exposure conditions the structure genuinely faces.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Leak Detection & Repair",
    body: "Using thermal imaging and moisture detection equipment, we locate the exact source of water ingress without unnecessary destructive investigation. On the Sunshine Coast, water often travels through concrete well before it becomes visible, so we trace it back to the true origin rather than just treating the surface damage.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Remedial & Injection Works",
    body: "We use epoxy and polyurethane injection to stop active leaks in concrete structures, including basements, lift pits and retaining walls. This seals the water ingress at the source and helps protect the reinforcing steel from ongoing corrosion.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
];

export const SERVICE_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Concrete Roof Restoration",
    body: "We restore failed concrete roof systems using a complete coating system designed for our coastal exposure, including UV, salt air and thermal movement. Every layer goes on to manufacturer requirements, giving you long term performance and durability rather than a short term fix.",
    icon: PiHouseLine,
  },
  {
    n: "02",
    title: "Balcony Waterproofing",
    body: "We remove and replace failed balcony waterproofing systems once we have diagnosed the actual cause of failure, whether that is membrane breakdown, substrate cracking or poor drainage. The new system is installed to suit the movement and exposure conditions the structure genuinely faces.",
    icon: PiBuildingApartment,
  },
  {
    n: "03",
    title: "Leak Detection & Repair",
    body: "Using thermal imaging and moisture detection equipment, we locate the exact source of water ingress without unnecessary destructive investigation. On the Sunshine Coast, water often travels through concrete well before it becomes visible, so we trace it back to the true origin rather than just treating the surface damage.",
    icon: PiMagnifyingGlass,
  },
  {
    n: "04",
    title: "Remedial & Injection Works",
    body: "We use epoxy and polyurethane injection to stop active leaks in concrete structures, including basements, lift pits and retaining walls. This seals the water ingress at the source and helps protect the reinforcing steel from ongoing corrosion.",
    icon: PiSyringe,
  },
];

export const WHY_CHOOSE_US: ServiceCard[] = [
  {
    photo: "/images/projects/1.jpeg",
    alt: "Concrete surface preparation before waterproofing on the Sunshine Coast",
    title: "Preparation first",
    body: "Waterproofing is only ever as good as the surface underneath it. We grind, repair and prime before a single drop of membrane goes down, with no shortcuts taken on substrate preparation.",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Diamond grinding equipment used for waterproofing preparation on the Sunshine Coast",
    title: "German engineered equipment",
    body: "Our diamond grinding equipment runs off three phase generators, paired with HEPA filtered vacuum extractors, producing a surface that membranes actually bond to properly.",
  },
  {
    photo: "/nav/waterproofing.png",
    alt: "Written waterproofing warranty on the Sunshine Coast",
    title: "Written warranty",
    body: "A workmanship warranty is issued in writing at handover, backed by manufacturer product warranties of up to fifteen years on qualifying membrane systems.",
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront Strata Balcony Program",
    type: "Strata · 52 balconies",
    system: "Full membrane replacement · AS 3740 · polyurethane system",
    image: "/images/projects/1.jpeg",
    alt: "Balcony waterproofing program for a Mooloolaba strata building",
  },
  {
    suburb: "Maroochydore",
    name: "Commercial Rooftop Restoration",
    type: "Commercial · concrete roof",
    system:
      "Diamond grind · crack repair · epoxy prime · polyurethane membrane",
    image: "/images/projects/2.jpeg",
    alt: "Concrete roof restoration in Maroochydore",
  },
  {
    suburb: "Noosa",
    name: "Resort Rooftop Waterproofing",
    type: "Hospitality · resort",
    system: "Full roof preparation · membrane system · UV stable topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Rooftop waterproofing at a Noosa resort",
  },
];

export const CARDS: ServiceCard[] = [
  {
    photo: "/images/projects/2.jpeg",
    alt: "Body corporate balcony waterproofing on the Sunshine Coast",
    title: "Body Corporate.",
    body: "Failed balcony waterproofing is the most common and most expensive maintenance issue facing strata buildings on the Sunshine Coast. We run full balcony waterproofing programs for body corporates, staged floor by floor to minimise disruption to owners, with committee ready condition reports at every stage.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Commercial rooftop waterproofing on the Sunshine Coast",
    title: "Commercial.",
    body: "Concrete roof restorations, podium decks and expansion joint replacement for commercial buildings and retail centres. We diagnose correctly, prepare the substrate properly and apply systems specified to last, not just to get through the next wet season.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/waterproofing.png",
    alt: "Industrial waterproofing on the Sunshine Coast",
    title: "Industrial.",
    body: "Warehouse roofing, tilt slab expansion joints and hardstand drainage all need systems that handle structural movement and chemical exposure, not just weather. We specify for the substrate and the operation, so the fix outlasts the next audit rather than falling short of it.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Education facility waterproofing on the Sunshine Coast",
    title: "Education.",
    body: "Leaking roofs and balconies on school and campus buildings need repairs scheduled around term dates. We work through holidays and after hours wherever possible, with full safety documentation for facilities and grounds teams.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/1.jpeg",
    alt: "Government building waterproofing on the Sunshine Coast",
    title: "Government.",
    body: "Council buildings and public facilities need waterproofing works documented to a standard that satisfies asset management and compliance requirements. We provide full condition reports, specification records and warranty documentation for every project.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/nav/waterproofing.png",
    alt: "Medical facility waterproofing on the Sunshine Coast",
    title: "Medical.",
    body: "Hospitals and medical centres cannot tolerate water ingress near clinical spaces or unplanned shutdowns. We use thermal imaging to find the source before opening anything up, and schedule works to minimise disruption to critical areas.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    alt: "Residential waterproofing on the Sunshine Coast",
    title: "Residential.",
    body: "Bathroom, balcony and rooftop waterproofing for homes and units. We find the source, prepare the surface properly and apply a warranted system, protecting your home and your investment through whatever the Sunshine Coast's wet season throws at it.",
    cta: "Get a quote",
    href: "/contact",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How often should roof and balcony waterproofing be inspected or reapplied on the Sunshine Coast?",
    a: "Get flat or low pitch concrete roofs checked every two to three years. Our sun, heat and salt air wear waterproofing out faster than most of Australia, so a full reapplication is usually needed every eight to twelve years.",
  },
  {
    q: "What are the signs that a roof or balcony needs waterproofing?",
    a: "Damp patches or staining on ceilings and walls below the roof or balcony, cracking or bubbling on the surface, and gaps where the old sealant has failed. In apartment buildings, a complaint from the unit below is often the first sign something's wrong. If you can already see damage inside, it has usually been leaking for a while.",
  },
  {
    q: "What waterproofing materials do you use?",
    a: "It depends on the surface, how much foot traffic it gets, and how exposed it is to the weather. We only use proven, commercial grade products, never a cheap system on a coastal building, because that's what actually lasts here.",
  },
  {
    q: "Can I do my own waterproofing, or do I need a licensed contractor?",
    a: "Waterproofing needs a licensed contractor in Queensland for anything beyond minor maintenance. Getting the surface properly prepared matters just as much as the product used. A rushed or DIY job usually fails within a year or two, so a licensed job with a written warranty works out cheaper in the long run.",
  },
  {
    q: "Do you provide condition reports for body corporate sinking fund planning?",
    a: "Yes. We put together written reports with photos and clear recommendations that your committee or strata manager can use for maintenance and budget planning.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Waterproofing Manager",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Chat to our waterproofing team →",
};
