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
              Before you kick off your project, talk to the Sunshine Coast's
              experts. With over a decade working in our coastal conditions, we
              know what your building really needs. Let's chat.
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
            {serviceKeys.map((key, index) => {
              const service = servicesData[key];
              const isEven = index % 2 === 0;

              return (
                <Link
                  key={key}
                  href={service.href}
                  className={`${styles.serviceCard} ${
                    isEven ? styles.imageLeft : styles.imageRight
                  }`}
                >
                  {/* Image */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={serviceImages[key]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Tag position alternates - always next to description */}
                    <span
                      className={`${styles.tag} ${
                        isEven ? styles.tagRight : styles.tagLeft
                      }`}
                    >
                      {service.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Content (description + logos + pills) */}
                  <div className={styles.contentColumn}>
                    {/* Description at top */}
                    <p className={styles.description}>{service.description}</p>

                    {/* Bottom section: logos + pills */}
                    <div className={styles.bottomContent}>
                      {/* Partner logos for painting */}
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

                      {/* Pills at bottom */}
                      <div className={styles.pills}>
                        {service.subServices.map((subService) => (
                          <span key={subService} className={styles.pill}>
                            {subService}
                          </span>
                        ))}
                      </div>
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
