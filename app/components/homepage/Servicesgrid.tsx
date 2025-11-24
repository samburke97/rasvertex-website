"use client";

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

const serviceDescriptions: Record<ServiceKey, string> = {
  painting:
    "From residential repaints to large-scale commercial projects, our experienced team delivers exceptional finishes that last in Sunshine Coast conditions.",
  building:
    "Comprehensive building cleaning and maintenance services for residential complexes, offices, and commercial properties across the Sunshine Coast.",
  window:
    "Professional window cleaning services including high-rise access, utilizing rope access techniques for buildings of any height.",
  waterproofing:
    "Expert waterproofing and protective coating solutions to safeguard your building against moisture damage and coastal weather.",
  maintenance:
    "Complete property maintenance services including repairs, touch-ups, and ongoing care to keep your building in pristine condition.",
  height:
    "Certified rope access specialists providing safe, efficient solutions for high-rise maintenance, inspections, and cleaning services.",
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
            <Image
              src="/images/people/caro.jpg"
              alt="Caroline"
              width={120}
              height={120}
              className={styles.avatar}
            />
            <h2 className={styles.ctaTitle}>How can we help?</h2>
            <p className={styles.ctaText}>
              Before you kick off your project, talk to the Sunshine
              Coast&apos;s experts. With over a decade working in our coastal
              conditions, we know what your building really needs. Let&apos;s
              chat.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Chat to our team
            </Link>
          </div>
        </div>

        {/* SCROLLABLE RIGHT SIDE */}
        <div className={styles.scrollableRight}>
          {/* Services Grid - Single Column */}
          <div className={styles.grid}>
            {serviceKeys.map((key) => {
              const service = servicesData[key];
              return (
                <div key={key} className={styles.cardWrapper}>
                  <div className={styles.card}>
                    <Link href={service.href}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={serviceImages[key]}
                          alt={service.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          style={{ objectFit: "cover" }}
                        />
                        <div className={styles.tag}>
                          {service.name.toUpperCase()}
                        </div>
                      </div>
                    </Link>
                    <p className={styles.description}>
                      {serviceDescriptions[key]}
                    </p>
                    <div className={styles.pills}>
                      {service.subServices.map((subService) => (
                        <span key={subService} className={styles.pill}>
                          {subService}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
