import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '../../hooks/useScrolled';
import { ThemeToggle } from '../ui/ThemeToggle';

const NAV_ITEMS = [
  { label: 'Sobre',      href: '/#sobre' },
  { label: 'Iniciativas', href: '/#iniciativas' },
  { label: 'Eventos',    href: '/eventos',   route: true },
  { label: 'Apoio',      href: '/#apoio' },
];

function scrollTo(id: string) {
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    closeMenu();
    if (pathname !== '/') {
      // React Router will navigate – scroll after navigation settles
      window.location.hash = '';
    }
    scrollTo(id);
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container">
        <Link to="/" className="logo" aria-label="DevLimeira — página inicial" onClick={closeMenu}>
          <img src="/images/logo.png" alt="DevLimeira" className="logo-img" />
        </Link>

        <nav
          className={`nav-links${menuOpen ? ' open' : ''}`}
          id="nav-links"
          role="navigation"
          aria-label="Menu principal"
        >
          {NAV_ITEMS.map(item => {
            if (item.route) {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            }
            const sectionId = item.href.replace('/#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={e => handleAnchorClick(e, sectionId)}
              >
                {item.label}
              </a>
            );
          })}
          <Link to="/#contato" className="btn-cta" onClick={e => handleAnchorClick(e, 'contato')}>
            Contato
          </Link>
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
