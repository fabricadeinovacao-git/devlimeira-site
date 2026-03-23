import { upcomingEvents } from '../../data/events';
import { SectionHeader, Button } from '../ui';
import { EventCard } from '../cards';

export function EventsPreview() {
  const preview = upcomingEvents.slice(0, 3);

  return (
    <section className="section" id="eventos">
      <div className="container">
        <SectionHeader
          tag="Agenda"
          title={<>Próximos <span className="gradient-text">Eventos</span></>}
          description="Fique por dentro do que está por vir. Todos os eventos são gratuitos e abertos à comunidade."
        />
        <div className="events-grid">
          {preview.map(event => (
            <EventCard key={event.id} event={event} variant="compact" />
          ))}
        </div>
        <div className="section-cta">
          <Button variant="outline" to="/eventos">Ver todos os eventos →</Button>
        </div>
      </div>
    </section>
  );
}
