"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const ArrowIcon = () => (
  <div className={styles.arrowIcon}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [col4Y, setCol4Y] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = Math.max(
        0,
        -sectionRef.current.getBoundingClientRect().top,
      );
      const p = Math.min(1, scrolled / 500);
      // Start elevated by exactly one row (340px) so Height Safety top = row 1 top
      setCol4Y((1 - p) * -348);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section} data-nav-fixed="true" ref={sectionRef}>
      <div className={styles.stage}>
        {/* Headline */}
        <div className={styles.headlineBlock} data-headline>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />[ Sunshine
            Coast · Est. 1998 ]
          </p>
          <h1 className={styles.headline}>
            Property care,
            <br />
            done from <em>the ground</em>
            <br />
            up — and the roof down.
          </h1>
        </div>

        {/* Bento grid */}
        <div className={styles.bentoGrid}>
          {/* Painting — row 1, col 1-2 */}
          <Link
            href="/services/painting"
            className={`${styles.card} ${styles.painting}`}
          >
            <div className={styles.imageWrap}>
              <video
                src="/videos/painting.mp4"
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Painting</p>
            </div>
          </Link>

          {/* Maintenance — row 2, col 1 */}
          <Link
            href="/services/maintenance"
            className={`${styles.card} ${styles.maintenance}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src="/nav/maintenance.png"
                alt="Maintenance"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Maintenance</p>
            </div>
          </Link>

          {/* Waterproofing — row 2, col 2 */}
          <Link
            href="/services/waterproofing"
            className={`${styles.card} ${styles.waterproofing}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src="/nav/waterproofing.png"
                alt="Waterproofing"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Waterproofing</p>
            </div>
          </Link>

          {/* Cleaning — col 3, rows 1-2 */}
          <Link
            href="/services/cleaning"
            className={`${styles.card} ${styles.cleaning}`}
          >
            <div className={styles.imageWrap}>
              <video
                src="/videos/cleaning.mp4"
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Cleaning</p>
            </div>
          </Link>

          {/* Col 4 — moves as one unit */}
          <div
            className={styles.col4}
            style={{ transform: `translateY(${col4Y}px)`, transition: "none" }}
          >
            {/* One Partner — top (row 1 position) */}
            <div className={styles.heroTile}>
              <h2 className={styles.heroTitle}>
                One
                <br />
                Partner.
              </h2>
              <p className={styles.heroBody}>
                Complete property maintenance for commercial, body corporate,
                and strata across the Sunshine Coast.
              </p>
            </div>

            {/* Height Safety — bottom (row 2 position) */}
            <Link
              href="/services/height-safety"
              className={`${styles.card} ${styles.heightSafety}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src="/nav/height.png"
                  alt="Height Safety"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay} />
              <ArrowIcon />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>Height Safety</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
