"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesAlternating.module.css";

const services = [
  {
    id: "painting",
    name: "Painting",
    subtext: "Professional painting services",
    pills: ["Interior", "Exterior", "Roof Painting", "Strata", "Heritage"],
    image: "/nav/painting.png",
    href: "/services/painting",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    subtext: "Property maintenance solutions",
    pills: ["Preventative", "Reactive Repairs", "Inspections", "Emergency"],
    image: "/nav/maintenance.png",
    href: "/services/maintenance",
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    subtext: "Expert waterproofing",
    pills: ["Balconies", "Roofs", "Bathrooms", "Leak Detection", "Membranes"],
    image: "/nav/waterproofing.png",
    href: "/services/waterproofing",
  },
  {
    id: "cleaning",
    name: "Cleaning",
    subtext: "Commercial cleaning services",
    pills: ["Building Wash", "Window Cleaning", "Pressure Washing", "Facade"],
    image: "/nav/cleaning.png",
    href: "/services/cleaning",
  },
  {
    id: "height-safety",
    name: "Height Safety",
    subtext: "IRATA certified rope access",
    pills: ["Rope Access", "Anchor Points", "Safety Lines", "IRATA Certified"],
    image: "/nav/height.png",
    href: "/services/height-safety",
  },
  {
    id: "building-inspections",
    name: "Building Inspections",
    subtext: "Comprehensive property inspections",
    pills: ["Pre-Purchase", "Defect", "Maintenance", "Compliance"],
    image: "/nav/maintenance.png",
    href: "/services/building-inspections",
  },
];

export default function ServicesAlternating() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !gridWrapperRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Section is in view when top is between windowHeight and -sectionHeight
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        // Calculate progress: 0 when section just enters, 1 when it exits
        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          )
        );

        // Scroll the grid horizontally based on progress
        const maxScroll =
          gridWrapperRef.current.scrollWidth -
          gridWrapperRef.current.clientWidth;
        gridWrapperRef.current.scrollLeft = progress * maxScroll;

        // Update progress bar (cap at 50%)
        setScrollProgress(Math.min(50, progress * 100));
      }
    };

    // Also listen to manual scroll on the grid
    const handleGridScroll = () => {
      if (!gridWrapperRef.current) return;
      const scrollLeft = gridWrapperRef.current.scrollLeft;
      const maxScroll =
        gridWrapperRef.current.scrollWidth - gridWrapperRef.current.clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(50, progress));
    };

    window.addEventListener("scroll", handleScroll);
    if (gridWrapperRef.current) {
      gridWrapperRef.current.addEventListener("scroll", handleGridScroll);
    }

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (gridWrapperRef.current) {
        gridWrapperRef.current.removeEventListener("scroll", handleGridScroll);
      }
    };
  }, []);

  const renderCard = (service: (typeof services)[0], className: string) => (
    <Link
      href={service.href}
      className={`${styles.card} ${className}`}
      key={service.id}
    >
      <Image
        src={service.image}
        alt={service.name}
        fill
        className={styles.image}
      />
      <div className={styles.overlay} />
      <h3 className={styles.cardTitle}>{service.name}</h3>

      <div className={styles.hoverDetail}>
        <h3 className={styles.detailTitle}>{service.name}</h3>
        <p className={styles.detailSubtext}>{service.subtext}</p>
        <div className={styles.pills}>
          {service.pills.map((pill) => (
            <span key={pill} className={styles.pill}>
              {pill}
            </span>
          ))}
        </div>
        <div className={styles.arrow}>→</div>
      </div>
    </Link>
  );

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.titleSection}>
        <p className={styles.label}>[ PROPERTY SERVICES ]</p>
        <h2 className={styles.title}>WHAT WE DO BEST</h2>
      </div>

      <div className={styles.gridWrapper} ref={gridWrapperRef}>
        <div className={styles.bentoGrid}>
          {renderCard(services[0], styles.painting)}
          {renderCard(services[3], styles.cleaning)}
          {renderCard(services[4], styles.height)}
          {renderCard(services[5], styles.inspections)}
          {renderCard(services[1], styles.maintenance)}
          {renderCard(services[2], styles.waterproofing)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </section>
  );
}
