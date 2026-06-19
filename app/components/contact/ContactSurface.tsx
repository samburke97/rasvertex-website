// app/components/contact/ContactSurface.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import styles from "./ContactSurface.module.css";

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

const STEP_LABELS: Record<Step, string> = {
  1: "Which services do you need?",
  2: "Tell us about the property.",
  3: "How do we reach you?",
};

export default function ContactSurface() {
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

  const handleSubmit = async () => {
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
        throw new Error("Failed to send");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
      alert("Something went wrong sending your request.");
    }
  };

  return (
    <div className={styles.surface}>
      {/* ── LEFT: Google badge, image, contact details — scrolls normally ── */}
      <aside className={styles.left} aria-label="Contact information">
        <div
          className={styles.ratingBadge}
          role="img"
          aria-label="Rated 5 stars on Google"
        >
          <svg
            className={styles.googleIcon}
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="var(--navy)"
            aria-hidden="true"
          >
            <path d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.71-2.44 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.06C3.24 21.3 7.26 24 12 24zM5.27 14.3c-.24-.71-.38-1.46-.38-2.3s.14-1.59.38-2.3V6.64H1.27A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.27 5.36l4-3.06zM12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.24 2.7 1.27 6.64l4 3.06C6.22 6.86 8.87 4.75 12 4.75z" />
          </svg>
          <div className={styles.stars} aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={styles.star}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="var(--navy)"
              >
                <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.6L12 17.6l-5.94 3.17 1.13-6.6-4.8-4.68 6.64-.97L12 2.5z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Project image */}
        <div className={styles.imageWrap} aria-hidden="true">
          <Image
            src="/images/projects/1.jpeg"
            alt="RAS-VERTEX project — Sunshine Coast"
            fill
            className={styles.image}
            sizes="(max-width: 860px) 100vw, 480px"
          />
        </div>

        {/* Contact info — single source, lives here only */}
        <dl className={styles.contactList}>
          <div className={styles.contactRow}>
            <dt className={styles.contactLabel}>CALL US</dt>
            <dd>
              <a href="tel:0753710201" className={styles.contactPhone}>
                (07) 5371 0201
              </a>
            </dd>
          </div>
          <div className={styles.contactRowGrid}>
            <div>
              <dt className={styles.contactLabel}>EMAIL</dt>
              <dd className={styles.contactValue}>
                <a
                  href="mailto:team@rasvertex.com.au"
                  className={styles.contactLink}
                >
                  team@rasvertex.com.au
                </a>
              </dd>
            </div>
            <div>
              <dt className={styles.contactLabel}>HOURS</dt>
              <dd className={styles.contactValue}>Mon–Fri, 7am–5pm</dd>
            </div>
          </div>
          <div className={styles.contactRow}>
            <dt className={styles.contactLabel}>VISIT / POST</dt>
            <dd className={styles.contactValue}>
              1–3 Kessling Avenue, Kunda Park QLD 4556
            </dd>
          </div>
        </dl>
      </aside>

      {/* ── RIGHT: sticky form panel ── */}
      <div className={styles.right}>
        <div className={styles.formWrap} aria-label="Quote request form">
          {submitted ? (
            <div className={styles.success} role="status" aria-live="polite">
              <h2>We&rsquo;ll be in touch.</h2>
              <p className="p-soft">
                Thanks for reaching out. We&rsquo;ll be on site within 48 hours.
                In the meantime, call{" "}
                <a href="tel:0753710201" className={styles.successLink}>
                  (07) 5371 0201
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();

                if (!canAdvance) return;

                if (step < 3) {
                  setStep((s) => (s + 1) as Step);
                  return;
                }

                handleSubmit();
              }}
              aria-label={`Quote request — step ${step} of 3`}
              noValidate
            >
              {/* ── The ONLY progress bar on the page ── */}
              <div className={styles.progress} aria-label={`Step ${step} of 3`}>
                <span className={styles.progressLabel}>
                  {step} <span className={styles.progressOf}>/ 3</span>
                </span>
                <div
                  className={styles.progressTrack}
                  role="progressbar"
                  aria-valuenow={step}
                  aria-valuemin={1}
                  aria-valuemax={3}
                >
                  {([1, 2, 3] as Step[]).map((s) => (
                    <div
                      key={s}
                      className={`${styles.progressSegment} ${
                        s <= step ? styles.progressSegmentActive : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* ── Step title — inside the panel itself ── */}
              <h3 className={styles.stepTitle}>{STEP_LABELS[step]}</h3>

              {step === 1 && (
                <fieldset
                  className={styles.fieldset}
                  aria-label="Services required"
                >
                  <legend className="sr-only">
                    Which services do you need?
                  </legend>
                  <div className={styles.pills}>
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        role="checkbox"
                        aria-checked={services.includes(s)}
                        onClick={() => toggle(s)}
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
                  <div className={styles.field}>
                    <label
                      htmlFor="contactAddress"
                      className={styles.fieldLabel}
                    >
                      Property address
                    </label>
                    <input
                      id="contactAddress"
                      type="text"
                      className={styles.input}
                      placeholder="123 Example St, Maroochydore QLD"
                      value={form.propertyAddress}
                      onChange={(e) => set("propertyAddress", e.target.value)}
                      autoComplete="street-address"
                    />
                  </div>

                  <fieldset
                    className={styles.fieldset}
                    aria-label="Property type"
                  >
                    <legend className={styles.fieldLabel}>Property type</legend>
                    <div className={styles.pills}>
                      {PROPERTY_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          role="radio"
                          aria-checked={form.propertyType === t}
                          onClick={() => set("propertyType", t)}
                          className={`${styles.pill} ${form.propertyType === t ? styles.pillActive : ""}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {step === 3 && (
                <div className={styles.fields}>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label
                        htmlFor="contactName"
                        className={styles.fieldLabel}
                      >
                        Your name
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        className={styles.input}
                        placeholder="Hylton Smith"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label
                        htmlFor="contactPhone"
                        className={styles.fieldLabel}
                      >
                        Phone
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        className={styles.input}
                        placeholder="0400 000 000"
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
                    <label
                      htmlFor="contactMessage"
                      className={styles.fieldLabel}
                    >
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

              <div className={styles.formFooter}>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    className={styles.back}
                    aria-label="Go back to previous step"
                  >
                    ← Back
                  </button>
                ) : (
                  <span />
                )}
                {step < 3 ? (
                  <Button
                    as="button"
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={!canAdvance}
                    aria-label={`Continue to step ${step + 1}`}
                  >
                    Continue →
                  </Button>
                ) : (
                  <Button
                    as="button"
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={!canAdvance}
                    aria-label="Submit quote request"
                  >
                    Send request →
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
