import type { SocialLink } from '../../types';

/** Social media pill link with SVG icon. Accepts a SocialLink object directly. */
export function SocialIconLink({ name, url, icon }: SocialLink) {
  return (
    <a
      href={url}
      className="social-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={icon} />
      </svg>
      <span>{name}</span>
    </a>
  );
}
