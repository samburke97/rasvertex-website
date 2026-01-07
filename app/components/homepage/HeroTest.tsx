"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroTest.module.css";

const serviceCards = [
  { name: "Painting", image: "/nav/painting.png", href: "/services/painting" },
  { name: "Cleaning", image: "/nav/cleaning.png", href: "/services/cleaning" },
  {
    name: "Window Cleaning",
    image: "/nav/window.png",
    href: "/services/window-cleaning",
  },
  {
    name: "Waterproofing",
    image: "/nav/waterproofing.png",
    href: "/services/waterproofing",
  },
  {
    name: "Maintenance",
    image: "/nav/maintenance.png",
    href: "/services/maintenance",
  },
  {
    name: "Height Safety",
    image: "/nav/height.png",
    href: "/services/height-safety",
  },
  {
    name: "Maintenance Plans",
    image: "/nav/maintenance.png",
    href: "/maintenance-plans",
  },
];

export default function HeroTest() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* TOP LEFT - Headline & Subtext */}
        <div className={styles.textCard}>
          <h1 className={styles.headline}>
            The Sunshine Coast's
            <br />
            Property Partner
          </h1>
          <p className={styles.subtext}>
            25+ Years serving our Sunshine Coast community, where our neighbours
            live, learn and work.
          </p>
        </div>

        {/* IMAGE CARDS - Services */}
        {serviceCards.map((card) => (
          <Link
            key={card.name}
            href={card.href}
            className={`${styles.imageCard} ${
              styles[card.name.toLowerCase().replace(/\s+/g, "")]
            }`}
            onMouseEnter={() => setHoveredCard(card.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src={card.image}
              alt={card.name}
              fill
              className={styles.cardImage}
            />
            {hoveredCard === card.name && (
              <div className={styles.hoverOverlay}>
                <h3 className={styles.cardTitle}>{card.name}</h3>
              </div>
            )}
          </Link>
        ))}

        {/* 10-YEARS LOGO CARD */}
        <div className={styles.logoCard}>
          <Image
            src="/images/projects/10-years.svg"
            alt="10 Years"
            width={200}
            height={200}
            className={styles.logoImage}
          />
        </div>

        {/* BOTTOM RIGHT - CTA */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>How can we help</h2>
            <p className={styles.ctaSubtext}>
              Chat to our team about your next project today
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Chat to our team
            </Link>
          </div>
          <Image
            src="/images/people/caro.jpg"
            alt="Carolina"
            width={120}
            height={120}
            className={styles.caroImage}
          />
        </div>
      </div>
    </section>
  );
}
