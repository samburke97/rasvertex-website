// app/data/projectsData.ts
// Add new projects here — the bento grid picks them up automatically.

export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  category: string;
  scope: string;
  image: string;
  imageAlt: string;
  // Bento layout hint — controls cell size in the grid
  size: "wide" | "tall" | "square";
}

export const PROJECTS: Project[] = [
  {
    id: "racv-noosa",
    name: "Full Resort Maintenance Program",
    client: "RACV Noosa Resort",
    location: "Noosa Heads, QLD",
    category: "Maintenance",
    scope: "Rope access · painting · waterproofing · ongoing",
    image: "/images/projects/1.jpeg",
    imageAlt:
      "RACV Noosa Resort — full-complex maintenance program by RAS-VERTEX",
    size: "wide",
  },
  {
    id: "mooloolaba-highrise",
    name: "High-Rise Facade Repaint",
    client: "Body Corporate",
    location: "Mooloolaba, QLD",
    category: "Painting",
    scope: "Rope access · exterior repaint · 18 storeys",
    image: "/images/projects/2.jpeg",
    imageAlt: "Mooloolaba high-rise exterior repaint by RAS-VERTEX",
    size: "tall",
  },
  {
    id: "coolum-waterproofing",
    name: "Balcony Membrane Restoration",
    client: "Strata Committee",
    location: "Coolum Beach, QLD",
    category: "Waterproofing",
    scope: "Membrane replacement · 48 balconies",
    image: "/nav/waterproofing.png",
    imageAlt: "Balcony waterproofing membrane restoration — Coolum Beach",
    size: "square",
  },
  {
    id: "maroochydore-height",
    name: "Anchor Point Certification",
    client: "Commercial Building",
    location: "Maroochydore, QLD",
    category: "Height Safety",
    scope: "AS/NZS 1891 · full anchor point audit",
    image: "/nav/height.png",
    imageAlt: "Height safety anchor point certification — Maroochydore",
    size: "square",
  },
  {
    id: "noosa-cleaning",
    name: "Post-Construction Clean",
    client: "Mosaic Property Group",
    location: "Noosa, QLD",
    category: "Building Cleaning",
    scope: "Window cleaning · facade wash · 12 storeys",
    image: "/nav/maintenance.png",
    imageAlt: "Post-construction building clean — Noosa development",
    size: "wide",
  },
  {
    id: "caloundra-remedial",
    name: "Spalling Concrete Remediation",
    client: "Body Corporate",
    location: "Caloundra, QLD",
    category: "Maintenance",
    scope: "Rope access · carbon fibre injection · re-bar replacement",
    image: "/images/projects/rope-access.png",
    imageAlt: "Spalling concrete remediation at a Caloundra strata building",
    size: "tall",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  ...new Set(PROJECTS.map((p) => p.category)),
];
