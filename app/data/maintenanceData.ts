import type { AccordionService } from "../components/shared/ServiceAccordion";
import type { Project } from "../components/shared/PageProjects";
import type { FAQItem, FAQContact } from "../components/shared/PageFAQ";
import type { HeroSlide } from "../components/shared/PageHero";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/projects/1.jpeg",
    alt: "Rope access maintenance Mooloolaba high-rise",
  },
  { src: "/images/projects/2.jpeg", alt: "Building inspection Sunshine Coast" },
  { src: "/nav/maintenance.png", alt: "Commercial maintenance Sunshine Coast" },
  { src: "/assets/bodycorporate.png", alt: "Body corporate maintenance" },
  { src: "/nav/height.png", alt: "Height safety and rope access" },
];

export const SERVICES: AccordionService[] = [
  {
    label: "Sign Installations",
    body: "Precision sign installation for commercial and strata buildings across the Sunshine Coast. Whether it's a storefront identity or high-level building signage requiring rope access, we ensure secure placement and a result that lasts.",
    photo: "/nav/maintenance.png",
    href: "/contact",
  },
  {
    label: "Roof Restoration",
    body: "Thorough inspection, personalised restoration plan, precision repairs. We specialise in revitalising weathered Sunshine Coast roofs — transforming them into durable, eye-catching features resilient against Queensland's salt air and UV.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Concrete & Render Repairs",
    body: "From simple hairline fractures to full re-bar replacement. We use modern injection treatment equipment to revitalise worn concrete and render — repairing cracks, chips and imperfections to restore structural integrity and aesthetic appeal.",
    photo: "/assets/bodycorporate.png",
    href: "/contact",
  },
  {
    label: "Leak Detection & Repair",
    body: "Thermal imaging, drone inspection and on-site assessment to locate hidden leaks before they cause serious damage. We deploy targeted repair strategies to seal leaks efficiently — protecting your asset long-term.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Facade Inspections",
    body: "Comprehensive facade inspections using aerial drones combined with traditional on-site access. Detailed condition reports, accurate quotes and maintenance planning — addressing potential issues before they escalate.",
    photo: "/nav/height.png",
    href: "/contact",
  },
  {
    label: "Remedial Works",
    body: "Full scope remedial services including spalling concrete, expansion joint replacement, waterproof membrane repairs and caulking. Every remedial job is scoped, documented and warranted.",
    photo: "/assets/commercial.png",
    href: "/contact",
  },
];

export const PROJECTS: Project[] = [
  {
    suburb: "Maroochydore",
    name: "Beachfront Towers Facade Inspection",
    type: "Body Corporate · 18 storeys",
    system: "Drone + rope access · full condition report",
    image: "/images/projects/1.jpeg",
  },
  {
    suburb: "Mooloolaba",
    name: "Esplanade High-Rise Concrete Repairs",
    type: "Commercial · 12 storeys",
    system: "Carbon fibre injection · re-bar replacement",
    image: "/images/projects/2.jpeg",
  },
  {
    suburb: "Noosa Heads",
    name: "Hastings Street Roof Restoration",
    type: "Commercial · resort complex",
    system: "Full membrane replacement · thermal scan",
    image: "/nav/maintenance.png",
  },
  {
    suburb: "Caloundra",
    name: "Kings Beach Strata Remedials",
    type: "Body Corporate · 24 units",
    system: "Expansion joints · caulking · sealant",
    image: "/assets/bodycorporate.png",
  },
  {
    suburb: "Kawana",
    name: "Bokarina Boulevard Sign Installation",
    type: "Commercial · mixed-use",
    system: "Rope access · structural anchoring",
    image: "/nav/height.png",
  },
  {
    suburb: "Coolum Beach",
    name: "Leak Detection — Boutique Resort",
    type: "Commercial · hospitality",
    system: "Thermal imaging · targeted sealant repair",
    image: "/assets/commercial.png",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Why is routine maintenance crucial for body corporates and strata buildings?",
    a: "Routine maintenance prevents costly repairs, extends the lifespan of your property and ensures safety compliance. Our proactive inspections identify and address issues early — saving you money in the long run and maintaining a safe environment for occupants.",
  },
  {
    q: "What are the most common maintenance services for commercial properties on the Sunshine Coast?",
    a: "The most common services include routine inspections, roof restorations, leak detection, concrete and render repairs, and signage installations. We use rope access, EWPs and scaffolding to deliver cost-effective results with minimal disruption.",
  },
  {
    q: "Do you offer maintenance plans for body corporates and commercial properties?",
    a: "Yes — we provide tailored maintenance plans across all our service offerings including painting, cleaning, maintenance, height safety and waterproofing. Our team works closely with property managers to deliver solutions suited to your building's unique needs.",
  },
  {
    q: "What is involved in roof restoration and repair services?",
    a: "Our process starts with a detailed inspection to assess your roof's condition. We develop a custom plan that may include cleaning, sealing, repairs and protective coatings. Using rope access, we reach every part of your roof for thorough restoration.",
  },
  {
    q: "Will maintenance work cause disruption to residents?",
    a: "Disruption is minimal and project-dependent. We're experienced in working with body corporates and strata properties — using rope access techniques to complete tasks with minimal impact. Thorough planning and communication with property managers ensures work is completed smoothly.",
  },
  {
    q: "How do you conduct facade inspections?",
    a: "Our arsenal combines aerial drones with traditional on-site rope access inspections. This allows us to provide comprehensive condition reports, accurate quotes and maintenance planning — identifying issues that would be missed from ground level alone.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Maintenance Lead",
  email: "team@rasvertex.com.au",
  ctaLabel: "Chat to Hylton →",
  photo: "/images/people/caro.jpg",
};
