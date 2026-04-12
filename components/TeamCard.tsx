"use client";

import { useI18n } from "@/lib/i18n";
import type { TeamMember } from "@/data/team";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamCard({
  member,
  featured,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  const { locale, t } = useI18n();

  if (featured) {
    return (
      <div className="animate-on-scroll mx-auto mb-12 max-w-2xl rounded-2xl border border-border-light bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-light text-2xl font-bold text-white">
            {getInitials(member.name)}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-navy">{member.name}</h3>
            <p className="mb-3 text-sm font-medium text-accent-cyan">
              {t("team.director")}
            </p>
            {member.bio && (
              <p className="mb-3 text-sm leading-relaxed text-slate-secondary">
                {member.bio[locale]}
              </p>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-accent-blue"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-on-scroll flex flex-col items-center rounded-2xl border border-border-light bg-white p-5 text-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-navy/10 to-accent-cyan/10 text-base font-bold text-navy">
        {getInitials(member.name)}
      </div>
      <h3 className="text-sm font-bold text-navy">{member.name}</h3>
      <p className="text-xs text-slate-secondary">{t("team.assistant")}</p>
    </div>
  );
}
