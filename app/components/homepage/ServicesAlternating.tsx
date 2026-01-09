"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesAlternating.module.css";

const STICKY_TOP = 120;
const TITLE_MAX_SHIFT = 120;

type CardData = {
  title: string;
  class: string;
  image?: string;
  video?: string;
  description?: string;
  pills?: string[];
  type?: "service" | "cta";
};

const cards: CardData[] = [
  {
    title: "PAINTING",
    class: "painting",
    video: "/videos/painting.mp4",
    description: "Professional painting services for all property types",
    pills: ["INTERIOR", "EXTERIOR", "HERITAGE", "STRATA"],
    type: "service",
  },
  {
    title: "WATERPROOFING",
    class: "waterproofing",
    image: "/nav/waterproofing.png",
    description: "Expert waterproofing solutions that protect your property",
    pills: ["BALCONIES", "ROOFS", "WET AREAS", "MEMBRANES"],
    type: "service",
  },
  {
    title: "CLEANING",
    class: "cleaning",
    video: "/videos/cleaning.mp4",
    description: "High-rise and commercial cleaning services",
    pills: ["WINDOWS", "BUILDING WASH", "ROPE ACCESS", "FACADES"],
    type: "service",
  },
  {
    title: "HEIGHT SAFETY",
    class: "heightSafety",
    image: "/nav/height.png",
    description: "IRATA certified rope access and height safety systems",
    pills: ["ANCHOR POINTS", "SAFETY INSPECTIONS", "ROPE ACCESS", "COMPLIANCE"],
    type: "service",
  },
  {
    title: "MAINTENANCE",
    class: "maintenance",
    image: "/nav/maintenance.png",
    description: "Ongoing property maintenance and repair services",
    pills: ["PREVENTATIVE", "REACTIVE", "INSPECTIONS", "EMERGENCY"],
    type: "service",
  },
];

export default function ServicesAlternating() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const propertyTypesRef = useRef<HTMLDivElement>(null);

  const [titleY, setTitleY] = useState(0);
  const [gridX, setGridX] = useState(0);
  const [propertyTypesX, setPropertyTypesX] = useState(100);
  const [progress, setProgress] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);

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
          const scrolled = Math.max(0, STICKY_TOP - top);

          // Only calculate progress if we've actually scrolled
          if (scrolled > 0) {
            const p = Math.min(1, scrolled / scrollRange);

            // Grid starts at 30% from left
            // Grid needs to end at 80px from left (align with CTA/title)
            const viewportWidth = stage.clientWidth;
            const gridInitialLeft = viewportWidth * 0.3; // Starting position
            const gridFinalLeft = 80; // Where CTA is positioned

            const maxShift = gridInitialLeft - gridFinalLeft;

            const titleShift = Math.min(
              TITLE_MAX_SHIFT,
              TITLE_MAX_SHIFT * p * 8
            );

            setTitleY(-titleShift);
            setGridX(-maxShift * p);
            setPropertyTypesX(100 - 100 * p);
            setProgress(p * 100);
            setFillProgress(p * 100);
          } else {
            // At threshold but not scrolled yet
            setTitleY(0);
            setGridX(0);
            setPropertyTypesX(100);
            setProgress(0);
            setFillProgress(0);
          }
        } else {
          setTitleY(0);
          setGridX(0);
          setPropertyTypesX(100);
          setProgress(0);
          setFillProgress(0);
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
            <p className={styles.label}>[ SEQ'S PROPERTY PARTNER ]</p>
            <h2
              className={styles.title}
              style={{
                backgroundImage: `linear-gradient(to right, var(--navy) ${fillProgress}%, rgba(6, 20, 27, 0.35) ${fillProgress}%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                willChange: "background-image",
              }}
            >
              HIGHER STANDARDS
            </h2>
          </div>

          {/* Fixed CTA Block - positioned below title */}
          <div className={styles.ctaBlock}>
            <Image
              src="/images/people/caro.jpg"
              alt="Caro"
              width={70}
              height={70}
              className={styles.avatar}
            />
            <h3 className={styles.ctaTitle}>HOW CAN WE HELP?</h3>
            <p className={styles.ctaDescription}>
              From small repairs to full repaints, we know every property type
              and we'll guide you to the right solution for your project.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              FREE QUOTE
            </Link>
          </div>

          {/* Property Types - slides in from right */}
          <div
            ref={propertyTypesRef}
            className={styles.propertyTypes}
            style={{ transform: `translateX(${propertyTypesX}%)` }}
          >
            RESIDENTIAL COMMERICAL BODY CORPORATE
          </div>

          <div
            ref={gridRef}
            className={styles.bentoGrid}
            style={{ transform: `translateX(${gridX}px)` }}
          >
            {/* Empty spot that will align with CTA */}
            <div className={`${styles.card} ${styles.empty}`} />

            {cards.map((card, index) => (
              <Link
                key={`${card.title}-${index}`}
                href="/services"
                className={`${styles.card} ${styles[card.class]}`}
              >
                {/* Video or Image layer */}
                <div className={styles.imageWrap}>
                  {card.video ? (
                    <video
                      src={card.video}
                      className={styles.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      src={card.image!}
                      alt={card.title}
                      fill
                      className={styles.image}
                    />
                  )}
                </div>
                <div className={styles.overlay} />

                {/* Title */}
                <h3 className={styles.cardTitle}>{card.title}</h3>

                {/* Hover content */}
                <div className={styles.hoverContent} />
                <div className={styles.hoverInner}>
                  <p className={styles.hoverDescription}>{card.description}</p>
                  <div className={styles.pills}>
                    {card.pills?.map((pill, i) => (
                      <span key={i} className={styles.pill}>
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
