import styles from "./Industries.module.css";

const INDUSTRIES = [
  {
    n: "01",
    title: "Body Corporate",
    body: "We partner with dozens of body corporates across the Sunshine Coast to keep buildings well maintained — with rope access that causes minimal disruption to residents.",
  },
  {
    n: "02",
    title: "Industrial",
    body: "Trusted partner for major industrial projects. Rope access running smoothly, structures robust, safety paramount. We work to your shutdown schedule.",
  },
  {
    n: "03",
    title: "Commercial",
    body: "From regular inspections to swift responsive repairs, we prioritise the upkeep of your commercial space with minimal disruption to tenants.",
  },
  {
    n: "04",
    title: "Education",
    body: "RAS-VERTEX partners with schools and universities across the Sunshine Coast. From routine inspections to proactive repairs, we keep campuses in top condition.",
  },
  {
    n: "05",
    title: "Government",
    body: "Preferred maintenance partner for government facilities across the Sunshine Coast — with a steadfast commitment to reliability, compliance and documentation.",
  },
  {
    n: "06",
    title: "Medical",
    body: "Understanding the critical nature of medical environments, we prioritise precision, cleanliness and efficiency in every project we engage with.",
  },
];

export default function Industries() {
  return (
    <section className={styles.section}>
      <div className={styles.bar}>
        <div className={styles.barLeft}>
          <span className={styles.eyebrow}>Our industries</span>
          <h2 className={styles.heading}>
            Built for every
            <br />
            building type.
          </h2>
        </div>
        <p className={styles.sub}>
          We've maintained buildings across every sector on the Sunshine Coast.
          The method changes. The standard doesn't.
        </p>
      </div>

      <div className={styles.grid}>
        {INDUSTRIES.map((ind) => (
          <div key={ind.n} className={styles.card}>
            <span className={styles.num}>{ind.n}</span>
            <h3 className={styles.title}>{ind.title}</h3>
            <p className={styles.body}>{ind.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
