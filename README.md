# Innovation Lab — Universidad Galileo

Landing page bilingue (ES/EN) para el Innovation Lab de Universidad Galileo.

**Live:** [innovationlab-ug.vercel.app](https://innovationlab-ug.vercel.app)

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **i18n** custom con React Context + JSON (`messages/es.json`, `messages/en.json`)
- **Deploy** en Vercel (auto-deploy desde `main`)

## Inicio rapido

```bash
npm install
npm run dev    # http://localhost:3000
```

## Estructura del proyecto

```
app/
  layout.tsx              Root layout (Montserrat, I18nProvider)
  page.tsx                Landing page (todas las secciones)
  globals.css             Tailwind theme + animaciones

components/
  Header.tsx              Navbar sticky + toggle de idioma
  Hero.tsx                Seccion principal con logo
  WhatWeDo.tsx            6 areas de tecnologia
  WhyInnovationLab.tsx    Texto editorial
  Projects.tsx            Grid filtrable por estado
  ProjectCard.tsx         Card con thumbnail
  Team.tsx                Director destacado + grid de asistentes
  TeamCard.tsx            Card con foto o iniciales
  Social.tsx              Redes sociales + CTA de contacto
  Footer.tsx              Copyright + iconos sociales
  ScrollAnimator.tsx      Fade-in on scroll (IntersectionObserver)
  LanguageToggle.tsx      Switch ES/EN

data/
  projects.ts             Array de 9 proyectos
  team.ts                 Array de 11 miembros

lib/
  i18n.tsx                Context provider + hook useI18n

messages/
  es.json                 Traducciones en espanol
  en.json                 Traducciones en ingles

content/
  projects-brief.md       Template para agregar proyectos
  staff-brief.md          Template para agregar miembros

scripts/
  import-brief.ts         Importar briefs a archivos .ts

public/images/
  logo-mobile.png         Logo del lab (vertical)
  logo-desktop.png        Logo del lab (horizontal)
  projects/               Thumbnails de proyectos
  staff/                  Fotos del equipo
```

## Agregar contenido

### Nuevo proyecto

1. Crear un `.md` en `content/` con el formato de `content/projects-brief.md`:

```markdown
## Mi Proyecto
- **ID**: mi-proyecto
- **Description (ES)**: Descripcion en espanol.
- **Description (EN)**: Description in English.
- **Technologies**: React, Firebase, TensorFlow
- **Status**: in_progress
- **Date**: 2026-04
- **Image**: mi-proyecto.jpg
```

2. Colocar la imagen en `public/images/projects/` (opcional)

3. Ejecutar:

```bash
npx tsx scripts/import-brief.ts content/mi-proyecto.md
```

### Nuevo miembro del equipo

1. Crear un `.md` en `content/` con el formato de `content/staff-brief.md`:

```markdown
## Maria Lopez
- **ID**: maria-lopez
- **Role**: assistant
- **Photo**: maria.jpg
- **Bio (ES)**: Investigadora en ML aplicado.
- **Bio (EN)**: Applied ML researcher.
- **LinkedIn**: https://www.linkedin.com/in/marialopez/
```

2. Colocar la foto en `public/images/staff/` (opcional)

3. Ejecutar:

```bash
npx tsx scripts/import-brief.ts content/maria-lopez.md
```

### Traducciones

Los textos de UI estan en `messages/es.json` y `messages/en.json`. Los proyectos y miembros tienen sus descripciones bilingues directamente en los archivos de data, no necesitan cambios en los JSON de mensajes.

## Comandos

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Dev server en localhost:3000 |
| `npm run build` | Build de produccion |
| `npm run lint` | ESLint |
| `npx tsx scripts/import-brief.ts <file.md>` | Importar brief a data |

## Deploy

El repo esta conectado a Vercel. Cada push a `main` genera deploy automatico.

```bash
vercel          # preview
vercel --prod   # produccion
```
