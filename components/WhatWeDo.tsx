"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { workLines } from "@/data/ecosystem";
import { projects, type ProjectCategory } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

const lineIcons: Record<ProjectCategory, ReactNode> = {
  physical_ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M12 4v4M9 13h.01M15 13h.01M9 16h6M3 11v4M21 11v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  iot_hardware: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  agents_llms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.8 7.2L6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  health_fintech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M3 12h4l2.5-6 4 12 2.5-6H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  vision_spatial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  nlp_generative: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M4 6h16M4 12h10M4 18h7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 14l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function WhatWeDo() {
  const { t, locale } = useI18n();

  return (
    <section
      id="lineas"
      aria-labelledby="work-lines-title"
      className="border-b border-line bg-sand"
    >
      <div className="shell section-space">
        <h2 id="work-lines-title" className="section-title">
          {t("workLines.title")}
        </h2>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workLines.map((line) => {
            const count = projects.filter((p) => p.category === line.id).length;

            return (
              <li key={line.id} className="flex">
                <Link
                  href={`/lineas/${line.slug}`}
                  className="group flex w-full flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-sand text-navy transition-colors group-hover:bg-navy group-hover:text-white"
                      >
                        {lineIcons[line.id]}
                      </span>
                      <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-navy">
                        {count} {t("projects.projectsCount")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-snug text-navy group-hover:underline group-hover:underline-offset-4">
                      {line.title[locale]}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink">
                      {line.description[locale]}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 text-xs font-semibold text-navy">
                    <span>{t("workLines.exploreLine")}</span>
                    <span className="text-accent-dark" aria-hidden="true">
                      →
                    </span>
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
