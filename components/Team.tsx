"use client";

import { useI18n } from "@/lib/i18n";
import { team } from "@/data/team";
import TeamCard from "./TeamCard";

export default function Team() {
  const { t } = useI18n();

  return (
    <section id="equipo" aria-labelledby="team-title" className="border-b border-line">
      <div className="shell section-space">
        <h2 id="team-title" className="section-title">{t("team.title")}</h2>
        <ul className="mt-6 grid items-start gap-x-8 lg:grid-cols-2">
          {team.map((member) => (
            <li key={member.id} className="min-w-0 border-t border-line">
              <TeamCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
