// app/components/shared/ServiceBeforeAfter.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import styles from "./ServiceBeforeAfter.module.css";

const DATA = {
  beforeSrc: "/assets/project-1.jpeg",
  afterSrc: "/assets/project-2.jpeg",
  clientName: "Coolum Resort",
  heading: "Dedicated maintenance for the full resort complex.",
  body: "RACV Resort Noosa had been managing building maintenance through Brisbane-based contractors — and the distance showed. We now run a dedicated program across the full resort complex. One project manager, one team, on their schedule.",
  quote:
    "The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs.",
  quoteAuthor: "James Whitfield",
  quoteRole: "Facilities Manager, Accor Hotels",
  authorLogo: "/partners/accor.svg",
  authorLogoAlt: "Accor Hotels",
  ctaHref: "/projects",
  ctaLabel: "Our projects →",
} as const;

export default function ServiceBeforeAfter() {
  const stageRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setPct = useCallback((p: number) => {
    const pct = Math.max(2, Math.min(98, p));
    if (afterRef.current)
      afterRef.current.style.clipPath = `inset(0 0 0 ${pct}%)`;
    if (handleRef.current) handleRef.current.style.left = `${pct}%`;
  }, []);

  useEffect(() => {
    setPct(50);
    const stage = stageRef.current;
    if (!stage) return;

    const getX = (e: MouseEvent | TouchEvent) =>
      "clientX" in e ? e.clientX : e.touches[0].clientX;

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      setPct(
        ((getX(e) - stage.getBoundingClientRect().left) / stage.offsetWidth) *
          100,
      );
    };
    const onStart = (e: MouseEvent | TouchEvent) => {
      dragging.current = true;
      e.preventDefault();
      onMove(e);
    };
    const onEnd = () => {
      dragging.current = false;
    };

    stage.addEventListener("mousedown", onStart as EventListener, {
      passive: false,
    });
    stage.addEventListener("touchstart", onStart as EventListener, {
      passive: false,
    });
    window.addEventListener("mousemove", onMove as EventListener, {
      passive: false,
    });
    window.addEventListener("touchmove", onMove as EventListener, {
      passive: false,
    });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);
    return () => {
      stage.removeEventListener("mousedown", onStart as EventListener);
      stage.removeEventListener("touchstart", onStart as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchend", onEnd);
    };
  }, [setPct]);

  return (
    <section className={styles.section} aria-labelledby="before-after-heading">
      {/* ── Slider ── */}
      <div
        className={styles.stage}
        ref={stageRef}
        role="img"
        aria-label={`Before and after — ${DATA.clientName}`}
      >
        <div className={styles.imgWrap}>
          <Image
            src={DATA.beforeSrc}
            alt={`${DATA.clientName} before`}
            fill
            sizes="(max-width:860px) 100vw, calc(100vw - 80px)"
            priority
          />
        </div>
        <div className={styles.imgWrap} ref={afterRef}>
          <Image
            src={DATA.afterSrc}
            alt={`${DATA.clientName} after`}
            fill
            sizes="(max-width:860px) 100vw, calc(100vw - 80px)"
          />
        </div>
        <span
          className={`${styles.sliderLabel} ${styles.before}`}
          aria-hidden="true"
        >
          Before
        </span>
        <span
          className={`${styles.sliderLabel} ${styles.after}`}
          aria-hidden="true"
        >
          After
        </span>
        <div className={styles.handle} ref={handleRef} aria-hidden="true">
          <div className={styles.grip}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 10H13M7 10L4 7M7 10L4 13M13 10L16 7M13 10L16 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={styles.overlay} aria-hidden="true">
          <span className={styles.clientName}>{DATA.clientName}</span>
        </div>
      </div>

      {/* ── Content — matches CaseStudy structure exactly ── */}
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 id="before-after-heading">{DATA.heading}</h3>
          <p className={styles.body}>{DATA.body}</p>
        </div>

        <div className={styles.right}>
          <figure className={styles.quote}>
            <blockquote className={styles.quoteText}>
              <p>{DATA.quote}</p>
            </blockquote>
            <figcaption className={styles.quoteAuthor}>
              <div className={styles.authorLogo}>
                <Image
                  src={DATA.authorLogo}
                  alt={DATA.authorLogoAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.authorInfo}>
                <cite className={styles.authorName}>{DATA.quoteAuthor}</cite>
                <span className={styles.authorRole}>{DATA.quoteRole}</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <Link
        href={DATA.ctaHref}
        className={styles.cta}
        aria-label="View our projects"
      >
        {DATA.ctaLabel}
      </Link>
    </section>
  );
}
