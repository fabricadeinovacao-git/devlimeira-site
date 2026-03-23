import type { EventType, NewsCategory } from '../../types';

type TagVariant = EventType | NewsCategory;

const variantClass: Record<TagVariant, string> = {
  meetup:    '',
  workshop:  'tag-workshop',
  festival:  'tag-festival',
  hackathon: 'tag-hackathon',
  past:      'tag-past',
  comunidade: '',
  evento:    'tag-evento',
  parceria:  'tag-parceria',
  tech:      'tag-tech',
};

const variantLabel: Record<TagVariant, string> = {
  meetup:    'Meetup',
  workshop:  'Workshop',
  festival:  'Festival',
  hackathon: 'Hackathon',
  past:      'Passado',
  comunidade: 'Comunidade',
  evento:    'Evento',
  parceria:  'Parceria',
  tech:      'Tecnologia',
};

interface TagProps {
  type: TagVariant;
  label?: string;
}

export function Tag({ type, label }: TagProps) {
  const cls = variantClass[type];
  return (
    <span className={`tag${cls ? ` ${cls}` : ''}`}>
      {label ?? variantLabel[type]}
    </span>
  );
}
