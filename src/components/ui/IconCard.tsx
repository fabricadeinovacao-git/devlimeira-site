interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  /**
   * "feature"     → left-aligned, 2×2 grid (About section)
   * "initiative"  → centre-aligned, 3-col grid (Initiatives section)
   */
  variant?: 'feature' | 'initiative';
}

/** Card with emoji icon, title and description. Two visual variants controlled by CSS classes. */
export function IconCard({ icon, title, description, variant = 'feature' }: IconCardProps) {
  if (variant === 'initiative') {
    return (
      <div className="initiative-card">
        <div className="initiative-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
