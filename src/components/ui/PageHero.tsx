interface PageHeroProps {
  tag?: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container">
        {tag && <span className="section-tag">{tag}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
