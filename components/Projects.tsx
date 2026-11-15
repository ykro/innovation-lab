"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  featuredProjectIds,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";

const statuses = ["finished", "in_progress", "archived"] as const;
const categories: ProjectCategory[] = [
  "agents_llms",
  "physical_ai",
  "health_fintech",
  "iot_hardware",
  "vision_creative",
];

function searchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}|['’]/gu, "")
    .toLowerCase();
}

function projectImage(project: Project) {
  return project.image === "/images/projects/default.png"
    ? undefined
    : project.image;
}

const orderedProjects = [...projects].sort(
  (left, right) =>
    Number(featuredProjectIds.includes(right.id)) -
      Number(featuredProjectIds.includes(left.id)) ||
    Number(Boolean(right.featured)) - Number(Boolean(left.featured)) ||
    right.date.localeCompare(left.date)
);

export default function Projects() {
  const { t, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Project["status"] | "all">("all");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const terms = searchText(query).trim().split(/\s+/).filter(Boolean);
  const hasFilters = terms.length > 0 || status !== "all" || category !== "all";

  const visible = orderedProjects.filter((project) => {
    if (status !== "all" && project.status !== status) return false;
    if (category !== "all" && project.category !== category) return false;
    if (terms.length === 0) return true;

    const memberNames = (project.team ?? [])
      .map((id) => {
        const m = team.find((entry) => entry.id === id);
        return m ? `${m.name} ${m.shortName ?? ""}` : "";
      })
      .join(" ");

    const keywords = searchText(
      [
        project.name,
        project.nameEn,
        project.description[locale],
        memberNames,
        ...project.technologies,
      ]
        .filter(Boolean)
        .join(" ")
    );
    return terms.every((term) => keywords.includes(term));
  });

  function reset() {
    setQuery("");
    setStatus("all");
    setCategory("all");
    document.getElementById("project-search")?.focus();
  }

  return (
    <main
      id="main-content"
      className="shell flex-1 pt-9 pb-14 sm:pt-12 sm:pb-20"
      tabIndex={-1}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
            {t("projects.overline")}
          </p>
          <h1 className="page-title mt-1">{t("projects.title")}</h1>
        </div>
        <a
          href="https://github.com/innovationlabug"
          target="_blank"
          rel="noopener noreferrer"
          className="action bg-surface"
        >
          {t("social.githubLab")} ↗
        </a>
      </div>

      <div className="mt-6 grid gap-3 border-y border-line py-4 min-[380px]:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-end lg:gap-4">
        <div className="min-w-0 min-[380px]:col-span-2 lg:col-span-1">
          <label
            htmlFor="project-search"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            {t("projects.search")}
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("projects.searchPlaceholder")}
            className="min-h-11 w-full rounded-md border border-control bg-surface px-3 text-base placeholder:text-muted"
          />
        </div>
        <div className="min-w-0">
          <label
            htmlFor="project-area"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            {t("projects.area")}
          </label>
          <select
            id="project-area"
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as typeof category)
            }
            className="min-h-11 w-full rounded-md border border-control bg-surface px-3"
          >
            <option value="all">{t("projects.categoryAll")}</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {t(`projects.categories.${item}`)}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label
            htmlFor="project-status"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            {t("projects.state")}
          </label>
          <select
            id="project-status"
            value={status}
            onChange={(event) => setStatus(event.target.value as typeof status)}
            className="min-h-11 w-full rounded-md border border-control bg-surface px-3"
          >
            <option value="all">{t("projects.statusAll")}</option>
            {statuses.map((item) => (
              <option key={item} value={item}>
                {t(`projects.status.${item}`)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={reset}
          disabled={!hasFilters && query.length === 0}
          className="text-link min-h-11 w-fit cursor-pointer text-sm disabled:hidden lg:disabled:invisible lg:disabled:block"
        >
          {t("projects.clear")}
        </button>
      </div>
      <p role="status" className="sr-only">
        {hasFilters &&
          t(visible.length ? "projects.filtered" : "projects.empty")}
      </p>
      {visible.length === 0 ? (
        <p className="py-8 text-ink">{t("projects.empty")}</p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => {
            const src = projectImage(project);
            const headingId = `catalog-${project.id}`;
            const members = (project.team ?? [])
              .map((id) => team.find((m) => m.id === id))
              .filter((m): m is NonNullable<typeof m> => Boolean(m));

            return (
              <li key={project.id} className="flex min-w-0">
                <Link
                  href={`/proyectos/${project.id}`}
                  aria-labelledby={headingId}
                  className="group flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-navy"
                  prefetch={false}
                >
                  <div>
                    {src && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-sand">
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 100vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-5">
                      <p className="text-xs font-semibold text-accent-dark">
                        {project.challengeBadge?.[locale] ??
                          (project.category
                            ? t(`projects.categories.${project.category}`)
                            : t(`projects.status.${project.status}`))}
                      </p>
                      <h2
                        id={headingId}
                        className="mt-1.5 text-lg font-semibold leading-snug text-navy group-hover:underline group-hover:underline-offset-4"
                      >
                        {locale === "en"
                          ? (project.nameEn ?? project.name)
                          : project.name}
                      </h2>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {t(`projects.status.${project.status}`)}
                        {project.category && (
                          <> · {t(`projects.categories.${project.category}`)}</>
                        )}
                      </p>
                      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink">
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
      )}
    </main>
  );
}
