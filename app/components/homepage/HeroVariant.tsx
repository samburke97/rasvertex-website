// app/components/homepage/HeroVariant.tsx

import Link from "next/link";
import styles from "./HeroVariant.module.css";
import ServiceCarousel from "./ServiceCarousel";

const SERVICE_SLIDES = [
  {
    src: "/videos/painting.mp4",
    mediaType: "video" as const,
    alt: "Painting",
    title: "Painting",
    href: "/painting",
  },
  {
    src: "/nav/cleaning.png",
    mediaType: "image" as const,
    alt: "Building Cleaning",
    title: "Building Cleaning",
    href: "/cleaning",
  },
  {
    src: "/videos/cleaning.mp4",
    mediaType: "video" as const,
    alt: "Window Cleaning",
    title: "Window Cleaning",
    href: "/cleaning",
  },
  {
    src: "/nav/waterproofing.png",
    mediaType: "image" as const,
    alt: "Waterproofing",
    title: "Waterproofing",
    href: "/waterproofing",
  },
  {
    src: "/nav/maintenance.png",
    mediaType: "image" as const,
    alt: "Maintenance",
    title: "Maintenance",
    href: "/maintenance",
  },
  {
    src: "/nav/height.png",
    mediaType: "image" as const,
    alt: "Height Safety",
    title: "Height Safety",
    href: "/height-safety",
  },
  {
    src: "/images/projects/1.jpeg",
    mediaType: "image" as const,
    alt: "Building Inspections",
    title: "Building Inspections",
    href: "/building-inspections",
  },
];

interface HeroVariantProps {
  showCarousel?: boolean;
}

export { SERVICE_SLIDES };

export default function HeroVariant({ showCarousel = true }: HeroVariantProps) {
  return (
    <header className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.top}>
        <h1 id="hero-heading" className={styles.headline}>
          Higher
          <br />
          Standards.
        </h1>

        <div className={styles.topRight}>
          <h3 className={styles.subheading}>25+ years on the Sunshine Coast.</h3>
          <p className="p-soft">
            Complete property maintenance for commercial, body corporate, and strata across the Sunshine Coast.
          </p>
          <Link href="/company" className={styles.learnMore}>
            Learn more about RAS-VERTEX →
          </Link>
        </div>
      </div>

      {showCarousel && <ServiceCarousel slides={SERVICE_SLIDES} />}
    </header>
  );
}
