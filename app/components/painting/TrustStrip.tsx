import Image from "next/image";
import styles from "./TrustStrip.module.css";

const stats = [
  { number: "200+", label: "Buildings Painted" },
  { number: "25+", label: "Years Experience" },
  { number: "0", label: "Closure Days Required" },
  { number: "50+", label: "Body Corp Partners" },
];

const logos = [
  { src: "/partners/racv.png", alt: "RACV" },
  { src: "/partners/novotel.svg.png", alt: "Novotel" },
  { src: "/partners/accor.svg", alt: "Accor" },
  { src: "/partners/archers.png", alt: "Archers" },
  { src: "/partners/raywhite.png", alt: "Ray White" },
  { src: "/partners/trafalgar.svg", alt: "Trafalgar" },
  { src: "/partners/mosaic.svg", alt: "Mosaic" },
  { src: "/partners/pica.png", alt: "Pica" },
];

export default function TrustStrip() {
  return (
    <section className={styles.section}>
      {/* ── Stats ────────────────────────────────────────── */}
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ── Logos ────────────────────────────────────────── */}
      <div className={styles.logos}>
        {logos.map((logo) => (
          <div key={logo.alt} className={styles.logoWrap}>
            <Image src={logo.src} alt={logo.alt} fill className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  );
}
