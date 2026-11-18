"use client";

import LabPhotoFigure from "@/components/LabPhotoFigure";
import ProjectTile from "@/components/ProjectTile";
import type { LabClub } from "@/data/ecosystem";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

export default function ClubDetail({ club }: { club: LabClub }) {
  const { t, locale } = useI18n();
  const relatedProjects = projects.filter(({ id }) => club.projectIds.includes(id));
  const contactHref = `mailto:innovationlab@galileo.edu?subject=${encodeURIComponent(`${t("clubs.contactSubject")} ${club.name[locale]}`)}`;

  return (
    <main id="main-content" tabIndex={-1} className="shell section-space flex-1">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Use native fragment navigation to avoid duplicate hashes on return. */}
      <a href="/#clubes" className="text-link mb-6 inline-flex min-h-11 items-center">{t("clubs.back")}</a>
      <div className={club.photo ? "grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14" : "max-w-3xl"}>
        <div>
          <h1 className="section-title">{club.name[locale]}</h1>
          {club.planned && <p className="mt-3 font-semibold text-accent-dark">{t("clubs.planned")}</p>}
          <p className="intro mt-4">{club.description[locale]}</p>
          <p className="mt-5 text-sm text-ink">
            <strong className="font-semibold text-navy">{t("workLines.coordinator")}</strong>{" · "}{club.coordinator}
          </p>
          <a href={contactHref} className="action action-primary mt-5">{t("clubs.contact")}</a>
        </div>
        {club.photo && <LabPhotoFigure photo={club.photo} />}
      </div>

      <section aria-labelledby="club-activities-title" className="mt-12 border-t border-line pt-8">
        <h2 id="club-activities-title" className="text-2xl font-semibold text-navy">{t("clubs.activities")}</h2>
        <ul className="mt-4 max-w-[65ch] list-disc space-y-3 pl-5 leading-relaxed marker:text-accent-dark">
          {club.activities.map((activity) => <li key={activity.es}>{activity[locale]}</li>)}
        </ul>
      </section>

      {club.coverage && (
        <section aria-labelledby="club-coverage-title" className="mt-10 border-t border-line pt-8">
          <h2 id="club-coverage-title" className="text-2xl font-semibold text-navy">{t("clubs.coverage")}</h2>
          <h3 className="mt-4 text-lg font-semibold text-navy">{club.coverage.title[locale]} · {club.coverage.year}</h3>
          <p className="mt-3 max-w-[65ch] leading-relaxed">{club.coverage.summary[locale]}</p>
          <a href={club.coverage.url} className="text-link mt-3 inline-flex min-h-11 items-center">{t("events.readCoverage")}</a>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section aria-labelledby="club-projects-title" className="mt-10 border-t border-line pt-8">
          <h2 id="club-projects-title" className="text-2xl font-semibold text-navy">{t("clubs.projects")}</h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => <ProjectTile key={project.id} project={project} />)}
          </ul>
        </section>
      )}
    </main>
  );
}
