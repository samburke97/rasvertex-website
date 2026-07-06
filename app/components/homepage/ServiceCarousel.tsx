// app/components/homepage/ServiceCarousel.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import styles from "./ServiceCarousel.module.css";

export interface ServiceCarouselSlide {
  src: string;
  alt: string;
  title: string;
  body?: string;
  industries?: string[];
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
      <div className={styles.carouselWrap} role="region" aria-label={ariaLabel}>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.track} onMouseLeave={() => setActiveIdx(snapIdx)}>
            {slides.map((slide, i) => (
              <Link
                key={i}
                href={slide.href}
                className={`${styles.slide} ${i % 2 === 1 ? styles.slideDown : ""} ${activeIdx === i ? styles.slideActive : ""}`}
                aria-label={`${slide.title} — learn more`}
                onMouseEnter={() => setActiveIdx(i)}
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
                <ArrowIcon />

                <div className={styles.tag}>
                  <h3 className={styles.tagTitle}>{slide.title}</h3>
                  {slide.industries && slide.industries.length > 0 && (
                    <span className={styles.tagLocation}>
                      {slide.industries.join(" · ")}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer row — CTA left, arrows right ── */}
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
      </div>
    </div>
  );
}
