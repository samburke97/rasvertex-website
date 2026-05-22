// Shared accordion — used by ServicePicker (painting) and maintenance services
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
  services: AccordionService[];
}

export default function ServiceAccordion({
  heading,
  statement,
  ctaLabel = "Not sure? Let's talk →",
  ctaHref = "/contact",
  services,
}: ServiceAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left sticky col */}
        <div className={styles.left}>
          <div className={styles.sticky}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.statement}>{statement}</p>
            <Link href="/contact" className={styles.statementCta}>
              Get a free quote →
            </Link>
          </div>
        </div>

        {/* Accordion */}
        <div className={styles.list}>
          {services.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.item} ${openIdx === i ? styles.open : ""}`}
            >
              <button
                className={styles.row}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span className={styles.label}>{s.label}</span>
                <span className={styles.chevron} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

              <div className={styles.panel}>
                <div className={styles.panelInner}>
                  <div className={styles.panelLeft}>
                    <p className={styles.panelBody}>{s.body}</p>
                  </div>
                  <div className={styles.panelPhoto}>
                    <Image
                      src={s.photo}
                      alt={s.label}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="40vw"
                    />
                  </div>
                </div>
                <div className={styles.panelFooter}>
                  <div className={styles.panelFooterInner}>
                    <Link href={s.href} className={styles.panelCta}>
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link href={ctaHref} className={styles.ctaBtn}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
