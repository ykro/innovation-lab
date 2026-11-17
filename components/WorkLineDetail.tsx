"use client";

import ProjectTile from "@/components/ProjectTile";
import Link from "next/link";
import { workLines, type WorkLine } from "@/data/ecosystem";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

export default function WorkLineDetail({ line }: { line: WorkLine }) {
  const { t, locale } = useI18n();

  // Prioritize projects that involve non-director team members or multiple collaborators so the whole lab's work shines
  const lineProjects = projects
    .filter((p) => p.category === line.id)
    .sort((a, b) => {
      const aHasTeam = Number(
        (a.team ?? []).some((id) => id !== "adrian-catalan")
      );
      const bHasTeam = Number(
        (b.team ?? []).some((id) => id !== "adrian-catalan")
      );
      if (aHasTeam !== bHasTeam) return bHasTeam - aHasTeam;
      return b.date.localeCompare(a.date);
    });

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="shell flex-1 pt-9 pb-14 sm:pt-12 sm:pb-20"
    >
      <Link
        href="/#lineas"
        className="text-link mb-6 inline-flex min-h-11 items-center"
      >
        ← {t("projects.backHome")}
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
        <div className="max-w-3xl">
          <h1 className="page-title">{line.title[locale]}</h1>
          <p className="intro mt-3 text-ink">{line.description[locale]}</p>
        </div>
        <Link href="/proyectos" className="action bg-surface">
          {t("projects.catalogCta")}
        </Link>
      </div>

      {/* Navigation pills to switch between the 6 active work lines */}
      <nav aria-label={t("workLines.title")} className="mt-5 flex flex-wrap gap-2">
        {workLines.map((item) => {
          const active = item.slug === line.slug;
          return (
            <Link
              key={item.id}
              href={`/lineas/${item.slug}`}
              aria-current={active ? "page" : undefined}
              className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                active
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-surface text-navy hover:border-navy"
              }`}
            >
              {item.title[locale]}
            </Link>
          );
        })}
      </nav>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lineProjects.map((project) => <ProjectTile key={project.id} project={project} />)}
      </ul>
    </main>
  );
}
