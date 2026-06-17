// app/components/contact/ContactForm.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
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
    setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canAdvance =
    step === 1
      ? services.length > 0
      : step === 2
        ? form.propertyType !== "" && form.propertyAddress !== ""
        : form.name !== "" && form.email !== "" && form.phone !== "";

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h2>We&rsquo;ll be in touch shortly.</h2>
        <p>
          Expect a call within one business day. In the meantime you can{" "}
          <Link href="/painting" className={styles.successLink}>
            browse our services
          </Link>{" "}
          or{" "}
          <Link href="/work" className={styles.successLink}>
            see recent projects
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      aria-label={`Quote request — step ${step} of 3`}
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      {/* ── Step indicator ── */}
      <div className={styles.steps} aria-label="Form progress">
        {([1, 2, 3] as Step[]).map((n) => (
          <span
            key={n}
            className={`${styles.step} ${step === n ? styles.stepActive : ""} ${step > n ? styles.stepDone : ""}`}
            aria-current={step === n ? "step" : undefined}
          >
            {n}
          </span>
        ))}
        <span className={styles.stepLabel}>
          {step === 1
            ? "Which services?"
            : step === 2
              ? "About the property"
              : "Your details"}
        </span>
      </div>

      {/* ── Step 1: Services ── */}
      {step === 1 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Which services do you need?</legend>
          <div
            className={styles.pills}
            role="group"
            aria-label="Select services"
          >
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className={`${styles.pill} ${services.includes(s) ? styles.pillActive : ""}`}
                onClick={() => toggle(s)}
                aria-pressed={services.includes(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {/* ── Step 2: Property ── */}
      {step === 2 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>About the property</legend>
          <div className={styles.fields}>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Property type</span>
              <div
                className={styles.pills}
                role="group"
                aria-label="Select property type"
              >
                {PROPERTY_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`${styles.pill} ${form.propertyType === t ? styles.pillActive : ""}`}
                    onClick={() => set("propertyType", t)}
                    aria-pressed={form.propertyType === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
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
        </fieldset>
      )}

      {/* ── Step 3: Contact details ── */}
      {step === 3 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>How do we reach you?</legend>
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
        </fieldset>
      )}

      {/* ── Footer ── */}
      <div className={styles.footer}>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className={styles.back}
            aria-label="Go back"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button
            type="button"
            className={styles.submit}
            disabled={!canAdvance}
            onClick={() => setStep((s) => (s + 1) as Step)}
            aria-label="Continue to next step"
          >
            Continue →
          </button>
        ) : (
          <button
            type="submit"
            className={styles.submit}
            disabled={!canAdvance}
            onClick={() => setSubmitted(true)}
            aria-label="Send quote request"
          >
            Send request →
          </button>
        )}
      </div>
    </form>
  );
}
