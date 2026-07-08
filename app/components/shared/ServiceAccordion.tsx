// app/components/shared/ServiceAccordion.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceAccordion.module.css";

export interface AccordionService {
  label: string;
  body: string;
  photo: string;
  href: string;
}

interface ServiceAccordionProps {
  heading: React.ReactNode;
  /** Lede paragraph rendered under the heading, above the photo + accordion body */
  paragraph?: string;
  /** Plain text version for aria-label — required when heading is JSX */
  ariaLabel?: string;
  ctaLabel?: string | null;
  ctaHref?: string;
  services: AccordionService[];
  headingId?: string;
}

export default function ServiceAccordion({
  heading,
  paragraph,
  ariaLabel,
  ctaLabel,
  ctaHref = "/contact",
  services,
  headingId = "accordion-heading",
}: ServiceAccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Full-width title + lede ── */}
      <div className={styles.top}>
        <h2 id={headingId} className={styles.heading}>{heading}</h2>
        {paragraph && <p className={`${styles.lede} p-soft`}>{paragraph}</p>}
      </div>

      {/* ── Two-column body ── */}
      <div className={styles.inner}>
        {/* Left — photo */}
        <div className={styles.left}>
          <div className={styles.photoWrap}>
            {services.map((s, i) => (
              <div
                key={s.label}
                className={`${styles.photo} ${i === activeIdx ? styles.photoActive : ""}`}
              >
                <Image
                  src={s.photo}
                  alt={s.label}
                  fill
                  className={styles.photoImg}
                  sizes="(max-width: 860px) 100vw, 40vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right — sticky accordion + CTA */}
        <div className={styles.right}>
          <div
            className={styles.list}
            role="list"
            aria-label={
              ariaLabel ?? (typeof heading === "string" ? heading : undefined)
            }
          >
            {services.map((s, i) => {
              const isOpen = activeIdx === i;
              const buttonId = `${headingId}-tab-${i}`;
              const panelId = `${headingId}-panel-${i}`;
              return (
                <div
                  key={s.label}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                  role="listitem"
                >
                  <button
                    className={styles.row}
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveIdx(i)}
                  >
                    <div className={styles.rowLeft}>
                      <span className={styles.stepNumber} aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.label}>{s.label}</span>
                    </div>
                    <span className={styles.chevron} aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={styles.panel}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <div className={styles.panelInner}>
                      <p className="p-soft">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {ctaLabel && (
            <div className={styles.bottomRow}>
              <Link href={ctaHref} className={styles.bottomCta}>
                {ctaLabel.slice(0, ctaLabel.lastIndexOf('→')).trimEnd()}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
