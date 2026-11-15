"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  { name: "githubLab", url: "https://github.com/innovationlabug" },
  { name: "Instagram", url: "https://www.instagram.com/innovationlabug/" },
  { name: "Facebook", url: "https://www.facebook.com/InnovationLabUG" },
  { name: "X", url: "https://x.com/InnovationLabUG" },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC1_c36qbHQRF7TCLaMkGD_A",
  },
  { name: "Linktree", url: "https://linktr.ee/innovationlabug" },
];

export default function Social() {
  const { t } = useI18n();

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="border-b border-line bg-sand"
    >
      <div className="shell py-10 sm:py-14">
        <div>
          <h2 id="contact-title" className="section-title">
            {t("social.title")}
          </h2>
          <p className="intro mt-4">{t("social.description")}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="mailto:innovationlab@galileo.edu"
              className="action action-primary"
            >
              {t("social.action")}
            </a>
            <Link
              href="/#voluntariado"
              className="text-link inline-flex min-h-11 items-center text-sm"
            >
              {t("social.volunteer")}
            </Link>
          </div>
        </div>
        <nav
          aria-label={t("social.links")}
          className="mt-4 border-t border-line pt-2 text-sm"
        >
          <ul className="flex flex-wrap gap-x-5">
            {socialLinks.map(({ name, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link inline-flex min-h-11 items-center"
                >
                  {name === "githubLab" ? t(`social.${name}`) : name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
