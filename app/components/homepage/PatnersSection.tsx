// app/components/homepage/PartnerSection.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./PartnersSection.module.css";
import { cld } from "../../lib/cloudinary";

export interface PartnerSectionCard {
  image: string;
  imageAlt: string;
  heading: string;
  body: string;
}

const DEFAULT_CARDS: PartnerSectionCard[] = [
  {
    image: cld("commercial", { width: 1800 }),
    imageAlt: "Commercial property maintenance — RAS-VERTEX Sunshine Coast",
    heading: "Commercial.",
    body: "We know a closed shopfront or disrupted tenant costs you money. That's why we schedule around you — after hours, weekends, whatever it takes. One team across every trade, so you're not coordinating separate contractors.",
  },
  {
    image: cld("body-corp", { width: 1800 }),
    imageAlt: "Body corporate and strata maintenance — RAS-VERTEX",
    heading: "Body Corporate & Strata.",
    body: "We've worked with enough committees to know what matters: clear communication before work starts, no surprises for residents, and results the whole building is proud of. We handle the scheduling, the access, the documentation — across every service.",
  },
  {
    image: cld("residential", { width: 1800 }),
    imageAlt: "Residential property maintenance — RAS-VERTEX Sunshine Coast",
    heading: "Residential.",
    body: "We've been looking after homes on the Sunshine Coast for 25 years — painting, cleaning, waterproofing and maintenance. You'll meet your project manager before work starts, and they'll be on the other end of the phone until you're happy.",
  },
];

interface PartnerSectionProps {
  heading?: string;
  paragraph?: string;
  ctaPersonName?: string;
  ctaPersonRole?: string;
  ctaPersonPhoto?: string;
  ctaHeading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  cards?: PartnerSectionCard[];
}

export default function PartnerSection({
  heading = "Your partner on the Coast.",
  paragraph = "Every person on your site is a direct RAS-VERTEX employee — no subbies, no labour hire. One dedicated project manager runs your job from first call to sign-off, with weekly photo updates and a single thread to keep everything on track.",
  ctaPersonName = "Caroline",
  ctaPersonRole = "Client Services Manager",
  ctaPersonPhoto = "/images/people/caro.jpg",
  ctaHeading = "Ready to talk about your project?",
  ctaLabel = "Let's talk about your project",
  ctaHref = "/contact",
  cards = DEFAULT_CARDS,
}: PartnerSectionProps) {
  return (
    <div className={styles.inner}>

      {/* ── Left col: sticky wrapper — flattened on mobile via display:contents ── */}
      <div className={styles.leftCol}>
        <div className={styles.leftTop}>
          <h2 id="partner-heading">{heading}</h2>
          <p className="p-soft">{paragraph}</p>
        </div>

        <div className={styles.ctaCard}>
          <div className={styles.ctaAvatarRow}>
            <div className={styles.ctaAvatar}>
              <Image
                src={ctaPersonPhoto}
                alt={`${ctaPersonName} — ${ctaPersonRole} at RAS-VERTEX`}
                fill
                sizes="96px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.ctaPersonInfo}>
              <span className={styles.ctaPersonName}>{ctaPersonName}</span>
              <span className={styles.ctaPersonRole}>{ctaPersonRole}</span>
            </div>
          </div>
          <h3 className={styles.ctaHeading}>{ctaHeading}</h3>
          <Link href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ── Right: stacked cards ── */}
      <div className={styles.right}>
        {cards.map((c) => (
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
