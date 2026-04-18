"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const statuses: (Project["status"] | "all")[] = [
  "all",
  "in_progress",
  "finished",
  "archived",
];

const statusPriority: Record<Project["status"], number> = {
  in_progress: 0,
  finished: 1,
  archived: 2,
};

const counts = statuses.reduce<Record<string, number>>((acc, s) => {
  if (s === "all") acc[s] = projects.filter((p) => p.status !== "archived").length;
  else acc[s] = projects.filter((p) => p.status === s).length;
  return acc;
}, {});

export default function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Project["status"] | "all">("all");
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const filtered =
    filter === "all"
      ? projects.filter((p) => p.status !== "archived")
      : projects.filter((p) => p.status === filter);

  const sorted = [...filtered].sort((a, b) => {
    const byStatus = statusPriority[a.status] - statusPriority[b.status];
    if (byStatus !== 0) return byStatus;
    return b.date.localeCompare(a.date);
  });

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % statuses.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + statuses.length) % statuses.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = statuses.length - 1;
    else return;
    e.preventDefault();
    setFilter(statuses[next]);
    buttonsRef.current[next]?.focus();
  };

  return (
    <section
      id="proyectos"
      className="relative border-b border-hairline bg-paper px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-12 grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-14">
          <div className="meta flex items-baseline gap-3">
            <span>§ 04</span>
            <span className="h-px w-8 bg-navy/30" />
            <span>{t("projects.overline")}</span>
          </div>
          <h2 className="display-soft text-[clamp(2.25rem,5.5vw,3.75rem)] text-navy">
            {t("projects.title")}
          </h2>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-navy/50">
            {String(sorted.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
        </header>

        <div
          role="tablist"
          aria-label={t("projects.title")}
          className="reveal mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-hairline pb-4"
        >
          {statuses.map((s, i) => {
            const active = filter === s;
            const label =
              s === "all" ? t("projects.filterAll") : t(`projects.status.${s}`);
            return (
              <button
                key={s}
                ref={(el) => { buttonsRef.current[i] = el; }}
                role="tab"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                onClick={() => setFilter(s)}
                onKeyDown={(e) => handleKey(e, i)}
                className={`group flex items-baseline gap-1.5 font-mono text-[12px] uppercase tracking-[0.06em] transition-colors ${
                  active
                    ? "text-navy"
                    : "text-ink-muted hover:text-navy"
                }`}
              >
                <span className={`text-[10px] ${active ? "text-navy" : "text-navy/30"}`}>
                  [{active ? "×" : " "}]
                </span>
                {label}
                <span className="text-navy/30 tabular-nums">
                  ({String(counts[s]).padStart(2, "0")})
                </span>
              </button>
            );
          })}
        </div>

        <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              total={sorted.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
