// app/components/homepage/PartnersCarousel.tsx

"use client";

import Image from "next/image";
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

export default function PartnersCarousel() {
  const track = [...partners, ...partners];

  return (
    <section className={styles.section} aria-label="Industry partners">
      <h2 className={styles.label}>
        Trusted by the Sunshine <br /> Coast's best run buildings.
      </h2>

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
