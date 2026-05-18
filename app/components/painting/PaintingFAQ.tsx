"use client";

import { useState } from "react";
import styles from "./PaintingFAQ.module.css";

const faqs = [
  {
    question: "How much does commercial painting cost on the Sunshine Coast?",
    answer:
      "Every building is different. A 4-storey strata repaint might run $40–80k; a 15-storey high-rise exterior could be $150–300k. The biggest variable isn't paint — it's access. Our rope access methods typically save 30–50% on total project cost compared to scaffolding-based quotes because you're not paying for weeks of metal rental, permits, and ground-level disruption.",
  },
  {
    question: "How long does a commercial painting project take?",
    answer:
      "A typical 6–10 storey exterior repaint takes 3–6 weeks depending on weather and scope. Interior common areas can often be completed in staged overnight shifts with zero impact to daily operations. We provide a detailed timeline during quoting — and we stick to it.",
  },
  {
    question: "Can you work around our tenants and guests?",
    answer:
      "This is what we do. We've painted 12-storey resorts during peak season without a single guest complaint. Our scheduling works around occupancy, access requirements, and operational hours. Residents and guests won't know we're there until they notice the building looks brand new.",
  },
  {
    question: "What paint systems do you use?",
    answer:
      "We're accredited applicators for Haymes and Dulux commercial coating systems. Every project gets a specification matched to the substrate, exposure, and expected service life — not just whatever's cheapest. Our standard exterior systems carry a 10-year product warranty.",
  },
  {
    question: "Do you handle body corporate approvals and paperwork?",
    answer:
      "Yes. We prepare committee-ready proposals with full scope, staging plan, product specifications, and warranty detail. We attend committee meetings if needed. Our proposals are designed to get approved on the first vote — because we know what strata managers and committees need to see.",
  },
];

export default function PaintingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.headline}>
            Questions
            <br />
            we hear
            <br />
            most.
          </h2>
        </div>

        <div className={styles.right}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
