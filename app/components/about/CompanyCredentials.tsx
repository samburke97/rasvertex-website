// app/components/about/CompanyCredentials.tsx

import styles from "./CompanyCredentials.module.css";

const CREDENTIALS = [
  {
    value: "QBCC",
    label: "Licensed contractor",
    detail: "Painting, waterproofing & building work",
  },
  {
    value: "IRATA",
    label: "L1 – L3 certified",
    detail: "Every technician directly employed",
  },
  {
    value: "$20M",
    label: "Public liability",
    detail: "Plus full workers' compensation cover",
  },
  {
    value: "25+",
    label: "Years on the Coast",
    detail: "Noosa to Caloundra, every suburb",
  },
];

export default function CompanyCredentials() {
  return (
    <section
      className={styles.section}
      aria-label="RAS-VERTEX credentials and certifications"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="credentials-heading">
            Licensed, certified,
            <br />
            and fully insured.
          </h2>
          <p className="p-soft">
            Every certificate is current. Every technician is directly employed.
            Certificates of currency are issued automatically at quote stage —
            no chasing, no surprises for your committee.
          </p>
        </div>

        <dl className={styles.grid}>
          {CREDENTIALS.map((c) => (
            <div key={c.value} className={styles.item}>
              <dt className={styles.label}>{c.label}</dt>
              <dd className={styles.value}>{c.value}</dd>
              <p className={styles.detail}>{c.detail}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
