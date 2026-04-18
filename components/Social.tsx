"use client";

import { useI18n } from "@/lib/i18n";

const socialLinks = [
  {
    name: "Facebook",
    handle: "@InnovationLabUG",
    url: "https://www.facebook.com/InnovationLabUG",
  },
  {
    name: "Instagram",
    handle: "@innovationlabug",
    url: "https://www.instagram.com/innovationlabug/",
  },
  {
    name: "X",
    handle: "@InnovationLabUG",
    url: "https://twitter.com/InnovationLabUG",
  },
  {
    name: "YouTube",
    handle: "Innovation Lab UG",
    url: "https://www.youtube.com/channel/UC1_c36qbHQRF7TCLaMkGD_A",
  },
  {
    name: "Linktree",
    handle: "innovationlabug",
    url: "https://linktr.ee/innovationlabug",
  },
];

export default function Social() {
  const { t } = useI18n();

  return (
    <section
      id="contacto"
      className="relative border-b border-hairline bg-paper px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-12 grid gap-4 lg:grid-cols-[auto_1fr] lg:items-baseline lg:gap-14">
          <div className="meta flex items-baseline gap-3">
            <span>§ 06</span>
            <span className="h-px w-8 bg-navy/30" />
            <span>{t("social.overline")}</span>
          </div>
          <h2 className="display-soft text-[clamp(2.25rem,5.5vw,3.75rem)] text-navy">
            {t("social.title")}
          </h2>
        </header>

        <div className="reveal grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <p className="mb-8 max-w-lg text-[17px] leading-relaxed text-ink">
              {t("social.description")}
            </p>

            <a
              href="mailto:innovationlab@galileo.edu"
              className="group inline-flex items-baseline gap-3 border-b-2 border-navy pb-1 font-mono text-[13px] uppercase tracking-[0.08em] text-navy transition-opacity hover:opacity-70"
            >
              <span className="text-navy/40">→</span>
              innovationlab@galileo.edu
            </a>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-navy/50">
              {t("social.ctaDescription")}
            </p>
          </div>

          <ul className="min-w-[260px] divide-y divide-hairline border-y border-hairline">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-8 py-3 font-mono text-[12px] uppercase tracking-[0.06em] transition-colors hover:text-navy"
                >
                  <span className="text-navy/60 group-hover:text-navy">
                    {link.name}
                  </span>
                  <span className="text-navy/40 group-hover:text-navy/70">
                    {link.handle} <span className="text-navy/30">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
