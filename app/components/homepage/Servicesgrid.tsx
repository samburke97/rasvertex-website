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
                <div key={key}>
                  <Link href={service.href} className={styles.card}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={serviceImages[key]}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div className={styles.tag}>
                        {service.name.toUpperCase()}
                      </div>
                    </div>
                  </Link>
                  <div className={styles.pills}>
                    {service.subServices.map((subService) => (
                      <span key={subService} className={styles.pill}>
                        {subService}
                      </span>
                    ))}
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
