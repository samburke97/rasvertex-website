import styles from "./StatsRibbon.module.css";

const STATS = [
  { value: "5", unit: "YR", label: "Workmanship warranty" },
  { value: "48", unit: "HR", label: "Site visit & quote" },
  { value: "220+", unit: null, label: "Buildings repainted" },
  { value: "L3", unit: null, label: "IRATA rope access" },
] as const;

export default function StatsRibbon() {
  return (
    <section className={styles.ribbon}>
      <div className={styles.grid}>
        {STATS.map(({ value, unit, label }) => (
          <div className={styles.cell} key={label}>
            <div className={styles.value}>
              {value}
              {unit && <span className={styles.unit}>{unit}</span>}
            </div>
            <div className={styles.label}>
              <span className={styles.dot} aria-hidden="true" />
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
