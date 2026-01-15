import React from "react";
import styles from "./Container.module.css";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "max";

interface ContainerProps {
  children: React.ReactNode;
  /** Container max-width: sm(640) | md(768) | lg(1024) | xl(1280) | 2xl(1440) | max(1600) */
  size?: ContainerSize;
  /** Remove max-width constraint for full-bleed */
  fluid?: boolean;
  /** Center children horizontally */
  centered?: boolean;
  /** Remove horizontal padding */
  noPadding?: boolean;
  /** Custom className */
  className?: string;
  /** HTML element to render */
  as?: React.ElementType;
  /** ID attribute */
  id?: string;
}

export default function Container({
  children,
  size = "max",
  fluid = false,
  centered = false,
  noPadding = false,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  const classes = [
    styles.container,
    !fluid && styles[size],
    fluid && styles.fluid,
    centered && styles.centered,
    noPadding && styles.noPadding,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component id={id} className={classes}>
      {children}
    </Component>
  );
}
