import styles from "./HeroMeta.module.css";

export default function HeroMeta() {
  return (
    <div className={styles.bar}>
      <div className={styles.grid}>
        {/* Col 1 — What we do */}
        <div className={styles.col}>
          <span className={styles.label}>[ What we do ]</span>
          <p className={styles.body}>
            We&apos;re the Sunshine Coast&apos;s property maintenance partner.
            Built by locals, we care for residential, commercial, and body
            corporate clients from Caloundra to Noosa.
          </p>
        </div>

        {/* Col 2 — Coverage */}
        <div className={styles.col}>
          <span className={styles.label}>Coverage</span>
          <p className={styles.value}>Sunshine Coast QLD</p>
        </div>

        {/* Col 3 — Licenses */}
        <div className={styles.col}>
          <span className={styles.label}>Licenses</span>
          <p className={styles.value}>QBCC · WorkSafe</p>
        </div>

        {/* Col 4 — Response */}
        <div className={styles.col}>
          <span className={styles.label}>Response</span>
          <p className={styles.value}>24 / 48 hr quote</p>
        </div>
      </div>
    </div>
  );
}
