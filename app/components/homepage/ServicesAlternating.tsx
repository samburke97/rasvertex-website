"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesAlternating.module.css";

const STICKY_TOP = 120;
const TITLE_SHIFT = 140;

const cards = [
  { title: "PAINTING", class: "painting", image: "/services/painting.jpg" },
  {
    title: "MAINTENANCE",
    class: "maintenance",
    image: "/services/maintenance.jpg",
  },
  {
    title: "WATERPROOFING",
    class: "waterproofing",
    image: "/services/waterproofing.jpg",
  },
  { title: "CLEANING", class: "cleaning", image: "/services/cleaning.jpg" },
  { title: "HEIGHT SAFETY", class: "height", image: "/services/height.jpg" },
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
    const onScroll = () => {
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

        const maxShift = grid.scrollWidth - stage.clientWidth;

        setTitleY(-TITLE_SHIFT * p);
        setGridX(-maxShift * p);
        setProgress(p * 100);
      } else {
        setTitleY(0);
        setGridX(0);
        setProgress(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={stickyRef} className={styles.stickyContainer}>
        <div ref={stageRef} className={styles.stage}>
          {/* GRID (behind) */}
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
                <div className={styles.imageWrap}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.overlay} />
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </Link>
            ))}
          </div>

          {/* TITLE (front mask) */}
          <div
            className={styles.titleBlock}
            style={{ transform: `translateY(${titleY}px)` }}
          >
            <p className={styles.label}>[ PROPERTY SERVICES ]</p>
            <h2 className={styles.title}>WHAT WE DO BEST</h2>
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
