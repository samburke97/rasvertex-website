// app/components/layout/footer/Footer.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.watermark} aria-hidden="true">
        <span className={styles.watermarkText}>HIGHER STANDARDS.</span>
      </div>

      <div className={styles.top}>
        <nav className={styles.columns} aria-label="Footer navigation">
          <div className={styles.column}>
            <span className={styles.title}>Sitemap</span>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.column}>
            <span className={styles.title}>Company</span>
            <Link href="/about">About Us</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className={styles.column}>
            <span className={styles.title}>Contact</span>
            <a href="tel:0754379355">(07) 5437 9355</a>
            <a href="mailto:info@rasvertex.com.au">info@rasvertex.com.au</a>
          </div>
        </nav>

        <div className={styles.newsletter}>
          <span className={styles.title}>Newsletter</span>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              aria-label="First name"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              aria-label="Email address"
            />
            <Button as="button" type="submit" variant="primary" size="sm">
              Sign Up
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.small}>
          ©{new Date().getFullYear()} Rope Access Services Pty Ltd. All rights
          reserved.
        </span>
        <div className={styles.socials}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">,</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span aria-hidden="true">,</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <span className={styles.small}>Sunshine Coast, QLD</span>
      </div>
    </footer>
  );
}
