// app/components/about/CompanyTimeline.tsx

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./CompanyTimeline.module.css";

const TIMELINE = [
  {
    year: "2009",
    label: "Founded",
    heading: "From the UK to the Sunshine Coast.",
    body: "Originally from the UK, Phil arrived on the Sunshine Coast in 2009 with over 15 years of rope access experience and a clear gap in the market — no local specialist partner existed for high-access property maintenance. He founded Rope Access Services (RAS) to fill it.",
    photo: "/images/projects/rope-access.png",
    caption: "Phil's first crew on the Sunshine Coast, 2009.",
  },
  {
    year: "2019",
    label: "Expansion",
    heading: "Full-service capability.",
    body: "RAS expanded beyond rope access into painting, waterproofing and height safety — building the complete property maintenance capability that body corporates and commercial managers had been asking for. One contractor, one invoice, every trade.",
    photo: "/nav/height.png",
    caption: "Height safety installations across the Coast, 2019.",
  },
  {
    year: "2023",
    label: "Merger",
    heading: "RAS-VERTEX is born.",
    body: "RAS acquired Vertex Access Solutions, one of the most respected names in Sunshine Coast rope access. RAS-VERTEX brought together two teams, deeper reach, and greater capacity across every service. The combined operation became the Coast's most capable single-contractor maintenance partner.",
    photo: "/images/projects/2.jpeg",
    caption: "The combined RAS-VERTEX team, day one — 2023.",
  },
  {
    year: "Today",
    label: "Today",
    heading: "25+ team. 500+ buildings.",
    body: "25+ directly employed team members. No labour hire. No subbies. Every person on your site is ours. IRATA-certified rope access, QBCC licensed across every trade, and a single project manager running every job from first call to warranty sign-off.",
    photo: "/images/projects/1.jpeg",
    caption: "RAS-VERTEX on the Sunshine Coast today.",
  },
];

export default function CompanyTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const active = TIMELINE[activeIdx];

  return (
    <section className={styles.section} aria-labelledby="timeline-heading">
      <div className={styles.inner}>

        {/* ── Left — sticky photo + copy ── */}
        <div className={styles.left}>
          <div className={styles.sticky} aria-live="polite" aria-atomic="true">
            <h2 id="timeline-heading" className={styles.heading}>{active.heading}</h2>
            <p className="p-soft">{active.body}</p>
            <figure className={styles.figure}>
              <div className={styles.photoWrap}>
                <Image
                  key={active.photo}
                  src={active.photo}
                  alt={active.caption}
                  fill
                  className={styles.photo}
                  sizes="(max-width: 860px) 50vw, 30vw"
                  priority
                />
              </div>
              <figcaption className="p-soft">{active.caption}</figcaption>
            </figure>
          </div>
        </div>

        {/* ── Right — timeline rail ── */}
        <div className={styles.right}>
          <ol className={styles.list} aria-label="Company history timeline">
            {TIMELINE.map((item, i) => {
              const isActive = activeIdx === i;
              const isPast = i < activeIdx;
              return (
                <li
                  key={item.year}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className={`${styles.item} ${isActive ? styles.itemActive : ""} ${isPast ? styles.itemPast : ""}`}
                >
                  <div className={styles.rail} aria-hidden="true">
                    <div className={`${styles.dot} ${isActive ? styles.dotActive : ""} ${isPast ? styles.dotPast : ""}`} />
                    {i < TIMELINE.length - 1 && (
                      <div className={`${styles.line} ${isPast ? styles.lineFilled : ""}`} />
                    )}
                  </div>
                  <div className={styles.content}>
                    <span className={styles.year}>{item.year}</span>
                    <span className={styles.label}>{item.label}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}
