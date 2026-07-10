// app/not-found.tsx

import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.watermark} aria-hidden="true">
        <span className={styles.watermarkText}>404.</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Page not found</p>
        <h1>We couldn&rsquo;t find<br />that page.</h1>
        <p className="p-soft">
          It may have moved, or the link might be wrong. Try heading back to the homepage or finding what you need below.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            Back to homepage
            <svg
              className={styles.btnArrow}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Get in touch
            <svg
              className={styles.btnArrow}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
