// app/components/about/CompanyTimeline.tsx

import styles from "./CompanyTimeline.module.css";

const TIMELINE = [
  {
    year: "2009",
    event: "Phil founds Rope Access Services (RAS) on the Sunshine Coast",
  },
  { year: "2015", event: "Team grows to 15+ technicians and admin staff" },
  {
    year: "2019",
    event: "Expanded to painting, waterproofing and height safety",
  },
  {
    year: "2023",
    event: "RAS acquires Vertex Access Solutions — RAS-VERTEX is born",
  },
  { year: "Today", event: "25+ team members · 500+ buildings maintained" },
];

export default function CompanyTimeline() {
  return (
    <section className={styles.section} aria-labelledby="timeline-heading">
      <div className={styles.inner}>
        {/* Left — sticky story */}
        <div className={styles.left}>
          <div className={styles.sticky}>
            <h2 id="timeline-heading">From the UK to the Sunshine Coast.</h2>
            <p className="p-soft">
              Originally from the UK, Phil arrived on the Sunshine Coast in 2009
              with over 15 years of rope access experience and a clear gap in
              the market: there was no local specialist partner for high-access
              property maintenance. He founded Rope Access Services (RAS) to
              fill it.
            </p>
            <p className="p-soft">
              From a small local operation, RAS grew quickly — a single,
              reliable contractor handling painting, cleaning, waterproofing,
              height safety and maintenance without farming work out to subbies.
            </p>
            <p className="p-soft">
              In 2023, RAS acquired Vertex Access Solutions, one of the most
              respected names in Sunshine Coast rope access. RAS-VERTEX brought
              together two teams, deeper reach, and greater capacity across
              every service. Today, 25+ directly employed team members. No
              labour hire. No subbies. Every person on your site is ours.
            </p>
          </div>
        </div>

        {/* Right — timeline */}
        <div className={styles.right}>
          <ol className={styles.list}>
            {TIMELINE.map((item, i) => (
              <li key={item.year} className={styles.item}>
                <div className={styles.rail} aria-hidden="true">
                  <div className={styles.dot} />
                  {i < TIMELINE.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.content}>
                  <span className={styles.year}>{item.year}</span>
                  <p className={styles.event}>{item.event}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
