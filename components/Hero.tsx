"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/data/projects";
import { team } from "@/data/team";

export default function Hero() {
  const { t } = useI18n();

  const activeProjects = projects.filter(
    (p) => p.status === "in_progress"
  ).length;
  const totalProjects = projects.filter((p) => p.status !== "archived").length;
  const totalTeam = team.length;

  const specs = [
    { label: "lat", value: "14.6041° N" },
    { label: "lon", value: "90.4878° W" },
    { label: t("hero.specs.founded"), value: "2015" },
    { label: t("hero.specs.team"), value: String(totalTeam).padStart(2, "0") },
    {
      label: t("hero.specs.active"),
      value: `${String(activeProjects).padStart(2, "0")}/${String(totalProjects).padStart(2, "0")}`,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="stagger grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <div className="meta mb-6 flex items-baseline gap-3">
              <span>§ 01</span>
              <span className="h-px w-8 bg-navy/30" />
              <span>{t("hero.subtitle")}</span>
            </div>

            <h1 className="display mb-6 text-[clamp(3.5rem,9vw,7rem)] text-navy">
              Innovation
              <br />
              <span className="italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                Lab
              </span>
              <span className="text-navy/30">.</span>
            </h1>

            <p className="max-w-xl text-[17px] leading-relaxed text-ink sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 border-b-2 border-navy pb-1 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-navy transition-opacity hover:opacity-70"
              >
                <span className="text-navy/40">→</span>
                {t("hero.cta")}
              </a>
              <a
                href="#equipo"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted transition-colors hover:text-navy"
              >
                {t("hero.ctaTeam")}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:min-w-[260px]">
            <div className="tick-corners border border-hairline-strong bg-paper-deep px-6 py-6">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/logo-mobile.png"
                  alt="Innovation Lab"
                  width={200}
                  height={200}
                  className="h-40 w-40 object-contain invert sm:h-48 sm:w-48"
                  priority
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/50 text-center">
                  fig. 01 — lab mark
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 border-l border-hairline-strong pl-6 font-mono text-[12px]">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-6"
                >
                  <dt className="text-navy/45 uppercase tracking-[0.08em]">
                    {s.label}
                  </dt>
                  <dd className="text-navy tabular-nums">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Footnote / lab motto */}
        <p className="mt-16 max-w-sm font-mono text-[11px] leading-relaxed text-navy/50">
          <span className="text-navy">*</span> {t("hero.footnote")}
        </p>
      </div>

      {/* Corner ticks */}
      <svg
        className="absolute left-4 top-4 text-navy/30"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        aria-hidden
      >
        <path d="M0 0 L12 0 M0 0 L0 12" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg
        className="absolute right-4 top-4 text-navy/30"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        aria-hidden
      >
        <path d="M0 0 L12 0 M12 0 L12 12" stroke="currentColor" strokeWidth="1" />
      </svg>
    </section>
  );
}
