"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData, type ServiceKey } from "../../data/navigationData";
import styles from "./ServicesGrid.module.css";

// Map service keys to nav image filenames
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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* STICKY LEFT SIDE */}
        <div className={styles.fixedLeft}>
          <div className={styles.leftContent}>
            <p className={styles.subtitle}>Every building, any height.</p>
            <h2 className={styles.category}>Residential</h2>
            <h2 className={styles.category}>Commercial</h2>
            <h2 className={styles.category}>Body Corporate</h2>
            <Link href="/services" className={styles.allServicesButton}>
              All Services
            </Link>
          </div>
        </div>

        {/* SCROLLABLE RIGHT SIDE */}
        <div className={styles.scrollableRight}>
          {/* Services Grid */}
          <div className={styles.grid}>
            {serviceKeys.map((key) => {
              const service = servicesData[key];
              return (
                <Link key={key} href={service.href} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={serviceImages[key]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.overlay}>
                      <h3 className={styles.serviceName}>
                        {service.name.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                  <div className={styles.pills}>
                    {service.subServices.map((subService) => (
                      <span key={subService} className={styles.pill}>
                        {subService}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA at bottom */}
          <div className={styles.cta}>
            <Image
              src="/images/avatar.jpg"
              alt="Contact"
              width={80}
              height={80}
              className={styles.avatar}
            />
            <h3 className={styles.ctaTitle}>Time to paint your place?</h3>
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
