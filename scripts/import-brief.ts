#!/usr/bin/env npx tsx
/**
 * import-brief.ts — Reads a filled-in markdown brief and appends an entry
 * to the corresponding TypeScript data file.
 *
 * Usage:
 *   npx tsx scripts/import-brief.ts content/new-project.md
 *   npx tsx scripts/import-brief.ts content/new-member.md
 *
 * The script auto-detects the brief type (project vs staff) from the
 * fields present in the markdown.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function die(msg: string): never {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

function parseFields(content: string): Record<string, string> {
  const fields: Record<string, string> = {};

  // Extract name from ## heading
  const heading = content.match(/^##\s+(.+)$/m);
  if (heading) fields.name = heading[1].trim();

  // Extract **Key**: Value pairs
  const pairs = content.matchAll(/\*\*(.+?)\*\*:\s*(.+)/g);
  for (const [, key, value] of pairs) {
    fields[key.trim()] = value.trim();
  }

  return fields;
}

function splitSections(content: string): string[] {
  // Split on ## headings, keeping each section with its heading
  const sections: string[] = [];
  const parts = content.split(/(?=^## )/m);
  for (const part of parts) {
    if (/^## .+/m.test(part)) {
      sections.push(part.trim());
    }
  }
  return sections;
}

function isProjectBrief(fields: Record<string, string>): boolean {
  return "Technologies" in fields || "Status" in fields;
}

function buildProjectEntry(fields: Record<string, string>): string {
  const id = fields.ID || fields.name.toLowerCase().replace(/\s+/g, "-");
  const name = fields.name;
  const descEs = fields["Description (ES)"] || "";
  const descEn = fields["Description (EN)"] || "";
  const techs = (fields.Technologies || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const status = (fields.Status || "in_progress").trim();
  const date = fields.Date || new Date().toISOString().slice(0, 7);
  const image = fields.Image;

  const lines = [
    `  {`,
    `    id: "${id}",`,
    `    name: "${name}",`,
    `    description: {`,
    `      es: "${descEs}",`,
    `      en: "${descEn}",`,
    `    },`,
    `    technologies: [${techs.map((t) => `"${t}"`).join(", ")}],`,
    `    status: "${status}",`,
    `    date: "${date}",`,
  ];

  if (image) {
    lines.push(`    image: "/images/projects/${image}",`);
  }

  const repo = fields.Repo;
  if (repo) {
    lines.push(`    repo: "${repo}",`);
  }

  lines.push(`  },`);
  return lines.join("\n");
}

function buildStaffEntry(fields: Record<string, string>): string {
  const id =
    fields.ID || fields.name.toLowerCase().replace(/\s+/g, "-");
  const name = fields.name;
  const role = (fields.Role || "assistant").trim();
  const photo = fields.Photo;
  const bioEs = fields["Bio (ES)"];
  const bioEn = fields["Bio (EN)"];
  const linkedin = fields.LinkedIn;

  const lines = [
    `  {`,
    `    id: "${id}",`,
    `    name: "${name}",`,
    `    role: "${role}",`,
  ];

  if (photo) {
    lines.push(`    photo: "/images/staff/${photo}",`);
  }

  if (bioEs && bioEn) {
    lines.push(`    bio: {`);
    lines.push(`      es: "${bioEs}",`);
    lines.push(`      en: "${bioEn}",`);
    lines.push(`    },`);
  }

  if (linkedin) {
    lines.push(`    linkedin: "${linkedin}",`);
  }

  lines.push(`  },`);
  return lines.join("\n");
}

function insertEntry(filePath: string, entry: string): void {
  const content = readFileSync(filePath, "utf-8");

  // Find the last `];` which closes the array
  const closingIndex = content.lastIndexOf("];");
  if (closingIndex === -1) {
    die(`Could not find closing ]; in ${filePath}`);
  }

  const before = content.slice(0, closingIndex);
  const after = content.slice(closingIndex);

  const updated = before + entry + "\n" + after;
  writeFileSync(filePath, updated, "utf-8");
}

// --- Main ---

const briefPath = process.argv[2];
if (!briefPath) {
  die("Usage: npx tsx scripts/import-brief.ts <path-to-brief.md>");
}

const fullPath = resolve(briefPath);
if (!existsSync(fullPath)) {
  die(`File not found: ${fullPath}`);
}

const content = readFileSync(fullPath, "utf-8");
const sections = splitSections(content);

// Skip template sections (contain placeholder text)
const realSections = sections.filter(
  (s) => !s.includes("[Nombre del Proyecto]") && !s.includes("[Nombre Completo]")
);

if (realSections.length === 0) {
  die("No valid ## sections found in the brief file.");
}

let added = 0;
for (const section of realSections) {
  const fields = parseFields(section);

  if (!fields.name) continue;

  if (isProjectBrief(fields)) {
    const entry = buildProjectEntry(fields);
    const target = resolve(root, "data/projects.ts");
    insertEntry(target, entry);
    console.log(`+ Project: "${fields.name}"`);
  } else {
    const entry = buildStaffEntry(fields);
    const target = resolve(root, "data/team.ts");
    insertEntry(target, entry);
    console.log(`+ Member: "${fields.name}"`);
  }
  added++;
}

console.log(`\nDone: ${added} entries added.`);
console.log(
  "Remember to also update messages/es.json and messages/en.json if needed."
);
