// app/components/shared/ServiceIntro.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceIntro.module.css";

export interface IntroLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ServiceIntroProps {
  heading: React.ReactNode;
  paragraphs: string[];
  headingId?: string;
  logos?: IntroLogo[];
  /** Denser vertical spacing, narrower paragraph column pinned right */
  compact?: boolean;
  /** Full-width heading stacked above the paragraphs, instead of a side-by-side split */
  stacked?: boolean;
  /** Rendered as a button pinned to the right of the paragraph, bottom-aligned — stacked mode only */
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceIntro({
  heading,
  paragraphs,
  headingId = "service-intro-heading",
  logos,
  compact = false,
  stacked = false,
  ctaLabel,
  ctaHref,
}: ServiceIntroProps) {
  if (stacked) {
    const hasCta = ctaLabel && ctaHref;
    const ctaText = hasCta
      ? ctaLabel!.slice(0, ctaLabel!.lastIndexOf("→")).trimEnd()
      : "";

    return (
      <section className={styles.section} aria-labelledby={headingId}>
        <div className={styles.stacked}>
          <h2 id={headingId}>{heading}</h2>
          {logos && logos.length > 0 && (
            <ul
              className={styles.logos}
              aria-label="Accreditations and partners"
            >
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
          )}
          <div className={styles.stackedRow}>
            <div className={styles.stackedText}>
              {paragraphs.map((text, i) => (
                <p key={i} className={i === 0 ? "p" : "p-soft"}>
                  {text}
                </p>
              ))}
            </div>
            {hasCta && (
              <Link href={ctaHref!} className={styles.stackedCta}>
                {ctaText}
                <svg
                  className={styles.stackedCtaArrow}
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
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={`${styles.inner} ${compact ? styles.compact : ""}`}>
        {/* Left — sticky heading + optional logos */}
        <div className={styles.left}>
          <h2 id={headingId}>{heading}</h2>
          {logos && logos.length > 0 && (
            <ul
              className={styles.logos}
              aria-label="Accreditations and partners"
            >
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
          )}
        </div>

        {/* Right — body copy */}
        <div className={styles.right}>
          {paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? "p" : "p-soft"}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
