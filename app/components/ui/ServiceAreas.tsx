import styles from "./ServiceAreas.module.css";

const REGIONS = [
  {
    n: "01",
    h: "South Coast",
    tag: "Caloundra · Kawana",
    suburbs: [
      "Caloundra",
      "Caloundra West",
      "Pelican Waters",
      "Golden Beach",
      "Dicky Beach",
      "Moffat Beach",
      "Kings Beach",
      "Kawana Waters",
      "Warana",
      "Wurtulla",
      "Bokarina",
      "Birtinya",
    ],
  },
  {
    n: "02",
    h: "Mid Coast",
    tag: "Mooloolaba · Maroochydore",
    suburbs: [
      "Mooloolaba",
      "Maroochydore",
      "Cotton Tree",
      "Mountain Creek",
      "Buderim",
      "Sippy Downs",
      "Kunda Park",
      "Mudjimba",
      "Bli Bli",
    ],
  },
  {
    n: "03",
    h: "North Coast",
    tag: "Coolum · Noosa",
    suburbs: [
      "Twin Waters",
      "Marcoola",
      "Mount Coolum",
      "Coolum Beach",
      "Yaroomba",
      "Peregian Springs",
      "Sunrise Beach",
      "Sunshine Beach",
      "Noosa Heads",
      "Noosaville",
      "Tewantin",
      "Cooroibah",
    ],
  },
  {
    n: "04",
    h: "Hinterland",
    tag: "Nambour · Gympie",
    suburbs: [
      "Mooloolah Valley",
      "Palmwoods",
      "Nambour",
      "Yandina",
      "Maleny",
      "Mount Mellum",
      "Pomona",
      "Cooroy",
      "Cooroy Mountain",
      "Cootharaba",
      "Kin Kin",
      "Gympie",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {REGIONS.map(({ n, h, tag, suburbs }) => (
          <div className={styles.region} key={n}>
            <div className={styles.regionHead}>
              <span className={styles.regionN}>{n}</span>
              <h3 className={styles.regionH}>{h}</h3>
              <span className={styles.regionTag}>{tag}</span>
            </div>
            <ul className={styles.list}>
              {suburbs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        Not on the list? We service the whole Sunshine Coast region by
        arrangement — give us a call.
      </p>
    </section>
  );
}
