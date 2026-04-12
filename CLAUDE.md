# Innovation Lab Landing — CLAUDE.md

## Overview
Bilingual (ES/EN) landing page for the Innovation Lab at Universidad Galileo. Directed by Adrian Catalan.

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Content**: Static data files (`data/projects.ts`, `data/team.ts`)
- **i18n**: Custom React context (`lib/i18n.tsx`) with JSON files (`messages/es.json`, `messages/en.json`)
- **Deploy**: Vercel

## Visual Rules
- **NEVER use dark backgrounds** — always white (#ffffff) or light gray (#f8fafc)
- Primary color: Galileo navy blue `#0A1F44`
- Font: Montserrat (300, 400, 500, 700)
- Cards: white bg, `border-border-light`, rounded-2xl, subtle shadow
- UI language: Spanish (Guatemala) default, English toggle

## File Structure
```
app/layout.tsx          — Root layout, Montserrat, I18nProvider
app/page.tsx            — Main landing (all sections)
app/globals.css         — Tailwind + custom theme + animations
components/             — Header, Hero, WhatWeDo, WhyInnovationLab, Projects, Team, Social, Footer, ScrollAnimator
lib/i18n.tsx            — i18n context + useI18n hook
messages/es.json        — Spanish translations
messages/en.json        — English translations
data/projects.ts        — Project data array (9 projects)
data/team.ts            — Team data array (11 members)
content/projects-brief.md — Template for adding new projects
content/staff-brief.md    — Template for adding new staff
docs/superpowers/specs/   — Design spec
```

## Adding Content
- **New project**: Follow template in `content/projects-brief.md`, add entry to `data/projects.ts`
- **New team member**: Follow template in `content/staff-brief.md`, add entry to `data/team.ts`
- **Translations**: Update both `messages/es.json` and `messages/en.json`

## Commands
```bash
npm run dev    # Dev server at localhost:3000
npm run build  # Production build
npm run lint   # ESLint
```
