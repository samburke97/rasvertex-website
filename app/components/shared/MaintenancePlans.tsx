// app/components/shared/MaintenancePlans.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./MaintenancePlans.module.css";

export interface MaintenancePlan {
  n: string;
  title: string;
  body: string;
  photo: string;
  alt: string;
}

interface MaintenancePlansProps {
  heading: React.ReactNode;
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
  plans: MaintenancePlan[];
  headingId?: string;
}

export default function MaintenancePlans({
  heading,
  lede,
  ctaLabel = "Tailor your plan →",
  ctaHref = "/contact",
  plans,
  headingId = "maintenance-plans-heading",
}: MaintenancePlansProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <h2 id={headingId}>{heading}</h2>
        <div className={styles.headerRight}>
          <p className="p-soft">{lede}</p>
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel.slice(0, ctaLabel.lastIndexOf('→')).trimEnd()}
          </Link>
        </div>
      </div>

      {/* ── Photo-led plan grid ── */}
      <div className={styles.grid}>
        {plans.map((plan) => (
          <article key={plan.n} className={styles.plan} aria-label={plan.title}>
            <div className={styles.photo}>
              <Image
                src={plan.photo}
                alt={plan.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 860px) 50vw, 25vw"
              />
            </div>
            <div className={styles.content}>
              <p className={styles.title}>{plan.title}</p>
              <p className={styles.body}>{plan.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
