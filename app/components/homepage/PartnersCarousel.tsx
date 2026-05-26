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
  { src: "/partners/pica.png", alt: "Pica" },
  { src: "/partners/coolum.png", alt: "Coolum" },
  { src: "/partners/maroochy.png", alt: "Maroochy" },
  { src: "/partners/trafalgar.svg", alt: "Trafalgar" },
  { src: "/partners/sskb.svg", alt: "SSKB" },
];

export default function PartnersCarousel() {
  const track = [...partners, ...partners];

  return (
    <section>
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={styles.track}>
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
