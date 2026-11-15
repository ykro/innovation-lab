"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";

export default function ProjectDetail({ project }: { project: Project }) {
  const { locale, t } = useI18n();
  const name = locale === "en" ? project.nameEn ?? project.name : project.name;
  const members = team.filter((member) => project.team?.includes(member.id));
  const sourceLinks = [
    ...(project.demoUrl ? [{ url: project.demoUrl, label: t("projects.actions.liveDemo") }] : []),
    ...(project.repo ? [{ url: project.repo, label: t("projects.actions.viewRepo") }] : []),
    ...(project.links ?? []).map(({ url, label, labelEn }) => ({ url, label: locale === "en" ? labelEn ?? label : label })),
  ];
  // Prefer a specific link label when it shares the demo or repository URL.
  const links = [...new Map(sourceLinks.map((link) => [link.url, link])).values()];
  const date = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${project.date}-01T00:00:00Z`));

  return (
    <main id="main-content" tabIndex={-1} className="shell section-space flex-1">
      <Link href="/proyectos" className="text-link mb-6 inline-flex min-h-11 items-center">
        {t("projects.back")}
      </Link>
      <h1 className="section-title max-w-4xl">{name}</h1>
      <p className="mt-4 text-sm font-semibold text-muted">
        {t(`projects.status.${project.status}`)} · <time dateTime={project.date}>{date}</time>
        {project.category && <> · {t(`projects.categories.${project.category}`)}</>}
      </p>
      {project.challengeBadge && <p className="mt-2 text-sm font-semibold text-muted">{project.challengeBadge[locale]}</p>}
      <p className="intro mt-5">{project.description[locale]}</p>
      {links.length > 0 && (
        <ul aria-label={t("projects.actions.resources")} className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
          {links.map(({ url, label }, index) => (
            <li key={url}>
              <a className={index === 0 ? "action action-primary" : "text-link inline-flex min-h-11 items-center"} href={url}>{label}</a>
            </li>
          ))}
        </ul>
      )}
      {project.archivedDemoUrl && <p className="mt-3 text-sm text-muted">{t("projects.actions.demoUnavailable")}</p>}
      <div className="mt-9 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          {project.image && project.image !== "/images/projects/default.png" && (
            <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-xl border border-line bg-sand">
              <Image src={project.image} alt={name} fill sizes="(min-width: 1200px) 760px, (min-width: 1024px) 62vw, 100vw" className="object-contain" />
            </div>
          )}
          {project.longDescription && (
            <section aria-labelledby="detail-title">
              <h2 id="detail-title" className="text-2xl font-semibold text-navy">{t("projects.actions.detail")}</h2>
              <p className="mt-3 max-w-[68ch] leading-relaxed">{project.longDescription[locale]}</p>
            </section>
          )}
        </div>
        <aside className="space-y-6">
          {members.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-navy">{t("projects.actions.builtBy")}</h2>
              <ul className="mt-2 space-y-1">
                {members.map((member) => (
                  <li key={member.id}>
                    <a href={`/#member-${member.id}`} className="text-link">{member.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold text-navy">{t("projects.actions.technologies")}</h2>
            <p className="mt-2 leading-relaxed">{project.technologies.join(" · ")}</p>
          </div>
        </aside>
      </div>
      {Boolean(project.gallery?.length) && (
        <section aria-labelledby="gallery-title" className="mt-10 border-t border-line pt-8">
          <h2 id="gallery-title" className="text-2xl font-semibold text-navy">{t("projects.actions.gallery")}</h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery?.map(({ src, caption }) => (
              <li key={src}>
                <a href={src} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-sand">
                    <Image src={src} alt="" fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw" className="object-contain" />
                  </div>
                  <span className="text-link mt-2 block">{caption[locale]}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
