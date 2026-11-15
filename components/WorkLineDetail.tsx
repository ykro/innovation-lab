"use client";

import Image from "next/image";
import Link from "next/link";
import { workLines, type WorkLine } from "@/data/ecosystem";
import { projects } from "@/data/projects";
import { team } from "@/data/team";
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
          {t("projects.catalogCta")} ({projects.length})
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

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lineProjects.map((project) => {
          const headingId = `line-project-${project.id}`;
          const members = (project.team ?? [])
            .map((id) => team.find((m) => m.id === id))
            .filter((m): m is NonNullable<typeof m> => Boolean(m));

          return (
            <li key={project.id} className="flex min-w-0">
              <Link
                href={`/proyectos/${project.id}`}
                aria-labelledby={headingId}
                className="group flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-navy"
              >
                <div>
                  {project.image &&
                    project.image !== "/images/projects/default.png" && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-sand">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 100vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                  <div className="p-4 sm:p-5">
                    {project.category && (
                      <p className="text-xs font-semibold text-accent-dark">
                        {t(`projects.categories.${project.category}`)}
                      </p>
                    )}
                    <h2
                      id={headingId}
                      className="mt-1.5 text-lg font-semibold leading-snug text-navy group-hover:underline group-hover:underline-offset-4"
                    >
                      {locale === "en"
                        ? (project.nameEn ?? project.name)
                        : project.name}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink">
                      {project.description[locale]}
                    </p>
                  </div>
                </div>
                <div className="border-t border-line px-4 py-3 sm:px-5">
                  {members.length > 0 && (
                    <p className="text-xs leading-relaxed text-muted">
                      <strong className="font-semibold text-navy">
                        {t("projects.actions.builtBy")}:
                      </strong>{" "}
                      {members
                        .map(
                          (m) =>
                            m.shortName ??
                            m.name.split(/\s+/).slice(0, 2).join(" ")
                        )
                        .join(" · ")}
                    </p>
                  )}
                  <div className="mt-2 flex items-center justify-between text-xs font-semibold text-navy">
                    <span>{t("projects.viewProject")}</span>
                    <span className="text-accent-dark">→</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
