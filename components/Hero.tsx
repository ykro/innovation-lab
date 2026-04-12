"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-secondary">
              {t("hero.subtitle")}
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>

            <p className="mb-4 text-lg font-light text-navy/60 sm:text-xl italic">
              {t("hero.tagline")}
            </p>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-secondary sm:text-lg lg:mx-0 mx-auto">
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

          <div className="flex-shrink-0">
            <Image
              src="/images/logo-mobile.png"
              alt="Innovation Lab Logo"
              width={240}
              height={240}
              className="h-48 w-48 object-contain invert opacity-90 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
