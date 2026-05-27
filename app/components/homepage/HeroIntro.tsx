// app/components/homepage/HeroIntro.tsx

import Button from "../ui/Button";
import styles from "./HeroIntro.module.css";

interface HeroCta {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface HeroIntroProps {
  headline: string;
  lede?: string;
  headlineId?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  ghostCta?: HeroCta;
}

export default function HeroIntro({
  headline,
  lede,
  headlineId = "hero-heading",
  primaryCta,
  secondaryCta,
  ghostCta,
}: HeroIntroProps) {
  const hasRight = Boolean(lede || ghostCta);
  const hasCtas = Boolean(primaryCta || secondaryCta);

  return (
    <header className={styles.intro} data-has-right={hasRight}>
      <div className={styles.leftStack}>
        <h1 id={headlineId} className={styles.headline}>
          {headline}
        </h1>

        {hasCtas && (
          <div className={styles.ctaRow}>
            {primaryCta && (
              <Button
                as="link"
                href={primaryCta.href}
                variant="primary"
                aria-label={primaryCta.ariaLabel ?? primaryCta.label}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                as="link"
                href={secondaryCta.href}
                variant="secondary"
                aria-label={secondaryCta.ariaLabel ?? secondaryCta.label}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>

      {hasRight && (
        <div className={styles.right}>
          {lede && <p className={styles.lede}>{lede}</p>}
          {ghostCta && (
            <Button
              as="link"
              href={ghostCta.href}
              variant="ghost"
              aria-label={ghostCta.ariaLabel ?? ghostCta.label}
            >
              {ghostCta.label}
            </Button>
          )}
        </div>
      )}
    </header>
  );
}
