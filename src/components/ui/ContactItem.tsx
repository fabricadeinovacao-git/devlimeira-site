import type { ReactNode } from 'react';

interface ContactItemProps {
  /** Emoji icon */
  icon: string;
  /** Short label rendered as <h4> */
  label: string;
  /** Value — pass <a> for links, <p> for plain text */
  children: ReactNode;
}

/** Single row inside the contact info column: icon + label + value. */
export function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <div className="contact-item">
      <span className="contact-icon">{icon}</span>
      <div>
        <h4>{label}</h4>
        {children}
      </div>
    </div>
  );
}
