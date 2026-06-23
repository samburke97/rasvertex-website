"use client";

import { useState } from "react";
import styles from "./CareersForm.module.css";

type Step = 1 | 2 | 3;

const ROLES = [
  "Rope Access Technician (L1)",
  "Rope Access Technician (L2–L3)",
  "Painter / Coatings Applicator",
  "Site Supervisor",
  "Project Manager",
  "Other",
];

export default function CareersForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    role: "",
    irata: "",
    qbcc: "",
    liability: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canAdvance =
    step === 1
      ? form.role !== ""
      : step === 2
        ? form.irata !== "" && form.qbcc !== "" && form.liability !== ""
        : form.name !== "" && form.phone !== "" && form.email !== "";

  if (submitted) {
    return (
      <div className={styles.success}>
        <h2>Application received.</h2>
        <p>
          Thanks for reaching out. We'll review your application and be in touch
          if there's a suitable opportunity.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.steps}>
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`${styles.step} ${step === n ? styles.stepActive : ""}`}
          >
            {n}
          </span>
        ))}
      </div>

      {step === 1 && (
        <fieldset className={styles.fieldset}>
          <legend>What role are you applying for?</legend>

          <div className={styles.pills}>
            {ROLES.map((role) => (
              <button
                key={role}
                type="button"
                className={`${styles.pill} ${
                  form.role === role ? styles.pillActive : ""
                }`}
                onClick={() => set("role", role)}
              >
                {role}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className={styles.fieldset}>
          <legend>Qualifications</legend>

          {[
            {
              key: "irata",
              label: "Do you hold an IRATA certification?",
            },
            {
              key: "qbcc",
              label: "Do you hold a QBCC licence?",
            },
            {
              key: "liability",
              label: "Do you hold public liability insurance?",
            },
          ].map((q) => (
            <div key={q.key} className={styles.question}>
              <p>{q.label}</p>

              <div className={styles.pills}>
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`${styles.pill} ${
                      form[q.key as keyof typeof form] === option
                        ? styles.pillActive
                        : ""
                    }`}
                    onClick={() => set(q.key, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className={styles.fieldset}>
          <legend>Tell us about yourself</legend>

          <input
            className={styles.input}
            placeholder="Full name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />

          <input
            className={styles.input}
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />

          <input
            className={styles.input}
            placeholder="Email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />

          <textarea
            className={styles.textarea}
            rows={5}
            placeholder="Experience, qualifications, anything else..."
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </fieldset>
      )}

      <div className={styles.footer}>
        {step > 1 ? (
          <button type="button" onClick={() => setStep((s) => (s - 1) as Step)}>
            Back
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button
            type="button"
            disabled={!canAdvance}
            onClick={() => setStep((s) => (s + 1) as Step)}
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            disabled={!canAdvance}
            onClick={() => setSubmitted(true)}
          >
            Submit application →
          </button>
        )}
      </div>
    </form>
  );
}
