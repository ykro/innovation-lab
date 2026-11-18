"use client";

import Link from "next/link";
import ProjectTile from "@/components/ProjectTile";
import { featuredProjectIds, projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

const featured = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function FeaturedProjects() {
  const { t } = useI18n();

  return (
    <section id="proyectos" aria-labelledby="featured-title" className="border-b border-line bg-paper">
      <div className="shell pt-7 pb-12 sm:pt-9 sm:pb-16">
        <div className="flex flex-wrap items-end justify-between gap-x-7 gap-y-4">
          <div className="max-w-[45rem]">
            <h1 id="featured-title" className="text-balance text-[clamp(2.125rem,5vw,4rem)] leading-[1.07] font-semibold tracking-[-.035em] text-navy">
              {t("projects.title")}
            </h1>
            <p className="mt-2 max-w-[69ch] text-base leading-relaxed text-ink">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/proyectos" className="action action-primary">
              {t("projects.catalogCta")}
            </Link>
            <a
              href="https://github.com/innovationlabug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex min-h-11 items-center text-sm"
            >
              {t("social.githubLab")}
            </a>
          </div>
        </div>

        <ul className="mt-5 grid gap-5 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectTile
              key={project.id}
              project={project}
              prominent={index === 0}
              preload={index === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
