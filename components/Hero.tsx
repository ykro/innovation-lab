"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-secondary">
          {t("hero.subtitle")}
        </p>

        <h1 className="mb-5 text-5xl font-bold tracking-tight text-navy sm:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>

        <p className="mb-6 text-xl font-light text-navy/50 italic sm:text-2xl">
          {t("hero.tagline")}
        </p>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-secondary sm:text-lg">
          {t("hero.description")}
        </p>

        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 rounded-[14px] bg-navy px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
        >
          {t("hero.cta")}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>

        <div className="mt-12">
          <Image
            src="/images/logo-mobile.png"
            alt="Innovation Lab"
            width={40}
            height={40}
            className="mx-auto h-10 w-10 object-contain invert opacity-30"
            priority
          />
        </div>
      </div>
    </section>
  );
}
