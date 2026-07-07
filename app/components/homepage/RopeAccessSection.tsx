// app/components/homepage/RopeAccessSection.tsx

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import styles from "./RopeAccessSection.module.css";

interface RopeAccessSectionLogo {
  src: string;
  alt: string;
}

interface RopeAccessSectionProps {
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageAspectRatio?: string;
  heading?: ReactNode;
  headingId?: string;
  body?: ReactNode;
  paragraphs?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  imageTagName?: string;
  imageTagRole?: string;
  logos?: RopeAccessSectionLogo[];
  personName?: string;
  personRole?: string;
  personPhoto?: string;
  personCtaHeading?: string;
}

export default function RopeAccessSection({
  image = "/images/projects/rope-access.png",
  imageAlt = "IRATA-certified rope access technicians working on a Sunshine Coast high-rise",
  imagePosition = "left",
  imageAspectRatio = "1 / 1",
  imageTagName,
  imageTagRole,
  heading = (
    <>
      Trusted by the Sunshine Coast,
      <br />
      for over 25 years.
    </>
  ),
  headingId = "rope-access-heading",
  body,
  paragraphs = [
    "For over 25 years, we've maintained buildings across the Sunshine Coast. From waterfront apartment towers and body corporate communities to schools, hotels, shopping centres and family homes, we've built our reputation by doing the job properly, every time. The products we specify, the people we employ and the way we manage every project are shaped by decades of local experience.",
  ],
  ctaHref = "/contact",
  ctaLabel = "Get a free quote",
  logos,
  personName,
  personRole,
  personPhoto,
  personCtaHeading,
}: RopeAccessSectionProps) {
  const imageEl = (
    <div
      className={styles.imageCol}
      style={{ "--rope-image-ratio": imageAspectRatio } as CSSProperties}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className={styles.image}
        sizes="(max-width: 860px) 100vw, 50vw"
        priority
      />
      {imageTagName && (
        <div className={styles.imageTag}>
          <span className={styles.imageTagName}>{imageTagName}</span>
          {imageTagRole && (
            <span className={styles.imageTagRole}>{imageTagRole}</span>
          )}
        </div>
      )}
    </div>
  );

  const textEl = (
    <div className={styles.textCol}>
      <div className={styles.textBlock}>
        <h2 id={headingId}>{heading}</h2>
        {paragraphs ? (
          paragraphs.map((p, i) => (
            <p key={i} className="p-soft">
              {p}
            </p>
          ))
        ) : (
          <p className="p-soft">{body}</p>
        )}
        {personName ? (
          <div className={styles.personCard}>
            <div className={styles.personAvatarRow}>
              <div className={styles.personAvatar}>
                <Image
                  src={personPhoto ?? "/images/people/caro.jpg"}
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
            {ctaLabel && ctaHref && (
              <Link href={ctaHref} className={styles.cta}>
                {ctaLabel}
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
        ) : (
          ctaLabel &&
          ctaHref && (
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          )
        )}
        {logos && logos.length > 0 && (
          <div
            className={styles.logos}
            aria-label="Community organisations we support"
          >
            {logos.map((logo) => (
              <div key={logo.src} className={styles.logoWrap}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className={styles.logoImg}
                  sizes="110px"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {imagePosition === "left" ? (
        <>
          {imageEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {imageEl}
        </>
      )}
    </section>
  );
}
