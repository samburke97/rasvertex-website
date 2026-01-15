import React from "react";
import styles from "./Section.module.css";

type SectionPadding = "none" | "sm" | "md" | "lg" | "xl";
type SectionBackground = "white" | "cream" | "navy" | "burgundy";

interface SectionProps {
  children: React.ReactNode;
  /** Vertical padding size */
  padding?: SectionPadding;
  /** Background color */
  background?: SectionBackground;
  /** Full viewport height (for scroll-based sections) */
  fullHeight?: boolean;
  /** Minimum height in vh units */
  minHeight?: string;
  /** Additional className */
  className?: string;
  /** ID for anchor links */
  id?: string;
}

/**
 * Section Component
 *
 * Consistent wrapper for page sections with standard padding and backgrounds.
 *
 * Padding sizes:
 * - sm: 48px (mobile) / 60px (desktop)
 * - md: 60px (mobile) / 80px (desktop)
 * - lg: 80px (mobile) / 100px (desktop)
 * - xl: 100px (mobile) / 120px (desktop)
 *
 * @example
 * // Standard section
 * <Section padding="lg" background="white">
 *   <Container>Content here</Container>
 * </Section>
 *
 * @example
 * // Full-height scroll section
 * <Section fullHeight minHeight="300vh">
 *   <Container>Scroll content</Container>
 * </Section>
 */
export default function Section({
  children,
  padding = "md",
  background = "white",
  fullHeight = false,
  minHeight,
  className = "",
  id,
}: SectionProps) {
  const classes = [
    styles.section,
    styles[`padding-${padding}`],
    styles[`bg-${background}`],
    fullHeight && styles.fullHeight,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = minHeight ? { minHeight } : undefined;

  return (
    <section id={id} className={classes} style={style}>
      {children}
    </section>
  );
}
