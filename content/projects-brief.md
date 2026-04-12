# Projects Brief — Innovation Lab

Use this template to add new projects. Copy a block below, fill it out, and add the data to `data/projects.ts`.

---

## [Project Name]
- **ID**: kebab-case-id
- **Description (ES)**: Descripcion del proyecto en espanol.
- **Description (EN)**: Project description in English.
- **Technologies**: tag1, tag2, tag3
- **Status**: in_progress | finished | transferred
- **Date**: YYYY-MM (e.g., 2024-03)
- **Image**: filename.jpg (place in public/images/projects/)

---

### Example entry for `data/projects.ts`:

```typescript
{
  id: "project-name",
  name: "Project Name",
  description: {
    es: "Descripcion en espanol.",
    en: "Description in English.",
  },
  technologies: ["Tech1", "Tech2", "Tech3"],
  status: "in_progress",
  date: "2024-03",
},
```
