"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import styles from "./BeforeAfter.module.css";

const DATA = {
  beforeSrc: "/assets/project-1.jpeg",
  afterSrc: "/assets/project-2.jpeg",
  site: "Coolum Resort.",
  scope: "Full exterior repaint · render & masonry · 4 storeys",
  system: "Dulux Weathershield Pure · elastomeric topcoat",
  crew: "4 · rope access",
  warranty: "5-yr workmanship · 15-yr manufacturer",
  quote:
    "The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs.",
  quoteAuthor: "James Whitfield",
  quoteRole: "Facilities Manager, Accor Hotels",
  ctaHref: "/contact",
};

export default function BeforeAfter() {
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
    <section className={styles.section}>
      {/* ── Slider ── */}
      <div className={styles.stage} ref={stageRef}>
        <div className={styles.imgWrap}>
          <Image
            src={DATA.beforeSrc}
            alt="Before"
            fill
            sizes="(max-width:860px) 100vw, calc(100vw - 160px)"
            priority
          />
        </div>
        <div className={styles.imgWrap} ref={afterRef}>
          <Image
            src={DATA.afterSrc}
            alt="After"
            fill
            sizes="(max-width:860px) 100vw, calc(100vw - 160px)"
          />
        </div>
        <span className={`${styles.label} ${styles.labelBefore}`}>BEFORE</span>
        <span className={`${styles.label} ${styles.labelAfter}`}>AFTER</span>
        <div className={styles.handle} ref={handleRef}>
          <div className={styles.grip}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
      </div>

      {/* ── Content row ── */}
      <div className={styles.content}>
        {/* Left — heading + specs + CTA */}
        <div className={styles.leftCol}>
          <h3 className={styles.heading}>{DATA.site}</h3>
          <div className={styles.specs}>
            {[
              { l: "Scope", v: DATA.scope },
              { l: "System", v: DATA.system },
              { l: "Warranty", v: DATA.warranty },
            ].map(({ l, v }) => (
              <div key={l} className={styles.spec}>
                <span className={styles.specL}>{l}</span>
                <span className={styles.specV}>{v}</span>
              </div>
            ))}
          </div>
          <Link href={DATA.ctaHref} className={styles.cta}>
            Get a free quote →
          </Link>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Right — quote */}
        <div className={styles.quoteCol}>
          <figure className={styles.quote}>
            <span className={styles.quoteIcon}>&ldquo;</span>
            <p>{DATA.quote}</p>
            <figcaption className={styles.author}>
              <div className={styles.avatar} />
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{DATA.quoteAuthor}</p>
                <p className={styles.authorRole}>{DATA.quoteRole}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
