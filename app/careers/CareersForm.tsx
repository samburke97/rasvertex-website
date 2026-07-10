"use client";

// app/careers/CareersForm.tsx

import { useRef, useState } from "react";
import Button from "../components/ui/Button";
import styles from "./CareersForm.module.css";

type Step = 1 | 2 | 3;

const STEPS: { n: Step; label: string }[] = [
  { n: 1, label: "Skillset" },
  { n: 2, label: "Qualifications" },
  { n: 3, label: "Your Details" },
];

const SKILLSETS = [
  "Painting",
  "Exterior cleaning",
  "Waterproofing",
  "Height safety",
  "Repairs and maintenance",
];

const EXPERIENCE_OPTIONS = ["1 year", "2 years", "3–5 years", "5+ years"];

const IRATA_LEVELS = ["Level 1", "Level 2", "Level 3"];

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
    <div className={styles.formWrap}>
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

          {/* Step tabs */}
          <div
            className={styles.steps}
            role="tablist"
            aria-label="Job application steps"
          >
            {STEPS.map((s) => (
              <button
                key={s.n}
                type="button"
                role="tab"
                aria-selected={step === s.n}
                disabled={s.n > step}
                onClick={() => s.n < step && setStep(s.n)}
                className={`${styles.stepTab} ${step === s.n ? styles.stepTabActive : ""}`}
              >
                <span className={styles.stepNum}>
                  {String(s.n).padStart(2, "0")}
                </span>
                <span className={styles.stepLabel}>{s.label}</span>
              </button>
            ))}
          </div>

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
                  <legend className={styles.fieldLabel}>
                    What&apos;s your skillset?
                  </legend>
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

                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>
                    Any other qualifications to note?{" "}
                    <span className={styles.optional}>(optional)</span>
                  </span>
                  <input
                    className={styles.input}
                    value={form.otherQual}
                    onChange={(e) => set("otherQual", e.target.value)}
                    maxLength={500}
                  />
                </label>
              </div>
            )}

            {/* Step 3 — personal details */}
            {step === 3 && (
              <div className={styles.fields}>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldBox}>
                    <span className={styles.fieldBoxLabel}>Full Name*</span>
                    <input
                      className={styles.input}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoComplete="name"
                      maxLength={100}
                    />
                  </label>
                  <label className={styles.fieldBox}>
                    <span className={styles.fieldBoxLabel}>Phone*</span>
                    <input
                      type="tel"
                      className={styles.input}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      autoComplete="tel"
                      maxLength={20}
                    />
                  </label>
                </div>

                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>E-mail*</span>
                  <input
                    type="email"
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    autoComplete="email"
                    maxLength={254}
                  />
                </label>

                {/* Resume upload */}
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>
                    Resume / CV
                    <span className={styles.required} aria-hidden="true"> *</span>
                  </span>
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

                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>
                    Anything else{" "}
                    <span className={styles.optional}>(optional)</span>
                  </span>
                  <textarea
                    className={styles.textarea}
                    rows={3}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    maxLength={1500}
                  />
                </label>
              </div>
            )}
          </div>

          <div className={styles.formFooter}>
            {step > 1 && (
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => setStep((s) => (s - 1) as Step)}
                aria-label="Go back to previous step"
              >
                ← Back
              </button>
            )}
            <Button
              as="button"
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={!canAdvance}
              className={styles.nextBtn}
              aria-label={step < 3 ? "Continue to next step" : "Submit job application"}
            >
              {step < 3 ? "Next →" : "Submit →"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
