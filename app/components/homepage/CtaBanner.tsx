// app/components/homepage/CtaBanner.tsx

import Link from "next/link";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h2 className={styles.heading}>
          Let&rsquo;s talk about<br />your building.
        </h2>
        <p className={styles.sub}>
          25 years with Sunshine Coast body corporates, committees and property
          managers. On site within 48 hours &mdash; no obligation.
        </p>
      </div>

      <div className={styles.right}>
        <Link href="/contact" className={styles.quoteButton}>
          Get a free quote
          <svg
            className={styles.quoteArrow}
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

        <a href="tel:0753710201" className={styles.phoneButton} aria-label="Call RAS-VERTEX on 07 5371 0201">
          <svg
            className={styles.phoneIcon}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.04 1.5c-.4 0-.79.16-1.07.45L1.7 3.22c-.5.5-.65 1.25-.38 1.9.95 2.27 2.4 4.36 4.26 6.22 1.86 1.86 3.95 3.3 6.22 4.26.65.27 1.4.12 1.9-.38l1.27-1.27c.59-.6.59-1.55 0-2.15l-1.86-1.86c-.5-.5-1.27-.62-1.9-.3l-1.02.51a.85.85 0 0 1-.95-.16L6.3 7.05a.85.85 0 0 1-.16-.95l.51-1.02c.32-.63.2-1.4-.3-1.9L4.49 1.32a1.5 1.5 0 0 0-.45-.21V1.5z" />
          </svg>
          07 5371 0201
        </a>
      </div>
    </div>
  );
}
