"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead";
import styles from "./Specialisations.module.css";

const LEDE =
  "Painting on a coastal high-rise has almost nothing in common with painting a heritage facade. We run four specialised teams under one project manager, so the right people show up for the right surface.";

const SPECS = [
  {
    id: "interior",
    n: "01",
    label: "Interior",
    h: "Interior Painting.",
    body: "Low-VOC systems for occupied buildings — strata corridors, hotel suites, schools and offices. Zone-staged scheduling with dust containment and same-day re-occupancy on most work.",
    photo: "/assets/residential.png",
    points: [
      { k: "01", v: "Low-VOC + zero-odour coating systems" },
      { k: "02", v: "Zone-staged for occupied buildings" },
      { k: "03", v: "After-hours scheduling for hotels & retail" },
      { k: "04", v: "Touch-up kit + colour record at handover" },
    ],
    stats: [
      { v: "24h", l: "Re-occupy time" },
      { v: "<50g/L", l: "VOC content" },
    ],
  },
  {
    id: "exterior",
    n: "02",
    label: "Exterior",
    h: "Exterior Coatings.",
    body: "Coastal exposure is brutal — salt, UV and humidity. We spec elastomeric and weathershield systems with mandatory chloride rinse and a salt-bonded primer on every project within 5km of the coast.",
    photo: "/assets/project-2.jpeg",
    points: [
      { k: "01", v: "Chloride-wash + salt-bonded primer" },
      { k: "02", v: "Dulux Weathershield · Haymes Ultratrace" },
      { k: "03", v: "Wet-film thickness logged per coat" },
      { k: "04", v: "Photographic record at every milestone" },
    ],
    stats: [
      { v: "5-yr", l: "Workmanship warranty" },
      { v: "15-yr", l: "Manufacturer warranty" },
    ],
  },
  {
    id: "heritage",
    n: "03",
    label: "Heritage",
    h: "Heritage Restoration.",
    body: "Lime-based and breathable systems for heritage masonry, render and timber. We work with QHR and council heritage officers from sample stage through to documentation lodgement.",
    photo: "/assets/body.png",
    points: [
      { k: "01", v: "Lime-based, breathable systems" },
      { k: "02", v: "Heritage colour matching + sample blocks" },
      { k: "03", v: "QHR & council liaison from sample stage" },
      { k: "04", v: "Documentation lodged at handover" },
    ],
    stats: [
      { v: "12+", l: "Heritage projects" },
      { v: "100%", l: "Lodgement record" },
    ],
  },
  {
    id: "roof",
    n: "04",
    label: "Roof",
    h: "Roof Coatings.",
    body: "Colorbond, tile and membrane re-coats. Heat-reflective coatings reduce internal building temps by up to 8°C — a measurable energy saving on commercial assets.",
    photo: "/assets/higher.png",
    points: [
      { k: "01", v: "Colorbond · tile · membrane re-coat" },
      { k: "02", v: "Heat-reflective coatings (-8°C surface)" },
      { k: "03", v: "High-pressure prep + biocide treatment" },
      { k: "04", v: "Walk-on warranty available" },
    ],
    stats: [
      { v: "-8°C", l: "Surface temp drop" },
      { v: "10-yr", l: "Coating warranty" },
    ],
  },
];

export default function Specialisations() {
  const [activeId, setActiveId] = useState(SPECS[0].id);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = panelsRef.current;
    if (!container) return;
    const panels = Array.from(
      container.querySelectorAll<HTMLElement>("[data-spec-id]"),
    );
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActiveId((e.target as HTMLElement).dataset.specId ?? "");
        }),
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 },
    );
    panels.forEach((p) => obs.observe(p));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document
      .getElementById(`spec-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className={styles.section}>
      <SectionHead
        base="OUR DISCIPLINES."
        overlay="OUR DISCIPLINES."
        sr="Our disciplines."
        muted
      >
        <span className={styles.eyebrow}>What we do</span>
        <p>{LEDE}</p>
      </SectionHead>

      <div className={styles.layout}>
        <aside className={styles.rail}>
          <p className={styles.railEyebrow}>
            Specialisations · 0{SPECS.length}
          </p>
          {SPECS.map((sp) => (
            <button
              key={sp.id}
              className={`${styles.railItem} ${activeId === sp.id ? styles.active : ""}`}
              onClick={() => scrollTo(sp.id)}
            >
              <span className={styles.railNum}>{sp.n}</span>
              <span className={styles.railLabel}>{sp.label}</span>
            </button>
          ))}
        </aside>

        <div className={styles.panels} ref={panelsRef}>
          {SPECS.map((sp) => (
            <article
              key={sp.id}
              id={`spec-${sp.id}`}
              data-spec-id={sp.id}
              className={styles.panel}
            >
              <div className={styles.panelTop}>
                <div className={styles.panelNum} aria-hidden="true">
                  {sp.n}
                </div>
                <div>
                  <h3 className={styles.panelH}>{sp.h}</h3>
                  <p className={styles.panelBody}>{sp.body}</p>
                </div>
              </div>
              {sp.photo ? (
                <div className={styles.panelPhoto}>
                  <Image
                    src={sp.photo}
                    alt={sp.label}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <div className={styles.panelPhoto} />
              )}
              <div className={styles.panelBot}>
                <ul className={styles.points}>
                  {sp.points.map((p) => (
                    <li key={p.k}>
                      <span className={styles.pointKey}>{p.k}</span>
                      <span>{p.v}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.stats}>
                  {sp.stats.map((st) => (
                    <div className={styles.stat} key={st.l}>
                      <div className={styles.statV}>{st.v}</div>
                      <div className={styles.statL}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
