"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { key: "nav.whatWeDo", href: "#que-hacemos" },
  { key: "nav.projects", href: "#proyectos" },
  { key: "nav.team", href: "#equipo" },
  { key: "nav.contact", href: "#contacto" },
];

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo-mobile.png"
            alt="Innovation Lab"
            width={36}
            height={36}
            className="h-9 w-9 object-contain invert"
          />
          <span className="hidden text-sm font-bold text-navy sm:block">
            Innovation Lab
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-secondary transition-colors hover:text-navy"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-navy"
            aria-label="Menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border-light bg-white px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-slate-secondary transition-colors hover:text-navy"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
