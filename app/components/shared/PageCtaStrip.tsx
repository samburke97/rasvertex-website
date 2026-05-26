import Link from "next/link";
import styles from "./PageCtaStrip.module.css";

interface PageCtaStripProps {
  heading?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageCtaStrip({
  heading = "Get a quote that holds up at handover.",
  sub = "Tell us the building, the scope, and when you need to be done. We'll come and look, then send a scoped quote inside five business days — line-itemed, not lump-sum.",
  ctaLabel = "Request a quote →",
  ctaHref = "/contact",
}: PageCtaStripProps) {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.right}>
            <p className={styles.sub}>{sub}</p>
            <div className={styles.actions}>
              <Link href={ctaHref} className={styles.ctaPrimary}>
                {ctaLabel}
              </Link>
              <a href="tel:1300727889" className={styles.ctaSecondary}>
                Call 1300 RAS VTX
              </a>
            </div>
            <p className={styles.email}>
              desk@rasvertex.com.au · Response within 1 business hour
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
