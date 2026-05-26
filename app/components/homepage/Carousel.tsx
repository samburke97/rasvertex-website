"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Pagination from "../ui/Pagination";
import styles from "./Carousel.module.css";

const SLIDES = [
  {
    image: "/images/projects/1.jpeg",
    imageAlt: "25 years on the Sunshine Coast",
    heading: "25 years on the Coast.",
    body: "We started here before half the foreshore developments were built. Same postcode, same salt air, same substrate conditions — every system we spec is chosen for this environment, not borrowed from a Brisbane job sheet.",
  },
  {
    image: "/nav/painting.png",
    imageAlt: "One partner, every challenge",
    heading: "One partner. Every challenge.",
    body: "Every person on your site is a direct RAS-VERTEX employee. One dedicated project manager runs your job from site visit to sign-off — one number, one thread, weekly photo updates, no handoffs, no subbies turning up unannounced.",
  },
  {
    image: "/nav/cleaning.png",
    imageAlt: "Rope access technicians on high-rise",
    heading: "We go where others can't.",
    body: "30+ IRATA-certified rope access technicians trained in-house to L1–L3. We reach what scaffold can't — faster, with less disruption to tenants and operations, and at a fraction of the cost.",
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
    containScroll: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setActive(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <>
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
                    sizes="720px"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.heading}>{s.heading}</h3>
                  <p className={styles.body}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Pagination
          count={SLIDES.length}
          active={active}
          onChange={(i) => emblaApi?.scrollTo(i)}
        />
      </div>
    </>
  );
}
