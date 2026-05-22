import Link from "next/link";
import styles from "./MaintenancePlans.module.css";

const PLANS = [
  {
    number: "01",
    title: "Ongoing support",
    body: "We act as an extension of your team, providing maintenance support when you need it most — not just when something breaks.",
    meta: "YEAR-ROUND",
  },
  {
    number: "02",
    title: "Dedicated team",
    body: "Absolute peace of mind with a dedicated team that understands the condition and specific needs of your building.",
    meta: "ONE CONTACT",
  },
  {
    number: "03",
    title: "Full service",
    body: "Take advantage of our entire team across every department — painting, cleaning, waterproofing, height safety — in one plan.",
    meta: "ALL TRADES",
  },
  {
    number: "04",
    title: "Your terms",
    body: "Whether you're looking for holiday cover or a multi-year partner, we'll tailor a plan that fits your schedule and budget.",
    meta: "FLEXIBLE",
  },
];

export default function MaintenancePlans() {
  return (
    <section className={styles.section}>
      <div className={styles.bar}>
        <div className={styles.barLeft}>
          <span className={styles.eyebrow}>Maintenance plans</span>
          <h2 className={styles.heading}>
            We'll take care
            <br />
            of the hard yards.
          </h2>
        </div>
        <div className={styles.barRight}>
          <p className={styles.intro}>
            We act as an extension of your team — providing ongoing maintenance
            plans that deliver support when you need it most, so you can take
            care of business.
          </p>
          <Link href="/contact" className={styles.cta}>
            Tailor your plan →
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        {PLANS.map((p, i) => (
          <div
            key={p.number}
            className={`${styles.step} ${i === 0 ? styles.stepDefault : ""}`}
          >
            <div className={styles.stepTop}>
              <span className={styles.stepNumber}>{p.number}</span>
            </div>
            <div className={styles.stepBottom}>
              <h3 className={styles.stepTitle}>{p.title}</h3>
              <p className={styles.stepBody}>{p.body}</p>
              <span className={styles.stepMeta}>↓ {p.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
