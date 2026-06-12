// app/components/shared/WarrantyCard.tsx

import styles from "./WarrantyCard.module.css";

interface WarrantyCardProps {
  stat: string;
  statLabel: string;
  heading: React.ReactNode;
  body: string;
}

const DEFAULTS: WarrantyCardProps = {
  stat: "8",
  statLabel: "year\nwarranty",
  heading: (
    <>
      Standing by our team,
      <br />
      and our products.
    </>
  ),
  body: "We back every exterior paint job with an 8-year written warranty — covering both workmanship and the paint system itself. We only specify Haymes and Dulux commercial systems because we know they perform in coastal Queensland conditions, and we're confident enough in our application to put our name behind both.",
};

export default function WarrantyCard({
  stat = DEFAULTS.stat,
  statLabel = DEFAULTS.statLabel,
  heading = DEFAULTS.heading,
  body = DEFAULTS.body,
}: Partial<WarrantyCardProps>) {
  return (
    <article
      className={styles.card}
      aria-label={typeof heading === "string" ? heading : undefined}
    >
      <div className={styles.badge} aria-hidden="true">
        <span className={styles.badgeNumber}>{stat}</span>
        <span className={styles.badgeLabel}>
          {statLabel.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>

      <div className={styles.content}>
        <h2>{heading}</h2>
        <p className="p-soft">{body}</p>
      </div>
    </article>
  );
}
