"use client";

import { useState, useEffect } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    id: 1,
    quote:
      "We've used them for three years of scheduled maintenance across seven buildings. Zero callbacks.",
    name: "Priya Raman",
    role: "BC Manager, Peppers Noosa",
  },
  {
    id: 2,
    quote:
      "The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs.",
    name: "James Whitfield",
    role: "Facilities Manager, Accor Hotels",
  },
  {
    id: 3,
    quote:
      "They showed up within 48 hours for the site visit and had a full itemised quote within the week. Refreshing.",
    name: "Sandra Koh",
    role: "Strata Manager, Archers Body Corporate",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Left */}
        <div className={styles.left}>
          <h2 className={styles.headline}>
            Trusted by the
            <br />
            Coast&apos;s best
            <br />
            run buildings.
          </h2>

          {/* Dot nav */}
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

        {/* Divider */}
        <div className={styles.divider} />

        {/* Right */}
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
