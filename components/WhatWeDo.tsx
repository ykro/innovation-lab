"use client";

import { useI18n } from "@/lib/i18n";
import { projects } from "@/data/projects";

const areas = [
  { key: "agentic", sampleIds: ["prototipo-auditor-de-codigo", "fork-it"] },
  { key: "multimodal", sampleIds: ["experimentos-gemini-motion-manga", "experimentos-gemini-panel-one"] },
  { key: "robotics", sampleIds: ["control-brazo-robotico-negro", "mano-robotica"] },
  { key: "iot", sampleIds: ["boton-iot", "proyecto-camaleon"] },
  { key: "creative", sampleIds: ["experimentos-gemini-cosmic-oracle", "totito"] },
  { key: "vision", sampleIds: ["comunicacion-obd2-con-vehiculo-mvp", "experimentos-gemini-run-sight"] },
];

export default function WhatWeDo() {
  const { t, locale } = useI18n();

  const sampleFor = (ids: string[]) => {
    const match = projects.find((p) => ids.includes(p.id));
    return match?.name ?? null;
  };

  return (
    <section
      id="que-hacemos"
      className="relative border-b border-hairline bg-paper px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-14 grid gap-4 lg:grid-cols-[auto_1fr] lg:items-baseline lg:gap-14">
          <div className="meta flex items-baseline gap-3">
            <span>§ 02</span>
            <span className="h-px w-8 bg-navy/30" />
            <span>{t("whatWeDo.overline")}</span>
          </div>
          <h2 className="display-soft max-w-3xl text-[clamp(2.25rem,5.5vw,3.75rem)] text-navy">
            {t("whatWeDo.title")}
          </h2>
        </header>

        <p className="reveal mb-12 max-w-3xl text-[17px] leading-relaxed text-ink lg:ml-[calc(6ch+6rem)] sm:text-lg">
          {t("whatWeDo.description")}
        </p>

        <ol className="reveal divide-y divide-hairline border-y border-hairline">
          {areas.map((area, i) => {
            const sample = sampleFor(area.sampleIds);
            return (
              <li
                key={area.key}
                className="group grid gap-2 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-navy/40 tabular-nums sm:w-14">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-soft text-2xl text-navy sm:text-3xl">
                    {t(`whatWeDo.areas.${area.key}.title`)}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-muted">
                    {t(`whatWeDo.areas.${area.key}.description`)}
                  </p>
                </div>
                {sample && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-navy/50 sm:text-right">
                    <span className="text-navy/30">
                      {locale === "es" ? "ej." : "e.g."}{" "}
                    </span>
                    {sample}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
