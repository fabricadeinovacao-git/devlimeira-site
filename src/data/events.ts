import type { CommunityEvent } from '../types';

export const upcomingEvents: CommunityEvent[] = [];

export const pastEvents: CommunityEvent[] = [
  {
    id: 'devday-1',
    title: 'DevDay #01 — TypeScript no Desenvolvimento de Software',
    description: 'Primeiro encontro presencial da DevLimeira! Três palestras sobre TypeScript no mundo real: do domínio aos testes, NestJS e arquitetura, e como evitar bugs antes da produção.',
    day: 14,
    month: 'MAR',
    time: '09h00 – 12h00',
    location: 'Espaço Elo — Limeira/SP',
    type: 'past',
  },
];
