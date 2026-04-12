"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const statuses: (Project["status"] | "all")[] = [
  "all",
  "in_progress",
  "finished",
  "transferred",
];

export default function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Project["status"] | "all">("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="proyectos" className="bg-light-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-navy sm:text-4xl">
          {t("projects.title")}
        </h2>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === s
                  ? "bg-navy text-white"
                  : "border border-border-light bg-white text-slate-secondary hover:border-navy/20 hover:text-navy"
              }`}
            >
              {s === "all" ? t("projects.filterAll") : t(`projects.status.${s}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
