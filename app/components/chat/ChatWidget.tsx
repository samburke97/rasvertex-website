"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ChatWidget.module.css";

type FormStep = "initial" | "form" | "success";

interface FormData {
  name: string;
  projectDetails: string;
  helpType: string;
}

const helpOptions = [
  { value: "", label: "Select an option..." },
  { value: "painting", label: "Commercial Painting" },
  { value: "cleaning", label: "Building Cleaning" },
  { value: "maintenance", label: "Property Maintenance" },
  { value: "waterproofing", label: "Waterproofing Services" },
  { value: "height-safety", label: "Height Safety Systems" },
  { value: "quote", label: "General Quote Request" },
  { value: "other", label: "Other / More Info" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<FormStep>("initial");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    projectDetails: "",
    helpType: "",
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep("initial");
    }
  };

  const handleStartChat = () => {
    setStep("form");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "samueljamesburke@gmail.com",
          subject: `RAS-VERTEX Inquiry: ${
            helpOptions.find((o) => o.value === formData.helpType)?.label ||
            "General"
          }`,
        }),
      });

      if (response.ok) {
        setStep("success");
      } else {
        // Fallback to mailto if API fails
        const mailtoLink = `mailto:samueljamesburke@gmail.com?subject=${encodeURIComponent(
          `RAS-VERTEX Inquiry: ${
            helpOptions.find((o) => o.value === formData.helpType)?.label ||
            "General"
          }`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\n\nHow can we help: ${
            helpOptions.find((o) => o.value === formData.helpType)?.label ||
            "Not specified"
          }\n\nProject Details:\n${formData.projectDetails}`
        )}`;
        window.location.href = mailtoLink;
        setStep("success");
      }
    } catch {
      // Fallback to mailto
      const mailtoLink = `mailto:samueljamesburke@gmail.com?subject=${encodeURIComponent(
        `RAS-VERTEX Inquiry: ${
          helpOptions.find((o) => o.value === formData.helpType)?.label ||
          "General"
        }`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\n\nHow can we help: ${
          helpOptions.find((o) => o.value === formData.helpType)?.label ||
          "Not specified"
        }\n\nProject Details:\n${formData.projectDetails}`
      )}`;
      window.location.href = mailtoLink;
      setStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
      setStep("initial");
      setFormData({ name: "", projectDetails: "", helpType: "" });
    }, 300);
  };

  return (
    <div className={styles.chatWidget}>
      {/* Chat Popup */}
      <div className={`${styles.chatPopup} ${isOpen ? styles.open : ""}`}>
        {/* Header */}
        <div className={styles.header}>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close chat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {step === "initial" && (
            <div className={styles.initialView}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/team/carolina.jpg"
                  alt="Carolina - RAS-VERTEX Team"
                  width={100}
                  height={100}
                  className={styles.avatar}
                />
              </div>
              <h2 className={styles.title}>HOW CAN WE HELP?</h2>
              <p className={styles.description}>
                From small repairs to full repaints, we know every property type
                and we&apos;ll guide you to the right solution for your project.
              </p>
              <button className={styles.ctaButton} onClick={handleStartChat}>
                GET IN TOUCH
              </button>
            </div>
          )}

          {step === "form" && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/team/carolina.jpg"
                  alt="Carolina - RAS-VERTEX Team"
                  width={80}
                  height={80}
                  className={styles.avatarSmall}
                />
              </div>
              <h2 className={styles.titleSmall}>LET&apos;S GET STARTED</h2>

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="helpType" className={styles.label}>
                  How can we help?
                </label>
                <select
                  id="helpType"
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  {helpOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectDetails" className={styles.label}>
                  Tell us about your project
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="Describe your project, property type, and any specific requirements..."
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.ctaButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}

          {step === "success" && (
            <div className={styles.successView}>
              <div className={styles.successIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className={styles.title}>THANK YOU!</h2>
              <p className={styles.description}>
                We&apos;ve received your message and will be in touch within the
                next <strong>24 hours</strong>.
              </p>
              <p className={styles.subtext}>
                In the meantime, feel free to explore our services or give us a
                call.
              </p>
              <button className={styles.secondaryButton} onClick={handleClose}>
                CLOSE
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.footerText}>Powered by RAS-VERTEX</span>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.active : ""}`}
        onClick={handleToggle}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
