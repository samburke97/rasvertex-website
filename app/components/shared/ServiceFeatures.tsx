// app/components/shared/ServiceFeatures.tsx

"use client";

import Image from "next/image";
import styles from "./ServiceFeatures.module.css";

export interface FeatureLogo {
  src: string;
  alt: string;
}

export interface Feature {
  n: string;
  title: string;
  body: string;
  logos?: FeatureLogo[];
}

interface ServiceFeaturesProps {
  features: Feature[];
  displayText?: string;
  /** 0-based index at which to insert the display cell. Default: 3 */
  displayCellIndex?: number;
  ariaLabel?: string;
}

export default function ServiceFeatures({
  features,
  displayText = "Higher\nStandards.",
  displayCellIndex = 3,
  ariaLabel = "Service credentials and standards",
}: ServiceFeaturesProps) {
  // Splice the display cell into the features array at the given index
  const cells: Array<Feature | null> = [...features];
  cells.splice(displayCellIndex, 0, null);

  return (
    <section className={styles.section} aria-label={ariaLabel}>
      <div className={styles.grid}>
        {cells.map((f, i) =>
          f === null ? (
            <div
              key="display-cell"
              className={styles.heroCell}
              aria-hidden="true"
            >
              <span className={styles.heroText}>
                {displayText.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < displayText.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ) : (
            <div
              key={f.n}
              className={`${styles.feature} ${i === 0 ? styles.featureDefault : ""}`}
            >
              <span className={styles.num} aria-hidden="true">
                {f.n}
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.body}>{f.body}</p>
                {f.logos && f.logos.length > 0 && (
                  <div className={styles.logos} aria-label="Partner logos">
                    {f.logos.map((l) => (
                      <div key={l.alt} className={styles.logoWrap}>
                        <Image
                          src={l.src}
                          alt={l.alt}
                          fill
                          style={{
                            objectFit: "contain",
                            objectPosition: "left center",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
