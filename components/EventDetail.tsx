"use client";

import Image from "next/image";
import type { LabEvent } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

export default function EventDetail({ event }: { event: LabEvent }) {
  const { t, locale } = useI18n();

  return (
    <main id="main-content" tabIndex={-1} className="shell section-space flex-1">
      <div className={event.photo ? "grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14" : ""}>
        <div>
          <h1 className="page-title">{event.name[locale]}</h1>
          <p className="intro mt-4">{event.description[locale]}</p>

          <section aria-labelledby="event-editions-title" className="mt-8 border-t border-line pt-5">
            <h2 id="event-editions-title" className="text-lg font-semibold text-navy">{t("events.editions")}</h2>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Use native fragment navigation to avoid duplicate hashes on return. */}
            <a
              href="/#eventos"
              aria-label={`2026 · ${t("events.editionLink")}`}
              className="action action-primary mt-3"
            >
              2026
            </a>
          </section>
        </div>

        {event.photo && (
          <figure className="min-w-0">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-sand">
              <Image
                src={event.photo.src}
                alt=""
                fill
                sizes="(min-width: 1200px) 520px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-muted">
              {event.photo.caption[locale]}{" "}
              <a href={event.photo.source} className="text-link">{t("events.photoCredit")}</a>
            </figcaption>
          </figure>
        )}
      </div>
    </main>
  );
}
