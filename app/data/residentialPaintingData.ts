// app/data/residentialPaintingData.ts

import type { HeroSlide } from "../components/shared/ServiceHero";
import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Feature } from "../components/shared/ServiceFeatures";
import type { ServiceProject } from "../components/shared/ServiceProjects";
import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";
import type { InspectionStep } from "../components/shared/InspectionProcess";
import {
  PiClipboardText,
  PiHammer,
  PiPalette,
  PiPaintRoller,
  PiCheckCircle,
} from "react-icons/pi";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/projects/1.jpeg",
    alt: "Residential house painter on the Sunshine Coast — RAS-VERTEX",
  },
  {
    src: "/images/projects/2.jpeg",
    alt: "Exterior house painting Sunshine Coast — RAS-VERTEX",
  },
  {
    src: "/nav/painting.png",
    alt: "Interior and exterior residential painting — Sunshine Coast",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Residential painting and property maintenance — Sunshine Coast",
  },
  {
    src: "/nav/waterproofing.png",
    alt: "Residential painting and waterproofing — Sunshine Coast",
  },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Exterior House Painting",
    body: "Full exterior repaints for homes across the Sunshine Coast — weatherboard, timber, rendered walls, brick and fibre cement. We chloride-rinse coastal properties within 5km of the ocean and apply salt-bonded primers before any topcoat. The same preparation standard we use on high-rise body corporates, applied to your home.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Interior Painting",
    body: "Ceiling, walls, doors, windows, trims and feature walls. Low-VOC systems throughout — no fumes lingering for days. We work room by room around your family and your schedule, with dust containment and furniture protection as standard.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Roof Painting",
    body: "Colorbond, terracotta tile and concrete tile roof recoats. We pressure-wash, treat moss and lichen, prime and apply a commercial-grade topcoat — the same process we use on commercial buildings. Heat-reflective coatings available to reduce internal temperatures.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Deck & Timber Restoration",
    body: "Timber deck sanding, prep and re-coating with penetrating oils or UV-stable varnish systems. We assess the timber condition first — rotted boards replaced, gaps filled, cracks sealed before a drop of coating is applied.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Render & Texture Coatings",
    body: "Acrylic and polymer render systems for rendered homes. We repair all cracks before coating — including crack injection for movement cracks — so the finish lasts. No surface-bridging coats over structural cracks.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Pre-Sale Painting",
    body: "Interior and exterior refresh for vendors and agents across the Sunshine Coast. Most pre-sale jobs turn around in 5–10 business days. We work around open homes and settlement dates — and we know what makes a property photograph well.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Colour Consulting",
    body: "On-site sample blocks included on all exterior repaints. We've been painting Sunshine Coast homes long enough to know what works in coastal light, what fades, and what holds up against UV and salt air. We'll tell you honestly.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
];

export const PROCESS_STEPS: InspectionStep[] = [
  {
    n: "01",
    title: "Site visit & scope confirmation",
    body: "Your project manager inspects the property, confirms surfaces, discusses colours, and identifies any repairs required. A fixed written quote is issued within 48 hours.",
    icon: PiClipboardText,
  },
  {
    n: "02",
    title: "Surface preparation",
    body: "All surfaces are cleaned, sanded, and repaired as required. This includes mould treatment, crack repairs, caulking, and substrate preparation prior to coating.",
    icon: PiHammer,
  },
  {
    n: "03",
    title: "Colour selection",
    body: "We confirm your colour choices on site using sample patches in natural light before any full application begins.",
    icon: PiPalette,
  },
  {
    n: "04",
    title: "Painting & application",
    body: "All coatings are applied in sequence — primer, undercoat, and finish coats — in line with manufacturer specifications, with appropriate curing time between stages.",
    icon: PiPaintRoller,
  },
  {
    n: "05",
    title: "Completion & handover",
    body: "Final walkthrough with your project manager. Any required touch-ups are completed before sign-off. A written workmanship warranty is issued at handover.",
    icon: PiCheckCircle,
  },
];

export const FEATURES: Feature[] = [
  {
    n: "01",
    title: "Commercial prep standard",
    body: "The same surface preparation we apply to high-rise body corporates — chloride rinse, salt-bonded primer, crack repairs — applied to every residential job within 5km of the coast.",
  },
  {
    n: "02",
    title: "Haymes & Dulux systems",
    body: "We specify Haymes and Dulux commercial-grade systems for residential work — not hardware store products. The difference in coastal durability is measurable.",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.svg", alt: "Dulux" },
    ],
  },
  {
    n: "03",
    title: "One project manager",
    body: "One person from quote to handover. They walk the job with you at the start and sign it off with you at the end. One number, no handoffs.",
  },
  {
    n: "04",
    title: "5-year written warranty",
    body: "Workmanship warranty issued in writing at handover. If anything fails due to our application within five years, we come back and fix it. No arguments.",
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "QBCC licensed, $20M public liability, full workers' comp. You're covered if anything goes wrong — which it won't — but it matters.",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
];

export const PROJECTS: ServiceProject[] = [
  {
    suburb: "Moffat Beach",
    name: "Coastal Home Exterior Repaint",
    type: "Residential · 4-coat Haymes system",
    system:
      "Haymes Premium Exterior · salt-bonded primer · elastomeric topcoat",
    image: "/images/projects/1.jpeg",
    alt: "Moffat Beach coastal home exterior repaint — RAS-VERTEX",
  },
  {
    suburb: "Buderim",
    name: "Full Interior & Exterior",
    type: "Residential · full repaint",
    system: "Dulux Wash & Wear interior · Weathershield exterior",
    image: "/images/projects/2.jpeg",
    alt: "Buderim residential full interior and exterior repaint — RAS-VERTEX",
  },
  {
    suburb: "Noosa Heads",
    name: "Pre-Sale Refresh",
    type: "Residential · pre-sale",
    system: "Interior + exterior refresh · 7 days to settlement",
    image: "/images/projects/1.jpeg",
    alt: "Noosa Heads pre-sale painting refresh — RAS-VERTEX",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Should I paint my house myself or hire a professional painter on the Sunshine Coast?",
    a: "For small interior touch-ups, DIY is fine. For any exterior work on the Sunshine Coast — particularly within 5km of the ocean — professional preparation is the difference between a finish that lasts 10 years and one that starts peeling within two. Salt air, UV intensity and humidity mean coastal surfaces require chloride treatment, salt-bonded primers and commercial-grade topcoats that aren't available through hardware stores. A professional job also comes with a written warranty — a DIY repaint has none.",
  },
  {
    q: "What type of paint do you use for Sunshine Coast homes?",
    a: "Haymes and Dulux commercial systems for all exterior work. Within 5km of the coast, we use salt-bonded primers and elastomeric topcoats as standard — the same systems we apply to body corporate and commercial buildings. For interiors, low-VOC Dulux Wash & Wear or equivalent, selected by sheen level for the surface and room. We don't use budget products on residential work.",
  },
  {
    q: "What's the best time of year to paint a house on the Sunshine Coast?",
    a: "The dry season — May through October — is optimal. Lower humidity means faster drying times, fewer days lost to rain, and better adhesion on exterior surfaces. That said, we paint year-round on the Sunshine Coast and manage around the weather. We monitor forecasts and won't apply exterior coats if rain is expected within the cure window.",
  },
  {
    q: "How long does a full exterior house repaint take?",
    a: "For a typical 3–4 bedroom Sunshine Coast home, allow 3–5 days on-site for preparation and painting. Larger homes with complex architecture, extensive timber or significant substrate repairs will take longer. We give you a realistic timeline at quote stage — not an optimistic one that gets revised halfway through.",
  },
  {
    q: "What warranty do you provide on residential painting?",
    a: "A 5-year written workmanship warranty on all painting work, issued at handover. It covers adhesion failure, peeling and blistering caused by our application. Haymes and Dulux manufacturer warranties run separately — up to 15 years on qualifying exterior systems — and are registered in your name. If anything fails within the warranty period, we come back and fix it.",
  },
  {
    q: "Do you also handle repairs before painting?",
    a: "Yes — crack repairs, render patching, caulking, rot replacement and substrate preparation are all part of our scope. We don't paint over problems. If we find significant structural issues during prep, we'll tell you before we proceed so there are no surprises.",
  },
  {
    q: "Do you do pre-sale painting on the Sunshine Coast?",
    a: "Yes. Quick-turn interior and exterior refreshes for agents and vendors — most jobs completed in 5–10 business days. We work around open homes and settlement dates. We've painted enough Sunshine Coast properties before sale to know what makes a difference to buyers and what photographs well.",
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
    title: "Commercial prep standard — on your home.",
    body: "The same surface preparation we apply to high-rise body corporates — chloride rinse, salt-bonded primer, crack repairs — applied to every residential job within 5km of the coast. Standard paint systems fail on coastal homes within two to three years without it. Ours don't.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "RAS-VERTEX painter preparing a coastal home exterior on the Sunshine Coast",
  },
  {
    n: "02",
    title: "Haymes and Dulux. Not hardware store products.",
    body: "We specify Haymes Premium Exterior and Dulux Weathershield commercial systems for residential work. The difference in UV stability, salt resistance and adhesion is measurable — and it's the difference between a finish that holds for ten years and one that starts chalking within two.",
    photo: "/images/projects/2.jpeg",
    photoAlt:
      "Haymes and Dulux paint systems applied to a Sunshine Coast home by RAS-VERTEX",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.svg", alt: "Dulux" },
    ],
  },
  {
    n: "03",
    title: "One project manager, from quote to handover.",
    body: "One person walks your job at the start and signs it off at the end. One phone number. No handoffs between a salesperson and a production team you've never met. The person who quotes your job is the person who runs it.",
    photo: "/images/projects/1.jpeg",
    photoAlt:
      "RAS-VERTEX project manager on site at a Sunshine Coast residential painting job",
  },
  {
    n: "04",
    title: "Five-year written warranty.",
    body: "Issued in writing at handover. If anything fails due to our application within five years, we come back and fix it — no questions, no arguments. Haymes and Dulux manufacturer warranties (up to 15 years on qualifying systems) run separately and are registered in your name.",
    photo: "/images/projects/2.jpeg",
    photoAlt:
      "RAS-VERTEX residential painting warranty handover on the Sunshine Coast",
    logos: [{ src: "/images/associations/qbcc.png", alt: "QBCC Licensed" }],
  },
];
