"use client";

import { labTimeline } from "@/data/ecosystem";
import { useI18n } from "@/lib/i18n";

export default function History() {
  const { t, locale } = useI18n();

  return (
    <section
      id="historia"
      aria-labelledby="history-title"
      className="border-b border-line bg-paper"
    >
      <div className="shell section-space">
        <h2 id="history-title" className="section-title">
          {t("history.title")}
        </h2>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {labTimeline.map((item) => (
            <li
              key={item.year}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <p className="font-mono text-sm font-semibold text-accent-dark">
                {item.year}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {item.text[locale]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
