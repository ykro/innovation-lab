"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      {/* Decorative geometric shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-accent-blue/8 to-accent-cyan/8" />
        <div className="absolute right-1/4 top-1/3 h-4 w-4 rotate-45 bg-accent-cyan/20" />
        <div className="absolute left-1/3 top-1/4 h-3 w-3 rounded-full bg-accent-blue/20" />
        <div className="absolute bottom-1/3 right-1/3 h-6 w-6 rotate-12 border-2 border-navy/10" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-light bg-light-bg px-4 py-1.5 text-xs font-medium text-slate-secondary">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-cyan" />
          {t("hero.subtitle")}
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>

        <p className="mb-4 text-lg font-medium text-navy/70 sm:text-xl">
          {t("hero.tagline")}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-secondary sm:text-lg">
          {t("hero.description")}
        </p>

        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 rounded-[14px] bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
        >
          {t("hero.cta")}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
