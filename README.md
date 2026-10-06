# Portfolio — Research. Build. Teach.

Personal CV & portfolio website. Static, built with **Astro + TypeScript + Tailwind CSS**, ready to deploy on **Vercel**.

## Run locally

Requires **Node.js 20+**.

```bash
npm install
npm run dev        # http://localhost:4321
```

Other commands:

```bash
npm run check      # TypeScript & Astro check
npm run build      # check + build static site to /dist
npm run preview    # preview the build
```

## Edit content

All content lives in **`src/data/portfolio.ts`**. Replace every `[PLACEHOLDER]` with real information.
Images go in `public/images/`.

## Design system

Preview all components at **`/styleguide`** (not indexed, not in navigation).

| Component | Use |
|---|---|
| `PaperCard` | Base paper surface (plain / lined / grid), optional tape, tilt, hover lift |
| `StickyNote` | Short notes, stats, insights |
| `Tape` | Decorative masking tape |
| `HandNote` | Handwritten annotation (labels only, never paragraphs) |
| `Highlight` | Highlighter marker — use sparingly |
| `Arrow` | Hand-drawn arrows |
| `SectionLabel` | Small label above section titles |
| `Button` | Primary / secondary / ghost |
| `Stamp` | Status stamp, e.g. publication status |
| `Tag` | Tech stack / keyword chip |
| `PhotoFrame` | Screenshot / photo frame with placeholder state |

Rules: tilt max 1deg (halved on mobile); muted accents are for decoration only — use `*-ink` colours for text;
all motion respects `prefers-reduced-motion`.

## Structure

```
src/
├── components/   # Layout components (Section, Header, Footer)
│   └── ui/       # Scrapbook components (PaperCard, StickyNote, Tape, ...)
├── data/         # portfolio.ts (content) + types.ts
├── layouts/      # BaseLayout (head, header, footer)
├── lib/          # helpers (placeholder detection, tilt/colour tokens)
├── pages/        # index.astro
└── styles/       # global.css (tokens) + scrapbook.css (component styles)
public/
└── images/
```

## Deploy (Vercel)

Import the repo on Vercel — the Astro preset is detected automatically
(build: `npm run build`, output: `dist`). Then set `site` in `astro.config.mjs` to your domain.
