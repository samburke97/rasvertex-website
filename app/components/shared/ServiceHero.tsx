// app/components/shared/ServiceHero.tsx

import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import PhotoCarousel, { type PhotoCarouselSlide } from "./PhotoCarousel";
import styles from "./ServiceHero.module.css";

export type HeroSlide = PhotoCarouselSlide;

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroTrustLogo {
  src: string;
  alt: string;
}

interface ServiceHeroProps {
  heading: React.ReactNode;
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
  slides?: HeroSlide[];
  /** Single static image — renders the side-by-side hero instead of the carousel */
  image?: HeroImage;
  /** Looping background video — takes priority over `image` in the side-by-side hero */
  video?: string;
  /** Checkmarked trust list rendered under the CTA in the side-by-side hero */
  checklist?: string[];
  /** Shows the Google rating badge under the checklist in the side-by-side hero */
  showGoogleRating?: boolean;
  /**
   * Full-width heading with lede + Google rating below, then the video
   * right-aligned beneath it.
   */
  minimal?: boolean;
  /**
   * Small logo grid beside the video in the minimal hero. The column
   * starts ~60% down the video and stays sticky until it meets the
   * video's bottom edge.
   */
  trustLogos?: HeroTrustLogo[];
  /** Small heading above the trust logo grid */
  trustLogosHeading?: React.ReactNode;
  headingId?: string;
  breadcrumb?: { parentLabel: string; parentHref: string; currentLabel: string };
}

export default function ServiceHero({
  heading,
  lede,
  ctaLabel = "Get a free quote →",
  ctaHref = "/contact",
  slides,
  image,
  video,
  checklist,
  showGoogleRating = false,
  minimal = false,
  trustLogos,
  trustLogosHeading,
  headingId = "service-hero-heading",
  breadcrumb,
}: ServiceHeroProps) {
  const cta = ctaLabel && (
    <Link href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
      {ctaLabel.slice(0, ctaLabel.lastIndexOf('→')).trimEnd()}
    </Link>
  );

  const breadcrumbNav = breadcrumb && (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link href={breadcrumb.parentHref} className={styles.breadcrumbLink}>
        {breadcrumb.parentLabel}
      </Link>
      <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
      <span className={styles.breadcrumbCurrent}>{breadcrumb.currentLabel}</span>
    </nav>
  );

  const googleRatingBadge = showGoogleRating && (
    <div className={styles.ratingBadge} aria-label="Google Rating: 4.9 out of 5">
      <svg
        className={styles.googleIcon}
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="var(--navy)"
        aria-hidden="true"
      >
        <path d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.71-2.44 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.06C3.24 21.3 7.26 24 12 24zM5.27 14.3c-.24-.71-.38-1.46-.38-2.3s.14-1.59.38-2.3V6.64H1.27A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.27 5.36l4-3.06zM12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.24 2.7 1.27 6.64l4 3.06C6.22 6.86 8.87 4.75 12 4.75z" />
      </svg>
      <div className={styles.ratingText}>
        <span className={styles.ratingTitle}>Google Rating</span>
        <div className={styles.ratingScoreRow}>
          <span className={styles.ratingScore}>4.9</span>
          <div className={styles.stars} aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" width="13" height="13" fill="var(--navy)" aria-hidden="true">
                <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.6L12 17.6l-5.94 3.17 1.13-6.6-4.8-4.68 6.64-.97L12 2.5z" />
              </svg>
            ))}
          </div>
        </div>
        <span className={styles.ratingCount}>Based on 50+ reviews</span>
      </div>
    </div>
  );

  const checklistEl = checklist && checklist.length > 0 && (
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
  );

  const trustLogosEl = trustLogos && trustLogos.length > 0 && (
    <>
      {trustLogosHeading && (
        <h2 className={styles.minimalTrustLogosHeading}>{trustLogosHeading}</h2>
      )}
      <div className={styles.minimalTrustLogos}>
        {trustLogos.map((logo) => (
          <div key={logo.alt} className={styles.minimalTrustLogoWrap}>
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className={styles.minimalTrustLogoImg}
              sizes="120px"
            />
          </div>
        ))}
      </div>
    </>
  );

  if (minimal) {
    return (
      <section className={styles.minimalSection} aria-labelledby={headingId}>
        {breadcrumbNav}
        <h1 id={headingId}>{heading}</h1>
        <div className={styles.minimalRow}>
          <p className="p-soft">{lede}</p>
          {googleRatingBadge}
        </div>
        {(video || image) && (
          <div className={styles.minimalMediaRow}>
            {trustLogosEl && (
              <div className={styles.minimalTrustColOuter}>
                <div className={styles.minimalTrustSpacer} aria-hidden="true" />
                <div className={styles.minimalTrustCol}>{trustLogosEl}</div>
              </div>
            )}
            <div className={styles.minimalVideoWrap}>
              {video ? (
                <video
                  src={video}
                  className={styles.minimalVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                />
              ) : (
                <Image
                  src={image!.src}
                  alt={image!.alt}
                  fill
                  className={styles.minimalVideo}
                  sizes="70vw"
                  priority
                />
              )}
            </div>
          </div>
        )}
      </section>
    );
  }

  if (video || image) {
    return (
      <section className={styles.staticSection} aria-labelledby={headingId}>
        <div className={styles.staticTop}>
          <div className={styles.staticLeft}>
            {breadcrumbNav}
            <h1 id={headingId}>{heading}</h1>
            <p className="p-soft">{lede}</p>
            {cta}

            {checklistEl || showGoogleRating ? (
              <div className={styles.trustRow}>
                {checklistEl}
                {googleRatingBadge}
              </div>
            ) : null}
          </div>
          <div className={styles.staticRight}>
            {video ? (
              <video
                src={video}
                className={styles.staticImage}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
            ) : (
              <Image
                src={image!.src}
                alt={image!.alt}
                fill
                className={styles.staticImage}
                sizes="(max-width: 860px) 100vw, 45vw"
                priority
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Top: h1 left, lede + CTA right ── */}
      <header className={styles.top}>
        <div className={styles.heading}>
          {breadcrumbNav}
          <h1 id={headingId}>{heading}</h1>
        </div>
        <div className={styles.topRight}>
          <p className="p-soft">{lede}</p>
          {cta}
        </div>
      </header>

      {/* ── Looping carousel — only rendered when slides provided ── */}
      {slides && slides.length > 0 && (
        <PhotoCarousel slides={slides} ariaLabel="Project photo gallery" />
      )}
    </section>
  );
}
