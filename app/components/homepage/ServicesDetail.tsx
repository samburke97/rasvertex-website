"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { servicesData, ServiceKey } from "@/app/data/navigationData";
import styles from "./ServicesDetail.module.css";

const serviceKeys = Object.keys(servicesData) as ServiceKey[];

export default function ServicesDetail() {
  const [activeService, setActiveService] = useState<ServiceKey>("painting");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "up" | "down") => {
    if (scrollRef.current) {
      const scrollAmount = 160; // height of one card + gap
      scrollRef.current.scrollBy({
        top: direction === "down" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Services</h2>

        <div className={styles.grid}>
          {/* LEFT - Cards with scroll */}
          <div className={styles.left}>
            <div className={styles.cardsScroll} ref={scrollRef}>
              {serviceKeys.map((key, idx) => {
                const service = servicesData[key];
                const isActive = activeService === key;

                return (
                  <button
                    key={key}
                    className={`${styles.card} ${
                      isActive ? styles.cardActive : ""
                    } ${isActive ? styles.cardWhite : ""}`}
                    onClick={() => setActiveService(key)}
                  >
                    <div className={styles.circle}>
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="140px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.content}>
                      <h3 className={styles.name}>{service.name}</h3>
                      <p className={styles.desc}>{service.description}</p>
                    </div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle
                        cx="20"
                        cy="20"
                        r="19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path d="M16 12L28 20L16 28V12Z" fill="currentColor" />
                    </svg>
                  </button>
                );
              })}
            </div>

            <div className={styles.scroll}>
              <span>scroll for more</span>
              <div className={styles.line}></div>
              <button className={styles.btn} onClick={() => handleScroll("up")}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 12L8 4M8 4L4 8M8 4L12 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <button
                className={`${styles.btn} ${styles.btnFill}`}
                onClick={() => handleScroll("down")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 4L8 12M8 12L12 8M8 12L4 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT - Big image */}
          <div className={styles.right}>
            <div className={styles.big}>
              <Image
                key={activeService}
                src={servicesData[activeService].image}
                alt={servicesData[activeService].name}
                fill
                sizes="70vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <button className={styles.play}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="white" />
                  <path d="M32 24L56 40L32 56V24Z" fill="#8b2f3f" />
                </svg>
              </button>
              <div className={styles.cap}>
                <p>{servicesData[activeService].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
