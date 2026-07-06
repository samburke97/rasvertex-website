// app/components/about/TeamSection.tsx

import Image from "next/image";
import styles from "./TeamSection.module.css";
import { cld } from "../../lib/cloudinary";

export default function TeamSection() {
  return (
    <section className={styles.section} aria-labelledby="team-section-heading">

      {/* ── Left — text ── */}
      <div className={styles.textCol}>
        <div className={styles.textBlock}>
          <h2 id="team-section-heading">
            A maintenance partner,
            <br />
            not a middleman.
          </h2>

          <h4 className={styles.subheading}>One crew. Every trade.</h4>
          <p className="p-soft">
            We don&rsquo;t farm work out to subbies. Every painter, technician and rope access specialist is directly employed, QBCC licensed and IRATA certified — and one project manager runs your job from the first site visit to the final sign-off. Every system we specify is built for here: salt air, coastal UV, and the exact conditions of your site.
          </p>

          <h4 className={styles.subheading}>25 years on the Sunshine Coast.</h4>
          <p className="p-soft">
            Founded in 2009 by Phil, who brought 15 years of rope access experience from the UK, RAS grew into the Coast&rsquo;s go-to property maintenance contractor for body corporates, strata and commercial buildings from Noosa to Caloundra. In 2023 we merged with Vertex Access Solutions — 23 years of high-rise painting, waterproofing and height safety — and became RAS-VERTEX: 25+ specialists, every trade, one team.
          </p>
        </div>
      </div>

      {/* ── Right — team photo ── */}
      <div className={styles.imageCol}>
        <Image
          src={cld("coastal-buildings.jpg", { width: 1800 })}
          alt="The RAS-VERTEX team on the Sunshine Coast"
          fill
          className={styles.image}
          sizes="(max-width: 860px) 100vw, 50vw"
        />
      </div>

    </section>
  );
}
