// app/components/shared/ServiceBeforeAfter.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import styles from "./ServiceBeforeAfter.module.css";

export interface BeforeAfterSpec {
  label: string;
  value: string;
}

interface ServiceBeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  clientName: string;
  heading: string;
  body: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  authorLogo: string;
  authorLogoAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  headingId?: string;
}

export default function ServiceBeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  clientName,
  heading,
  body,
  quote,
  quoteAuthor,
  quoteRole,
  authorLogo,
  authorLogoAlt,
  ctaHref = "/work",
  ctaLabel = "Our projects →",
  headingId = "before-after-heading",
}: ServiceBeforeAfterProps) {
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
    <article aria-labelledby={headingId}>
      {/* ── Slider ── */}
      <div
        className={styles.stage}
        ref={stageRef}
        role="img"
        aria-label={`Before and after — ${clientName}`}
      >
        <div className={styles.imgWrap}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width:860px) 100vw, calc(100vw - 80px)"
            priority
          />
        </div>
        <div className={styles.imgWrap} ref={afterRef}>
          <Image
            src={afterSrc}
            alt={afterAlt}
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
          <span className={styles.clientName}>{clientName}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 id={headingId}>{heading}</h3>
          <p className="p-soft">{body}</p>
        </div>
        <div className={styles.right}>
          <figure className={styles.quote}>
            <blockquote className={styles.quoteText}>
              <p>{quote}</p>
            </blockquote>
            <figcaption className={styles.quoteAuthor}>
              <div className={styles.authorLogo}>
                <Image
                  src={authorLogo}
                  alt={authorLogoAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.authorInfo}>
                <cite className={styles.authorName}>{quoteAuthor}</cite>
                <span className={styles.authorRole}>{quoteRole}</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <Link
        href={ctaHref}
        className={styles.cta}
        aria-label="View our projects"
      >
        {ctaLabel}
      </Link>
    </article>
  );
}
