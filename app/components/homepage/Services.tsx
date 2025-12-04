"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData, type ServiceKey } from "../../data/navigationData";
import styles from "./Services.module.css";

const serviceImages: Record<ServiceKey, string> = {
  painting: "/nav/painting.png",
  building: "/nav/cleaning.png",
  window: "/nav/window.png",
  waterproofing: "/nav/waterproofing.png",
  maintenance: "/nav/maintenance.png",
  height: "/nav/height.png",
};

export default function Services() {
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
        {/* FULL WIDTH 2x3 GRID */}
        <div className={styles.servicesGrid}>
          {serviceKeys.map((key) => {
            const service = servicesData[key];

            return (
              <Link
                key={key}
                href={service.href}
                className={styles.serviceCard}
              >
                {/* Image - full bleed */}
                <div className={styles.imageContainer}>
                  <Image
                    src={serviceImages[key]}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Tag - always visible */}
                  <span className={styles.tag}>
                    {service.name.toUpperCase()}
                  </span>

                  {/* Hover overlay with content */}
                  <div className={styles.hoverOverlay}>
                    {/* Arrow icon - top right */}
                    <svg
                      className={styles.arrowIcon}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Content */}
                    <div className={styles.overlayContent}>
                      <h4 className={styles.overlayTitle}>
                        {service.name.toUpperCase()}
                      </h4>
                      <p className={styles.overlayDescription}>
                        {service.description}
                      </p>

                      {/* Pills */}
                      <div className={styles.overlayPills}>
                        {service.subServices.map((subService) => (
                          <span key={subService} className={styles.overlayPill}>
                            {subService}
                          </span>
                        ))}
                      </div>

                      {/* Partner logos for painting */}
                      {key === "painting" && (
                        <div className={styles.overlayLogos}>
                          <Image
                            src="/images/partners/mpa.png"
                            alt="MPA"
                            width={50}
                            height={50}
                            style={{ objectFit: "contain" }}
                          />
                          <Image
                            src="/images/partners/dulux.png"
                            alt="Dulux Accredited Painter"
                            width={80}
                            height={40}
                            style={{ objectFit: "contain" }}
                          />
                          <Image
                            src="/images/partners/haymes.svg"
                            alt="Haymes Paint"
                            width={80}
                            height={40}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
