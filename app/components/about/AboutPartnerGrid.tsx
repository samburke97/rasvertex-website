// app/components/about/AboutPartnerGrid.tsx

import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./AboutPartnerGrid.module.css";

interface AboutPartnerGridLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface AboutPartnerGridProps {
  title?: ReactNode;
  paragraphs?: string[];
  photoSrc?: string;
  photoAlt?: string;
  imagePosition?: "left" | "right";
  logos?: AboutPartnerGridLogo[];
}

export default function AboutPartnerGrid({
  title = "One local partner for all your property maintenance needs.",
  paragraphs = [
    "Rather than managing multiple contractors, our clients have one experienced team that understands their property, coordinates every service and takes responsibility from inspection through to completion.",
    "Our dedicated teams take complete care of your property, supported by experienced project managers and specialist crews who deliver higher standards while making property maintenance simpler, more efficient and easier to manage.",
  ],
  photoSrc = "/images/projects/2.jpeg",
  photoAlt = "Facade restoration project on the Sunshine Coast",
  imagePosition = "right",
  logos,
}: AboutPartnerGridProps) {
  const textEl = (
    <div className={styles.text}>
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="p-soft">
          {p}
        </p>
      ))}
      {logos && logos.length > 0 && (
        <ul className={styles.logos} aria-label="Community sponsors">
          {logos.map((logo) => (
            <li key={logo.alt} className={styles.logoItem}>
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
      )}
    </div>
  );

  const photoEl = (
    <div className={styles.photoWrap}>
      <Image
        src={photoSrc}
        alt={photoAlt}
        fill
        className={styles.photo}
        sizes="(max-width: 860px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <div className={styles.row}>
      {imagePosition === "left" ? (
        <>
          {photoEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {photoEl}
        </>
      )}
    </div>
  );
}
