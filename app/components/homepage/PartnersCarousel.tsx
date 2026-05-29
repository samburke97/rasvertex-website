// app/components/homepage/PartnersCarousel.tsx

"use client";

import Image from "next/image";
import Button from "../ui/Button";
import styles from "./PartnersCarousel.module.css";

const partners = [
  { src: "/partners/accor.svg", alt: "Accor" },
  { src: "/partners/novotel.svg.png", alt: "Novotel" },
  { src: "/partners/racv.png", alt: "RACV" },
  { src: "/partners/raywhite.png", alt: "Ray White" },
  { src: "/partners/mosaic.svg", alt: "Mosaic" },
  { src: "/partners/archers.png", alt: "Archers" },
  { src: "/partners/pica.png", alt: "Pica Group" },
  { src: "/partners/coolum.png", alt: "Coolum Surf Club" },
  { src: "/partners/maroochy.png", alt: "Maroochy RSL" },
  { src: "/partners/trafalgar.svg", alt: "Trafalgar" },
  { src: "/partners/sskb.svg", alt: "SSKB" },
];

const SERVICES = [
  { label: "Body Corporate →", href: "/painting/body-corporate" },
  { label: "Commercial →", href: "/painting/commercial" },
  { label: "Residential →", href: "/painting/residential" },
];

export default function PartnersCarousel() {
  const track = [...partners, ...partners];

  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      {/* ── Intro grid ── */}
      <div className={styles.intro}>
        <h2 id="partners-heading" className={styles.heading}>
          Trusted by the Coast&rsquo;s best run buildings.
        </h2>

        <div className={styles.right}>
          <p className={styles.body}>
            25 years painting across every building type on the Sunshine Coast —
            body corporates, commercial properties, and homes. One standard
            across all of them.
          </p>
          <nav className={styles.links} aria-label="Our services">
            {SERVICES.map((s) => (
              <Button
                key={s.href}
                as="link"
                href={s.href}
                variant="secondary"
                aria-label={`Learn more about our ${s.label.replace(" →", "").toLowerCase()} services`}
              >
                {s.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Logo marquee ── */}
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={styles.track} aria-hidden="true" role="presentation">
          {track.map((p, i) => (
            <div key={i} className={styles.logoWrap}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className={styles.logo}
                sizes="140px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
