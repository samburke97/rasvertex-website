"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Statement.module.css";

export default function Statement() {
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
      const y = window.scrollY;
      if (y <= scrollStart) {
        overlay.style.clipPath = "inset(0 100% 0 0)";
        return;
      }
      if (y >= scrollEnd) {
        overlay.style.clipPath = "inset(0 0% 0 0)";
        return;
      }
      const p = (y - scrollStart) / (scrollEnd - scrollStart);
      overlay.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
    };

    overlay.style.clipPath = "inset(0 100% 0 0)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bar} ref={barRef}>
        <div className={styles.barGrid}>
          {/* Headline with scroll wipe */}
          <div className={styles.barHeadline}>
            <div className={styles.headlineWrap}>
              <span className={styles.headlineBase} aria-hidden="true">
                HIGHER STANDARDS.
              </span>
              <span
                ref={overlayRef}
                className={styles.headlineOverlay}
                aria-hidden="true"
                style={{ clipPath: "inset(0 100% 0 0)" }}
              >
                HIGHER STANDARDS.
              </span>
              <span className={styles.headlineSr}>Higher Standards.</span>
            </div>
          </div>

          {/* Right: lede + subtle burgundy rule + CTA */}
          <div className={styles.barRight}>
            <div className={styles.accent} aria-hidden="true" />
            <p className={styles.lede}>
              Every painter on the Sunshine Coast will quote you a job. Not
              every painter will show up on time, document every coat, and back
              the work with a five-year warranty. We will.
            </p>
            <Link href="/contact" className={styles.cta}>
              Get a free quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
