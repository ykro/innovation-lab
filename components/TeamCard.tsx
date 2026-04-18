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

function Avatar({ member, featured }: { member: TeamMember; featured?: boolean }) {
  const dim = featured ? "h-32 w-32 sm:h-40 sm:w-40" : "h-28 w-28";
  const px = featured ? 160 : 112;

  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        width={px}
        height={px}
        className={`${dim} flex-shrink-0 object-cover grayscale-[0.15] saturate-[0.85]`}
      />
    );
  }

  return (
    <div
      className={`${dim} flex flex-shrink-0 items-center justify-center bg-paper font-mono text-xl text-navy/40 ring-1 ring-inset ring-hairline`}
    >
      {getInitials(member.name)}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamCard({
  member,
  featured,
  index,
}: {
  member: TeamMember;
  featured?: boolean;
  index?: number;
}) {
  const { locale, t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const hasBio = member.bio && member.bio[locale];

  const indexLabel = index !== undefined ? String(index).padStart(2, "0") : "";
  const roleLabel = featured ? t("team.director") : t("team.assistant");

  return (
    <article
      className={`group relative flex flex-col gap-6 border border-hairline bg-paper p-6 transition-colors hover:border-navy/30 sm:flex-row sm:items-start sm:gap-8 sm:p-8 ${
        featured ? "bg-paper" : ""
      }`}
    >
      <Avatar member={member} featured={featured} />

      <div className="flex-1 min-w-0">
        <div className="meta mb-2 flex items-baseline gap-2">
          {indexLabel && (
            <span className="tabular-nums text-navy/40">{indexLabel}</span>
          )}
          <span>{roleLabel}</span>
        </div>

        <h3
          className={`display-soft text-navy ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {member.name}
        </h3>

        <div className="mt-3 flex items-center gap-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-navy/60 transition-colors hover:text-navy"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
          {hasBio && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.06em] text-navy/60 transition-colors hover:text-navy"
            >
              <span className="text-navy/40">{expanded ? "−" : "+"}</span>
              {expanded ? t("team.hideBio") : t("team.showBio")}
            </button>
          )}
        </div>

        {hasBio && (
          <div
            className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
            style={{
              gridTemplateRows: expanded ? "1fr" : "0fr",
            }}
          >
            <div className="min-h-0">
              <p className="mt-4 border-l-2 border-hairline-strong pl-4 text-sm leading-relaxed text-ink-muted">
                {member.bio![locale]}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
