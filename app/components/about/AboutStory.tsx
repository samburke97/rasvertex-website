// app/components/about/AboutStory.tsx

import Image from "next/image";
import styles from "./AboutStory.module.css";

const CREDENTIALS = [
  "QBCC Licensed",
  "Dulux Accredited",
  "Haymes Paint",
  "Master Painters Association",
];

export default function AboutStory() {
  return (
    <section className={styles.section} aria-labelledby="story-heading">
      <div className={styles.split}>
        <div className={styles.copyCol}>
          <h2 id="story-heading">
            A maintenance partner,<br />not a middleman.
          </h2>

          <div className={styles.credentials} aria-label="Accreditations">
            {CREDENTIALS.map((c) => (
              <span key={c} className={styles.credential}>{c}</span>
            ))}
          </div>

          <div className={styles.body}>
            <p className="p-soft">
              RAS-VERTEX didn&rsquo;t come from a boardroom. It started with fifteen years of rope access experience, a move to the Sunshine Coast, and a stubborn belief that property maintenance should be done properly — by the people who quoted the job, not whoever was free that week.
            </p>
            <p className="p-soft">
              We don&rsquo;t farm work out to subbies. Every painter, technician and rope access specialist on your building is directly employed, QBCC licensed and IRATA certified. One project manager runs your job from the first site visit to the final sign-off — one number, one thread, weekly photo updates.
            </p>
            <p className="p-soft">
              Because we live and work here, we build for here: salt air off Mooloolaba, UV up through Noosa, the humidity that rolls in off the hinterland. Every system we specify is chosen for the substrate, the exposure, and the exact conditions of your site.
            </p>
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/projects/rope-access.png"
              alt="RAS-VERTEX rope access technician on a Sunshine Coast high-rise"
              fill
              className={styles.image}
              sizes="(max-width: 860px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
