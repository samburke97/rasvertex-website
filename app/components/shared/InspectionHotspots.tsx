// app/components/shared/InspectionHotspots.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./InspectionHotspots.module.css";

export interface Hotspot {
  n: string;
  x: string;
  y: string;
  title: string;
  priority: "1" | "2" | "3";
  priorityLabel: string;
  body: string;
  consequence: string;
}

interface InspectionHotspotsProps {
  heading: React.ReactNode;
  lede: string;
  photo: string;
  photoAlt: string;
  hotspots: Hotspot[];
  headingId?: string;
}

const PRIORITY_COPY: Record<string, string> = {
  "1": "Priority 1 — Immediate action",
  "2": "Priority 2 — Within 12 months",
  "3": "Priority 3 — Monitor annually",
};

export default function InspectionHotspots({
  heading,
  lede,
  photo,
  photoAlt,
  hotspots,
  headingId = "hotspots-heading",
}: InspectionHotspotsProps) {
  const [active, setActive] = useState<string>(hotspots[0]?.n ?? "");
  const activeHotspot = hotspots.find((h) => h.n === active);

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <h2 id={headingId}>{heading}</h2>
        <p className="p-soft">{lede}</p>
      </div>

      {/* ── Two-col body — mirrors ServiceAccordion ── */}
      <div className={styles.inner}>
        {/* Left — sticky photo with pins overlaid */}
        <div className={styles.left}>
          <div className={styles.photoWrap} aria-hidden="true">
            <Image
              src={photo}
              alt={photoAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 860px) 100vw, 40vw"
              priority
            />
            {hotspots.map((h) => (
              <button
                key={h.n}
                className={`${styles.pin} ${active === h.n ? styles.pinActive : ""} ${styles[`priority${h.priority}`]}`}
                style={{ left: h.x, top: h.y }}
                onClick={() => setActive(h.n)}
                aria-label={`Finding ${h.n}: ${h.title}`}
              >
                <span className={styles.pinNum}>{h.n}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right — accordion */}
        <div className={styles.right}>
          {/* Legend */}
          <div className={styles.legend} aria-label="Priority key">
            <span className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dot1}`} />
              P1 — Immediate action
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dot2}`} />
              P2 — Within 12 months
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dot3}`} />
              P3 — Monitor annually
            </span>
          </div>
          <div
            className={styles.list}
            role="tablist"
            aria-label="Inspection findings"
          >
            {hotspots.map((h) => {
              const isOpen = active === h.n;
              return (
                <div
                  key={h.n}
                  className={`${styles.item} ${isOpen ? styles.open : ""} ${isOpen ? styles[`p${h.priority}`] : ""}`}
                >
                  <button
                    className={styles.row}
                    role="tab"
                    aria-selected={isOpen}
                    aria-expanded={isOpen}
                    onClick={() => setActive(h.n)}
                  >
                    <div className={styles.rowLeft}>
                      <span
                        className={`${styles.pinInline} ${styles[`priority${h.priority}`]} ${isOpen ? styles.pinInlineActive : ""}`}
                        aria-hidden="true"
                      >
                        {h.n}
                      </span>
                      <span className={styles.label}>{h.title}</span>
                    </div>
                    <span
                      className={`${styles.badge} ${styles[`badge${h.priority}`]}`}
                    >
                      P{h.priority}
                    </span>
                  </button>

                  <div className={styles.panel}>
                    <div className={styles.panelInner}>
                      <p className="p-soft">{h.body}</p>
                      <div className={styles.consequence}>
                        <p className={styles.consequenceLabel}>
                          If left unaddressed
                        </p>
                        <p className={styles.consequenceBody}>
                          {h.consequence}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
