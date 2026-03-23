import { useEffect, useState } from 'react';

/** Returns true when the page has scrolled past `threshold` px (used for back-to-top). */
export function useScrollToTop(threshold = 400): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return visible;
}
