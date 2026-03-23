# DevLimeira — Contexto do Projeto para IA

Este arquivo descreve a arquitetura, convenções e regras do projeto para auxiliar IAs na manutenção e evolução do código.

---

## Visão Geral

Site estático da **comunidade DevLimeira** (desenvolvedores de Limeira/SP).
Stack: **Vite 5 + React 18 + TypeScript 5.6 + React Router v6**.
Sem backend, sem banco de dados, sem SSR. Deploy como SPA estática.

---

## Estrutura de Pastas

```
src/
│
├── styles/
│   └── global.css          # ÚNICA fonte de verdade para todos os estilos
│                           # Usa CSS Custom Properties para theming
│
├── types/
│   └── index.ts            # Todas as interfaces/types compartilhados
│
├── data/                   # Dados estáticos (substituem banco de dados)
│   ├── events.ts           # upcomingEvents[], pastEvents[]
│   ├── news.ts             # newsArticles[]
│   └── community.ts        # stats[], initiatives[], socialLinks[], contactEmail
│
├── context/
│   └── ThemeContext.tsx     # ThemeProvider + useTheme() hook
│
├── hooks/
│   ├── index.ts            # Barrel export de todos os hooks
│   ├── useScrolled.ts      # Retorna true quando scroll > threshold
│   ├── useParticles.ts     # Animação de partículas no canvas (Hero)
│   └── useScrollToTop.ts   # Controla visibilidade do botão BackToTop
│
├── components/
│   │
│   ├── ui/                 # Primitivos reutilizáveis
│   │   ├── index.ts        # Barrel export (use este ao importar)
│   │   ├── Button.tsx      # Botão/link unificado (veja API abaixo)
│   │   ├── CallToAction.tsx# Bloco CTA: título + descrição + botão
│   │   ├── IconCard.tsx    # Card com emoji, título e descrição (variant: feature|initiative)
│   │   ├── ContactItem.tsx # Linha de contato: ícone + label + children
│   │   ├── SocialIconLink.tsx # Link de rede social com SVG + nome
│   │   ├── Tag.tsx         # Pill badge para EventType | NewsCategory
│   │   ├── SectionHeader.tsx # Cabeçalho de seção: tag + h2 + descrição (centrado)
│   │   ├── FilterTabs.tsx  # Grupo de tabs de filtro
│   │   ├── PageHero.tsx    # Hero de páginas internas (Eventos, Notícias)
│   │   ├── ThemeToggle.tsx # Botão de alternância de tema (Sol/Lua)
│   │   ├── BackToTop.tsx   # Botão flutuante "voltar ao topo"
│   │   └── StatCounter.tsx # Contador animado com IntersectionObserver
│   │
│   ├── layout/             # Estrutura de página
│   │   ├── index.ts
│   │   ├── Navbar.tsx      # Header fixo com menu hambúrguer + ThemeToggle
│   │   └── Footer.tsx      # Rodapé com 3 colunas
│   │
│   ├── cards/              # Cards de conteúdo
│   │   ├── index.ts
│   │   ├── EventCard.tsx   # Card de evento (variant: compact|full)
│   │   └── NewsCard.tsx    # Card de notícia (prop: featured)
│   │
│   └── sections/           # Seções completas da HomePage
│       ├── index.ts
│       ├── Hero.tsx        # Seção hero com partículas + stats
│       ├── About.tsx       # Sobre o DevLimeira + feature cards
│       ├── Initiatives.tsx # Grid de iniciativas
│       ├── EventsPreview.tsx # Preview de 3 próximos eventos
│       ├── NewsPreview.tsx   # Preview de 3 últimas notícias
│       ├── Sponsors.tsx    # Grid de apoiadores + CTA
│       └── Contact.tsx     # Formulário + info de contato
│
└── pages/                  # Componentes de rota
    ├── HomePage.tsx        # Agrupa todas as sections da home
    ├── EventsPage.tsx      # Página /eventos com filtros
    └── NewsPage.tsx        # Página /noticias com filtros
```

---

## Roteamento

- **HashRouter** (não BrowserRouter) — compatível com deploy em CDN/hosting estático
- Rotas: `/` → HomePage, `/eventos` → EventsPage, `/noticias` → NewsPage
- `ScrollReset` em App.tsx rola para o topo em cada troca de rota

---

## Theming (Light / Dark Mode)

| Item | Detalhe |
|---|---|
| Atributo HTML | `data-theme="light"` ou `data-theme="dark"` no `<html>` |
| Prevenção de flash | Script inline em `index.html` (roda antes do React montar) |
| Persistência | `localStorage` chave `'dl-theme'` |
| Context | `ThemeProvider` em `src/context/ThemeContext.tsx` |
| Hook | `useTheme()` retorna `{ theme, toggleTheme }` |
| CSS | Variáveis CSS Custom Properties — ver seções `[data-theme="light"]` e `[data-theme="dark"]` em `global.css` |

**Nunca use cores hard-coded nos componentes.** Use sempre as variáveis CSS (ex: `var(--primary)`, `var(--bg-card)`, `var(--text-muted)`).

---

## CSS — Convenções

- **Um único arquivo:** `src/styles/global.css` — sem CSS Modules, sem Tailwind
- **Sem estilos inline nos componentes** exceto em casos pontuais documentados
- Classes seguem nomes semânticos, não BEM (`.section-alt`, não `.section--alt`)
- Para alternância de background em seções: `className="section section-alt"`
- Para centralizar CTA abaixo de grids: `className="section-cta"` (já definido no CSS)

### Variáveis Importantes

```css
/* Marca */
--primary, --primary-light, --primary-dark
--accent, --accent-light
--gradient, --gradient-text

/* Tema */
--bg, --bg-card, --bg-card-hover
--text, --text-muted, --text-faint
--border, --border-subtle
--shadow-card, --shadow-glow
```

---

## Componente `Button` — API

O componente `Button` (`src/components/ui/Button.tsx`) substitui todos os `<a className="btn ...">` e `<button className="btn ...">` inline.

```tsx
<Button variant="primary" scrollTo="contato">Texto</Button>     // scroll na mesma página
<Button variant="outline" to="/eventos">Texto</Button>           // React Router Link
<Button variant="primary" href="mailto:...">Texto</Button>       // link externo/mailto
<Button variant="sm" onClick={fn}>Texto</Button>                 // botão normal
<Button type="submit" full>Enviar</Button>                       // submit + largura 100%
```

| Prop | Tipo | Descrição |
|---|---|---|
| `variant` | `'primary' \| 'outline' \| 'sm'` | Estilo visual (default: `primary`) |
| `to` | `string` | React Router `<Link to>` |
| `href` | `string` | `<a href>` — para mailto, URLs externas |
| `scrollTo` | `string` | ID da seção para scroll suave na mesma página |
| `onClick` | `() => void` | Handler para `<button>` sem navegação |
| `full` | `boolean` | Adiciona `btn-full` (width: 100%) |
| `external` | `boolean` | Adiciona `target="_blank" rel="noopener noreferrer"` |
| `type` | `'button' \| 'submit' \| 'reset'` | Tipo do `<button>` (default: `button`) |

> **Nota:** `scrollTo` é apenas para scroll na mesma página. Para navegar entre páginas e rolar para uma seção, use `to` (navega) e deixe o usuário rolar, ou use `href="mailto:..."` para contato.

---

## Componente `CallToAction` — API

Bloco recorrente de CTA (fundo gradiente, centrado):

```tsx
<CallToAction
  title="Título"
  description="Descrição opcional"
  buttonLabel="Texto do botão"
  href="mailto:contato@devlimeira.com.br"     // ou to="/rota" ou scrollTo="id"
/>
```

CSS padrão: `.support-cta` (definido em `global.css`).

---

## Dados Estáticos

Para adicionar/editar eventos, notícias ou iniciativas, edite apenas os arquivos em `src/data/`:

| Arquivo | Exporta | Para adicionar |
|---|---|---|
| `events.ts` | `upcomingEvents`, `pastEvents` | Adicione item ao array correspondente |
| `news.ts` | `newsArticles` | Adicione item ao array |
| `community.ts` | `stats`, `initiatives`, `socialLinks`, `contactEmail` | Edite diretamente |

Os tipos estão em `src/types/index.ts` — consulte antes de adicionar campos.

---

## Como Rodar

```powershell
# Node.js está em C:\Program Files\nodejs mas não no PATH do sistema
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH

# Dev (http://localhost:5173)
.\node_modules\.bin\vite.cmd

# Build de produção (gera dist/)
.\node_modules\.bin\vite.cmd build

# Ou adicione Node ao PATH permanentemente e use npm normalmente:
# npm run dev / npm run build
```

---

## Regras de Manutenção

1. **Novos botões/links** → sempre use `<Button>`, nunca `<a className="btn ...">` inline
2. **Novo bloco CTA** → use `<CallToAction>` ao invés de copiar o HTML do `.support-cta`
3. **Novos cards de feature/iniciativa** → use `<IconCard variant="feature|initiative">`
4. **Novos imports de componentes** → prefira importar dos barrels (`import { X } from '../ui'`) não do caminho direto do arquivo
5. **Cores** → nunca hard-coded, sempre via CSS Custom Properties
6. **Estilos** → edite `global.css`, não use `style={{}}` em componentes
7. **Dados** → edite `src/data/`, nunca coloque dados hardcoded em componentes de seção (exceto constantes locais como `FEATURES` em About que são exclusivas daquela seção)
