// app/data/navigationData.ts

import { cld } from "../lib/cloudinary";

export const servicesData = {
  painting: {
    name: "Painting",
    href: "/painting",
    description:
      "Professional interior and exterior painting for commercial, strata and residential properties on the Sunshine Coast. Quality finishes that actually last.",
    image: cld("painting-services", { width: 1000, quality: 85 }),
    subServices: [
      { label: "Exterior Painting", href: "/painting" },
      { label: "Interior Painting", href: "/painting" },
      { label: "Roof Coatings", href: "/painting" },
      { label: "Rope Access Painting", href: "/painting" },
      { label: "Render & Texture", href: "/painting" },
      { label: "Strata & Body Corporate", href: "/body-corporate-painting" },
      { label: "Colour Consulting", href: "/painting" },
    ],
  },
  building: {
    name: "Building Cleaning",
    href: "/external-cleaning",
    description:
      "Pressure washing, facade cleaning and complete building care for strata and commercial properties across the Sunshine Coast.",
    image: cld("nav-cleaning.png", { width: 1000, quality: 85 }),
    subServices: [
      { label: "Pressure Washing", href: "/external-cleaning" },
      { label: "Facade Cleaning", href: "/external-cleaning" },
      { label: "Render Cleaning", href: "/external-cleaning" },
      { label: "Graffiti Removal", href: "/external-cleaning" },
      { label: "Concrete Cleaning", href: "/external-cleaning" },
      { label: "Building Wash", href: "/external-cleaning" },
      { label: "Driveway Cleaning", href: "/external-cleaning" },
      { label: "Gutter Cleaning", href: "/external-cleaning" },
    ],
  },
  window: {
    name: "Window Cleaning",
    href: "/window-cleaning",
    description:
      "High rise and commercial window cleaning with full IRATA certification. Safe, professional and compliant, every time.",
    image: cld("nav-window.png", { width: 1000, quality: 85 }),
    subServices: [
      { label: "High Rise Windows", href: "/window-cleaning" },
      { label: "Rope Access", href: "/window-cleaning" },
      { label: "Commercial Windows", href: "/window-cleaning" },
      { label: "Strata Windows", href: "/window-cleaning" },
      { label: "Solar Panel Cleaning", href: "/window-cleaning" },
    ],
  },
  waterproofing: {
    name: "Waterproofing",
    href: "/waterproofing",
    description:
      "Expert waterproofing for balconies, roofs and wet areas on the Sunshine Coast, backed by long term warranties and proven protection.",
    image: cld("nav-waterproofing.png", { width: 1000, quality: 85 }),
    subServices: [
      { label: "Balcony Waterproofing", href: "/waterproofing" },
      { label: "Roof Waterproofing", href: "/waterproofing" },
      { label: "Bathroom Waterproofing", href: "/waterproofing" },
      { label: "Deck Waterproofing", href: "/waterproofing" },
      { label: "Leak Detection", href: "/waterproofing" },
      { label: "Membrane Systems", href: "/waterproofing" },
      { label: "Tanking", href: "/waterproofing" },
    ],
  },
  maintenance: {
    name: "Maintenance",
    href: "/maintenance",
    description:
      "Ongoing building maintenance and repair services that keep your Sunshine Coast property in top condition year round.",
    image: cld("nav-maintenance.png", { width: 1000, quality: 85 }),
    subServices: [
      { label: "Preventative Maintenance", href: "/maintenance" },
      { label: "Reactive Repairs", href: "/maintenance" },
      { label: "Gutter Cleaning", href: "/maintenance" },
      { label: "Minor Repairs", href: "/maintenance" },
      { label: "Scheduled Servicing", href: "/maintenance" },
      { label: "Emergency Repairs", href: "/maintenance" },
    ],
  },
  height: {
    name: "Height Safety",
    href: "/height-safety",
    description:
      "Complete height safety systems, certification and compliance for Sunshine Coast buildings, delivered by IRATA certified technicians.",
    image: cld("nav-height.png", { width: 1000, quality: 85 }),
    subServices: [
      { label: "Anchor Point Installation", href: "/height-safety" },
      { label: "Safety Line Systems", href: "/height-safety" },
      { label: "Annual Inspections", href: "/height-safety" },
      { label: "Compliance Certificates", href: "/height-safety" },
      { label: "Safety Training", href: "/height-safety" },
      { label: "IRATA Services", href: "/height-safety" },
      { label: "Rescue Plans", href: "/height-safety" },
    ],
  },
  inspections: {
    name: "Building Inspections",
    href: "/building-inspections",
    description:
      "Comprehensive facade and building condition inspections using rope access, drone and thermal imaging, with full condition reports, risk ratings and remediation schedules.",
    image: cld("nav-inspections.webp", { width: 1000, quality: 85 }),
    subServices: [
      { label: "Facade Inspections", href: "/building-inspections" },
      { label: "Drone Surveys", href: "/building-inspections" },
      { label: "Thermal Imaging", href: "/building-inspections" },
      { label: "Condition Reports", href: "/building-inspections" },
      { label: "Sinking Fund Reports", href: "/building-inspections" },
      { label: "Pre Purchase Inspections", href: "/building-inspections" },
      { label: "Remediation Scoping", href: "/building-inspections" },
    ],
  },
};

export const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export type ServiceKey = keyof typeof servicesData;
