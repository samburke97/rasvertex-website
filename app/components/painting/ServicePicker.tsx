"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicePicker.module.css";

const SERVICES = [
  {
    label: "Exterior Painting",
    body: "Full exterior repaints for strata, commercial and residential buildings. Chloride rinse, salt-bonded primer and Dulux Weathershield systems as standard within 5km of the coast.",
    photo: "/assets/project-2.jpeg",
    href: "/contact",
  },
  {
    label: "Interior Painting",
    body: "Low-VOC systems for occupied buildings — strata corridors, hotel suites, schools and offices. Zone-staged scheduling with dust containment and same-day re-occupancy on most work.",
    photo: "/assets/residential.png",
    href: "/contact",
  },
  {
    label: "Roof Coatings",
    body: "Colorbond, tile and membrane re-coats. Heat-reflective coatings reduce internal building temps by up to 8°C — a measurable energy saving on commercial assets.",
    photo: "/assets/higher.png",
    href: "/contact",
  },
  {
    label: "Heritage Restoration",
    body: "Lime-based and breathable systems for heritage masonry, render and timber. We work with QHR and council heritage officers from sample stage through to documentation lodgement.",
    photo: "/assets/body.png",
    href: "/contact",
  },
  {
    label: "Rope Access Painting",
    body: "IRATA L1–L3 certified technicians for high-rise and difficult-access facades. Faster mobilisation, no scaffolding cost, zero footprint on your site.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Render & Texture Coatings",
    body: "Acrylic, polymer and sand render systems. We repair cracks and substrate defects before coating — no bandaid finishes.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Strata & Body Corporate",
    body: "Committee-ready proposals, staged scheduling around occupancy, resident communication handled end-to-end. Over 50 body corporate projects completed.",
    photo: "/assets/bodycorporate.png",
    href: "/contact",
  },
  {
    label: "Pre-Sale Painting",
    body: "Quick-turn interior and exterior refresh for agents and vendors across the Sunshine Coast. Ready in 5–10 business days.",
    photo: "/assets/commercial.png",
    href: "/contact",
  },
  {
    label: "Colour Consulting",
    body: "On-site sample blocks at no charge for projects over $25k. Full colour schedules and heritage-compliant palettes available.",
    photo: "/nav/painting.png",
    href: "/contact",
  },
];

export default function ServicePicker() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.stickyCol}>
            <h2 className={styles.heading}>
              What kind of paint
              <br />
              job are you thinking about?
            </h2>
            <p className={styles.statement}>
              Every painter on the Sunshine Coast will quote you a job. Not
              every painter will show up on time, document every coat, and back
              the work with a five-year warranty. We will.
            </p>
            <Link href="/contact" className={styles.statementCta}>
              Get a free quote →
            </Link>
          </div>
        </div>

        <div className={styles.list}>
          {SERVICES.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.item} ${openIdx === i ? styles.open : ""}`}
            >
              <button
                className={styles.row}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span className={styles.label}>{s.label}</span>
                <span className={styles.chevron} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div className={styles.panel}>
                <div className={styles.panelInner}>
                  <div className={styles.panelLeft}>
                    <p className={styles.panelBody}>{s.body}</p>
                  </div>
                  <div className={styles.panelPhoto}>
                    <Image
                      src={s.photo}
                      alt={s.label}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="40vw"
                    />
                  </div>
                </div>
                <div className={styles.panelFooter}>
                  <div className={styles.panelFooterInner}>
                    <Link href={s.href} className={styles.panelCta}>
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link href="/contact" className={styles.ctaBtn}>
            Not sure? Let&apos;s talk about it →
          </Link>
        </div>
      </div>
    </section>
  );
}
