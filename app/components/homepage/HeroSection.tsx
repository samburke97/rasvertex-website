"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const services = [
  "property",
  "painting",
  "cleaning",
  "maintenance",
  "height safety",
  "waterproofing",
];

export default function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("property");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      // Reset to "property" when not hovering
      setDisplayText("property");
      setCurrentServiceIndex(0);
      setIsDeleting(false);
      return;
    }

    const currentService = services[currentServiceIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentService.length) {
          setDisplayText(currentService.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next service
          setIsDeleting(false);
          const nextIndex = (currentServiceIndex + 1) % services.length;
          setCurrentServiceIndex(nextIndex);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentServiceIndex, isHovering]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <p className={styles.location}>HIGHER STANDARDS</p>
          <h1
            className={styles.title}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            THE SUNSHINE COAST'S{" "}
            <span className={styles.animatedWord}>{displayText}</span>{" "}
            <span className={styles.partnerWord}>PARTNER</span>
          </h1>
        </div>

        {/* Three Visual Category Cards */}
        <div className={styles.cardsGrid}>
          <Link
            href="/services/residential"
            className={styles.visualCard}
            onMouseEnter={() => setHoveredCard("residential")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardImage}>
              <Image
                src="/images/panels/residential.png"
                alt="Residential Services"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cardGradient} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>PROPERTY</span>
              <h3 className={styles.cardTitle}>
                Residential
                <br />
                maintenance
              </h3>
              <p className={styles.cardDesc}>
                Quality maintenance for coastal homes and properties
              </p>
              <span className={styles.cardLink}>
                Learn more{" "}
                <span
                  className={`${styles.arrow} ${
                    hoveredCard === "residential" ? styles.arrowActive : ""
                  }`}
                >
                  →
                </span>
              </span>
            </div>
          </Link>

          <Link
            href="/services/commercial"
            className={styles.visualCard}
            onMouseEnter={() => setHoveredCard("commercial")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardImage}>
              <Image
                src="/images/panels/commercial.png"
                alt="Commercial Services"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cardGradient} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>BUSINESS</span>
              <h3 className={styles.cardTitle}>
                Commercial
                <br />
                solutions
              </h3>
              <p className={styles.cardDesc}>
                Comprehensive maintenance for commercial properties
              </p>
              <span className={styles.cardLink}>
                Learn more{" "}
                <span
                  className={`${styles.arrow} ${
                    hoveredCard === "commercial" ? styles.arrowActive : ""
                  }`}
                >
                  →
                </span>
              </span>
            </div>
          </Link>

          <Link
            href="/services/body-corporate"
            className={styles.visualCard}
            onMouseEnter={() => setHoveredCard("body-corporate")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardImage}>
              <Image
                src="/images/panels/bodycorporate.png"
                alt="Body Corporate Services"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cardGradient} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>STRATA</span>
              <h3 className={styles.cardTitle}>
                Body corporate
                <br />
                specialists
              </h3>
              <p className={styles.cardDesc}>
                Expert services for multi-unit and strata developments
              </p>
              <span className={styles.cardLink}>
                Learn more{" "}
                <span
                  className={`${styles.arrow} ${
                    hoveredCard === "body-corporate" ? styles.arrowActive : ""
                  }`}
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>

        {/* Subtitle - Far Right Below Cards */}
        <div className={styles.subtitleSection}>
          <p className={styles.subtitle}>
            With over a decade of proven expertise, we're trusted by body
            corporates, asset managers, and commercial partners across SEQ
          </p>
        </div>
      </div>
    </section>
  );
}
