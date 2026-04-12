"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 rounded-full border border-border-light px-3 py-1.5 text-xs font-bold tracking-wide text-navy transition-colors hover:bg-light-bg"
      aria-label={
        locale === "es" ? "Switch to English" : "Cambiar a Espanol"
      }
    >
      <span className={locale === "es" ? "opacity-100" : "opacity-40"}>
        ES
      </span>
      <span className="text-border-light">/</span>
      <span className={locale === "en" ? "opacity-100" : "opacity-40"}>
        EN
      </span>
    </button>
  );
}
