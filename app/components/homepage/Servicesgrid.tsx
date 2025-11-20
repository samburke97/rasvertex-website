"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData, type ServiceKey } from "../../data/navigationData";
import Container from "../Container";
import styles from "./Servicesgrid.module.css";

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
      <Container size="xl">
        <p className={styles.subtitle}>Every building, any height.</p>
        <div className={styles.categories}>
          <h2 className={styles.category}>Residential</h2>
          <h2 className={styles.category}>Commercial</h2>
          <h2 className={styles.category}>Body Corporate</h2>
        </div>

        <Link href="/services" className={styles.allServicesButton}>
          All Services
        </Link>

        <div className={styles.grid}>
          {serviceKeys.map((key) => {
            const service = servicesData[key];
            return (
              <Link key={key} href={service.href} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.serviceName}>
                    {service.name.toUpperCase()}
                  </h3>

                  <div className={styles.pills}>
                    {service.subServices.map((subService) => (
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
      </Container>
    </section>
  );
}
