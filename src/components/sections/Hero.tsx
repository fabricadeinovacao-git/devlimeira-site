import { useRef } from 'react';
import { useParticles } from '../../hooks';
import { stats, COMMUNITY_FOUNDED } from '../../data/community';
import { pastEvents } from '../../data/events';
import { Button, StatCounter } from '../ui';

function getMonthsSinceFounding(): number {
  const now = new Date();
  return (
    (now.getFullYear() - COMMUNITY_FOUNDED.getFullYear()) * 12 +
    (now.getMonth() - COMMUNITY_FOUNDED.getMonth()) +
    1
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);

  const eventCount = pastEvents.length;
  const eventLabel = eventCount === 1 ? 'Evento realizado' : 'Eventos realizados';
  const months = getMonthsSinceFounding();
  const monthLabel = months === 1 ? 'Mês de comunidade' : 'Meses de comunidade';

  const allStats = [
    ...stats,
    { value: eventCount, suffix: '', label: eventLabel },
    { value: months, suffix: '', label: monthLabel },
  ];

  return (
    <section className="hero" id="hero" aria-label="Apresentação">
      <canvas ref={canvasRef} id="particles-canvas" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-badge">📍 Limeira &amp; Região • SP</div>

        <h1>
          Comunidade que{' '}
          <span className="gradient-text">conecta pessoas</span>
          <br />e tecnologia
        </h1>

        <p>
          Somos uma comunidade sem fins lucrativos de desenvolvedores, designers,
          PMs, QAs e entusiastas de tecnologia de Limeira e região. Juntos,
          compartilhamos conhecimento e crescemos.
        </p>

        <div className="hero-cta">
          <Button scrollTo="sobre">Conheça a comunidade</Button>
          <Button variant="outline" to="/eventos">Ver próximos eventos</Button>
        </div>

        <div className="hero-stats" aria-label="Números da comunidade">
          {allStats.map(s => (
            <div key={s.label} className="stat">
              <div className="stat-value-row">
                <StatCounter value={s.value} className="stat-num" />
                {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
              </div>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
