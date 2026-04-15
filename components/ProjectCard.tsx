"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useI18n();

  const statusColors = {
    in_progress: "bg-accent-cyan/10 text-accent-cyan",
    finished: "bg-green-50 text-green-700",
    transferred: "bg-amber-50 text-amber-700",
  };

  const card = (
    <div className="animate-on-scroll flex h-full flex-col overflow-hidden rounded-2xl border border-border-light bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      {project.image && (
        <div className="relative h-40 w-full bg-light-bg">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[project.status]}`}
          >
            {t(`projects.status.${project.status}`)}
          </span>
          <span className="text-xs text-slate-secondary">
            {new Date(project.date).toLocaleDateString(locale, {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-navy">{project.name}</h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-secondary">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-navy/5 px-2 py-0.5 text-xs font-medium text-navy/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.repo) {
    return (
      <a href={project.repo} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return card;
}
