// app/components/shared/ServiceBeforeAfter.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceBeforeAfter.module.css";

export interface BeforeAfterSpec {
  label: string;
  value: string;
}

interface ServiceBeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  projectName: string;
  location: string;
  heading: string;
  body: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  authorLogo?: string;
  authorLogoAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  headingId?: string;
}

export default function ServiceBeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  projectName,
  location,
  heading,
  body,
  quote,
  quoteAuthor,
  quoteRole,
  authorLogo,
  authorLogoAlt,
  ctaHref = "/contact",
  ctaLabel = "Chat to us about your project →",
  headingId = "before-after-heading",
}: ServiceBeforeAfterProps) {
  return (
    <article aria-labelledby={headingId}>
      {/* ── Photos ── */}
      <div className={styles.photosRow}>
        <div className={styles.photo}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width:860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.tag}>
            <span className={styles.tagTitle}>{projectName}</span>
            <span className={styles.tagLocation}>{location} (Before)</span>
          </div>
        </div>
        <div className={styles.photo}>
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width:860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.tag}>
            <span className={styles.tagTitle}>{projectName}</span>
            <span className={styles.tagLocation}>{location} (After)</span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={`${styles.content} ${!quote ? styles.contentSingle : ""}`}>
        <div className={styles.left}>
          <h3 id={headingId}>{heading}</h3>
          <p className="p-soft">{body}</p>
          <Link
            href={ctaHref}
            className={styles.cta}
            aria-label={ctaLabel.slice(0, ctaLabel.lastIndexOf("→")).trimEnd()}
          >
            {ctaLabel.slice(0, ctaLabel.lastIndexOf('→')).trimEnd()}
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
        </div>
        {quote && (
          <div className={styles.right}>
            <figure className={styles.quote}>
              <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
              <blockquote className={styles.quoteText}>
                <p>{quote}</p>
              </blockquote>
              <figcaption className={styles.quoteAuthor}>
                {authorLogo && (
                  <div className={styles.authorLogo}>
                    <Image
                      src={authorLogo}
                      alt={authorLogoAlt ?? ""}
                      fill
                      sizes="40px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
                <div className={styles.authorInfo}>
                  <cite className={styles.authorName}>{quoteAuthor}</cite>
                  <span className={styles.authorRole}>{quoteRole}</span>
                </div>
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    </article>
  );
}
