"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();
  const next = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      lang={next}
      aria-label={next === "en" ? "Switch to English" : "Cambiar a español"}
      className="min-h-11 min-w-11 cursor-pointer rounded-md border border-line px-2 text-sm font-semibold text-navy hover:border-control"
    >
      {next.toUpperCase()}
    </button>
  );
}
