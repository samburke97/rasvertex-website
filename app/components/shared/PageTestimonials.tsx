"use client";

import { useState, useEffect } from "react";
import styles from "./PageTestimonials.module.css";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface PageTestimonialsProps {
  heading?: string;
  testimonials: Testimonial[];
}

export default function PageTestimonials({
  heading = "Trusted by the Coast's best run buildings.",
  testimonials,
}: PageTestimonialsProps) {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.headline}>
            {heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.right} key={active}>
          <blockquote className={styles.quote}>
            <span className={styles.quoteIcon}>&ldquo;</span>
            {current.quote}
          </blockquote>
          <div className={styles.author}>
            <div className={styles.avatar} />
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>{current.name}</p>
              <p className={styles.authorRole}>{current.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
