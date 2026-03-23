import type { NewsArticle } from '../../types';
import { Tag } from '../ui';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  return (
    <article className={`news-card${featured ? ' news-card--featured' : ''}`}>
      <div
        className={`news-img ${article.imageClass}`}
        role="img"
        aria-label={`Imagem: ${article.title}`}
      />
      <div className="news-content">
        <Tag type={article.category} />
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="news-footer">
          <time className="news-date" dateTime={article.date}>
            {article.dateLabel}
          </time>
          <a href="#" className="read-more">Ler mais →</a>
        </div>
      </div>
    </article>
  );
}
