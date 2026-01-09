"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

type Step = 1 | 2 | 3 | 4;

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    customerType: "",
    propertyType: "",
    propertyAddress: "",
    projectType: "",
    projectDescription: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column - Form */}
        <div className={styles.leftColumn}>
          <div className={styles.formWrapper}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Book a no obligation,
                <br />
                hassle-free quote.
              </h1>
              <div className={styles.ratings}>
                <div className={styles.ratingItem}>
                  <span className={styles.ratingSource}>Google Rating</span>
                  <div className={styles.stars}>
                    <span className={styles.score}>4.8</span>
                    <span className={styles.starIcons}>★★★★★</span>
                  </div>
                  <span className={styles.reviewCount}>
                    Based on 570 reviews
                  </span>
                </div>
                <div className={styles.ratingItem}>
                  <span className={styles.ratingSource}>Facebook Rating</span>
                  <div className={styles.stars}>
                    <span className={styles.score}>4.6</span>
                    <span className={styles.starIcons}>★★★★★</span>
                  </div>
                  <span className={styles.reviewCount}>
                    Based on 71 reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className={styles.progressBar}>
              <div
                className={`${styles.step} ${
                  currentStep >= 1 ? styles.active : ""
                }`}
              >
                <span className={styles.stepNumber}>①</span>
                <span className={styles.stepLabel}>Your Details</span>
              </div>
              <div
                className={`${styles.step} ${
                  currentStep >= 2 ? styles.active : ""
                }`}
              >
                <span className={styles.stepNumber}>②</span>
                <span className={styles.stepLabel}>Property Details</span>
              </div>
              <div
                className={`${styles.step} ${
                  currentStep >= 3 ? styles.active : ""
                }`}
              >
                <span className={styles.stepNumber}>③</span>
                <span className={styles.stepLabel}>Project Details</span>
              </div>
              <div
                className={`${styles.step} ${
                  currentStep >= 4 ? styles.active : ""
                }`}
              >
                <span className={styles.stepNumber}>④</span>
                <span className={styles.stepLabel}>Date / Time</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Step 1: Your Details */}
              {currentStep === 1 && (
                <div className={styles.stepContent}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>FIRST NAME*</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>LAST NAME*</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>E-MAIL*</label>
                    <input
                      type="email"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>MOBILE*</label>
                    <input
                      type="tel"
                      className={styles.input}
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>CUSTOMER TYPE*</label>
                    <select
                      className={styles.select}
                      value={formData.customerType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customerType: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="">Please select a customer type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="body-corporate">Body Corporate</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Property Details */}
              {currentStep === 2 && (
                <div className={styles.stepContent}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>PROPERTY TYPE*</label>
                    <select
                      className={styles.select}
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyType: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="unit">Unit/Apartment</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="complex">Multi-Unit Complex</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>PROPERTY ADDRESS*</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Street, Suburb, Postcode"
                      value={formData.propertyAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyAddress: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Project Details */}
              {currentStep === 3 && (
                <div className={styles.stepContent}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      WHAT SERVICE DO YOU NEED?*
                    </label>
                    <select
                      className={styles.select}
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="painting">Painting</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="height-safety">Height Safety</option>
                      <option value="waterproofing">Waterproofing</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      TELL US ABOUT YOUR PROJECT
                    </label>
                    <textarea
                      className={styles.textarea}
                      rows={4}
                      placeholder="Help us understand what you need..."
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDescription: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Date / Time */}
              {currentStep === 4 && (
                <div className={styles.stepContent}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>PREFERRED DATE</label>
                    <input
                      type="date"
                      className={styles.input}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>PREFERRED TIME</label>
                    <select
                      className={styles.select}
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="flexible">I'm Flexible</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className={styles.buttonGroup}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className={styles.backButton}
                  >
                    ← Back
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.nextButton}
                  >
                    Next →
                  </button>
                ) : (
                  <button type="submit" className={styles.submitButton}>
                    Submit Quote Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Testimonial Video */}
        <div className={styles.rightColumn}>
          <div className={styles.videoWrapper}>
            <Image
              src="/images/people/caro.jpg"
              alt="Customer Testimonial"
              fill
              className={styles.videoImage}
            />
            <button className={styles.playButton}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="white" opacity="0.95" />
                <path d="M32 24L56 40L32 56V24Z" fill="var(--navy)" />
              </svg>
            </button>
            <div className={styles.videoCaption}>
              <p className={styles.videoCaptionText}>
                "They are like a family to me."
              </p>
              <p className={styles.videoCaptionSubtext}>
                PAINT WITH LOVE - FELLIPE'S STORY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
