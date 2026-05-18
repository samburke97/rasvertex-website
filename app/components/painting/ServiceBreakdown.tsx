import Image from "next/image";
import styles from "./ServiceBreakdown.module.css";

const services = [
  {
    label: "01",
    headline: "High-Rise & Exterior",
    body: "20-storey facades painted without a single day of scaffolding. Our rope access team mobilises faster, costs less, and leaves zero footprint on your property. Tenants keep their parking. Guests keep their views. You keep your timeline.",
    points: [
      "No scaffolding — no blocked access, no noise, no cost blowout",
      "IRATA Level 3 certified technicians on every job",
      "Haymes & Dulux commercial-grade coating systems",
    ],
    image: "/nav/painting.png",
    imageAlt: "Rope access exterior painting on high-rise building",
  },
  {
    label: "02",
    headline: "Strata & Body Corporate",
    body: "We speak strata. Committee presentations, staged scheduling across occupied buildings, resident communication — handled before the first brush stroke. Over 50 body corporate projects completed with zero complaints to building management.",
    points: [
      "Committee-ready proposals with scope, timeline, and warranty detail",
      "Staged floor-by-floor scheduling around occupancy",
      "10-year maintenance programs to prevent emergency levy calls",
    ],
    image: "/images/projects/1.jpeg",
    imageAlt: "Strata building painting project, Sunshine Coast",
  },
  {
    label: "03",
    headline: "Specialist Finishes",
    body: "Heritage restoration. Render and texture coatings. Roof systems. Pre-sale transformations that add tens of thousands to sale price. If the job needs more than a roller and a ladder, it needs us.",
    points: [
      "Heritage colour matching and heritage council compliance",
      "Render repair and texture coating application",
      "Colorbond, tiled, and metal roof painting systems",
    ],
    image: "/nav/height.png",
    imageAlt: "Heritage building restoration and specialist painting",
  },
];

export default function ServiceBreakdown() {
  return (
    <section className={styles.section}>
      {services.map((service, i) => (
        <div
          key={service.label}
          className={`${styles.row} ${i % 2 !== 0 ? styles.reversed : ""}`}
        >
          {/* Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className={styles.image}
                sizes="50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className={styles.contentCol}>
            <span className={styles.label}>{service.label}</span>
            <h3 className={styles.headline}>{service.headline}</h3>
            <p className={styles.body}>{service.body}</p>
            <ul className={styles.points}>
              {service.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
