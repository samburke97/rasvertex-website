// app/components/shared/ServiceHeroSplit.tsx

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import styles from "./ServiceHeroSplit.module.css";

export interface ServiceHeroSplitImage {
  src: string;
  alt: string;
}

export interface ServiceHeroSplitBreadcrumb {
  parentLabel: string;
  parentHref: string;
  currentLabel: string;
}

interface ServiceHeroSplitProps {
  heading: ReactNode;
  headingId?: string;
  lede: string;
  breadcrumb?: ServiceHeroSplitBreadcrumb;
  /** Static hero image — ignored when `video` is provided */
  image?: ServiceHeroSplitImage;
  /** Looping background video — takes priority over `image` */
  video?: string;
  mediaPosition?: "left" | "right";
  mediaAspectRatio?: string;
  /** object-position for the media, e.g. "center 20%" to favour the top of the frame on the cropped mobile 16:9 ratio */
  mediaObjectPosition?: string;
  ctaLabel?: string;
  ctaHref?: string;
  personName?: string;
  personRole?: string;
  personPhoto?: string;
  personCtaHeading?: string;
}

export default function ServiceHeroSplit({
  heading,
  headingId = "service-hero-heading",
  lede,
  breadcrumb,
  image,
  video,
  mediaPosition = "left",
  mediaAspectRatio = "1 / 1",
  mediaObjectPosition = "50% 50%",
  ctaLabel = "Get a free quote →",
  ctaHref = "/contact",
  personName = "Caroline",
  personRole = "Client Services Manager",
  personPhoto = "/images/people/caro.jpg",
  personCtaHeading = "Ready to talk about your project?",
}: ServiceHeroSplitProps) {
  const mediaEl = (
    <div
      className={styles.mediaCol}
      style={
        {
          "--hero-media-ratio": mediaAspectRatio,
          "--hero-media-position": mediaObjectPosition,
        } as CSSProperties
      }
    >
      {video ? (
        <video
          src={video}
          className={styles.media}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      ) : image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={styles.media}
          sizes="(max-width: 860px) 100vw, 50vw"
          priority
        />
      ) : null}
    </div>
  );

  const textEl = (
    <div className={styles.textCol}>
      <div className={styles.textBlock}>
        {breadcrumb && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href={breadcrumb.parentHref} className={styles.breadcrumbLink}>
              {breadcrumb.parentLabel}
            </Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>{breadcrumb.currentLabel}</span>
          </nav>
        )}
        <h1 id={headingId} className={styles.heading}>{heading}</h1>
        <p className="p-soft">{lede}</p>
        {personName ? (
          <div className={styles.personCard}>
            <div className={styles.personAvatarRow}>
              <div className={styles.personAvatar}>
                <Image
                  src={personPhoto}
                  alt={`${personName} — ${personRole ?? ""} at RAS-VERTEX`}
                  fill
                  sizes="68px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.personInfo}>
                <span className={styles.personNameText}>{personName}</span>
                {personRole && (
                  <span className={styles.personRoleText}>{personRole}</span>
                )}
              </div>
            </div>
            {personCtaHeading && (
              <h2 className={styles.personCtaHeading}>{personCtaHeading}</h2>
            )}
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
          </div>
        ) : (
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
    </div>
  );

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {mediaPosition === "left" ? (
        <>
          {mediaEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {mediaEl}
        </>
      )}
    </section>
  );
}
