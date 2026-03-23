import { Button } from './Button';

interface CallToActionProps {
  title: string;
  description?: string;
  buttonLabel: string;
  /** React Router route */
  to?: string;
  /** href (mailto, external) */
  href?: string;
  /** Same-page smooth scroll */
  scrollTo?: string;
  /** Wrapper element class — defaults to support-cta */
  className?: string;
}

/** Recurring CTA block: heading + description + button. */
export function CallToAction({
  title,
  description,
  buttonLabel,
  to,
  href,
  scrollTo,
  className = 'support-cta',
}: CallToActionProps) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <Button to={to} href={href} scrollTo={scrollTo}>
        {buttonLabel}
      </Button>
    </div>
  );
}
