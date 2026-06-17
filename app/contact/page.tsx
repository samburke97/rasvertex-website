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
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          services,
          ...form,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed request");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong sending your request.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h2>We’ll be in touch shortly.</h2>
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
      {/* STEP INDICATOR */}
      <div className={styles.steps}>
        {([1, 2, 3] as Step[]).map((n) => (
          <span
            key={n}
            className={`${styles.step} ${
              step === n ? styles.stepActive : ""
            } ${step > n ? styles.stepDone : ""}`}
          >
            {n}
          </span>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <fieldset className={styles.fieldset}>
          <legend>Which services do you need?</legend>

          <div className={styles.pills}>
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className={`${styles.pill} ${
                  services.includes(s) ? styles.pillActive : ""
                }`}
                onClick={() => toggle(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <fieldset className={styles.fieldset}>
          <legend>About the property</legend>

          <div className={styles.pills}>
            {PROPERTY_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.pill} ${
                  form.propertyType === t ? styles.pillActive : ""
                }`}
                onClick={() => set("propertyType", t)}
              >
                {t}
              </button>
            ))}
          </div>

          <input
            className={styles.input}
            placeholder="Property address"
            value={form.propertyAddress}
            onChange={(e) => set("propertyAddress", e.target.value)}
          />
        </fieldset>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <fieldset className={styles.fieldset}>
          <legend>Your details</legend>

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
            placeholder="Anything else..."
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </fieldset>
      )}

      {/* FOOTER */}
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
            disabled={!canAdvance || loading}
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send request →"}
          </button>
        )}
      </div>
    </form>
  );
}
