import { useEffect, useState } from 'react';
import { newsArticles } from '../data/news';
import { contactEmail } from '../data/community';
import type { NewsCategory } from '../types';
import { PageHero, FilterTabs, CallToAction } from '../components/ui';
import { NewsCard } from '../components/cards';

const TABS = [
  { label: 'Todos',      value: 'all' },
  { label: 'Comunidade', value: 'comunidade' },
  { label: 'Evento',     value: 'evento' },
  { label: 'Parceria',   value: 'parceria' },
  { label: 'Tech',       value: 'tech' },
];

export function NewsPage() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Notícias — DevLimeira';
    window.scrollTo({ top: 0 });
  }, []);

  const filtered = newsArticles.filter(
    a => filter === 'all' || (a.category as NewsCategory) === filter,
  );

  return (
    <>
      <PageHero
        tag="Blog"
        title={<>Notícias da <span className="gradient-text">Comunidade</span></>}
        description="Novidades, resumos de eventos, parcerias e conteúdo tech direto do DevLimeira."
      />

      <section className="section">
        <div className="container">
          <FilterTabs tabs={TABS} active={filter} onChange={setFilter} />

          {filtered.length > 0 ? (
            <div className="news-full-grid">
              {filtered.map((article, i) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  featured={i === 0 && filter === 'all'}
                />
              ))}
            </div>
          ) : (
            <p className="empty-state">Nenhuma notícia encontrada para essa categoria.</p>
          )}

          <CallToAction
            title="Quer escrever para o blog?"
            description="Compartilhe seu conhecimento com a comunidade DevLimeira. Aceitamos artigos sobre tecnologia, carreira e cultura dev."
            buttonLabel="Enviar artigo"
            href={`mailto:${contactEmail}`}
          />
        </div>
      </section>
    </>
  );
}
