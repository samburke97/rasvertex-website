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
    "The committee never had to chase a single update. Weekly photo logs, zero surprises, finished on time.",
  quoteAuthor: "Strata Manager · Coolum Resort BC",
  ctaHref: "/contact",
};

export default function BeforeAfter() {
  const stageRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const gripRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setPct = useCallback((p: number) => {
    const pct = Math.max(2, Math.min(98, p));
    if (afterRef.current)
      afterRef.current.style.clipPath = `inset(0 0 0 ${pct}%)`;
    if (handleRef.current) handleRef.current.style.left = `${pct}%`;
    if (gripRef.current) gripRef.current.style.left = `${pct}%`;
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
      <div className={styles.card}>
        <div className={styles.grid}>
          {/* Left — slider */}
          <div className={styles.sliderCol}>
            <div className={styles.stage} ref={stageRef}>
              <div className={styles.imgWrap}>
                <Image
                  src={DATA.beforeSrc}
                  alt="Before"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className={styles.imgWrap}
                ref={afterRef}
                style={{ clipPath: "inset(0 0 0 50%)" }}
              >
                <Image
                  src={DATA.afterSrc}
                  alt="After"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={`${styles.label} ${styles.labelBefore}`}>
                BEFORE
              </div>
              <div className={`${styles.label} ${styles.labelAfter}`}>
                AFTER
              </div>
              <div
                className={styles.handle}
                ref={handleRef}
                aria-hidden="true"
              />
              <div className={styles.grip} ref={gripRef} aria-hidden="true" />
            </div>
          </div>

          {/* Right — project details */}
          <div className={styles.content}>
            <h3 className={styles.heading}>{DATA.site}</h3>

            <blockquote className={styles.quote}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              {DATA.quote}
              <div className={styles.author}>
                <div className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>
                    {DATA.quoteAuthor.split(" · ")[0]}
                  </p>
                  <p className={styles.authorRole}>
                    {DATA.quoteAuthor.split(" · ")[1]}
                  </p>
                </div>
              </div>
            </blockquote>

            <div className={styles.specs}>
              {[
                { l: "Scope", v: DATA.scope },
                { l: "System", v: DATA.system },
                { l: "Crew", v: DATA.crew },
                { l: "Warranty", v: DATA.warranty },
              ].map(({ l, v }) => (
                <div className={styles.spec} key={l}>
                  <span className={styles.specL}>{l}</span>
                  <span className={styles.specV}>{v}</span>
                </div>
              ))}
            </div>

            <Link href={DATA.ctaHref} className={styles.cta}>
              Get a free quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
