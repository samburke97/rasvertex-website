// app/data/navigationData.ts

export const servicesData = {
  painting: {
    name: "Painting",
    href: "/painting",
    description:
      "Professional interior and exterior painting for commercial, strata and residential properties. Quality finishes that last.",
    image: "/nav/painting.png",
    subServices: [
      "Interior Painting",
      "Exterior Painting",
      "Heritage Painting",
      "Colour Consulting",
      "Pre-Sale Painting",
      "Strata Painting",
      "Render Painting",
      "Roof Painting",
    ],
  },
  building: {
    name: "Building Cleaning",
    href: "/cleaning",
    description:
      "Pressure washing, facade cleaning and complete building care for strata and commercial properties.",
    image: "/nav/cleaning.png",
    subServices: [
      "Pressure Washing",
      "Facade Cleaning",
      "Render Cleaning",
      "Graffiti Removal",
      "Concrete Cleaning",
      "Building Wash",
      "Driveway Cleaning",
    ],
  },
  window: {
    name: "Window Cleaning",
    href: "/cleaning",
    description:
      "High-rise and commercial window cleaning with full IRATA certification. Safe, professional and compliant.",
    image: "/nav/window.png",
    subServices: [
      "High-Rise Windows",
      "Rope Access",
      "Commercial Windows",
      "Strata Windows",
      "Solar Panel Cleaning",
      "Gutter Cleaning",
    ],
  },
  waterproofing: {
    name: "Waterproofing",
    href: "/waterproofing",
    description:
      "Expert waterproofing for balconies, roofs and wet areas. Long-term warranties and proven protection.",
    image: "/nav/waterproofing.png",
    subServices: [
      "Balcony Waterproofing",
      "Roof Waterproofing",
      "Bathroom Waterproofing",
      "Deck Waterproofing",
      "Leak Detection",
      "Membrane Systems",
      "Tanking",
    ],
  },
  maintenance: {
    name: "Maintenance",
    href: "/maintenance",
    description:
      "Ongoing building maintenance and repair services to keep your property in top condition year-round.",
    image: "/nav/maintenance.png",
    subServices: [
      "Preventative Maintenance",
      "Reactive Repairs",
      "Gutter Cleaning",
      "Minor Repairs",
      "Scheduled Servicing",
      "Emergency Repairs",
    ],
  },
  height: {
    name: "Height Safety",
    href: "/height-safety",
    description:
      "Complete height safety systems, certification and compliance. IRATA certified technicians.",
    image: "/nav/height.png",
    subServices: [
      "Anchor Point Installation",
      "Safety Line Systems",
      "Annual Inspections",
      "Compliance Certificates",
      "Safety Training",
      "IRATA Services",
      "Rescue Plans",
    ],
  },
  inspections: {
    name: "Building Inspections",
    href: "/building-inspections",
    description:
      "Comprehensive facade and building condition inspections using rope access, drone and thermal imaging. Full condition reports with risk ratings and remediation schedules.",
    image: "/nav/maintenance.png",
    subServices: [
      "Facade Inspections",
      "Drone Surveys",
      "Thermal Imaging",
      "Condition Reports",
      "Sinking Fund Reports",
      "Pre-Purchase Inspections",
      "Remediation Scoping",
    ],
  },
};

export const companyLinks = [
  { name: "About Us", href: "/company" },
  { name: "Careers", href: "/careers" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export const companySecondary = [
  { name: "Contact", href: "/contact" },
  { name: "Sunshine Coast", href: "/locations/sunshine-coast" },
];

export type ServiceKey = keyof typeof servicesData;
