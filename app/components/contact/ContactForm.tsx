// app/components/contact/ContactForm.tsx

"use client";

import { useState } from "react";
import Button from "../ui/Button";
import styles from "./ContactForm.module.css";

type Step = 1 | 2 | 3;

const SERVICES = [
  "Painting",
  "Building Cleaning",
  "Window Cleaning",
  "Waterproofing",
  "Maintenance",
  "Height Safety",
];

const PROPERTY_TYPES = [
  "Strata / Body Corporate",
  "Commercial",
  "Industrial",
  "Retail",
  "Government",
  "Residential",
];

const STEP_TITLES: Record<Step, string> = {
  1: "Which services do you need?",
  2: "Tell us about the property.",
  3: "How do we reach you?",
};

export default function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [services, setServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    propertyType: "",
    propertyAddress: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canAdvance =
    step === 1
      ? services.length > 0
      : step === 2
        ? form.propertyType !== "" && form.propertyAddress !== ""
        : form.name !== "" && form.email !== "" && form.phone !== "";

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <div className={styles.successInner}>
          <h2 className={styles.successHeading}>We&rsquo;ll be in touch.</h2>
          <p className={styles.successBody}>
            Hylton will reach out within one business day. If it&rsquo;s urgent,
            call us on{" "}
            <a href="tel:0754430000" className={styles.successLink}>
              07 5443 0000
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      {/* ── Progress ── */}
      <div className={styles.progress} aria-label={`Step ${step} of 3`}>
        <span className={styles.stepLabel}>
          {step} <span className={styles.stepOf}>/ 3</span>
        </span>
        <div
          className={styles.track}
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={3}
        >
          {([1, 2, 3] as Step[]).map((s) => (
            <div
              key={s}
              className={`${styles.segment} ${s <= step ? styles.segmentActive : ""}`}
            />
          ))}
        </div>
      </div>

      {/* ── Step body ── */}
      <div className={styles.body}>
        <h2 className={styles.stepTitle}>{STEP_TITLES[step]}</h2>

        {step === 1 && (
          <fieldset className={styles.fieldset} aria-label="Select services">
            <legend className="sr-only">Select the services you need</legend>
            <div className={styles.pills}>
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggle(s)}
                  aria-pressed={services.includes(s)}
                  className={`${styles.pill} ${services.includes(s) ? styles.pillActive : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <div className={styles.fields}>
            <fieldset className={styles.fieldset} aria-label="Property type">
              <legend className={styles.fieldLabel}>Property type</legend>
              <div className={styles.pills}>
                {PROPERTY_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("propertyType", t)}
                    aria-pressed={form.propertyType === t}
                    className={`${styles.pill} ${form.propertyType === t ? styles.pillActive : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className={styles.field}>
              <label htmlFor="propertyAddress" className={styles.fieldLabel}>
                Property address
              </label>
              <input
                id="propertyAddress"
                type="text"
                className={styles.input}
                placeholder="123 Esplanade, Mooloolaba QLD 4557"
                value={form.propertyAddress}
                onChange={(e) => set("propertyAddress", e.target.value)}
                autoComplete="street-address"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.fields}>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="contactName" className={styles.fieldLabel}>
                  Full name
                </label>
                <input
                  id="contactName"
                  type="text"
                  className={styles.input}
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contactPhone" className={styles.fieldLabel}>
                  Phone
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  className={styles.input}
                  placeholder="04xx xxx xxx"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contactEmail" className={styles.fieldLabel}>
                Email
              </label>
              <input
                id="contactEmail"
                type="email"
                className={styles.input}
                placeholder="jane@company.com.au"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contactMessage" className={styles.fieldLabel}>
                Anything else{" "}
                <span className={styles.optional}>(optional)</span>
              </label>
              <textarea
                id="contactMessage"
                className={styles.textarea}
                rows={3}
                placeholder="Building height, access notes, timeline…"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className={styles.back}
            aria-label="Go back to previous step"
          >
            ← Back
          </button>
        )}
        <div className={styles.footerRight}>
          {step < 3 ? (
            <Button
              as="button"
              variant="primary"
              size="md"
              disabled={!canAdvance}
              onClick={() => setStep((s) => (s + 1) as Step)}
              aria-label={`Continue to step ${step + 1}`}
            >
              Continue →
            </Button>
          ) : (
            <Button
              as="button"
              variant="primary"
              size="md"
              disabled={!canAdvance}
              onClick={handleSubmit}
              aria-label="Submit enquiry"
            >
              Send request →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
