"use client";

import type { ReactNode } from "react";
import { majorEvents, type LabEvent } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

const eventIcons: Record<LabEvent["id"], ReactNode> = {
  iwd: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8-4.3-4.1 5.9-.9L12 3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "ai-dev": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "google-io": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M5 6v12M9.5 18l4-12" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.5" cy="12" r="3.5" />
    </svg>
  ),
  devfest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6">
      <path d="M4 7.5L9.5 12 4 16.5M20 7.5L14.5 12 20 16.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function MajorEvents() {
  const { t, locale } = useI18n();

  return (
    <section
      id="eventos"
      aria-labelledby="events-title"
      className="border-b border-line bg-sand"
    >
      <div className="shell section-space">
        <h2 id="events-title" className="section-title">
          {t("events.title")}
        </h2>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {majorEvents.map((event) => (
            <li
              key={event.id}
              className="flex flex-col rounded-xl border border-line bg-surface p-6"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-sand text-navy"
              >
                {eventIcons[event.id]}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-navy">
                {event.name[locale]}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink">
                {event.description[locale]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
