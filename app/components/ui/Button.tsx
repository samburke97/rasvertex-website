import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Icon position */
  iconPosition?: "left" | "right";
  /** Additional className */
  className?: string;
  /** Button content */
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button Component
 *
 * Matches the button styles used across RAS-VERTEX:
 * - Primary: Navy background, white text (CTA, Navigation)
 * - Secondary: Transparent, navy border (CTA secondary)
 * - Outline: Transparent with subtle border
 * - Ghost: No background or border
 * - White: White background, navy text (Expanding panels)
 *
 * Uses Bebas Neue font, 4px border-radius, uppercase text.
 *
 * @example
 * // Primary button
 * <Button variant="primary">Get a Quote</Button>
 *
 * @example
 * // Secondary outline button
 * <Button variant="secondary">Our Services</Button>
 *
 * @example
 * // As a link
 * <Button as="link" href="/contact" variant="primary">Contact Us</Button>
 *
 * @example
 * // Full width on mobile
 * <Button variant="primary" fullWidth>Submit</Button>
 */
export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    icon && styles.withIcon,
    icon && iconPosition === "left" && styles.iconLeft,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (props.as === "link") {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
