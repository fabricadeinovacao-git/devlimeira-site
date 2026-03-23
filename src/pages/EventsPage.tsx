import { useEffect, useState } from 'react';
import { upcomingEvents, pastEvents } from '../data/events';
import type { EventType } from '../types';
import { PageHero, FilterTabs, CallToAction } from '../components/ui';
import { EventCard } from '../components/cards';
import { contactEmail } from '../data/community';

const TABS = [
  { label: 'Todos',     value: 'all' },
  { label: 'DevDay',    value: 'meetup' },
  { label: 'Workshop',  value: 'workshop' },
  { label: 'Festival',  value: 'festival' },
  { label: 'Hackathon', value: 'hackathon' },
];

export function EventsPage() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Eventos — DevLimeira';
    window.scrollTo({ top: 0 });
  }, []);

  const matchFilter = (type: EventType) => filter === 'all' || type === filter;
  const filteredUpcoming = upcomingEvents.filter(e => matchFilter(e.type));
  const filteredPast     = filter === 'all' ? pastEvents : pastEvents.filter(e => e.type === filter);

  return (
    <>
      <PageHero
        tag="Agenda"
        title={<>Eventos <span className="gradient-text">DevLimeira</span></>}
        description="DevDays, workshops, hackathons e muito mais. Todos gratuitos, todos abertos à comunidade."
      />

      <section className="section">
        <div className="container">
          <FilterTabs tabs={TABS} active={filter} onChange={setFilter} />

          <h3 className="events-section-label">Próximos eventos</h3>
          {filteredUpcoming.length > 0 ? (
            <div className="events-full-grid">
              {filteredUpcoming.map(event => (
                <EventCard key={event.id} event={event} variant="full" />
              ))}
            </div>
          ) : (
            <p className="empty-state">Nenhum evento encontrado para esse filtro.</p>
          )}

          <h3 className="events-section-label" style={{ marginTop: '2.5rem' }}>Eventos anteriores</h3>
          {filteredPast.length > 0 ? (
            <div className="events-full-grid">
              {filteredPast.map(event => (
                <EventCard key={event.id} event={event} variant="full" />
              ))}
            </div>
          ) : (
            <p className="empty-state">Nenhum evento anterior encontrado.</p>
          )}

          <CallToAction
            title="Quer organizar um evento com a gente?"
            description="Entre em contato e vamos construir algo incrível juntos."
            buttonLabel="Fale conosco"
            href={`mailto:${contactEmail}`}
          />
        </div>
      </section>
    </>
  );
}
