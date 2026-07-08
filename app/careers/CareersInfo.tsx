// app/careers/CareersInfo.tsx

import styles from "./CareersInfo.module.css";

export default function CareersInfo() {
  return (
    <div className={styles.grid} role="group" aria-label="Contact details">
      <div className={styles.box}>
        <span className={styles.label}>Call us</span>
        <a href="tel:0753710201" className={styles.valueLink}>
          (07) 5371 0201
        </a>
      </div>
      <div className={styles.box}>
        <span className={styles.label}>Email</span>
        <a href="mailto:team@rasvertex.com.au" className={styles.valueLink}>
          team@rasvertex.com.au
        </a>
      </div>
      <div className={styles.box}>
        <span className={styles.label}>Hours</span>
        <span className={styles.value}>Mon–Fri, 7am–5pm</span>
      </div>
      <div className={styles.box}>
        <span className={styles.label}>Based at</span>
        <span className={styles.value}>
          1–3 Kessling Avenue, Kunda Park QLD 4556
        </span>
      </div>
    </div>
  );
}
