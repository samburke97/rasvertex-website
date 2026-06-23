// app/components/homepage/ServiceCarousel.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import styles from "./ServiceCarousel.module.css";

export interface ServiceCarouselSlide {
  src: string;
  alt: string;
  title: string;
  body: string;
  href: string;
  mediaType: "image" | "video";
}

interface ServiceCarouselProps {
  slides: ServiceCarouselSlide[];
  ariaLabel?: string;
}

const ArrowIcon = () => (
  <span className={styles.cardArrow} aria-hidden="true">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function ServiceCarousel({
  slides,
  ariaLabel = "Our services",
}: ServiceCarouselProps) {
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
          <div className={styles.track}>
            {slides.map((slide, i) => (
              <Link
                key={i}
                href={slide.href}
                className={`${styles.slide} ${i % 2 === 1 ? styles.slideDown : ""}`}
                aria-label={`${slide.title} — learn more`}
              >
                <div className={styles.mediaWrap}>
                  {slide.mediaType === "video" ? (
                    <video
                      src={slide.src}
                      className={styles.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      src={slide.src}
                      alt=""
                      fill
                      className={styles.media}
                      sizes="36vw"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className={styles.overlay} aria-hidden="true" />

                <ArrowIcon />

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{slide.title}</h3>
                  <p className={styles.cardBody}>{slide.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer row — arrows bottom-left, CTA bottom-right ── */}
      <div className={styles.footer}>
        <div className={styles.nav} role="group" aria-label="Browse services">
          <button
            className={styles.navBtn}
            onClick={scrollPrev}
            aria-label="Previous"
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
            aria-label="Next"
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

        <Link
          href="/contact"
          className={styles.cta}
          aria-label="Let's talk about your project"
        >
          Let&rsquo;s talk about your project
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
    </div>
  );
}
