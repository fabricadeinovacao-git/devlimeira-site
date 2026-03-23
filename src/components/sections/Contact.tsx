import { useState, type FormEvent } from 'react';
import { socialLinks, contactEmail } from '../../data/community';
import { SectionHeader, Button, ContactItem, SocialIconLink } from '../ui';

interface FormState { name: string; email: string; message: string; }
const EMPTY: FormState = { name: '', email: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus('sent');
    setForm(EMPTY);
  }

  return (
    <section className="section section-alt" id="contato">
      <div className="container">
        <SectionHeader
          tag="Contato"
          title={<>Fale com a <span className="gradient-text">Comunidade</span></>}
          description="Tem alguma ideia, quer organizar um evento ou só dizer olá? Fala com a gente!"
        />
        <div className="contact-grid">
          <div>
            <div className="contact-block">
              <ContactItem icon="✉️" label="E-mail">
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </ContactItem>
              <ContactItem icon="📍" label="Localização">
                <p>Limeira, SP — Brasil</p>
              </ContactItem>
            </div>
            <div className="contact-block">
              <p className="social-section-label">Nos siga nas redes:</p>
              <div className="social-links">
                {socialLinks.map(link => (
                  <SocialIconLink key={link.name} {...link} />
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
            <div aria-live="polite" className="form-note">
              {status === 'sent' && <p className="form-success">Obrigado! Seu cliente de e-mail foi aberto. 🚀</p>}
            </div>
            <div className="form-group">
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Sua mensagem..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" full>Enviar mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
