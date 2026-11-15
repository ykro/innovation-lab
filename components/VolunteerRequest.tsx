"use client";

import { volunteerTracks } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

export default function VolunteerRequest() {
  const { t, locale } = useI18n();

  return (
    <section
      id="voluntariado"
      aria-labelledby="volunteers-title"
      className="border-b border-line bg-paper"
    >
      <div className="shell section-space">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              {t("volunteers.overline")}
            </p>
            <h2 id="volunteers-title" className="section-title mt-2">
              {t("volunteers.title")}
            </h2>
            <p className="intro mt-4 text-ink">
              {t("volunteers.intro")}
            </p>
          </div>
          <a
            href={`mailto:innovationlab@galileo.edu?subject=${encodeURIComponent(
              t("social.volunteerSubject")
            )}`}
            className="action action-primary"
          >
            {t("volunteers.cta")}
          </a>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {volunteerTracks.map((track) => (
            <li
              key={track.id}
              className="flex flex-col justify-between rounded-xl border border-line bg-surface p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-muted">
                  <span className="shrink-0 whitespace-nowrap rounded bg-sand px-2 py-0.5 font-mono text-[11px] text-navy">
                    {track.code}
                  </span>
                  <span className="truncate">{track.tag[locale]}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">
                  {track.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {track.description[locale]}
                </p>
              </div>
              <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-muted">
                <strong className="font-semibold text-navy">
                  {t("volunteers.deliverablesLabel")}:
                </strong>{" "}
                {track.deliverables[locale]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
