# Innovation Lab Landing Page — Design Spec

## Context

The Innovation Lab at Universidad Galileo currently has an outdated website at innovacion.galileo.edu (jQuery SPA, 2016-era design). The director wants a modern, bilingual (ES/EN) landing page that properly communicates the lab's mission, showcases projects, introduces the team, and links to social media. The page must align with Universidad Galileo's institutional identity while feeling creative and contemporary.

## Visual Design

### Color Palette
- **Background**: White (`#ffffff`) and light gray (`#f8fafc`) alternating sections
- **Primary**: Universidad Galileo navy blue (`#0A1F44`) — headings, buttons, accents
- **Text**: Slate (`#334155` body, `#475569` secondary)
- **Borders/Cards**: Light gray (`#e2e8f0`)
- **Creative accents**: Subtle blue-to-cyan gradients for technology badges and decorative elements
- **NEVER use dark backgrounds for any section**

### Typography
- **Font**: Montserrat (300, 400, 500, 700 weights) — matches Galileo identity
- **Headings**: 700 weight, navy blue
- **Body**: 400 weight, slate
- **Scale**: Responsive, base 16px

### Components
- Cards: White bg, 1px border `#e2e8f0`, `border-radius: 1rem`, shadow `0 4px 12px rgba(0,0,0,0.05)`
- Buttons: Navy bg, white text, `border-radius: 14px`, bold, hover darkens
- Scroll animations: Subtle fade-in on section entry (CSS only, no JS library)

## Page Structure

### 1. Header / Navbar
- Logo: Innovation Lab wordmark + Universidad Galileo
- Nav links: Que Hacemos | Proyectos | Equipo | Contacto
- Language toggle: ES / EN switch (visible, accessible)
- Sticky on scroll

### 2. Hero Section
- Large heading: "Innovation Lab" + "Universidad Galileo"
- Tagline: "Donde la curiosidad se convierte en tecnologia" / "Where curiosity becomes technology"
- Brief sub-text about the lab's role
- CTA button: "Conoce nuestros proyectos" → scrolls to projects
- Background: Clean white with subtle geometric decorative elements (not images)

### 3. Que Hacemos (What We Do)
- Mission statement paragraph
- Grid of 6 technology area cards:
  - Machine Learning
  - Realidad Aumentada / Virtual (AR/VR)
  - Internet de las Cosas (IoT)
  - Impresion 3D
  - Drones
  - Vision por Computadora
- Each card: icon + title + 1-2 line description
- Background: Light gray section

### 4. Por Que un Lab de Innovacion (Why an Innovation Lab)
- 2-3 paragraphs on the importance of having an innovation lab in a university context
- Emphasis on: hands-on learning, prototyping methodology, entrepreneurship support, Guatemala's innovation potential
- Can include a relevant stat or quote
- Background: White

### 5. Proyectos (Projects)
- Filterable grid of project cards
- Each card: thumbnail placeholder, project name, short description, technology tags, status badge
- Initial projects (from current site):
  1. Pictance — Face recognition with neural networks
  2. Kotlinbots Hexapod — Android-controlled robot
  3. Tango — AR/VR with Google Tango
  4. TJBot — IBM Watson emotional robot
  5. ILStyle — Neural style transfer
  6. ILVision — Facial recognition with Cloud Vision
  7. ILDrone — Gesture-controlled drone
  8. OBDled — Arduino car RPM LED controller
  9. Leonardo GreenMoov — 3D printed telepresence robot
- Background: Light gray section

### 6. Equipo (Team)
- Director card (larger/featured): Photo placeholder, name, "Director", bio (Version 2), LinkedIn link
- Grid of assistant cards: Photo placeholder, name, "Asistente de Investigacion", brief role description
- Initial team:
  - Adrian Catalan — Director
  - Luis Jimenez — Projects Leader / Asistente de Investigacion
  - Pablo Galicia — Education Leader / Asistente de Investigacion
  - Holly Milian — Asistente de Investigacion
  - Catherine Batres — Asistente de Investigacion
  - Christian Martinez — Asistente de Investigacion
  - Emily Curin — Asistente de Investigacion
  - Stephanie Sosa — Asistente de Investigacion
  - Steven Marroquin — Asistente de Investigacion
  - Yoselin Mejia — Asistente de Investigacion
  - Andres Tobar — Asistente de Investigacion
- Background: White

### 7. Redes Sociales / Contacto
- Social media links with icons:
  - Facebook: facebook.com/InnovationLabUG
  - Instagram: instagram.com/innovationlabug
  - X/Twitter: twitter.com/InnovationLabUG
  - YouTube: youtube.com/channel/UC1_c36qbHQRF7TCLaMkGD_A
  - Linktree: linktr.ee/innovationlabug
- Contact info or CTA to reach out
- Background: Light gray

### 8. Footer
- Universidad Galileo affiliation
- Copyright
- Compact social icons repeat

## Internationalization (i18n)

- **Default language**: Spanish (ES)
- **Supported**: ES, EN
- **Toggle**: Visible switch in the header (not hidden in a dropdown)
- **Implementation**: JSON translation files (`es.json`, `en.json`)
- **URL strategy**: No URL change — client-side toggle with localStorage persistence
- **Scope**: All UI text, section headings, project descriptions, bios — everything translatable

## Content Management (Brief System)

Two markdown files for easy content updates without touching code:

### `content/projects-brief.md`
Template for adding new projects:
```markdown
## Project Name
- **Description (ES)**: ...
- **Description (EN)**: ...
- **Technologies**: tag1, tag2, tag3
- **Status**: In Progress | Finished | Transferred
- **Date**: Month Year
- **Image**: filename.jpg (place in public/images/projects/)
```

### `content/staff-brief.md`
Template for adding new team members:
```markdown
## Full Name
- **Role (ES)**: Asistente de Investigacion
- **Role (EN)**: Research Assistant
- **Bio (ES)**: Optional 1-2 sentence bio
- **Bio (EN)**: Optional 1-2 sentence bio
- **Photo**: filename.jpg (place in public/images/staff/)
- **LinkedIn**: URL (optional)
```

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Content**: Static JSON files (no database)
- **Deployment**: Vercel
- **Images**: Placeholder avatars/thumbnails initially (easy to replace with real photos)
- **Animations**: CSS-only (Tailwind animation utilities + intersection observer for scroll triggers)

## File Structure

```
innovation-lab/
  app/
    layout.tsx          # Root layout, Montserrat font, metadata
    page.tsx            # Main landing page
    globals.css         # Tailwind + custom styles
  components/
    Header.tsx          # Navbar + language toggle
    Hero.tsx
    WhatWeDo.tsx
    WhyInnovationLab.tsx
    Projects.tsx
    Team.tsx
    Social.tsx
    Footer.tsx
    LanguageToggle.tsx
    ProjectCard.tsx
    TeamCard.tsx
  lib/
    i18n.tsx            # i18n context provider + hook
  messages/
    es.json             # Spanish translations
    en.json             # English translations
  data/
    projects.ts         # Project data array
    team.ts             # Team data array
  content/
    projects-brief.md   # Brief template for new projects
    staff-brief.md      # Brief template for new staff
  public/
    images/
      projects/         # Project thumbnails
      staff/            # Team photos
  package.json
  tailwind.config.ts
  tsconfig.json
  next.config.ts
```

## Verification

1. `npm run dev` — page loads at localhost:3000
2. All 8 sections render correctly
3. Language toggle switches all text between ES and EN
4. Responsive: looks good on mobile (375px), tablet (768px), desktop (1280px+)
5. Project cards display all 9 projects with correct data
6. Team section shows director featured + 10 assistants
7. Social media links point to correct URLs
8. `npm run build` succeeds with no errors
9. Deploy to Vercel succeeds
