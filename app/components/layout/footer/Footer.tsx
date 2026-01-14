"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Left Columns - grouped */}
        <div className={styles.leftColumns}>
          <div className={styles.column}>
            <span className={styles.columnTitle}>Sitemap</span>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
            <Link href="/projects" className={styles.link}>
              Projects
            </Link>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Company</span>
            <Link href="/about" className={styles.link}>
              About Us
            </Link>
            <Link href="/terms" className={styles.link}>
              Terms & Conditions
            </Link>
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Contact</span>
            <a href="tel:0754379355" className={styles.link}>
              (07) 5437 9355
            </a>
            <a href="mailto:info@rasvertex.com.au" className={styles.link}>
              info@rasvertex.com.au
            </a>
          </div>
        </div>

        {/* Newsletter - far right */}
        <div className={styles.newsletter}>
          <span className={styles.columnTitle}>Newsletter</span>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Watermark */}
      <div className={styles.watermark}>
        <span className={styles.watermarkText}>HIGHER STANDARDS</span>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <span className={styles.copyright}>
          ©{new Date().getFullYear()} ROPE ACCESS SERVICES PTY LTD. ALL RIGHTS
          RESERVED.
        </span>
        <div className={styles.socials}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LINKEDIN
          </a>
          <span className={styles.socialDivider}>,</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            INSTAGRAM
          </a>
          <span className={styles.socialDivider}>,</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            FACEBOOK
          </a>
        </div>
        <span className={styles.location}>SUNSHINE COAST, QLD</span>
      </div>
    </footer>
  );
}
