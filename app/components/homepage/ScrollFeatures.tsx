"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ScrollFeatures.module.css";

const SECTIONS = [
  {
    id: "any-building",
    label: "Any Building",
    heading: "One partner. Every trade.",
    body: "From rope access and height safety to painting, waterproofing, cleaning, and remedial maintenance — RAS-VERTEX delivers integrated property services through one experienced in-house team. One partner means simpler communication, less contractor overlap, and better outcomes.",
    image: "/nav/painting.png",
    imageAlt: "Multi-trade team on commercial project",
    cta: { label: "See our services →", href: "/services" },
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
    ],
  },
  {
    id: "built-for-height",
    label: "Built for Height",
    heading: "We go where others can't.",
    body: "With 30+ IRATA-certified technicians, RAS-VERTEX safely delivers work in environments where scaffolding becomes costly, disruptive, or impractical. Faster mobilisation, reduced site impact, safer outcomes — on high-rise and difficult-access projects across the Coast.",
    image: "/nav/cleaning.png",
    imageAlt: "Rope access technicians on high-rise exterior",
    cta: { label: "How rope access works →", href: "/services/maintenance" },
    logos: [
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
      { src: "/images/associations/archers.png", alt: "Archers" },
      { src: "/images/associations/picagroup.png", alt: "Pica Group" },
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
    ],
  },
  {
    id: "trusted-to-deliver",
    label: "Trusted to Deliver",
    heading: "The Coast's most trusted maintenance partner.",
    body: "Body corporates, resorts, schools, and commercial facilities across the Sunshine Coast trust us to deliver with professionalism, clear communication, and minimal disruption. From first call to warranty sign-off — one manager runs the whole job.",
    image: "/images/projects/1.jpeg",
    imageAlt: "Completed project on the Sunshine Coast",
    cta: { label: "See our work →", href: "/work" },
    logos: [
      { src: "/images/associations/coolumfc.png", alt: "Coolum FC" },
      { src: "/images/associations/coolumnetball.png", alt: "Coolum Netball" },
      { src: "/images/associations/maroochyrsl.png", alt: "Maroochy RSL" },
    ],
  },
];

export default function ScrollFeatures() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — sticky nav + CTA */}
        <div className={styles.left}>
          <nav className={styles.nav}>
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.navItem} ${i === active ? styles.navItemActive : ""}`}
                onClick={() =>
                  sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className={styles.leftCta}>
            <div className={styles.ctaAvatar}>
              <Image
                src="/images/people/caro.jpg"
                alt="Hylton Denton"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className={styles.ctaHeading}>Ready to start your project?</p>
            <p className={styles.ctaBody}>We'll be on site within 48 hours.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get a free quote →
            </Link>
          </div>
        </div>

        {/* Right — scrolling sections */}
        <div className={styles.right}>
          {SECTIONS.map((s, i) => (
            <div
              key={s.id}
              className={styles.item}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  width={850}
                  height={500}
                  className={styles.image}
                  sizes="850px"
                />
              </div>
              <div className={styles.textBlock}>
                <h3 className={styles.heading}>{s.heading}</h3>
                <p className={styles.body}>{s.body}</p>
                <Link href={s.cta.href} className={styles.cta}>
                  {s.cta.label}
                </Link>
                {s.logos && (
                  <div className={styles.logos}>
                    {s.logos.map((l) => (
                      <div key={l.alt} className={styles.logoWrap}>
                        <Image
                          src={l.src}
                          alt={l.alt}
                          fill
                          style={{
                            objectFit: "contain",
                            objectPosition: "left center",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
