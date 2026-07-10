// app/components/shared/PhotoCarousel.tsx

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./PhotoCarousel.module.css";

export interface PhotoCarouselSlide {
  src: string;
  alt: string;
  title?: string;
  location?: string;
}

interface PhotoCarouselProps {
  slides: PhotoCarouselSlide[];
  ariaLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PhotoCarousel({
  slides,
  ariaLabel = "Project photo gallery",
  ctaLabel,
  ctaHref,
}: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
    containScroll: "keepSnaps",
  });

  const [activeIdx, setActiveIdx] = useState(0);
  const [snapIdx, setSnapIdx] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      setSnapIdx(idx);
      setActiveIdx(idx);
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <div role="region" aria-label={ariaLabel}>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.track} onMouseLeave={() => setActiveIdx(snapIdx)}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`${styles.slide} ${i % 2 === 1 ? styles.slideDown : ""} ${activeIdx === i ? styles.slideActive : ""}`}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 860px) 60vw, (max-width: 560px) 80vw, 30vw"
                  priority={i === 0}
                />
                {slide.title && (
                  <div className={styles.tag}>
                    <h3 className={styles.tagTitle}>{slide.title}</h3>
                    {slide.location && (
                      <span className={styles.tagLocation}>{slide.location}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.nav} role="group" aria-label="Browse photos">
          <button className={styles.navBtn} onClick={scrollPrev} aria-label="Previous photos">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.5 6.5L8 10L11.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className={styles.navBtn} onClick={scrollNext} aria-label="Next photos">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8.5 6.5L12 10L8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {ctaLabel && ctaHref && (
          <Link href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
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
        )}
      </div>
    </div>
  );
}
