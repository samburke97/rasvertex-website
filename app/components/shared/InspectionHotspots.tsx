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
  videoTagName?: string;
  videoTagLocation?: string;
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
  videoTagName,
  videoTagLocation,
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
              {ctaLabel.slice(0, ctaLabel.lastIndexOf("→")).trimEnd()}
              <svg
                className={styles.ctaArrow}
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
          {videoTagName && (
            <div className={styles.videoTag}>
              <span className={styles.videoTagName}>{videoTagName}</span>
              {videoTagLocation && (
                <span className={styles.videoTagLocation}>{videoTagLocation}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
