"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-surface">
      <div className="shell flex flex-wrap items-start justify-between gap-x-10 gap-y-4 py-6 text-sm text-muted">
        <div className="max-w-xl">
          <p className="font-semibold text-navy">Innovation Lab</p>
          <p className="mt-1">{t("footer.affiliation")}</p>
        </div>
        <p>© 2012–{new Date().getUTCFullYear()} Innovation Lab</p>
      </div>
    </footer>
  );
}
