// app/components/about/AboutWhy.tsx

import styles from "./AboutWhy.module.css";

const REASONS = [
  {
    title: "IRATA-certified rope access",
    body: "Every rope access technician is IRATA certified from Level 1 to Level 3 — trained and employed directly by us. No subbies, no labour hire, no compromises on safety.",
  },
  {
    title: "No scaffold. No disruption.",
    body: "Rope access means no car parks blocked, no scaffold permits, no days lost to erection and strike. We mobilise in hours. Most buildings, we're working the same day.",
  },
  {
    title: "One project manager",
    body: "One person runs your job from first site visit to final sign-off. One number. One thread. Weekly photo updates. You always know exactly where things stand.",
  },
  {
    title: "Sunshine Coast specialists",
    body: "We understand coastal conditions — salt air corrosion, UV degradation, humidity cycles. We specify products and systems built for the Sunshine Coast environment.",
  },
  {
    title: "Full-service capability",
    body: "Painting, cleaning, waterproofing, height safety, maintenance — under one roof. One contractor, one quote, one invoice. No coordination overhead.",
  },
  {
    title: "QBCC licensed & fully insured",
    body: "All work is carried out by QBCC licensed supervisors with full public liability and professional indemnity. Every job is documented and warranted.",
  },
];

export default function AboutWhy() {
  return (
    <div className={styles.card} role="group" aria-labelledby="why-heading">
      <div className={styles.header}>
        <h2 id="why-heading">
          Why Sunshine Coast building managers choose RAS-VERTEX.
        </h2>
        <p className="p-soft">
          Body corporates, strata committees, commercial property managers and
          facilities directors across the Sunshine Coast. Here&rsquo;s what
          keeps them coming back.
        </p>
      </div>

      <dl className={styles.grid}>
        {REASONS.map((r) => (
          <div key={r.title} className={styles.item}>
            <dt className={styles.title}>{r.title}</dt>
            <dd className={styles.body}>{r.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
