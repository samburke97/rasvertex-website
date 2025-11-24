"use client";

import Image from "next/image";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>
            The Sunshine Coast's Property Partner
          </p>
          <h2 className={styles.title}>
            25+ Years serving our Sunshine Coast community, where our neighbours
            live, learn and work.
          </h2>
        </div>

        <div className={styles.badgeColumn}>
          <Image
            src="/images/google.svg"
            alt="Google Rating 5.0"
            width={200}
            height={75}
            className={styles.googleBadge}
          />
        </div>
      </div>
    </section>
  );
}
