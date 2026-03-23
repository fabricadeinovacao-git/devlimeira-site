import type { CommunityEvent } from '../../types';
import { Tag, Button } from '../ui';

interface EventCardProps {
  event: CommunityEvent;
  /** "compact" = homepage row | "full" = events page card */
  variant?: 'compact' | 'full';
}

export function EventCard({ event, variant = 'compact' }: EventCardProps) {
  const cardClass = variant === 'full' ? 'event-card-full' : 'event-card';

  return (
    <article className={cardClass}>
      <div className="event-date" aria-label={`${event.day} de ${event.month}`}>
        <span className="day">{event.day}</span>
        <span className="month">{event.month}</span>
      </div>

      <div className="event-info">
        <Tag type={event.type} />
        <h3>{event.title}</h3>
        <p>{event.description}</p>

        <div className="event-meta">
          <span>📍 {event.location}</span>
          <span>🕐 {event.time}</span>
          {event.free && <span>🎟️ Gratuito</span>}
        </div>

        {event.type !== 'past' && (
          <Button variant="sm" scrollTo="contato">Confirmar presença</Button>
        )}
      </div>
    </article>
  );
}
