import { Link } from 'react-router-dom';

const FOOTER_NAV = [
  { label: 'Sobre',       href: '/#sobre',       route: false },
  { label: 'Iniciativas', href: '/#iniciativas',  route: false },
  { label: 'Eventos',     href: '/eventos',       route: true },
  { label: 'Notícias',    href: '/noticias',      route: true },
  { label: 'Contato',     href: '/#contato',      route: false },
];

const SOCIAL_FOOTER = [
  { label: 'Discord',   href: '#' },
  { label: 'WhatsApp',  href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'GitHub',    href: '#' },
  { label: 'YouTube',   href: '#' },
];

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" aria-label="DevLimeira">
              <img src="/images/logo.png" alt="DevLimeira" className="logo-img" />
            </Link>
            <p>Comunidade sem fins lucrativos de desenvolvedores de Limeira e região. Conectando pessoas e tecnologia desde 2021.</p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              {FOOTER_NAV.map(item => (
                <li key={item.href}>
                  {item.route ? (
                    <Link to={item.href}>{item.label}</Link>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Comunidade</h4>
            <ul>
              {SOCIAL_FOOTER.map(s => (
                <li key={s.label}>
                  <a href={s.href} rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 DevLimeira. Feito com ❤️ pela comunidade.</p>
          <p>Desenvolvido com React + TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
