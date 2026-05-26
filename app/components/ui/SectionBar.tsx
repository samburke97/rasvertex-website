"use client";

import Link from "next/link";
import styles from "./SectionBar.module.css";

interface SectionBarProps {
  headline: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function SectionBar({
  headline,
  description,
  ctaLabel,
  ctaHref,
}: SectionBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.barGrid}>
        <div className={styles.barHeadline}>
          <h2 className={styles.headlineBase}>{headline}</h2>
        </div>
        <div className={styles.barRight}>
          <p className={styles.intro}>{description}</p>
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
