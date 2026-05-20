"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import styles from "./Specialisations.module.css";

const overlayText = "WHY WORK WITH US.";

const SPECS = [
  {
    id: "show-up",
    photo: "/images/projects/1.jpeg",
    alt: "RAS-VERTEX project manager on site",
    h: "We show up. Every time.",
    body: "No ghost quotes, no subcontractors you've never met. Our project manager is on your site from day one — and they're reachable on a single number until the job is signed off.",
  },
  {
    id: "coastal",
    photo: "/images/projects/2.jpeg",
    alt: "Coastal high-rise exterior painting",
    h: "Built for coastal conditions.",
    body: "Salt, UV, humidity — we've been painting Sunshine Coast buildings for 25 years. Every system we spec is chosen for your substrate and your exposure. No generic solutions.",
  },
  {
    id: "warranty",
    photo: "/assets/higher.png",
    alt: "Roof coating warranty work",
    h: "Warranty you can actually use.",
    body: "Five-year workmanship warranty issued in writing at handover and lodged in your ROCO portal. Backed by up to 15-year manufacturer coverage on the coating systems we use.",
  },
];

export default function Specialisations() {
  const overlayRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const headline = headlineRef.current;
    if (!overlay || !headline) return;

    const docTop = window.scrollY + headline.getBoundingClientRect().top;
    const scrollStart = docTop - window.innerHeight * 0.8;
    const scrollEnd = docTop - window.innerHeight * 0.3;

    const onScroll = () => {
      const y = window.scrollY;
      if (y <= scrollStart) {
        overlay.style.clipPath = "inset(0 100% 0 0)";
        return;
      }
      if (y >= scrollEnd) {
        overlay.style.clipPath = "inset(0 0% 0 0)";
        return;
      }
      const p = (y - scrollStart) / (scrollEnd - scrollStart);
      overlay.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
    };

    overlay.style.clipPath = "inset(0 100% 0 0)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        {/* Left — sticky */}
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <div className={styles.headlineWrap} ref={headlineRef}>
              <span className={styles.headlineBase} aria-hidden="true">
                {overlayText}
              </span>
              <span
                ref={overlayRef}
                className={styles.headlineOverlay}
                aria-hidden="true"
                style={{ clipPath: "inset(0 100% 0 0)" }}
              >
                {overlayText}
              </span>
              <span className={styles.headlineSr}>Higher Standards.</span>
            </div>
            <p className={styles.lede}>
              Every painter on the Sunshine Coast will quote you a job. Not
              every painter will show up on time, document every coat, and back
              the work with a five-year warranty. We will.
            </p>
          </div>

          <div className={styles.leftCta}>
            <div className={styles.avatar}>
              <Image
                src="/images/people/caro.png"
                alt="Project manager"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className={styles.ctaHeading}>Time to get started?</p>
            <p className={styles.ctaSub}>
              We'll be on site within 48 hours. No obligation, just a trade lead
              who knows what they're looking at.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Let's talk about your project →
            </Link>
          </div>
        </div>

        {/* Right — photos scroll past */}
        <div className={styles.right}>
          {SPECS.map((sp) => (
            <div key={sp.id} className={styles.card}>
              <div className={styles.photo}>
                <Image
                  src={sp.photo}
                  alt={sp.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="55vw"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardH}>{sp.h}</h3>
                <p className={styles.cardBody}>{sp.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
