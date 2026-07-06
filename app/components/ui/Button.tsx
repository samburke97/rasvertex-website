// app/components/ui/Button.tsx

"use client";

import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "white";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  "aria-label"?: string;
}

interface ButtonAsButton extends BaseProps {
  as?: "button";
  href?: never;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends BaseProps {
  as: "link";
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.as === "link" && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        aria-label={props["aria-label"]}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={props["aria-label"]}
    >
      {children}
    </button>
  );
}
