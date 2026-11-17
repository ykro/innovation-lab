"use client";

import ProjectTile from "@/components/ProjectTile";
import {
  featuredProjectIds,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";
import { setProjectFilters, useProjectFilters } from "@/lib/project-filters";

const statuses = ["finished", "in_progress", "archived"] as const;
const categories: ProjectCategory[] = [
  "physical_ai",
  "iot_hardware",
  "agents_llms",
  "health_fintech",
  "vision_spatial",
  "nlp_generative",
];

function searchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}|['’]/gu, "")
    .toLowerCase();
}

const orderedProjects = [...projects].sort((left, right) => {
  const leftFeaturedIdx = featuredProjectIds.indexOf(left.id);
  const rightFeaturedIdx = featuredProjectIds.indexOf(right.id);
  if (leftFeaturedIdx !== -1 && rightFeaturedIdx !== -1) {
    return leftFeaturedIdx - rightFeaturedIdx;
  }
  if (leftFeaturedIdx !== -1) return -1;
  if (rightFeaturedIdx !== -1) return 1;
  return (
    Number(Boolean(right.featured)) - Number(Boolean(left.featured)) ||
    right.date.localeCompare(left.date)
  );
});

export default function Projects() {
  const { t, locale } = useI18n();
  const filters = useProjectFilters();
  const query = filters.get("q") ?? "";
  const category = categories.find((entry) => entry === filters.get("linea")) ?? "all";
  const status = statuses.find((entry) => entry === filters.get("estado")) ?? "all";
  const detailSearch = new URLSearchParams();
  if (query.trim()) detailSearch.set("q", query);
  if (category !== "all") detailSearch.set("linea", category);
  if (status !== "all") detailSearch.set("estado", status);
  const detailSuffix = detailSearch.size ? `?${detailSearch}` : "";
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
    setProjectFilters({ q: "", linea: "", estado: "" });
    document.getElementById("project-search")?.focus();
  }

  return (
    <main
      id="main-content"
      className="shell flex-1 pt-9 pb-14 sm:pt-12 sm:pb-20"
      tabIndex={-1}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="page-title">{t("projects.catalogTitle")}</h1>
        <a
          href="https://github.com/innovationlabug"
          target="_blank"
          rel="noopener noreferrer"
          className="action bg-surface"
        >
          {t("social.githubLab")} ↗
        </a>
      </div>

      <div className="mt-6 grid gap-3 rounded-xl border border-line bg-surface p-3 sm:p-4 min-[380px]:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-end lg:gap-4">
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
            onChange={(event) => setProjectFilters({ q: event.target.value })}
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
            onChange={(event) => setProjectFilters({ linea: event.target.value })}
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
            onChange={(event) => setProjectFilters({ estado: event.target.value })}
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
        <p className="mt-5 rounded-xl border border-line bg-surface px-4 py-6 text-ink sm:px-5">{t("projects.empty")}</p>
      ) : (
        <ul className="mt-5 grid gap-5 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectTile
              key={project.id}
              project={project}
              href={`/proyectos/${project.id}${detailSuffix}`}
              showStatus
              prefetch={false}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
