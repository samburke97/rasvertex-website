"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const DATA = {
  title: { main: "Painting", accent: "." },
  lede: "Repaints, refurbishments and protective coatings — delivered by a single in-house crew trained for <em>high-rise, coastal and heritage</em> work. Every project documented end-to-end on ROCO, with a written 5-year warranty on workmanship and 15-year manufacturer-backed coverage.",
  facts: [
    { label: "Discipline", value: "Coating systems · prep · re-finish" },
    { label: "Sectors", value: "Strata · Resort · Commercial · Heritage" },
    { label: "Access", value: "Scaffold · BMU · Rope (IRATA L3)" },
    { label: "Warranty", value: "5-yr workmanship · 15-yr manufacturer" },
  ],
};

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
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(
      () => stageRef.current?.classList.add(styles.loaded),
      80,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.section}>
      {/* Single stage wrapper — same padding as homepage Hero .stage */}
      <div className={styles.stage} ref={stageRef}>
        {/* Two-column inner layout */}
        <div className={styles.inner}>
          {/* ── Left — text ──────────────────────────────────── */}
          <div className={styles.left}>
            <h1 className={styles.title}>
              {DATA.title.main}
              <span className={styles.accent}>{DATA.title.accent}</span>
            </h1>
            <div className={styles.base}>
              <p
                className={styles.lede}
                dangerouslySetInnerHTML={{ __html: DATA.lede }}
              />
              <p className={styles.location}>
                Sunshine Coast · QLD · est. 2014
              </p>
            </div>
          </div>

          {/* ── Right — bento ────────────────────────────────── */}
          <div className={styles.bento}>
            {/* Cleaning — spans both rows */}
            <Link
              href="/services/cleaning"
              className={`${styles.card} ${styles.cardCleaning}`}
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

            {/* Right col */}
            <div className={styles.bentoCol}>
              <Link
                href="/services/height-safety"
                className={`${styles.card} ${styles.cardHeightSafety}`}
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

              <div className={styles.cardFacts}>
                {DATA.facts.map(({ label, value }) => (
                  <div className={styles.factrow} key={label}>
                    <span className={styles.factlabel}>{label}</span>
                    <span className={styles.factvalue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
