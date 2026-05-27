// app/components/ui/ScrollSweepText.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollSweepText.module.css";

interface ScrollSweepTextProps {
  text: string;
  ariaLabel?: string;
  className?: string;
  /** How many pixels of scroll to complete the sweep. Default 400. */
  sweepDistance?: number;
}

export default function ScrollSweepText({
  text,
  ariaLabel,
  className = "",
  sweepDistance = 400,
}: ScrollSweepTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRectRef = useRef<SVGRectElement>(null);
  const initialTopRef = useRef<number | null>(null);
  const [textWidth, setTextWidth] = useState(1000);
  const measureRef = useRef<SVGTextElement>(null);

  // Measure rendered text width so the SVG viewBox is tight
  useEffect(() => {
    const measure = measureRef.current;
    if (!measure) return;
    const bbox = measure.getBBox();
    setTextWidth(bbox.width);
  }, [text]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fillRect = fillRectRef.current;
    if (!wrap || !fillRect) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      fillRect.setAttribute("width", String(textWidth));
      return;
    }

    // Record the element's position on first scroll-pass so progress
    // starts at 0 regardless of where it sits on initial load.
    const setInitial = () => {
      if (initialTopRef.current === null) {
        initialTopRef.current =
          wrap.getBoundingClientRect().top + window.scrollY;
      }
    };

    const update = () => {
      setInitial();
      const initial = initialTopRef.current ?? 0;
      const scrolled = Math.max(
        0,
        window.scrollY - Math.max(0, initial - window.innerHeight * 0.5),
      );
      const progress = Math.min(1, scrolled / sweepDistance);
      fillRect.setAttribute("width", String(textWidth * progress));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sweepDistance, textWidth]);

  // Tight viewBox: text height ≈ 100, width measured from rendered glyphs
  const vbHeight = 100;
  const vbWidth = textWidth || 1000;

  return (
    <div
      ref={wrapRef}
      className={`${styles.wrap} ${className}`}
      role="img"
      aria-label={ariaLabel ?? text}
    >
      <svg
        className={styles.svg}
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        preserveAspectRatio="xMaxYMid meet"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={`sweep-clip-${text.replace(/\W+/g, "")}`}>
            <rect ref={fillRectRef} x="0" y="0" width="0" height={vbHeight} />
          </clipPath>
        </defs>

        {/* base — grey */}
        <text ref={measureRef} x="0" y="82" className={styles.textBase}>
          {text}
        </text>

        {/* fill — navy, clipped by the rect */}
        <text
          x="0"
          y="82"
          className={styles.textFill}
          clipPath={`url(#sweep-clip-${text.replace(/\W+/g, "")})`}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
