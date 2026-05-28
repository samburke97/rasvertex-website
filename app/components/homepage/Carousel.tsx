"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Pagination from "../ui/Pagination";
import styles from "./Carousel.module.css";

const SLIDES = [
  {
    image: "/images/projects/1.jpeg",
    imageAlt: "25 years painting buildings on the Sunshine Coast",
    heading: "25 years on the Coast.",
    body: "We started here before half the foreshore developments were built. Same postcode, same salt air, same substrate conditions — every system we spec is chosen for this environment, not borrowed from a Brisbane job sheet.",
  },
  {
    image: "/nav/painting.png",
    imageAlt: "RAS-VERTEX project manager on a Sunshine Coast job site",
    heading: "One partner. Every challenge.",
    body: "Every person on your site is a direct RAS-VERTEX employee. One dedicated project manager runs your job from site visit to sign-off — one number, one thread, weekly photo updates, no handoffs, no subbies turning up unannounced.",
  },
  {
    image: "/nav/maintenance.png",
    imageAlt: "Dedicated building maintenance team on the Sunshine Coast",
    heading: "One team for your entire building.",
    body: "Painting, cleaning, waterproofing, height safety, remedial repairs — one dedicated team across every trade, every floor, every quarter. We've been doing this for 25 years because property managers don't want five contractors. They want one partner who actually knows the building.",
  },
];

export default function Carousel() {
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
          {SLIDES.map((s, i) => (
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
              </div>
              <div className={styles.content}>
                <h3>{s.heading}</h3>
                <p className="p-soft">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <Pagination
          count={SLIDES.length}
          active={active}
          onChange={(i) => emblaApi?.scrollTo(i)}
          onPrev={scrollPrev}
          onNext={scrollNext}
        />
      </div>
    </section>
  );
}
