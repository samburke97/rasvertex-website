"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Careers.module.css";

const ROLES = [
  "Rope Access Technician (IRATA L1)",
  "Rope Access Technician (IRATA L2–L3)",
  "Painter / Coatings Applicator",
  "Site Supervisor",
  "Project Manager",
  "Other",
];

const HOW = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Word of mouth",
  "Google",
  "Job board",
  "Vehicle signage",
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    message: "",
    howHeard: "",
    irata: "",
    qbcc: "",
    liability: "",
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (key: string, value: string | File | null) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  return (
    <main className={styles.page}>
      {/* ── Left — sticky ── */}
      <div className={styles.left}>
        <div className={styles.leftTop}>
          <span className={styles.eyebrow}>Careers</span>
          <h1 className={styles.headline}>
            Good people.
            <br />
            Hard work.
            <br />
            High places.
          </h1>
          <p className={styles.subline}>
            We're a rope access-first business — most of what we do is off the
            ropes. We invest constantly in our people through IRATA training,
            safety workshops and career development. If you take your trade
            seriously and want to be part of something long-term, we'd like to
            hear from you.
          </p>
        </div>

        {/* Values */}
        <div className={styles.values}>
          {[
            {
              n: "01",
              title: "IRATA first",
              body: "Certified rope access is at the core of everything we do. We fund and support IRATA L1–L3 progression for the right people.",
            },
            {
              n: "02",
              title: "Long term",
              body: "We don't hire casually. Some of our crew have been with us for over a decade. We want people who want to build something.",
            },
            {
              n: "03",
              title: "Constant training",
              body: "Regular safety and skills training, one-on-one workshops, and team events. We invest in the people who invest in us.",
            },
          ].map((v) => (
            <div key={v.n} className={styles.value}>
              <span className={styles.valueN}>{v.n}</span>
              <div>
                <p className={styles.valueTitle}>{v.title}</p>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right — form ── */}
      <div className={styles.right}>
        {submitted ? (
          <div className={styles.successBlock}>
            <p className={styles.successHeading}>We've got your application.</p>
            <p className={styles.successBody}>
              We'll review it and be in touch if there's a fit. Thanks for
              reaching out.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formSection}>
              <p className={styles.sectionLabel}>
                <span className={styles.sectionNum}>01</span>
                Your details
              </p>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Full name *</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Phone *</label>
                  <input
                    type="tel"
                    required
                    className={styles.input}
                    placeholder="04xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Email *</label>
                  <input
                    type="email"
                    required
                    className={styles.input}
                    placeholder="alex@email.com"
                    value={formData.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <p className={styles.sectionLabel}>
                <span className={styles.sectionNum}>02</span>
                Role you're applying for
              </p>
              <div className={styles.pills}>
                {ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => set("role", r)}
                    className={`${styles.pill} ${formData.role === r ? styles.pillActive : ""}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formSection}>
              <p className={styles.sectionLabel}>
                <span className={styles.sectionNum}>03</span>
                Credentials
              </p>
              {[
                { key: "irata", label: "Do you hold an IRATA certification?" },
                { key: "qbcc", label: "Do you hold a QBCC licence?" },
                {
                  key: "liability",
                  label: "Do you hold public liability insurance?",
                },
              ].map((q) => (
                <div key={q.key} className={styles.yesNo}>
                  <span className={styles.yesNoLabel}>{q.label}</span>
                  <div className={styles.yesNoBtns}>
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => set(q.key, opt)}
                        className={`${styles.pill} ${(formData as Record<string, unknown>)[q.key] === opt ? styles.pillActive : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.formSection}>
              <p className={styles.sectionLabel}>
                <span className={styles.sectionNum}>04</span>
                Upload your resume
              </p>
              <label className={styles.fileUpload}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => set("resume", e.target.files?.[0] ?? null)}
                  className={styles.fileInput}
                />
                <span className={styles.fileLabel}>
                  {formData.resume
                    ? formData.resume.name
                    : "PDF or Word · max 2MB"}
                </span>
                <span className={styles.fileCta}>Browse →</span>
              </label>
            </div>

            <div className={styles.formSection}>
              <p className={styles.sectionLabel}>
                <span className={styles.sectionNum}>05</span>
                Anything else
              </p>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  Tell us about yourself{" "}
                  <span className={styles.optional}>(optional)</span>
                </label>
                <textarea
                  className={styles.textarea}
                  rows={4}
                  placeholder="Experience, certifications, what you're looking for…"
                  value={formData.message}
                  onChange={(e) => set("message", e.target.value)}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  How did you hear about us?{" "}
                  <span className={styles.optional}>(optional)</span>
                </label>
                <div className={styles.pills}>
                  {HOW.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => set("howHeard", h)}
                      className={`${styles.pill} ${formData.howHeard === h ? styles.pillActive : ""}`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.formFooter}>
              <button
                type="submit"
                disabled={
                  !formData.name ||
                  !formData.phone ||
                  !formData.email ||
                  !formData.role
                }
                className={styles.submitBtn}
              >
                Submit application →
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
