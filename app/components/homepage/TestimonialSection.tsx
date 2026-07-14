// app/components/homepage/TestimonialSection.tsx

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./TestimonialSection.module.css";

const TESTIMONIALS = [
  {
    quote:
      "The team of Maxwell, Rob, Shannon and Nick did an amazing job in extremely difficult circumstances, with real professionalism and attention to detail throughout.",
    name: "Paul McCarthy",
    role: "Medici",
  },
  {
    quote:
      "RAS-VERTEX carried out a full external repaint, including a thorough building wash and remedial works beforehand. Great communication and planning, with the high standards that Phil, Shane and Jason set, and the flexibility to fix issues as they came up.",
    name: "Kerry O'Donnell",
    role: "12 Storey Commercial High-Rise, Sunshine Coast",
  },
  {
    quote:
      "Thank you for the work performed and the professionalism shown throughout. With disruption already high from developments next door, having abseilers, tool noise, dust and driveway closures on top tested residents' patience, but your team showed real understanding and empathy.",
    name: "Elizabeth Nottle",
    role: "Landsborough65",
  },
  {
    quote:
      "We've used RAS-VERTEX for years to wash down our building, and the last two years to have it painted in two stages. The team has never let us down, always turning up and keeping us updated daily. Caroline in the office has been extremely helpful, and we'd have no hesitation recommending RAS-VERTEX.",
    name: "Rhonda Dawson",
    role: "30 Frank Street",
  },
  {
    quote:
      "We've worked with RAS-VERTEX for six years now, covering a full exterior and stairwell paint, box gutter re-skinning, window works, abseiling remedial work and a full roof waterproofing membrane. Phil and his team are committed tradespeople who get the best possible results.",
    name: "John Dillon",
    role: "Alexandria Apartments",
  },
  {
    quote:
      "RAS-VERTEX repaired rust on the upstairs posts of six townhouses at a difficult-to-access site. The team were professional, efficient and always respectful working in people's homes. I have no hesitation recommending them.",
    name: "Marilyn Adams",
    role: "The Boulevard",
  },
  {
    quote:
      "Finding reliable at-height companies for Body Corporates used to be a challenge. RAS-VERTEX's reliable quoting process, care and attention to detail changed that, I'd recommend them to other strata management companies for their professionalism and quality of work.",
    name: "AAA Body Corporate",
    role: "",
  },
];

const INTERVAL = 8000;
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
