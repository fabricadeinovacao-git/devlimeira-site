import type { NewsArticle } from '../types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'recap-devday-1',
    title: 'Recap: como foi o DevDay #01!',
    excerpt: 'O DevDay #01 da DevLimeira aconteceu no dia 14 de março no Espaço Elo e foi incrível! TypeScript, arquitetura, testes e muito networking. Confira os destaques.',
    category: 'evento',
    date: '2026-03-15',
    dateLabel: '15 Mar 2026',
    imageClass: 'news-img-1',
  },
  {
    id: 'lancamento',
    title: 'DevLimeira nasce para conectar desenvolvedores de Limeira e região',
    excerpt: 'Uma nova comunidade de tecnologia chegou à cidade! Conheça os objetivos, as iniciativas planejadas e como fazer parte desse movimento.',
    category: 'comunidade',
    date: '2026-02-10',
    dateLabel: '10 Fev 2026',
    imageClass: 'news-img-2',
  },
  {
    id: 'seja-palestrante',
    title: 'Quer palestrar no DevLimeira? Veja como participar!',
    excerpt: 'Estamos em busca de pessoas que queiram compartilhar conhecimento nos próximos encontros. Qualquer nível de experiência é bem-vindo — o importante é a vontade de trocar.',
    category: 'comunidade',
    date: '2026-03-18',
    dateLabel: '18 Mar 2026',
    imageClass: 'news-img-3',
  },
];
