"use client";

import { useRef, useEffect } from "react";
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
  const overlayRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bar = barRef.current;
    if (!overlay || !bar) return;

    const barDocTop = window.scrollY + bar.getBoundingClientRect().top;
    const scrollStart = barDocTop - window.innerHeight * 0.8;
    const scrollEnd = barDocTop - window.innerHeight * 0.3;

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= scrollStart) {
        overlay.style.clipPath = "inset(0 100% 0 0)";
        return;
      }
      if (scrollY >= scrollEnd) {
        overlay.style.clipPath = "inset(0 0% 0 0)";
        return;
      }
      const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      overlay.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    };

    overlay.style.clipPath = "inset(0 100% 0 0)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.bar} ref={barRef}>
      <div className={styles.barGrid}>
        <div className={styles.barHeadline}>
          <div className={styles.headlineWrap}>
            <span className={styles.headlineBase} aria-hidden="true">
              {headline}
            </span>
            <span
              ref={overlayRef}
              className={styles.headlineOverlay}
              aria-hidden="true"
              style={{ clipPath: "inset(0 100% 0 0)" }}
            >
              {headline}
            </span>
            <span className={styles.headlineSr}>{headline}</span>
          </div>
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
