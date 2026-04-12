# Innovation Lab Landing — CLAUDE.md

## Overview
Bilingual (ES/EN) landing page for the Innovation Lab at Universidad Galileo. Directed by Adrian Catalan.
Live at [innovationlab-ug.vercel.app](https://innovationlab-ug.vercel.app).
Repo: [github.com/ykro/innovation-lab](https://github.com/ykro/innovation-lab).

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Content**: Static data files (`data/projects.ts`, `data/team.ts`)
- **i18n**: Custom React context (`lib/i18n.tsx`) with JSON files (`messages/es.json`, `messages/en.json`)
- **Deploy**: Vercel (auto-deploy from `main`, domain `innovationlab-ug.vercel.app`)

## Visual Rules
- **NEVER use dark backgrounds** — always white (#ffffff) or light gray (#f8fafc)
- Primary color: Galileo navy blue `#0A1F44`
- Font: Montserrat (300, 400, 500, 700)
- Cards: white bg, `border-border-light`, rounded-2xl
- UI language: Spanish (Guatemala) default, English toggle
- Logo: use `/images/logo-mobile.png` with `invert` CSS class (original is white-on-dark)
- Hero: centered full-width text, logo as 192px watermark seal below CTA (opacity-15)

## File Structure
```
app/layout.tsx            — Root layout, Montserrat, I18nProvider
app/page.tsx              — Main landing (all sections)
app/globals.css           — Tailwind + custom theme + animations
components/               — Header, Hero, WhatWeDo, WhyInnovationLab, Projects, Team, Social, Footer, ScrollAnimator
lib/i18n.tsx              — i18n context + useI18n hook
messages/es.json          — Spanish translations
messages/en.json          — English translations
data/projects.ts          — Project data (9 projects, with optional image field)
data/team.ts              — Team data (11 members, with optional photo field)
content/projects-brief.md — Template for adding new projects
content/staff-brief.md    — Template for adding new staff
scripts/import-brief.ts   — Script to import .md briefs into .ts data files
public/images/            — Logos, project thumbnails, staff photos
docs/superpowers/specs/   — Design spec
```

## Adding Content
- **New project**: Create `.md` following `content/projects-brief.md`, run `npx tsx scripts/import-brief.ts <file>`
- **New team member**: Create `.md` following `content/staff-brief.md`, run `npx tsx scripts/import-brief.ts <file>`
- **Translations**: Update both `messages/es.json` and `messages/en.json`
- Images go in `public/images/projects/` or `public/images/staff/`

## Sections (page.tsx)
1. **Header** — Sticky navbar, logo, nav links, ES/EN toggle
2. **Hero** — Title, tagline, description, CTA, logo watermark
3. **Que Hacemos** — 6 technology areas (icon + text layout)
4. **Por Que un Lab** — 3 editorial paragraphs
5. **Proyectos** — Filterable grid (All/In Progress/Finished/Transferred) with thumbnails
6. **Equipo** — Featured director card + assistant grid (photos or initials)
7. **Contacto** — Social media links + email CTA
8. **Footer** — Logo, compact social icons, copyright

## Available Team Photos
Only 3 of 11 team photos exist on the original site: Adrian Catalan, Luis Jimenez, Holly Milian. Others show styled initials.

## Commands
```bash
npm run dev    # Dev server at localhost:3000
npm run build  # Production build
npm run lint   # ESLint
npx tsx scripts/import-brief.ts <file.md>  # Import brief to data
```
