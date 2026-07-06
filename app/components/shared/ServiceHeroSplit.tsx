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
      style={{ "--hero-media-ratio": mediaAspectRatio } as CSSProperties}
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
              <h3 className={styles.personCtaHeading}>{personCtaHeading}</h3>
            )}
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          </div>
        ) : (
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
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
