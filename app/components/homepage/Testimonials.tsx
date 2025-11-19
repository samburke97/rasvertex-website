"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  rating: number;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We were really impressed with the RAS-VERTEX team from our first interaction. We had a very short time frame, but they managed to complete the job ahead of schedule. Can't thank them enough - we'll have them back for the exterior.",
    author: "Andrea Steinecker",
    company: "Ascot",
    rating: 5,
    initial: "A",
  },
  {
    id: 2,
    quote:
      "I contracted RAS-VERTEX to paint a produce store shed - turning it from a bit drab to looking like new! Very professional, fantastic at keeping us up to date on the progress. The customer service was amazing and the tradesmen were great at working around us - and very particular about job standards being met. Good work, great company. Recommended",
    author: "K.J. Reid",
    company: "Kredron",
    rating: 5,
    initial: "K",
  },
  {
    id: 3,
    quote:
      "Our complex of 7 townhouses was rendered by Rochele with great results. Phil was happy to answer any questions and we were delighted with their service. Would highly recommend and discuss.",
    author: "Stuart Logan",
    company: "Mooloolaba",
    rating: 5,
    initial: "S",
  },
  {
    id: 4,
    quote:
      "Outstanding service from start to finish. The team was incredibly professional and their attention to detail was impressive. They completed our complex painting project without disrupting our tenants.",
    author: "Rebecca Chen",
    company: "Property Group",
    rating: 5,
    initial: "R",
  },
  {
    id: 5,
    quote:
      "After years of dealing with water ingress issues, RAS-VERTEX finally solved our building's waterproofing problems. Their technical knowledge and workmanship are exceptional.",
    author: "Michael O'Brien",
    company: "Maroochydore",
    rating: 5,
    initial: "M",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Things RAS-VERTEX clients say →</h2>
      </div>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.emblaSlide}>
              <div className={styles.speechBubble}>
                <p className={styles.quote}>"{testimonial.quote}"</p>
              </div>

              <div className={styles.footer}>
                <div className={styles.authorSection}>
                  <div className={styles.avatar}>{testimonial.initial}</div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>
                      {testimonial.author}{" "}
                      <span className={styles.company}>
                        @{testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>

                <div className={styles.rating}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Image
                      key={i}
                      src="/icons/utility-filled/star.svg"
                      alt="star"
                      width={16}
                      height={16}
                      className={styles.star}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
