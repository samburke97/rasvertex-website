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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* STICKY LEFT COLUMN */}
        <div className={styles.leftColumn}>
          <div className={styles.leftContent}>
            {/* Top Section */}
            <div className={styles.topSection}>
              {/* Tagline */}
              <p className={styles.tagline}>Every building, any height.</p>

              {/* Category Buttons */}
              <div className={styles.categories}>
                <button className={styles.categoryButton}>RESIDENTIAL</button>
                <button className={styles.categoryButton}>COMMERCIAL</button>
                <button className={styles.categoryButton}>
                  BODY CORPORATE
                </button>
              </div>

              {/* All Services Button */}
              <button className={styles.allServicesButton}>All Services</button>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <Image
                src="/images/people/caro.jpg"
                alt="Caroline"
                width={100}
                height={100}
                className={styles.ctaAvatar}
              />
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

        {/* SCROLLABLE RIGHT COLUMN */}
        <div className={styles.rightColumn}>
          <div className={styles.servicesGrid}>
            {serviceKeys.map((key, index) => {
              const service = servicesData[key];

              return (
                <Link
                  key={key}
                  href={service.href}
                  className={styles.serviceCard}
                >
                  {/* Image */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={serviceImages[key]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      style={{ objectFit: "cover" }}
                      priority={index < 2}
                    />
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.serviceTitle}>{service.name}</h3>
                    <p className={styles.description}>{service.description}</p>

                    {/* Pills */}
                    <div className={styles.pills}>
                      {service.subServices.slice(0, 4).map((subService) => (
                        <span key={subService} className={styles.pill}>
                          {subService}
                        </span>
                      ))}
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
