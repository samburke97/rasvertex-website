// app/components/shared/ServiceHero.tsx

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceHero.module.css";

export interface HeroSlide {
  src: string;
  alt: string;
}

interface ServiceHeroProps {
  /** Page h1 — full sentence, SEO-rich */
  heading: string;
  /** Short lede paragraph below h1 */
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
  slides: HeroSlide[];
  /** Used for aria-labelledby — must be unique per page */
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
  // Manual tripling — no Embla loop clones, so CSS gap works at every seam
  const looped = [...slides, ...slides, ...slides];

  const [emblaRef] = useEmblaCarousel({
    loop: false, // Embla does NOT loop — manual triple provides the buffer
    dragFree: true,
    align: "start",
    containScroll: false,
    startIndex: slides.length, // start in the middle set
  });

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Top: h1 left, lede + CTA right ── */}
      <header className={styles.top}>
        <h1 id={headingId}>{heading}</h1>
        <div className={styles.topRight}>
          <p className="p-soft">{lede}</p>
          <Link href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
            {ctaLabel}
          </Link>
        </div>
      </header>

      {/* ── Staggered carousel ── */}
      <div
        className={styles.carouselWrap}
        role="region"
        aria-label="Project photo gallery"
      >
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.track} aria-hidden="true">
            {looped.map((slide, i) => (
              <div
                key={i}
                className={`${styles.slide} ${i % 2 === 1 ? styles.slideDown : ""}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="33vw"
                  priority={i < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
