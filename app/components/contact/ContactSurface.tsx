// app/components/contact/ContactSurface.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
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

const STEP_BODY: Record<Step, string> = {
  1: "Pick everything that applies — painting, cleaning, waterproofing, height safety. One contractor covers the lot.",
  2: "Where's the building, and what kind of site is it? It helps us send the right specialist to the walk-through.",
  3: "We'll be in touch within one business day to confirm a time on site.",
};

const SLIDES = [
  {
    src: "/images/projects/1.jpeg",
    alt: "Commercial repaint — Sunshine Coast",
  },
  { src: "/images/projects/2.jpeg", alt: "Facade restoration — Maroochydore" },
  { src: "/nav/painting.png", alt: "Painting project — Mooloolaba" },
  { src: "/nav/waterproofing.png", alt: "Waterproofing — Noosa" },
  { src: "/nav/maintenance.png", alt: "Building maintenance — Sunshine Coast" },
];

const tripled = [...SLIDES, ...SLIDES, ...SLIDES];

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
      {/* ── LEFT ── */}
      <aside className={styles.left} aria-label="Contact information">
        {/* Step indicator */}
        <div className={styles.stepIndicator} aria-label={`Step ${step} of 3`}>
          <span className={styles.stepLabelText}>STEP {step} OF 3</span>
          <div className={styles.stepDots} aria-hidden="true">
            {([1, 2, 3] as Step[]).map((n) => (
              <span
                key={n}
                className={`${styles.stepDot} ${n === step ? styles.stepDotActive : n < step ? styles.stepDotDone : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Step heading + body */}
        <h2>{STEP_LABELS[step]}</h2>
        <p className="p-soft">{STEP_BODY[step]}</p>

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

        <div className={styles.divider} />

        {/* Contact info */}
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

      {/* ── RIGHT: form panel + carousel ── */}
      <div className={styles.right}>
        {/* Form area */}
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
                if (canAdvance && step === 3) setSubmitted(true);
              }}
              aria-label="Request a free quote"
              noValidate
            >
              <p className={styles.selectLabel}>Select all that apply</p>

              {step === 1 && (
                <fieldset
                  className={styles.chips}
                  aria-label="Services required"
                >
                  <legend className="sr-only">
                    Which services do you need?
                  </legend>
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      role="checkbox"
                      aria-checked={services.includes(s)}
                      onClick={() => toggle(s)}
                      className={`${styles.chip} ${services.includes(s) ? styles.chipActive : ""}`}
                    >
                      {s}
                    </button>
                  ))}
                </fieldset>
              )}

              {step === 2 && (
                <div className={styles.fields}>
                  <fieldset className={styles.chips} aria-label="Property type">
                    <legend className={styles.fieldLabel}>Property type</legend>
                    {PROPERTY_TYPES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        role="radio"
                        aria-checked={form.propertyType === t}
                        onClick={() => set("propertyType", t)}
                        className={`${styles.chip} ${form.propertyType === t ? styles.chipActive : ""}`}
                      >
                        {t}
                      </button>
                    ))}
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

        {/* ── Carousel — same as ServiceHero, sits at bottom of right panel ── */}
        <div
          className={styles.carouselWrap}
          role="region"
          aria-label="Project photo gallery"
        >
          <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.track} aria-hidden="true">
              {tripled.map((slide, i) => (
                <div
                  key={i}
                  className={`${styles.slide} ${i % 2 === 1 ? styles.slideDown : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.carouselNav}
            role="group"
            aria-label="Browse photos"
          >
            <button
              className={styles.navBtn}
              onClick={scrollPrev}
              aria-label="Previous photos"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.5 6.5L8 10L11.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles.navBtn}
              onClick={scrollNext}
              aria-label="Next photos"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 6.5L12 10L8.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
