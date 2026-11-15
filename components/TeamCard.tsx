"use client";

import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/data/team";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

export default function TeamCard({ member }: { member: TeamMember }) {
  const { t, locale } = useI18n();
  const related = projects.filter((project) => project.team?.includes(member.id));
  const initials = member.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("");

  return (
    <article id={`member-${member.id}`} tabIndex={-1} className="flex gap-4 py-5 sm:gap-5">
      <div className="flex size-15 shrink-0 items-center justify-center overflow-hidden rounded-md bg-sand font-semibold text-navy sm:size-20">
        {member.photo ? (
          <Image src={member.photo} alt="" width={160} height={160} sizes="(min-width: 640px) 80px, 60px" className="size-full object-cover object-top" />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold leading-tight text-navy">{member.name}</h3>
        <p className="mt-1 leading-snug text-ink">{member.title[locale]}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{member.focus[locale]}</p>
        {(member.bio || related.length > 0 || member.github || member.linkedin) && (
          <details className="mt-1.5">
            <summary className="min-h-11 py-2.5 text-sm font-semibold text-navy">
              {" "}{t("team.profile")}
            </summary>
            {member.bio && <p className="max-w-[68ch] text-[15px] leading-relaxed">{member.bio[locale]}</p>}
            {related.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-semibold">{t("team.projects")}</p>
                <ul className="mt-1 space-y-1.5 text-sm">
                  {related.map((project) => (
                    <li key={project.id}>
                      <Link href={`/proyectos/${project.id}`} className="text-link" prefetch={false}>
                        {locale === "en" ? project.nameEn ?? project.name : project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(member.github || member.linkedin) && (
              <div className="mt-2 flex flex-wrap gap-x-4 text-sm">
                {member.github && <a className="text-link inline-flex min-h-11 items-center" href={member.github}>GitHub</a>}
                {member.linkedin && <a className="text-link inline-flex min-h-11 items-center" href={member.linkedin}>LinkedIn</a>}
              </div>
            )}
          </details>
        )}
      </div>
    </article>
  );
}
