// app/components/homepage/PartnersCarousel.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className={styles.intro}>
        <div className={styles.left}>
          <h2 id="partners-heading">
            Trusted by the Coast&rsquo;s best run buildings.
          </h2>
          <p className={styles.body}>
            25 years working with Sunshine Coast body corporates, strata
            committees, commercial property managers and hotels. One standard
            across every building type, every time.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.ctaCard}>
            <div className={styles.avatar}>
              <Image
                src="/images/people/caro.jpg"
                alt="Hylton Denton — Project Manager at RAS-VERTEX"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="100px"
              />
            </div>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaHeading}>
                Ready to talk about your project?
              </h3>
              <p className={styles.ctaBody}>
                Building projects can feel like a lot. Don&rsquo;t stress —
                we&rsquo;ve been doing this for 25 years. One call to Hylton and
                you&rsquo;ll know exactly where you stand.
              </p>
              <Link
                href="/contact"
                className={styles.ctaButton}
                aria-label="Talk to Hylton about your project"
              >
                Let&rsquo;s talk about your project →
              </Link>
            </div>
          </div>
        </div>
      </div>

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
