import React from "react";
import styles from "./SectionHeader.module.css";

type TitleSize = "sm" | "md" | "lg" | "xl";
type ColorScheme = "dark" | "light";
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface SectionHeaderProps {
  /** Small uppercase label above title (e.g., "WHY CHOOSE US") */
  label?: string;
  /** Main title text */
  title: string;
  /** Optional subtitle/description below title */
  subtitle?: string;
  /** Title size variant */
  size?: TitleSize;
  /** Color scheme for dark/light backgrounds */
  colorScheme?: ColorScheme;
  /** Align content */
  align?: "left" | "center";
  /** Maximum width for text content */
  maxWidth?: string;
  /** Additional className */
  className?: string;
  /**
   * SEO: Semantic heading level (h1-h6)
   * - Use h1 for main page title (only ONE per page)
   * - Use h2 for major sections
   * - Use h3 for subsections
   * @default 2
   */
  headingLevel?: HeadingLevel;
  /** SEO: ID for anchor links and accessibility */
  id?: string;
}

/**
 * SectionHeader Component
 *
 * SEO-optimized header pattern used across sections.
 *
 * IMPORTANT FOR SEO:
 * - Only ONE h1 per page (use headingLevel={1} for page title only)
 * - Use h2 for major sections (default)
 * - Use h3 for subsections within h2 sections
 * - Always maintain proper heading hierarchy
 *
 * @example
 * // Page title (h1) - only use once per page
 * <SectionHeader
 *   title="Commercial Property Maintenance"
 *   headingLevel={1}
 *   size="xl"
 * />
 *
 * @example
 * // Section title (h2) - default
 * <SectionHeader
 *   label="Why Choose Us"
 *   title="10 Years of Excellence"
 *   size="lg"
 * />
 *
 * @example
 * // Subsection (h3)
 * <SectionHeader
 *   title="Our Process"
 *   headingLevel={3}
 *   size="md"
 * />
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  size = "lg",
  colorScheme = "dark",
  align = "left",
  maxWidth,
  className = "",
  headingLevel = 2,
  id,
}: SectionHeaderProps) {
  const classes = [
    styles.header,
    styles[`size-${size}`],
    styles[colorScheme],
    styles[align],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Dynamic heading element for proper SEO hierarchy
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  // Generate ID from title if not provided (for anchor links)
  const headingId =
    id ||
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <header className={classes} aria-labelledby={headingId}>
      {label && (
        <span className={styles.label} aria-hidden="true">
          {label}
        </span>
      )}
      <HeadingTag id={headingId} className={styles.title}>
        {title}
      </HeadingTag>
      {subtitle && (
        <p
          className={styles.subtitle}
          style={maxWidth ? { maxWidth } : undefined}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
