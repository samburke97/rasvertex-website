// app/components/shared/LogoStrip.tsx

import Image from "next/image";
import styles from "./LogoStrip.module.css";

export interface StripLogo {
  src: string;
  alt: string;
}

interface LogoStripProps {
  logos: StripLogo[];
  label?: string;
}

export default function LogoStrip({
  logos,
  label = "Trusted by",
}: LogoStripProps) {
  const track = [...logos, ...logos];

  return (
    <div className={styles.wrap} aria-label={label}>
      <div className={styles.fadeLeft} aria-hidden="true" />
      <div className={styles.fadeRight} aria-hidden="true" />
      <div className={styles.track} aria-hidden="true" role="presentation">
        {track.map((l, i) => (
          <div key={i} className={styles.logoWrap}>
            <Image
              src={l.src}
              alt={l.alt}
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              sizes="140px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
