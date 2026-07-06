"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import {
  WHY_CHOOSE_US_SLIDES as DEFAULT_SLIDES,
  type CarouselSlide,
} from "../../data/homepageWhyChooseUsData";

export type { CarouselSlide };

interface CarouselProps {
  slides?: CarouselSlide[];
}

export default function Carousel({ slides = DEFAULT_SLIDES }: CarouselProps) {
  const [active, setActive] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
    containScroll: "keepSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className={styles.root} aria-label="Why choose RAS-VERTEX">
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((s, i) => (
            <article
              key={i}
              className={`${styles.slide} ${i !== active ? styles.slideInactive : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 860px) 72vw, (max-width: 560px) 85vw, 50vw"
                />
                <div className={styles.photoTag}>
                  <h3 className={styles.photoTagTitle}>{s.heading}</h3>
                </div>
              </div>
              <div className={styles.content}>
                <p className="p-soft">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.nav} role="group" aria-label="Browse slides">
          <button
            className={styles.navBtn}
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.5 6.5L8 10L11.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={styles.navBtn}
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8.5 6.5L12 10L8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
