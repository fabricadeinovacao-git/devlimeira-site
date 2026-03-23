import { newsArticles } from '../../data/news';
import { SectionHeader, Button } from '../ui';
import { NewsCard } from '../cards';

export function NewsPreview() {
  const [featured, ...rest] = newsArticles.slice(0, 3);

  return (
    <section className="section section-alt" id="noticias">
      <div className="container">
        <SectionHeader
          tag="Blog"
          title={<>Últimas <span className="gradient-text">Notícias</span></>}
          description="Novidades da comunidade, resumos de eventos, parcerias e conteúdo tech."
        />
        <div className="news-grid">
          <NewsCard article={featured} featured />
          {rest.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
        <div className="section-cta">
          <Button variant="outline" to="/noticias">Ver todas as notícias →</Button>
        </div>
      </div>
    </section>
  );
}
