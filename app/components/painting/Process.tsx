import styles from "./Process.module.css";

const Arrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LEDE =
  "Most paint failures on the coast aren't paint failures — they're prep failures. We treat preparation as 70% of the job and the part you don't see is the part that lasts.";

const STEPS = [
  {
    n: "01",
    meta: ["Day 0", "burg:48hr response"],
    h: "Inspect & spec",
    body: "Site walk with the painting lead. We measure moisture, test adhesion and document the substrate before quoting. No guesswork.",
    delivs: ["Substrate report", "Moisture map", "Adhesion test"],
  },
  {
    n: "02",
    meta: ["Day 3–5", "burg:Itemised quote"],
    h: "Quote & schedule",
    body: "Itemised line-by-line scope with material specs, warranty terms, daily timeline and project-manager contact. Signed off before mobilisation.",
    delivs: ["Line-item quote", "Material spec", "Written schedule"],
  },
  {
    n: "03",
    meta: ["Week 1–2", "burg:70% of job"],
    h: "Prep & protect",
    body: "Pressure wash, mechanical sand, repair, mask. Coastal sites get a chloride rinse and a salt-bonded primer. Every step photographed.",
    delivs: ["Wash & rinse", "Repair logs", "Primer sign-off"],
  },
  {
    n: "04",
    meta: ["Week 3–6", "burg:On-spec coats"],
    h: "Coat & document",
    body: "Manufacturer-spec coats with wet-film thickness logged per layer. Daily photo logs lodged in ROCO so you can watch progress.",
    delivs: ["WFT readings", "Daily photos", "ROCO log"],
  },
  {
    n: "05",
    meta: ["Final week", "burg:5-yr warranty"],
    h: "Sign-off & warranty",
    body: "Walk-through with you on completion. 5-year workmanship warranty issued in writing and lodged with your records. Touch-up kit handed over.",
    delivs: ["Walk-through", "Warranty document", "Touch-up kit"],
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.timeline}>
        <div className={styles.rail} aria-hidden="true" />

        <ol className={styles.steps}>
          {STEPS.map((p) => (
            <li key={p.n} className={styles.step}>
              <div className={styles.stepNum} aria-hidden="true">
                {p.n}
              </div>
              <div className={styles.stepMeta}>
                {p.meta.map((m, i) =>
                  m.startsWith("burg:") ? (
                    <span key={i} className={styles.burg}>
                      ↓ {m.slice(5)}
                    </span>
                  ) : (
                    <span key={i}>{m}</span>
                  ),
                )}
              </div>
              <h4 className={styles.stepH}>{p.h}</h4>
              <p className={styles.stepBody}>{p.body}</p>
              <div className={styles.delivs}>
                {p.delivs.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <aside className={styles.side}>
          <p className={styles.sideEyebrow}>Your project manager</p>
          <h4 className={styles.sideH}>
            One thread.
            <br />
            One number.
          </h4>
          <p className={styles.sideBody}>
            From first phone call to warranty sign-off, one project manager runs
            the whole job. You get a WhatsApp thread, weekly photo updates and a
            single invoice.
          </p>
          <a href="#quote" className={styles.sideCta}>
            Book a site visit <Arrow />
          </a>
        </aside>
      </div>
    </section>
  );
}
