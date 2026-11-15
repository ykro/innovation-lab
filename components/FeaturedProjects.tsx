"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjectIds, projects } from "@/data/projects";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";

const featured = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const arrow = (
  <svg
    aria-hidden="true"
    className="size-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
  >
    <path
      d="M4 12h15m-6-6 6 6-6 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FeaturedProjects() {
  const { t, locale } = useI18n();

  return (
    <section
      id="proyectos"
      aria-labelledby="featured-title"
      className="border-b border-line bg-paper"
    >
      <div className="shell pt-9 pb-12 sm:pt-12 sm:pb-16">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              {t("projects.overline")}
            </p>
            <h1 id="featured-title" className="page-title mt-1.5">
              {t("projects.title")}
            </h1>
            <p className="intro mt-3 text-ink">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/proyectos" className="action action-primary">
              {t("projects.catalogCta")} ({projects.length})
              {arrow}
            </Link>
            <a
              href="https://github.com/innovationlabug"
              target="_blank"
              rel="noopener noreferrer"
              className="action bg-surface"
            >
              {t("social.githubLab")} ↗
            </a>
          </div>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => {
            const titleId = `featured-${project.id}`;
            const title =
              locale === "en"
                ? (project.nameEn ?? project.name)
                : project.name;
            const members = (project.team ?? [])
              .map((id) => team.find((m) => m.id === id))
              .filter((m): m is NonNullable<typeof m> => Boolean(m));

            return (
              <li key={project.id} className="flex">
                <Link
                  href={`/proyectos/${project.id}`}
                  aria-labelledby={titleId}
                  className="group flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-navy"
                >
                  <div>
                    {project.image &&
                    project.image !== "/images/projects/default.png" ? (
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-sand">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 100vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div className="border-b border-line bg-sand px-4 py-3">
                        <span className="text-xs font-semibold text-accent-dark">
                          {project.challengeBadge?.[locale] ??
                            (project.category
                              ? t(`projects.categories.${project.category}`)
                              : "")}
                        </span>
                      </div>
                    )}

                    <div className="p-4 sm:p-5">
                      {project.image &&
                        project.image !== "/images/projects/default.png" && (
                          <p className="mb-1.5 text-xs font-semibold text-accent-dark">
                            {project.challengeBadge?.[locale] ??
                              (project.category
                                ? t(`projects.categories.${project.category}`)
                                : "")}
                          </p>
                        )}
                      <h2
                        id={titleId}
                        className="text-lg font-semibold leading-snug text-navy group-hover:underline group-hover:underline-offset-4"
                      >
                        {title}
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
                      <span className="text-accent-dark">{arrow}</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
