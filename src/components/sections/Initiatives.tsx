import { initiatives } from '../../data/community';
import { SectionHeader, IconCard } from '../ui';

export function Initiatives() {
  return (
    <section className="section section-alt" id="iniciativas">
      <div className="container">
        <SectionHeader
          tag="O que fazemos"
          title={<>Nossas <span className="gradient-text">Iniciativas</span></>}
          description="Diversas formas de aprendizado, conexão e colaboração para toda a comunidade."
        />
        <div className="initiatives-grid">
          {initiatives.map(ini => (
            <IconCard key={ini.title} {...ini} variant="initiative" />
          ))}
        </div>
      </div>
    </section>
  );
}
