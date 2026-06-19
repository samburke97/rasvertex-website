// app/components/shared/PhotoCarousel.tsx

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import styles from "./PhotoCarousel.module.css";

export interface PhotoCarouselSlide {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  slides: PhotoCarouselSlide[];
  ariaLabel?: string;
}

export default function PhotoCarousel({
  slides,
  ariaLabel = "Project photo gallery",
}: PhotoCarouselProps) {
  const tripled = [...slides, ...slides, ...slides];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.carouselWrap} role="region" aria-label={ariaLabel}>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.track} aria-hidden="true">
            {tripled.map((slide, i) => (
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

      {/* ── Prev / next — bottom-right ── */}
      <div className={styles.nav} role="group" aria-label="Browse photos">
        <button
          className={styles.navBtn}
          onClick={scrollPrev}
          aria-label="Previous photos"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9.25"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11.5 6.5L8 10L11.5 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={styles.navBtn}
          onClick={scrollNext}
          aria-label="Next photos"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9.25"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8.5 6.5L12 10L8.5 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
