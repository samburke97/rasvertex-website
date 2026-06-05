// app/components/shared/ReviewCard.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ReviewCard.module.css";
import { TESTIMONIALS, type Testimonial } from "../../data/testimonialsData";

interface ReviewCardProps {
  reviews?: Testimonial[];
}

export default function ReviewCard({
  reviews = TESTIMONIALS,
}: ReviewCardProps) {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setActive((i) => (i + 1) % reviews.length);

  const current = reviews[active];

  return (
    <figure
      className={styles.card}
      aria-label={`Client review ${active + 1} of ${reviews.length}`}
      aria-live="polite"
    >
      <blockquote className={styles.quote} key={active}>
        <p>&ldquo;{current.quote}&rdquo;</p>
      </blockquote>

      <figcaption className={styles.footer}>
        <div className={styles.attribution}>
          <div className={styles.logo} aria-hidden="true">
            <Image
              src={current.logo}
              alt={current.logoAlt}
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
              sizes="80px"
            />
          </div>
          <div className={styles.author}>
            <cite className={styles.name}>{current.name}</cite>
            <span className={styles.role}>{current.role}</span>
          </div>
        </div>

        {reviews.length > 1 && (
          <nav className={styles.controls} aria-label="Navigate reviews">
            <button
              className={styles.arrow}
              onClick={prev}
              aria-label="Previous review"
            >
              &#8249;
            </button>
            <button
              className={styles.arrow}
              onClick={next}
              aria-label="Next review"
            >
              &#8250;
            </button>
          </nav>
        )}
      </figcaption>
    </figure>
  );
}
