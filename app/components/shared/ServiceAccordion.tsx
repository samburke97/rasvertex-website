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
  heading: string;
  statement: string;
  ctaLabel?: string;
  ctaHref?: string;
  statementCtaLabel?: string;
  statementCtaHref?: string;
  services: AccordionService[];
}

export default function ServiceAccordion({
  heading,
  statement,
  ctaLabel = "Not sure? Let's talk about it →",
  ctaHref = "/contact",
  statementCtaLabel = "Get a free quote →",
  statementCtaHref = "/contact",
  services,
}: ServiceAccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="accordion-heading">
      {/* ── Header ── */}
      <div className={styles.header}>
        <h2 id="accordion-heading">{heading}</h2>
        <div className={styles.headerRight}>
          <p className="p-soft">{statement}</p>
          <Link href={statementCtaHref} className={styles.statementCta}>
            {statementCtaLabel}
          </Link>
        </div>
      </div>

      {/* ── Two-column body ── */}
      <div className={styles.inner}>
        {/* Left — sticky photo */}
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

        {/* Right — accordion + CTA */}
        <div className={styles.right}>
          <div className={styles.list} role="tablist" aria-label={heading}>
            {services.map((s, i) => {
              const isOpen = activeIdx === i;
              return (
                <div
                  key={s.label}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    className={styles.row}
                    role="tab"
                    aria-selected={isOpen}
                    aria-expanded={isOpen}
                    onClick={() => setActiveIdx(isOpen ? null : i)}
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
                    className={styles.panel}
                    role="tabpanel"
                    hidden={!isOpen}
                  >
                    <div className={styles.panelInner}>
                      <p className="p-soft">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.bottomRow}>
            <Link href={ctaHref} className={styles.bottomCta}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
