# Innovation Lab Landing — CLAUDE.md

## Overview
Bilingual (ES/EN) landing page and project showcase for the **Innovation Lab** at **Universidad Galileo (FISICC)**, founded in **December 2012** and directed by **Ing. Adrián Catalán**.
Live at [innovationlab-ug.vercel.app](https://innovationlab-ug.vercel.app).

## Stack
- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS v4 (`app/globals.css`)
- **Language**: TypeScript 5
- **Content**: Static typed data modules (`data/projects.ts`, `data/team.ts`, `data/ecosystem.ts`)
- **i18n**: Custom React context (`lib/i18n.tsx`) with JSON dictionaries (`messages/es.json`, `messages/en.json`)

## Design Principles
1. **Strict Light Mode**: Warm paper background (`#f8f7f3`), elevated warm white cards (`#fdfcf9`), deep navy typography (`#14283b`), and terracotta/vermilion primary accents (`#a13926`). Never use dark mode or neon gradients.
2. **Team-First Project Showcase**: The home page and `/proyectos` catalog showcase prototypes, hardware, robotics, and AI systems built across the entire Innovation Lab team (staff researchers, makers, and student volunteers).
3. **Lab GitHub as Primary Repository Link**: Institutional links point to `https://github.com/innovationlabug`. Individual project pages (`/proyectos/[id]`) link to their specific repositories, live demos, and evaluation reports.

## Routes & Sections
- **`/` (`app/page.tsx`)**:
  1. `FeaturedProjects.tsx` (`#proyectos`) — Coral showcase of flagship projects built across the Lab's teams, linking to `/proyectos` and `/proyectos/[id]`.
  2. `WhatWeDo.tsx` (`#sobre-el-lab`) — Overview of the Lab, its trajectory since December 2012, its 6 R&D lines, and student clubs.
  3. `Team.tsx` (`#equipo`) — Directory of all 16 active Lab members (Director, Staff Researchers/Makers/Designers, and Student Volunteers).
  4. `VolunteerRequest.tsx` (`#voluntariado`) — Request for Volunteers detailing the 8 open areas for new student volunteers.
  5. `Social.tsx` (`#contacto`) — Collaboration callout and official Innovation Lab channels (`github.com/innovationlabug`, social links).
- **`/proyectos` (`app/proyectos/page.tsx` -> `components/Projects.tsx`)**:
  - Full searchable and filterable catalog of all 50 Lab projects with team attributions.
- **`/proyectos/[id]` (`app/proyectos/[id]/page.tsx` -> `components/ProjectDetail.tsx`)**:
  - Dedicated static detail page per project with live demo, repository, articles, technical explanation, team credits, and gallery.
