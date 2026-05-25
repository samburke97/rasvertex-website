"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import styles from "./ExperienceSection.module.css";

const SLIDES = [
  {
    image: "/nav/painting.png",
    imageAlt: "Multi-trade team on commercial project",
    heading: "One partner. Every trade.",
    body: "From rope access and height safety to painting, waterproofing, cleaning, and remedial maintenance — one experienced in-house team.",
    cta: { label: "See our services →", href: "/services" },
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
    ],
  },
  {
    image: "/nav/cleaning.png",
    imageAlt: "Rope access technicians on high-rise exterior",
    heading: "We go where others can't.",
    body: "30+ IRATA-certified technicians. Faster mobilisation, reduced site impact, safer outcomes on high-rise and difficult-access projects.",
    cta: { label: "How rope access works →", href: "/services/maintenance" },
    logos: [],
  },
  {
    image: "/images/projects/1.jpeg",
    imageAlt: "Completed project on the Sunshine Coast",
    heading: "The Coast's most trusted partner.",
    body: "Body corporates, resorts, schools and commercial facilities trust us to deliver with professionalism, clear communication, and minimal disruption.",
    cta: { label: "See our work →", href: "/work" },
    logos: [],
  },
];

export default function ExperienceSection() {
  const [active, setActive] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    align: "start",
    containScroll: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setActive(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className={styles.section}>
      {/* ── Dots — top right ── */}
      <div className={styles.header}>
        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Carousel ── */}
      <div className={styles.carouselWrap}>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.track}>
            {SLIDES.map((s, i) => (
              <div
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
                    sizes="850px"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.heading}>{s.heading}</h3>
                  <p className={styles.body}>{s.body}</p>
                  {s.logos.length > 0 && (
                    <div className={styles.logos}>
                      {s.logos.map((l) => (
                        <div key={l.alt} className={styles.logoWrap}>
                          <Image
                            src={l.src}
                            alt={l.alt}
                            fill
                            style={{
                              objectFit: "contain",
                              objectPosition: "left center",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className={styles.btnWrap}>
                    <Button
                      as="link"
                      href={s.cta.href}
                      variant="primary"
                      size="md"
                    >
                      {s.cta.label}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.decorative} aria-hidden="true">
              <span>HIGHER</span>
              <span>STANDARDS.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
