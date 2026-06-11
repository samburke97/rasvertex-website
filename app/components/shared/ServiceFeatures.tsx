// app/components/shared/ServiceFeatures.tsx

"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
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
  /** Optional: if provided, clicking prev/next will scroll to this ref */
  scrollTargetRef?: React.RefObject<HTMLElement>;
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

  // Track visible page of features (3 per page)
  const pageRef = useRef(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const CELLS_PER_PAGE = 3;
  const totalFeaturePages = Math.ceil(features.length / CELLS_PER_PAGE);

  const scrollPrev = useCallback(() => {
    pageRef.current = Math.max(0, pageRef.current - 1);
    scrollToGrid();
  }, []);

  const scrollNext = useCallback(() => {
    pageRef.current = Math.min(totalFeaturePages - 1, pageRef.current + 1);
    scrollToGrid();
  }, [totalFeaturePages]);

  function scrollToGrid() {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <section className={styles.section} aria-label={ariaLabel}>
      <div className={styles.grid} ref={gridRef}>
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

      {/* ── Arrow buttons — bottom-right, matching homepage carousel ── */}
      <div className={styles.nav} role="group" aria-label="Browse features">
        <button
          className={styles.navBtn}
          onClick={scrollPrev}
          aria-label="Previous features"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9.25"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11.5 6.5L8 10L11.5 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={styles.navBtn}
          onClick={scrollNext}
          aria-label="Next features"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9.25"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8.5 6.5L12 10L8.5 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
