import { Button, IconCard } from '../ui';

const FEATURES = [
  { icon: '🚀', title: 'Missão',       description: 'Fomentar a tecnologia e o desenvolvimento profissional em Limeira e região.' },
  { icon: '👥', title: 'Comunidade',   description: 'Conectar pessoas de todas as áreas de TI num ambiente colaborativo e inclusivo.' },
  { icon: '💡', title: 'Inovação',     description: 'Incentivar a criatividade e o pensamento inovador entre os membros.' },
  { icon: '📚', title: 'Conhecimento', description: 'Palestras, workshops e eventos gratuitos abertos para toda a comunidade.' },
];

export function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">Quem somos</span>
            <h2>Sobre o <span className="gradient-text">DevLimeira</span></h2>
            <p>Somos uma comunidade feita por e para pessoas de TI: programadores, POs, QAs, PMs, designers e qualquer um que ame tecnologia e pessoas.</p>
            <p>Sem fins lucrativos, nosso objetivo é disseminar o conhecimento tecnológico em Limeira e região, conectar profissionais e fomentar o ecossistema tech local.</p>
            <p>Acreditamos que compartilhar conhecimento é a melhor forma de crescermos juntos — e que uma boa conversa depois de uma palestra vale ouro.</p>
            <Button scrollTo="contato">Faça parte da comunidade</Button>
          </div>

          <div className="about-visual">
            {FEATURES.map(f => (
              <IconCard key={f.title} {...f} variant="feature" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
