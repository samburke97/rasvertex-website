// app/components/contact/ContactSurface.tsx

"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import styles from "./ContactSurface.module.css";
import { cld } from "../../lib/cloudinary";

type Step = 1 | 2 | 3;

const SERVICES = [
  "Painting",
  "Building Cleaning",
  "Window Cleaning",
  "Waterproofing",
  "Maintenance",
  "Height Safety",
  "Building Inspection",
];

const PROPERTY_TYPES = [
  "Strata / Body Corporate",
  "Commercial",
  "Industrial",
  "Retail",
  "Government",
  "Residential",
];

const CTS_ELIGIBLE_TYPES = ["Strata / Body Corporate", "Commercial"];

const STEP_LABELS: Record<Step, string> = {
  1: "How can we help?",
  2: "Tell us about the property.",
  3: "How do we reach you?",
};

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ACCEPTED_TYPES = "image/jpeg,image/png,image/webp,image/heic";

interface ContactSurfaceTrustGroup {
  heading: string;
  logos: {
    src: string;
    alt: string;
    width: number;
    height: number;
    displayHeight?: number;
  }[];
}

interface ContactSurfaceProps {
  headingLevel?: "h1" | "h2";
  heading?: ReactNode;
  leadParagraph?: string;
  showPhoto?: boolean;
  showContactGrid?: boolean;
  showGoogleRating?: boolean;
  showVideo?: boolean;
  trustGroups?: ContactSurfaceTrustGroup[];
}

export default function ContactSurface({
  headingLevel = "h1",
  heading = (
    <>
      Let&rsquo;s talk about
      <br />
      your building.
    </>
  ),
  leadParagraph = "25 years working with Sunshine Coast body corporates, strata committees, commercial property managers and hotels. One standard across every building type, every time.",
  showPhoto = true,
  showGoogleRating = true,
  showContactGrid = true,
  showVideo = false,
  trustGroups,
}: ContactSurfaceProps) {
  const HeadingTag = headingLevel;
  const [step, setStep] = useState<Step>(1);
  const [services, setServices] = useState<string[]>([]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [photoError, setPhotoError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    propertyType: "",
    propertyAddress: "",
    ctsNumber: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) =>
    setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const showCtsField = CTS_ELIGIBLE_TYPES.includes(form.propertyType);

  // Build a real thumbnail preview URL for each selected file. Object
  // URLs are revoked whenever the photo list changes or the component
  // unmounts, so we never leak memory.
  useEffect(() => {
    const urls = photos.map((file) => URL.createObjectURL(file));
    setPhotoPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [photos]);

  const addPhotos = (fileList: FileList | null) => {
    if (!fileList) return;
    setPhotoError("");

    const incoming = Array.from(fileList);
    const next = [...photos];

    for (const file of incoming) {
      if (next.length >= MAX_FILES) {
        setPhotoError(`You can attach up to ${MAX_FILES} photos.`);
        break;
      }
      if (file.size > MAX_FILE_SIZE) {
        setPhotoError(`${file.name} is over 8MB and was skipped.`);
        continue;
      }
      next.push(file);
    }

    setPhotos(next);
  };

  const removePhoto = (index: number) => {
    setPhotos((p) => p.filter((_, i) => i !== index));
    setPhotoError("");
  };

  const canAdvance =
    step === 1
      ? services.length > 0
      : step === 2
        ? form.propertyType !== "" && form.propertyAddress.trim() !== ""
        : form.name.trim() !== "" &&
          form.email.trim() !== "" &&
          form.phone.trim() !== "";

  const handleSubmit = async () => {
    if (form.company.trim() !== "") {
      setSubmitted(true);
      return;
    }

    try {
      const body = new FormData();
      services.forEach((s) => body.append("services", s));
      Object.entries(form).forEach(([key, value]) => body.append(key, value));
      photos.forEach((file) => body.append("photos", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
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
      {/* ── LEFT ── */}
      <div className={styles.left}>
        <header className={styles.header}>
          <HeadingTag>{heading}</HeadingTag>
          <p className="p-soft">{leadParagraph}</p>
        </header>

        {trustGroups && trustGroups.length > 0 && (
          <div className={styles.trustGroups}>
            {trustGroups.map((group) => (
              <div key={group.heading} className={styles.trustGroup}>
                <h3 className={styles.trustGroupHeading}>{group.heading}</h3>
                <div className={styles.trustLogos}>
                  {group.logos.map((logo) => (
                    <Image
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={styles.trustLogoImg}
                      style={{ height: logo.displayHeight ?? 30 }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {showGoogleRating && (
          <div className={styles.ratingBadge}>
            <svg
              className={styles.googleIcon}
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="var(--navy)"
              aria-hidden="true"
            >
              <path d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.71-2.44 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.06C3.24 21.3 7.26 24 12 24zM5.27 14.3c-.24-.71-.38-1.46-.38-2.3s.14-1.59.38-2.3V6.64H1.27A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.27 5.36l4-3.06zM12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.24 2.7 1.27 6.64l4 3.06C6.22 6.86 8.87 4.75 12 4.75z" />
            </svg>
            <div className={styles.ratingText}>
              <span className={styles.ratingTitle}>Google Rating</span>
              <div className={styles.ratingScoreRow}>
                <span className={styles.ratingScore}>4.9</span>
                <div className={styles.stars} aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={styles.star}
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="var(--navy)"
                    >
                      <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.6L12 17.6l-5.94 3.17 1.13-6.6-4.8-4.68 6.64-.97L12 2.5z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className={styles.ratingCount}>Based on 50+ reviews</span>
            </div>
          </div>
        )}

        {showPhoto && (
          <div className={styles.imageWrap} aria-hidden="true">
            <Image
              src={cld("contact-us", { width: 1200 })}
              alt="RAS-VERTEX project — Sunshine Coast"
              fill
              className={styles.image}
              sizes="(max-width: 860px) 100vw, 480px"
            />
          </div>
        )}

        {showContactGrid && (
          <div className={styles.contactGrid}>
            <div className={styles.contactBox}>
              <h4 className={styles.contactLabel}>Call Us</h4>
              <a href="tel:0753710201" className={styles.contactValueLink}>
                (07) 5371 0201
              </a>
            </div>
            <div className={styles.contactBox}>
              <h4 className={styles.contactLabel}>Email</h4>
              <a
                href="mailto:team@rasvertex.com.au"
                className={styles.contactValueLink}
              >
                team@rasvertex.com.au
              </a>
            </div>
            <div className={styles.contactBox}>
              <h4 className={styles.contactLabel}>Hours</h4>
              <span className={styles.contactValue}>Mon–Fri, 7am–5pm</span>
            </div>
            <div className={styles.contactBox}>
              <h4 className={styles.contactLabel}>Visit Us</h4>
              <span className={styles.contactValue}>
                1–3 Kessling Avenue, Kunda Park QLD 4556
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── RIGHT ── */}
      <div className={styles.right}>
        <div className={styles.formWrap}>
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
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </div>

              <div className={styles.progress}>
                <span className={styles.progressLabel}>
                  {step} <span className={styles.progressOf}>/ 3</span>
                </span>
                <div
                  className={styles.progressTrack}
                  role="progressbar"
                  aria-label={`Step ${step} of 3`}
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

              <h2 className={styles.stepTitle}>{STEP_LABELS[step]}</h2>

              {step === 1 && (
                <p className={styles.stepHint}>(Select all that apply)</p>
              )}

              <div className={styles.stepBody}>
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
                        <span className={styles.required} aria-hidden="true">
                          {" "}
                          *
                        </span>
                      </label>
                      <input
                        id="contactAddress"
                        type="text"
                        required
                        className={styles.input}
                        value={form.propertyAddress}
                        onChange={(e) => set("propertyAddress", e.target.value)}
                        autoComplete="street-address"
                        maxLength={200}
                      />
                    </div>

                    <fieldset
                      className={styles.fieldset}
                      aria-label="Property type"
                    >
                      <legend className={styles.fieldLabel}>
                        Property type
                      </legend>
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

                    {showCtsField && (
                      <div className={styles.field}>
                        <label
                          htmlFor="ctsNumber"
                          className={styles.fieldLabel}
                        >
                          CTS number{" "}
                          <span className={styles.optional}>(optional)</span>
                        </label>
                        <input
                          id="ctsNumber"
                          type="text"
                          className={styles.input}
                          value={form.ctsNumber}
                          onChange={(e) => set("ctsNumber", e.target.value)}
                          maxLength={20}
                        />
                      </div>
                    )}
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
                          <span className={styles.required} aria-hidden="true">
                            {" "}
                            *
                          </span>
                        </label>
                        <input
                          id="contactName"
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
                        <label
                          htmlFor="contactPhone"
                          className={styles.fieldLabel}
                        >
                          Phone
                          <span className={styles.required} aria-hidden="true">
                            {" "}
                            *
                          </span>
                        </label>
                        <input
                          id="contactPhone"
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
                      <label
                        htmlFor="contactEmail"
                        className={styles.fieldLabel}
                      >
                        Email
                        <span className={styles.required} aria-hidden="true">
                          {" "}
                          *
                        </span>
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        required
                        className={styles.input}
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        autoComplete="email"
                        maxLength={254}
                      />
                    </div>

                    {/* ── Photo upload ── */}
                    <div className={styles.field}>
                      <label className={styles.fieldLabel}>
                        Photos{" "}
                        <span className={styles.optional}>(optional)</span>
                      </label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={ACCEPTED_TYPES}
                        multiple
                        className={styles.fileInputHidden}
                        onChange={(e) => {
                          addPhotos(e.target.files);
                          e.target.value = "";
                        }}
                      />

                      <button
                        type="button"
                        className={styles.uploadBox}
                        onClick={() => fileInputRef.current?.click()}
                        aria-label="Add photos of the building or issue"
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
                        <span>Add Photos</span>
                      </button>

                      {photoError && (
                        <p className={styles.photoError} role="alert">
                          {photoError}
                        </p>
                      )}

                      {photos.length > 0 && (
                        <ul
                          className={styles.photoGrid}
                          aria-label="Uploaded photos"
                        >
                          {photos.map((file, i) => (
                            <li key={i} className={styles.photoThumb}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={photoPreviews[i]}
                                alt={`Preview of ${file.name}`}
                                className={styles.photoThumbImage}
                              />
                              <button
                                type="button"
                                onClick={() => removePhoto(i)}
                                aria-label={`Remove ${file.name}`}
                                className={styles.photoThumbRemove}
                              >
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6l12 12M18 6L6 18"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
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
                    aria-label="Submit quote request"
                  >
                    Send request
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── VIDEO ── */}
      {showVideo && (
        <div className={styles.videoCol}>
          <span className={styles.videoCaption}>RAS-VERTEX PROJECT FOOTAGE</span>
          <video
            className={styles.video}
            src="/videos/racv.mp4"
            controls
            playsInline
            aria-label="RAS-VERTEX project footage — RACV Noosa Resort"
          />
        </div>
      )}
    </div>
  );
}
