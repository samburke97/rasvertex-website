import Image from "next/image";
import styles from "./ClientTypes.module.css";

const CLIENTS = [
  {
    n: "01",
    title: "Body Corporate",
    body: "We understand strata. Committee presentations, staged scheduling around residents, and communication handled before the first brush stroke. Your building stays occupied and on schedule.",
    points: [
      "Committee-ready proposals with full scope and warranty detail",
      "Staged floor-by-floor scheduling around occupancy",
      "10-year maintenance programs to prevent emergency levy calls",
    ],
    photo: "/images/projects/1.jpeg",
    alt: "Body corporate building repaint",
  },
  {
    n: "02",
    title: "Strata Management",
    body: "One point of contact for every trade, every building, every call. We work with strata managers across the Sunshine Coast who need a contractor they can trust to show up, communicate, and deliver.",
    points: [
      "Single project manager across all your buildings",
      "ROCO portal access — photos, invoices, milestones",
      "Preferred supplier terms available for volume work",
    ],
    photo: "/images/projects/2.jpeg",
    alt: "Strata building exterior",
  },
  {
    n: "03",
    title: "Commercial",
    body: "Minimal disruption to your tenants and operations. We work after hours, in zones, and around your business — so your asset is maintained without your clients ever noticing we were there.",
    points: [
      "After-hours and weekend scheduling available",
      "Low-VOC systems for occupied commercial spaces",
      "QBCC licensed, $20M public liability, full compliance",
    ],
    photo: "/nav/painting.png",
    alt: "Commercial building painting",
  },
];

export default function ClientTypes() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {CLIENTS.map((c) => (
          <div key={c.n} className={styles.col}>
            <div className={styles.photo}>
              <Image
                src={c.photo}
                alt={c.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="33vw"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <span className={styles.num}>{c.n}</span>
                <h3 className={styles.title}>{c.title}</h3>
              </div>
              <p className={styles.body}>{c.body}</p>
              <ul className={styles.points}>
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
