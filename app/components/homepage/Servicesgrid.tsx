"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LocomotiveScroll from "locomotive-scroll";
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
  const scrollRef = useRef<HTMLElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  const serviceKeys: ServiceKey[] = [
    "painting",
    "building",
    "window",
    "waterproofing",
    "maintenance",
    "height",
  ];

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: false, // Keep native scroll, just use for sticky
      tablet: {
        smooth: false,
      },
      smartphone: {
        smooth: false,
      },
    });

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return (
    <section ref={scrollRef} data-scroll-container className={styles.section}>
      <div data-scroll-section className={styles.container}>
        {/* LEFT COLUMN - STICKY */}
        <div className={styles.leftColumn} id="sticky-target">
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sticky-target"
            className={styles.leftContent}
          >
            <p className={styles.eyebrow}>Every building, any height.</p>
            <h2 className={styles.heading}>Residential</h2>
            <h2 className={styles.heading}>Commercial</h2>
            <h2 className={styles.heading}>Body Corporate</h2>
            <Link href="/services" className={styles.button}>
              All Services
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN - SCROLLS */}
        <div className={styles.rightColumn}>
          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {serviceKeys.map((key) => {
              const service = servicesData[key];
              return (
                <Link
                  key={key}
                  href={service.href}
                  className={styles.serviceCard}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={serviceImages[key]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.imageOverlay}>
                      <h3 className={styles.serviceTitle}>
                        {service.name.toUpperCase()}
                      </h3>
                    </div>
                  </div>

                  <div className={styles.tags}>
                    {service.subServices.map((sub) => (
                      <span key={sub} className={styles.tag}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className={styles.ctaCard}>
            <Image
              src="/images/avatar.jpg"
              alt="Contact us"
              width={80}
              height={80}
              className={styles.avatar}
            />
            <h3 className={styles.ctaHeading}>Time to paint your place?</h3>
            <p className={styles.ctaText}>
              Painting projects can feel a bit full-on. Don't stress. We've been
              doing this for 50 years. We've got this.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Let's talk about your project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
