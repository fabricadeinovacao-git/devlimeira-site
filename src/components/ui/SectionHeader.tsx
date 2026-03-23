interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  description?: string;
}

export function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {tag && <span className="section-tag">{tag}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
