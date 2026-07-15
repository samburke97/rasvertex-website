// app/components/homepage/RopeAccessSection.tsx

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import styles from "./RopeAccessSection.module.css";

interface RopeAccessSectionLogo {
  src: string;
  alt: string;
}

export interface RopeAccessSectionGroup {
  /** Optional h4 sub-heading rendered above this group's paragraphs */
  heading?: string;
  paragraphs: string[];
}

interface RopeAccessSectionProps {
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageAspectRatio?: string;
  heading?: ReactNode;
  headingLevel?: "h1" | "h2";
  headingId?: string;
  body?: ReactNode;
  paragraphs?: string[];
  /** Groups of paragraphs, each with an optional h4 sub-heading. Takes priority over `paragraphs`/`body`. */
  contentGroups?: RopeAccessSectionGroup[];
  ctaHref?: string;
  ctaLabel?: string;
  imageTagName?: string;
  imageTagRole?: string;
  logos?: RopeAccessSectionLogo[];
  personName?: string;
  personRole?: string;
  personPhoto?: string;
  personCtaHeading?: string;
  /** Renders the heading full-width above the image/text row instead of inline beside the image */
  headingAbove?: boolean;
  /** Vertically anchors the text column's content to the top (default) or bottom of the image. Bottom removes the sticky scroll effect. */
  contentAlign?: "start" | "end";
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
  headingLevel = "h2",
  headingId = "rope-access-heading",
  body,
  paragraphs = [
    "For over 25 years, we've made building maintenance simpler for Sunshine Coast body corporate communities, commercial and high-rise buildings, schools, homes and government facilities. By combining our expertise in painting, cleaning, maintenance, waterproofing and height safety under one roof, we've become the single local partner you can rely on to keep your building safe, performing and looking its best. ",
  ],
  contentGroups,
  ctaHref = "/contact",
  ctaLabel = "Get a free quote",
  logos,
  personName,
  personRole,
  personPhoto,
  personCtaHeading,
  headingAbove = false,
  contentAlign = "start",
}: RopeAccessSectionProps) {
  const HeadingTag = headingLevel;
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
    <div
      className={`${styles.textCol} ${contentAlign === "end" ? styles.textColEnd : ""}`}
    >
      <div className={styles.textBlock}>
        {!headingAbove && <HeadingTag id={headingId}>{heading}</HeadingTag>}
        {contentGroups ? (
          contentGroups.map((group, gi) => (
            <div key={gi} className={styles.contentGroup}>
              {group.heading && <h4>{group.heading}</h4>}
              {group.paragraphs.map((p, i) => (
                <p key={i} className="p-soft">
                  {p}
                </p>
              ))}
            </div>
          ))
        ) : paragraphs ? (
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
                  sizes="76px"
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
    <div>
      {headingAbove && (
        <HeadingTag id={headingId} className={styles.headingAbove}>
          {heading}
        </HeadingTag>
      )}
      <section
        className={`${styles.section} ${contentAlign === "end" ? styles.sectionEnd : ""}`}
        aria-labelledby={headingId}
      >
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
    </div>
  );
}
