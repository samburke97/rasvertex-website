"use client";

import Link from "next/link";
import styles from "./HeroSection.module.css";

const services = [
  {
    name: "Painting",
    description: "Interior & exterior painting services",
    href: "/services/painting",
  },
  {
    name: "Cleaning",
    description: "Building & high-rise window cleaning",
    href: "/services/cleaning",
  },
  {
    name: "Maintenance",
    description: "Property maintenance & repairs",
    href: "/services/maintenance",
  },
  {
    name: "Height Safety",
    description: "Rope access & elevated work",
    href: "/services/height-safety",
  },
  {
    name: "Waterproofing",
    description: "Protective coatings & membranes",
    href: "/services/waterproofing",
  },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroCard}>
          {/* Left Side - Main Message */}
          <div className={styles.leftContent}>
            <p className={styles.label}>HIGHER STANDARDS</p>
            <h1 className={styles.headline}>
              Commercial Property Maintenance Specialists
            </h1>
            <p className={styles.description}>
              Trusted by body corporates, commercial partners, and property
              managers across the Sunshine Coast
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Quote
            </Link>
          </div>

          {/* Right Side - Services Grid */}
          <div className={styles.servicesSection}>
            <p className={styles.servicesLabel}>OUR SERVICES</p>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={styles.serviceItem}
                >
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.serviceDescription}>
                      {service.description}
                    </span>
                  </div>
                  <span className={styles.serviceArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
