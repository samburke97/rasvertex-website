import Link from "next/link";
import styles from "./ProblemSolution.module.css";

export default function ProblemSolution() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left: the problem ──────────────────────────── */}
        <div className={styles.problem}>
          <p className={styles.label}>The Problem</p>
          <h2 className={styles.headline}>
            Scaffolding quotes that cost more than the paint.
          </h2>
          <p className={styles.body}>
            Three weeks of blocked entrances. Tenant complaints. Lost parking.
            Noise from 6am. Body corporate meetings derailed by access logistics
            instead of the actual job.
          </p>
        </div>

        {/* ── Right: the solution ────────────────────────── */}
        <div className={styles.solution}>
          <p className={styles.label}>How We Work</p>
          <h2 className={styles.headline}>
            We paint 20-storey buildings from ropes.
          </h2>
          <p className={styles.body}>
            No scaffolding. No road closures. No blocked balconies. Our IRATA
            Level 3 certified rope access team delivers the same premium finish
            in a fraction of the time — while your building operates as normal.
          </p>
          <Link href="/contact" className={styles.cta}>
            Get a free quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
