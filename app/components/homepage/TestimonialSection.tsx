// app/components/homepage/TestimonialSection.tsx

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./TestimonialSection.module.css";

const TESTIMONIALS = [
  {
    quote:
      "We've used them for three years of scheduled maintenance across seven buildings. Zero callbacks.",
    name: "Priya Raman",
    role: "BC Manager, Peppers Noosa",
    logo: "/partners/novotel.svg.png",
    logoAlt: "Peppers Noosa",
  },
  {
    quote:
      "The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs.",
    name: "James Whitfield",
    role: "Facilities Manager, Accor Hotels",
    logo: "/partners/accor.svg",
    logoAlt: "Accor Hotels",
  },
  {
    quote:
      "They showed up within 48 hours for the site visit and had a full itemised quote within the week. One project manager start to finish — no passing the buck. Refreshing.",
    name: "Sandra Koh",
    role: "Strata Manager, Archers Body Corporate",
    logo: "/partners/archers.png",
    logoAlt: "Archers Body Corporate",
  },
  {
    quote:
      "Other companies quoted higher and couldn't start for months. RAS-VERTEX had a crew on ropes within two weeks.",
    name: "David Lam",
    role: "Property Manager, Ray White Mooloolaba",
    logo: "/partners/raywhite.png",
    logoAlt: "Ray White",
  },
  {
    quote:
      "The rope access team is exceptional. No scaffold, no disruption to residents, and the building looks brand new.",
    name: "Karen O'Brien",
    role: "Committee Chair, Rumba Resort",
    logo: "/partners/mosaic.svg",
    logoAlt: "Rumba Resort",
  },
  {
    quote:
      "We moved from three separate contractors to one maintenance plan with RAS-VERTEX. Should have done it years ago.",
    name: "Mark Ellison",
    role: "Facilities Director, Stockland Kawana",
    logo: "/partners/pica.png",
    logoAlt: "Stockland Kawana",
  },
];

const INTERVAL = 5000;
const DRAG_THRESHOLD = 50;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragRef = useRef({ startX: 0, dragging: false });

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, INTERVAL);
  }, [goNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleDotClick = (i: number) => {
    setActive(i);
    resetTimer();
  };

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    dragRef.current = { startX: e.touches[0].clientX, dragging: true };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    const diff = e.changedTouches[0].clientX - dragRef.current.startX;
    if (Math.abs(diff) > DRAG_THRESHOLD) {
      diff < 0 ? goNext() : goPrev();
      resetTimer();
    }
  };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { startX: e.clientX, dragging: true };
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    const diff = e.clientX - dragRef.current.startX;
    if (Math.abs(diff) > DRAG_THRESHOLD) {
      diff < 0 ? goNext() : goPrev();
      resetTimer();
    }
  };
  const onMouseLeave = () => {
    dragRef.current.dragging = false;
  };

  const current = TESTIMONIALS[active];

  return (
    <section
      className={styles.section}
      aria-label="Client testimonials"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.inner} key={active}>
        <span className={styles.quoteMark} aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className={styles.quote}>
          <p>{current.quote}</p>
        </blockquote>
        <figcaption className={styles.author}>
          <div className={styles.authorLogo}>
            <Image
              src={current.logo}
              alt={current.logoAlt}
              fill
              sizes="120px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.authorInfo}>
            <cite className={styles.authorName}>{current.name}</cite>
            <span className={styles.authorRole}>{current.role}</span>
          </div>
        </figcaption>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Testimonials">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Testimonial ${i + 1}`}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
}
