// app/components/contact/ContactInfo.tsx

import Image from "next/image";
import styles from "./ContactInfo.module.css";

const TRUST = [
  { value: "25+", label: "Years on the Coast" },
  { value: "500+", label: "Buildings maintained" },
  { value: "1", label: "Project manager, start to finish" },
];

export default function ContactInfo() {
  return (
    <aside className={styles.aside} aria-label="Contact information">
      {/* ── Headline ── */}
      <div className={styles.top}>
        <h1>
          Let&rsquo;s talk
          <br />
          about your
          <br />
          project.
        </h1>
        <p className="p-soft">
          Fill in the form and Hylton will be back to you within one business
          day — no call centres, no pushy sales rep.
        </p>
      </div>

      {/* ── Trust stats ── */}
      <ul className={styles.trust} aria-label="Why choose RAS-VERTEX">
        {TRUST.map((t) => (
          <li key={t.value} className={styles.trustItem}>
            <span className={styles.trustValue}>{t.value}</span>
            <span className={styles.trustLabel}>{t.label}</span>
          </li>
        ))}
      </ul>

      {/* ── Contact details ── */}
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt className={styles.label}>Call</dt>
          <dd>
            <a
              href="tel:0754430000"
              className={styles.value}
              aria-label="Call RAS-VERTEX on 07 5443 0000"
            >
              07 5443 0000
            </a>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Email</dt>
          <dd>
            <a
              href="mailto:hello@rasvertex.com.au"
              className={styles.value}
              aria-label="Email RAS-VERTEX"
            >
              hello@rasvertex.com.au
            </a>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Visit</dt>
          <dd className={styles.value}>Maroochydore QLD 4558</dd>
        </div>
      </dl>

      {/* ── Person ── */}
      <div className={styles.person}>
        <div className={styles.avatarWrap}>
          <Image
            src="/images/people/caro.jpg"
            alt="Hylton Denton — Project Manager at RAS-VERTEX"
            fill
            sizes="64px"
            className={styles.avatar}
          />
        </div>
        <div>
          <p className={styles.personName}>Hylton Denton</p>
          <p className={styles.personRole}>Dedicated Project Manager</p>
        </div>
      </div>
    </aside>
  );
}
