"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import type { Project } from "@/data/projects";

const statusGlyph: Record<Project["status"], string> = {
  in_progress: "●",
  finished: "✓",
  archived: "—",
};

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index?: number;
  total?: number;
}) {
  const { locale, t } = useI18n();

  const isArchived = project.status === "archived";
  const year = project.date.slice(0, 4);
  const indexLabel =
    index !== undefined && total !== undefined
      ? `#${String(index).padStart(2, "0")}/${String(total).padStart(2, "0")}`
      : null;

  const card = (
    <article
      className={`group relative flex h-full flex-col border border-hairline bg-paper transition-colors hover:border-navy/40 focus-within:border-navy/40 ${
        isArchived ? "opacity-65" : ""
      }`}
    >
      {project.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-hairline bg-paper-deep">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
              isArchived ? "grayscale" : ""
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {indexLabel && (
            <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.08em] text-navy/60 bg-paper/85 px-1.5 py-0.5">
              {indexLabel}
            </div>
          )}
          {project.repo && (
            <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center bg-paper/85 text-navy opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-navy/50">
          <span className="flex items-center gap-1.5">
            <span className="text-navy/70">{statusGlyph[project.status]}</span>
            {t(`projects.status.${project.status}`)}
          </span>
          <span className="tabular-nums">{year}</span>
        </div>

        <h3 className="display-soft text-xl text-navy">{project.name}</h3>

        <p className="flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-hairline pt-3 font-mono text-[10px] uppercase tracking-[0.06em] text-navy/60">
          {project.technologies.map((tech, i) => (
            <span key={tech} className="flex items-center gap-3">
              {i > 0 && <span className="text-navy/20">·</span>}
              {tech}
            </span>
          ))}
        </div>

        {project.repo && (
          <div className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] group-focus-within:[grid-template-rows:1fr]">
            <div className="min-h-0">
              <p className="border-t border-hairline pt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-navy/60">
                → repo disponible
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );

  if (project.repo) {
    return (
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-none focus:outline-none"
        aria-label={`${project.name} — ${t(`projects.status.${project.status}`)}`}
      >
        {card}
      </a>
    );
  }

  return card;
}
