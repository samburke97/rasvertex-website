"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import styles from "./ProjectShowcase.module.css";

const projects = [
  {
    id: 1,
    name: "Mooloolaba Highrise Repaint",
    service: "Painting",
    location: "Mooloolaba, QLD",
    image: "/images/projects/1.jpeg",
    href: "/work",
  },
  {
    id: 2,
    name: "Coolum Facade Wash",
    service: "Cleaning",
    location: "Coolum Beach, QLD",
    image: "/images/projects/2.jpeg",
    href: "/work",
  },
  {
    id: 3,
    name: "Height Safety Anchor Install",
    service: "Height Safety",
    location: "Maroochydore, QLD",
    image: "/nav/height.png",
    href: "/work",
  },
  {
    id: 4,
    name: "Novotel Waterproofing Program",
    service: "Waterproofing",
    location: "Noosa, QLD",
    image: "/nav/waterproofing.png",
    href: "/work",
  },
  {
    id: 5,
    name: "Body Corporate Maintenance",
    service: "Maintenance",
    location: "Sunshine Coast, QLD",
    image: "/nav/maintenance.png",
    href: "/work",
  },
];

export default function ProjectShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Pattern: cream-info, photo, maroon-info, photo, cream-info, photo...
  const slides = projects.flatMap((project, i) => [
    { kind: i % 2 === 0 ? "cream" : ("maroon" as const), project },
    { kind: "photo" as const, project },
  ]);

  return (
    <section className={styles.section}>
      {/* ── Header — same structure as ExperienceSection bar ── */}
      <div className={styles.bar}>
        <div className={styles.barGrid}>
          <div className={styles.barHeadline}>
            <p className={styles.headline}>OUR PROJECTS.</p>
          </div>{" "}
        </div>
      </div>

      {/* ── Slider ─────────────────────────────────────────── */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((slide, i) => {
            /* Photo card */
            if (slide.kind === "photo") {
              return (
                <Link
                  key={i}
                  href={slide.project.href}
                  className={`${styles.card} ${styles.cardPhoto}`}
                >
                  <Image
                    src={slide.project.image}
                    alt={slide.project.name}
                    fill
                    className={styles.image}
                    sizes="25vw"
                  />
                  <div className={styles.photoOverlay} />
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
                </Link>
              );
            }

            /* Info card — cream or maroon, hover shows image */
            const isCream = slide.kind === "cream";
            return (
              <Link
                key={i}
                href={slide.project.href}
                className={`${styles.card} ${isCream ? styles.cardCream : styles.cardMaroon}`}
              >
                {/* Default: info */}
                <div className={styles.info}>
                  <div className={styles.infoRow}>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>{slide.project.location}</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.infoLabel}>Project</p>
                    <p className={styles.infoValue}>{slide.project.name}</p>
                  </div>
                </div>

                {/* Hover: image */}
                <div className={styles.imageFace}>
                  <Image
                    src={slide.project.image}
                    alt={slide.project.name}
                    fill
                    className={styles.image}
                    sizes="25vw"
                  />
                  <div className={styles.photoOverlay} />
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
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
