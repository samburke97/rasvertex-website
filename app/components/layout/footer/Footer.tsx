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
            <span className="nav-text">Services</span>
            <Link href="/painting" className="p-soft">
              Painting
            </Link>
            <Link href="/external-cleaning" className="p-soft">
              Building Cleaning
            </Link>
            <Link href="/window-cleaning" className="p-soft">
              Window Cleaning
            </Link>
            <Link href="/waterproofing" className="p-soft">
              Waterproofing
            </Link>
            <Link href="/maintenance" className="p-soft">
              Maintenance
            </Link>
            <Link href="/height-safety" className="p-soft">
              Height Safety
            </Link>
            <Link href="/building-inspections" className="p-soft">
              Building Inspections
            </Link>
          </div>
          <div className={styles.column}>
            <span className="nav-text">Sitemap</span>
            <Link href="/" className="p-soft">
              Home
            </Link>
            <Link href="/projects" className="p-soft">
              Projects
            </Link>
            <Link href="/about" className="p-soft">
              About
            </Link>
            <Link href="/contact" className="p-soft">
              Contact
            </Link>
          </div>
          <div className={styles.column}>
            <span className="nav-text">Contact</span>
            <a href="tel:0754379355" className="p-soft">
              (07) 5437 9355
            </a>
            <a href="mailto:info@rasvertex.com.au" className="p-soft">
              info@rasvertex.com.au
            </a>
          </div>
        </nav>

        <div className={styles.newsletter}>
          <span className="nav-text">Newsletter</span>
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
          &copy;{new Date().getFullYear()} Rope Access Services Pty Ltd. All
          rights reserved.
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
