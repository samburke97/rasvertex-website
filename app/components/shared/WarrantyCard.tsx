// app/components/shared/WarrantyCard.tsx

import Image from "next/image";
import styles from "./WarrantyCard.module.css";

export interface WarrantyCardLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface WarrantyCardProps {
  stat: string;
  statLabel: string;
  heading: React.ReactNode;
  body: string | string[];
  logos?: WarrantyCardLogo[];
  /** Small heading above the logos column, e.g. "Backed by the best." */
  logosHeading?: string;
}

const DEFAULTS: WarrantyCardProps = {
  stat: "8",
  statLabel: "year\nwarranty",
  heading: "Standing by our team, and our products.",
  body: "We back every exterior paint job with an 8-year written warranty — covering both workmanship and the paint system itself. We only specify Haymes and Dulux commercial systems because we know they perform in coastal Queensland conditions, and we're confident enough in our application to put our name behind both.",
};

export default function WarrantyCard({
  stat = DEFAULTS.stat,
  statLabel = DEFAULTS.statLabel,
  heading = DEFAULTS.heading,
  body = DEFAULTS.body,
  logos,
  logosHeading,
}: Partial<WarrantyCardProps>) {
  return (
    <article
      className={styles.card}
      aria-label={typeof heading === "string" ? heading : undefined}
    >
      <div className={styles.badgeCol}>
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
      </div>

      <div className={styles.content}>
        <h2>{heading}</h2>
        {Array.isArray(body) ? (
          body.map((p, i) => (
            <p key={i} className="p-soft">{p}</p>
          ))
        ) : (
          <p className="p-soft">{body}</p>
        )}
      </div>

      {logos && logos.length > 0 && (
        <div className={styles.logosCol}>
          {logosHeading && <h3 className={styles.logosHeading}>{logosHeading}</h3>}
          <ul className={styles.logos} aria-label="Accreditations and partners">
            {logos.map((logo) => (
              <li key={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={styles.logo}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
