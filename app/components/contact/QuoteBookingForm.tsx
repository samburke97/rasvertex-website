"use client";

// app/components/contact/QuoteBookingForm.tsx

import { useState, useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import styles from "./QuoteBookingForm.module.css";

const TRUST_LOGOS = [
  {
    src: "/images/associations/dulux.svg",
    alt: "Dulux",
    width: 108,
    height: 32,
    displayHeight: 26,
  },
  {
    src: "/images/associations/haymes.svg",
    alt: "Haymes Paint",
    width: 642,
    height: 289,
    displayHeight: 33,
  },
  {
    src: "/images/associations/sika.png",
    alt: "Sika",
    width: 2215,
    height: 1924,
    displayHeight: 40,
  },
  {
    src: "/images/associations/adheseal.png",
    alt: "Adheseal",
    width: 2383,
    height: 333,
    displayHeight: 17,
  },
];

type Step = 1 | 2;

const SERVICES = [
  "Painting",
  "Building Cleaning",
  "Window Cleaning",
  "Waterproofing",
  "Maintenance",
  "Height Safety",
  "Building Inspections",
];

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ACCEPTED_TYPES = "image/jpeg,image/png,image/webp,image/heic";

interface QuoteBookingFormProps {
  headingLevel?: "h1" | "h2";
  heading?: ReactNode;
  leadParagraph?: ReactNode;
  showGoogleRating?: boolean;
  showTrustGroup?: boolean;
  showVideo?: boolean;
}

export default function QuoteBookingForm({
  headingLevel = "h1",
  heading = "Tell us about your project and we’ll provide a no-obligation quote.",
  leadParagraph = (
    <>
      With dedicated teams for painting, external and window cleaning,
      maintenance, waterproofing and height safety, we&rsquo;ll put you in
      touch with the experts for your project.
    </>
  ),
  showGoogleRating = true,
  showTrustGroup = true,
  showVideo = true,
}: QuoteBookingFormProps) {
  const HeadingTag = headingLevel;
  // Bot check: real visitors take more than a couple of seconds to fill
  // a two-step form. No field involved, so autofill can't trip it.
  const mountedAt = useRef(Date.now());
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [photoError, setPhotoError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    service: "",
    propertyAddress: "",
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

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
      ? form.firstName.trim() !== "" &&
        form.lastName.trim() !== "" &&
        form.email.trim() !== "" &&
        form.mobile.trim() !== "" &&
        form.service !== ""
      : form.propertyAddress.trim() !== "";

  const handleSubmit = async () => {
    try {
      const body = new FormData();
      body.append("name", `${form.firstName} ${form.lastName}`.trim());
      body.append("email", form.email);
      body.append("phone", form.mobile);
      body.append("services", form.service);
      body.append("propertyAddress", form.propertyAddress);
      body.append("message", form.message.trim());
      body.append("elapsedMs", String(Date.now() - mountedAt.current));
      photos.forEach((file) => body.append("photos", file));

      const res = await fetch("/api/contact", { method: "POST", body });
      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch (err) {
      console.error("Quote booking form error:", err);
      alert("Something went wrong sending your request. Please try again.");
    }
  };

  return (
    <div
      className={`${styles.card} ${!showVideo ? styles.cardNoVideo : ""}`}
    >
      {/* ── Left info column ── */}
      <div className={styles.info}>
        <HeadingTag className={styles.heading}>{heading}</HeadingTag>
        <p className="p-soft">{leadParagraph}</p>

        {showGoogleRating && (
          <div className={styles.rating}>
            <svg
              className={styles.googleIcon}
              viewBox="0 0 24 24"
              width="28"
              height="28"
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
                      width="14"
                      height="14"
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

        {showTrustGroup && (
          <div className={styles.trustGroup}>
            <h3 className={styles.trustGroupHeading}>
              8-Year warranty as standard
            </h3>
            <div className={styles.trustLogos}>
              {TRUST_LOGOS.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={styles.trustLogoImg}
                  style={{ height: logo.displayHeight }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Middle form column ── */}
      <div className={styles.formCol}>
        {submitted ? (
          <div className={styles.success} role="status" aria-live="polite">
            <div className={styles.successCard}>
              <h2>We&rsquo;ll be in touch.</h2>
              <p className="p-soft">
                Thanks for reaching out. We&rsquo;ll be in touch within 24
                hours. In the meantime, feel free to call{" "}
                <a href="tel:0753710201" className={styles.successLink}>
                  (07) 5371 0201
                </a>{" "}
                for urgent enquiries.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!canAdvance) return;
              if (step < 2) {
                setStep((s) => (s + 1) as Step);
                return;
              }
              handleSubmit();
            }}
            aria-label={`Request a quote — step ${step} of 2`}
            noValidate
          >
            {/* Step 1 — Your Details */}
            {step === 1 && (
              <div className={styles.fields}>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>First Name*</span>
                  <input
                    className={styles.fieldBoxInput}
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    autoComplete="given-name"
                    maxLength={100}
                  />
                </label>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>Last Name*</span>
                  <input
                    className={styles.fieldBoxInput}
                    value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    autoComplete="family-name"
                    maxLength={100}
                  />
                </label>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>E-mail*</span>
                  <input
                    type="email"
                    className={styles.fieldBoxInput}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    autoComplete="email"
                    maxLength={254}
                  />
                </label>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>Mobile*</span>
                  <input
                    type="tel"
                    className={styles.fieldBoxInput}
                    value={form.mobile}
                    onChange={(e) => set("mobile", e.target.value)}
                    autoComplete="tel"
                    maxLength={20}
                  />
                </label>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>Services*</span>
                  <select
                    className={styles.fieldBoxSelect}
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                  >
                    <option value="">Please select a service</option>
                    {SERVICES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            {/* Step 2 — Property Details */}
            {step === 2 && (
              <div className={styles.fields}>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>
                    Property Address*
                  </span>
                  <input
                    className={styles.fieldBoxInput}
                    value={form.propertyAddress}
                    onChange={(e) => set("propertyAddress", e.target.value)}
                    autoComplete="street-address"
                    maxLength={200}
                  />
                </label>
                <label className={styles.fieldBox}>
                  <span className={styles.fieldBoxLabel}>
                    Tell us more{" "}
                    <span className={styles.optional}>(optional)</span>
                  </span>
                  <textarea
                    className={styles.fieldBoxTextarea}
                    rows={3}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    maxLength={1500}
                  />
                </label>

                <div className={styles.field}>
                  <label className={styles.fieldBoxLabel}>
                    Photos <span className={styles.optional}>(optional)</span>
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
                    <span className={styles.uploadBoxLabel}>Add Photos</span>
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
              </div>
            )}

            <div className={styles.footer}>
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
                aria-label={
                  step < 2 ? "Continue to next step" : "Submit quote request"
                }
              >
                {step < 2 ? "Next →" : "Submit →"}
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* ── Right video column ── */}
      {showVideo && (
        <div className={styles.videoCol}>
          <video
            className={styles.video}
            src="/videos/racv.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="RAS-VERTEX project footage — RACV Noosa Resort"
          />
          <div className={styles.videoTag}>
            <span className={styles.videoTagName}>RACV Maintenance</span>
            <span className={styles.videoTagLocation}>Sunshine Coast</span>
          </div>
        </div>
      )}
    </div>
  );
}
