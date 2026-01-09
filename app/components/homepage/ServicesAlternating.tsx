"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesAlternating.module.css";

const STICKY_TOP = 150;
const TITLE_MAX_SHIFT = 150;

const cards = [
  {
    title: "PAINTING",
    class: "painting",
    image: "/nav/painting.png",
    description:
      "Professional interior and exterior painting services for commercial and residential properties. Quality finishes that last.",
    pills: [
      "INTERIOR PAINTING",
      "EXTERIOR PAINTING",
      "HERITAGE PAINTING",
      "COLOUR CONSULTING",
      "PRE-SALE PAINTING",
      "STRATA PAINTING",
      "RENDER PAINTING",
      "ROOF PAINTING",
      "COLORBOND ROOF PAINTING",
      "METAL ROOF PAINTING",
      "TILED ROOF PAINTING",
    ],
  },
  {
    title: "MAINTENANCE",
    class: "maintenance",
    image: "/nav/maintenance.png",
    description:
      "Comprehensive building maintenance services to keep your property in top condition year-round.",
    pills: [
      "GENERAL MAINTENANCE",
      "PREVENTATIVE MAINTENANCE",
      "REPAIRS",
      "FACILITY MANAGEMENT",
    ],
  },
  {
    title: "WATERPROOFING",
    class: "waterproofing",
    image: "/nav/waterproofing.png",
    description:
      "Expert waterproofing solutions protecting your property from water damage and moisture issues.",
    pills: [
      "MEMBRANE WATERPROOFING",
      "BALCONY WATERPROOFING",
      "BATHROOM WATERPROOFING",
      "ROOF WATERPROOFING",
    ],
  },
  {
    title: "CLEANING",
    class: "cleaning",
    image: "/nav/cleaning.png",
    description:
      "Professional commercial cleaning services maintaining pristine standards for your business.",
    pills: [
      "OFFICE CLEANING",
      "STRATA CLEANING",
      "WINDOW CLEANING",
      "PRESSURE CLEANING",
    ],
  },
  {
    title: "HEIGHT SAFETY",
    class: "height",
    image: "/nav/height.png",
    description:
      "Certified height safety systems and inspections ensuring workplace safety compliance.",
    pills: [
      "ANCHOR POINTS",
      "SAFETY INSPECTIONS",
      "ROPE ACCESS",
      "FALL PROTECTION",
    ],
  },
  {
    title: "BUILDING INSPECTION",
    class: "inspection",
    image: "/nav/inspection.png",
    description:
      "Thorough building inspections identifying issues and ensuring property standards.",
    pills: [
      "PRE-PURCHASE INSPECTIONS",
      "BUILDING REPORTS",
      "DEFECT INSPECTIONS",
      "COMPLIANCE CHECKS",
    ],
  },
];

export default function ServicesAlternating() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const [titleY, setTitleY] = useState(0);
  const [gridX, setGridX] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      // Cancel any pending animation frame
      if (rafId) cancelAnimationFrame(rafId);

      // Schedule update for next frame for smooth animation
      rafId = requestAnimationFrame(() => {
        if (
          !sectionRef.current ||
          !stickyRef.current ||
          !gridRef.current ||
          !stageRef.current
        )
          return;

        const section = sectionRef.current;
        const sticky = stickyRef.current;
        const grid = gridRef.current;
        const stage = stageRef.current;

        const top = section.getBoundingClientRect().top;
        const scrollRange = section.offsetHeight - sticky.offsetHeight;

        if (top <= STICKY_TOP) {
          const scrolled = Math.abs(top - STICKY_TOP);
          const p = Math.min(1, scrolled / scrollRange);

          const viewportWidth = stage.clientWidth;
          const availableWidth = viewportWidth * 0.7;
          const maxShift = grid.scrollWidth - availableWidth;

          const titleShift = Math.min(TITLE_MAX_SHIFT, TITLE_MAX_SHIFT * p * 8);

          setTitleY(-titleShift);
          setGridX(-maxShift * p);
          setProgress(p * 100);
        } else {
          setTitleY(0);
          setGridX(0);
          setProgress(0);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={stickyRef} className={styles.stickyContainer}>
        <div ref={stageRef} className={styles.stage}>
          <div
            className={styles.titleBlock}
            style={{ transform: `translateY(${titleY}px)` }}
          >
            <p className={styles.label}>[ PROPERTY SERVICES ]</p>
            <h2 className={styles.title}>WHAT WE DO BEST</h2>
          </div>

          <div
            ref={gridRef}
            className={styles.bentoGrid}
            style={{ transform: `translateX(${gridX}px)` }}
          >
            {cards.map((card) => (
              <Link
                key={card.title}
                href="/services"
                className={`${styles.card} ${styles[card.class]}`}
              >
                {/* Image layer */}
                <div className={styles.imageWrap}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.overlay} />

                {/* Title - visible at bottom left, moves to top on hover */}
                <h3 className={styles.cardTitle}>{card.title}</h3>

                {/* White background on hover */}
                <div className={styles.hoverContent} />

                {/* Description and pills - fade in on hover */}
                <div className={styles.hoverInner}>
                  <p className={styles.hoverDescription}>{card.description}</p>
                  <div className={styles.pills}>
                    {card.pills.map((pill, index) => (
                      <span key={index} className={styles.pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
