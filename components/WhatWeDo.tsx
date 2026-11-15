"use client";

import Link from "next/link";
import { labClubs, labTimeline } from "@/data/ecosystem";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

const areas = [
  { key: "agentic", projectId: "split-brain-suite" },
  { key: "multimodal", projectId: "tzij-kiche-gemma" },
  { key: "robotics", projectId: "rosorin-physical-ai" },
  { key: "iot", projectId: "comunicacion-obd2-con-vehiculo-mvp" },
  { key: "creative", projectId: "preconsulta-medica-ai" },
  { key: "vision", projectId: "chess-detection-cv" },
];

export default function WhatWeDo() {
  const { t, locale } = useI18n();

  return (
    <section
      id="sobre-el-lab"
      aria-labelledby="about-title"
      className="border-b border-line bg-sand"
    >
      <div className="shell section-space">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              {t("about.overline")}
            </p>
            <h2 id="about-title" className="section-title mt-1.5">
              {t("about.title")}
            </h2>
          </div>
          <div>
            <p className="intro text-ink">{t("about.intro")}</p>
            <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted">
              {t("about.historyIntro")}
            </p>
          </div>
        </div>

        {/* Trajectory / History since December 2012 */}
        <div className="mt-10 border-t border-line pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
            {t("about.historyTitle")}
          </h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {labTimeline.map((item) => (
              <li
                key={item.year}
                className="rounded-xl border border-line bg-surface p-5"
              >
                <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                  <span className="font-mono text-accent-dark">{item.year}</span>
                  <span className="text-muted">{item.era[locale]}</span>
                </div>
                <h4 className="mt-2.5 text-base font-semibold leading-snug text-navy">
                  {item.title[locale]}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {item.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* 6 Active Areas + Student Clubs */}
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
              {t("about.research")}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {areas.map(({ key, projectId }) => {
                const project = projects.find(
                  (entry) => entry.id === projectId
                )!;
                return (
                  <li
                    key={key}
                    className="rounded-lg border border-line bg-surface p-4"
                  >
                    <h4 className="font-semibold text-navy">
                      {t(`about.areas.${key}.title`)}
                    </h4>
                    <Link
                      className="text-link mt-1.5 inline-block text-sm"
                      href={`/proyectos/${projectId}`}
                    >
                      {locale === "en"
                        ? (project.nameEn ?? project.name)
                        : project.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">
              {t("about.clubsTitle")}
            </h3>
            <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface px-4">
              {labClubs.map((club) => (
                <li key={club.id} className="py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold text-navy">
                      {club.name[locale]}
                    </h4>
                    <span className="text-xs font-medium text-muted">
                      {club.coordinator}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {club.description[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
