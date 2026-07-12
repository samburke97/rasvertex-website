// app/components/homepage/HeroVariant.tsx

import styles from "./HeroVariant.module.css";
import ServiceCarousel from "./ServiceCarousel";
import { cld, cldVideo } from "../../lib/cloudinary";

const SERVICE_SLIDES = [
  {
    src: cld("the-work", { width: 1200 }),
    mediaType: "image" as const,
    alt: "Painting",
    title: "Painting",
    href: "/painting",
    industries: ["Commercial", "Body Corporate", "Residential"],
  },
  {
    src: cldVideo("cleaning", { width: 800 }),
    mediaType: "video" as const,
    alt: "Building Cleaning",
    title: "Building Cleaning",
    href: "/external-cleaning",
    industries: ["Commercial", "Body Corporate"],
  },
  {
    src: cld("window-cleaning", { width: 1200 }),
    mediaType: "image" as const,
    alt: "Window Cleaning",
    title: "Window Cleaning",
    href: "/window-cleaning",
    industries: ["Commercial", "Body Corporate", "Residential"],
  },
  {
    src: cld("waterproofing", { width: 1200 }),
    mediaType: "image" as const,
    alt: "Waterproofing",
    title: "Waterproofing",
    href: "/waterproofing",
    industries: ["Commercial", "Body Corporate"],
  },
  {
    src: cld("maintenance", { width: 1200 }),
    mediaType: "image" as const,
    alt: "Maintenance",
    title: "Maintenance",
    href: "/maintenance",
    industries: ["Commercial", "Body Corporate"],
  },
  {
    src: cld("nav-height.png", { width: 1200 }),
    mediaType: "image" as const,
    alt: "Height Safety",
    title: "Height Safety",
    href: "/height-safety",
    industries: ["Commercial", "Body Corporate", "Residential"],
  },
  {
    src: cld("nav-inspections.webp", { width: 1200 }),
    mediaType: "image" as const,
    alt: "Building Inspections",
    title: "Building Inspections",
    href: "/building-inspections",
    industries: ["Commercial", "Body Corporate"],
  },
];

interface HeroVariantProps {
  showCarousel?: boolean;
}

export { SERVICE_SLIDES };

export default function HeroVariant({ showCarousel = true }: HeroVariantProps) {
  return (
    <header className={styles.hero} aria-label="Our services">
      {showCarousel && <ServiceCarousel slides={SERVICE_SLIDES} />}
    </header>
  );
}
