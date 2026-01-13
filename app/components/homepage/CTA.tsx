"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Background Pattern */}
        <div className={styles.pattern} />

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.label}>[ GET STARTED ]</p>
          <h2 className={styles.title}>
            Ready to maintain your property to a higher standard?
          </h2>
          <p className={styles.description}>
            Whether it's a full repaint, high-rise cleaning, waterproofing, or
            ongoing maintenance — we've got the expertise, the equipment, and
            the people to get it done right.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/contact" className={styles.buttonPrimary}>
              Get a Free Quote
            </Link>
            <Link href="tel:0754437100" className={styles.buttonSecondary}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1007 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.2599 16.748 18.2876 16.5167 18.2667C13.9523 17.9881 11.4892 17.1118 9.32498 15.7084C7.31151 14.4289 5.60443 12.7219 4.32498 10.7084C2.91663 8.53438 2.04019 6.05917 1.76665 3.48337C1.74583 3.25293 1.77338 3.02064 1.84718 2.80139C1.92098 2.58214 2.03975 2.38064 2.19574 2.20972C2.35173 2.0388 2.54156 1.90232 2.75314 1.80878C2.96472 1.71524 3.19348 1.66689 3.42498 1.66671H5.92498C6.32941 1.66273 6.72148 1.8056 7.03065 2.06965C7.33983 2.33369 7.54489 2.70143 7.60831 3.10004C7.72678 3.89576 7.93188 4.67569 8.21665 5.42504C8.31554 5.6778 8.34055 5.95365 8.28872 6.22022C8.2369 6.48679 8.11054 6.73278 7.92498 6.92504L6.82498 8.02504C8.01651 10.1371 9.76284 11.8834 11.875 13.075L12.975 11.975C13.1672 11.7895 13.4132 11.6631 13.6798 11.6113C13.9464 11.5595 14.2222 11.5845 14.475 11.6834C15.2243 11.9681 16.0043 12.1732 16.8 12.2917C17.2029 12.3557 17.574 12.5649 17.8387 12.8801C18.1034 13.1953 18.2434 13.5944 18.2333 14.0034V14.1H18.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              (07) 5443 7100
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>25+</span>
              <span className={styles.trustLabel}>Years Experience</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>500+</span>
              <span className={styles.trustLabel}>Properties Maintained</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>QBCC</span>
              <span className={styles.trustLabel}>Fully Licensed</span>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>→</span>
            <span className={styles.serviceName}>Commercial Painting</span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>→</span>
            <span className={styles.serviceName}>Residential Painting</span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>→</span>
            <span className={styles.serviceName}>High-Rise Cleaning</span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>→</span>
            <span className={styles.serviceName}>Waterproofing</span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>→</span>
            <span className={styles.serviceName}>Height Safety</span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>→</span>
            <span className={styles.serviceName}>Building Maintenance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
