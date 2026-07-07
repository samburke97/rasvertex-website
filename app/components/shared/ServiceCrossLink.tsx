// app/components/shared/ServiceCrossLink.tsx

import Link from "next/link";
import styles from "./ServiceCrossLink.module.css";

interface ServiceCrossLinkProps {
  /** Optional plain lead-in text before the link, e.g. "Looking for window cleaning specifically?" */
  lead?: string;
  /** The clickable phrase */
  linkText: string;
  href: string;
  /** Show the animated arrow — use for standalone CTA-style lines */
  arrow?: boolean;
}

export default function ServiceCrossLink({
  lead,
  linkText,
  href,
  arrow = false,
}: ServiceCrossLinkProps) {
  return (
    <p className={`${styles.wrap} p-soft`}>
      {lead && <>{lead} </>}
      <Link href={href} className={styles.link}>
        {linkText}
        {arrow && (
          <svg
            className={styles.arrow}
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>
    </p>
  );
}
