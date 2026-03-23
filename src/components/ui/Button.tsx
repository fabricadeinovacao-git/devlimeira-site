import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'sm';

interface ButtonProps {
  children: ReactNode;
  /** Visual style */
  variant?: ButtonVariant;
  /** React Router client-side navigation */
  to?: string;
  /** Regular href (mailto, external, etc.) */
  href?: string;
  /** Smooth-scroll to section with this id (same-page only) */
  scrollTo?: string;
  onClick?: () => void;
  /** Adds btn-full (width: 100%) */
  full?: boolean;
  /** Adds target="_blank" rel="noopener noreferrer" */
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

function buildClass(variant: ButtonVariant, full?: boolean, extra?: string): string {
  const base = variant === 'sm' ? 'btn-sm' : `btn btn-${variant}`;
  return [base, full ? 'btn-full' : '', extra ?? ''].filter(Boolean).join(' ');
}

/** Unified button/link component. Renders <Link>, <a>, or <button> based on props. */
export function Button({
  children,
  variant = 'primary',
  to,
  href,
  scrollTo,
  onClick,
  full,
  external,
  type = 'button',
  className,
}: ButtonProps) {
  const cls = buildClass(variant, full, className);

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  if (scrollTo) {
    return (
      <a
        href={`#${scrollTo}`}
        className={cls}
        onClick={e => {
          e.preventDefault();
          document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
