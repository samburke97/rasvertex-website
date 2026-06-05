// app/components/shared/PhotoGrid.tsx

import Image from "next/image";
import styles from "./PhotoGrid.module.css";

const DATA = {
  heading: "Recent work across the Coast.",
  supporting:
    "From beachfront towers to body-corporate complexes, Noosa to Caloundra.",
  caption:
    "A selection of recent projects across the Sunshine Coast. More available on request.",
  images: [
    {
      src: "/images/projects/1.jpeg",
      alt: "RAS-VERTEX crew on high-rise facade, Maroochydore",
    },
    {
      src: "/images/projects/2.jpeg",
      alt: "Rope access window cleaning, Mooloolaba waterfront",
    },
    {
      src: "/nav/height.png",
      alt: "Height safety technician on rope, Sunshine Coast",
    },
  ],
} as const;

interface PhotoGridProps {
  showHeader?: boolean;
}

export default function PhotoGrid({ showHeader = true }: PhotoGridProps) {
  const { heading, supporting, caption, images } = DATA;

  return (
    <section
      className={styles.section}
      aria-labelledby={showHeader ? "photogrid-heading" : undefined}
    >
      {showHeader && (
        <div className={styles.header}>
          <h2 id="photogrid-heading">{heading}</h2>
          <div className={styles.supporting}>
            <p className="p-soft">{supporting}</p>
          </div>
        </div>
      )}

      <div className={styles.grid} role="list" aria-label="Project photos">
        <div className={styles.large} role="listitem">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            sizes="(max-width: 860px) 100vw, 58vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={styles.stack}>
          <div className={styles.small} role="listitem">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              sizes="(max-width: 860px) 100vw, 38vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.small} role="listitem">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              sizes="(max-width: 860px) 100vw, 38vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {caption && <p className={`${styles.caption} p-soft`}>{caption}</p>}
    </section>
  );
}
