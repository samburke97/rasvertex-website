"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const PHOTOS = [
  { src: "/images/projects/1.jpeg", alt: "Mooloolaba high-rise repaint" },
  { src: "/images/projects/2.jpeg", alt: "Coolum facade wash" },
  { src: "/nav/height.png", alt: "Height safety" },
  { src: "/nav/waterproofing.png", alt: "Waterproofing" },
  { src: "/nav/maintenance.png", alt: "Maintenance" },
];

const slides = [...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS];

const LEDE =
  "One project manager, from first phone call to warranty sign-off. One number, one invoice, one thread.";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: false,
    startIndex: PHOTOS.length,
  });

  return (
    <section className={styles.section}>
      {/* ── Top row: title block, then lede/CTA ─────────────── */}
      <div className={styles.top}>
        <h1 className={styles.title}>
          Painting the Sunshine Coast for 25 years. Body corporate, strata,
          residential, and commercial painters.
        </h1>
        <div className={styles.topRight}>
          <p className={styles.lede}>{LEDE}</p>
          <Link href="/contact" className={styles.cta}>
            Get a free quote →
          </Link>
        </div>
      </div>

      {/* ── Full-bleed carousel ─────────────────────────────── */}
      <div className={styles.carouselWrap}>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.carouselTrack}>
            {slides.map((p, i) => (
              <div key={i} className={styles.slide}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
