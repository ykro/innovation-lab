"use client";

import LabPhotoFigure from "@/components/LabPhotoFigure";
import type { LabEvent } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

export default function EventDetail({ event }: { event: LabEvent }) {
  const { t, locale } = useI18n();

  return (
    <main id="main-content" tabIndex={-1} className="shell section-space flex-1">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Use native fragment navigation to avoid duplicate hashes on return. */}
      <a href="/#eventos" className="text-link mb-6 inline-flex min-h-11 items-center">
        {t("events.back")}
      </a>
      <div className={event.photo ? "grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14" : ""}>
        <div>
          <h1 className="section-title">{event.name[locale]}</h1>
          <p className="intro mt-4">{event.description[locale]}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={`mailto:innovationlab@galileo.edu?subject=${encodeURIComponent(`${t("events.contactSubject")} ${event.name[locale]}`)}`}
              className="text-link inline-flex min-h-11 items-center"
            >
              {t("events.contact")}
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Use native fragment navigation to avoid duplicate hashes on return. */}
            <a
              href="/#eventos"
              aria-label={`2026 · ${t("events.editionLink")}`}
              className="action"
            >
              2026
            </a>
          </div>
        </div>

        {event.photo && <LabPhotoFigure photo={event.photo} />}
      </div>

      <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <section aria-labelledby="event-about-title">
            <h2 id="event-about-title" className="text-2xl font-semibold text-navy">{t("events.about")}</h2>
            <p className="mt-3 max-w-[65ch] leading-relaxed">{event.overview[locale]}</p>
          </section>
          <section aria-labelledby="event-audience-title" className="mt-8">
            <h2 id="event-audience-title" className="text-2xl font-semibold text-navy">{t("events.audience")}</h2>
            <p className="mt-3 max-w-[65ch] leading-relaxed">{event.audience[locale]}</p>
          </section>
        </div>
        <section aria-labelledby="event-topics-title">
          <h2 id="event-topics-title" className="text-2xl font-semibold text-navy">{t("events.topics")}</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed marker:text-accent-dark">
            {event.topics.map((topic) => <li key={topic.es}>{topic[locale]}</li>)}
          </ul>
        </section>
      </div>

      <section aria-labelledby="event-coverage-title" className="mt-12 border-t border-line pt-8">
        <h2 id="event-coverage-title" className="text-2xl font-semibold text-navy">{t("events.coverage")}</h2>
        <h3 className="mt-4 text-lg font-semibold text-navy">{event.coverage.title[locale]} · {event.coverage.year}</h3>
        <p className="mt-3 max-w-[65ch] leading-relaxed">{event.coverage.summary[locale]}</p>
        <a href={event.coverage.url} className="text-link mt-3 inline-flex min-h-11 items-center">
          {t("events.readCoverage")}
        </a>
      </section>
    </main>
  );
}
