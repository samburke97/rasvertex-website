import Image from "next/image";
import Link from "next/link";
import styles from "./PaintingProjects.module.css";

const PROJECTS = [
  {
    suburb: "Mooloolaba",
    name: "Oceanfront High-Rise Repaint",
    type: "Body Corporate · 8 storeys",
    system: "Dulux Weathershield · elastomeric topcoat",
    image: "/images/projects/1.jpeg",
  },
  {
    suburb: "Coolum Beach",
    name: "Coolum Resort Exterior",
    type: "Commercial · resort complex",
    system: "Haymes Sandtex · salt-bonded primer",
    image: "/images/projects/2.jpeg",
  },
  {
    suburb: "Maroochydore",
    name: "CBD Office Tower",
    type: "Commercial · 12 storeys",
    system: "Dulux AcraTex · render & texture coat",
    image: "/nav/painting.png",
  },
  {
    suburb: "Noosa Heads",
    name: "Hastings Street Strata",
    type: "Body Corporate · 5 storeys",
    system: "Haymes Proofex · chloride rinse system",
    image: "/assets/bodycorporate.png",
  },
  {
    suburb: "Caloundra",
    name: "Kings Beach Residential Complex",
    type: "Strata · 24 units",
    system: "Dulux Weathershield · full exterior repaint",
    image: "/assets/residential.png",
  },
  {
    suburb: "Buderim",
    name: "Heritage Queenslander Repaint",
    type: "Residential · heritage listed",
    system: "Haymes Heritage Collection · lime-based system",
    image: "/assets/commercial.png",
  },
];

export default function PaintingProjects() {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Recent projects</span>
            <h2 className={styles.heading}>
              Work we're proud of,
              <br />
              from Noosa to Caloundra.
            </h2>
          </div>
          <p className={styles.headerBody}>
            Twenty-five years of painting across the Sunshine Coast. High-rise
            body corporates in Mooloolaba, heritage homes in Buderim, resort
            complexes in Coolum — every job gets the same crew, the same prep,
            and the same five-year warranty.
          </p>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <div key={p.name} className={styles.project}>
              <div className={styles.photo}>
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.suburb}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
              </div>
              <div className={styles.meta}>
                <p className={styles.suburb}>{p.suburb}</p>
                <p className={styles.name}>{p.name}</p>
                <p className={styles.type}>
                  {p.type} · {p.system}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <p className={styles.footerNote}>
            We also work across Kawana, Sippy Downs, Coolum, Peregian,
            Noosaville, Tewantin, Nambour, Yandina and throughout the
            hinterland.
          </p>
          <Link href="/contact" className={styles.cta}>
            Start your project →
          </Link>
        </div>
      </section>
    </div>
  );
}
