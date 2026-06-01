// app/components/about/AboutStory.tsx
// Image left + copy right split. Timeline handled by CompanyTimeline below.

import Image from "next/image";
import styles from "./AboutStory.module.css";

export default function AboutStory() {
  return (
    <section className={styles.section} aria-labelledby="story-heading">
      <div className={styles.split}>
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

        <div className={styles.copyCol}>
          <h2 id="story-heading">
            Built on the Coast.
            <br />
            Built to last.
          </h2>
          <p className="p-soft">
            RAS-VERTEX didn&rsquo;t come from a boardroom. It came from 15 years
            of rope access experience, a move to the Sunshine Coast, and a
            determination to do the work properly.
          </p>
          <p className="p-soft">
            From a small local operation, RAS grew into the Coast&rsquo;s most
            trusted property maintenance partner — handling painting, cleaning,
            waterproofing, height safety, and maintenance without farming work
            out to subbies. 25+ directly employed team members, one project
            manager per job, and a standard that never moves.
          </p>
        </div>
      </div>
    </section>
  );
}
