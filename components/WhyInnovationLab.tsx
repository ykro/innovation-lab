"use client";

import { useI18n } from "@/lib/i18n";

export default function WhyInnovationLab() {
  const { t } = useI18n();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="animate-on-scroll mb-8 text-3xl font-bold text-navy sm:text-4xl">
          {t("why.title")}
        </h2>
        <div className="space-y-6">
          <p className="animate-on-scroll text-base leading-relaxed text-slate-body sm:text-lg">
            {t("why.p1")}
          </p>
          <p className="animate-on-scroll text-base leading-relaxed text-slate-body sm:text-lg">
            {t("why.p2")}
          </p>
          <p className="animate-on-scroll text-base leading-relaxed text-slate-body sm:text-lg">
            {t("why.p3")}
          </p>
        </div>
      </div>
    </section>
  );
}
