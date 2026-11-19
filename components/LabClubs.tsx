"use client";

import Image from "next/image";
import Link from "next/link";
import { labClubs } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

export default function LabClubs() {
  const { t, locale } = useI18n();

  return (
    <section id="clubes" aria-labelledby="clubs-title" className="border-b border-line bg-sand">
      <div className="shell section-space">
        <h2 id="clubs-title" className="text-2xl font-semibold text-navy">
          {t("workLines.clubsTitle")}
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {labClubs.map((club) => (
            <li key={club.id} className="flex min-w-0">
              <Link
                href={`/clubes/${club.slug}`}
                aria-labelledby={`club-title-${club.id}`}
                className="group flex w-full flex-col overflow-hidden rounded-xl border border-line bg-surface hover:border-control"
              >
                {club.photo && (
                  <div className="relative aspect-[16/10] border-b border-line bg-surface">
                    <Image
                      src={club.photo.src}
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 270px, (min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 id={`club-title-${club.id}`} className="text-base font-semibold leading-snug text-navy group-hover:underline group-hover:underline-offset-4">
                    {club.name[locale]}
                  </h3>
                  {club.planned && <p className="mt-2 text-sm font-semibold text-accent-dark">{t("clubs.planned")}</p>}
                  <p className="mt-2 mb-4 text-sm leading-relaxed text-ink">
                    {club.description[locale]}
                  </p>
                  <p className="mt-auto border-t border-line pt-3 text-xs text-muted">
                    <strong className="font-semibold text-navy">{t("workLines.coordinator")}</strong>{" · "}{club.coordinator}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-accent-dark">{t("clubs.details")}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
