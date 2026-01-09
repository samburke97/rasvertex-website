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
  const [propertyTypesX, setPropertyTypesX] = useState(110);
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
        const stage = stageRef.current;

        const rect = section.getBoundingClientRect();
        const scrollRange = section.offsetHeight - sticky.offsetHeight;

        // Calculate how far we've scrolled into the section
        const scrolled = Math.max(0, STICKY_TOP - rect.top);
        const progress = Math.min(1, scrolled / scrollRange);

        // Simple threshold: only animate if scrolled more than 20px
        if (scrolled < 20) {
          // At the top - everything is 0
          setTitleY(0);
          setGridX(0);
          setPropertyTypesX(110);
          setFillProgress(0);
          return;
        }

        // We're scrolling - animate everything
        const viewportWidth = stage.clientWidth;
        const gridInitialLeft = 0.25 * viewportWidth + 122;
        const gridFinalLeft = 80;
        const maxShift = gridInitialLeft - gridFinalLeft;

        const titleShift = Math.min(
          TITLE_MAX_SHIFT,
          TITLE_MAX_SHIFT * progress * 8
        );

        setTitleY(-titleShift);
        setGridX(-maxShift * progress);
        setPropertyTypesX(110 - 110 * progress);
        setFillProgress(progress * 100);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

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
                backgroundImage:
                  fillProgress < 2
                    ? `linear-gradient(to right, rgba(6, 20, 27, 0.35) 0%, rgba(6, 20, 27, 0.35) 100%)`
                    : `linear-gradient(to right, var(--navy) ${fillProgress}%, rgba(6, 20, 27, 0.35) ${fillProgress}%)`,
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
            <span className={styles.propertyType}>[ RESIDENTIAL ]</span>
            <span className={styles.propertyType}>[ COMMERCIAL ]</span>
            <span className={styles.propertyType}>[ BODY CORPORATE ]</span>
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
      </div>
    </section>
  );
}
