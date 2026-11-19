"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { key: "projects", href: "/proyectos" },
  { key: "workLines", href: "/#lineas" },
  { key: "aiPolicy", href: "/politica-ia" },
  { key: "team", href: "/#equipo" },
  { key: "events", href: "/#eventos" },
  { key: "volunteers", href: "/#voluntariado" },
  { key: "history", href: "/#historia" },
];

export default function Header() {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:px-4 focus:py-3"
      >
        {t("nav.skip")}
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-paper">
        <div className="shell flex min-h-[4.5rem] items-center justify-between gap-3">
          <Link
            href="/"
            className="flex min-h-11 min-w-0 items-center gap-2.5 text-navy"
          >
            <Image
              src="/images/logo-mobile.png"
              alt=""
              width={34}
              height={34}
              className="size-8 shrink-0 object-contain invert"
            />
            <span className="leading-tight">
              <strong className="block text-[15px]">Innovation Lab</strong>
              <span className="block text-xs text-muted">
                Universidad Galileo
              </span>
            </span>
          </Link>
          <nav
            aria-label={t("nav.primary")}
            className="ml-auto hidden items-center gap-5 lg:flex"
          >
            {navItems.map(({ key, href }) => (
              <Link
                className={`flex min-h-11 items-center whitespace-nowrap text-sm font-semibold hover:underline hover:underline-offset-4 ${
                  key === "volunteers" ? "text-accent-dark" : "text-navy"
                }`}
                href={href}
                key={key}
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 lg:ml-4">
            <LanguageToggle />
            <details
              className="lg:hidden"
              onKeyDown={(event) => {
                if (event.key === "Escape" && event.currentTarget.open) {
                  event.currentTarget.open = false;
                  event.currentTarget.querySelector("summary")?.focus();
                }
              }}
            >
              <summary className="flex min-h-11 list-none items-center px-2 text-sm font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {t("nav.menu")}
              </summary>
              <nav
                aria-label={t("nav.primary")}
                className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-surface"
              >
                <ul className="shell divide-y divide-line py-2">
                  {navItems.map(({ key, href }) => (
                    <li key={key}>
                      <Link
                        className="flex min-h-11 items-center py-2 font-semibold text-navy hover:underline"
                        href={href}
                        onClick={(event) => {
                          const menu = event.currentTarget.closest("details");
                          if (menu) menu.open = false;
                        }}
                      >
                        {t(`nav.${key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
