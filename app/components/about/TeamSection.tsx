// app/components/about/TeamSection.tsx

import Image from "next/image";
import styles from "./TeamSection.module.css";

export default function TeamSection() {
  return (
    <section className={styles.section} aria-labelledby="team-section-heading">

      {/* ── Left — text ── */}
      <div className={styles.textCol}>
        <div className={styles.textBlock}>
          <h2 id="team-section-heading">
            25 people.
            <br />
            Not one subcontractor.
          </h2>
          <p className="p-soft">
            Every person on your site is a direct RAS-VERTEX employee. We
            recruit, we train, we insure them — and they stay. The same faces
            show up year after year because we pay well, treat people right,
            and give them real career paths through IRATA certification and
            trade licensing. That continuity is what keeps buildings — and the
            people who manage them — coming back to us after 25 years.
          </p>
          <p className="p-soft">
            No labour hire. No subbies turning up unannounced. No finger-pointing
            when something goes wrong. One team, one invoice, one number to call.
          </p>
        </div>
      </div>

      {/* ── Right — team photo ── */}
      <div className={styles.imageCol}>
        <Image
          src="/images/projects/1.jpeg"
          alt="The RAS-VERTEX team on the Sunshine Coast"
          fill
          className={styles.image}
          sizes="(max-width: 860px) 100vw, 50vw"
        />
      </div>

    </section>
  );
}
