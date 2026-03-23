import { useScrollToTop } from '../../hooks/useScrollToTop';

export function BackToTop() {
  const visible = useScrollToTop();

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}
