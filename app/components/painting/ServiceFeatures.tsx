import styles from "./ServiceFeatures.module.css";

const FEATURES = [
  {
    n: "01",
    title: "Dedicated project manager",
    body: "One person runs your job from site visit to sign-off. One number, one thread, no chasing. You always know who to call.",
  },
  {
    n: "02",
    title: "IRATA-certified access",
    body: "30+ rope access technicians trained in-house to IRATA L1–L3. We reach what scaffold can't — faster, safer, cheaper.",
  },
  {
    n: "03",
    title: "Coastal-spec systems",
    body: "Salt-bonded primers, chloride rinse, elastomeric topcoats. Every system is matched to the substrate and the exposure.",
  },
  {
    n: "04",
    title: "ROCO project portal",
    body: "Your project gets its own page — timeline, photos, milestones, invoices. Updated weekly. No calls needed.",
  },
  {
    n: "05",
    title: "5-year written warranty",
    body: "Workmanship warranty issued in writing and lodged in ROCO at handover. Backed by up to 15-year manufacturer coverage.",
  },
  {
    n: "06",
    title: "QBCC licensed & insured",
    body: "QBCC licensed, $20M public liability, full workers' comp. Certificates of currency issued automatically at quote stage.",
  },
];

export default function ServiceFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {FEATURES.map((f) => (
          <div key={f.n} className={styles.feature}>
            <span className={styles.num}>{f.n}</span>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.body}>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
