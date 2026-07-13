// app/data/residentialPaintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import { cld } from "../lib/cloudinary";
import {
  PiClipboardText,
  PiHammer,
  PiPalette,
  PiPaintRoller,
  PiCheckCircle,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: cld("residential-painting-hero", { width: 1600 }),
    alt: "Residential house painter working on the Sunshine Coast",
  },
  {
    src: cld("fence-painting", { width: 1200 }),
    alt: "Exterior house painting on the Sunshine Coast",
  },
  {
    src: cld("local-team", { width: 1200 }),
    alt: "Interior and exterior residential painting on the Sunshine Coast",
  },
  {
    src: cld("garage", { width: 1200 }),
    alt: "Residential painting and home maintenance on the Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Residential painting and waterproofing on the Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior House Painting",
    body: "We carry out full exterior repaints for homes across the Sunshine Coast, whether that is weatherboard, timber, rendered walls, brick or fibre cement. Coastal properties within about five kilometres of the ocean get a chloride rinse and a coating system tailored to our coastal climate before any topcoat goes on, the very same preparation standard we use on high rise body corporates, just applied to your home instead.",
    photo: cld("exterior-house-painting", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Roof Painting & Restoration",
    body: "We recoat Colorbond, terracotta tile and concrete tile roofs, pressure washing first, treating any moss or lichen, then priming and finishing with a commercial grade topcoat, the same process we rely on for commercial buildings. Heat reflective coatings are available too if you want to bring internal temperatures down.",
    photo: cld("roof-coatings-home", { width: 1200 }),
    href: "/contact",
  },
  {
    label: "Deck & Timber Restoration",
    body: "We sand, prepare and recoat timber decks with penetrating oils or UV stable varnish systems, and we always assess the timber's condition first. Rotted boards get replaced, gaps get filled and cracks get sealed well before a drop of coating goes anywhere near the timber.",
    photo: cld("deck-and-timber", { width: 1200 }),
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site visit & scope confirmation",
    body: "Your project manager inspects the property, confirms surfaces, talks through colours and identifies any repairs that are needed. A fixed written quote follows within 48 hours.",
    icon: PiClipboardText,
  },
  {
    n: "02",
    title: "Surface preparation",
    body: "We start with a full building wash, then sand and repair surfaces as required. This covers mould treatment, crack repairs, caulking and substrate preparation before any coating is applied.",
    icon: PiHammer,
    links: [
      { text: "building wash", href: "/external-cleaning" },
      { text: "crack repairs", href: "/maintenance" },
    ],
  },
  {
    n: "03",
    title: "Colour selection",
    body: "We confirm your colour choices on site using sample patches in natural light, well before any full application begins.",
    icon: PiPalette,
  },
  {
    n: "04",
    title: "Painting & application",
    body: "All coatings go on in sequence, primer, undercoat and finish coats, in line with manufacturer specifications and with proper curing time allowed between each stage.",
    icon: PiPaintRoller,
  },
  {
    n: "05",
    title: "Completion & handover",
    body: "We finish with a final walkthrough alongside your project manager, complete any touch ups before sign off, and issue a written workmanship warranty at handover.",
    icon: PiCheckCircle,
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Moffat Beach",
    name: "Coastal Home Exterior Repaint",
    type: "Residential · 4 coat Haymes system",
    system:
      "Coastal-climate coating system · flexible topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Coastal home exterior repaint in Moffat Beach",
  },
  {
    suburb: "Buderim",
    name: "Full Interior & Exterior",
    type: "Residential · full repaint",
    system: "Low VOC interior paint · coastal-climate exterior system",
    image: "/images/projects/2.jpeg",
    alt: "Buderim residential full interior and exterior repaint",
  },
  {
    suburb: "Noosa Heads",
    name: "Pre Sale Refresh",
    type: "Residential · pre sale",
    system: "Interior and exterior refresh · 7 days to settlement",
    image: "/images/projects/1.jpeg",
    alt: "Noosa Heads pre sale painting refresh",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "How much does house painting cost on the Sunshine Coast?",
    a: "Cost depends on the size of the home, the number of rooms or the extent of the exterior, and how much surface preparation is needed. As residential painters across the Sunshine Coast, we quote every home individually after a site visit, with a fixed written price and no hidden extras. Coastal homes within five kilometres of the ocean can cost a little more, since they need chloride treatment to last.",
  },
  {
    q: "Should I hire a professional for exterior house painting on the Sunshine Coast, or do it myself?",
    a: "For small interior touch ups, doing it yourself is perfectly fine. For exterior house painting on the Sunshine Coast though, especially within five kilometres of the ocean, professional preparation is the difference between a finish that lasts a decade and one that peels within two years. Salt air, UV intensity and humidity call for chloride treatment and commercial grade topcoats that a hardware store simply will not stock, plus a written warranty a DIY job never comes with.",
  },
  {
    q: "What is included in an exterior house painting project on the Sunshine Coast?",
    a: "Every project starts with a full building wash, followed by crack repairs, render patching, caulking and any rot replacement needed before a drop of paint goes on. We then apply a coating system tailored to our coastal climate and suited to the home's exposure. An eight year written workmanship warranty is issued at handover, with manufacturer warranties of up to fifteen years running separately.",
  },
  {
    q: "What paint products do you use for interior house painting on the Sunshine Coast?",
    a: "We use low VOC paint for interior house painting, chosen by sheen level to suit the surface and the room. For exterior work we specify commercial systems tailored to our coastal climate rather than budget products, since coastal conditions on the Sunshine Coast wear out lower grade paint far faster than an inland home would experience.",
  },
  {
    q: "Do you offer pre sale house painting for Sunshine Coast homeowners and agents?",
    a: "Yes, we handle quick turn interior and exterior refreshes for agents and vendors, with most jobs completed in five to ten business days. We work around open homes and settlement dates, and having refreshed plenty of Sunshine Coast properties before sale, we know what actually makes a difference to buyers and what photographs well.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Sam Rivers",
  role: "Residential Painting",
  photo: "/images/projects/1.jpeg",
  ctaHref: "/contact",
  ctaLabel: "Chat to our home painting team →",
};

import type { Credential } from "../components/shared/CredentialRows";

export const CREDENTIALS: Credential[] = [
  {
    n: "01",
    title: "A commercial prep standard, applied to your home.",
    body: "We bring the same surface preparation we use on high rise body corporates, chloride rinse, crack repairs, to every residential job within five kilometres of the coast. Standard paint systems tend to fail on coastal homes within two to three years without that level of prep. Ours do not.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "Painter preparing a coastal home exterior on the Sunshine Coast",
  },
  {
    n: "02",
    title: "Haymes and Dulux, not hardware store products.",
    body: "We specify Haymes and Dulux commercial systems for residential work, because the difference in UV stability, salt resistance and adhesion is measurable. It is the gap between a finish that holds for ten years and one that starts chalking within two.",
    photo: "/images/projects/2.jpeg",
    photoAlt:
      "Haymes and Dulux paint systems applied to a Sunshine Coast home",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.svg", alt: "Dulux" },
    ],
  },
  {
    n: "03",
    title: "One project manager, from quote to handover.",
    body: "One person walks your job at the start and signs it off at the end. One phone number, no handoffs between a salesperson and a production team you have never actually met. The person who quotes your job is the person who runs it.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "Project manager on site at a Sunshine Coast residential painting job",
  },
  {
    n: "04",
    title: "An eight year written warranty.",
    body: "Issued in writing at handover. If anything fails due to our application within eight years, we come back and fix it, no questions and no arguments. Haymes and Dulux manufacturer warranties, up to fifteen years on qualifying systems, run separately and are registered in your name.",
    photo: "/images/projects/2.jpeg",
    photoAlt:
      "Residential painting warranty handover on the Sunshine Coast",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
];
