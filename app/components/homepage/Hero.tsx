"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const ArrowIcon = () => (
  <div className={styles.arrowIcon}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section className={styles.section} data-nav-fixed="true">
      <div className={styles.stage}>
        <div className={styles.bentoGrid}>
          <Link
            href="/services/painting"
            className={`${styles.card} ${styles.painting}`}
          >
            <div className={styles.imageWrap}>
              <video
                src="/videos/painting.mp4"
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Painting</p>
            </div>
          </Link>

          <Link
            href="/services/maintenance"
            className={`${styles.card} ${styles.maintenance}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src="/nav/maintenance.png"
                alt="Maintenance"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Maintenance</p>
            </div>
          </Link>

          <Link
            href="/services/waterproofing"
            className={`${styles.card} ${styles.waterproofing}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src="/nav/waterproofing.png"
                alt="Waterproofing"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Waterproofing</p>
            </div>
          </Link>

          <Link
            href="/services/cleaning"
            className={`${styles.card} ${styles.cleaning}`}
          >
            <div className={styles.imageWrap}>
              <video
                src="/videos/cleaning.mp4"
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className={styles.overlay} />
            <ArrowIcon />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>Cleaning</p>
            </div>
          </Link>

          <div className={styles.col4}>
            <Link
              href="/services/height-safety"
              className={`${styles.card} ${styles.heightSafety}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src="/nav/height.png"
                  alt="Height Safety"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay} />
              <ArrowIcon />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>Height Safety</p>
              </div>
            </Link>

            {/* Brand card — maroon, same card behaviour as photo cards */}
            <Link
              href="/services"
              className={`${styles.card} ${styles.brandCard}`}
            >
              <ArrowIcon />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>One Partner.</p>
                <p className={styles.cardBody}>
                  Complete property maintenance for commercial, body corporate,
                  and strata across the Sunshine Coast.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
