import { useEffect } from 'react';
import {
  Hero,
  About,
  Initiatives,
  EventsPreview,
  NewsPreview,
  Sponsors,
  Contact,
} from '../components/sections';

export function HomePage() {
  useEffect(() => {
    document.title = 'DevLimeira — Comunidade de Tecnologia de Limeira';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Initiatives />
      <EventsPreview />
      <NewsPreview />
      <Sponsors />
      <Contact />
    </>
  );
}
