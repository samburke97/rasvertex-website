"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <div className={styles.page}>
      {/* ── The blue card ──────────────────────────────────── */}
      <section className={styles.card}>
        <h2 className={styles.cardHeading}>
          We&rsquo;ll keep you in the loop every step of the way
        </h2>

        <div className={styles.cardBody}>
          {/* Left — photo, scrolls normally */}
          <div className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <Image
                src="/images/projects/1.jpeg"
                alt="RAS-VERTEX team on site"
                fill
                className={styles.photo}
                sizes="55vw"
                priority
              />
            </div>
          </div>

          {/* Right — text sticks to viewport as photo scrolls past */}
          <div className={styles.textCol}>
            <div className={styles.textBlock}>
              <p className={styles.eyebrow}>ROCO®</p>
              <p className={styles.paragraph}>
                Every RAS-VERTEX® project gets its own dedicated project page on
                our online management platform, ROCO©. Stay across every detail
                of the work without lifting a finger:
              </p>
              <ul className={styles.checklist}>
                <li>View your project timeline</li>
                <li>Review progress photos</li>
                <li>Track milestones</li>
                <li>Book site visits &amp; inspections</li>
                <li>Access invoices</li>
                <li>Leave comments &amp; feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Support section, inside the blue card ────────── */}
        <div className={styles.support}>
          <h3 className={styles.supportHeading}>
            And if anything pops up, there&rsquo;s always someone you can call.
          </h3>
          <p className={styles.supportBody}>
            Customer support is important to us — our support and aftercare
            teams are *local* and ready to help whenever you need them.
          </p>

          <div className={styles.supportFooter}>
            <div className={styles.teamRow}>
              <div className={styles.teamAvatar} />
              <div className={styles.teamAvatar} />
              <div className={styles.teamAvatar} />
              <div className={styles.teamAvatar} />
            </div>

            <div className={styles.ctaBlock}>
              <p className={styles.ctaLabel}>Ready to start your project?</p>
              <Link href="/contact" className={styles.ctaButton}>
                Get a free quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
