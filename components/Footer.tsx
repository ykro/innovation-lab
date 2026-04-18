"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const meta = [
    { k: "loc", v: "Ciudad de Guatemala, GT" },
    { k: "coord", v: "14.6041° N, 90.4878° W" },
    { k: "dir", v: "Adrian Catalán" },
    { k: "est", v: "2015" },
    { k: "ver", v: `${year}.04` },
  ];

  return (
    <footer className="relative bg-paper-deep px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_auto] lg:items-end">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-mobile.png"
              alt="Innovation Lab"
              width={28}
              height={28}
              className="h-7 w-7 object-contain invert"
            />
            <div>
              <p className="display-soft text-xl text-navy leading-none">
                Innovation Lab
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-navy/50">
                {t("footer.affiliation")}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.06em] sm:grid-cols-3 lg:mx-auto lg:max-w-md">
            {meta.map((m) => (
              <div key={m.k} className="flex items-baseline gap-2">
                <dt className="text-navy/35">{m.k}</dt>
                <dd className="text-navy/70">{m.v}</dd>
              </div>
            ))}
          </dl>

          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-navy/40 lg:text-right">
            © {year} &nbsp;·&nbsp; {t("footer.rights")}
          </p>
        </div>

        <div className="mt-10 border-t border-hairline pt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-navy/40">
          §01 hero &nbsp;·&nbsp; §02 áreas &nbsp;·&nbsp; §03 lab &nbsp;·&nbsp; §04 proyectos &nbsp;·&nbsp; §05 equipo &nbsp;·&nbsp; §06 contacto
        </div>
      </div>
    </footer>
  );
}
