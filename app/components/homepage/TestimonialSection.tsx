// app/components/homepage/TestimonialSection.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialSection.module.css";
import Pagination from "../ui/Pagination";

const TESTIMONIALS = [
  {
    quote:
      "We've used them for three years of scheduled maintenance across seven buildings. Zero callbacks.",
    name: "Priya Raman",
    role: "BC Manager, Peppers Noosa",
    logo: "/partners/novotel.svg.png",
    logoAlt: "Peppers Noosa",
  },
  {
    quote:
      "The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs.",
    name: "James Whitfield",
    role: "Facilities Manager, Accor Hotels",
    logo: "/partners/accor.svg",
    logoAlt: "Accor Hotels",
  },
  {
    quote:
      "They showed up within 48 hours for the site visit and had a full itemised quote within the week. Refreshing.",
    name: "Sandra Koh",
    role: "Strata Manager, Archers Body Corporate",
    logo: "/partners/archers.png",
    logoAlt: "Archers Body Corporate",
  },
  {
    quote:
      "Other companies quoted higher and couldn't start for months. RAS-VERTEX had a crew on ropes within two weeks.",
    name: "David Lam",
    role: "Property Manager, Ray White Mooloolaba",
    logo: "/partners/raywhite.png",
    logoAlt: "Ray White",
  },
  {
    quote:
      "The rope access team is exceptional. No scaffold, no disruption to residents, and the building looks brand new.",
    name: "Karen O'Brien",
    role: "Committee Chair, Rumba Resort",
    logo: "/partners/mosaic.svg",
    logoAlt: "Rumba Resort",
  },
  {
    quote:
      "We moved from three separate contractors to one maintenance plan with RAS-VERTEX. Should have done it years ago.",
    name: "Mark Ellison",
    role: "Facilities Director, Stockland Kawana",
    logo: "/partners/pica.png",
    logoAlt: "Stockland Kawana",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.grid}>
        <h2 id="testimonials-heading" className={styles.heading}>
          Their Words,
          <br />
          Not Ours.
        </h2>

        <div className={styles.right} key={active}>
          <span className={styles.quoteMark} aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className={styles.quote}>
            <p>{current.quote}</p>
          </blockquote>
          <div className={styles.author}>
            <div className={styles.authorLogo}>
              <Image
                src={current.logo}
                alt={current.logoAlt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.authorInfo}>
              <cite className={styles.authorName}>{current.name}</cite>
              <span className={styles.authorRole}>{current.role}</span>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        count={TESTIMONIALS.length}
        active={active}
        onChange={setActive}
      />
    </section>
  );
}
