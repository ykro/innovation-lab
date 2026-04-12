"use client";

import { useState } from "react";
import Image from "next/image";
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

function Avatar({ member, size }: { member: TeamMember; size: "lg" | "sm" }) {
  const dim = size === "lg" ? "h-28 w-28" : "h-14 w-14";
  const text = size === "lg" ? "text-2xl" : "text-sm";
  const rounded = size === "lg" ? "rounded-2xl" : "rounded-xl";

  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        width={size === "lg" ? 112 : 56}
        height={size === "lg" ? 112 : 56}
        className={`${dim} ${rounded} object-cover`}
      />
    );
  }

  return (
    <div
      className={`${dim} ${rounded} flex flex-shrink-0 items-center justify-center bg-navy/8 ${text} font-medium text-navy/50`}
    >
      {getInitials(member.name)}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamCard({
  member,
  featured,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  const { locale, t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const hasBio = member.bio && member.bio[locale];

  if (featured) {
    return (
      <div className="animate-on-scroll mx-auto mb-12 max-w-2xl rounded-2xl border border-border-light bg-white p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <Avatar member={member} size="lg" />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-navy">{member.name}</h3>
            <p className="mb-2 text-sm font-medium text-slate-secondary">
              {t("team.director")}
            </p>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-navy/60 transition-colors hover:text-navy"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            )}

            {hasBio && (
              <>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mb-2 block text-sm font-medium text-accent-cyan transition-colors hover:text-navy"
                >
                  {expanded ? t("team.hideBio") : t("team.showBio")}
                </button>
                {expanded && (
                  <p className="text-sm leading-relaxed text-slate-secondary">
                    {member.bio![locale]}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-on-scroll flex flex-col items-center rounded-xl bg-white p-4 text-center transition-colors hover:bg-light-bg">
      <div className="mb-2">
        <Avatar member={member} size="sm" />
      </div>
      <h3 className="text-sm font-bold text-navy">{member.name}</h3>
      <p className="text-xs text-slate-secondary">{t("team.assistant")}</p>

      <div className="mt-1.5 flex items-center gap-2">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/40 transition-colors hover:text-navy"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedInIcon />
          </a>
        )}
      </div>

      {hasBio && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1.5 text-xs font-medium text-accent-cyan transition-colors hover:text-navy"
          >
            {expanded ? t("team.hideBio") : t("team.showBio")}
          </button>
          {expanded && (
            <p className="mt-2 text-xs leading-relaxed text-slate-secondary">
              {member.bio![locale]}
            </p>
          )}
        </>
      )}
    </div>
  );
}
