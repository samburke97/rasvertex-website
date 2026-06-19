// app/components/shared/ServiceHero.tsx

import Link from "next/link";
import PhotoCarousel, { type PhotoCarouselSlide } from "./PhotoCarousel";
import styles from "./ServiceHero.module.css";

export type HeroSlide = PhotoCarouselSlide;

interface ServiceHeroProps {
  heading: React.ReactNode;
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
  slides?: HeroSlide[];
  headingId?: string;
}

export default function ServiceHero({
  heading,
  lede,
  ctaLabel = "Get a free quote →",
  ctaHref = "/contact",
  slides,
  headingId = "service-hero-heading",
}: ServiceHeroProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Top: h1 left, lede + CTA right ── */}
      <header className={styles.top}>
        <h1 id={headingId}>{heading}</h1>
        <div className={styles.topRight}>
          <p className="p-soft">{lede}</p>
          {ctaLabel && (
            <Link href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
              {ctaLabel}
            </Link>
          )}
        </div>
      </header>

      {/* ── Looping carousel — only rendered when slides provided ── */}
      {slides && slides.length > 0 && (
        <PhotoCarousel slides={slides} ariaLabel="Project photo gallery" />
      )}
    </section>
  );
}
