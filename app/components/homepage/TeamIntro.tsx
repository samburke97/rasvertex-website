// app/components/homepage/TeamIntro.tsx

import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import styles from "./TeamIntro.module.css";

export default function TeamIntro() {
  return (
    <section className={styles.section} aria-labelledby="team-heading">
      <div className={styles.grid}>
        {/* Left — intro */}
        <div className={styles.left}>
          <h3 id="team-heading">Your team on the Coast.</h3>
          <p className={styles.body}>
            Every person on your site is a direct RAS-VERTEX employee — no
            subbies, no labour hire. One dedicated project manager runs your job
            from first call to sign-off, with weekly photo updates and a single
            thread to keep everything on track. We service body corporates,
            commercial properties, and homes from Noosa to Caloundra.
          </p>
          <Link href="/company" className={styles.textLink}>
            More about our team →
          </Link>
        </div>

        {/* Right — CTA */}
        <div className={styles.right}>
          <div className={styles.avatar}>
            <Image
              src="/images/people/caro.jpg"
              alt="Hylton — Operations Lead at RAS-VERTEX"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Ready to talk about your project?</h3>
          <p className={styles.body}>
            Building projects can feel like a lot. Don&rsquo;t stress —
            we&rsquo;ve been doing this for 25 years. One call to Hylton and
            you&rsquo;ll know exactly where you stand.
          </p>
          <Button
            as="link"
            href="/contact"
            variant="primary"
            aria-label="Talk to Hylton about your project"
          >
            Let&rsquo;s talk about your project →
          </Button>
        </div>
      </div>
    </section>
  );
}
