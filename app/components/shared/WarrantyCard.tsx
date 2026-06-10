// app/components/shared/WarrantyCard.tsx

import styles from "./WarrantyCard.module.css";

export default function WarrantyCard() {
  return (
    <article
      className={styles.card}
      aria-label="8-year product and workmanship warranty"
    >
      <div className={styles.badge} aria-hidden="true">
        <span className={styles.badgeNumber}>8</span>
        <span className={styles.badgeLabel}>
          year
          <br />
          warranty
        </span>
      </div>

      <div className={styles.content}>
        <h2>
          Standing by our team,
          <br />
          and our products.
        </h2>
        <p className="p-soft">
          We back every exterior paint job with an 8-year written warranty —
          covering both workmanship and the paint system itself. We only specify
          Haymes and Dulux commercial systems because we know they perform in
          coastal Queensland conditions, and we're confident enough in our
          application to put our name behind both.
        </p>
      </div>
    </article>
  );
}
