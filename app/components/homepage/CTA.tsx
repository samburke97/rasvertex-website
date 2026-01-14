"use client";

import styles from "./CTA.module.css";
import Image from "next/image";
import Link from "next/link";

// 6 project cards - sparse positioning
const projectCards = [
  {
    id: 1,
    image: "/images/projects/painting-1.jpg",
    label: "COMMERCIAL PAINTING",
    slug: "/projects/commercial-painting",
    style: { top: "3%", left: "4%" },
  },
  {
    id: 2,
    image: "/images/projects/cleaning-1.jpg",
    label: "PRESSURE CLEANING",
    slug: "/projects/pressure-cleaning",
    style: { top: "8%", right: "5%" },
  },
  {
    id: 3,
    image: "/images/projects/waterproofing-1.jpg",
    label: "WATERPROOFING",
    slug: "/projects/waterproofing",
    style: { top: "38%", left: "6%" },
  },
  {
    id: 4,
    image: "/images/projects/maintenance-1.jpg",
    label: "BUILDING MAINTENANCE",
    slug: "/projects/building-maintenance",
    style: { top: "52%", right: "4%" },
  },
  {
    id: 5,
    image: "/images/projects/height-safety-1.jpg",
    label: "HEIGHT SAFETY",
    slug: "/projects/height-safety",
    style: { top: "72%", left: "5%" },
  },
  {
    id: 6,
    image: "/images/projects/painting-2.jpg",
    label: "BODY CORPORATE PAINTING",
    slug: "/projects/body-corporate-painting",
    style: { top: "85%", right: "6%" },
  },
];

export default function CTA() {
  return (
    <section className={styles.section}>
      {/* Project Cards - positioned in section */}
      {projectCards.map((card) => (
        <Link
          key={card.id}
          href={card.slug}
          className={styles.projectCard}
          style={card.style}
        >
          <div className={styles.cardImageWrapper}>
            <Image
              src={card.image}
              alt={card.label}
              fill
              className={styles.cardImage}
            />
          </div>
          <span className={styles.cardLabel}>{card.label}</span>
        </Link>
      ))}

      {/* Sticky CTA Content */}
      <div className={styles.stickyWrapper}>
        <div className={styles.content}>
          <p className={styles.label}>[ GET STARTED ]</p>
          <h2 className={styles.title}>Ready to talk?</h2>
          <p className={styles.subtitle}>
            Get in touch for a free consultation and quote.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              GET A QUOTE
            </Link>
            <a href="tel:0754379355" className={styles.secondaryButton}>
              CALL (07) 5437 9355
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
