"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>
          {/* TOP - Headline and Subtext */}
          <div className={styles.topContent}>
            <h1 className={styles.headline}>
              The Sunshine Coast's
              <br />
              Property Partner
            </h1>
            <p className={styles.subtext}>
              We're a full service building partner, with specialist teams
              across all aspects of building maintenance. We help clients keep
              their building in top shape.
            </p>
          </div>

          {/* BOTTOM - Clean CTA Row */}
          <div className={styles.ctaRow}>
            <Image
              src="/images/people/caro.jpg"
              alt="Carolina"
              width={120}
              height={120}
              className={styles.caroImage}
            />
            <div className={styles.ctaText}>
              <h2 className={styles.ctaHeading}>How can we help</h2>
              <p className={styles.ctaSubtext}>
                Before you start your next project chat to our team and we'll
                provide a comprehensive and complementary quote to get you
                started, advice on what you really need.
              </p>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Free Quote
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN - Scattered Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Large Painting Card */}
          <Link
            href="/services/painting"
            className={`${styles.bentoCard} ${styles.painting}`}
            onMouseEnter={() => setHoveredCard("painting")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/nav/painting.png"
              alt="Painting Services"
              fill
              className={styles.cardImage}
            />
            {hoveredCard === "painting" && (
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>Painting</h3>
                <p className={styles.cardSubtitle}>Commercial & Residential</p>
              </div>
            )}
          </Link>

          {/* Top Right - Cleaning */}
          <Link
            href="/services/cleaning"
            className={`${styles.bentoCard} ${styles.cleaning}`}
            onMouseEnter={() => setHoveredCard("cleaning")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/nav/cleaning.png"
              alt="Cleaning Services"
              fill
              className={styles.cardImage}
            />
            {hoveredCard === "cleaning" && (
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>Cleaning</h3>
                <p className={styles.cardSubtitle}>Building & Windows</p>
              </div>
            )}
          </Link>

          {/* Middle Right - Maintenance */}
          <Link
            href="/services/maintenance"
            className={`${styles.bentoCard} ${styles.maintenance}`}
            onMouseEnter={() => setHoveredCard("maintenance")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/nav/maintenance.png"
              alt="Maintenance Services"
              fill
              className={styles.cardImage}
            />
            {hoveredCard === "maintenance" && (
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>Maintenance</h3>
                <p className={styles.cardSubtitle}>Property Care</p>
              </div>
            )}
          </Link>

          {/* Bottom Left - Waterproofing */}
          <Link
            href="/services/waterproofing"
            className={`${styles.bentoCard} ${styles.waterproofing}`}
            onMouseEnter={() => setHoveredCard("waterproofing")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/nav/waterproofing.png"
              alt="Waterproofing Services"
              fill
              className={styles.cardImage}
            />
            {hoveredCard === "waterproofing" && (
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>Waterproofing</h3>
                <p className={styles.cardSubtitle}>Protection Systems</p>
              </div>
            )}
          </Link>

          {/* Bottom Right Span - Height Safety */}
          <Link
            href="/services/height-safety"
            className={`${styles.bentoCard} ${styles.height}`}
            onMouseEnter={() => setHoveredCard("height")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/nav/height.png"
              alt="Height Safety Services"
              fill
              className={styles.cardImage}
            />
            {hoveredCard === "height" && (
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>Height Safety</h3>
                <p className={styles.cardSubtitle}>Rope Access</p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
