"use client";

import { useState } from "react";
import Button from "../ui/Button";
import styles from "./ServiceAreas.module.css";

const REGIONS = [
  {
    label: "South Coast",
    suburbs: [
      "Caloundra", "Caloundra West", "Kings Beach", "Moffat Beach",
      "Dicky Beach", "Golden Beach", "Pelican Waters", "Kawana Waters",
      "Bokarina", "Wurtulla", "Warana", "Birtinya",
    ],
  },
  {
    label: "Central Coast",
    suburbs: [
      "Sippy Downs", "Mountain Creek", "Mooloolaba", "Cotton Tree",
      "Maroochydore", "Twin Waters", "Mudjimba", "Marcoola",
      "Bli Bli", "Buderim", "Kunda Park",
    ],
  },
  {
    label: "North Coast",
    suburbs: [
      "Mount Coolum", "Yaroomba", "Coolum Beach", "Peregian Springs",
      "Sunrise Beach", "Sunshine Beach", "Noosa", "Noosa Heads",
      "Noosaville", "Tewantin", "Cooroibah",
    ],
  },
  {
    label: "Hinterland",
    suburbs: [
      "Mooloolah Valley", "Palmwoods", "Nambour", "Yandina",
      "Maleny", "Mount Mellum", "Pomona", "Cootharaba",
      "Kin Kin", "Cooroy", "Cooroy Mountain", "Gympie",
    ],
  },
];

const TOTAL = REGIONS.reduce((n, r) => n + r.suburbs.length, 0);

export default function ServiceAreas() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="service-areas-heading">

      <div className={styles.header}>
        <h2 id="service-areas-heading">
          Sunshine Coast property maintenance,
          <br />
          from Caloundra to Noosa.
        </h2>
        <p className="p-soft">
          Our team services the full length of the Sunshine Coast — painting,
          cleaning, waterproofing, rope access and height safety for body
          corporates, strata, commercial properties and homes.
        </p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Service regions">
        {REGIONS.map((region, i) => (
          <button
            key={region.label}
            role="tab"
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
          >
            {region.label}
            <span className={styles.count}>{region.suburbs.length}</span>
          </button>
        ))}
      </div>

      {REGIONS.map((region, i) => (
        <div
          key={region.label}
          id={`panel-${i}`}
          role="tabpanel"
          aria-label={region.label}
          className={`${styles.panel} ${active === i ? styles.panelActive : ""}`}
        >
          <ul className={styles.suburbs}>
            {region.suburbs.map((suburb) => (
              <li key={suburb} className={styles.suburb}>{suburb}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.footer}>
        <span className={styles.meta}>{TOTAL} Suburbs Serviced · One Local Crew</span>
        <Button as="link" href="/contact" variant="primary">
          See your suburb? Let&rsquo;s get to work
        </Button>
      </div>

    </section>
  );
}
