export const servicesData = {
  painting: {
    name: "Painting",
    href: "/painting",
    description:
      "Professional interior and exterior painting services for commercial and residential properties. Quality finishes that last.",
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
      "Comprehensive building maintenance and cleaning services. Pressure washing, facade cleaning, and complete building care.",
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
      "High-rise and commercial window cleaning with full IRATA certification. Safe, professional, and compliant services.",
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
      "Expert waterproofing solutions for balconies, roofs, and wet areas. Long-term warranties and proven protection.",
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
      "Building Inspections",
      "Gutter Cleaning",
      "Minor Repairs",
      "Scheduled Servicing",
      "Emergency Repairs",
    ],
  },
  height: {
    name: "Height Safety",
    href: "/services/height-safety",
    description:
      "Complete height safety systems, certification, and compliance. IRATA certified technicians and full safety compliance.",
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
};

export const companyMain = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Project Portfolio", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
];

export const companySecondary = [
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Get a Quote", href: "/quote" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
];

export const locations = [
  { name: "Sunshine Coast", href: "/locations/sunshine-coast" },
  { name: "Brisbane", href: "/locations/brisbane" },
  { name: "Gold Coast", href: "/locations/gold-coast" },
];

export type ServiceKey = keyof typeof servicesData;
