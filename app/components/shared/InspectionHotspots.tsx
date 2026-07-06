// app/components/shared/InspectionHotspots.tsx

import Link from "next/link";
import styles from "./InspectionHotspots.module.css";

export interface Hotspot {
  n: string;
  x: string;
  y: string;
  title: string;
  priority: "1" | "2" | "3";
  priorityLabel: string;
  body: string;
  consequence: string;
}

interface InspectionHotspotsProps {
  heading: React.ReactNode;
  intro: string;
  methodBody: string;
  video: string;
  hotspots: Hotspot[];
  headingId?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function InspectionHotspots({
  heading,
  intro,
  methodBody,
  video,
  headingId = "hotspots-heading",
  ctaLabel,
  ctaHref = "/contact",
}: InspectionHotspotsProps) {
  return (
    <article className={styles.section} aria-labelledby={headingId}>
      <div className={styles.top}>
        <div className={styles.textCol}>
          <h2 id={headingId}>{heading}</h2>
          <p className="p-soft">{intro}</p>
          <p className="p-soft">{methodBody}</p>
          {ctaLabel && (
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          )}
        </div>

        <div className={styles.videoCard}>
          <video
            src={video}
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}
