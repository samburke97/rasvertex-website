"use client";

// app/careers/CareersForm.tsx

import { useRef, useState } from "react";
import Button from "../components/ui/Button";
import styles from "./CareersForm.module.css";

type Step = 1 | 2 | 3;

const SKILLSETS = [
  "Painting",
  "Exterior cleaning",
  "Waterproofing",
  "Height safety",
  "Repairs and maintenance",
];

const EXPERIENCE_OPTIONS = ["1 year", "2 years", "3–5 years", "5+ years"];

const IRATA_LEVELS = ["Level 1", "Level 2", "Level 3"];

const STEP_LABELS: Record<Step, string> = {
  1: "What's your skillset?",
  2: "What are your qualifications?",
  3: "How do we reach you?",
};

export default function CareersForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [skillsets, setSkillsets] = useState<string[]>([]);
  const [form, setForm] = useState({
    experience: "",
    irata: "",
    irataLevel: "",
    rightToWork: "",
    visaType: "",
    driversLicence: "",
    whiteCard: "",
    otherQual: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleSkillset = (s: string) =>
    setSkillsets((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const canAdvance =
    step === 1
      ? skillsets.length > 0 && form.experience !== ""
      : step === 2
        ? form.irata !== "" &&
          (form.irata !== "Yes" || form.irataLevel !== "") &&
          form.rightToWork !== "" &&
          form.driversLicence !== "" &&
          form.whiteCard !== ""
        : form.name.trim() !== "" &&
          form.phone.trim() !== "" &&
          form.email.trim() !== "" &&
          resume !== null;

  const handleResume = (file: File | null) => {
    setResumeError("");
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setResumeError("Resume must be under 10 MB.");
      return;
    }
    setResume(file);
  };

  const handleSubmit = async () => {
    if (form.website.trim() !== "") {
      setSubmitted(true);
      return;
    }

    try {
      const body = new FormData();
      skillsets.forEach((s) => body.append("skillsets", s));
      Object.entries(form).forEach(([k, v]) => body.append(k, v as string));
      if (resume) body.append("resume", resume);

      const res = await fetch("/api/careers", { method: "POST", body });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Failed to send");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Careers form error:", err);
      alert(
        "Something went wrong submitting your application. Please try again.",
      );
    }
  };

  return (
    <div className={styles.formWrap} aria-label="Job application form">
      {submitted ? (
        <div className={styles.success} role="status" aria-live="polite">
          <h2>Application received.</h2>
          <p className="p-soft">
            Thanks for reaching out. We&rsquo;ll review your application and be
            in touch if there&rsquo;s a suitable opportunity. In the meantime,
            feel free to call{" "}
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
          aria-label={`Job application — step ${step} of 3`}
          noValidate
        >
          {/* Honeypot */}
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => set("website", e.target.value)}
            />
          </div>

          {/* Progress */}
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
                  className={`${styles.progressSegment} ${s <= step ? styles.progressSegmentActive : ""}`}
                />
              ))}
            </div>
          </div>

          <h3>{STEP_LABELS[step]}</h3>

          {step === 1 && (
            <p className={styles.stepHint}>(Select all that apply)</p>
          )}

          <div className={styles.stepBody}>
            {/* Step 1 — skillset + experience */}
            {step === 1 && (
              <div className={styles.fields}>
                <fieldset
                  className={styles.fieldset}
                  aria-label="Skillset selection"
                >
                  <legend className="sr-only">What&apos;s your skillset?</legend>
                  <div className={styles.pills}>
                    {SKILLSETS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        role="checkbox"
                        aria-checked={skillsets.includes(s)}
                        onClick={() => toggleSkillset(s)}
                        className={`${styles.pill} ${skillsets.includes(s) ? styles.pillActive : ""}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className={styles.field}>
                  <span className={styles.fieldLabel}>
                    How many years of experience do you have?
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </span>
                  <div className={styles.pills}>
                    {EXPERIENCE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={form.experience === opt}
                        onClick={() => set("experience", opt)}
                        className={`${styles.pill} ${form.experience === opt ? styles.pillActive : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — qualifications */}
            {step === 2 && (
              <div className={styles.fields}>
                {/* IRATA yes/no */}
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>
                    Do you hold an IRATA cert?
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </span>
                  <div className={styles.pills}>
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={form.irata === opt}
                        onClick={() => {
                          set("irata", opt);
                          if (opt === "No") set("irataLevel", "");
                        }}
                        className={`${styles.pill} ${form.irata === opt ? styles.pillActive : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* IRATA level — only when Yes */}
                {form.irata === "Yes" && (
                  <div className={styles.field}>
                    <span className={styles.fieldLabel}>IRATA level</span>
                    <div className={styles.pills}>
                      {IRATA_LEVELS.map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          role="radio"
                          aria-checked={form.irataLevel === lvl}
                          onClick={() => set("irataLevel", lvl)}
                          className={`${styles.pill} ${form.irataLevel === lvl ? styles.pillActive : ""}`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Right to work */}
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>
                    Right to work in Australia
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </span>
                  <div className={styles.pills}>
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={form.rightToWork === opt}
                        onClick={() => set("rightToWork", opt)}
                        className={`${styles.pill} ${form.rightToWork === opt ? styles.pillActive : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Driver's licence */}
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>
                    Current driver&apos;s licence
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </span>
                  <div className={styles.pills}>
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={form.driversLicence === opt}
                        onClick={() => set("driversLicence", opt)}
                        className={`${styles.pill} ${form.driversLicence === opt ? styles.pillActive : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* White Card */}
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>
                    Do you have a White Card?
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </span>
                  <div className={styles.pills}>
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={form.whiteCard === opt}
                        onClick={() => set("whiteCard", opt)}
                        className={`${styles.pill} ${form.whiteCard === opt ? styles.pillActive : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Other qualifications */}
                <div className={styles.field}>
                  <label htmlFor="otherQual" className={styles.fieldLabel}>
                    Any other qualifications to note?
                  </label>
                  <input
                    id="otherQual"
                    type="text"
                    className={styles.input}
                    value={form.otherQual}
                    onChange={(e) => set("otherQual", e.target.value)}
                    maxLength={500}
                  />
                </div>
              </div>
            )}

            {/* Step 3 — personal details */}
            {step === 3 && (
              <div className={styles.fields}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="careersName" className={styles.fieldLabel}>
                      Full name
                      <span className={styles.required} aria-hidden="true">
                        {" "}
                        *
                      </span>
                    </label>
                    <input
                      id="careersName"
                      type="text"
                      required
                      className={styles.input}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoComplete="name"
                      maxLength={100}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="careersPhone" className={styles.fieldLabel}>
                      Phone
                      <span className={styles.required} aria-hidden="true">
                        {" "}
                        *
                      </span>
                    </label>
                    <input
                      id="careersPhone"
                      type="tel"
                      required
                      className={styles.input}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      autoComplete="tel"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="careersEmail" className={styles.fieldLabel}>
                    Email
                    <span className={styles.required} aria-hidden="true">
                      {" "}
                      *
                    </span>
                  </label>
                  <input
                    id="careersEmail"
                    type="email"
                    required
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    autoComplete="email"
                    maxLength={254}
                  />
                </div>

                {/* Resume upload */}
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    Resume / CV
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={styles.fileInputHidden}
                    onChange={(e) => {
                      handleResume(e.target.files?.[0] ?? null);
                      e.target.value = "";
                    }}
                  />
                  {resume ? (
                    <div className={styles.resumeRow}>
                      <span className={styles.resumeName}>{resume.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setResume(null);
                          setResumeError("");
                        }}
                        className={styles.resumeRemove}
                        aria-label="Remove resume"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className={styles.uploadBox}
                      onClick={() => fileInputRef.current?.click()}
                      aria-label="Upload your resume or CV"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 16V4M12 4L7 9M12 4l5 5M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Upload Resume</span>
                    </button>
                  )}
                  {resumeError && (
                    <p className={styles.fileError} role="alert">
                      {resumeError}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="careersMessage" className={styles.fieldLabel}>
                    Anything else{" "}
                    <span className={styles.optional}>(optional)</span>
                  </label>
                  <textarea
                    id="careersMessage"
                    className={styles.textarea}
                    rows={1}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    onInput={(e) => {
                      const t = e.currentTarget;
                      t.style.height = "auto";
                      t.style.height = `${t.scrollHeight}px`;
                    }}
                    style={{ overflow: "hidden" }}
                    maxLength={1500}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={styles.formFooter}>
            {step > 1 ? (
              <Button
                as="button"
                variant="ghost"
                size="md"
                onClick={() => setStep((s) => (s - 1) as Step)}
                aria-label="Go back to previous step"
              >
                ← Back
              </Button>
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
                Continue
              </Button>
            ) : (
              <Button
                as="button"
                type="submit"
                variant="primary"
                size="md"
                disabled={!canAdvance}
                aria-label="Submit job application"
              >
                Send application
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
