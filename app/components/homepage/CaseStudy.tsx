"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudy.module.css";

const SERVICES = [
  "Full building wash across all 96 units and the main precinct",
  "Complete exterior repaint using coastal-spec systems and Dulux Weathershield",
  "Ongoing garden and grounds maintenance integrated into the resort schedule",
];

export default function CaseStudy() {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.racvLogo}>
            <Image
              src="/partners/racv.png"
              alt="RACV"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
          </div>
          <h2 className={styles.cardHeading}>
            From Brisbane contractors to a local partner, the right team,
            finally on the Sunshine Coast.
          </h2>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.photoCol}>
            <div className={styles.photo}>
              <Image
                src="/images/case/racv_1.jpg"
                alt="RACV Resort Noosa"
                fill
                className={styles.photoImg}
                sizes="(max-width: 900px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          <div className={styles.textCol}>
            <div className={styles.textBlock}>
              <p className={styles.client}>RACV Noosa Resort</p>
              <p className={styles.paragraph}>
                RACV Resort Noosa had been managing building maintenance through
                Brisbane-based contractors — and the distance showed. Slow
                mobilisation, unfamiliar crews on site, and no local
                accountability. They needed a Sunshine Coast partner who could
                actually be there when it mattered.
              </p>
              <p className={styles.paragraph}>
                We now run a dedicated maintenance program across the full
                resort complex. One project manager, one team, working through
                RACV&rsquo;s schedule so the resort never misses a beat.
              </p>
              <div className={styles.list}>
                {SERVICES.map((s) => (
                  <div key={s} className={styles.serviceRow}>
                    <span className={styles.serviceTick}>✓</span>
                    <span className={styles.serviceLabel}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.support}>
          <div className={styles.supportLeft}>
            <h3 className={styles.supportHeading}>
              Local team. Local knowledge. One number to call.
            </h3>
            <p className={styles.supportBody}>
              We work with resorts, body corporates, and commercial properties
              across the Sunshine Coast — on your schedule, with a dedicated
              project manager from day one.
            </p>
          </div>
          <div className={styles.supportRight}>
            <p className={styles.ctaLabel}>Ready to start your project?</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get a free quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
