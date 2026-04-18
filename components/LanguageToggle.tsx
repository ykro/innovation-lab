"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 font-mono text-[11px] text-navy transition-opacity hover:opacity-70"
      aria-label={
        locale === "es" ? "Switch to English" : "Cambiar a Espanol"
      }
    >
      <span className={locale === "es" ? "opacity-100" : "opacity-35"}>
        ES
      </span>
      <span className="text-navy/20">/</span>
      <span className={locale === "en" ? "opacity-100" : "opacity-35"}>
        EN
      </span>
    </button>
  );
}
