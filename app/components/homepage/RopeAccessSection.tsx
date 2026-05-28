// app/components/homepage/RopeAccessSection.tsx

import Image from "next/image";
import styles from "./RopeAccessSection.module.css";

export default function RopeAccessSection() {
  return (
    <section className={styles.section} aria-labelledby="rope-access-heading">
      <div className={styles.imageCol}>
        <Image
          src="/images/projects/rope-access.png"
          alt="IRATA-certified rope access technicians working on a Sunshine Coast high-rise"
          fill
          className={styles.image}
          sizes="(max-width: 860px) 100vw, 50vw"
          priority
        />
      </div>

      <div className={styles.textCol}>
        <div className={styles.textBlock}>
          <h2 id="rope-access-heading">
            We go where others can&rsquo;t. IRATA-certified rope access, trained
            in-house on the Sunshine Coast.
          </h2>
          <p className="p-soft">
            30+ rope access technicians certified from Level 1 through to Level
            3 — every one of them a direct RAS-VERTEX employee trained on the
            Coast. We reach what scaffold can&rsquo;t, faster, with less
            disruption to tenants and operations, and at a fraction of the cost.
            No scaffold footprint, no lost car parks, no complaints from unit
            owners about noise at 6am.
          </p>
        </div>
      </div>
    </section>
  );
}
