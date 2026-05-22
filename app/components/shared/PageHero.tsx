"use client";

// Shared hero — used by painting, maintenance, and all future service pages
// Identical carousel behaviour to painting/Hero.tsx (Embla, loop, dragFree)
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PageHero.module.css";

export interface HeroSlide {
  src: string;
  alt: string;
}

interface PageHeroProps {
  title: string;
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
  slides: HeroSlide[];
}

export default function PageHero({
  title,
  lede,
  ctaLabel = "Get a free quote →",
  ctaHref = "/contact",
  slides,
}: PageHeroProps) {
  const looped = [...slides, ...slides, ...slides, ...slides];

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: false,
    startIndex: slides.length,
  });

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.topRight}>
          <p className={styles.lede}>{lede}</p>
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>
      </div>

      <div className={styles.carouselWrap}>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.carouselTrack}>
            {looped.map((p, i) => (
              <div key={i} className={styles.slide}>
                <Image
                  src={p.src}
                  alt={p.alt}
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
