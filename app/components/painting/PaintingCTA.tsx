import Link from "next/link";
import styles from "./PaintingCTA.module.css";

export default function PaintingCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Ready to start?</p>
          <h2 className={styles.headline}>
            Get a quote in
            <br />
            48 hours.
          </h2>
          <p className={styles.body}>
            Tell us what the job needs. A trade lead — not a call centre — will
            call you within two business days with a site visit scheduled.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.button}>
              Get a free quote →
            </Link>
            <a href="tel:+61000000000" className={styles.phone}>
              Or call us directly
            </a>
          </div>

          <div className={styles.reassurance}>
            <span>All commercial properties</span>
            <span>·</span>
            <span>Flexible scheduling</span>
            <span>·</span>
            <span>Body corporate preferred supplier</span>
          </div>
        </div>
      </div>
    </section>
  );
}
