"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

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
  "Commercial Building",
  "Industrial",
  "Retail",
  "Government / Institutional",
  "Other",
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    propertyType: "",
    propertyAddress: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((currentStep + 1) as Step);
  };
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((currentStep - 1) as Step);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const canContinue =
    currentStep === 1
      ? selectedServices.length > 0
      : currentStep === 2
        ? formData.propertyType !== "" && formData.propertyAddress !== ""
        : formData.name !== "" &&
          formData.email !== "" &&
          formData.phone !== "";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ── Left ── */}
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <h1 className={styles.headline}>
              How can
              <br />
              we help?
            </h1>

            <dl className={styles.contactList}>
              <div className={styles.contactRow}>
                <dt className={styles.contactLabel}>Call</dt>
                <dd>
                  <a href="tel:0754430000" className={styles.contactValue}>
                    07 5443 0000
                  </a>
                </dd>
              </div>
              <div className={styles.contactRow}>
                <dt className={styles.contactLabel}>Email</dt>
                <dd>
                  <a
                    href="mailto:hello@rasvertex.com.au"
                    className={styles.contactValue}
                  >
                    hello@rasvertex.com.au
                  </a>
                </dd>
              </div>
              <div className={styles.contactRow}>
                <dt className={styles.contactLabel}>Visit</dt>
                <dd className={styles.contactValue}>Maroochydore QLD 4558</dd>
              </div>
            </dl>
          </div>

          {/* Person block */}
          <div className={styles.person}>
            <div className={styles.personAvatar}>
              <Image
                src="/images/people/caro.jpg"
                alt="Dedicated project manager"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className={styles.personName}>Hylton Denton</p>
            <p className={styles.personRole}>Dedicated Project Manager</p>
            <p className={styles.personBody}>
              One person runs your job from site visit to sign-off. One number,
              one thread, no chasing. You always know who to call.
            </p>
          </div>
        </div>

        {/* ── Right — form ── */}
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.progressHeader}>
              <span className={styles.stepLabel}>Step {currentStep} / 3</span>
              <div className={styles.progressTrack}>
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`${styles.progressSegment} ${s <= currentStep ? styles.progressActive : ""}`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {currentStep === 1 && (
                <div className={styles.stepBody}>
                  <h2 className={styles.stepTitle}>
                    Which services do you need?
                  </h2>
                  <div className={styles.pills}>
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`${styles.pill} ${selectedServices.includes(s) ? styles.pillActive : ""}`}
                      >
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className={styles.stepBody}>
                  <h2 className={styles.stepTitle}>
                    Tell us about the property.
                  </h2>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Property type</label>
                    <div className={styles.pills}>
                      {PROPERTY_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, propertyType: t })
                          }
                          className={`${styles.pill} ${formData.propertyType === t ? styles.pillActive : ""}`}
                        >
                          {t.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Property address
                    </label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="123 Example St, Maroochydore"
                      value={formData.propertyAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className={styles.stepBody}>
                  <h2 className={styles.stepTitle}>How do we reach you?</h2>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Full name</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Email</label>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="alex@company.com.au"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Phone</label>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="04xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Anything else?{" "}
                      <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                      className={styles.textarea}
                      rows={3}
                      placeholder="Building height, access notes, timeline…"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}

              <div className={styles.cardFooter}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className={styles.backButton}
                  >
                    ← Back
                  </button>
                )}
                <div className={styles.footerRight}>
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canContinue}
                      className={styles.continueButton}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canContinue}
                      className={styles.continueButton}
                    >
                      Send request →
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
