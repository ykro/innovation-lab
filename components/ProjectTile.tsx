"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";

const teamById = new Map(team.map((member) => [member.id, member]));

interface ProjectTileProps {
  project: Project;
  href?: string;
  showStatus?: boolean;
  prominent?: boolean;
  preload?: boolean;
  prefetch?: boolean;
}

export default function ProjectTile({
  project,
  href = `/proyectos/${project.id}`,
  showStatus = false,
  prominent = false,
  preload = false,
  prefetch,
}: ProjectTileProps) {
  const { locale, t } = useI18n();
  const title = locale === "en" ? project.nameEn ?? project.name : project.name;
  const headingId = `project-title-${project.id}`;
  const image = project.image === "/images/projects/default.png" ? undefined : project.image;
  const members = (project.team ?? []).flatMap((id) => {
    const member = teamById.get(id);
    return member ? [member.shortName ?? member.name.split(/\s+/).slice(0, 2).join(" ")] : [];
  });

  return (
    <li className={`flex min-w-0 ${prominent ? "sm:col-span-2 lg:col-span-3" : ""}`}>
      <Link
        href={href}
        aria-labelledby={headingId}
        prefetch={prefetch}
        className={`group flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-surface hover:border-control motion-safe:transition-colors ${prominent ? "sm:grid sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:grid-rows-[1fr_auto] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]" : ""}`}
      >
        {image && (
          <div className={`relative w-full overflow-hidden border-b border-line bg-surface ${prominent ? "aspect-[16/10] sm:row-span-2 sm:aspect-auto sm:min-h-96 sm:border-r sm:border-b-0" : "aspect-[2/1] sm:aspect-[16/10]"}`}>
            <Image
              src={image}
              alt=""
              fill
              sizes={prominent ? "(min-width: 1200px) 660px, (min-width: 1024px) 56vw, (min-width: 640px) 52vw, 100vw" : "(min-width: 1200px) 365px, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"}
              className="object-contain"
              preload={preload}
            />
          </div>
        )}

        <div className={`flex flex-1 flex-col px-4 pt-4 pb-3 ${prominent ? "sm:justify-center sm:px-6 sm:py-6 lg:px-8 lg:py-8" : "sm:px-5"}`}>
          <h2 id={headingId} className={`font-semibold leading-tight text-navy group-hover:underline group-hover:underline-offset-4 ${prominent ? "text-2xl text-balance lg:text-3xl" : "text-xl"}`}>
            {title}
          </h2>
          {(project.category || project.experimental || showStatus) && (
            <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 text-sm leading-snug text-muted">
              {project.category && <span>{t(`projects.categories.${project.category}`)}</span>}
              {project.experimental && <span className="font-semibold text-accent-dark">{t("projects.experiment")}</span>}
              {showStatus && (
                <span className="font-semibold text-accent-dark">
                  {project.category && <span aria-hidden="true" className="mr-2 font-normal">·</span>}
                  {t(`projects.status.${project.status}`)}
                </span>
              )}
            </p>
          )}
          <p className={`mt-2 leading-relaxed text-ink ${prominent ? "text-base" : "line-clamp-3 text-sm"}`}>{project.description[locale]}</p>
          {members.length > 0 && (
            <p className="mt-3 text-sm leading-snug text-muted">
              <strong className="font-semibold text-navy">{t("projects.actions.builtBy")}</strong>
              {" · "}{members.join(" · ")}
            </p>
          )}
        </div>

        <div className={`flex min-h-11 items-center justify-between gap-2 border-t border-line px-4 py-2.5 text-sm font-semibold text-navy group-hover:bg-paper ${prominent ? "sm:px-6 lg:px-8" : "sm:px-5"}`}>
          <span>{t("projects.viewProject")}</span>
          <svg aria-hidden="true" className="size-5 shrink-0 text-accent-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h15m-6-6 6 6-6 6" />
          </svg>
        </div>
      </Link>
    </li>
  );
}
