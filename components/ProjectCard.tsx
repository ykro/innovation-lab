"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import type { Project } from "@/data/projects";

const statusGlyph: Record<Project["status"], string> = {
  in_progress: "●",
  finished: "✓",
  archived: "—",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useI18n();

  const isArchived = project.status === "archived";
  const year = project.date.slice(0, 4);

  const card = (
    <article
      className={`group relative flex h-full flex-col border border-hairline bg-paper transition-colors hover:border-navy/40 ${
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
      </div>
    </article>
  );

  if (project.repo) {
    return (
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {card}
      </a>
    );
  }

  return card;
}
