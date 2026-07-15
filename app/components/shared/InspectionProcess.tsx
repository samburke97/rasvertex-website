// app/components/shared/InspectionProcess.tsx

import type { IconType } from "react-icons";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import styles from "./InspectionProcess.module.css";

export interface InspectionStepLink {
  /** Substring within `body` to render as a link to `href` */
  text: string;
  href: string;
}

export interface InspectionStep {
  n: string;
  title: string;
  body: string;
  icon?: IconType;
  deliverable?: string;
  /** Substrings within `body` to render as links — matched in order given */
  links?: InspectionStepLink[];
}

function renderStepBody(step: InspectionStep) {
  if (!step.links || step.links.length === 0) return step.body;

  // Find each link's position in the body, then render the text as
  // plain/linked segments in the order they actually appear.
  const matches = step.links
    .map((link) => ({ link, idx: step.body.indexOf(link.text) }))
    .filter((m) => m.idx !== -1)
    .sort((a, b) => a.idx - b.idx);

  if (matches.length === 0) return step.body;

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    nodes.push(step.body.slice(cursor, m.idx));
    nodes.push(
      <Link key={i} href={m.link.href} className={styles.bodyLink}>
        {m.link.text}
      </Link>,
    );
    cursor = m.idx + m.link.text.length;
  });
  nodes.push(step.body.slice(cursor));

  return nodes;
}

export interface InspectionFinding {
  n: string;
  title: string;
  body: string;
}

interface InspectionProcessProps {
  heading: React.ReactNode;
  lede?: string;
  steps: InspectionStep[];
  findings?: InspectionFinding[];
  headingId?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional large sticky image shown above the heading in the left column */
  image?: { src: string; alt: string };
  /** Shrinks the heading to match ServiceCards' .listLeft sizing */
  compactHeading?: boolean;
}

export default function InspectionProcess({
  heading,
  lede,
  steps,
  findings,
  headingId = "inspection-process-heading",
  ctaLabel,
  ctaHref = "/contact",
  image,
  compactHeading = false,
}: InspectionProcessProps) {
  const ctaArrowIndex = ctaLabel?.lastIndexOf("→") ?? -1;
  const cta = ctaLabel && (
    <Button as="link" href={ctaHref} variant="primary" className={styles.cta}>
      {ctaArrowIndex === -1 ? ctaLabel : ctaLabel.slice(0, ctaArrowIndex).trimEnd()}
      <svg
        className={styles.ctaArrow}
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
    </Button>
  );

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Left + steps row ── */}
      <div className={styles.row}>
        <div className={`${styles.left} ${compactHeading ? styles.compact : ""}`}>
          <h2 id={headingId}>{heading}</h2>
          {lede && <p className="p-soft">{lede}</p>}
          {cta}
          {image && (
            <div className={styles.imageWrap}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                sizes="(max-width: 860px) 100vw, 32vw"
              />
            </div>
          )}
        </div>

        <ol className={styles.steps} aria-label="Inspection process steps">
          {steps.map((step) => (
            <li key={step.n} className={styles.step}>
              {step.icon ? (
                <step.icon className={styles.icon} aria-hidden="true" />
              ) : (
                <span className={styles.num} aria-hidden="true">
                  {step.n}
                </span>
              )}
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.body}>{renderStepBody(step)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── What the report finds ── */}
      {findings && findings.length > 0 && (
        <div className={styles.finds}>
          <div className={styles.findsDivider} />
          <span className={styles.findsEyebrow}>What the report finds</span>
          <div className={styles.findsGrid}>
            {findings.map((f) => (
              <div key={f.n} className={styles.findItem}>
                <span className={styles.findNum}>{String(f.n).padStart(2, "0")}</span>
                <strong className={styles.findTitle}>{f.title}</strong>
                <p className={styles.findBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
