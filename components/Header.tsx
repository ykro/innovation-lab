"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { key: "nav.whatWeDo", href: "#que-hacemos", num: "02" },
  { key: "nav.projects", href: "#proyectos", num: "04" },
  { key: "nav.team", href: "#equipo", num: "05" },
  { key: "nav.contact", href: "#contacto", num: "06" },
];

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mobile.png"
            alt="Innovation Lab"
            width={28}
            height={28}
            className="h-7 w-7 object-contain invert"
          />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-navy">
            Innovation Lab
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:text-navy"
            >
              <span className="font-mono text-[10px] text-navy/40">
                {item.num}
              </span>
              {t(item.key)}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center text-navy"
            aria-label="Menu"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-paper px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-2 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-navy"
            >
              <span className="font-mono text-[10px] text-navy/40">
                {item.num}
              </span>
              {t(item.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
