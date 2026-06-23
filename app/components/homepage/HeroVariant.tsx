// app/components/homepage/HeroVariant.tsx

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

export default function HeroVariant() {
  return (
    <header className={styles.hero} aria-labelledby="hero-variant-heading">
      <div className={styles.headerRow}>
        <div className={styles.intro}>
          <h1 id="hero-variant-heading" className={styles.headline}>
            Higher
            <br />
            Standards.
            <br />
          </h1>

          <div className={styles.right}>
            <div className={styles.ratingBadge}>
              <svg
                className={styles.googleIcon}
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="var(--navy)"
                aria-hidden="true"
              >
                <path d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.71-2.44 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.06C3.24 21.3 7.26 24 12 24zM5.27 14.3c-.24-.71-.38-1.46-.38-2.3s.14-1.59.38-2.3V6.64H1.27A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.27 5.36l4-3.06zM12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.24 2.7 1.27 6.64l4 3.06C6.22 6.86 8.87 4.75 12 4.75z" />
              </svg>
              <div className={styles.ratingText}>
                <span className={styles.ratingTitle}>Google Rating</span>
                <div className={styles.ratingScoreRow}>
                  <span className={styles.ratingScore}>4.9</span>
                  <div className={styles.stars} aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={styles.star}
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        fill="var(--navy)"
                      >
                        <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.6L12 17.6l-5.94 3.17 1.13-6.6-4.8-4.68 6.64-.97L12 2.5z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className={styles.ratingCount}>Based on 50+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceCarousel slides={SERVICE_SLIDES} />
    </header>
  );
}
