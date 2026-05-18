import SectionHead from "./SectionHead";
import styles from "./PaintSystems.module.css";

const LEDE =
  "Every coating system is matched to the substrate and the exposure. No catch-all primer, no contractor-grade topcoat to make a margin.";
const NOTE =
  "Warranties shown are manufacturer-backed and require system-correct prep and application. Our 5-year workmanship warranty sits on top and covers application defects independently.";
const COLS = ["№", "System", "Where it belongs", "Warranty", "Surface"];

const SYSTEMS = [
  {
    i: "01",
    brand: "DULUX",
    sub: "Weathershield Pure",
    use: "Coastal exterior render & masonry. Salt-bonded primer mandatory.",
    warranty: "15 yr",
    surface: "Render · Masonry",
  },
  {
    i: "02",
    brand: "HAYMES",
    sub: "Ultratrace Elastomeric",
    use: "High-movement substrates. Hairline crack bridging up to 1.5mm.",
    warranty: "12 yr",
    surface: "Render · Concrete",
  },
  {
    i: "03",
    brand: "DULUX",
    sub: "AquaShield",
    use: "Trafficable balcony coatings & podium decks. UV-stable.",
    warranty: "10 yr",
    surface: "Concrete · Tile",
  },
  {
    i: "04",
    brand: "HAYMES",
    sub: "Solashield Roof",
    use: "Heat-reflective Colorbond & tile roofs.",
    warranty: "10 yr",
    surface: "Metal · Tile",
  },
  {
    i: "05",
    brand: "PORTERS",
    sub: "Lime Wash Range",
    use: "Heritage masonry & breathable substrates.",
    warranty: "7 yr",
    surface: "Lime · Render",
  },
  {
    i: "06",
    brand: "DULUX",
    sub: "Wash & Wear+ Low-Sheen",
    use: "Occupied interiors. Low-VOC, washable, same-day re-occupy.",
    warranty: "7 yr",
    surface: "Plaster · Render",
  },
];

export default function PaintSystems() {
  return (
    <section className={styles.section}>
      <SectionHead
        base="THE MATERIALS."
        overlay="THE MATERIALS."
        sr="The materials."
        muted
      >
        <span className={styles.eyebrow}>Specified, not defaulted</span>
        <p>{LEDE}</p>
      </SectionHead>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.head}`}>
          {COLS.map((c) => (
            <div key={c}>{c}</div>
          ))}
          <div aria-hidden="true" />
        </div>
        {SYSTEMS.map((r) => (
          <div className={styles.row} key={r.i}>
            <div className={styles.index}>{r.i}</div>
            <div className={styles.brand}>
              {r.brand}
              <span className={styles.sub}>{r.sub}</span>
            </div>
            <div className={styles.use}>{r.use}</div>
            <div className={styles.warranty}>{r.warranty}</div>
            <div className={styles.surface}>{r.surface}</div>
            <div className={styles.arrow} aria-hidden="true">
              →
            </div>
          </div>
        ))}
      </div>
      <p className={styles.note}>{NOTE}</p>
    </section>
  );
}
