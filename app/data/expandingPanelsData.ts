import { PanelData } from "../components/homepage/Expandingpanels";

// RAS-VERTEX main panels for homepage
export const mainPanels: PanelData[] = [
  {
    id: "higher-standards",
    subtitle: "[ THE SUNSHINE COAST'S PARTNER ]",
    title: "ANY BUILDING, EVERY HEIGHT",
    image: "/images/panels/higher.png",
    buttons: [
      {
        text: "Our Services",
        href: "/services",
        variant: "primary",
      },
      {
        text: "Free Quote",
        href: "/contact",
        variant: "secondary",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Comprehensive property maintenance solutions for commercial buildings. From office complexes to retail spaces, we deliver professional service that keeps your business running smoothly.",
    image: "/images/panels/commercial.png",
  },
  {
    id: "body-corporate",
    title: "Body Corporate",
    description:
      "Specialist maintenance services for body corporate properties. We understand strata requirements and deliver reliable, compliant solutions for multi-unit developments across the Sunshine Coast.",
    image: "/images/panels/bodycorporate.png",
  },
  {
    id: "residential",
    title: "Residential",
    description:
      "Quality property maintenance for homeowners. From coastal homes to suburban properties, we provide trusted services that protect and enhance your most valuable asset.",
    image: "/images/panels/residential.png",
  },
];
