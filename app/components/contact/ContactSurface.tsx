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

const STEP_TITLES: Record<Step, string> = {
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

  return (
    <div className={styles.surface}>
      {/* ── COL 1: info ── */}
      <aside className={styles.info} aria-label="Contact information">
        <div className={styles.infoTop}>
          <h2 className={styles.headline}>
            Let&rsquo;s talk
            <br />
            about your
            <br />
            project.
          </h2>

          <div
            className={styles.rating}
            aria-label="4.9 stars on Google Reviews"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.09 22.56 15.27 22.56 12.25z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className={styles.stars} aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#FBBC05"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className={styles.ratingText}>4.9 · Google</span>
          </div>
        </div>

        <dl className={styles.contactList}>
          {[
            { label: "Call", value: "07 5443 0000", href: "tel:0754430000" },
            {
              label: "Email",
              value: "hello@rasvertex.com.au",
              href: "mailto:hello@rasvertex.com.au",
            },
            { label: "Visit", value: "Maroochydore QLD 4558", href: null },
          ].map((row) => (
            <div key={row.label} className={styles.contactRow}>
              <dt className={styles.contactLabel}>{row.label}</dt>
              <dd>
                {row.href ? (
                  <a href={row.href} className={styles.contactValue}>
                    {row.value}
                  </a>
                ) : (
                  <span className={styles.contactValue}>{row.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className={styles.person}>
          <div className={styles.avatarWrap}>
            <Image
              src="/images/people/caro.jpg"
              alt="Hylton Denton"
              fill
              className={styles.avatar}
            />
          </div>
          <div>
            <p className={styles.personName}>Hylton Denton</p>
            <p className={styles.personRole}>Dedicated Project Manager</p>
          </div>
        </div>
      </aside>

      {/* ── COL 2: form ── */}
      <div className={styles.formCol}>
        {/* Header row: step dots + thumbnail */}
        <div className={styles.formTopRow}>
          <div
            className={styles.stepDots}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={3}
            aria-label={`Step ${step} of 3`}
          >
            {([1, 2, 3] as Step[]).map((s) => (
              <div
                key={s}
                className={`${styles.dot} ${s === step ? styles.dotActive : s < step ? styles.dotDone : ""}`}
              />
            ))}
          </div>

          <div className={styles.thumbWrap} aria-hidden="true">
            <Image
              src="/images/projects/1.jpeg"
              alt=""
              fill
              className={styles.thumb}
              sizes="140px"
            />
          </div>
        </div>

        {/* Form body */}
        {submitted ? (
          <div className={styles.success} role="status" aria-live="polite">
            <h3 className={styles.stepTitle}>We&rsquo;ll be in touch.</h3>
            <p className="p-soft">
              Hylton will reach out within one business day. Urgent?{" "}
              <a href="tel:0754430000" className={styles.successLink}>
                Call 07 5443 0000
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <div className={styles.formBody}>
              <h3 className={styles.stepTitle}>{STEP_TITLES[step]}</h3>

              {step === 1 && (
                <fieldset
                  className={styles.fieldset}
                  aria-label="Select services"
                >
                  <legend className="sr-only">
                    Select the services you need
                  </legend>
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
                  <fieldset className={styles.fieldset}>
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
                    <label
                      htmlFor="propertyAddress"
                      className={styles.fieldLabel}
                    >
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
                      <label
                        htmlFor="contactName"
                        className={styles.fieldLabel}
                      >
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
            </div>

            <div className={styles.formFooter}>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className={styles.back}
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <Button
                  as="button"
                  variant="primary"
                  size="md"
                  disabled={!canAdvance}
                  onClick={() => setStep((s) => (s + 1) as Step)}
                >
                  Continue →
                </Button>
              ) : (
                <Button
                  as="button"
                  variant="primary"
                  size="md"
                  disabled={!canAdvance}
                  onClick={() => setSubmitted(true)}
                >
                  Send request →
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
