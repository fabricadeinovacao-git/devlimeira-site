import { useRef } from 'react';
import { useParticles } from '../../hooks';
import { stats } from '../../data/community';
import { Button, StatCounter } from '../ui';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);

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
          {stats.map(s => (
            <div key={s.label} className="stat">
              <div className="stat-value-row">
                <StatCounter value={s.value} className="stat-num" />
                <span className="stat-suffix">{s.suffix}</span>
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
