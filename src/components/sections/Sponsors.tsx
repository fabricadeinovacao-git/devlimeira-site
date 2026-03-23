import { contactEmail } from '../../data/community';
import { SectionHeader, CallToAction } from '../ui';

const SPONSORS = [
  { name: 'Empresa Apoiadora 1', slug: 'sponsor-1' },
  { name: 'Empresa Apoiadora 2', slug: 'sponsor-2' },
  { name: 'Empresa Apoiadora 3', slug: 'sponsor-3' },
  { name: 'Empresa Apoiadora 4', slug: 'sponsor-4' },
];

export function Sponsors() {
  return (
    <section className="section" id="apoio">
      <div className="container">
        <SectionHeader
          tag="Apoiadores"
          title={<>Quem <span className="gradient-text">nos apoia</span></>}
          description="Empresas e organizações que acreditam na força da comunidade tech de Limeira."
        />
        <div className="sponsors-grid">
          {SPONSORS.map(s => (
            <div key={s.slug} className="sponsor-card">
              <span className="sponsor-placeholder">{s.name}</span>
            </div>
          ))}
        </div>
        <CallToAction
          title="Sua empresa quer apoiar a comunidade?"
          description="Entre em contato e descubra como sua empresa pode fazer parte do ecossistema tech de Limeira."
          buttonLabel="Quero apoiar"
          href={`mailto:${contactEmail}`}
        />
      </div>
    </section>
  );
}
