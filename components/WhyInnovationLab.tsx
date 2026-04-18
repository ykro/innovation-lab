"use client";

import { useI18n } from "@/lib/i18n";

export default function WhyInnovationLab() {
  const { t } = useI18n();

  return (
    <section className="relative border-b border-hairline bg-paper-deep px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
        <header className="reveal lg:sticky lg:top-24 lg:self-start">
          <div className="meta mb-4 flex items-baseline gap-3">
            <span>§ 03</span>
            <span className="h-px w-8 bg-navy/30" />
            <span>{t("why.overline")}</span>
          </div>
          <h2 className="display-soft max-w-sm text-[clamp(2rem,4.5vw,3rem)] text-navy">
            {t("why.title")}
          </h2>
        </header>

        <div className="reveal max-w-2xl space-y-6">
          <p className="text-lg leading-[1.7] text-ink first-letter:display first-letter:mr-2 first-letter:float-left first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-navy">
            {t("why.p1")}
          </p>
          <p className="text-[17px] leading-[1.7] text-ink">{t("why.p2")}</p>
          <p className="text-[17px] leading-[1.7] text-ink">{t("why.p3")}</p>

          <p className="mt-10 border-l-2 border-navy pl-5 font-mono text-xs uppercase tracking-[0.08em] text-navy/60">
            {t("why.attribution")}
          </p>
        </div>
      </div>
    </section>
  );
}
