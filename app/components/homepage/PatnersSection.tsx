// app/components/homepage/PartnerSection.tsx

import Image from "next/image";
import Button from "../ui/Button";
import styles from "./PartnersSection.module.css";

const CARDS = [
  {
    image: "/images/projects/1.jpeg",
    imageAlt: "Residential property maintenance — RAS-VERTEX Sunshine Coast",
    heading: "Residential.",
    body: "We've been looking after homes on the Sunshine Coast for 25 years — painting, cleaning, waterproofing and maintenance. You'll meet your project manager before work starts, and they'll be on the other end of the phone until you're happy.",
  },
  {
    image: "/images/projects/2.jpeg",
    imageAlt: "Commercial property maintenance — RAS-VERTEX Sunshine Coast",
    heading: "Commercial.",
    body: "We know a closed shopfront or disrupted tenant costs you money. That's why we schedule around you — after hours, weekends, whatever it takes. One team across every trade, so you're not coordinating separate contractors.",
  },
  {
    image: "/images/projects/2.jpeg",
    imageAlt: "Body corporate and strata maintenance — RAS-VERTEX",
    heading: "Body corporate & strata.",
    body: "We've worked with enough committees to know what matters: clear communication before work starts, no surprises for residents, and results the whole building is proud of. We handle the scheduling, the access, the documentation — across every service.",
  },
];

export default function PartnerSection() {
  return (
    <div className={styles.inner}>

      {/* ── Left col: sticky wrapper — flattened on mobile via display:contents ── */}
      <div className={styles.leftCol}>
        <div className={styles.leftTop}>
          <h2 id="partner-heading">Your partner on the Coast.</h2>
          <p className="p-soft">
            Every person on your site is a direct RAS-VERTEX employee — no
            subbies, no labour hire. One dedicated project manager runs your
            job from first call to sign-off, with weekly photo updates and a
            single thread to keep everything on track.
          </p>
        </div>

        <div className={styles.ctaCard}>
          <div className={styles.ctaAvatar}>
            <Image
              src="/images/people/caro.jpg"
              alt="Hylton — Operations Lead at RAS-VERTEX"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className={styles.ctaHeading}>
            Ready to talk about your project?
          </h3>
          <p className={styles.ctaBody}>
            One call to Hylton and you&rsquo;ll know exactly where you stand.
          </p>
          <Button as="link" href="/contact" variant="primary" size="sm" aria-label="Talk to Hylton about your project">
            Let&rsquo;s talk about your project →
          </Button>
        </div>
      </div>

      {/* ── Right: stacked cards ── */}
      <div className={styles.right}>
        {CARDS.map((c) => (
          <article key={c.heading} className={styles.card} aria-label={c.heading}>
            <div className={styles.imageWrap}>
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
            <div className={styles.cardBody}>
              <h3>{c.heading}</h3>
              <p className="p-soft">{c.body}</p>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
