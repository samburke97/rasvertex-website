"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData, type ServiceKey } from "../../data/navigationData";
import styles from "./ServicesGrid.module.css";

const serviceImages: Record<ServiceKey, string> = {
  painting: "/nav/painting.png",
  building: "/nav/cleaning.png",
  window: "/nav/window.png",
  waterproofing: "/nav/waterproofing.png",
  maintenance: "/nav/maintenance.png",
  height: "/nav/height.png",
};

export default function ServicesGrid() {
  const serviceKeys: ServiceKey[] = [
    "painting",
    "building",
    "window",
    "waterproofing",
    "maintenance",
    "height",
  ];

  const [activeService, setActiveService] = useState<ServiceKey>("painting");
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use scroll position to determine active service - no flickering
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which card's center is closest to viewport center
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(scrollPosition - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveService(serviceKeys[closestIndex]);
    };

    // Initial calculation
    handleScroll();

    // Throttle scroll events for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        {/* STICKY LEFT SIDE */}
        <div className={styles.fixedLeft}>
          <div className={styles.leftContent}>
            {/* Services list */}
            <div className={styles.servicesList}>
              {serviceKeys.map((key) => (
                <button
                  key={key}
                  className={`${styles.serviceButton} ${
                    activeService === key ? styles.active : ""
                  }`}
                >
                  {servicesData[key].name.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Section - sticky at bottom */}
            <div className={styles.ctaSection}>
              <Image
                src="/images/people/caro.jpg"
                alt="Caroline"
                width={120}
                height={120}
                className={styles.ctaAvatar}
              />
              <h3 className={styles.ctaTitle}>HOW CAN WE HELP?</h3>
              <p className={styles.ctaText}>
                Before you kick off your project, talk to the Sunshine Coast's
                experts. With over a decade working in our coastal conditions,
                we know what your building really needs. Let's chat.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Chat to our team
              </Link>
            </div>
          </div>
        </div>

        {/* SCROLLABLE RIGHT SIDE */}
        <div className={styles.scrollableRight}>
          {/* Services Grid - Single Column */}
          <div className={styles.grid}>
            {serviceKeys.map((key, index) => {
              const service = servicesData[key];
              const isActive = key === activeService;

              return (
                <Link
                  key={key}
                  href={service.href}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`${styles.serviceCard} ${
                    isActive ? styles.activeCard : styles.inactiveCard
                  }`}
                >
                  {/* Image */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={serviceImages[key]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Tag - always top right */}
                    <span className={styles.tag}>
                      {service.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Content (description + logos + pills) */}
                  <div className={styles.contentColumn}>
                    {/* Description at top */}
                    <p className={styles.description}>{service.description}</p>

                    {/* Bottom section: logos + pills */}
                    <div className={styles.bottomContent}>
                      {/* Pills at bottom */}
                      <div className={styles.pills}>
                        {service.subServices.map((subService) => (
                          <span key={subService} className={styles.pill}>
                            {subService}
                          </span>
                        ))}
                      </div>

                      {/* Partner logos for painting - after pills */}
                      {key === "painting" && (
                        <div className={styles.partnerLogos}>
                          <Image
                            src="/images/partners/mpa.png"
                            alt="MPA"
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                          />
                          <Image
                            src="/images/partners/dulux.png"
                            alt="Dulux Accredited Painter"
                            width={100}
                            height={50}
                            style={{ objectFit: "contain" }}
                          />
                          <Image
                            src="/images/partners/haymes.svg"
                            alt="Haymes Paint"
                            width={100}
                            height={50}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
