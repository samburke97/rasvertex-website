"use client";

import styles from "./CTA.module.css";
import Image from "next/image";
import Link from "next/link";

// 6 project cards - sparse layout
// 2 above CTA, 2 middle, 2 below
// Explicit positions to ensure proper placement
const projectCards = [
  // ABOVE CTA
  {
    id: 1,
    image: "/images/projects/1.jpeg",
    label: "BODY CORPORATE BURLEIGH HEADS",
    slug: "/projects/body-corporate-burleigh-heads",
    style: { top: "3%", left: "5%", right: "auto" },
  },
  {
    id: 2,
    image: "/images/projects/2.jpeg",
    label: "COMMERCIAL PAINTING TARINGA",
    slug: "/projects/commercial-painting-taringa",
    style: { top: "12%", left: "auto", right: "6%" },
  },
  // MIDDLE
  {
    id: 3,
    image: "/images/projects/1.jpeg",
    label: "WATERPROOFING VARSITY LAKES",
    slug: "/projects/waterproofing-varsity-lakes",
    style: { top: "32%", left: "4%", right: "auto" },
  },
  {
    id: 4,
    image: "/images/projects/2.jpeg",
    label: "HEIGHT SAFETY AUCHENFLOWER",
    slug: "/projects/height-safety-auchenflower",
    style: { top: "48%", left: "auto", right: "5%" },
  },
  // BELOW CTA
  {
    id: 5,
    image: "/images/projects/1.jpeg",
    label: "PRESSURE CLEANING NOOSA",
    slug: "/projects/pressure-cleaning-noosa",
    style: { top: "68%", left: "6%", right: "auto" },
  },
  {
    id: 6,
    image: "/images/projects/2.jpeg",
    label: "BUILDING MAINTENANCE CALOUNDRA",
    slug: "/projects/building-maintenance-caloundra",
    style: { top: "82%", left: "auto", right: "4%" },
  },
];

export default function CTA() {
  return (
    <section className={styles.section}>
      {/* Project Cards - positioned absolutely in section */}
      {projectCards.map((card) => (
        <Link
          key={card.id}
          href={card.slug}
          className={styles.projectCard}
          style={card.style}
        >
          <span className={styles.cardLabel}>{card.label}</span>
          <div className={styles.cardImageWrapper}>
            <Image
              src={card.image}
              alt={card.label}
              fill
              className={styles.cardImage}
            />
          </div>
        </Link>
      ))}

      {/* Center CTA - Sticky */}
      <div className={styles.stickyWrapper}>
        <div className={styles.ctaCenter}>
          <p className={styles.label}>[ GET STARTED ]</p>
          <h2 className={styles.title}>Ready to talk?</h2>
          <p className={styles.subtitle}>Get in touch for a free quote.</p>
          <div className={styles.actions}>
            <a href="/contact" className={styles.primaryButton}>
              GET A QUOTE
            </a>
            <a href="tel:0754379355" className={styles.secondaryButton}>
              CALL (07) 5437 9355
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
