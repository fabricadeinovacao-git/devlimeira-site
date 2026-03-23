// ── All shared TypeScript interfaces ────────────────────────

export type EventType = 'meetup' | 'workshop' | 'festival' | 'hackathon' | 'past';

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  day: number;
  month: string; // "ABR"
  time: string;
  location: string;
  type: EventType;
  free?: boolean;
}

export type NewsCategory = 'comunidade' | 'evento' | 'parceria' | 'tech';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;       // ISO: "2026-03-20"
  dateLabel: string;  // "20 Mar 2026"
  imageClass: string; // CSS class: "news-img-1" etc.
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Initiative {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // SVG path string
}
