// app/components/shared/HeroTrustPanel.tsx

import Image from "next/image";
import Button from "../ui/Button";
import type { HeroImage } from "./ServiceHero";
import styles from "./HeroTrustPanel.module.css";

interface HeroTrustPanelProps {
  /** Small rounded photo above the checklist */
  photo?: HeroImage;
  checklist?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroTrustPanel({
  photo,
  checklist,
  ctaLabel = "Get a free quote →",
  ctaHref = "/contact",
}: HeroTrustPanelProps) {
  return (
    <div className={styles.panel}>
      {photo && (
        <div className={styles.photoWrap}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className={styles.photo}
            sizes="300px"
          />
        </div>
      )}
      {checklist && checklist.length > 0 && (
        <ul className={styles.checklist}>
          {checklist.map((item) => (
            <li key={item}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="var(--navy)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && (
        <Button as="link" href={ctaHref} variant="primary" aria-label={ctaLabel}>
          {ctaLabel.slice(0, ctaLabel.lastIndexOf('→')).trimEnd()}
        </Button>
      )}
    </div>
  );
}
